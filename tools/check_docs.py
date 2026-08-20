#!/usr/bin/env python3
"""Lightweight documentation checks for texere."""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
import tempfile
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


DASHBOARD_FIXTURE = {
    "lastUpdate": 1700000001000,
    "repoUrl": "https://github.com/sentomk/texere",
    "entries": {
        "Benchmark": [
            {
                "date": 1700000000000,
                "commit": {"id": "aaaaaaa1", "url": "https://example.invalid/aaaaaaa1"},
                "benches": [{"name": "BM_Stale_Legacy", "value": 1.0, "unit": "ns/iter"}],
            },
            {
                "date": 1700000001000,
                "commit": {"id": "bbbbbbb2", "url": "https://example.invalid/bbbbbbb2"},
                "benches": [
                    {"name": "Validate/txt/ascii", "value": 50.0, "unit": "ns/iter"},
                    {"name": "Validate/naive/ascii", "value": 300.0, "unit": "ns/iter"},
                    {"name": "Validate/txt/cjk", "value": 275.0, "unit": "ns/iter"},
                    {"name": "Validate/naive/cjk", "value": 1475.0, "unit": "ns/iter"},
                    {"name": "Length/txt/ascii", "value": 16000.0, "unit": "ns/iter"},
                ],
            },
        ]
    },
}

DASHBOARD_HARNESS = r"""
const vm = { exports: {} };
new Function('module', VIEW_MODEL + '\nmodule.exports = { parseBenchName, buildView, ratioInfo };')(vm);
const { parseBenchName, buildView, ratioInfo } = vm.exports;
const view = buildView(FIXTURE);

let failures = 0;
const check = (name, cond) => {
  if (!cond) { console.error('FAIL ' + name); failures++; }
};
check('slash name parsed', JSON.stringify(parseBenchName('Validate/naive/cjk')) ===
  JSON.stringify({ operation: 'Validate', backend: 'naive', scenario: 'cjk', legacy: false }));
check('legacy name detected', parseBenchName('BM_Old').legacy === true);
check('faster band', ratioInfo(50, 300).cls === 'ratio-faster' && ratioInfo(50, 300).ratio === 6);
check('slower band', ratioInfo(300, 50).cls === 'ratio-slower');
check('parity band', ratioInfo(100, 101).cls === 'ratio-parity');
check('view built', !!view);
check('latest run only (stale excluded)', view.meta.benchCount === 5 && view.meta.legacyCount === 0);
const validate = view.groups.find(g => g.operation === 'Validate');
check('Validate grouped with 2 pairs', validate && validate.pairCount === 2 && validate.scenarios.length === 2);
check('paired groups sort first', view.groups[0].operation === 'Validate');
const ascii = validate && validate.scenarios.find(s => s.scenario === 'ascii');
check('ascii ratio 6x faster', ascii && ascii.ratio.cls === 'ratio-faster' && ascii.ratio.text === 'txt 6.0× faster');
check('table rows: one per scenario', view.rows.length === 3);
const vRow = view.rows.find(r => r.operation === 'Validate' && r.scenario === 'ascii');
check('table row carries txt/naive/ratio', !!(vRow && vRow.txt && vRow.naive && vRow.ratio));
check('history series: 5 current + 1 retired', view.series.length === 6 &&
  view.series.filter(s => s.retired).length === 1);
check('stale name retired, absent from latest', view.series.find(s => s.name === 'BM_Stale_Legacy').retired === true &&
  !view.latestNames.has('BM_Stale_Legacy'));
check('current names first', view.series[0].retired === false);
check('series points date-sorted', view.series.every(s => s.points.every((p, i, a) => i === 0 || a[i-1].date <= p.date)));

if (failures) process.exit(1);
console.log('dashboard logic test: ok');
"""


def run_dashboard_logic_test(node: str, html_text: str) -> int:
    match = re.search(
        r"// == VIEW MODEL START ==([\s\S]*?)// == VIEW MODEL END ==", html_text
    )
    if not match:
        error("docs/comparison.html view-model markers not found or malformed")
        return 1

    with tempfile.TemporaryDirectory() as tmp:
        harness = Path(tmp) / "harness.cjs"
        harness.write_text(
            "const VIEW_MODEL = "
            + json.dumps(match.group(1))
            + ";\nconst FIXTURE = "
            + json.dumps(DASHBOARD_FIXTURE)
            + ";\n"
            + DASHBOARD_HARNESS,
            encoding="utf-8",
        )
        result = subprocess.run(
            [node, str(harness)], capture_output=True, text=True, timeout=60
        )
    if result.returncode != 0:
        error(f"dashboard logic test failed:\n{result.stdout}{result.stderr}")
        return 1
    print(result.stdout.strip())
    return 0


def check_comparison_dashboard(path: Path) -> int:
    if not path.exists():
        return 0

    failures = 0
    text = read_text(path)
    required_tokens = [
        "data.js",
        "window.BENCHMARK_DATA",
        "parseBenchName",
        "buildView",
        "// == VIEW MODEL START ==",
        "// == VIEW MODEL END ==",
    ]
    for token in required_tokens:
        if token not in text:
            error(f"{path.relative_to(ROOT)} is missing expected dashboard token: {token}")
            failures += 1
    if failures:
        return failures

    node = shutil.which("node")
    if node is None:
        print("docs check: node not found, skipping dashboard logic test")
        return 0
    return failures + run_dashboard_logic_test(node, text)


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
