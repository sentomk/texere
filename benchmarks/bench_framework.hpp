// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// Shared helpers for texere benchmarks.

#pragma once

#include <benchmark/benchmark.h>

#include <cstddef>
#include <cstdint>

namespace texere_bench {

inline void set_bytes_processed(benchmark::State& state, std::size_t bytes_per_iteration) {
    state.SetBytesProcessed(state.iterations() * static_cast<int64_t>(bytes_per_iteration));
}

} // namespace texere_bench
