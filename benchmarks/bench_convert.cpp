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

#include "bench_framework.hpp"
#include "bench_inputs.hpp"

#include <string>
#include <string_view>

using namespace txt;

// ============================================================================
// to_wstring – UTF-8 → UTF-16/UTF-32
// ============================================================================

static void BM_ToWString_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto ws = to_wstring(s);
        benchmark::DoNotOptimize(ws);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToWString_ASCII)->Name("Convert.ToWString/txt/ascii/1k");

static void BM_ToWString_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto ws = to_wstring(s);
        benchmark::DoNotOptimize(ws);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToWString_CJK)->Name("Convert.ToWString/txt/cjk/1k");

static void BM_ToWString_Emoji(benchmark::State& state) {
    const auto& input = texere_bench::inputs::emoji_100();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto ws = to_wstring(s);
        benchmark::DoNotOptimize(ws);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToWString_Emoji)->Name("Convert.ToWString/txt/emoji/100");

// ============================================================================
// from_wstring – UTF-16 → UTF-8
// ============================================================================

static void BM_FromWString_ASCII(benchmark::State& state) {
    const auto& ws = texere_bench::inputs::wide_ascii_1k();
    for (auto _ : state) {
        auto result = from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    texere_bench::set_bytes_processed(state, ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_FromWString_ASCII)->Name("Convert.FromWString/txt/ascii/1k");

static void BM_FromWString_CJK(benchmark::State& state) {
    const auto& ws = texere_bench::inputs::wide_cjk_1k();
    for (auto _ : state) {
        auto result = from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    texere_bench::set_bytes_processed(state, ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_FromWString_CJK)->Name("Convert.FromWString/txt/cjk/1k");

static void BM_FromWString_Emoji(benchmark::State& state) {
    const auto& ws = texere_bench::inputs::wide_emoji_100();
    for (auto _ : state) {
        auto result = from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    texere_bench::set_bytes_processed(state, ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_FromWString_Emoji)->Name("Convert.FromWString/txt/emoji/100");

// ============================================================================
// from_latin1 – ISO-8859-1 → UTF-8
// ============================================================================

static void BM_FromLatin1_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    for (auto _ : state) {
        auto s = from_latin1(input);
        benchmark::DoNotOptimize(s);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromLatin1_ASCII)->Name("Convert.FromLatin1/txt/ascii/1k");

static void BM_FromLatin1_FullLatin1(benchmark::State& state) {
    const auto& input = texere_bench::inputs::latin1_1k();
    for (auto _ : state) {
        auto s = from_latin1(input);
        benchmark::DoNotOptimize(s);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_FromLatin1_FullLatin1)->Name("Convert.FromLatin1/txt/full_latin1/1k");

// ============================================================================
// to_latin1 – UTF-8 → ISO-8859-1
// ============================================================================

static void BM_ToLatin1_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto result = to_latin1(s);
        benchmark::DoNotOptimize(result);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToLatin1_ASCII)->Name("Convert.ToLatin1/txt/ascii/1k");

static void BM_ToLatin1_CJK_Fails(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto result = to_latin1(s);
        benchmark::DoNotOptimize(result);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_ToLatin1_CJK_Fails)->Name("Convert.ToLatin1/txt/cjk_fails/1k");

// ============================================================================
// Naive baselines — hand-rolled codepoint iteration for conversion
// ============================================================================

static std::wstring naive_to_wstring(std::string_view utf8) {
    std::wstring res;
    res.reserve(utf8.size());
    const unsigned char* bytes = reinterpret_cast<const unsigned char*>(utf8.data());
    std::size_t i = 0;
    while (i < utf8.size()) {
        unsigned char c = bytes[i];
        char32_t cp;
        if (c <= 0x7F)            { cp = c; i += 1; }
        else if ((c & 0xE0) == 0xC0) { cp = (c & 0x1F) << 6  | (bytes[i+1] & 0x3F); i += 2; }
        else if ((c & 0xF0) == 0xE0) { cp = (c & 0x0F) << 12 | (bytes[i+1] & 0x3F) << 6 | (bytes[i+2] & 0x3F); i += 3; }
        else                         { cp = (c & 0x07) << 18 | (bytes[i+1] & 0x3F) << 12 | (bytes[i+2] & 0x3F) << 6 | (bytes[i+3] & 0x3F); i += 4; }
        if constexpr (sizeof(wchar_t) == 2) {
            if (cp <= 0xFFFF) { res.push_back(static_cast<wchar_t>(cp)); }
            else {
                cp -= 0x10000;
                res.push_back(static_cast<wchar_t>(0xD800 | (cp >> 10)));
                res.push_back(static_cast<wchar_t>(0xDC00 | (cp & 0x3FF)));
            }
        } else {
            res.push_back(static_cast<wchar_t>(cp));
        }
    }
    return res;
}

static std::string naive_from_wstring(std::wstring_view ws) {
    std::string res;
    res.reserve(ws.size() * 3);
    for (std::size_t i = 0; i < ws.size(); ++i) {
        char32_t cp;
        if constexpr (sizeof(wchar_t) == 2) {
            wchar_t w = ws[i];
            if (w >= 0xD800 && w <= 0xDBFF &&
                i + 1 < ws.size() &&
                ws[i + 1] >= 0xDC00 && ws[i + 1] <= 0xDFFF) {
                char32_t hi = static_cast<char32_t>(w - 0xD800);
                ++i;
                char32_t lo = static_cast<char32_t>(ws[i] - 0xDC00);
                cp = 0x10000 + (hi << 10) + lo;
            } else {
                cp = static_cast<char32_t>(w);
            }
        } else {
            cp = static_cast<char32_t>(ws[i]);
        }
        if (cp <= 0x7F) {
            res.push_back(static_cast<char>(cp));
        } else if (cp <= 0x7FF) {
            res.push_back(static_cast<char>(0xC0 | (cp >> 6)));
            res.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
        } else if (cp <= 0xFFFF) {
            res.push_back(static_cast<char>(0xE0 | (cp >> 12)));
            res.push_back(static_cast<char>(0x80 | ((cp >> 6) & 0x3F)));
            res.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
        } else {
            res.push_back(static_cast<char>(0xF0 | (cp >> 18)));
            res.push_back(static_cast<char>(0x80 | ((cp >> 12) & 0x3F)));
            res.push_back(static_cast<char>(0x80 | ((cp >> 6) & 0x3F)));
            res.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
        }
    }
    return res;
}

static void BM_Naive_ToWString_ASCII(benchmark::State& state) {
    const auto& input = texere_bench::inputs::ascii_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto ws = naive_to_wstring(s.to_std_string_view());
        benchmark::DoNotOptimize(ws);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_ToWString_ASCII)->Name("Convert.ToWString/naive/ascii/1k");

static void BM_Naive_ToWString_CJK(benchmark::State& state) {
    const auto& input = texere_bench::inputs::cjk_1k();
    auto s = string::from_utf8_unchecked(input);
    for (auto _ : state) {
        auto ws = naive_to_wstring(s.to_std_string_view());
        benchmark::DoNotOptimize(ws);
    }
    texere_bench::set_bytes_processed(state, input.size());
}
BENCHMARK(BM_Naive_ToWString_CJK)->Name("Convert.ToWString/naive/cjk/1k");

static void BM_Naive_FromWString_ASCII(benchmark::State& state) {
    const auto& ws = texere_bench::inputs::wide_ascii_1k();
    for (auto _ : state) {
        auto result = naive_from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    texere_bench::set_bytes_processed(state, ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_Naive_FromWString_ASCII)->Name("Convert.FromWString/naive/ascii/1k");

static void BM_Naive_FromWString_CJK(benchmark::State& state) {
    const auto& ws = texere_bench::inputs::wide_cjk_1k();
    for (auto _ : state) {
        auto result = naive_from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    texere_bench::set_bytes_processed(state, ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_Naive_FromWString_CJK)->Name("Convert.FromWString/naive/cjk/1k");
