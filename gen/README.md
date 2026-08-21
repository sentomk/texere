# gen/ — UCD table generators

Code generators that turn the Unicode Character Database (UCD) into the
compact lookup tables compiled into texere. **Generated output is committed
to the repo**; building texere never requires Python or network access.

## gen_width_tables.py

Generates `src/width_tables.hpp` — the two-stage lookup behind
`txt::display_width` (display width in terminal cells). This is data no
backend provides: uni-algo has no East Asian Width support.

### Regenerating

```console
$ python3 gen/gen_width_tables.py --download --verify
```

- `--download` fetches missing UCD files from unicode.org into
  `gen/ucd/<version>/` (git-ignored cache; safe to delete).
- `--verify` round-trips all 1,114,112 code points through the compressed
  tables and runs spot checks (`你` → wide, U+0301 → zero, …). Always run
  with `--verify`.

### Inputs (Unicode 15.1.0)

| File | Provides |
|---|---|
| `EastAsianWidth.txt` | EAW property + `@missing` defaults for reserved ranges |
| `emoji/emoji-data.txt` | `Emoji_Presentation`, `Extended_Pictographic`, `Emoji_Modifier_Base` (UTS #51) |
| `emoji/emoji-variation-sequences.txt` | FE0F/FE0E emoji/text-style starters (UTS #51) |
| `DerivedCoreProperties.txt` | `Default_Ignorable_Code_Point` |
| `extracted/DerivedGeneralCategory.txt` | General_Category (zero-width classes) |

### Output format

One byte per code point, looked up as
`stage2[(stage1[cp >> 7] << 7) + (cp & 0x7F)]` (uni-algo's layout; identical
128-code-point blocks are deduplicated — 8,704 blocks collapse to 178).

| Bits | Meaning |
|---|---|
| 0–1 | base width class: `0`=zero, `1`=narrow, `2`=wide, `3`=ambiguous |
| 2 | `Emoji_Presentation` |
| 3 | `Extended_Pictographic` |
| 4 | `Emoji_Modifier_Base` |
| 5 | starts an emoji presentation sequence (FE0F → emoji style) |
| 6 | starts a text presentation sequence (FE0E → text style; EP chars outside U+1F200–U+1F2FF) |

Base-class rules (priority order):

1. GC ∈ {Mn, Me, Cf, Cc, Cs} or Default_Ignorable → **zero**
2. Conjoining Hangul jamo V/T (U+1160–U+11FF, U+D7B0–U+D7FB) → **zero**
3. EAW ∈ {F, W} → **wide**
4. EAW = A → **ambiguous** (resolved by the runtime `east_asian_context`
   policy parameter — the table deliberately never hard-codes a terminal
   assumption)
5. otherwise → **narrow**

Grapheme-level rules (variation selectors, ZWJ sequences, keycaps) are
applied by `src/width.cpp` on top of these per-code-point values, using the flag bits.

### Bumping the Unicode version

```console
$ python3 gen/gen_width_tables.py --ucd-version 16.0.0 --download --verify
```

Then review the diff of `src/width_tables.hpp` and run the test suite
(`tests/test_width.cpp` pins expectations). The Unicode license for the UCD
data files is at <https://www.unicode.org/license.txt>.
