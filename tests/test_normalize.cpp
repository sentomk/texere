// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_normalize.cpp
// Description: Tests for Unicode normalization.
//
// Run: ctest --test-dir build -V

#include <doctest/doctest.h>

#include <ostream>

#include <texere/string.hpp>
#include <texere/normalize.hpp>

using namespace txt;
using namespace txt::literals;

// ============================================================================
// NFC – Canonical Decomposition + Composition
// ============================================================================

TEST_SUITE("normalization NFC") {

    TEST_CASE("NFC: composes e + combining acute") {
        auto s_nfd = string::from_utf8_unchecked("e\xcc\x81"); // e + U+0301
        auto s_nfc = string::from_utf8_unchecked("\xc3\xa9");  // é (composed)
        CHECK_FALSE(s_nfd == s_nfc);  // byte-different
        CHECK(s_nfd.equals_normalized(s_nfc));

        auto norm = normalized(s_nfd, normalization_form::NFC);
        CHECK(norm == s_nfc);
    }

    TEST_CASE("NFC: multiple combining characters") {
        auto s = string::from_utf8_unchecked("a\xcc\x80\xcc\x81"); // a + grave + acute
        auto norm = normalized(s, normalization_form::NFC);
        CHECK(norm.size_bytes() > 0);
        CHECK(norm.equals_normalized(s));
    }

    TEST_CASE("NFC: already-normalized string is unchanged") {
        auto s = string::from_utf8_unchecked("\xc3\xa9"); // é in NFC
        auto norm = normalized(s, normalization_form::NFC);
        CHECK(norm == s);
    }

    TEST_CASE("NFC: Hangul syllables") {
        // Hangul syllables are precomposed; normalization shouldn't change them
        // U+AC00 (가) = LV syllable
        auto s = string::from_utf8_unchecked("\xea\xb0\x80");
        CHECK(s.size_bytes() == 3);
        auto norm = normalized(s, normalization_form::NFC);
        CHECK(norm == s);
    }

}

// ============================================================================
// NFD – Canonical Decomposition (no composition)
// ============================================================================

TEST_SUITE("normalization NFD") {

    TEST_CASE("NFD: decomposes composed characters") {
        auto s_nfc = string::from_utf8_unchecked("\xc3\xa9");  // é (composed)
        auto norm = normalized(s_nfc, normalization_form::NFD);
        // NFD form: e (0x65) + combining acute (0x0301) = 3 bytes
        CHECK(norm.size_bytes() == 3);
        CHECK(norm != s_nfc);  // different byte representation
        CHECK(norm.equals_normalized(s_nfc));
    }

    TEST_CASE("NFD: idempotent on already-NFD text") {
        auto s = string::from_utf8_unchecked("e\xcc\x81"); // e + combining acute
        auto norm = normalized(s, normalization_form::NFD);
        CHECK(norm == s);
    }

}

// ============================================================================
// NFKC – Compatibility Decomposition + Composition
// ============================================================================

TEST_SUITE("normalization NFKC") {

    TEST_CASE("NFKC: converts Roman numeral Ⅰ to I") {
        // U+2160 Ⅰ (Roman numeral one) → U+0049 'I'
        auto s = string::from_utf8_unchecked("\xe2\x85\xa0");
        auto norm = normalized(s, normalization_form::NFKC);
        CHECK(norm.to_std_string_view() == "I");
    }

    TEST_CASE("NFKC: converts ligatures") {
        // U+FB00 ﬀ (ff ligature) → U+0066 U+0066 'ff'
        auto s = string::from_utf8_unchecked("\xef\xac\x80");
        auto norm = normalized(s, normalization_form::NFKC);
        CHECK(norm.to_std_string_view() == "ff");
    }

    TEST_CASE("NFKC: superscripts to base characters") {
        // U+00B2 ² (superscript 2) → U+0032 '2'
        auto s = string::from_utf8_unchecked("\xc2\xb2");
        auto norm = normalized(s, normalization_form::NFKC);
        CHECK(norm.to_std_string_view() == "2");
    }

}

// ============================================================================
// NFKD – Compatibility Decomposition (no composition)
// ============================================================================

TEST_SUITE("normalization NFKD") {

    TEST_CASE("NFKD: decomposes with compatibility") {
        auto s_nfkc = string::from_utf8_unchecked("\xef\xac\x80"); // ﬀ
        auto norm = normalized(s_nfkc, normalization_form::NFKD);
        CHECK(norm.to_std_string_view() == "ff");
    }

    TEST_CASE("NFKD: drops superscript formatting") {
        auto s = string::from_utf8_unchecked("\xc2\xb2"); // ²
        auto norm = normalized(s, normalization_form::NFKD);
        CHECK(norm.to_std_string_view() == "2");
    }

}

// ============================================================================
// equals_normalized
// ============================================================================

TEST_SUITE("equals_normalized") {

    TEST_CASE("NFC form differs from NFD form") {
        auto s_nfc = string::from_utf8_unchecked("\xc3\xa9");
        auto s_nfd = string::from_utf8_unchecked("e\xcc\x81");
        CHECK_FALSE(s_nfc == s_nfd);
    }

    TEST_CASE("equals_normalized with explicit NFC form") {
        auto s_nfc = string::from_utf8_unchecked("\xc3\xa9");
        auto s_nfd = string::from_utf8_unchecked("e\xcc\x81");
        CHECK(txt::equals_normalized(s_nfc, s_nfd, normalization_form::NFC));
    }

    TEST_CASE("equals_normalized with NFD form") {
        auto s_nfc = string::from_utf8_unchecked("\xc3\xa9");
        auto s_nfd = string::from_utf8_unchecked("e\xcc\x81");
        // Both normalized to NFD should be equal
        auto nfc_nfd = normalized(s_nfc, normalization_form::NFD);
        auto nfd_nfd = normalized(s_nfd, normalization_form::NFD);
        CHECK(nfc_nfd == nfd_nfd);
    }

    TEST_CASE("equals_normalized NFKC equivalence") {
        // Ⅰ (U+2160) and 'I' should be equal under NFKC
        auto roman = string::from_utf8_unchecked("\xe2\x85\xa0"); // Ⅰ
        auto ascii = string::from_utf8_unchecked("I");
        CHECK(txt::equals_normalized(roman, ascii, normalization_form::NFKC));
    }

    TEST_CASE("equals_normalized different forms") {
        auto s1 = string::from_utf8_unchecked("\xc3\xa9");
        auto s2 = string::from_utf8_unchecked("e\xcc\x81");
        // NFC vs NFD but using equals_normalized default NFC
        CHECK(txt::equals_normalized(s1, s2, normalization_form::NFC));
        CHECK(txt::equals_normalized(s1, s2, normalization_form::NFD));
    }

}

// ============================================================================
// normalize() in-place
// ============================================================================

TEST_SUITE("normalize in-place") {

    TEST_CASE("normalize modifies string in-place") {
        auto s = string::from_utf8_unchecked("e\xcc\x81"); // e + combining acute
        CHECK(s != string::from_utf8_unchecked("\xc3\xa9")); // not yet composed
        normalize(s, normalization_form::NFC);
        CHECK(s == string::from_utf8_unchecked("\xc3\xa9")); // now composed
    }

    TEST_CASE("normalize with NFD") {
        auto s = string::from_utf8_unchecked("\xc3\xa9"); // é composed
        normalize(s, normalization_form::NFD);
        CHECK(s.size_bytes() == 3); // e + combining acute
    }

}
