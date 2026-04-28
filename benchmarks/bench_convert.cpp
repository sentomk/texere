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

#include <string>
#include <string_view>

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
            if (w >= 0xD800 && w <= 0xDBFF) {
                char32_t hi = w - 0xD800;
                ++i;
                char32_t lo = ws[i] - 0xDC00;
                cp = 0x10000 + (hi << 10) + lo;
            } else {
                cp = w;
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
    auto s = string::from_utf8_unchecked(kAscii1k);
    for (auto _ : state) {
        auto ws = naive_to_wstring(s.to_std_string_view());
        benchmark::DoNotOptimize(ws);
    }
    state.SetBytesProcessed(state.iterations() * kAscii1k.size());
}
BENCHMARK(BM_Naive_ToWString_ASCII);

static void BM_Naive_ToWString_CJK(benchmark::State& state) {
    auto s = string::from_utf8_unchecked(kCJK1k);
    for (auto _ : state) {
        auto ws = naive_to_wstring(s.to_std_string_view());
        benchmark::DoNotOptimize(ws);
    }
    state.SetBytesProcessed(state.iterations() * kCJK1k.size());
}
BENCHMARK(BM_Naive_ToWString_CJK);

static void BM_Naive_FromWString_ASCII(benchmark::State& state) {
    std::wstring ws(1000, L'a');
    for (auto _ : state) {
        auto result = naive_from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    state.SetBytesProcessed(state.iterations() * ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_Naive_FromWString_ASCII);

static void BM_Naive_FromWString_CJK(benchmark::State& state) {
    std::wstring ws(1000, L'\x4e2d');
    for (auto _ : state) {
        auto result = naive_from_wstring(ws);
        benchmark::DoNotOptimize(result);
    }
    state.SetBytesProcessed(state.iterations() * ws.size() * sizeof(wchar_t));
}
BENCHMARK(BM_Naive_FromWString_CJK);
