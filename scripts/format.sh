#!/usr/bin/env bash
#
# format.sh — Run clang-format on texere source code.
#
# Usage:
#   ./scripts/format.sh              # format files in-place
#   ./scripts/format.sh --check      # check only (no modifications)
#   ./scripts/format.sh --diff       # show diff of changes
#
# Directories: include/texere/ src/ tests/ benchmarks/

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

MODE="${1:---inplace}"

# Find clang-format
CLANG_FORMAT=""
for name in clang-format-19 clang-format-18 clang-format-17 clang-format-16 clang-format; do
    if command -v "$name" &>/dev/null; then
        CLANG_FORMAT="$name"
        break
    fi
done

if [ -z "$CLANG_FORMAT" ]; then
    echo "Error: clang-format not found."
    echo "Install it with:"
    echo "  macOS:  brew install clang-format"
    echo "  Ubuntu: sudo apt install clang-format"
    echo "  Windows: part of LLVM (https://llvm.org)"
    exit 1
fi

echo "==> Using: $CLANG_FORMAT"

# Collect source files
SOURCES=$(find include/texere src tests benchmarks -name '*.hpp' -o -name '*.cpp' | sort)

case "$MODE" in
    --check)
        echo "==> Checking formatting..."
        FAILED=0
        for f in $SOURCES; do
            if ! "$CLANG_FORMAT" --dry-run --Werror "$f" &>/dev/null; then
                echo "  FAIL: $f"
                FAILED=1
            fi
        done
        if [ "$FAILED" -eq 0 ]; then
            echo "All files are properly formatted."
        else
            echo "Some files need formatting. Run '$0' to fix."
            exit 1
        fi
        ;;
    --diff)
        echo "==> Showing formatting diffs..."
        for f in $SOURCES; do
            diff -u "$f" <("$CLANG_FORMAT" "$f") 2>/dev/null || true
        done
        ;;
    *)
        echo "==> Formatting in-place..."
        for f in $SOURCES; do
            "$CLANG_FORMAT" -i "$f"
        done
        echo "Done. Formatted $(echo "$SOURCES" | wc -l) files."
        ;;
esac
