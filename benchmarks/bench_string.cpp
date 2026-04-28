// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: bench_string.cpp
// Description: Core implementation and declarations for texere.

// @file bench_string.cpp
// Micro-benchmarks for txt::string core operations.
//
// Build with TEXERE_BUILD_BENCHMARKS=ON, then run:
//   ./texere_bench --benchmark_format=json

#include <benchmark/benchmark.h>
#include <texere/string.hpp>
#include <texere/string_view.hpp>

#include "bench_framework.hpp"
#include "bench_inputs.hpp"

using namespace txt;

// ============================================================================
// length()  –  grapheme count via full scan
// ============================================================================

static void BM_Length_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.length());
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Length_ASCII)->Name("String.Length/txt/ascii/1k");

static void BM_Length_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.length());
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Length_CJK)->Name("String.Length/txt/cjk/1k");

static void BM_Length_Emoji_ZWJ(benchmark::State& state) {
    const auto& input = texere_bench::inputs::emoji_family_100();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.length());
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Length_Emoji_ZWJ)->Name("String.Length/txt/emoji_zwj/100");

// ============================================================================
// grapheme_at(n)  –  O(n) seek
// ============================================================================

static void BM_GraphemeAt_Middle_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.grapheme_at(500));
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_GraphemeAt_Middle_CJK)->Name("String.GraphemeAt/txt/cjk_middle/1k");

// ============================================================================
// Iteration  –  full grapheme traversal
// ============================================================================

static void BM_GraphemeIteration_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        std::size_t n = 0;
        for (auto g : s.graphemes()) {
            benchmark::DoNotOptimize(g);
            ++n;
        }
        benchmark::DoNotOptimize(n);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_GraphemeIteration_CJK)->Name("String.GraphemeIteration/txt/cjk/1k");

static void BM_CodepointIteration_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        std::size_t n = 0;
        for (auto cp : s.codepoints()) {
            benchmark::DoNotOptimize(cp);
            ++n;
        }
        benchmark::DoNotOptimize(n);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_CodepointIteration_CJK)->Name("String.CodepointIteration/txt/cjk/1k");

// ============================================================================
// from_utf8_lossy
// ============================================================================

static void BM_FromUtf8Lossy_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    for (auto _ : state) {
        auto r = string::from_utf8_lossy(input);
        benchmark::DoNotOptimize(r);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromUtf8Lossy_ASCII)->Name("String.FromUtf8Lossy/txt/ascii/1k");

static void BM_FromUtf8Lossy_WithInvalidBytes(benchmark::State& state) {
    const auto& input = texere_bench::inputs::invalid_mixed_1k();
    for (auto _ : state) {
        auto r = string::from_utf8_lossy(input);
        benchmark::DoNotOptimize(r);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromUtf8Lossy_WithInvalidBytes)->Name("String.FromUtf8Lossy/txt/invalid_mixed/1k");

// ============================================================================
// grapheme_at(n) – O(n) seek
// ============================================================================

static void BM_GraphemeAt_Begin_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.grapheme_at(0));
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_GraphemeAt_Begin_ASCII)->Name("String.GraphemeAt/txt/ascii_begin/1k");

static void BM_GraphemeAt_End_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.grapheme_at(999));
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_GraphemeAt_End_ASCII)->Name("String.GraphemeAt/txt/ascii_end/1k");

// ============================================================================
// Conversion
// ============================================================================

static void BM_ToStdString(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto copy = s.to_std_string();
        benchmark::DoNotOptimize(copy);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToStdString)->Name("String.ToStdString/txt/ascii/1k");

static void BM_ToStdStringView(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto sv = s.to_std_string_view();
        benchmark::DoNotOptimize(sv);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToStdStringView)->Name("String.ToStdStringView/txt/ascii/1k");

// ============================================================================
// Byte iteration
// ============================================================================

static void BM_ByteIteration_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        std::size_t n = 0;
        for (auto b : s.bytes()) {
            benchmark::DoNotOptimize(b);
            ++n;
        }
        benchmark::DoNotOptimize(n);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ByteIteration_CJK)->Name("String.ByteIteration/txt/cjk/1k");
