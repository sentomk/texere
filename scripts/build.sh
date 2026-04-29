#!/usr/bin/env bash
#
# build.sh — Build texere with CMake presets.
#
# Usage:
#   ./scripts/build.sh [preset]
#
# Presets:
#   default    Debug + tests      (default)
#   release    Release, no tests
#   ci         Release + tests
#   coverage   Debug + --coverage
#   benchmark  Release + benchmarks
#
# Examples:
#   ./scripts/build.sh            # default preset
#   ./scripts/build.sh release    # release preset
#   ./scripts/build.sh ci         # CI preset

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

PRESET="${1:-default}"

# Validate preset
VALID_PRESETS=("default" "release" "ci" "coverage" "benchmark")
VALID=0
for p in "${VALID_PRESETS[@]}"; do
    if [ "$p" = "$PRESET" ]; then
        VALID=1
        break
    fi
done

if [ "$VALID" -ne 1 ]; then
    echo "Error: unknown preset '$PRESET'"
    echo "Valid presets: ${VALID_PRESETS[*]}"
    exit 1
fi

echo "==> Configuring: cmake --preset $PRESET"
cmake --preset "$PRESET"

echo ""
echo "==> Building: cmake --build --preset $PRESET"
cmake --build --preset "$PRESET"

echo ""
echo "Build complete (preset: $PRESET)"
