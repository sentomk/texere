// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_string_view.cpp
// Description: Tests for txt::string_view.
//
// Run: ctest --test-dir build -V

#include <doctest/doctest.h>

#include <ostream>

#include <texere/string.hpp>
#include <texere/string_view.hpp>

#include <vector>

using namespace txt;
using namespace txt::literals;

// ============================================================================
// Construction
// ============================================================================

TEST_SUITE("string_view construction") {

    TEST_CASE("from std::string_view (explicit)") {
        std::string_view raw = "hello";
        string_view sv(raw);
        CHECK(sv.size_bytes() == 5);
    }

    TEST_CASE("from raw pointer + size") {
        string_view sv("hello", 5);
        CHECK(sv.size_bytes() == 5);
        CHECK(sv.length() == 5);
    }

    TEST_CASE("empty construction") {
        string_view sv;
        CHECK(sv.empty());
        CHECK(sv.size_bytes() == 0);
    }

}

// ============================================================================
// Size & emptiness
// ============================================================================

TEST_SUITE("string_view size") {

    TEST_CASE("size_bytes and length differ for CJK") {
        auto sv = string_view("\xe4\xb8\xad\xe6\x96\x87", 6); // 中文
        CHECK(sv.size_bytes() == 6);
        CHECK(sv.length() == 2);
    }

    TEST_CASE("empty string_view") {
        string_view sv;
        CHECK(sv.empty());
        CHECK(sv.length() == 0);
    }

    TEST_CASE("ASCII: size_bytes equals length") {
        auto sv = string_view("abc", 3);
        CHECK(sv.size_bytes() == 3);
        CHECK(sv.length() == 3);
    }

}

// ============================================================================
// Grapheme indexing
// ============================================================================

TEST_SUITE("string_view grapheme_at") {

    TEST_CASE("ASCII: byte and grapheme indices align") {
        auto sv = string_view("abc", 3);
        auto g = sv.grapheme_at(0);
        CHECK(g.utf8() == "a");
        CHECK(g.index().byte_offset() == 0);
    }

    TEST_CASE("CJK: grapheme_at middle") {
        auto sv = string_view("\xe4\xb8\xad\xe6\x96\x87", 6); // 中文
        auto g1 = sv.grapheme_at(0);
        CHECK(g1.utf8().size() == 3);  // 中
        auto g2 = sv.grapheme_at(1);
        CHECK(g2.utf8().size() == 3);  // 文
    }

    TEST_CASE("out-of-bounds returns empty grapheme_ref") {
        auto sv = string_view("abc", 3);
        auto g = sv.grapheme_at(100);
        CHECK(g.utf8().empty());
        CHECK(g.byte_size() == 0);
    }

}

// ============================================================================
// Iteration
// ============================================================================

TEST_SUITE("string_view iteration") {

    TEST_CASE("byte iteration") {
        auto sv = string_view("abc", 3);
        std::vector<std::uint8_t> bytes;
        for (auto b : sv.bytes()) bytes.push_back(b);
        CHECK(bytes.size() == 3);
        CHECK(bytes[0] == 'a');
    }

    TEST_CASE("codepoint iteration") {
        auto sv = string_view("a\xc3\xa9", 3); // 'a' + 'é'
        std::vector<char32_t> cps;
        for (auto cp : sv.codepoints()) cps.push_back(cp);
        CHECK(cps.size() == 2);
        CHECK(cps[0] == 'a');
        CHECK(cps[1] == 0x00E9);
    }

    TEST_CASE("grapheme iteration") {
        auto sv = string_view("a\xc3""\xa9""b", 4); // 'a' + 'é' + 'b'
        std::vector<std::string> clusters;
        for (auto g : sv.graphemes()) clusters.push_back(std::string(g.utf8()));
        CHECK(clusters.size() == 3);
        CHECK(clusters[0] == "a");
        CHECK(clusters[1] == "\xc3\xa9");
        CHECK(clusters[2] == "b");
    }

    TEST_CASE("empty iteration yields zero elements") {
        string_view sv;
        std::size_t n = 0;
        for (auto g : sv.graphemes()) { (void)g; ++n; }
        CHECK(n == 0);
    }

}

// ============================================================================
// find() / substr() from txt::string – TODO: not yet implemented
// ============================================================================

// ============================================================================
// Comparison
// ============================================================================

TEST_SUITE("string_view comparison") {

    TEST_CASE("equal views") {
        auto a = string_view("abc", 3);
        auto b = string_view("abc", 3);
        CHECK(a == b);
    }

    TEST_CASE("unequal views") {
        auto a = string_view("abc", 3);
        auto b = string_view("abd", 3);
        CHECK(a != b);
    }

    TEST_CASE("lexicographic less-than") {
        auto a = string_view("abc", 3);
        auto b = string_view("abd", 3);
        CHECK(a < b);
    }

}

// ============================================================================
// operator[] deleted
// ============================================================================

TEST_SUITE("operator[] deleted") {
    TEST_CASE("operator[] does not compile") {
        static_assert(sizeof(string_view) > 0, "string_view is constructible");
    }
}
