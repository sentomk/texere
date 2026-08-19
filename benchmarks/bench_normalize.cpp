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

#include <string>
#include <string_view>

using namespace txt;

// ============================================================================
// Helpers
// ============================================================================

// ASCII string (1000 chars)
static const std::string kAscii1k(1000, 'a');

// NFD form of U+00E9 repeated 1000 times (e + combining acute = 3 bytes each)
static const std::string kNFD1000 = []() {
    std::string s;
    s.reserve(3000);
    for (int i = 0; i < 1000; ++i) s += "e\xcc\x81";
    return s;
}();

// NFC form of U+00E9 repeated 1000 times (composed = 2 bytes each)
static const std::string kNFC1000 = []() {
    std::string s;
    s.reserve(2000);
    for (int i = 0; i < 1000; ++i) s += "\xc3\xa9";
    return s;
}();

// CJK string (1000 chars, 3 bytes each)
static const std::string kCJK1k = []() {
    std::string s;
    s.reserve(3000);
    for (int i = 0; i < 1000; ++i) s += "\xe4\xb8\xad";
    return s;
}();

// Mixed ASCII + CJK
static const std::string kMixed1k = []() {
    std::string s;
    s.reserve(2000);
    for (int i = 0; i < 500; ++i) s += "a";
    for (int i = 0; i < 500; ++i) s += "\xe4\xb8\xad";
    return s;
}();

// ============================================================================
// normalized() – NFC
// ============================================================================

static void BM_Normalize_NFC_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFC);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_Normalize_NFC_ASCII)->Name("Normalize.NFC/txt/ascii");

static void BM_Normalize_NFC_NFD_to_NFC(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kNFD1000);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFC);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kNFD1000.size());
}
BENCHMARK(BM_Normalize_NFC_NFD_to_NFC)->Name("Normalize.NFC/txt/nfd_input");

static void BM_Normalize_NFC_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFC);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_Normalize_NFC_CJK)->Name("Normalize.NFC/txt/cjk");

// ============================================================================
// normalized() – NFD
// ============================================================================

static void BM_Normalize_NFD_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFD);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_Normalize_NFD_ASCII)->Name("Normalize.NFD/txt/ascii");

static void BM_Normalize_NFD_NFC_to_NFD(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kNFC1000);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFD);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kNFC1000.size());
}
BENCHMARK(BM_Normalize_NFD_NFC_to_NFD)->Name("Normalize.NFD/txt/nfc_input");

// ============================================================================
// normalized() – NFKC
// ============================================================================

static void BM_Normalize_NFKC_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFKC);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_Normalize_NFKC_ASCII)->Name("Normalize.NFKC/txt/ascii");

static void BM_Normalize_NFKC_Mixed(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kMixed1k);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFKC);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kMixed1k.size());
}
BENCHMARK(BM_Normalize_NFKC_Mixed)->Name("Normalize.NFKC/txt/mixed");

// ============================================================================
// normalized() – NFKD
// ============================================================================

static void BM_Normalize_NFKD_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto norm = normalized(s, normalization_form::NFKD);
        benchmark::DoNotOptimize(norm);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_Normalize_NFKD_ASCII)->Name("Normalize.NFKD/txt/ascii");

// ============================================================================
// equals_normalized()
// ============================================================================

static void BM_EqualsNormalized_Equal_NFC(benchmark::State& state) {
    auto a = string::from_utf8_unchecked(kNFC1000);
    auto b = string::from_utf8_unchecked(kNFC1000);
    for (auto _ : state) {
        auto eq = txt::equals_normalized(a, b, normalization_form::NFC);
        benchmark::DoNotOptimize(eq);
    }
    state.SetBytesProcessed(state.iterations() * kNFC1000.size());
}
BENCHMARK(BM_EqualsNormalized_Equal_NFC)->Name("EqualsNormalized/txt/equal_nfc");

static void BM_EqualsNormalized_Equal_NFD_to_NFC(benchmark::State& state) {
    auto a = string::from_utf8_unchecked(kNFC1000);
    auto b = string::from_utf8_unchecked(kNFD1000);
    for (auto _ : state) {
        auto eq = txt::equals_normalized(a, b, normalization_form::NFC);
        benchmark::DoNotOptimize(eq);
    }
    state.SetBytesProcessed(state.iterations() * (kNFC1000.size() + kNFD1000.size()));
}
BENCHMARK(BM_EqualsNormalized_Equal_NFD_to_NFC)->Name("EqualsNormalized/txt/equal_nfd_input");

static void BM_EqualsNormalized_NotEqual(benchmark::State& state) {
    auto a = string::from_utf8_unchecked(kNFC1000);
    auto b = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto eq = txt::equals_normalized(a, b, normalization_form::NFC);
        benchmark::DoNotOptimize(eq);
    }
    state.SetBytesProcessed(state.iterations() * (kNFC1000.size() + kAscii1k.size()));
}
BENCHMARK(BM_EqualsNormalized_NotEqual)->Name("EqualsNormalized/txt/not_equal");

// ============================================================================
// Naive baselines — no-op pass-through for normalized(), byte-level for equals
// ============================================================================

static void BM_Naive_Normalize_NFC_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        // Naive "normalization": return input as-is
        auto out = s.to_std_string();
        benchmark::DoNotOptimize(out);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_Naive_Normalize_NFC_ASCII)->Name("Normalize.NFC/naive/ascii");

static void BM_Naive_Normalize_NFC_NFD_to_NFC(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kNFD1000);
    for (auto _ : state) {
        auto out = s.to_std_string();
        benchmark::DoNotOptimize(out);
    }
    state.SetBytesProcessed(state.iterations() * kNFD1000.size());
}
BENCHMARK(BM_Naive_Normalize_NFC_NFD_to_NFC)->Name("Normalize.NFC/naive/nfd_input");

static void BM_Naive_EqualsNormalized_Equal_NFC(benchmark::State& state) {
    auto a = string::from_utf8_unchecked(kNFC1000);
    auto b = string::from_utf8_unchecked(kNFC1000);
    for (auto _ : state) {
        // Naive: byte-level comparison
        auto eq = (a.to_std_string_view() == b.to_std_string_view());
        benchmark::DoNotOptimize(eq);
    }
    state.SetBytesProcessed(state.iterations() * kNFC1000.size());
}
BENCHMARK(BM_Naive_EqualsNormalized_Equal_NFC)->Name("EqualsNormalized/naive/equal_nfc");
