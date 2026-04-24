// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: bench_convert.cpp
// Micro-benchmarks for encoding conversion.
//
// Build with TEXERE_BUILD_BENCHMARKS=ON, then run:
//   ./texere_bench --benchmark_format=json

#include <benchmark/benchmark.h>
#include <texere/string.hpp>
#include <texere/convert.hpp>

using namespace txt;

// ============================================================================
// Helpers
// ============================================================================

// ASCII 1KB
static const std::string kAscii1k(1000, 'a');

// CJK 1000 characters (3000 bytes)
static const std::string kCJK1k = []() {
    std::string s;
    s.reserve(3000);
    for (int i = 0; i < 1000; ++i) s += "\xe4\xb8\xad";
    return s;
}();

// Emoji 100 (4 bytes each)
static const std::string kEmoji100 = []() {
    std::string s;
    s.reserve(400);
    for (int i = 0; i < 100; ++i) s += "\xf0\x9f\x98\x80";
    return s;
}();

// Latin-1 1KB (all bytes 0x00-0xFF)
static const std::string kLatin1_1k = []() {
    std::string s;
    s.reserve(1000);
    for (int i = 0; i < 1000; ++i) s += static_cast<char>(i % 256);
    return s;
}();

// ============================================================================
// to_wstring – UTF-8 → UTF-16/UTF-32
// ============================================================================

static void BM_ToWString_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto ws = to_wstring(s);
        benchmark::DoNotOptimize(ws);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_ToWString_ASCII);

static void BM_ToWString_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        auto ws = to_wstring(s);
        benchmark::DoNotOptimize(ws);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_ToWString_CJK);

static void BM_ToWString_Emoji(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kEmoji100);
    for (auto _ : state) {
        auto ws = to_wstring(s);
        benchmark::DoNotOptimize(ws);
    }
    state.SetBytesProcessed(state.iterations() * kEmoji100.size());
}
BENCHMARK(BM_ToWString_Emoji);

// ============================================================================
// from_wstring – UTF-16 → UTF-8
// ============================================================================

static void BM_FromWString_ASCII(benchmark::State& state) {
    std::wstring ws(1000, L'a');
    for (auto _ : state) {
        auto result = from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    state.SetBytesProcessed(state.iterations() * ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_FromWString_ASCII);

static void BM_FromWString_CJK(benchmark::State& state) {
    std::wstring ws(1000, L'\x4e2d'); // 中
    for (auto _ : state) {
        auto result = from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    state.SetBytesProcessed(state.iterations() * ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_FromWString_CJK);

static void BM_FromWString_Emoji(benchmark::State& state) {
    // 😀 in UTF-16 = D83D DE00
    std::wstring ws;
    ws.reserve(200);
    for (int i = 0; i < 100; ++i) {
        ws += L'\xD83D';
        ws += L'\xDE00';
    }
    for (auto _ : state) {
        auto result = from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    state.SetBytesProcessed(state.iterations() * ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_FromWString_Emoji);

// ============================================================================
// from_latin1 – ISO-8859-1 → UTF-8
// ============================================================================

static void BM_FromLatin1_ASCII(benchmark::State& state) {
    for (auto _ : state) {
        auto s = from_latin1(kAscii1k);
        benchmark::DoNotOptimize(s);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_FromLatin1_ASCII);

static void BM_FromLatin1_FullLatin1(benchmark::State& state) {
    for (auto _ : state) {
        auto s = from_latin1(kLatin1_1k);
        benchmark::DoNotOptimize(s);
    }
    state.SetBytesProcessed(state.iterations() * kLatin1_1k.size());
}
BENCHMARK(BM_FromLatin1_FullLatin1);

// ============================================================================
// to_latin1 – UTF-8 → ISO-8859-1
// ============================================================================

static void BM_ToLatin1_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto result = to_latin1(s);
        benchmark::DoNotOptimize(result);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_ToLatin1_ASCII);

static void BM_ToLatin1_CJK_Fails(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        auto result = to_latin1(s);
        benchmark::DoNotOptimize(result);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_ToLatin1_CJK_Fails);
