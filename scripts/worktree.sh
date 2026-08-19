#!/usr/bin/env bash
#
# worktree.sh — Manage isolated git worktrees for parallel development.
#
# Usage:
#   ./scripts/worktree.sh create <name> [branch]
#   ./scripts/worktree.sh list
#   ./scripts/worktree.sh remove <name>
#   ./scripts/worktree.sh help
#
# Examples:
#   ./scripts/worktree.sh create fix-crash
#   ./scripts/worktree.sh create my-feature feat/my-feature
#   ./scripts/worktree.sh list
#   ./scripts/worktree.sh remove fix-crash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

WORKTREE_DIR="$ROOT_DIR/../texere-wt"

case "${1:-help}" in
    create)
        NAME="${2:-}"
        BRANCH="${3:-}"
        if [ -z "$NAME" ]; then
            echo "Usage: $0 create <name> [branch]"
            exit 1
        fi
        if [ -z "$BRANCH" ]; then
            BRANCH="$NAME"
        fi
        TARGET="$WORKTREE_DIR/$NAME"
        if [ -d "$TARGET" ]; then
            echo "Error: worktree '$NAME' already exists at $TARGET"
            exit 1
        fi
        echo "==> Creating worktree '$NAME'..."
        echo "    Path:   $TARGET"
        echo "    Branch: $BRANCH"
        mkdir -p "$WORKTREE_DIR"
        git worktree add "$TARGET" "$BRANCH" 2>/dev/null || \
        git worktree add -b "$BRANCH" "$TARGET" main
        echo "Done. Worktree created at: $TARGET"
        echo "To work in it: cd $TARGET"
        ;;
    list)
        echo "==> Active worktrees:"
        git worktree list
        ;;
    remove)
        NAME="${2:-}"
        if [ -z "$NAME" ]; then
            echo "Usage: $0 remove <name>"
            exit 1
        fi
        TARGET="$WORKTREE_DIR/$NAME"
        if [ ! -d "$TARGET" ]; then
            echo "Error: worktree '$NAME' not found at $TARGET"
            exit 1
        fi
        echo "==> Removing worktree '$NAME'..."
        git worktree remove "$TARGET"
        echo "Done."
        ;;
    help|--help|-h)
        echo "Usage: $0 <command> [args]"
        echo ""
        echo "Commands:"
        echo "  create <name> [branch]  Create a new worktree + branch"
        echo "  list                    List active worktrees"
        echo "  remove <name>           Remove a worktree"
        echo "  help                    Show this help"
        echo ""
        echo "Worktrees are stored in: $WORKTREE_DIR"
        ;;
    *)
        echo "Error: unknown command '${1:-}'"
        echo "Usage: $0 <create|list|remove|help>"
        exit 1
        ;;
esac
