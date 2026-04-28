// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: bench_case.cpp
// Micro-benchmarks for Unicode case mapping.
//
// Build with TEXERE_BUILD_BENCHMARKS=ON, then run:
//   ./texere_bench --benchmark_format=json

#include <benchmark/benchmark.h>
#include <texere/string.hpp>
#include <texere/case.hpp>

#include "bench_framework.hpp"
#include "bench_inputs.hpp"

#include <string>
#include <string_view>

using namespace txt;

// ============================================================================
// Naive scalar baselines (ASCII-only byte-level case mapping)
// ============================================================================

static std::string naive_to_upper(std::string_view input) {
    std::string res;
    res.reserve(input.size());
    for (unsigned char c : input) {
        if (c >= 'a' && c <= 'z') res.push_back(static_cast<char>(c - 32));
        else res.push_back(static_cast<char>(c));
    }
    return res;
}

static std::string naive_to_lower(std::string_view input) {
    std::string res;
    res.reserve(input.size());
    for (unsigned char c : input) {
        if (c >= 'A' && c <= 'Z') res.push_back(static_cast<char>(c + 32));
        else res.push_back(static_cast<char>(c));
    }
    return res;
}

static void BM_Naive_ToUpper_ASCII_Lower(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_lower_1k();
    for (auto _ : state) {
        auto upper = naive_to_upper(input);
        benchmark::DoNotOptimize(upper);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_ToUpper_ASCII_Lower)->Name("Case.ToUpper/naive/ascii_lower/1k");

static void BM_Naive_ToUpper_ASCII_AlreadyUpper(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_upper_1k();
    for (auto _ : state) {
        auto upper = naive_to_upper(input);
        benchmark::DoNotOptimize(upper);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_ToUpper_ASCII_AlreadyUpper)->Name("Case.ToUpper/naive/ascii_upper/1k");

static void BM_Naive_ToLower_ASCII_Upper(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_upper_1k();
    for (auto _ : state) {
        auto lower = naive_to_lower(input);
        benchmark::DoNotOptimize(lower);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_ToLower_ASCII_Upper)->Name("Case.ToLower/naive/ascii_upper/1k");

// ============================================================================
// to_upper
// ============================================================================

static void BM_ToUpper_ASCII_Lower(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_lower_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToUpper_ASCII_Lower)->Name("Case.ToUpper/txt/ascii_lower/1k");

static void BM_ToUpper_ASCII_AlreadyUpper(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_upper_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToUpper_ASCII_AlreadyUpper)->Name("Case.ToUpper/txt/ascii_upper/1k");

static void BM_ToUpper_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToUpper_CJK)->Name("Case.ToUpper/txt/cjk/1k");

static void BM_ToUpper_Mixed(benchmark::State& state) {
    const auto& input = texere_bench::inputs::mixed_ascii_cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToUpper_Mixed)->Name("Case.ToUpper/txt/mixed_ascii_cjk/1k");

static void BM_ToUpper_Eszett(benchmark::State& state) {
    const auto& input = texere_bench::inputs::eszett_100();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToUpper_Eszett)->Name("Case.ToUpper/txt/eszett/100");

// ============================================================================
// to_lower
// ============================================================================

static void BM_ToLower_ASCII_Upper(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_upper_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto lower = to_lower(s);
        benchmark::DoNotOptimize(lower);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToLower_ASCII_Upper)->Name("Case.ToLower/txt/ascii_upper/1k");

static void BM_ToLower_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto lower = to_lower(s);
        benchmark::DoNotOptimize(lower);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToLower_CJK)->Name("Case.ToLower/txt/cjk/1k");

// ============================================================================
// to_title
// ============================================================================

static void BM_ToTitle_ASCII_Lower(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_lower_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto title = to_title(s);
        benchmark::DoNotOptimize(title);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToTitle_ASCII_Lower)->Name("Case.ToTitle/txt/ascii_lower/1k");

static void BM_ToTitle_Mixed(benchmark::State& state) {
    const auto& input = texere_bench::inputs::mixed_ascii_cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto title = to_title(s);
        benchmark::DoNotOptimize(title);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToTitle_Mixed)->Name("Case.ToTitle/txt/mixed_ascii_cjk/1k");

// ============================================================================
// case_fold
// ============================================================================

static void BM_CaseFold_ASCII_Lower(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_lower_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto folded = case_fold(s);
        benchmark::DoNotOptimize(folded);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_CaseFold_ASCII_Lower)->Name("Case.Fold/txt/ascii_lower/1k");

static void BM_CaseFold_ASCII_Mixed(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_upper_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto folded = case_fold(s);
        benchmark::DoNotOptimize(folded);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_CaseFold_ASCII_Mixed)->Name("Case.Fold/txt/ascii_upper/1k");

static void BM_CaseFold_Eszett(benchmark::State& state) {
    const auto& input = texere_bench::inputs::eszett_100();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto folded = case_fold(s);
        benchmark::DoNotOptimize(folded);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_CaseFold_Eszett)->Name("Case.Fold/txt/eszett/100");
