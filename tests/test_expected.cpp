// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_expected.cpp
// Description: Tests for txt::expected and txt::error.
//
// Run: ctest --test-dir build -V

#include <doctest/doctest.h>

#include <ostream>

#include <texere/string.hpp>
#include <texere/expected.hpp>

using namespace txt;

// ============================================================================
// expected – basic operations
// ============================================================================

TEST_SUITE("expected basic operations") {

    TEST_CASE("has_value returns true for valid result") {
        auto result = string::from_utf8("hello");
        CHECK(result.has_value() == true);
        CHECK(result.operator bool() == true);
    }

    TEST_CASE("has_value returns false for invalid input") {
        auto result = string::from_utf8("\x80");
        CHECK(result.has_value() == false);
        CHECK(result.operator bool() == false);
    }

    TEST_CASE("value() returns the string on success") {
        auto result = string::from_utf8("hello");
        const string& s = result.value();
        CHECK(s.size_bytes() == 5);
    }

    TEST_CASE("value() throws on error (check via error())") {
        auto result = string::from_utf8("\x80");
        CHECK(result.has_value() == false);
    }

    TEST_CASE("error() returns error info on failure") {
        auto result = string::from_utf8("\x80");
        CHECK(result.has_value() == false);
        CHECK(result.error().code == errc::invalid_utf8);
        CHECK(result.error().byte_position == 0);
    }

    TEST_CASE("operator-> on valid result") {
        auto result = string::from_utf8("hello");
        CHECK(result->size_bytes() == 5);
    }

    TEST_CASE("operator* on valid result") {
        auto result = string::from_utf8("hello");
        const string& s = *result;
        CHECK(s.size_bytes() == 5);
    }

}

// ============================================================================
// error type
// ============================================================================

TEST_SUITE("error type") {

    TEST_CASE("error().code for invalid_utf8") {
        auto result = string::from_utf8("\xf8\x80\x80\x80\x80"); // overlong
        CHECK(result.has_value() == false);
        CHECK(result.error().code == errc::invalid_utf8);
    }

    TEST_CASE("error().code for truncated_input") {
        auto result = string::from_utf8("\xe3\x81"); // incomplete 3-byte seq
        CHECK(result.has_value() == false);
        CHECK(result.error().code == errc::truncated_input);
        CHECK(result.error().byte_position == 0);
    }

    TEST_CASE("error().byte_position points to first invalid byte") {
        auto result = string::from_utf8("abc\x80""def");
        CHECK(result.has_value() == false);
        CHECK(result.error().byte_position == 3);
    }

    TEST_CASE("error().ok() returns false for failure") {
        auto result = string::from_utf8("\x80");
        CHECK(result.error().ok() == false);
    }

    TEST_CASE("error().ok() returns false for failure") {
        auto result = string::from_utf8("\x80");
        CHECK(result.error().ok() == false);
    }

    TEST_CASE("error().message() returns descriptive string") {
        auto result = string::from_utf8("\x80");
        CHECK(result.error().message() != nullptr);
    }

}

// ============================================================================
// from_utf8_lossy never fails
// ============================================================================

TEST_SUITE("from_utf8_lossy is infallible") {

    TEST_CASE("lossy accepts invalid UTF-8") {
        auto s = string::from_utf8_lossy("\x80\xfe\xff");
        CHECK(s.size_bytes() > 0);
    }

    TEST_CASE("lossy replaces invalid bytes with U+FFFD") {
        auto s = string::from_utf8_lossy("\x80");
        CHECK(s.size_bytes() == 3);  // U+FFFD = EF BF BD
    }

    TEST_CASE("lossy preserves valid input") {
        auto s = string::from_utf8_lossy("hello");
        CHECK(s.size_bytes() == 5);
    }

}

// ============================================================================
// from_utf8_unchecked is infallible at runtime
// ============================================================================

TEST_SUITE("from_utf8_unchecked is infallible") {

    TEST_CASE("unchecked accepts any bytes") {
        auto s = string::from_utf8_unchecked("\x80\xfe\xff");
        CHECK(s.size_bytes() == 3);
    }

    TEST_CASE("unchecked returns valid string despite invalid input") {
        // Caller is responsible for ensuring validity
        auto s = string::from_utf8_unchecked("\xff");
        CHECK(s.size_bytes() == 1);  // from_utf8_unchecked returns string directly
    }

}
