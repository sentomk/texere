# texere

> *texere* — Latin for "to weave": weaving together bytes, code points, and grapheme clusters into a single coherent abstraction.

<div align="center">

[![C++17](https://img.shields.io/badge/C%2B%2B-17-blue.svg?style=flat-square&logo=c%2B%2B&logoColor=white)](https://isocpp.org/)
[![CI](https://github.com/SentoMK/texere/actions/workflows/ci.yml/badge.svg?branch=main&style=flat-square)](https://github.com/SentoMK/texere/actions)
[![Coverage](https://img.shields.io/codecov/c/github/SentoMK/texere?style=flat-square&branch=main)](https://codecov.io/gh/SentoMK/texere)
[![License](https://img.shields.io/github/license/SentoMK/texere?style=flat-square)](LICENSE)

</div>

**texere** is a Unicode-aware C++17 string library that provides a type-safe, UTF-8 string value type as a drop-in replacement for `std::string` in Unicode-aware contexts. It is not a replacement for ICU — it is a **lightweight, modern, zero-surprise** string abstraction.

---

## Key Features

- **Three-track factory**: `from_utf8()` / `from_utf8_lossy()` / `from_utf8_unchecked()` — forces callers to explicitly handle invalid UTF-8
- **Integer indexing disabled**: `operator[]` is `= delete`; use `grapheme_at(n)` or iterators instead
- **Three-tier iteration**: `bytes()` → `codepoints()` → `graphemes()`, corresponding to the three Unicode granularity levels
- **Explicit normalization**: no automatic NFC; provides `normalize()` and `equals_normalized()`
- **Opaque Index**: obtainable only from iterators, preventing confusion between byte offsets and grapheme indices
- **Mutation API**: `operator+` / `append` / `insert` / `erase` / `replace` — positions via opaque `Index`, counts in grapheme clusters; an `Index` falling inside a cluster is a reported error (`errc::not_grapheme_boundary`), never silent corruption
- **Hashable**: `std::hash` specializations for `txt::string` and `txt::string_view` — usable as `unordered_map` keys
- **Display width**: `display_width()` — terminal-cell width per UAX #11 + UTS #51 emoji rules, the first texere-native algorithm (neither backend provides EAW). Explicit `east_asian_context` policy for ambiguous characters; test vectors aligned with Rust `unicode-width`'s emoji suite
- **Unicode 15.1**: grapheme cluster boundaries, case mapping, normalization, and width tables all based on Unicode 15.1

---

## Tools

The repo also builds **`txt`**, a multi-call binary of Unicode-honest text tools powered by texere (currently `wc`; `align`/`fold` planned):

```console
$ printf 'I ð¨âð© CJK æ¥æ¬èª eÌ
' > demo.txt

$ txt wc demo.txt            # lines  graphemes  codepoints  bytes
1 14 21 46

$ wc -m demo.txt             # the system tool reports *bytes* as "chars"
46 demo.txt
```

One emoji family: 25 bytes, 11 code points, **1 grapheme**. Build with `-DTEXERE_BUILD_TOOLS=ON` (default on).

## Benchmarks

Benchmark results are tracked continuously via [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark) and visualized on the project's GitHub Pages:

<p align="center">
  <a href="https://sentomk.github.io/texere/dev/bench/" style="font-size:1.2em; font-weight:bold; color:#0366d6;">
    Benchmark Dashboard &rarr;
  </a>
</p>

One page, three views: **Comparison** (latest run, txt vs naive speedup badges), **Table** (every value, searchable and sortable), and **History** (per-commit trends per benchmark, with commit links). Raw data: `data.js` JSON export, linked in the footer.

> **Note**: After enabling GitHub Pages (Settings → Pages → `gh-pages` branch, root directory), the dashboard will be available at the link above after the first CI run on `main`.

---

## Architecture & Compilation Model

**texere is a compiled library** (Static or Shared), *not* a header-only library.

This deliberate design choice ensures **industrial-grade build performance**:
1. **Zero Dependency Bleeding**: Heavy backend dependencies (`simdutf`, `uni-algo`) are completely hidden inside `texere`'s `src/` files. Your application's translation units will *never* parse thousands of lines of SIMD intrinsics or Unicode tables.
2. **Fast Compile Times**: Including `<texere/string.hpp>` is practically as fast as including `<string>`.
3. **ABI Isolation**: You can upgrade or swap the underlying Unicode engines without recompiling your entire codebase.

---

## Quick Start

```cpp
#include <texere/string.hpp>
#include <texere/normalize.hpp>
#include <texere/case.hpp>

using namespace txt::literals;

// UTF-8 literal: validated, ill-formed bytes become U+FFFD
auto greeting = "こんにちは"_ts;

// Strict factory (runtime validation)
auto result = txt::string::from_utf8(some_network_input);
if (!result) {
    // result.error().code  ← errc::invalid_utf8, etc.
    handle_error(result.error());
}
auto& s = *result;

// Byte count vs grapheme cluster count
s.size_bytes();  // number of UTF-8 bytes
s.length();      // number of grapheme clusters (O(n), documented)

// Safe indexing (O(n))
auto g = s.grapheme_at(2);   // 3rd grapheme cluster
g.utf8();                    // std::string_view of raw UTF-8 bytes
g.index();                   // opaque txt::Index

// Three-tier iteration
for (auto byte : s.bytes())       { /* uint8_t */ }
for (auto cp   : s.codepoints())  { /* char32_t */ }
for (auto gref : s.graphemes())   { /* txt::grapheme_ref */ }

// Concatenation & mutation
auto t = s + " more"_ts;
t.erase(t.grapheme_at(1).index(), 2);   // erase 2 grapheme clusters

// Normalization
txt::normalize(s, txt::normalization_form::NFC);
bool eq = txt::equals_normalized(a, b);  // does not modify either string

// Case mapping
auto upper = txt::to_upper(s);
auto lower = txt::to_lower(s);

// Windows / wchar_t Interop (if needed)
#include <texere/convert.hpp>
std::wstring ws = txt::to_wstring(s);

// {fmt} / std::format ecosystem adapter
#include <texere/format.hpp>
fmt::print("Hello, {}! Length is {}.
", s, s.length());
```

---

## Dependencies

| Dependency | CMake Option | Purpose |
|------------|--------------|---------|
| [simdutf](https://github.com/simdutf/simdutf) | `TEXERE_USE_SIMDUTF=ON` (default) | High-performance UTF-8 validation |
| [uni-algo](https://github.com/uni-algo/uni-algo) | `TEXERE_USE_UNIALGO=ON` (default) | Unicode algorithms (normalization, case, grapheme boundaries) |
| [{fmt}](https://github.com/fmtlib/fmt) | `TEXERE_USE_FMT=OFF` (default) | Formatting support |

All dependencies are fetched automatically via CMake FetchContent; no manual installation required.

---

## CMake Integration

### Option 1: FetchContent (Recommended)

`FetchContent` will automatically download and compile `texere` (and its internal dependencies `simdutf` & `uni-algo`) as a static library, ensuring zero dependency configuration on your end.

```cmake
# Optional: Enable {fmt} support before fetching
set(TEXERE_USE_FMT ON CACHE BOOL "" FORCE)

include(FetchContent)
FetchContent_Declare(texere
    GIT_REPOSITORY https://github.com/yourorg/texere.git
    GIT_TAG        v0.1.0
    GIT_SHALLOW    TRUE
)
FetchContent_MakeAvailable(texere)

target_link_libraries(my_target PRIVATE texere::texere)
```

### Option 2: find_package (after installation)

```cmake
find_package(texere REQUIRED)
target_link_libraries(my_target PRIVATE texere::texere)
```

### Build Options

```bash
cmake -B build \
  -DTEXERE_BUILD_TESTS=ON \
  -DTEXERE_BUILD_BENCHMARKS=OFF \
  -DTEXERE_USE_SIMDUTF=ON \
  -DTEXERE_USE_UNIALGO=ON
cmake --build build
ctest --test-dir build -V
```

---

## Directory Structure

```
texere/
├── include/texere/      ← Public API headers (clean, zero external dependencies)
│   ├── string.hpp       ← txt::string (primary type)
│   ├── string_view.hpp  ← txt::string_view (non-owning view)
│   ├── iterator.hpp     ← byte/codepoint/grapheme iterators and ranges
│   ├── normalize.hpp    ← normalize(), equals_normalized()
│   ├── case.hpp         ← to_upper(), to_lower(), to_title()
│   ├── convert.hpp      ← to_wstring(), from_wstring()
│   ├── format.hpp       ← {fmt} integration (fmt::formatter<txt::string>)
│   └── expected.hpp     ← C++17-compatible txt::expected<T,E>
├── src/                 ← Implementation (hides heavy simdutf & uni-algo headers)
│   ├── string.cpp       ← High-performance SIMD validation
│   ├── iterator.cpp     ← UAX #29 Grapheme state machine
│   ├── normalize.cpp    
│   ├── case.cpp         
│   └── convert.cpp      
├── tests/               ← doctest test suite (100+ tests)
├── benchmarks/          ← Google Benchmark micro-benchmarks
└── docs/
    └── design_rationale.md  ← Detailed design decision documentation
```

---

## License

MIT — see the [LICENSE](LICENSE) file.
