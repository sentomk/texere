#!/usr/bin/env python3
# Copyright 2026 The texere Authors.
# Licensed under the MIT License.
"""Generate the two-stage display-width lookup tables used by texere.

Consumes Unicode Character Database (UCD) files and emits
``src/width_tables.hpp`` in the two-stage layout pioneered by uni-algo:

    value(cp) = stage2[(stage1[cp >> 7] << 7) + (cp & 0x7F)]

Identical 128-code-point blocks are stored once in ``stage2``; ``stage1``
maps each block of the code space to its ``stage2`` block.

Inputs (pinned to one Unicode version, see --ucd-version):

* ``EastAsianWidth.txt``                    -- EAW property; ``@missing``
  annotations supply defaults for reserved (unassigned) ranges.
* ``emoji/emoji-data.txt``                  -- Emoji_Presentation,
  Extended_Pictographic and Emoji_Modifier_Base (UTS #51).
* ``emoji/emoji-variation-sequences.txt``   -- which code points FE0F/FE0E
  switch to emoji/text style (UTS #51 presentation/text sequences).
* ``DerivedCoreProperties.txt``             -- Default_Ignorable_Code_Point.
* ``extracted/DerivedGeneralCategory.txt``  -- General_Category, used to
  find zero-width classes (Mn, Me, Cf, Cc, Cs).

Emitted stage-2 value byte layout:

* bits 0-1 : base width class -- 0=zero, 1=narrow, 2=wide, 3=ambiguous
* bit  2   : Emoji_Presentation (defaults to emoji presentation, UTS #51)
* bit  3   : Extended_Pictographic (participates in emoji ZWJ sequences)
* bit  4   : Emoji_Modifier_Base (takes emoji skin-tone modifiers, UTS #51)
* bit  5   : starts an emoji presentation sequence (FE0F -> emoji style)
* bit  6   : starts a text presentation sequence (FE0E -> text style;
  Emoji_Presentation chars outside U+1F200..U+1F2FF, the Enclosed
  Ideographic Supplement, which stays wide either way)
* bit  7   : EAW=A with General_Category in {Lu, Ll, Lt, Lm, Lo, Sk} --
  letters and modifier symbols stay narrow even in a wide context
  (unicode-width rule; the runtime resolves it either way)

Base-class rules, in priority order:

1. General_Category in {Mn, Me, Cf, Cc, Cs}, or Default_Ignorable -> zero
2. Conjoining Hangul jamo vowels/finals (HangulSyllableType V/T ranges:
   U+1160..U+11FF, U+D7B0..U+D7FB) -> zero
3. EAW in {F, W} -> wide
4. EAW = A -> ambiguous (resolved by the caller's east-asian policy at
   runtime; the table never hard-codes a terminal assumption)
5. otherwise -> narrow

Usage:

    python3 gen/gen_width_tables.py --download --verify

``--download`` fetches any missing UCD files into ``gen/ucd/<version>/``
(the cache is git-ignored). ``--verify`` round-trips every code point
through the compressed tables and runs spot checks against known values.
"""

import argparse
import os
import re
import sys
import urllib.request

DEFAULT_UCD_VERSION = "15.1.0"
UCD_BASE_URL = "https://www.unicode.org/Public/{version}/ucd"
UCD_FILES = [
    "EastAsianWidth.txt",
    "emoji/emoji-data.txt",
    "emoji/emoji-variation-sequences.txt",
    "DerivedCoreProperties.txt",
    "extracted/DerivedGeneralCategory.txt",
]

CP_LIMIT = 0x110000
BLOCK_BITS = 7
BLOCK_SIZE = 1 << BLOCK_BITS  # 128 code points per stage-2 block
STAGE1_SIZE = CP_LIMIT >> BLOCK_BITS  # 8704

# Base width classes (stage-2 value, bits 0-1).
BASE_ZERO = 0
BASE_NARROW = 1
BASE_WIDE = 2
BASE_AMBIGUOUS = 3

# Stage-2 value flag bits.
FLAG_EMOJI_PRESENTATION = 1 << 2
FLAG_EXTENDED_PICTOGRAPHIC = 1 << 3
FLAG_EMOJI_MODIFIER_BASE = 1 << 4
FLAG_PRESENTATION_SEQ_STARTER = 1 << 5
FLAG_TEXT_SEQ_STARTER = 1 << 6
FLAG_AMBIGUOUS_LETTER = 1 << 7

ZERO_WIDTH_GC = frozenset({"Mn", "Me", "Cf", "Cc", "Cs"})
# EAW=A letters / modifier symbols stay narrow even in a wide context.
AMBIGUOUS_LETTER_GC = frozenset({"Lu", "Ll", "Lt", "Lm", "Lo", "Sk"})
# U+0387 GREEK ANO TELEIA is EAW=N in the UCD, but unicode-width treats it
# as ambiguous (its NFC decomposition is U+00B7 MIDDLE DOT, EAW=A).
FORCED_AMBIGUOUS = {0x0387}

# Conjoining Hangul jamo medial vowels (V) and final consonants (T):
# they render as part of the preceding choseong (L) cell, adding no width.
# Leading consonants (U+1100..U+115F, U+A960..U+A97C) stay wide via EAW.
CONJOINING_JAMO_VT = [(0x1160, 0x11FF), (0xD7B0, 0xD7FB)]

EAW_ORDER = {"N": 0, "Na": 1, "A": 2, "H": 3, "F": 4, "W": 5}

RANGE_RE = re.compile(r"^([0-9A-Fa-f]+)(?:\.\.([0-9A-Fa-f]+))?\s*;\s*([^#;]+)")
MISSING_RE = re.compile(
    r"^#\s*@missing:\s*([0-9A-Fa-f]+)(?:\.\.([0-9A-Fa-f]+))?\s*;\s*(\w+)"
)


def parse_property_ranges(path):
    """Parse a UCD data file into [(lo, hi, property), ...], sorted by lo."""
    ranges = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            m = RANGE_RE.match(line)
            if not m:
                continue
            lo = int(m.group(1), 16)
            hi = int(m.group(2), 16) if m.group(2) else lo
            ranges.append((lo, hi, m.group(3).strip()))
    ranges.sort()
    return ranges


def parse_missing_defaults(path):
    """Parse EastAsianWidth.txt '# @missing:' annotations.

    Returns (global_default, [(lo, hi, value), ...]) where the ranges cover
    reserved blocks whose unassigned code points take a non-global default.
    """
    global_default = "N"
    ranged = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            m = MISSING_RE.match(line)
            if not m:
                continue
            lo = int(m.group(1), 16)
            hi = int(m.group(2), 16) if m.group(2) else lo
            value = m.group(3)
            if lo == 0 and hi >= CP_LIMIT - 1:
                global_default = value
            else:
                ranged.append((lo, hi, value))
    return global_default, ranged


def fill(buf, ranges, value_of):
    """Fill a bytearray from [(lo, hi, prop)] via value_of(prop) -> int."""
    for lo, hi, prop in ranges:
        v = value_of(prop)
        if v is not None:
            buf[lo : hi + 1] = bytes([v]) * (hi - lo + 1)


def build_values(ucd_dir):
    """Compute the uncompressed stage-2 value for every code point."""
    eaw_file = os.path.join(ucd_dir, "EastAsianWidth.txt")
    eaw_ranges = parse_property_ranges(eaw_file)
    global_missing, ranged_missing = parse_missing_defaults(eaw_file)

    # East Asian Width, encoded small-int via EAW_ORDER. Unassigned code
    # points take the @missing defaults (reserved CJK/emoji blocks are Wide).
    eaw = bytearray([EAW_ORDER[global_missing]]) * CP_LIMIT
    fill(eaw, ranged_missing, lambda v: EAW_ORDER[v])
    fill(eaw, eaw_ranges, lambda v: EAW_ORDER[v])

    gc = parse_property_ranges(
        os.path.join(ucd_dir, "extracted", "DerivedGeneralCategory.txt")
    )
    zero_gc = bytearray(CP_LIMIT)
    fill(zero_gc, gc, lambda cat: 1 if cat in ZERO_WIDTH_GC else None)
    ambiguous_letter = bytearray(CP_LIMIT)
    fill(ambiguous_letter, gc, lambda cat: 1 if cat in AMBIGUOUS_LETTER_GC else None)

    di_ranges = parse_property_ranges(
        os.path.join(ucd_dir, "DerivedCoreProperties.txt")
    )
    default_ignorable = bytearray(CP_LIMIT)
    fill(
        default_ignorable,
        di_ranges,
        lambda p: 1 if p == "Default_Ignorable_Code_Point" else None,
    )

    emoji_ranges = parse_property_ranges(
        os.path.join(ucd_dir, "emoji", "emoji-data.txt")
    )
    emoji_presentation = bytearray(CP_LIMIT)
    extended_pictographic = bytearray(CP_LIMIT)
    emoji_modifier_base = bytearray(CP_LIMIT)
    fill(emoji_presentation, emoji_ranges, lambda p: 1 if p == "Emoji_Presentation" else None)
    fill(extended_pictographic, emoji_ranges, lambda p: 1 if p == "Extended_Pictographic" else None)
    fill(emoji_modifier_base, emoji_ranges, lambda p: 1 if p == "Emoji_Modifier_Base" else None)

    # emoji-variation-sequences.txt: "CP FE0F ; emoji style" and
    # "CP FE0E ; text style" lines (single code points only, no ranges).
    presentation_starter = bytearray(CP_LIMIT)
    text_starter = bytearray(CP_LIMIT)
    with open(os.path.join(ucd_dir, "emoji", "emoji-variation-sequences.txt")) as f:
        for line in f:
            m = re.match(r"^([0-9A-F]+)\s+(FE0F|FE0E)\s*;\s*(emoji|text) style", line)
            if not m:
                continue
            cp = int(m.group(1), 16)
            if m.group(2) == "FE0F":
                presentation_starter[cp] = 1
            elif emoji_presentation[cp] and not 0x1F200 <= cp < 0x1F300:
                # Text presentation sequences matter only for
                # Emoji_Presentation chars; the Enclosed Ideographic
                # Supplement block stays wide even in text style.
                text_starter[cp] = 1

    values = bytearray(CP_LIMIT)
    for cp in range(CP_LIMIT):
        if zero_gc[cp] or default_ignorable[cp]:
            base = BASE_ZERO
        else:
            e = eaw[cp]
            if e >= EAW_ORDER["F"]:
                base = BASE_WIDE
            elif e == EAW_ORDER["A"] or cp in FORCED_AMBIGUOUS:
                base = BASE_AMBIGUOUS
            else:
                base = BASE_NARROW
        v = base
        if base == BASE_AMBIGUOUS and ambiguous_letter[cp]:
            v |= FLAG_AMBIGUOUS_LETTER
        if emoji_presentation[cp]:
            v |= FLAG_EMOJI_PRESENTATION
        if extended_pictographic[cp]:
            v |= FLAG_EXTENDED_PICTOGRAPHIC
        if emoji_modifier_base[cp]:
            v |= FLAG_EMOJI_MODIFIER_BASE
        if presentation_starter[cp]:
            v |= FLAG_PRESENTATION_SEQ_STARTER
        if text_starter[cp]:
            v |= FLAG_TEXT_SEQ_STARTER
        values[cp] = v

    # Conjoining jamo V/T override (must beat EAW; they carry no flags).
    for lo, hi in CONJOINING_JAMO_VT:
        values[lo : hi + 1] = bytes([BASE_ZERO]) * (hi - lo + 1)

    return values


def compress(values):
    """Deduplicate 128-cp blocks -> (stage1, stage2, block_count)."""
    block_ids = {}
    stage1 = []
    stage2 = []
    for start in range(0, CP_LIMIT, BLOCK_SIZE):
        block = bytes(values[start : start + BLOCK_SIZE])
        idx = block_ids.get(block)
        if idx is None:
            idx = len(block_ids)
            block_ids[block] = idx
            stage2.extend(block)
        stage1.append(idx)
    return stage1, stage2, len(block_ids)


def table_lookup(stage1, stage2, cp):
    return stage2[(stage1[cp >> BLOCK_BITS] << BLOCK_BITS) + (cp & (BLOCK_SIZE - 1))]


SPOT_CHECKS = [
    # (code point, expected value, description)
    (0x0041, BASE_NARROW, "Latin 'A'"),
    (0x4F60, BASE_WIDE, "CJK '你'"),
    (0x0301, BASE_ZERO, "combining acute accent (Mn)"),
    (0x00A1, BASE_AMBIGUOUS, "inverted exclamation (EAW=A)"),
    (0x03B1, BASE_AMBIGUOUS | FLAG_AMBIGUOUS_LETTER, "greek alpha (EAW=A, letter -> narrow either way)"),
    (0x0387, BASE_AMBIGUOUS, "greek ano teleia (forced ambiguous, NFC = U+00B7)"),
    (0x20AC, BASE_AMBIGUOUS, "euro sign (EAW=A)"),
    (0x1F600, BASE_WIDE | FLAG_EMOJI_PRESENTATION | FLAG_EXTENDED_PICTOGRAPHIC, "grinning face emoji (no skin tones, no VS16/VS15)"),
    (0x1F46A, BASE_WIDE | FLAG_EMOJI_PRESENTATION | FLAG_EXTENDED_PICTOGRAPHIC | FLAG_EMOJI_MODIFIER_BASE | FLAG_PRESENTATION_SEQ_STARTER | FLAG_TEXT_SEQ_STARTER, "family emoji (modifier base + variation sequences)"),
    (0x2648, BASE_WIDE | FLAG_EMOJI_PRESENTATION | FLAG_EXTENDED_PICTOGRAPHIC | FLAG_PRESENTATION_SEQ_STARTER | FLAG_TEXT_SEQ_STARTER, "Aries (EP + VS16/VS15)"),
    (0x2764, BASE_NARROW | FLAG_EXTENDED_PICTOGRAPHIC | FLAG_PRESENTATION_SEQ_STARTER, "heavy black heart (text default, emoji-able via VS16)"),
    (0x1F1E6, BASE_NARROW | FLAG_EMOJI_PRESENTATION, "regional indicator A (emoji default, no variation sequences)"),
    (0xFE0F, BASE_ZERO, "variation selector-16 (Mn, default ignorable)"),
    (0x200D, BASE_ZERO, "zero width joiner (Cf)"),
    (0x1161, BASE_ZERO, "Hangul jungseong A (conjoining vowel)"),
    (0x11A8, BASE_ZERO, "Hangul jongseong (final consonant)"),
    (0x1100, BASE_WIDE, "Hangul choseong (leading consonant, EAW=W)"),
    (0xAC00, BASE_WIDE, "precomposed Hangul syllable GA"),
    (0xFF61, BASE_NARROW, "halfwidth ideographic full stop (EAW=H)"),
    (0xFF21, BASE_WIDE, "fullwidth Latin 'A' (EAW=F)"),
    (0xE000, BASE_AMBIGUOUS, "private use area (EAW=A)"),
    (0x0000, BASE_ZERO, "NUL control (Cc)"),
    (0x10FFFF, BASE_NARROW, "noncharacter at end of codespace"),
    (0x2FA1D, BASE_WIDE, "unassigned in reserved CJK block (@missing Wide)"),
]


def verify(values, stage1, stage2):
    """Round-trip every code point through the compressed tables."""
    mismatches = 0
    for cp in range(CP_LIMIT):
        if table_lookup(stage1, stage2, cp) != values[cp]:
            mismatches += 1
            if mismatches <= 5:
                print("  MISMATCH U+%04X" % cp, file=sys.stderr)
    if mismatches:
        raise SystemExit("verify: %d round-trip mismatches" % mismatches)

    failures = [
        "U+%04X %s: got %#x, want %#x"
        % (cp, desc, table_lookup(stage1, stage2, cp), want)
        for cp, want, desc in SPOT_CHECKS
        if table_lookup(stage1, stage2, cp) != want
    ]
    if failures:
        raise SystemExit("verify: spot checks failed:\n  " + "\n  ".join(failures))


def emit_cpp(stage1, stage2, block_count, stage1_type, ucd_version, out_path):
    def fmt_array(name, ctype, data, per_line=16):
        lines = ["inline constexpr %s %s[%d] = {" % (ctype, name, len(data))]
        for i in range(0, len(data), per_line):
            lines.append(",".join(str(v) for v in data[i : i + per_line]) + ",")
        lines.append("};")
        return "\n".join(lines)

    header = """// GENERATED. DO NOT EDIT.

// Unicode {version} display-width tables.
// Derived from the Unicode Character Database
// <https://www.unicode.org/Public/{version}/ucd/>:
//   EastAsianWidth.txt, emoji/emoji-data.txt,
//   emoji/emoji-variation-sequences.txt, DerivedCoreProperties.txt,
//   extracted/DerivedGeneralCategory.txt
// Regenerate: python3 gen/gen_width_tables.py --download --verify

#pragma once

#include <cstddef>
#include <cstdint>

namespace txt {{
namespace detail {{

// Stage-2 value byte layout:
//   bits 0-1 : base width class (width_base_*)
//   bit  2   : Emoji_Presentation (UTS #51 default emoji presentation)
//   bit  3   : Extended_Pictographic (participates in emoji ZWJ sequences)
//   bit  4   : Emoji_Modifier_Base (takes emoji skin-tone modifiers, UTS #51)
//   bit  5   : starts an emoji presentation sequence (FE0F -> emoji style)
//   bit  6   : starts a text presentation sequence (FE0E -> text style)
//   bit  7   : EAW=A letter / modifier symbol (narrow in wide contexts)
inline constexpr std::uint8_t width_base_zero = 0;
inline constexpr std::uint8_t width_base_narrow = 1;
inline constexpr std::uint8_t width_base_wide = 2;
inline constexpr std::uint8_t width_base_ambiguous = 3;
inline constexpr std::uint8_t width_flag_emoji_presentation = 1 << 2;
inline constexpr std::uint8_t width_flag_extended_pictographic = 1 << 3;
inline constexpr std::uint8_t width_flag_emoji_modifier_base = 1 << 4;
inline constexpr std::uint8_t width_flag_presentation_seq_starter = 1 << 5;
inline constexpr std::uint8_t width_flag_text_seq_starter = 1 << 6;
inline constexpr std::uint8_t width_flag_ambiguous_letter = 1 << 7;

inline constexpr std::size_t width_stage2_block_count = {blocks};
""".format(version=ucd_version, blocks=block_count)

    lookup = """
// Two-stage lookup mirroring uni-algo's table layout:
// stage2[(stage1[cp >> 7] << 7) + (cp & 0x7F)].
// Out-of-range values (only possible from unchecked callers) read as narrow.
constexpr std::uint8_t width_lookup(char32_t cp) noexcept {
    return cp <= 0x10FFFF
               ? stage2_width[(static_cast<std::uint32_t>(stage1_width[cp >> 7]) << 7) +
                              (cp & 0x7F)]
               : width_base_narrow;
}

} // namespace detail
} // namespace txt
"""
    body = (
        header
        + "\n"
        + fmt_array("stage1_width", stage1_type, stage1)
        + "\n\n"
        + fmt_array("stage2_width", "std::uint8_t", stage2)
        + "\n"
        + lookup
    )
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(body)
    return len(body.splitlines())


def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(script_dir)
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--ucd-version", default=DEFAULT_UCD_VERSION)
    parser.add_argument(
        "--ucd-dir",
        default=os.path.join(script_dir, "ucd"),
        help="cache directory for UCD files (default: gen/ucd)",
    )
    parser.add_argument(
        "--out",
        default=os.path.join(repo_root, "src", "width_tables.hpp"),
        help="output header (default: src/width_tables.hpp)",
    )
    parser.add_argument(
        "--download",
        action="store_true",
        help="fetch missing UCD files from unicode.org",
    )
    parser.add_argument(
        "--verify",
        action="store_true",
        help="round-trip all code points through the compressed tables",
    )
    args = parser.parse_args()

    ucd_dir = os.path.join(args.ucd_dir, args.ucd_version)
    base_url = UCD_BASE_URL.format(version=args.ucd_version)
    for rel in UCD_FILES:
        path = os.path.join(ucd_dir, rel)
        if os.path.exists(path):
            continue
        if not args.download:
            raise SystemExit(
                "missing %s (re-run with --download to fetch it)" % path
            )
        os.makedirs(os.path.dirname(path), exist_ok=True)
        url = "%s/%s" % (base_url, rel)
        print("downloading %s" % url)
        urllib.request.urlretrieve(url, path)

    print("building values (Unicode %s) ..." % args.ucd_version)
    values = build_values(ucd_dir)
    stage1, stage2, block_count = compress(values)

    if args.verify:
        verify(values, stage1, stage2)
        print("verify: round-trip OK (%d code points) + %d spot checks"
              % (CP_LIMIT, len(SPOT_CHECKS)))

    stage1_type = (
        "std::uint8_t" if block_count <= 256 else "std::uint16_t"
    )
    lines = emit_cpp(
        stage1, stage2, block_count, stage1_type, args.ucd_version, args.out
    )

    counts = {name: 0 for name in ("zero", "narrow", "wide", "ambiguous")}
    flags = {"emoji_presentation": 0, "extended_pictographic": 0, "emoji_modifier_base": 0, "presentation_seq_starter": 0, "text_seq_starter": 0}
    for v in values:
        counts[("zero", "narrow", "wide", "ambiguous")[v & 3]] += 1
        flags["emoji_presentation"] += bool(v & FLAG_EMOJI_PRESENTATION)
        flags["extended_pictographic"] += bool(v & FLAG_EXTENDED_PICTOGRAPHIC)
        flags["emoji_modifier_base"] += bool(v & FLAG_EMOJI_MODIFIER_BASE)
        flags["presentation_seq_starter"] += bool(v & FLAG_PRESENTATION_SEQ_STARTER)
        flags["text_seq_starter"] += bool(v & FLAG_TEXT_SEQ_STARTER)

    print("classes: " + ", ".join("%s=%d" % kv for kv in counts.items()))
    print("flags:   " + ", ".join("%s=%d" % kv for kv in flags.items()))
    print("tables:  %d distinct 128-cp blocks (%s stage1), stage2 %d B, total %.1f KiB"
          % (block_count, stage1_type, len(stage2),
             (len(stage1) * (1 if stage1_type == "std::uint8_t" else 2) + len(stage2)) / 1024.0))
    print("wrote %s (%d lines)" % (args.out, lines))


if __name__ == "__main__":
    main()
