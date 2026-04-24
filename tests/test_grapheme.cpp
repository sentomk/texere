// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_grapheme.cpp
// Description: Tests for txt::Index and txt::grapheme_ref.
//
// Run: ctest --test-dir build -V

#include <doctest/doctest.h>

#include <ostream>

#include <texere/string.hpp>
#include <texere/grapheme.hpp>

using namespace txt;

// ============================================================================
// Index
// ============================================================================

TEST_SUITE("Index") {

    TEST_CASE("default constructed index has zero offset") {
        Index idx;
        CHECK(idx.byte_offset() == 0);
    }

    TEST_CASE("byte_offset from grapheme_at") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g1 = s.grapheme_at(1);  // 'b' at offset 1
        CHECK(g1.index().byte_offset() == 1);
    }

    TEST_CASE("equality comparison: equal") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g0a = s.grapheme_at(0);
        auto g0b = s.grapheme_at(0);
        CHECK(g0a.index() == g0b.index());
    }

    TEST_CASE("equality comparison: not equal") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g1 = s.grapheme_at(1);
        auto g2 = s.grapheme_at(2);
        CHECK_FALSE(g1.index() == g2.index());
    }

    TEST_CASE("inequality comparison") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g1 = s.grapheme_at(1);
        auto g2 = s.grapheme_at(2);
        CHECK(g1.index() != g2.index());
        CHECK_FALSE(g1.index() != s.grapheme_at(1).index());
    }

    TEST_CASE("less-than comparison") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g1 = s.grapheme_at(1);
        auto g2 = s.grapheme_at(2);
        CHECK(g1.index() < g2.index());
        CHECK_FALSE(g2.index() < g1.index());
    }

    TEST_CASE("less-than-or-equal comparison") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g1 = s.grapheme_at(1);
        auto g1b = s.grapheme_at(1);
        auto g2 = s.grapheme_at(2);
        CHECK(g1.index() <= g1b.index());
        CHECK(g1.index() <= g2.index());
        CHECK_FALSE(g2.index() <= g1.index());
    }

    TEST_CASE("greater-than comparison") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g1 = s.grapheme_at(1);
        auto g2 = s.grapheme_at(2);
        CHECK(g2.index() > g1.index());
        CHECK_FALSE(g1.index() > g2.index());
    }

    TEST_CASE("greater-than-or-equal comparison") {
        auto s = string::from_utf8_unchecked("abcde");
        auto g1 = s.grapheme_at(1);
        auto g1b = s.grapheme_at(1);
        auto g2 = s.grapheme_at(2);
        CHECK(g2.index() >= g1.index());
        CHECK(g1.index() >= g1b.index());
        CHECK_FALSE(g1.index() >= g2.index());
    }

    TEST_CASE("end_index returns size_bytes offset") {
        auto s = string::from_utf8_unchecked("abc");
        CHECK(s.end_index().byte_offset() == 3);
    }

    TEST_CASE("Index from codepoint_iterator") {
        auto s = string::from_utf8_unchecked("abc");
        auto it = s.codepoints().begin();
        CHECK(it.index().byte_offset() == 0);
        ++it;
        CHECK(it.index().byte_offset() == 1);
    }

}

// ============================================================================
// grapheme_ref
// ============================================================================

TEST_SUITE("grapheme_ref") {

    TEST_CASE("utf8 returns raw bytes") {
        auto s = string::from_utf8_unchecked("abc");
        auto g = s.grapheme_at(0);
        CHECK(g.utf8() == "a");
    }

    TEST_CASE("byte_size returns correct size for ASCII") {
        auto s = string::from_utf8_unchecked("abc");
        auto g = s.grapheme_at(0);
        CHECK(g.byte_size() == 1);
    }

    TEST_CASE("byte_size returns correct size for CJK") {
        auto s = string::from_utf8_unchecked("\xe3\x81\x93"); // こ (3 bytes)
        auto g = s.grapheme_at(0);
        CHECK(g.byte_size() == 3);
    }

    TEST_CASE("byte_size returns correct size for emoji") {
        auto s = string::from_utf8_unchecked("\xf0\x9f\x98\x80"); // 😀 (4 bytes)
        auto g = s.grapheme_at(0);
        CHECK(g.byte_size() == 4);
    }

    TEST_CASE("index returns correct byte offset for ASCII") {
        auto s = string::from_utf8_unchecked("ab\xf0\x9f\x98\x80"); // 'a'(0) 'b'(1) '😀'(2-5)
        auto g2 = s.grapheme_at(2);  // 😀
        CHECK(g2.index().byte_offset() == 2);
    }

    TEST_CASE("index returns correct byte offset for CJK") {
        auto s = string::from_utf8_unchecked("a\xc3""\xa9""b"); // 'a'(0) 'é'(1-2) 'b'(3)
        auto g2 = s.grapheme_at(2);  // 'b'
        CHECK(g2.index().byte_offset() == 3);
    }

    TEST_CASE("equality of identical grapheme refs") {
        auto s = string::from_utf8_unchecked("abc");
        auto g1a = s.grapheme_at(0);
        auto g1b = s.grapheme_at(0);
        CHECK(g1a == g1b);
    }

    TEST_CASE("inequality of different grapheme refs") {
        auto s = string::from_utf8_unchecked("abc");
        auto g1 = s.grapheme_at(0);
        auto g2 = s.grapheme_at(1);
        CHECK(g1 != g2);
    }

    TEST_CASE("ZWJ emoji has full byte size") {
        const char family[] =
            "\xf0\x9f\x91\xa8"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa9"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa7";
        auto s = string::from_utf8_unchecked(family);
        auto g = s.grapheme_at(0);
        CHECK(g.byte_size() == s.size_bytes());
        CHECK(g.utf8().size() == s.size_bytes());
    }

    TEST_CASE("empty grapheme_ref has zero byte_size") {
        auto s = string::from_utf8_unchecked("abc");
        auto g = s.grapheme_at(100);  // out-of-bounds
        CHECK(g.byte_size() == 0);
        CHECK(g.utf8().empty());
    }

}
