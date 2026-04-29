#!/usr/bin/env python3
"""Lightweight documentation checks for texere."""

from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def error(message: str) -> None:
    print(f"docs check: {message}", file=sys.stderr)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def check_required_markdown(paths: list[Path]) -> int:
    failures = 0
    for path in paths:
        if not path.exists():
            error(f"missing required file: {path.relative_to(ROOT)}")
            failures += 1
            continue
        if not read_text(path).strip():
            error(f"empty required file: {path.relative_to(ROOT)}")
            failures += 1
    return failures


def check_no_local_absolute_paths(paths: list[Path]) -> int:
    failures = 0
    pattern = re.compile(r"/Users/[^)\s\"']+")
    for path in paths:
        text = read_text(path)
        for match in pattern.finditer(text):
            error(f"{path.relative_to(ROOT)} contains local absolute path: {match.group(0)}")
            failures += 1
    return failures


def check_no_empty_links(paths: list[Path]) -> int:
    failures = 0
    patterns = [
        re.compile(r"href=[\"'][\"']"),
        re.compile(r"\[[^\]]+\]\(\s*\)"),
    ]
    for path in paths:
        text = read_text(path)
        for pattern in patterns:
            for _ in pattern.finditer(text):
                error(f"{path.relative_to(ROOT)} contains an empty link")
                failures += 1
    return failures


def check_comparison_dashboard(path: Path) -> int:
    if not path.exists():
        return 0

    failures = 0
    text = read_text(path)
    required_tokens = [
        "data.js",
        "window.BENCHMARK_DATA",
        "parseName",
        "Chart",
        "document.createElement('canvas')",
    ]
    for token in required_tokens:
        if token not in text:
            error(f"{path.relative_to(ROOT)} is missing expected dashboard token: {token}")
            failures += 1
    return failures


def main() -> int:
    required_markdown_paths = [
        ROOT / "README.md",
        ROOT / "CONTRIBUTING.md",
    ]
    docs_paths = sorted((ROOT / "docs").glob("**/*")) if (ROOT / "docs").exists() else []
    text_paths = (
        required_markdown_paths
        + [path for path in docs_paths if path.suffix in {".html", ".md"}]
    )

    failures = 0
    failures += check_required_markdown(required_markdown_paths)
    existing_text_paths = [path for path in text_paths if path.exists()]
    failures += check_no_local_absolute_paths(existing_text_paths)
    failures += check_no_empty_links(existing_text_paths)
    failures += check_comparison_dashboard(ROOT / "docs" / "comparison.html")

    if failures:
        error(f"failed with {failures} issue(s)")
        return 1

    print("docs check: ok")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
