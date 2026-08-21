# texere ROADMAP

> *texere* — weaving bytes, code points, and grapheme clusters into one
> coherent abstraction; **`txt`** — the terminal tools built on it.

This roadmap tracks where the project is going and why. Items are ordered by
leverage: the width module unlocks the flagship tool, the tool drives
adoption of the library. Each milestone lists **deliverables** and an
**acceptance** bar, so "done" is unambiguous.

---

## Status snapshot (2026-08)

| Area | State |
|---|---|
| Core type (`txt::string`): three-track factory, opaque `Index`, three-tier iteration | ✅ shipped |
| `_ts` literal: validated, lossy semantics (compile-time rejection impossible — N3599 never adopted; see design_rationale §Q2) | ✅ #11 |
| Mutation API (`+`/`+=`/`append`/`insert`/`erase`/`replace`), `find`/`substr`, `std::hash` | ✅ #12 |
| First tool: `txt wc` (lines/graphemes/codepoints/bytes, 267 tests) | ✅ #13 |
| Width module (`display_width`: EAW + UTS #51 emoji rules, unicode-width-aligned) | ✅ #28 |
| Algorithm layer (`trim`/`split`/`join`/…) | ⬅️ next |
| Packaging (vcpkg/conan), first tagged release | planned |

---

## Phase 1 — Width & the flagship demo

The thesis of this project: correctness you can *see*. Phase 1 delivers the
two artifacts that make Unicode honesty visible in a terminal.

### Width module (first self-developed algorithm)

The one gap neither backend fills: **display width** (how many terminal
cells a grapheme occupies). uni-algo has no East Asian Width support at all
(verified against its sources); this is texere's first own-algorithm
contribution.

- **Deliverables**
  - `gen/` — UCD table generator consuming `EastAsianWidth.txt` +
    `emoji-data.txt` (Unicode 15.1), emitting compact range tables
    (two-stage lookup, mirroring uni-algo's generator layout)
  - `txt::display_width(grapheme_ref)` / `display_width(const string&)`
  - UTS #51 rules: emoji presentation (FE0F → 2), text presentation (FE0E →
    1), ZWJ sequences → 2, default-ignorable → 0
  - Ambiguous-width **policy** parameter (`east_asian_context`) — the one
    place terminals legitimately disagree; never a hidden default
  - Test vectors aligned with Rust `unicode-width`'s suite (proven correct;
    saves half the verification work)
- **Acceptance**: table round-trip from official UCD data; `display_width`
  agrees with unicode-width on ≥ its emoji test set; zero per-call
  allocations.

### `txt wc -w` (fifth column)

- **Deliverable**: `-w` display-width column in `txt wc`.
- **Acceptance**: `你好` reports width 4, one emoji family reports 2 —
  one-line demo in README.

### `txt align` (the flagship)

Width-aware `column`/`align` replacement — the tool no terminal toolbox has
gotten right. `column -t` breaks on CJK and emoji; `txt align` won't.

- **Deliverables**
  - `truncate_to_width(s, n, ellipsis)` and `pad_to_width(s, n)` library
    functions (TUI fundamentals — also useful to ftxui/notcurses users)
  - `txt align [-s sep] [-w max]` with proper full-width padding
- **Acceptance**: the README comparison GIF (`column -t` misaligned vs
  `txt align` clean) — the single most shareable artifact this project can
  produce.

### `txt fold` / `txt elide`

- **Deliverables**: width-aware line wrapping (never splits a cluster) and
  truncation with ellipsis; `-w` reuses width core.
- **Acceptance**: folding text containing emoji families and CJK never
  emits mojibake; golden-file tests.

## Phase 2 — Ergonomics layer

The free-function algorithms users reach for daily. All operate on grapheme
boundaries; none can produce a mid-cluster cut.

- `trim` / `trim_start` / `trim_end` (Unicode whitespace per UAX #31?)
- `split(sv, delim)` → range of `string_view` (lazy, allocation-free)
- `join(range, delim)`
- `starts_with` / `ends_with` / `contains` (byte-level, documented as such)
- `rfind`
- Caseless compare via case folding (NFC/NFD-aware default, byte-compare
  opt-out)
- Word/sentence segmentation (UAX #29; uni-algo already provides word
  breaks — expose + document; editor scenarios)

**Acceptance**: each ships with doctest coverage incl. emoji/CJK; `split`
on the flagship demo string used in README examples.

## Phase 3 — Performance & hardening

- **Grapheme iterator rework**: current implementation reconstructs its
  backend view per cluster (~360 ns/cluster; 19 MB CJK in 2.6 s vs wc's
  0.8 s). Rework to a single-pass state machine; **target ≤ 100 ns/cluster**
  and ≤ 1.5 s on the same input. Benchmark suite already exists (google
  benchmark + CI dashboard) — regression-tracked.
- **Fuzzing**: libFuzzer/OSS-Fuzz target for `from_utf8_lossy`, iteration,
  width on arbitrary bytes; corpus from UCD test files.
- **CI**: add a `tools` smoke job (run `txt wc` against fixture files with
  golden outputs) so CLI regressions surface before release.

## Phase 4 — Distribution & adoption

- **Packaging**: vcpkg port + conan recipe; `FetchContent` already works —
  make installation boring.
- **v0.1.0 tag** once Phase 1 lands (semver: pre-1.0 API may move, but
  changes get documented in the changelog).
- **The article**: "Why `operator[]` must die — a Unicode-honest string for
  C++" (design_rationale.md already carries the technical weight; the post
  packages the argument for r/cpp). Publish alongside the flagship demo GIF.
- **Outreach**: open issues/PRs with ftxui & notcurses offering
  `display_width`/`pad_to_width` as the fix for their alignment bugs. One
  real dependent outweighs a thousand stars.
- **Release artifacts**: static binaries (Linux x86_64/aarch64, macOS
  universal, Windows x64) for `txt` on each tag.

## Phase 5 — Horizon (deliberately unordered)

- **`feat/internal-unicode-algorithms` branch**: keep quarantined (it
  silently drops case mapping for Cyrillic/Greek and most of UCD). Either
  grow it into an honest `TEXERE_BACKEND=minimal` (documented coverage:
  ASCII + Latin + Hangul, for no-network builds) or retire it. Decision
  needs the width generator anyway — same table machinery.
- **Unicode version cadence**: document the upgrade path (UCD 16.0:
  regenerate tables, bump `unicode_version`, run test vectors). The
  generator from M1 makes this a one-PR chore instead of a rewrite.
- **SG16 / `std::text`**: if the library gains community traction, contribute
  field experience to the `std::text` discussions — the opaque-Index and
  three-tier-iteration decisions are exactly the data points that proposal
  lacks.
- **C++20 track** (optional, behind a feature test): NTTP-based literal
  types could finally give compile-time literal validation the standard
  `template<char...>` path never could.

---

## Non-goals (so the scope stays honest)

- **Full ICU parity** — no transliteration, no collation (locale-aware
  sorting), no formatting. texere is a value type + honest algorithms, not
  a platform.
- **Rendering** — width is *terminal cells*, never pixels.
- **Encoding conversion zoo** — UTF-8 in/out; `wstring` interop stays the
  one escape hatch (Windows).
- **Zero-dependency purism** — simdutf/uni-algo remain the engines; texere's
  value is the type system above them. (The minimal-backend experiment is
  Phase 5, not a direction change.)

## Branch & PR conventions

`feat/` `fix/` `docs/` `perf/` `bench/` `test/` `ci/` `build/` `chore/` —
enforced by CI. One logical change per PR; every API change updates tests +
README + design_rationale.md in the same PR.
