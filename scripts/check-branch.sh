#!/usr/bin/env bash
#
# check-branch.sh — Validate that the current branch follows texere conventions.
#
# Usage:
#   ./scripts/check-branch.sh              # check current branch
#   ./scripts/check-branch.sh <branch>     # check a specific branch name
#
# Allowed prefixes (from CONTRIBUTING.md):
#   feat/  fix/  bench/  docs/  ci/  test/  refactor/  perf/  build/  chore/  alpha/
#
# Exit codes:
#   0 — branch name is valid
#   1 — branch name is invalid

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

BRANCH="${1:-}"
if [ -z "$BRANCH" ]; then
    BRANCH="$(cd "$ROOT_DIR" && git rev-parse --abbrev-ref HEAD 2>/dev/null || echo '')"
fi

if [ -z "$BRANCH" ]; then
    echo "Error: could not determine branch name."
    exit 1
fi

# Allowed prefixes
ALLOWED_PREFIXES=(
    "feat/"
    "fix/"
    "bench/"
    "docs/"
    "ci/"
    "test/"
    "refactor/"
    "perf/"
    "build/"
    "chore/"
    "alpha/"
)

# Special branches that are always valid
SPECIAL_BRANCHES=("main" "master" "develop" "gh-pages")

# Check special branches first
for special in "${SPECIAL_BRANCHES[@]}"; do
    if [ "$BRANCH" = "$special" ]; then
        echo "OK: '$BRANCH' is a protected branch."
        exit 0
    fi
done

# Check against allowed prefixes
for prefix in "${ALLOWED_PREFIXES[@]}"; do
    if [[ "$BRANCH" == "$prefix"* ]]; then
        echo "OK: '$BRANCH' matches prefix '$prefix'."
        exit 0
    fi
done

echo "ERROR: Branch name '$BRANCH' does not follow conventions."
echo ""
echo "Allowed prefixes:"
for p in "${ALLOWED_PREFIXES[@]}"; do
    echo "  $p*"
done
echo ""
echo "Protected branches: ${SPECIAL_BRANCHES[*]}"
echo ""
echo "See CONTRIBUTING.md for details."
exit 1
