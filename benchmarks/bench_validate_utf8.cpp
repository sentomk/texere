// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: bench_validate_utf8.cpp
// Micro-benchmarks for UTF-8 validation.
// Compares txt::string::from_utf8 (simdutf-backed) vs naive scalar validation.
//
// Build with TEXERE_BUILD_BENCHMARKS=ON, then run:
//   ./texere_bench --benchmark_format=json

#include <benchmark/benchmark.h>
#include <texere/string.hpp>

using namespace txt;

// ============================================================================
// Naive scalar UTF-8 validator (byte-by-byte state machine)
// Written inline for use as a performance baseline.
// ============================================================================

static bool naive_validate_utf8(const char* data, std::size_t len) {
    const unsigned char* bytes = reinterpret_cast<const unsigned char*>(data);
    std::size_t i = 0;

    while (i < len) {
        unsigned char c = bytes[i];

        if (c <= 0x7F) {
            i += 1;
        } else if ((c & 0xE0) == 0xC0) {
            if (c < 0xC2) return false;
            if (i + 1 >= len) return false;
            if ((bytes[i + 1] & 0xC0) != 0x80) return false;
            i += 2;
        } else if ((c & 0xF0) == 0xE0) {
            if (i + 2 >= len) return false;
            if (c == 0xE0 && (bytes[i + 1] < 0xA0 || bytes[i + 1] > 0xBF)) return false;
            if (c == 0xED && (bytes[i + 1] < 0x80 || bytes[i + 1] > 0x9F)) return false;
            if ((bytes[i + 1] & 0xC0) != 0x80 || (bytes[i + 2] & 0xC0) != 0x80) return false;
            i += 3;
        } else if ((c & 0xF8) == 0xF0) {
            if (c > 0xF4) return false;
            if (i + 3 >= len) return false;
            if (c == 0xF0 && (bytes[i + 1] < 0x90 || bytes[i + 1] > 0xBF)) return false;
            if (c == 0xF4 && (bytes[i + 1] < 0x80 || bytes[i + 1] > 0x8F)) return false;
            if ((bytes[i + 1] & 0xC0) != 0x80 ||
                (bytes[i + 2] & 0xC0) != 0x80 ||
                (bytes[i + 3] & 0xC0) != 0x80) return false;
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}

// ============================================================================
// Input data
// ============================================================================

// 1000 ASCII bytes
static const std::string kAscii1k = []() {
    std::string s(1000, 'x');
    return s;
}();

// 1000 CJK characters (3 bytes each = 3000 bytes)
static const std::string kCJK1k = []() {
    std::string s;
    s.reserve(3000);
    for (int i = 0; i < 1000; ++i) s += "\xe4\xb8\xad";
    return s;
}();

// Mixed ASCII + CJK (2000 bytes)
static const std::string kMixed1k = []() {
    std::string s;
    s.reserve(2000);
    for (int i = 0; i < 500; ++i) s += 'a';
    for (int i = 0; i < 500; ++i) s += "\xe4\xb8\xad";
    return s;
}();

// 100 emoji with ZWJ sequences (1800 bytes)
static const std::string kEmoji100 = []() {
    const char family[] =
        "\xf0\x9f\x91\xa8\xe2\x80\x8d"
        "\xf0\x9f\x91\xa9\xe2\x80\x8d"
        "\xf0\x9f\x91\xa7";
    std::string s;
    for (int i = 0; i < 100; ++i) s += family;
    return s;
}();

// Invalid UTF-8: ASCII with a broken continuation byte
static const std::string kInvalid_Continuation = []() {
    std::string s = kAscii1k;
    s[500] = '\x80';
    return s;
}();

// ============================================================================
// Benchmarks: string::from_utf8  (simdutf backend)
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

static void BM_FromUtf8_Mixed(benchmark::State& state) {
    for (auto _ : state) {
        auto r = string::from_utf8(kMixed1k);
        benchmark::DoNotOptimize(r);
    }
    state.SetBytesProcessed(state.iterations() * kMixed1k.size());
}
BENCHMARK(BM_FromUtf8_Mixed);

static void BM_FromUtf8_Emoji(benchmark::State& state) {
    for (auto _ : state) {
        auto r = string::from_utf8(kEmoji100);
        benchmark::DoNotOptimize(r);
    }
    state.SetBytesProcessed(state.iterations() * kEmoji100.size());
}
BENCHMARK(BM_FromUtf8_Emoji);

static void BM_FromUtf8_Invalid(benchmark::State& state) {
    for (auto _ : state) {
        auto r = string::from_utf8(kInvalid_Continuation);
        benchmark::DoNotOptimize(r);
    }
    state.SetBytesProcessed(state.iterations() * kInvalid_Continuation.size());
}
BENCHMARK(BM_FromUtf8_Invalid);

// ============================================================================
// Benchmarks: naive scalar validation
// ============================================================================

static void BM_NaiveValidate_ASCII(benchmark::State& state) {
    for (auto _ : state) {
        auto ok = naive_validate_utf8(kAscii1k.data(), kAscii1k.size());
        benchmark::DoNotOptimize(ok);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_NaiveValidate_ASCII);

static void BM_NaiveValidate_CJK(benchmark::State& state) {
    for (auto _ : state) {
        auto ok = naive_validate_utf8(kCJK1k.data(), kCJK1k.size());
        benchmark::DoNotOptimize(ok);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_NaiveValidate_CJK);

static void BM_NaiveValidate_Mixed(benchmark::State& state) {
    for (auto _ : state) {
        auto ok = naive_validate_utf8(kMixed1k.data(), kMixed1k.size());
        benchmark::DoNotOptimize(ok);
    }
    state.SetBytesProcessed(state.iterations() * kMixed1k.size());
}
BENCHMARK(BM_NaiveValidate_Mixed);

static void BM_NaiveValidate_Emoji(benchmark::State& state) {
    for (auto _ : state) {
        auto ok = naive_validate_utf8(kEmoji100.data(), kEmoji100.size());
        benchmark::DoNotOptimize(ok);
    }
    state.SetBytesProcessed(state.iterations() * kEmoji100.size());
}
BENCHMARK(BM_NaiveValidate_Emoji);

static void BM_NaiveValidate_Invalid(benchmark::State& state) {
    for (auto _ : state) {
        auto ok = naive_validate_utf8(kInvalid_Continuation.data(), kInvalid_Continuation.size());
        benchmark::DoNotOptimize(ok);
    }
    state.SetBytesProcessed(state.iterations() * kInvalid_Continuation.size());
}
BENCHMARK(BM_NaiveValidate_Invalid);
