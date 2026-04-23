# AGENTS.md

This document provides context, architectural guidelines, and rules for AI agents (like Cursor, Gemini, Claude) contributing to the **texere** codebase. Please read this carefully before making any modifications.

## 1. Project Overview
**texere** is a C++17 Unicode-safe UTF-8 string library. It provides `txt::string`, a type-safe drop-in replacement for `std::string` in Unicode-aware contexts.
- **Core Philosophy**: Zero-surprise, explicit Unicode correctness (Unicode 15.1), and high performance.
- **Backends**: `simdutf` for hardware-accelerated UTF-8 validation, and `uni-algo` for Unicode algorithms (grapheme clustering, case mapping, normalization).

## 2. Architecture & File Structure
texere is a **Compiled Library (Static/Shared)**, *not* a header-only library. This is to guarantee "Zero Dependency Bleeding" and fast compilation times for the end user.

- **`include/texere/*.hpp` (Public API)**
  - MUST NOT contain any heavy includes (`#include <simdutf.h>` or `#include <uni_algo/...>`).
  - Contains only clean declarations, templates, and inline wrappers.
  - `#include <string>` and `#include <string_view>` are allowed.
- **`src/*.cpp` (Implementation)**
  - Where the heavy lifting happens. This is the ONLY place where backend libraries (`simdutf`, `uni-algo`) should be included.
- **`tests/*.cpp`**
  - Uses `doctest`. Every new feature MUST have test coverage.
- **`benchmarks/*.cpp`**
  - Uses Google Benchmark.

## 3. Core Design Rules (DO NOT VIOLATE)
1. **Opaque Indexing**: `operator[](size_t)` is explicitly `= delete` to prevent treating byte offsets as character counts. Agents MUST use `grapheme_at(n)` (which is `O(n)`) or iterators for element access.
2. **Three-Track Factory**: Do NOT add constructors that take raw `const char*` or `std::string_view` implicitly without validation. Use:
   - `from_utf8()` (strict, returns `expected`)
   - `from_utf8_lossy()` (replaces invalid bytes)
   - `from_utf8_unchecked()` (unsafe, for trusted data)
3. **No Automatic Normalization**: Strings are NOT normalized on construction. Use `txt::normalize()` explicitly.
4. **Value Semantics**: `txt::string` relies on `std::string` as its backing storage to utilize Small String Optimization (SSO). It is a value type. All `const` methods must be thread-safe.

## 4. Coding Conventions
- **Namespace**: `txt::`
- **C++ Standard**: C++17 (Use `if constexpr`, `std::string_view`, etc. Do NOT use C++20 features like `char8_t` or `<ranges>` in the core API unless conditionally compiled).
- **Naming Style**: `snake_case` for everything (functions, variables, types).
- **Error Handling**: Use `txt::expected<T, txt::error>` for recoverable errors (e.g., validation failures). Do NOT throw exceptions.

## 5. CMake & Dependencies
- Dependencies (`simdutf`, `uni-algo`, `fmt`) are managed via `FetchContent`.
- In `CMakeLists.txt`, backend dependencies are linked as `PRIVATE` to `texere` to prevent dependency leakage. Do NOT change them to `INTERFACE` or `PUBLIC` unless strictly necessary (like `fmt` if exposed in headers).

## 6. Common Workflows for Agents
- **When adding a new Unicode algorithm**:
  1. Declare the clean API in `include/texere/<feature>.hpp`.
  2. Implement the logic using `uni-algo` inside `src/<feature>.cpp`.
  3. Add test cases in `tests/test_algorithms.cpp`.
- **When fixing bugs**:
  - Write a failing doctest first.
  - Fix the bug in `src/` or `include/`.
  - Ensure the test passes.
