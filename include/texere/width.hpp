#pragma once

// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: width.hpp
// Description: Display width (terminal cells) — UAX #11 + UTS #51.

#include "grapheme.hpp"
#include "string.hpp"
#include "string_view.hpp"

#include <cstddef>

namespace txt {

// ===========================================================================
// Display width (terminal cells)
// ===========================================================================
//
// display_width() measures how many terminal cells text occupies, following
// UAX #11 (East Asian Width) with the UTS #51 emoji rules.  It is the one
// algorithm neither backend provides (uni-algo has no EAW support); the
// lookup tables in src/width_tables.hpp are generated from the UCD by
// gen/gen_width_tables.py (Unicode 15.1.0).
//
// Grapheme-level rules implemented (port of Rust unicode-width v0.2.0's
// emoji subset, so its emoji test suite is our acceptance bar):
//
//   - Emoji presentation sequences:  base + FE0F -> 2 (base in the
//     emoji-variation-sequences.txt VS16 starter list).
//   - Text presentation sequences:   EP base + FE0E -> 1, except the
//     Enclosed Ideographic Supplement (U+1F200..U+1F2FF) which stays 2.
//   - Emoji ZWJ sequences:           EP-state base ZWJ ... -> 2 (includes
//     keycaps, subdivision-flag tag sequences, RI-ZWJ runs).
//   - Emoji modifier sequences:      modifier base + skin tone -> 2; a
//     standalone modifier is 2 (EAW Wide).
//   - Regional indicators:           1 each; pairs form one flag -> 2.
//   - Zero-width:                    Mn/Me/Cf/Cc/Cs, Default_Ignorable,
//     conjoining Hangul jamo V/T -> 0.
//   - Controls (U+0000..U+00A0):     1 in strings; CR LF collapses to 1.
//
// Known divergences from unicode-width (deliberate, documented):
// script-specific ligatures (Arabic/Hebrew/Khmer/Tifinagh/...), the
// Devanagari caret U+A8FA, GCB=Prepend marks and Grapheme_Extend spacing
// marks (U+09BE & friends) — these need Joining_Group/Grapheme_Cluster_Break
// tables and are tracked for a later generator extension.

// How East Asian Ambiguous (EAW=A) code points are rendered: terminals in
// CJK contexts draw them double-width (2), others single-width (1), per
// UAX #11.  The policy is always explicit — no hidden default: it is the
// one place where terminals legitimately disagree.
enum class east_asian_context : std::uint8_t {
    narrow = 0,  // ambiguous counts as 1 cell (non-CJK / portable)
    wide = 1,    // ambiguous counts as 2 cells (CJK terminals)
};

// Display width of a single grapheme cluster, in terminal cells.
//
// g:   The grapheme cluster (must be valid as long as its parent string).
// ctx: Rendering policy for East Asian Ambiguous code points.
// Returns:  Width in cells (>= 0).  O(cluster size), zero allocations.
[[nodiscard]] std::size_t display_width(grapheme_ref g, east_asian_context ctx) noexcept;

// Total display width of a string: the state machine runs over every
// grapheme cluster, so multi-codepoint sequences (emoji ZWJ families,
// combining marks, CR LF) count as their rendered width, never as a sum
// of code points.
//
// s:   The string to measure.
// ctx: Rendering policy for East Asian Ambiguous code points.
// Returns:  Total width in cells.  O(n), zero allocations.
[[nodiscard]] std::size_t display_width(const string& s, east_asian_context ctx) noexcept;

// Total display width of a string_view; identical semantics to the
// txt::string overload above.
[[nodiscard]] std::size_t display_width(const string_view& sv, east_asian_context ctx) noexcept;

} // namespace txt
