// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: bench_normalize.cpp
// Micro-benchmarks for Unicode normalization.
//
// Build with TEXERE_BUILD_BENCHMARKS=ON, then run:
//   ./texere_bench --benchmark_format=json

#include <benchmark/benchmark.h>
#include <texere/string.hpp>
#include <texere/normalize.hpp>

#include "bench_framework.hpp"
#include "bench_inputs.hpp"

#include <string>
#include <string_view>

using namespace txt;

// ============================================================================
// normalized() – NFC
// ============================================================================

static void BM_Normalize_NFC_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFC);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFC_ASCII)->Name("Normalize.NFC/txt/ascii/1k");

static void BM_Normalize_NFC_NFD_to_NFC(benchmark::State& state) {
    const auto& input = texere_bench::inputs::nfd_e_acute_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFC);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFC_NFD_to_NFC)->Name("Normalize.NFC/txt/nfd_e_acute/1k");

static void BM_Normalize_NFC_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFC);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFC_CJK)->Name("Normalize.NFC/txt/cjk/1k");

// ============================================================================
// normalized() – NFD
// ============================================================================

static void BM_Normalize_NFD_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFD);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFD_ASCII)->Name("Normalize.NFD/txt/ascii/1k");

static void BM_Normalize_NFD_NFC_to_NFD(benchmark::State& state) {
    const auto& input = texere_bench::inputs::nfc_e_acute_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFD);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFD_NFC_to_NFD)->Name("Normalize.NFD/txt/nfc_e_acute/1k");

// ============================================================================
// normalized() – NFKC
// ============================================================================

static void BM_Normalize_NFKC_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFKC);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFKC_ASCII)->Name("Normalize.NFKC/txt/ascii/1k");

static void BM_Normalize_NFKC_Mixed(benchmark::State& state) {
    const auto& input = texere_bench::inputs::mixed_ascii_cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFKC);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFKC_Mixed)->Name("Normalize.NFKC/txt/mixed_ascii_cjk/1k");

// ============================================================================
// normalized() – NFKD
// ============================================================================

static void BM_Normalize_NFKD_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFKD);
        benchmark::DoNotOptimize(norm);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Normalize_NFKD_ASCII)->Name("Normalize.NFKD/txt/ascii/1k");

// ============================================================================
// equals_normalized()
// ============================================================================

static void BM_EqualsNormalized_Equal_NFC(benchmark::State& state) {
    const auto& input = texere_bench::inputs::nfc_e_acute_1k();
    auto a = string::from_utf8_unchecked(input);
    auto b = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto eq = txt::equals_normalized(a, b, normalization_form::NFC);
        benchmark::DoNotOptimize(eq);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_EqualsNormalized_Equal_NFC)->Name("Normalize.Equals/txt/nfc_equal/1k");

static void BM_EqualsNormalized_Equal_NFD_to_NFC(benchmark::State& state) {
    const auto& left = texere_bench::inputs::nfc_e_acute_1k();
    const auto& right = texere_bench::inputs::nfd_e_acute_1k();
    auto a = string::from_utf8_unchecked(left);
    auto b = string::from_utf8_unchecked(right);
    for (auto _ : state) {
        auto eq = txt::equals_normalized(a, b, normalization_form::NFC);
        benchmark::DoNotOptimize(eq);
    }
    texere_bench::set_bytes_processed(state, left.size() + right.size());
}
BENCHMARK(BM_EqualsNormalized_Equal_NFD_to_NFC)->Name("Normalize.Equals/txt/nfc_vs_nfd_equal/1k");

static void BM_EqualsNormalized_NotEqual(benchmark::State& state) {
    const auto& left = texere_bench::inputs::nfc_e_acute_1k();
    const auto& right = texere_bench::inputs::ascii_1k();
    auto a = string::from_utf8_unchecked(left);
    auto b = string::from_utf8_unchecked(right);
    for (auto _ : state) {
        auto eq = txt::equals_normalized(a, b, normalization_form::NFC);
        benchmark::DoNotOptimize(eq);
    }
    texere_bench::set_bytes_processed(state, left.size() + right.size());
}
BENCHMARK(BM_EqualsNormalized_NotEqual)->Name("Normalize.Equals/txt/not_equal/1k");

// ============================================================================
// Naive baselines — no-op pass-through for normalized(), byte-level for equals
// ============================================================================

static void BM_Naive_Normalize_NFC_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        // Naive "normalization": return input as-is
        auto out = s.to_std_string();
        benchmark::DoNotOptimize(out);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_Normalize_NFC_ASCII)->Name("Normalize.NFC/naive/ascii/1k");

static void BM_Naive_Normalize_NFC_NFD_to_NFC(benchmark::State& state) {
    const auto& input = texere_bench::inputs::nfd_e_acute_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto out = s.to_std_string();
        benchmark::DoNotOptimize(out);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_Normalize_NFC_NFD_to_NFC)->Name("Normalize.NFC/naive/nfd_e_acute/1k");

static void BM_Naive_EqualsNormalized_Equal_NFC(benchmark::State& state) {
    const auto& input = texere_bench::inputs::nfc_e_acute_1k();
    auto a = string::from_utf8_unchecked(input);
    auto b = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        // Naive: byte-level comparison
        auto eq = (a.to_std_string_view() == b.to_std_string_view());
        benchmark::DoNotOptimize(eq);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_EqualsNormalized_Equal_NFC)->Name("Normalize.Equals/naive/nfc_equal/1k");
