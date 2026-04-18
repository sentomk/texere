/// @file bench_string.cpp
/// @brief Micro-benchmarks for txt::string core operations.
///
/// Build with TEXERE_BUILD_BENCHMARKS=ON, then run:
///   ./texere_bench --benchmark_format=json

#include <benchmark/benchmark.h>
#include <texere/string.hpp>

using namespace txt;

// ============================================================================
// Helpers
// ============================================================================

// 1 000-grapheme ASCII string
static const std::string kAscii1k(1000, 'x');

// 1 000-grapheme CJK string (3 bytes/char × 1000)
static const std::string kCJK1k = []() {
    std::string s;
    s.reserve(3000);
    for (int i = 0; i < 1000; ++i)
        s += "\xe4\xb8\xad"; // 中
    return s;
}();

// A ZWJ family emoji repeated 100 times (1 grapheme cluster = 18 bytes each)
static const std::string kEmoji100 = []() {
    const char family[] =
        "\xf0\x9f\x91\xa8\xe2\x80\x8d"
        "\xf0\x9f\x91\xa9\xe2\x80\x8d"
        "\xf0\x9f\x91\xa7";
    std::string s;
    for (int i = 0; i < 100; ++i) s += family;
    return s;
}();

// ============================================================================
// from_utf8  (strict validation path)
// ============================================================================

static void BM_FromUtf8_ASCII(benchmark::State& state) {
    for (auto _ : state) {
        auto r = string::from_utf8(kAscii1k);
        benchmark::DoNotOptimize(r);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_FromUtf8_ASCII);

static void BM_FromUtf8_CJK(benchmark::State& state) {
    for (auto _ : state) {
        auto r = string::from_utf8(kCJK1k);
        benchmark::DoNotOptimize(r);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_FromUtf8_CJK);

// ============================================================================
// length()  –  grapheme count via full scan
// ============================================================================

static void BM_Length_ASCII(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.length());
    }
}
BENCHMARK(BM_Length_ASCII);

static void BM_Length_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.length());
    }
}
BENCHMARK(BM_Length_CJK);

static void BM_Length_Emoji_ZWJ(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kEmoji100);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.length());
    }
}
BENCHMARK(BM_Length_Emoji_ZWJ);

// ============================================================================
// grapheme_at(n)  –  O(n) seek
// ============================================================================

static void BM_GraphemeAt_Middle_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        benchmark::DoNotOptimize(s.grapheme_at(500));
    }
}
BENCHMARK(BM_GraphemeAt_Middle_CJK);

// ============================================================================
// Iteration  –  full grapheme traversal
// ============================================================================

static void BM_GraphemeIteration_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        std::size_t n = 0;
        for (auto g : s.graphemes()) {
            benchmark::DoNotOptimize(g);
            ++n;
        }
        benchmark::DoNotOptimize(n);
    }
}
BENCHMARK(BM_GraphemeIteration_CJK);

static void BM_CodepointIteration_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        std::size_t n = 0;
        for (auto cp : s.codepoints()) {
            benchmark::DoNotOptimize(cp);
            ++n;
        }
        benchmark::DoNotOptimize(n);
    }
}
BENCHMARK(BM_CodepointIteration_CJK);
