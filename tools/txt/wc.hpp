// Copyright 2026 The texere Authors.
// Licensed under the MIT License.
//
// File: wc.hpp
// Description: Counting core for `txt wc` (unit-testable, no I/O).

#pragma once

#include <cstddef>
#include <string_view>

namespace txt_tool {
namespace wc {

// Counting results for one input.
//
// All granularities of a text are reported side by side so that the
// differences between them are visible - that is the entire point of the
// tool.  `bytes` always reflects the raw input; the codepoint and grapheme
// columns degrade invalid sequences to U+FFFD (one per ill-formed
// sequence), mirroring txt::string::from_utf8_lossy().
struct counts {
    std::size_t lines      = 0;  //< number of '\n' bytes (wc semantics)
    std::size_t graphemes  = 0;  //< grapheme clusters
    std::size_t codepoints = 0;  //< Unicode scalar values
    std::size_t bytes      = 0;  //< raw byte count
};

// Counts all granularities of `input` in one pass each.
//
// @complexity O(n) per granularity.  Thread-safe (pure function).
counts count(std::string_view input) noexcept;

// Entry point for the `txt wc` subcommand (argv excludes "txt" and "wc").
//
// Returns a process exit code: 0 success, 1 usage error, 2 I/O failure.
int run(int argc, char** argv);

} // namespace wc
} // namespace txt_tool
