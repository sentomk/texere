#!/usr/bin/env bash
#
# install-hooks.sh — Enable texere's repo-tracked git hooks.
#
# Usage:
#   bash scripts/install-hooks.sh
#
# Points core.hooksPath at scripts/hooks/ (tracked in git), so hook updates
# ship with the repository. One-time setup per clone.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

git config core.hooksPath scripts/hooks

echo "Installed git hooks (core.hooksPath = scripts/hooks)."
echo "pre-commit: blocks commits on main/master/gh-pages, validates branch names."
