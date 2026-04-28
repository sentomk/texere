# Contributing to texere

texere is a C++17 Unicode-safe UTF-8 string library. Contributions are welcome,
but the project intentionally keeps a narrow scope: explicit Unicode
correctness, stable value semantics, clean public headers, and measurable
performance.

This document defines the rules for contributions. Pull requests that violate
the core design constraints should be reworked before review.

## Scope

Good contributions:

- Fix correctness bugs with focused regression tests.
- Improve Unicode behavior without changing the explicit API model.
- Improve performance with benchmark evidence.
- Improve benchmark infrastructure, documentation, CI, or packaging.
- Reduce dependency leakage or compile-time cost.

Out of scope unless explicitly discussed first:

- Implicit constructors from raw UTF-8 input.
- Automatic normalization on construction or comparison.
- Byte-indexed character access.
- Header-only rewrites.
- Public exposure of backend dependencies such as `simdutf` or `uni-algo`.
- Large style-only rewrites mixed with functional changes.
- New dependencies without a clear reason and CMake visibility discussion.

## Core Design Rules

- `txt::string` stores UTF-8 and owns a `std::string` backing store.
- `operator[](size_t)` must remain deleted. Use grapheme APIs or iterators.
- Construction from untrusted UTF-8 must go through explicit factory paths:
  `from_utf8()`, `from_utf8_lossy()`, or `from_utf8_unchecked()`.
- Strings are not normalized automatically. Use `normalize()` or
  `normalized()` explicitly.
- Public headers under `include/texere/` must stay lightweight. Do not include
  heavy backend headers there.
- Backend dependencies must remain implementation details in `src/` and should
  be linked `PRIVATE` unless there is a deliberate public API reason.
- Recoverable failures should use `txt::expected<T, txt::error>`. Do not add
  exception-based error paths.

## Branches

Use branch prefixes to keep parallel work understandable:

- `feat/*`: feature work intended for `main`.
- `fix/*`: bug fixes with regression tests.
- `bench/*`: benchmark infrastructure, benchmark inputs, baselines, and
  benchmark CI. Do not change docs dashboards here.
- `docs/*`: documentation, dashboards, and GitHub Pages presentation. Do not
  change benchmark measurement logic here.
- `alpha/*`: aggressive experiments that may be rewritten before merging.
- `ci/*`: workflow, publishing, caching, and repository automation.

`main` is protected. Changes should land through pull requests.

## Code Style

- Use C++17 only. Do not use C++20 core-language or library features in the
  public API.
- Use `snake_case` for functions, variables, types, files, and test names.
- Prefer small, explicit functions over clever generic machinery.
- Keep public API headers declarative and light. Put heavy implementation logic
  in `.cpp` files.
- Prefer standard library types already used by the codebase:
  `std::string`, `std::string_view`, `std::wstring`, and `std::size_t`.
- Do not add abstractions only to make code look symmetric. Add them when they
  remove real duplication or clarify a contract.
- Keep unrelated formatting churn out of functional commits.
- Use ASCII in source files unless the file already uses UTF-8 literals for
  tests, documentation, or Unicode fixtures.

## Comments

Comments should explain constraints, invariants, Unicode edge cases, or
non-obvious implementation choices. They should not narrate simple code.

Preferred comments:

```cpp
// Reject overlong 2-byte encodings before checking continuation bytes.
if (lead < 0xC2) return false;
```

Avoid comments like:

```cpp
// Increment i.
++i;
```

File headers may be used for source files, but they are not a substitute for
useful local comments. Do not run broad comment-generation scripts as part of a
normal contribution. The local `add_comments.py` script exists only as a crude
maintenance helper for bulk historical cleanup; any output from it must be
reviewed manually and should not be mixed with behavior changes.

Public API comments should document:

- validation guarantees
- complexity
- ownership and lifetime
- normalization behavior
- error behavior
- Unicode boundary semantics

Internal implementation comments should document:

- tricky UTF-8 validity conditions
- grapheme or normalization edge cases
- table layout assumptions
- SIMD fallback and boundary handling
- decisions that are easy to accidentally "simplify" incorrectly

## Tests

Use doctest for tests.

Bug fixes should include a regression test. New Unicode behavior should include
tests for both common cases and edge cases:

- ASCII
- BMP non-ASCII
- supplementary-plane code points
- combining marks
- emoji and ZWJ sequences when relevant
- invalid UTF-8 for validation paths
- boundary conditions at empty, single-element, and end-of-input cases

Do not rely on benchmark coverage for correctness.

## Benchmarks

Performance-sensitive changes need benchmark evidence. Use the benchmark naming
shape:

```text
Operation/backend/scenario/size
```

Examples:

```text
Validate/txt/ascii/1k
Validate/naive/ascii/1k
Normalize.NFC/txt/nfd_e_acute/1k
Convert.ToWString/txt/cjk/1k
```

Benchmark changes should be kept separate from dashboard changes:

- `bench/*` owns benchmark inputs, benchmark names, baselines, and smoke CI.
- `docs/*` owns `docs/comparison.html` and presentation logic.

## Commit Messages

Use a conventional one-line summary:

```text
type: concise imperative summary
```

Allowed types:

- `feat`: user-visible library feature
- `fix`: correctness fix
- `bench`: benchmark infrastructure, cases, or baselines
- `docs`: documentation or dashboard presentation
- `ci`: GitHub Actions, publishing, or automation
- `test`: test-only change
- `refactor`: behavior-preserving code restructuring
- `perf`: performance improvement in production code
- `build`: CMake, packaging, or dependency configuration
- `chore`: maintenance without behavior impact

Good summaries:

```text
fix: reject surrogate UTF-8 sequences
bench: standardize validation benchmark names
docs: add pull request template
```

Add a commit body when the change is not self-explanatory from the diff. A body
is required for:

- behavior changes
- public API changes
- Unicode semantic decisions
- performance claims
- dependency or CMake visibility changes
- CI/deployment changes with non-obvious permissions
- commits that intentionally do not add tests

Recommended body shape:

```text
type: concise imperative summary

Explain why this change is needed, not just what changed. Mention the old
behavior and the new behavior when relevant.

Validation:
- command or benchmark run
- important result or reason validation was skipped
```

Keep commits focused. Do not combine unrelated formatting, generated comments,
benchmark rewrites, and behavior changes in the same commit.

## Pull Requests

Use the PR template. Fill in the sections that matter for the change:

- scope and branch line
- correctness evidence
- benchmark evidence when relevant
- API, ABI, CMake, and dependency impact
- texere design checklist
- risk and rollback

Small PRs are preferred when work is intended for `main`. Long-running branches
such as `bench/*` and `alpha/*` may accumulate multiple small commits before a
release-oriented PR.
