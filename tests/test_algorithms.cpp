#include <doctest/doctest.h>

#include <texere/string.hpp>
#include <texere/normalize.hpp>
#include <texere/case.hpp>

using namespace txt;
using namespace txt::literals;

TEST_SUITE("normalization") {
    TEST_CASE("NFC normalization") {
        auto s_nfc = string::from_utf8_unchecked("\xc3\xa9");  // é (NFC)
        auto s_nfd = string::from_utf8_unchecked("e\xcc\x81"); // é (NFD)
        CHECK(s_nfc != s_nfd);
        CHECK(s_nfc.equals_normalized(s_nfd));
        
        auto norm = normalized(s_nfd, normalization_form::NFC);
        CHECK(norm == s_nfc);
    }
}

TEST_SUITE("case mapping") {
    TEST_CASE("basic case mapping") {
        auto lower = "hello"_ts;
        auto upper = "HELLO"_ts;
        CHECK(to_upper(lower) == upper);
        CHECK(to_lower(upper) == lower);
    }
    TEST_CASE("complex case mapping") {
        auto lower = "straße"_ts;
        auto upper = "STRASSE"_ts;
        CHECK(to_upper(lower) == upper);
        CHECK(case_fold(lower) == case_fold(upper));
    }
}
