# texere Design Rationale

> **Document status**: M0 skeleton, continuously updated
> **Unicode version**: 15.1 (released 2023-09-12)
> **C++ standard**: C++17 (core API), compatible with C++20/23

---

## 1. Background

### Etymology

*texere* is a Latin verb meaning "to weave, interweave, arrange." A Unicode string is fundamentally a structure that weaves together three layers — bytes, code points, and grapheme clusters. The name reflects the library's core nature and avoids naming conflicts with existing libraries (utfcpp, uni-algo, icu, simdutf).

### Motivation

`std::string` is a byte container with no Unicode awareness. Common pitfalls:

| Problem | `std::string` behavior | texere behavior |
|---------|------------------------|-----------------|
| `s[i]` | Returns the i-th byte | `operator[]` is `= delete` |
| `s.size()` | Byte count | `size_bytes()` (explicitly named) |
| `s.substr(2,1)` | One byte starting at byte 2 | Accepts `Index` + grapheme count |
| Normalization | Not supported | `normalize()` + `equals_normalized()` |
| Invalid UTF-8 | Silently accepted | Three-track factory forces explicit handling |

ICU is comprehensive but large (~30 MB) with a C-style API that does not match modern C++ idioms.
uni-algo is lightweight and modern, but provides no string type of its own.
texere's goal: **provide a zero-overhead, Unicode-correct string value type** with its Unicode algorithms compiled behind a stable public API.

---

## 2. Core Design Decisions

### Q1 Indexing model: opaque Index + `grapheme_at(n)`

**Problem**: How can users safely index grapheme clusters while preventing the classic mistake of treating a byte offset as a character count?

**Alternatives considered**:

| Approach | Pros | Cons |
|----------|------|------|
| `operator[](size_t)` returning a grapheme | Familiar | Easy to misuse (confused semantics vs. std::string) |
| `operator[](Index)` accepting only opaque type | Type-safe | Where does Index come from? Requires an iterator |
| No `operator[]`, iterators only | Safest | Inconvenient for random access |
| `grapheme_at(n)` convenience method | Intuitive | O(n); complexity must be documented |

**Decision**: Disable `operator[]` (`= delete`), provide `grapheme_at(n)` (O(n), documented) and iterator interfaces. The opaque `Index` type can only be obtained from an iterator or `grapheme_at()`; it cannot be implicitly constructed from an integer.

**Rationale**: Writing `grapheme_at(n)` forces the user to acknowledge the linear cost. The opacity of `Index` prevents bugs where a byte offset is passed as a grapheme index.

---

### Q2 Invalid UTF-8: three-track factory functions

**Problem**: What should happen when the input contains invalid UTF-8 bytes?

**Alternatives considered**:

| Approach | Problem |
|----------|---------|
| Throw an exception | Unusable in `-fno-exceptions` environments |
| Return an empty string | Caller cannot distinguish empty string from error |
| Silently accept | Violates the UTF-8 safety guarantee |
| Single strict factory only | Cannot handle untrusted sources such as network input |

**Decision**: Three independent paths:

```
from_utf8(sv)            → expected<string, error>  // strict validation
from_utf8_lossy(sv)      → string                   // replace with U+FFFD
from_utf8_unchecked(sv)  → string                   // skip validation (unsafe)
"..."_ts                 → string                   // consteval, compile-time check
```

**Rationale**: The caller must choose one of the three paths, and the choice itself acts as documentation. The `_ts` literal eliminates the validation cost for compile-time-known strings. The name `from_utf8_unchecked` makes the danger explicit.

---

### Q3 Normalization: no automatic normalization

**Problem**: Should the string be automatically normalized to NFC at construction time?

**Argument for**: Automatic NFC makes `==` semantics more intuitive (`"é" == "é"` regardless of source).

**Arguments against**:

1. **Performance**: Normalization is O(n). For input that is already NFC (the vast majority of modern text), it is pure overhead.
2. **Reversibility**: NFD/NFKC/NFKD are not supersets of NFC; automatic NFC would corrupt some data (e.g., compatibility-mapping test inputs).
3. **Transparency**: Users expect bytes to round-trip unchanged through the library.
4. **Precedent**: Rust's `str`, Go's `string`, and Swift's `String` all avoid automatic normalization.

**Decision**: No automatic normalization. Provides:
- `normalize(string&, normalization_form)` — in-place normalization
- `normalized(const string&, normalization_form)` — returns a normalized copy
- `equals_normalized(a, b, form)` — normalized equality comparison (may short-circuit)

**Rationale**: Makes the performance cost explicit. Normalization should be a deliberate user decision, not hidden magic.

---

### Q4 Naming: `texere` library, `txt::` namespace

**Alternatives considered**: `ustr::`, `unicode::`, `utf8::`, `str::`

**Decision**: Library name `texere`, namespace `txt::` (short, collision-free, readable).

**Rationale**: `txt` is shorter than `texere` and friendlier to type. `texere::` as a namespace would be too verbose. `txt` is not widely used in existing C++ libraries, so collision risk is low.

---

## 3. Three-Tier Iterator Model

texere provides three independent iterator levels corresponding to Unicode's three granularity levels:

```
Storage layer (UTF-8 bytes)
    └── byte_iterator      → uint8_t, bidirectional, O(1) step
         └── codepoint_iterator → char32_t, forward, O(1) step (decoding)
              └── grapheme_iterator → grapheme_ref, forward, O(1) step (UAX #29)
```

**Design principles**:
- Each level is an independent range and can be used on its own.
- There is no forced conversion path from coarse to fine (users do not need to go from grapheme iterators back to byte iterators).
- `grapheme_range` / `codepoint_range` / `byte_range` all satisfy the C++20 `std::ranges::forward_range` concept.

---

## 4. Internal Storage

`std::string` is used as the backing store for the following reasons:

1. **SSO (Small String Optimization)**: Most implementations avoid heap allocation for strings of ≤ 15 bytes; texere inherits this optimization at no cost.
2. **Move semantics**: `std::string` move is O(1); texere adds no additional overhead.
3. **Interoperability**: `to_std_string()` / `to_std_string_view()` are zero-copy (for the view case) or a single copy.
4. **Avoiding reinvention**: Byte-level memory management is a solved problem with mature implementations.

---

## 5. Dependency Hierarchy

```
texere (compiled library)
├── built-in Unicode implementation → UTF-8 validation, grapheme boundaries, case, normalization
└── [optional] {fmt}                → Formatting support
```

Unicode behavior is implemented in texere's C++17 source files, keeping the public headers free of backend dependencies.

---

## 6. Unicode Version Declaration

texere targets **Unicode 15.1** (2023-09-12), specifically:

- **Grapheme cluster boundaries**: UAX #29 Rev. 43 (Unicode 15.1)
- **Case folding**: CaseFolding-15.1.0.txt
- **Normalization**: UnicodeData-15.1.0.txt + CompositionExclusions-15.1.0.txt
- **Script / General_Category**: Unicode 15.1 property tables

The tables and algorithms are owned by texere's implementation.

---

## 7. Relationship to Other Libraries

| Library | Relationship |
|---------|--------------|
| `std::string` | Internal backing store; interoperable via `to_std_string()` |
| `simdutf` | Not a dependency; UTF-8 validation is implemented internally |
| `uni-algo` | Not a dependency; Unicode algorithms are implemented internally |
| `ICU` | Not a dependency; ICU provides fuller locale/collation support, which texere does not aim to replace |
| `{fmt}` / `std::format` | Optional integration for formatting `txt::string` |

---

## 8. Future Plans (M1+)

- `txt::rope`: rope data structure for large text
- `txt::regex`: Unicode-aware regular expressions
- Locale-sensitive case mapping (BCP 47 locale tags)
- `std::format` / `fmt::format` support for `txt::string`
- WASM / MSVC CI matrix
