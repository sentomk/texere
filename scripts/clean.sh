#!/usr/bin/env bash
#
# clean.sh — Clean texere build artifacts.
#
# Usage:
#   ./scripts/clean.sh         # remove build/ and build-*/
#   ./scripts/clean.sh --all   # also remove CMake user files and _deps
#   ./scripts/clean.sh --help

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

case "${1:-}" in
    --help|-h)
        echo "Usage: $0 [--all]"
        echo "  (no args)  Remove build/ and build-*/ directories"
        echo "  --all      Also remove CMakeCache, _deps, and IDE artifacts"
        exit 0
        ;;
    --all)
        echo "==> Removing all build directories..."
        rm -rf build build-*/ build-* 2>/dev/null || true
        echo "==> Removing CMake cache and deps..."
        rm -rf CMakeCache.txt CMakeFiles _deps 2>/dev/null || true
        echo "==> Removing IDE artifacts..."
        rm -rf .vscode .idea *.swp *.swo 2>/dev/null || true
        echo "Clean complete."
        ;;
    *)
        echo "==> Removing build directories..."
        rm -rf build build-*/ 2>/dev/null || true
        echo "Done."
        ;;
esac
