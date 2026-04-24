// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_boundary.cpp
// Description: Boundary condition and edge case tests.
//
// Run: ctest --test-dir build -V

#include <doctest/doctest.h>

#include <ostream>

#include <texere/string.hpp>
#include <texere/string_view.hpp>
#include <texere/normalize.hpp>
#include <texere/case.hpp>
#include <texere/convert.hpp>

#include <vector>
#include <string>

using namespace txt;
using namespace txt::literals;

// ============================================================================
// Empty string
// ============================================================================

TEST_SUITE("empty string") {

    TEST_CASE("default constructed string is empty") {
        string s;
        CHECK(s.empty());
        CHECK(s.size_bytes() == 0);
        CHECK(s.length() == 0);
    }

    TEST_CASE("empty string iteration yields nothing") {
        string s;
        std::size_t byte_count = 0, cp_count = 0, g_count = 0;
        for (auto b : s.bytes())    { (void)b; ++byte_count; }
        for (auto cp : s.codepoints()) { (void)cp; ++cp_count; }
        for (auto g : s.graphemes())  { (void)g; ++g_count; }
        CHECK(byte_count == 0);
        CHECK(cp_count == 0);
        CHECK(g_count == 0);
    }

    TEST_CASE("empty string grapheme_at returns empty ref") {
        string s;
        auto g = s.grapheme_at(0);
        CHECK(g.utf8().empty());
        CHECK(g.byte_size() == 0);
    }

    TEST_CASE("empty string_view") {
        string_view sv;
        CHECK(sv.empty());
        CHECK(sv.length() == 0);
    }

    TEST_CASE("to_wstring on empty string") {
        string s;
        std::wstring ws = to_wstring(s);
        CHECK(ws.empty());
    }

}

// ============================================================================
// Very long strings
// ============================================================================

TEST_SUITE("long strings") {

    TEST_CASE("1KB ASCII: length equals byte count") {
        std::string large(1000, 'x');
        auto s = string::from_utf8_unchecked(large);
        CHECK(s.size_bytes() == 1000);
        CHECK(s.length() == 1000);
    }

    TEST_CASE("1KB ASCII: grapheme_at first and last") {
        std::string large(1000, 'x');
        auto s = string::from_utf8_unchecked(large);
        auto first = s.grapheme_at(0);
        auto last = s.grapheme_at(999);
        CHECK(first.utf8() == "x");
        CHECK(last.utf8() == "x");
    }

    TEST_CASE("1KB ASCII: full grapheme iteration counts correctly") {
        std::string large(1000, 'x');
        auto s = string::from_utf8_unchecked(large);
        std::size_t count = 0;
        for (auto g : s.graphemes()) { (void)g; ++count; }
        CHECK(count == 1000);
    }

    TEST_CASE("1KB CJK: length is 1/3 of byte count") {
        std::string large;
        large.reserve(3000);
        for (int i = 0; i < 1000; ++i) large += "\xe4\xb8\xad"; // 中
        auto s = string::from_utf8_unchecked(large);
        CHECK(s.size_bytes() == 3000);
        CHECK(s.length() == 1000);
    }

    TEST_CASE("1KB CJK: grapheme_at middle") {
        std::string large;
        large.reserve(3000);
        for (int i = 0; i < 1000; ++i) large += "\xe4\xb8\xad";
        auto s = string::from_utf8_unchecked(large);
        auto g = s.grapheme_at(500);
        CHECK(g.utf8().size() == 3);
    }

    TEST_CASE("100 emoji ZWJ family: length is 100") {
        const char family[] =
            "\xf0\x9f\x91\xa8"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa9"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa7";
        std::string large;
        for (int i = 0; i < 100; ++i) large += family;
        auto s = string::from_utf8_unchecked(large);
        CHECK(s.length() == 100);
    }

}

// ============================================================================
// Pure script strings
// ============================================================================

TEST_SUITE("pure script strings") {

    TEST_CASE("pure ASCII") {
        auto s = "The quick brown fox jumps over the lazy dog"_ts;
        CHECK(s.size_bytes() == s.length());
        CHECK(s.length() == 43);
    }

    TEST_CASE("pure Arabic") {
        // U+0627 U+0644 U+0639 U+0631 U+0628 U+064A (العر بية)
        auto s = string::from_utf8_unchecked(
            "\xd8\xa7\xd9\x84\xd8\xb9\xd8\xb1\xd8\xa8\xd9\x8a\xd8\xa9");
        CHECK(s.length() == 7);
        CHECK(s.size_bytes() == 14);  // 7 × 2 bytes
    }

    TEST_CASE("pure Korean Hangul") {
        // U+AC00 (가) through U+AC01 (가) — all precomposed
        auto s = string::from_utf8_unchecked("\xea\xb0\x80\xea\xb0\x81"); // 가 + 각
        CHECK(s.length() == 2);
        CHECK(s.size_bytes() == 6);
    }

    TEST_CASE("pure Thai") {
        // U+0E01 ก (Ko Kai)
        auto s = string::from_utf8_unchecked("\xe0\xb8\x81\xe0\xb8\xb2\xe0\xb8\xa3");
        CHECK(s.length() == 3);
        CHECK(s.size_bytes() == 9);
    }

}

// ============================================================================
// Mixed script strings
// ============================================================================

TEST_SUITE("mixed script strings") {

    TEST_CASE("ASCII + CJK") {
        auto s = string::from_utf8_unchecked("Hello\xE4\xB8\x96\xe7\x95\x8C");
        CHECK(s.length() == 7);  // 5 ASCII + 2 CJK
        CHECK(s.size_bytes() == 11);  // 5 + 2×3
    }

    TEST_CASE("ASCII + emoji") {
        auto s = string::from_utf8_unchecked("Hi\xf0\x9f\x98\x80"); // Hi😀
        CHECK(s.length() == 3);
        CHECK(s.size_bytes() == 6);  // 2 + 4
    }

    TEST_CASE("ASCII + Arabic + Latin") {
        auto s = string::from_utf8_unchecked("Hello\xd8\xb3\xd9\x84\xd8\xa7\xd9\x85World");
        CHECK(s.length() > 10);  // both scripts present
    }

    TEST_CASE("emoji + ZWJ + emoji sequence") {
        // U+1F468 👨 + ZWJ + U+1F469 👩 + ZWJ + U+1F467 👧
        const char family[] =
            "\xf0\x9f\x91\xa8"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa9"
            "\xe2\x80\x8d"
            "\xf0\x9f\x91\xa7";
        auto s = string::from_utf8_unchecked(family);
        CHECK(s.length() == 1);  // single grapheme cluster
        CHECK(s.size_bytes() == 18);  // 4+3+4+3+4
    }

}

// ============================================================================
// Invalid UTF-8 sequences
// ============================================================================

TEST_SUITE("invalid UTF-8 sequences") {

    TEST_CASE("lone continuation byte") {
        auto result = string::from_utf8("\x80");
        CHECK(result.has_value() == false);
        CHECK(result.error().code == errc::invalid_utf8);
        CHECK(result.error().byte_position == 0);
    }

    TEST_CASE("invalid lead byte FE/FF") {
        auto r1 = string::from_utf8("\xfe");
        CHECK(r1.has_value() == false);
        CHECK(r1.error().code == errc::invalid_utf8);

        auto r2 = string::from_utf8("\xff");
        CHECK(r2.has_value() == false);
        CHECK(r2.error().code == errc::invalid_utf8);
    }

    TEST_CASE("overlong encoding of NUL") {
        // 2-byte encoding of U+0000: C0 80 (overlong, illegal)
        auto result = string::from_utf8("\xc0\x80");
        CHECK(result.has_value() == false);
        CHECK(result.error().code == errc::invalid_utf8);
        CHECK(result.error().byte_position == 0);
    }

    TEST_CASE("4-byte sequence over U+10FFFF") {
        // U+0011FFFF is beyond the valid Unicode range
        auto result = string::from_utf8("\xf7\x8f\xbf\xbf\xbf");
        CHECK(result.has_value() == false);
        CHECK(result.error().code == errc::invalid_utf8);
    }

    TEST_CASE("truncated multi-byte at end") {
        auto r1 = string::from_utf8("\xe3\x81");  // incomplete 3-byte
        CHECK(r1.has_value() == false);
        CHECK(r1.error().code == errc::truncated_input);

        auto r2 = string::from_utf8("\xf0\x9f\x98");  // incomplete 4-byte
        CHECK(r2.has_value() == false);
        CHECK(r2.error().code == errc::truncated_input);
    }

    TEST_CASE("invalid surrogate pair in UTF-8") {
        // UTF-16 surrogates encoded in UTF-8: U+D800 = ED A0 80 (overlong!)
        auto result = string::from_utf8("\xed\xa0\x80");
        CHECK(result.has_value() == false);
        CHECK(result.error().code == errc::invalid_utf8);
    }

    TEST_CASE("from_utf8_lossy: all invalid byte sequences replaced") {
        auto s = string::from_utf8_lossy(
            "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89"
            "\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93"
            "\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d"
            "\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7"
            "\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1"
            "\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb"
            "\xbc\xbd\xbe\xbf");
        // All bytes are invalid as UTF-8 lead bytes
        // Result should contain replacement characters (non-empty)
        CHECK_FALSE(s.empty());
    }

}

// ============================================================================
// Normalization edge cases
// ============================================================================

TEST_SUITE("normalization edge cases") {

    TEST_CASE("fully normalizing already-normalized text is idempotent") {
        auto s = string::from_utf8_unchecked("hello world");
        CHECK(normalized(s, normalization_form::NFC) == s);
        CHECK(normalized(s, normalization_form::NFD) == s);
    }

    TEST_CASE("normalization reduces to canonical form regardless of input order") {
        // Same visual string via different decomposition paths
        auto s1 = string::from_utf8_unchecked("\xc3\xa9"); // é composed
        auto s2 = string::from_utf8_unchecked("e\xcc\x81"); // e + combining
        CHECK(normalized(s1, normalization_form::NFC) ==
              normalized(s2, normalization_form::NFC));
    }

}

// ============================================================================
// Case mapping edge cases
// ============================================================================

TEST_SUITE("case mapping edge cases") {

    TEST_CASE("to_upper maps dotless i to I") {
        // U+0131 (ı, dotless i) uppercases to 'I' in default Unicode mapping
        auto s = string::from_utf8_unchecked("\xc4\xb1");
        auto upper = to_upper(s);
        CHECK(upper.to_std_string_view() == "I");
    }

    TEST_CASE("case fold of ASCII is idempotent") {
        auto s = "hello"_ts;
        CHECK(case_fold(case_fold(s)) == case_fold(s));
    }

    TEST_CASE("all-uppercase to_lower returns lowercase") {
        auto s = "HELLO"_ts;
        CHECK(to_lower(s) == "hello"_ts);
    }

}
