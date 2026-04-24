// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_string.cpp
// Description: Core implementation and declarations for texere.

// @file test_string.cpp
// Basic test suite for txt::string.
//
// Uses doctest (https://github.com/doctest/doctest) – single-header,
// zero-friction, no macro collisions.
//
// Run: ctest --test-dir build -V

#define DOCTEST_CONFIG_IMPLEMENT_WITH_MAIN
#include <doctest/doctest.h>

#include <texere/string.hpp>
#include <texere/string_view.hpp>
#include <texere/normalize.hpp>

#include <vector>

using namespace txt;
using namespace txt::literals;

// ============================================================================
// Factory functions – three paths
// ============================================================================

TEST_SUITE("factory functions") {

    TEST_CASE("from_utf8 accepts valid ASCII") {
        auto result = string::from_utf8("hello");
        REQUIRE(result.has_value());
        CHECK(result->size_bytes() == 5);
        CHECK(result->empty() == false);
    }

    TEST_CASE("from_utf8 accepts valid multi-byte UTF-8") {
        // U+3053 U+3093 U+306B U+3061 U+306F  (こんにちは, 15 bytes)
        auto result = string::from_utf8("\xe3\x81\x93\xe3\x82\x93\xe3\x81\xab\xe3\x81\xa1\xe3\x81\xaf");
        REQUIRE(result.has_value());
        CHECK(result->size_bytes() == 15);
    }

    TEST_CASE("from_utf8 rejects lone continuation byte") {
        auto result = string::from_utf8("\x80");
        CHECK_FALSE(result.has_value());
        CHECK(result.error().code == errc::invalid_utf8);
        CHECK(result.error().byte_position == 0);
    }

    TEST_CASE("from_utf8 rejects overlong sequence") {
        // Overlong encoding of U+0000 (5-byte form, illegal in UTF-8)
        auto result = string::from_utf8("\xf8\x80\x80\x80\x80");
        CHECK_FALSE(result.has_value());
    }

    TEST_CASE("from_utf8_lossy replaces invalid bytes with U+FFFD") {
        // '\x80' is an invalid lead byte; should become U+FFFD (3 bytes: EF BF BD)
        auto s = string::from_utf8_lossy("a\x80z");
        // At minimum: 'a' + U+FFFD + 'z'  →  1 + 3 + 1 = 5 bytes
        CHECK(s.size_bytes() == 5);
    }

    TEST_CASE("from_utf8_lossy preserves valid input unchanged") {
        auto s = string::from_utf8_lossy("hello");
        CHECK(s.size_bytes() == 5);
    }

    TEST_CASE("from_utf8_unchecked wraps bytes without validation") {
        auto s = string::from_utf8_unchecked("safe");
        CHECK(s.size_bytes() == 4);
    }

    TEST_CASE("from_utf8 rejects truncated 3-byte sequence at end") {
        auto result = string::from_utf8("\xe3\x81\x93\xe3\x82\x93\xe3\x81");
        CHECK_FALSE(result.has_value());
        CHECK(result.error().code == errc::truncated_input);
    }

    TEST_CASE("from_utf8 rejects invalid lead byte 0xFE") {
        auto result = string::from_utf8("\xfe abc");
        CHECK_FALSE(result.has_value());
        CHECK(result.error().code == errc::invalid_utf8);
    }

    TEST_CASE("from_utf8_lossy replaces multiple invalid bytes") {
        auto s = string::from_utf8_lossy("\x80\x81\x82");
        CHECK(s.size_bytes() > 0);
        CHECK_FALSE(s.empty());
    }

    TEST_CASE("from_utf8_unchecked accepts embedded null bytes") {
        const char data[] = {'a', '\0', 'b'};
        auto s = string::from_utf8_unchecked(std::string_view(data, 3));
        CHECK(s.size_bytes() == 3);
        CHECK(s.to_std_string_view()[1] == '\0');
    }

}

// ============================================================================
// _ts literal
// ============================================================================

TEST_SUITE("string literal _ts") {

    TEST_CASE("ASCII literal") {
        auto s = "hello"_ts;
        CHECK(s.size_bytes() == 5);
    }

    TEST_CASE("CJK literal") {
        auto s = "日本語"_ts;   // 9 bytes (3 × 3-byte sequences)
        CHECK(s.size_bytes() == 9);
    }

}

// ============================================================================
// grapheme_at
// ============================================================================

TEST_SUITE("grapheme_at") {

    TEST_CASE("ASCII – each byte is its own grapheme cluster") {
        auto s = string::from_utf8_unchecked("abc");
        auto g = s.grapheme_at(0);
        CHECK(g.utf8() == "a");
        CHECK(g.index().byte_offset() == 0);

        auto g2 = s.grapheme_at(1);
        CHECK(g2.utf8() == "b");
        CHECK(g2.index().byte_offset() == 1);
    }

    TEST_CASE("CJK characters form single-codepoint clusters") {
        // こんにちは  (5 graphemes, each 3 bytes)
        auto s = string::from_utf8_unchecked(
            "\xe3\x81\x93\xe3\x82\x93\xe3\x81\xab\xe3\x81\xa1\xe3\x81\xaf");
        auto g0 = s.grapheme_at(0);
        CHECK(g0.utf8().size() == 3);   // こ  (3 bytes)
        auto g4 = s.grapheme_at(4);
        CHECK(g4.utf8().size() == 3);   // は  (3 bytes)
    }

    TEST_CASE("emoji with ZWJ sequence counts as one grapheme") {
        // U+1F468 U+200D U+1F469 U+200D U+1F467  👨‍👩‍👧  (family emoji, 1 cluster)
        const char family[] =
            "\xf0\x9f\x91\xa8"  // U+1F468 👨
            "\xe2\x80\x8d"      // U+200D ZWJ
            "\xf0\x9f\x91\xa9"  // U+1F469 👩
            "\xe2\x80\x8d"      // U+200D ZWJ
            "\xf0\x9f\x91\xa7"; // U+1F467 👧
        auto s = string::from_utf8_unchecked(family);
        // Should be 1 grapheme cluster
        CHECK(s.length() == 1);
        auto g = s.grapheme_at(0);
        CHECK(g.byte_size() == s.size_bytes());
    }

    TEST_CASE("grapheme_at out-of-bounds returns empty grapheme_ref") {
        auto s = string::from_utf8_unchecked("abc");
        CHECK(s.length() == 3);
        auto g = s.grapheme_at(10);
        CHECK(g.utf8().empty());
        CHECK(g.byte_size() == 0);
        CHECK(g.index().byte_offset() == s.size_bytes());
    }

}

// ============================================================================
// length() – grapheme cluster count
// ============================================================================

TEST_SUITE("length") {

    TEST_CASE("empty string") {
        string s;
        CHECK(s.length() == 0);
        CHECK(s.empty());
    }

    TEST_CASE("ASCII") {
        auto s = string::from_utf8_unchecked("hello");
        CHECK(s.length() == 5);
    }

    TEST_CASE("CJK") {
        // 中文  (2 graphemes, 6 bytes)
        auto s = string::from_utf8_unchecked("\xe4\xb8\xad\xe6\x96\x87");
        CHECK(s.length() == 2);
    }

    TEST_CASE("mixed ASCII + emoji") {
        // "Hi" + U+1F600 😀  →  3 graphemes
        auto s = string::from_utf8_unchecked("Hi\xf0\x9f\x98\x80");
        CHECK(s.length() == 3);
    }

}

// ============================================================================
// Comparison – byte semantics
// ============================================================================

TEST_SUITE("comparison") {

    TEST_CASE("equal strings") {
        auto a = string::from_utf8_unchecked("abc");
        auto b = string::from_utf8_unchecked("abc");
        CHECK(a == b);
        CHECK_FALSE(a != b);
    }

    TEST_CASE("lexicographic order") {
        auto a = string::from_utf8_unchecked("abc");
        auto b = string::from_utf8_unchecked("abd");
        CHECK(a < b);
        CHECK(b > a);
    }

    TEST_CASE("byte comparison, not Unicode collation") {
        // NFC vs NFD form of 'é': different byte sequences, not equal under ==
        const char* nfc = "\xc3\xa9";            // U+00E9  (2 bytes)
        const char* nfd = "e\xcc\x81";           // U+0065 U+0301  (3 bytes)
        auto s_nfc = string::from_utf8_unchecked(nfc);
        auto s_nfd = string::from_utf8_unchecked(nfd);
        CHECK_FALSE(s_nfc == s_nfd);
        // But equals_normalized should treat them as equal
        CHECK(s_nfc.equals_normalized(s_nfd));
    }

}

// ============================================================================
// as_bytes / as_chars
// ============================================================================

TEST_SUITE("raw access") {

    TEST_CASE("as_bytes span") {
        auto s = string::from_utf8_unchecked("hi");
        auto b = s.as_bytes();
        REQUIRE(b.size() == 2);
        CHECK(b[0] == 'h');
        CHECK(b[1] == 'i');
    }

    TEST_CASE("as_chars span") {
        auto s = string::from_utf8_unchecked("hi");
        auto c = s.as_chars();
        REQUIRE(c.size() == 2);
        CHECK(c[0] == 'h');
    }

}

// ============================================================================
// operator[] is deleted – verify via type_traits / compilation guard
// (This is a compile-time check; it cannot be expressed as a runtime test.
//  The comment below serves as documentation.)
// ============================================================================

// static_assert(!requires(string s){ s[0]; }, "operator[] must be deleted");
// Uncomment the line above when building with C++20 concepts enabled.

TEST_SUITE("codepoint_iterator") {
    TEST_CASE("decode basic") {
        auto s = string::from_utf8_unchecked("a\xc3\xa9\xe3\x81\x93\xf0\x9f\x98\x80");
        auto it = s.codepoints().begin();
        CHECK(*it == 'a'); ++it;
        CHECK(*it == 0x00E9); ++it;
        CHECK(*it == 0x3053); ++it;
        CHECK(*it == 0x1F600); ++it;
        CHECK(it == s.codepoints().end());
    }

    TEST_CASE("decodes 1-byte ASCII sequence") {
        auto s = string::from_utf8_unchecked("abc");
        std::vector<char32_t> cps;
        for (auto cp : s.codepoints()) cps.push_back(cp);
        CHECK(cps.size() == 3);
    }

    TEST_CASE("decodes 2-byte sequence") {
        auto s = string::from_utf8_unchecked("\xc3\xa9");
        CHECK(*s.codepoints().begin() == 0x00E9);
    }

    TEST_CASE("decodes 3-byte sequence (CJK)") {
        auto s = string::from_utf8_unchecked("\xe3\x81\x93");
        CHECK(*s.codepoints().begin() == 0x3053);
    }

    TEST_CASE("decodes 4-byte sequence (emoji)") {
        auto s = string::from_utf8_unchecked("\xf0\x9f\x98\x80");
        CHECK(*s.codepoints().begin() == 0x1F600);
    }

    TEST_CASE("invalid UTF-8 replaced with U+FFFD") {
        auto s = string::from_utf8_unchecked("a\x80""b");
        std::vector<char32_t> cps;
        for (auto cp : s.codepoints()) cps.push_back(cp);
        REQUIRE(cps.size() == 3);
        CHECK(cps[1] == 0xFFFD);
    }
}

TEST_SUITE("byte_iterator") {
    TEST_CASE("forward iteration over ASCII") {
        auto s = string::from_utf8_unchecked("abc");
        auto it = s.bytes().begin();
        CHECK(*it == 'a'); ++it;
        CHECK(*it == 'b'); ++it;
        CHECK(*it == 'c'); ++it;
        CHECK(it == s.bytes().end());
    }

    TEST_CASE("backward iteration") {
        auto s = string::from_utf8_unchecked("abc");
        auto it = s.bytes().end();
        --it; CHECK(*it == 'c');
        --it; CHECK(*it == 'b');
        --it; CHECK(*it == 'a');
    }
}

TEST_SUITE("grapheme_iterator") {
    TEST_CASE("ASCII: each byte is a separate grapheme") {
        auto s = string::from_utf8_unchecked("abc");
        std::vector<std::string> clusters;
        for (auto g : s.graphemes()) clusters.push_back(std::string(g.utf8()));
        REQUIRE(clusters.size() == 3);
    }

    TEST_CASE("ZWJ emoji family counts as one grapheme") {
        const char family[] =
            "\xf0\x9f\x91\xa8"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa9"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa7";
        auto s = string::from_utf8_unchecked(family);
        std::size_t n = 0;
        for (auto g : s.graphemes()) { (void)g; ++n; }
        CHECK(n == 1);
    }

    TEST_CASE("CR + LF counts as one grapheme") {
        auto s = string::from_utf8_unchecked("\x0d\x0a");
        std::size_t n = 0;
        for (auto g : s.graphemes()) { (void)g; ++n; }
        CHECK(n == 1);
    }

    TEST_CASE("grapheme index() matches byte offset") {
        auto s = string::from_utf8_unchecked("a\xc3""\xa9""b");
        auto it = s.graphemes().begin();
        CHECK((*it).index().byte_offset() == 0); ++it;
        CHECK((*it).index().byte_offset() == 1); ++it;
        CHECK((*it).index().byte_offset() == 3); ++it;
        CHECK(it == s.graphemes().end());
    }
}
