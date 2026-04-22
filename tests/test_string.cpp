/// @file test_string.cpp
/// @brief Basic test suite for txt::string.
///
/// Uses doctest (https://github.com/doctest/doctest) – single-header,
/// zero-friction, no macro collisions.
///
/// Run: ctest --test-dir build -V

#define DOCTEST_CONFIG_IMPLEMENT_WITH_MAIN
#include <doctest/doctest.h>

#include <texere/string.hpp>
#include <texere/string_view.hpp>
#include <texere/normalize.hpp>

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
        // We can pass valid UTF-8 safely
        auto s = string::from_utf8_unchecked("safe");
        CHECK(s.size_bytes() == 4);
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
        auto s = string::from_utf8_unchecked("a\xc3\xa9\xe3\x81\x93\xf0\x9f\x98\x80"); // 'a', 'é', 'こ', '😀'
        auto it = s.codepoints().begin();
        CHECK(*it == 'a');
        ++it;
        CHECK(*it == 0x00E9);
        ++it;
        CHECK(*it == 0x3053);
        ++it;
        CHECK(*it == 0x1F600);
        ++it;
        CHECK(it == s.codepoints().end());
    }
}
