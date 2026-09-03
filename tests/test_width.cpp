// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: test_width.cpp
// Description: Tests for txt::display_width — UAX #11 + UTS #51 emoji rules.
//
// The emoji test vectors are ported from Rust unicode-width v0.2.0's test
// suite (tests/tests.rs, same Unicode 15.1.0 data): test_emoji_presentation,
// test_text_presentation, test_emoji_modifier, test_emoji_zwj — the
// acceptance bar agreed in the ROADMAP ("display_width agrees with
// unicode-width on >= its emoji test set").

#include <doctest/doctest.h>

#include <texere/string.hpp>
#include <texere/string_view.hpp>
#include <texere/width.hpp>

using namespace txt;

namespace {

// Shorthand: build a string from UTF-8 bytes (all vectors below are valid).
string S(const char* utf8) {
    return string::from_utf8_lossy(std::string_view(utf8));
}

std::size_t w(const char* utf8) {
    const string s = S(utf8);
    return display_width(s, east_asian_context::narrow);
}

std::size_t wcjk(const char* utf8) {
    const string s = S(utf8);
    return display_width(s, east_asian_context::wide);
}

} // namespace

// ---------------------------------------------------------------------------
// East Asian Width basics (UAX #11)
// ---------------------------------------------------------------------------

TEST_CASE("display_width: east asian width basics") {
    // ASCII narrow
    CHECK(w("abc") == 3);
    CHECK(w("Hello, world!") == 13);
    CHECK(w("") == 0);
    CHECK(w(" ") == 1);

    // CJK / fullwidth / wide
    CHECK(w(u8"\u4F60\u597D") == 4);                     // 你好
    CHECK(w(u8"\uFF21") == 2);                           // fullwidth A
    CHECK(w(u8"\uAC00") == 2);                           // precomposed Hangul
    CHECK(w(u8"\u1100\u1161") == 2);                     // choseong + jungseong

    // Halfwidth
    CHECK(w(u8"\uFF61") == 1);

    // Zero width: combining marks attach to the base
    CHECK(w(u8"e\u0301") == 1);
    CHECK(w(u8"\u4F60\u0301") == 2);

    // Controls count 1 in strings (unicode-width semantics); CRLF is 1
    CHECK(w("\t") == 1);
    CHECK(w("\n") == 1);
    CHECK(w("\r\n") == 1);
    CHECK(w("1\t2\r\n3\xc2\x85" "4") == 7);

    // Default-ignorable
    CHECK(w(u8"a\u200Db") == 2);                         // ZWJ takes no cell
    CHECK(w(u8"a\uFEFFb") == 2);                         // BOM takes no cell
}

TEST_CASE("display_width: ambiguous widths follow the context policy") {
    // EAW=A letters / modifier symbols stay narrow even in a wide context
    // (unicode-width rule: U+03B1, U+00A8, U+02C9 all stay 1).
    CHECK(w(u8"\u03B1") == 1);                           // α letter
    CHECK(wcjk(u8"\u03B1") == 1);
    CHECK(w(u8"\u00A8") == 1);                           // ¨ modifier symbol
    CHECK(wcjk(u8"\u00A8") == 1);

    // Other ambiguous characters follow the policy
    CHECK(w(u8"\u2460") == 1);                           // ①
    CHECK(wcjk(u8"\u2460") == 2);
    CHECK(w(u8"\u2192") == 1);                           // →
    CHECK(wcjk(u8"\u2192") == 2);
    CHECK(w(u8"\u0387") == 1);                           // ano teleia (NFC = ·)
    CHECK(wcjk(u8"\u0387") == 2);

    // Wide stays wide in both contexts
    CHECK(w(u8"\u4F60") == 2);
    CHECK(wcjk(u8"\u4F60") == 2);

    // Policy is explicit — these overloads all take the parameter:
    const string s = S("abc");
    CHECK(display_width(s, east_asian_context::narrow) == 3);
    const string_view sv(s);
    CHECK(display_width(sv, east_asian_context::wide) == 3);
}

TEST_CASE("display_width: grapheme clusters measured in isolation") {
    const string s = S(u8"a\u0301\u4F60\U0001F46A");     // a + accent, 你, 👪
    const auto gs = s.graphemes();
    auto it = gs.begin();
    CHECK(display_width(*it++, east_asian_context::narrow) == 1);   // a + accent
    CHECK(display_width(*it++, east_asian_context::narrow) == 2);   // 你
    CHECK(display_width(*it++, east_asian_context::narrow) == 2);   // 👪
    CHECK(it == gs.end());
    CHECK(display_width(s, east_asian_context::narrow) == 5);       // 1 + 2 + 2

    // The whole-string fold is not a per-cluster sum: a ZWJ can join what
    // UAX #29 splits into separate clusters (RI pairs are not ExtPict, so
    // GB11 does not apply).  unicode-width semantics: the whole run is 2.
    const string zwj = S(u8"\U0001F1E6\U0001F1E6\u200D\U0001F1E6\U0001F1E6");
    CHECK(display_width(zwj, east_asian_context::narrow) == 2);
}

// ---------------------------------------------------------------------------
// Emoji presentation sequences (unicode-width test_emoji_presentation)
// ---------------------------------------------------------------------------

TEST_CASE("display_width: emoji presentation sequences (FE0F)") {
    CHECK(w(u8"#") == 1);
    CHECK(w(u8"\uFE0F") == 0);
    CHECK(w(u8"#\uFE0F") == 2);
    CHECK(w(u8"a#\uFE0Fa") == 4);
    CHECK(w(u8"#a\uFE0F") == 2);          // FE0F attaches to 'a', not '#'
    CHECK(w(u8"a\uFE0F") == 1);           // 'a' cannot start an emoji seq
    CHECK(w(u8"##\uFE0Fa") == 4);
    CHECK(w(u8"*\uFE0F") == 2);
    CHECK(w(u8"\u23F9\uFE0F") == 2);
    CHECK(w(u8"\u24C2\uFE0F") == 2);
    CHECK(w(u8"\U0001F6F3\uFE0F") == 2);
    CHECK(w(u8"\U0001F700\uFE0F") == 1);  // not an emoji-presentation starter
    CHECK(w(u8"*\u0301\uFE0F") == 1);     // combining mark breaks the pair
    CHECK(w(u8"*\u200D\uFE0F") == 1);     // ZWJ breaks the pair
    CHECK(w(u8"*\uFE0E\uFE0F") == 1);     // FE0E resets, FE0F has no base
}

// ---------------------------------------------------------------------------
// Text presentation sequences (unicode-width test_text_presentation)
// ---------------------------------------------------------------------------

TEST_CASE("display_width: text presentation sequences (FE0E)") {
    CHECK(w(u8"\uFE0E") == 0);
    CHECK(w(u8"\u2648") == 2);            // Aries: default emoji
    CHECK(w(u8"\u2648\uFE0E") == 1);      // forced text
    CHECK(w(u8"\U0001F21A\uFE0E") == 2);  // Enclosed Ideographic stays wide
    CHECK(w(u8"\u0301\uFE0E") == 0);
    CHECK(w(u8"a\uFE0E") == 1);
    CHECK(w(u8"\U00018000\uFE0E") == 2);  // Tangut ideograph: EAW Wide ignores FE0E
    CHECK(w(u8"\u2648\u0301\uFE0E") == 2);
    CHECK(w(u8"\u2648\u200D\uFE0E") == 2);

    // In an East Asian context FE0E is inert: the CJK tables carry no
    // text-presentation state (unicode-width semantics).
    CHECK(wcjk(u8"\u2648\uFE0E") == 2);
    CHECK(wcjk(u8"\u231A\uFE0E") == 2);   // watch: emoji in wide context
    CHECK(wcjk(u8"a\uFE0E") == 1);
}

// ---------------------------------------------------------------------------
// Emoji modifiers (unicode-width test_emoji_modifier)
// ---------------------------------------------------------------------------

TEST_CASE("display_width: emoji modifier sequences (skin tones)") {
    CHECK(w(u8"\U0001F46A") == 2);                  // 👪 family
    CHECK(w(u8"\U0001F3FB") == 2);                  // 🏻 modifier alone
    CHECK(w(u8"\U0001F46A\U0001F3FB") == 2);        // 👪🏻
    CHECK(w(u8"\U0001F46A\u200D\u200D\U0001F3FB") == 4);  // double ZWJ breaks it
    CHECK(w(u8"\U0001F44D\U0001F3FF") == 2);        // 👍🏿
    CHECK(w(u8"a\U0001F3FB") == 3);                 // modifier without base
}

// ---------------------------------------------------------------------------
// Emoji ZWJ sequences (unicode-width test_emoji_zwj)
// ---------------------------------------------------------------------------

TEST_CASE("display_width: emoji ZWJ sequences") {
    CHECK(w(u8"\U0001F9D1\u200D\U0001F91D\u200D\U0001F9D1") == 2);  // 🧑🤝🧑
    CHECK(w(u8"\U0001F469\u200D\U0001F52C") == 2);                 // 👩🔬

    // Regional indicators: 1 each, pairs form flags
    CHECK(w(u8"\U0001F1E6") == 1);
    CHECK(w(u8"\U0001F1E6\U0001F1E6") == 2);
    CHECK(w(u8"\U0001F1E6\U0001F1E6\U0001F1E6") == 3);

    // RI + emoji/modifier mixes (unicode-width test_emoji_zwj)
    CHECK(w(u8"\U0001F1E6\U0001F46A\u200D\U0001F3FF") == 3);
    CHECK(w(u8"\U0001F1E6\U0001F3FF\u200D\U0001F3FF") == 3);

    // Flags
    CHECK(w(u8"\U0001F1EE\U0001F1F1\U0001F54A\uFE0F\U0001F1F5\U0001F1F8") == 6);
    CHECK(w(u8"\U0001F1F5\U0001F1F8\u200D\U0001F54A\uFE0F\u200D\U0001F1EE\U0001F1F1") == 2);
    CHECK(w(u8"\U0001F1EE\U0001F1F1\u200D\U0001F54A\uFE0F\u200D\u200D\U0001F1F5\U0001F1F8") == 4);
    CHECK(w(u8"\U0001F1F5\U0001F1F8\u200D\u200D\U0001F54A\uFE0F\u200D\U0001F1EE\U0001F1F1") == 4);

    // RI runs with ZWJ
    CHECK(w(u8"\U0001F1E6\U0001F1E6\u200D\U0001F1E6\U0001F1E6") == 2);
    CHECK(w(u8"\U0001F1E6\U0001F1E6\u200D\U0001F1E6\U0001F1E6\U0001F1E6") == 3);
    CHECK(w(u8"\U0001F1E6\U0001F1E6\u200D\u200D\U0001F1E6\U0001F1E6") == 4);
    CHECK(w(u8"\U0001F1E6\U0001F1E6\u200D\U0001F1E6\u200D\U0001F1E6\U0001F1E6") == 5);
    CHECK(w(u8"\U0001F1E6\U0001F1E6\u200D\U0001F1E6\U0001F1E6\u200D\U0001F1E6\U0001F1E6") == 2);

    // Subdivision flags (black flag + tags + cancel tag)
    CHECK(w(u8"\U0001F3F4\U000E0067\U000E0062\U000E0077\U000E006C\U000E0073\U000E007F") == 2);
    CHECK(w(u8"\U0001F3F4\U000E0067\U000E0062\U000E0065\U000E006E\U000E0067\U000E007F\u200D"
             "\U0001F3F4\U000E0067\U000E0062\U000E0073\U000E0063\U000E0074\U000E007F\u200D"
             "\U0001F3F4\U000E0067\U000E0062\U000E0077\U000E006C\U000E0073\U000E007F") == 2);

    // Tags and lone black flags
    CHECK(w(u8"\U0001F3F4") == 2);
    CHECK(w(u8"\U000E0031") == 0);      // E0031 tag digit
    CHECK(w(u8"\U000E0063") == 0);      // E0063 tag letter
    CHECK(w(u8"\U000E007F") == 0);      // E007F cancel tag
    CHECK(w(u8"\U0001F3F4\u200D\u24C2\uFE0F") == 2);
    CHECK(w(u8"\U0001F3F4\U000E0031\u200D\u24C2\uFE0F") == 4);
    CHECK(w(u8"\U0001F3F4\U000E0063\u200D\u24C2\uFE0F") == 4);
    CHECK(w(u8"\U0001F3F4\U000E007F\u200D\u24C2\uFE0F") == 4);
    CHECK(w(u8"\U0001F3F4\U000E0031\U000E0031\U000E0031\U000E007F\u200D\u24C2\uFE0F") == 2);
    CHECK(w(u8"\U0001F3F4\U000E0063\U000E0063\U000E0063\U000E007F\u200D\u24C2\uFE0F") == 2);

    // ZWJ that goes nowhere
    CHECK(w(u8"a\u200D\U0001F3F4\U000E0067\U000E0062\U000E0077\U000E006C\U000E0073\U000E007F") == 3);
    CHECK(w(u8"\U0001F46A\u200Da") == 3);
    CHECK(w(u8"a\u200Da") == 2);

    // Keycaps
    CHECK(w(u8"*\uFE0F") == 2);
    CHECK(w(u8"*\u20E3") == 1);                      // no VS16: not a keycap
    CHECK(w(u8"*\uFE0F\u20E3") == 2);                // *️⃣ keycap
    CHECK(w(u8"*\u20E3\uFE0F") == 1);                // wrong order
    CHECK(w(u8"*\uFE0F\u20E3\u200D\U0001F46A") == 2);
    CHECK(w(u8"*\u20E3\uFE0F\u200D\U0001F46A") == 3);
    CHECK(w(u8"*\u20E3\u200D\U0001F46A") == 3);
    CHECK(w(u8"*\uFE0F\u200D\U0001F46A") == 2);
    CHECK(w(u8"*\uFE0F\u20E3\u20E3\u200D\U0001F46A") == 4);
    CHECK(w(u8"*\uFE0F\uFE0F\u20E3\u200D\U0001F46A") == 4);

    // Mixed marathon (unicode-width's final emoji_zwj case)
    CHECK(w(u8"\U0001F1E6\U0001F46A\u200D\U0001F3FF\u200D\U0001F46A\U0001F3FB\u200D\u24C2\uFE0F\u200D*\uFE0F\u200D"
             "\U0001F1E6\U0001F1E6\u200D\U0001F3F4\U000E0067\U000E0062\U000E0077\U000E006C\U000E0073\U000E007F\u200D\U0001F46A") == 3);
}

// ---------------------------------------------------------------------------
// Well-formed emoji from emoji-test.txt are all width 2
// ---------------------------------------------------------------------------

TEST_CASE("display_width: well-known fully-qualified emoji are width 2") {
    // A curated subset of emoji-test.txt (Unicode 15.1) fully-qualified
    // entries: families, professions, hearts, flags, keycaps, tags.
    const char* emoji[] = {
        u8"\U0001F468\u200D\U0001F469\u200D\U0001F467\u200D\U0001F466",   // 👨👩👧👦 family
        u8"\U0001F469\u200D\u2695\uFE0F",                                // 👩⚕️ health worker
        u8"\U0001F468\u200D\U0001F680",                                  // 👨🚀 astronaut
        u8"\U0001F3C3\u200D\u2640\uFE0F",                                // 🏃♀️ woman running
        u8"\U0001F469\u200D\U0001F3A4",                                  // 👩🎤 singer
        u8"\U0001F415\u200D\U0001F9BA",                                  // 🐕🦺 service dog
        u8"\U0001F9D1\u200D\U0001F393",                                  // 🧑🎓 student
        u8"\u2764\uFE0F\u200D\U0001F525",                                // ❤️🔥 heart on fire
        u8"\U0001F6B4\u200D\u2642\uFE0F",                                // 🚴♂️ man biking
        u8"\U0001F1E8\U0001F1F3",                                        // 🇨🇳 flag China
        u8"\U0001F1FA\U0001F1F8",                                        // 🇺🇸 flag US
        u8"*\uFE0F\u20E3",                                               // *️⃣ keycap
        u8"1\uFE0F\u20E3",                                               // 1️⃣ keycap
        u8"#\uFE0F\u20E3",                                               // #️⃣ keycap
        u8"\U0001F3F4\U000E0067\U000E0062\U000E0065\U000E006E\U000E0067\U000E007F",  // 🏴󠁧󠁢󠁥󠁮󠁧󠁿
        u8"\U0001F44D\U0001F3FC",                                        // 👍🏼 thumbs up
        u8"\U0001F9D4\u200D\u2640\uFE0F",                                // 🧔♀️ woman beard
        u8"\U0001F90D",                                                  // 🤍 white heart (EP default)
    };
    for (const char* e : emoji) {
        INFO("emoji: ", e);
        CHECK(w(e) == 2);
    }
}
