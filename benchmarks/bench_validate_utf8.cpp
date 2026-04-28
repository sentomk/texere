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

#include "bench_framework.hpp"
#include "bench_inputs.hpp"

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
// Benchmarks: string::from_utf8  (simdutf backend)
// ============================================================================

static void BM_FromUtf8_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    for (auto _ : state) {
        auto r = string::from_utf8(input);
        benchmark::DoNotOptimize(r);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromUtf8_ASCII)->Name("Validate/txt/ascii/1k");

static void BM_FromUtf8_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    for (auto _ : state) {
        auto r = string::from_utf8(input);
        benchmark::DoNotOptimize(r);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromUtf8_CJK)->Name("Validate/txt/cjk/1k");

static void BM_FromUtf8_Mixed(benchmark::State& state) {
    const auto& input = texere_bench::inputs::mixed_ascii_cjk_1k();
    for (auto _ : state) {
        auto r = string::from_utf8(input);
        benchmark::DoNotOptimize(r);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromUtf8_Mixed)->Name("Validate/txt/mixed_ascii_cjk/1k");

static void BM_FromUtf8_Emoji(benchmark::State& state) {
    const auto& input = texere_bench::inputs::emoji_family_100();
    for (auto _ : state) {
        auto r = string::from_utf8(input);
        benchmark::DoNotOptimize(r);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromUtf8_Emoji)->Name("Validate/txt/emoji_zwj/100");

static void BM_FromUtf8_Invalid(benchmark::State& state) {
    const auto& input = texere_bench::inputs::invalid_continuation_1k();
    for (auto _ : state) {
        auto r = string::from_utf8(input);
        benchmark::DoNotOptimize(r);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromUtf8_Invalid)->Name("Validate/txt/invalid_continuation/1k");

// ============================================================================
// Benchmarks: naive scalar validation
// ============================================================================

static void BM_NaiveValidate_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_x_1k();
    for (auto _ : state) {
        auto ok = naive_validate_utf8(input.data(), input.size());
        benchmark::DoNotOptimize(ok);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_NaiveValidate_ASCII)->Name("Validate/naive/ascii/1k");

static void BM_NaiveValidate_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    for (auto _ : state) {
        auto ok = naive_validate_utf8(input.data(), input.size());
        benchmark::DoNotOptimize(ok);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_NaiveValidate_CJK)->Name("Validate/naive/cjk/1k");

static void BM_NaiveValidate_Mixed(benchmark::State& state) {
    const auto& input = texere_bench::inputs::mixed_ascii_cjk_1k();
    for (auto _ : state) {
        auto ok = naive_validate_utf8(input.data(), input.size());
        benchmark::DoNotOptimize(ok);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_NaiveValidate_Mixed)->Name("Validate/naive/mixed_ascii_cjk/1k");

static void BM_NaiveValidate_Emoji(benchmark::State& state) {
    const auto& input = texere_bench::inputs::emoji_family_100();
    for (auto _ : state) {
        auto ok = naive_validate_utf8(input.data(), input.size());
        benchmark::DoNotOptimize(ok);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_NaiveValidate_Emoji)->Name("Validate/naive/emoji_zwj/100");

static void BM_NaiveValidate_Invalid(benchmark::State& state) {
    const auto& input = texere_bench::inputs::invalid_continuation_1k();
    for (auto _ : state) {
        auto ok = naive_validate_utf8(input.data(), input.size());
        benchmark::DoNotOptimize(ok);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_NaiveValidate_Invalid)->Name("Validate/naive/invalid_continuation/1k");
