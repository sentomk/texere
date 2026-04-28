## Scope

Type:
- [ ] core / API
- [ ] benchmark
- [ ] docs / dashboard
- [ ] CI
- [ ] experiment / alpha
- [ ] cleanup

Branch line:
- Source:
- Target:
- Depends on:

## What Changed

-

## Why

-

## Correctness

Tests:
- [ ] Added / updated doctest coverage
- [ ] Existing tests pass
- [ ] Not applicable

Commands run:

```sh
# paste commands here
```

## Benchmark Impact

Applies:
- [ ] Yes
- [ ] No

Benchmark commands:

```sh
# paste commands here
```

Result summary:

| Case | Before | After | Delta |
| --- | ---: | ---: | ---: |
| | | | |

Dashboard / artifact:

-

## API / ABI / Dependency Impact

- [ ] Public headers changed
- [ ] ABI-affecting change
- [ ] New CMake option
- [ ] New dependency
- [ ] Dependency visibility changed
- [ ] None

Notes:

-

## Texere Rules Checklist

- [ ] Public headers do not include backend-heavy headers such as `simdutf` or `uni-algo`
- [ ] No implicit raw UTF-8 constructors were added
- [ ] `operator[](size_t)` remains deleted
- [ ] Validation uses explicit factory / validation paths
- [ ] No automatic normalization was introduced
- [ ] Recoverable errors use `txt::expected<T, txt::error>`
- [ ] Backend dependencies remain `PRIVATE` unless intentionally justified

## Risk / Rollback

Risk:

-

Rollback plan:

-
