#!/usr/bin/env bash
#
# test.sh — Build and run texere tests.
#
# Usage:
#   ./scripts/test.sh [preset]
#   ./scripts/test.sh [preset] -- [ctest-args...]
#
# Presets:
#   default    (default) — Debug + tests
#   ci                   — Release + tests
#   coverage             — Debug + --coverage
#
# Examples:
#   ./scripts/test.sh                 # build + test (default preset)
#   ./scripts/test.sh ci              # build + test (CI preset)
#   ./scripts/test.sh default -V      # verbose output

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

PRESET="${1:-default}"
shift 2>/dev/null || true

# Only presets with tests enabled are valid for test.sh
VALID_TEST_PRESETS=("default" "ci" "coverage")
VALID=0
for p in "${VALID_TEST_PRESETS[@]}"; do
    if [ "$p" = "$PRESET" ]; then
        VALID=1
        break
    fi
done

if [ "$VALID" -ne 1 ]; then
    echo "Error: '$PRESET' does not enable tests."
    echo "Valid test presets: ${VALID_TEST_PRESETS[*]}"
    exit 1
fi

echo "==> Configuring: cmake --preset $PRESET"
cmake --preset "$PRESET"

echo ""
echo "==> Building: cmake --build --preset $PRESET"
cmake --build --preset "$PRESET"

echo ""
echo "==> Running tests: ctest --preset $PRESET $*"
# shellcheck disable=SC2068
ctest --preset "$PRESET" "$@"

echo ""
echo "All tests passed (preset: $PRESET)"
