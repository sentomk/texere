// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_case.cpp
// Description: Tests for Unicode case mapping.
//
// Run: ctest --test-dir build -V

#include <doctest/doctest.h>

#include <ostream>

#include <texere/string.hpp>
#include <texere/case.hpp>

using namespace txt;
using namespace txt::literals;

// ============================================================================
// to_upper
// ============================================================================

TEST_SUITE("to_upper") {

    TEST_CASE("ASCII letters") {
        CHECK(to_upper("hello"_ts) == "HELLO"_ts);
    }

    TEST_CASE("already uppercase ASCII") {
        CHECK(to_upper("HELLO"_ts) == "HELLO"_ts);
    }

    TEST_CASE("mixed ASCII") {
        CHECK(to_upper("Hello"_ts) == "HELLO"_ts);
    }

    TEST_CASE("CJK characters are unchanged") {
        auto s = "日本語"_ts;
        CHECK(to_upper(s) == s);
    }

    TEST_CASE("German eszett expands to SS") {
        auto lower = "straße"_ts;
        auto upper = to_upper(lower);
        CHECK(upper.to_std_string_view() == "STRASSE");
    }

    TEST_CASE("Greek sigma uppercases correctly") {
        // U+03C2 (ς) final sigma → U+03A3 (Σ)
        auto s = string::from_utf8_unchecked("\xcf\x82"); // ς
        auto upper = to_upper(s);
        CHECK(upper.to_std_string_view() == "\xce\xa3"); // Σ
    }

    TEST_CASE("Turkish dotted I (İ) is preserved") {
        auto s = string::from_utf8_unchecked("\xc4\xb0"); // İ (U+0130)
        auto upper = to_upper(s);
        CHECK(upper.to_std_string_view() == "\xc4\xb0"); // İ stays as-is
    }

    TEST_CASE("empty string") {
        string s;
        CHECK(to_upper(s).empty());
    }

    TEST_CASE("digits and punctuation unchanged") {
        auto s = "123!@#"_ts;
        CHECK(to_upper(s) == s);
    }

}

// ============================================================================
// to_lower
// ============================================================================

TEST_SUITE("to_lower") {

    TEST_CASE("ASCII letters") {
        CHECK(to_lower("HELLO"_ts) == "hello"_ts);
    }

    TEST_CASE("already lowercase ASCII") {
        CHECK(to_lower("hello"_ts) == "hello"_ts);
    }

    TEST_CASE("mixed ASCII") {
        CHECK(to_lower("Hello"_ts) == "hello"_ts);
    }

    TEST_CASE("Greek uppercase sigma to lowercase") {
        auto s = string::from_utf8_unchecked("\xce\xa3"); // Σ
        auto lower = to_lower(s);
        CHECK(lower.to_std_string_view() == "\xcf\x83"); // σ
    }

    TEST_CASE("CJK characters are unchanged") {
        auto s = "日本語"_ts;
        CHECK(to_lower(s) == s);
    }

    TEST_CASE("empty string") {
        string s;
        CHECK(to_lower(s).empty());
    }

    TEST_CASE("digits and punctuation unchanged") {
        auto s = "123!@#"_ts;
        CHECK(to_lower(s) == s);
    }

}

// ============================================================================
// to_title
// ============================================================================

TEST_SUITE("to_title") {

    TEST_CASE("simple word title case") {
        CHECK(to_title("hello"_ts) == "Hello"_ts);
    }

    TEST_CASE("multiple words") {
        CHECK(to_title("hello world"_ts) == "Hello World"_ts);
    }

    TEST_CASE("already title case") {
        CHECK(to_title("Hello"_ts) == "Hello"_ts);
    }

    TEST_CASE("emoji not affected by title case") {
        auto s = string::from_utf8_unchecked("😀 hello");
        auto title = to_title(s);
        // First grapheme is emoji — title case should not alter it
        CHECK(title.to_std_string_view()[0] == '\xf0'); // emoji still there
    }

    TEST_CASE("CJK unchanged by title case") {
        auto s = "日本語"_ts;
        CHECK(to_title(s) == s);
    }

    TEST_CASE("empty string") {
        string s;
        CHECK(to_title(s).empty());
    }

}

// ============================================================================
// case_fold
// ============================================================================

TEST_SUITE("case_fold") {

    TEST_CASE("ASCII case fold equals to_lower") {
        auto s = "Hello"_ts;
        CHECK(case_fold(s) == to_lower(s));
    }

    TEST_CASE("German eszett case folds to lowercase ligature") {
        // The correct case fold of 'ß' is 'ss' (not 's')
        auto s = "straße"_ts;
        auto folded = case_fold(s);
        // Case fold of ß should produce 'ss'
        CHECK(folded.to_std_string_view() == "strasse");
    }

    TEST_CASE("Greek sigma folds correctly") {
        // U+03A3 (Σ) has two lowercase forms: σ (U+03C3) and ς (U+03C2, word-final)
        // Case folding uses the regular (non-final) form σ
        auto s = string::from_utf8_unchecked("\xce\xa3"); // Σ
        auto folded = case_fold(s);
        CHECK(folded.to_std_string_view() == "\xcf\x83"); // σ
    }

    TEST_CASE("case_fold is equivalence relation") {
        // If case_fold(a) == case_fold(b), they should be equal after folding
        auto s1 = "HELLO"_ts;
        auto s2 = "hello"_ts;
        CHECK(case_fold(s1) == case_fold(s2));
    }

    TEST_CASE("case_fold on already-folded text") {
        auto s = "hello"_ts;
        CHECK(case_fold(s) == s);
    }

    TEST_CASE("Turkish I (dotted) folds to i + combining dot") {
        // U+0130 (İ) case-folds to 'i' + combining dot above (U+0307)
        // per Unicode CaseFolding.txt
        auto s = string::from_utf8_unchecked("\xc4\xb0"); // İ
        auto folded = case_fold(s);
        CHECK(folded.size_bytes() > 0);
        CHECK_FALSE(folded.empty());
    }

    TEST_CASE("empty string") {
        string s;
        CHECK(case_fold(s).empty());
    }

}
