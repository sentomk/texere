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

#include <string>
#include <string_view>

using namespace txt;

// ============================================================================
// Helpers
// ============================================================================

// 1000 ASCII letters
static const std::string kAsciiLower1k = []() {
    std::string s;
    s.reserve(1000);
    for (int i = 0; i < 1000; ++i) s += static_cast<char>('a' + (i % 26));
    return s;
}();

static const std::string kAsciiMixed1k = []() {
    std::string s;
    s.reserve(1000);
    for (int i = 0; i < 1000; ++i) s += static_cast<char>('A' + (i % 26));
    return s;
}();

// 1000 CJK characters (3 bytes each, case-insensitive)
static const std::string kCJK1k = []() {
    std::string s;
    s.reserve(3000);
    for (int i = 0; i < 1000; ++i) s += "\xe4\xb8\xad"; // 中
    return s;
}();

// Mixed ASCII + CJK
static const std::string kMixed1k = []() {
    std::string s;
    s.reserve(2000);
    for (int i = 0; i < 500; ++i) s += 'a';
    for (int i = 0; i < 500; ++i) s += "\xe4\xb8\xad";
    return s;
}();

// German eszett string (ß)
static const std::string kEszett100 = []() {
    std::string s;
    s.reserve(500);
    for (int i = 0; i < 100; ++i) s += "\xc3\x9f"; // ß
    return s;
}();

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
    for (auto _ : state) {
        auto upper = naive_to_upper(kAsciiLower1k);
        benchmark::DoNotOptimize(upper);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiLower1k.size());
}
BENCHMARK(BM_Naive_ToUpper_ASCII_Lower);

static void BM_Naive_ToUpper_ASCII_AlreadyUpper(benchmark::State& state) {
    for (auto _ : state) {
        auto upper = naive_to_upper(kAsciiMixed1k);
        benchmark::DoNotOptimize(upper);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiMixed1k.size());
}
BENCHMARK(BM_Naive_ToUpper_ASCII_AlreadyUpper);

static void BM_Naive_ToLower_ASCII_Upper(benchmark::State& state) {
    for (auto _ : state) {
        auto lower = naive_to_lower(kAsciiMixed1k);
        benchmark::DoNotOptimize(lower);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiMixed1k.size());
}
BENCHMARK(BM_Naive_ToLower_ASCII_Upper);

// ============================================================================
// to_upper
// ============================================================================

static void BM_ToUpper_ASCII_Lower(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAsciiLower1k);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiLower1k.size());
}
BENCHMARK(BM_ToUpper_ASCII_Lower);

static void BM_ToUpper_ASCII_AlreadyUpper(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAsciiMixed1k);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiMixed1k.size());
}
BENCHMARK(BM_ToUpper_ASCII_AlreadyUpper);

static void BM_ToUpper_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_ToUpper_CJK);

static void BM_ToUpper_Mixed(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kMixed1k);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    state.SetBytesProcessed(state.iterations() * kMixed1k.size());
}
BENCHMARK(BM_ToUpper_Mixed);

static void BM_ToUpper_Eszett(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kEszett100);
    for (auto _ : state) {
        auto upper = to_upper(s);
        benchmark::DoNotOptimize(upper);
    }
    state.SetBytesProcessed(state.iterations() * kEszett100.size());
}
BENCHMARK(BM_ToUpper_Eszett);

// ============================================================================
// to_lower
// ============================================================================

static void BM_ToLower_ASCII_Upper(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAsciiMixed1k);
    for (auto _ : state) {
        auto lower = to_lower(s);
        benchmark::DoNotOptimize(lower);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiMixed1k.size());
}
BENCHMARK(BM_ToLower_ASCII_Upper);

static void BM_ToLower_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        auto lower = to_lower(s);
        benchmark::DoNotOptimize(lower);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_ToLower_CJK);

// ============================================================================
// to_title
// ============================================================================

static void BM_ToTitle_ASCII_Lower(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAsciiLower1k);
    for (auto _ : state) {
        auto title = to_title(s);
        benchmark::DoNotOptimize(title);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiLower1k.size());
}
BENCHMARK(BM_ToTitle_ASCII_Lower);

static void BM_ToTitle_Mixed(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kMixed1k);
    for (auto _ : state) {
        auto title = to_title(s);
        benchmark::DoNotOptimize(title);
    }
    state.SetBytesProcessed(state.iterations() * kMixed1k.size());
}
BENCHMARK(BM_ToTitle_Mixed);

// ============================================================================
// case_fold
// ============================================================================

static void BM_CaseFold_ASCII_Lower(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAsciiLower1k);
    for (auto _ : state) {
        auto folded = case_fold(s);
        benchmark::DoNotOptimize(folded);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiLower1k.size());
}
BENCHMARK(BM_CaseFold_ASCII_Lower);

static void BM_CaseFold_ASCII_Mixed(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAsciiMixed1k);
    for (auto _ : state) {
        auto folded = case_fold(s);
        benchmark::DoNotOptimize(folded);
    }
    state.SetBytesProcessed(state.iterations() * kAsciiMixed1k.size());
}
BENCHMARK(BM_CaseFold_ASCII_Mixed);

static void BM_CaseFold_Eszett(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kEszett100);
    for (auto _ : state) {
        auto folded = case_fold(s);
        benchmark::DoNotOptimize(folded);
    }
    state.SetBytesProcessed(state.iterations() * kEszett100.size());
}
BENCHMARK(BM_CaseFold_Eszett);
