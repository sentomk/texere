#!/usr/bin/env bash
#
# new-branch.sh — Create a new branch following texere naming conventions.
#
# Usage:
#   ./scripts/new-branch.sh <type> <description>
#
# Types:
#   feat      New feature
#   fix       Bug fix
#   bench     Benchmark infrastructure
#   docs      Documentation
#   ci        CI/automation
#   test      Test-only changes
#   refactor  Code restructuring
#   perf      Performance improvement
#   build     CMake/dependency changes
#   chore     Maintenance
#   alpha     Experimental (may be rewritten)
#
# Examples:
#   ./scripts/new-branch.sh feat unicode-16-support
#   ./scripts/new-branch.sh fix grapheme-boundary-crash
#   ./scripts/new-branch.sh docs api-overview
#   ./scripts/new-branch.sh ci windows-msvc-matrix

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

TYPE="${1:-}"
DESCRIPTION="${2:-}"

if [ -z "$TYPE" ] || [ -z "$DESCRIPTION" ]; then
    echo "Usage: $0 <type> <description>"
    echo ""
    echo "Types:"
    echo "  feat      New feature"
    echo "  fix       Bug fix"
    echo "  bench     Benchmark infrastructure"
    echo "  docs      Documentation"
    echo "  ci        CI/automation"
    echo "  test      Test-only changes"
    echo "  refactor  Code restructuring"
    echo "  perf      Performance improvement"
    echo "  build     CMake/dependency changes"
    echo "  chore     Maintenance"
    echo "  alpha     Experimental"
    exit 1
fi

VALID_TYPES=("feat" "fix" "bench" "docs" "ci" "test" "refactor" "perf" "build" "chore" "alpha")
VALID=0
for t in "${VALID_TYPES[@]}"; do
    if [ "$t" = "$TYPE" ]; then
        VALID=1
        break
    fi
done

if [ "$VALID" -ne 1 ]; then
    echo "Error: unknown type '$TYPE'."
    echo "Valid types: ${VALID_TYPES[*]}"
    exit 1
fi

# Convert description to kebab-case: lowercase, replace spaces/scores with hyphens
DESCRIPTION=$(echo "$DESCRIPTION" \
    | tr '[:upper:]' '[:lower:]' \
    | sed 's/[ _]/-/g' \
    | sed 's/[^a-z0-9.-]//g' \
    | sed 's/--*/-/g' \
    | sed 's/^-//' \
    | sed 's/-$//')

BRANCH_NAME="${TYPE}/${DESCRIPTION}"

echo "==> Creating branch: $BRANCH_NAME"
git checkout -b "$BRANCH_NAME" main
echo ""
echo "Branch '$BRANCH_NAME' created from 'main'."
echo "Use 'git push -u origin $BRANCH_NAME' when ready to push."
