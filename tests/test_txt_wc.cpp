// Copyright 2026 The texere Authors.
// Licensed under the MIT License.
//
// File: test_txt_wc.cpp
// Description: Unit tests for the `txt wc` counting core.

#include <doctest/doctest.h>

#include "wc.hpp"

#include <string>
#include <string_view>

using txt_tool::wc::count;

namespace {

// Builds a std::string_view from explicit byte values (no escaping traps).
std::string bytes(std::initializer_list<unsigned char> bs) {
    return std::string(reinterpret_cast<const char*>(bs.begin()), bs.size());
}

} // namespace

TEST_SUITE("txt wc counting core") {

    TEST_CASE("empty input") {
        auto c = count("");
        CHECK(c.lines == 0);
        CHECK(c.graphemes == 0);
        CHECK(c.codepoints == 0);
        CHECK(c.bytes == 0);
    }

    TEST_CASE("pure ASCII") {
        auto c = count("hello\n");
        CHECK(c.lines == 1);
        CHECK(c.graphemes == 6);    // h e l l o \n
        CHECK(c.codepoints == 6);
        CHECK(c.bytes == 6);
    }

    TEST_CASE("line count follows newline bytes, not visual lines") {
        auto c = count("a\nb\nc");  // no trailing newline
        CHECK(c.lines == 2);
        CHECK(c.graphemes == 5);    // a \n b \n c  — wc counts \n as chars too
    }

    TEST_CASE("CJK: bytes and codepoints diverge") {
        auto c = count("\xE6\x97\xA5\xE6\x9C\xAC\xE8\xAA\x9E");   // 日本語
        CHECK(c.lines == 0);
        CHECK(c.graphemes == 3);
        CHECK(c.codepoints == 3);
        CHECK(c.bytes == 9);
    }

    TEST_CASE("combining mark: codepoints and graphemes diverge") {
        // e + COMBINING ACUTE ACCENT = one grapheme, two codepoints
        auto c = count(bytes({'e', 0xCC, 0x81}));
        CHECK(c.graphemes == 1);
        CHECK(c.codepoints == 2);
        CHECK(c.bytes == 3);
    }

    TEST_CASE("ZWJ emoji family: one grapheme, many codepoints") {
        // MAN ZWJ WOMAN = one grapheme cluster, 3 codepoints, 11 bytes
        auto c = count(bytes({
            0xF0, 0x9F, 0x91, 0xA8,             // U+1F468
            0xE2, 0x80, 0x8D,                   // ZWJ
            0xF0, 0x9F, 0x91, 0xA9}));          // U+1F469
        CHECK(c.graphemes == 1);
        CHECK(c.codepoints == 3);
        CHECK(c.bytes == 11);
    }

    TEST_CASE("flag sequence: one grapheme") {
        // RAINBOW FLAG = U+1F3F3 U+FE0F U+200D U+1F308 = 1 grapheme
        auto c = count(bytes({
            0xF0, 0x9F, 0x8F, 0xB3,             // U+1F3F3
            0xEF, 0xB8, 0x8F,                   // U+FE0F
            0xE2, 0x80, 0x8D,                   // ZWJ
            0xF0, 0x9F, 0x8C, 0x88}));          // U+1F308
        CHECK(c.graphemes == 1);
        CHECK(c.codepoints == 4);
        CHECK(c.bytes == 14);
    }

    TEST_CASE("all granularities diverge in one string") {
        // "a" + 日 + family(3cp) + "\n"
        auto s = "a\xE6\x97\xA5" + bytes({
            0xF0, 0x9F, 0x91, 0xA8,
            0xE2, 0x80, 0x8D,
            0xF0, 0x9F, 0x91, 0xA9}) + "\n";
        auto c = count(s);
        CHECK(c.lines == 1);
        CHECK(c.graphemes == 4);    // a, 日, family, \n
        CHECK(c.codepoints == 6);   // a, 日, 👨, ZWJ, 👩, \n
        CHECK(c.bytes == 16);
    }

    TEST_CASE("invalid bytes never crash the counter") {
        auto c = count(bytes({0x80, 0x41}));    // stray continuation + 'A'
        CHECK(c.bytes == 2);
        CHECK(c.graphemes >= 1);   // degrades, never explodes
        CHECK(c.codepoints >= 2);  // replacement + 'A'
    }

}
