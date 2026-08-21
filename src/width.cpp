// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: width.cpp
// Description: Display width runtime — UAX #11 + UTS #51 emoji rules.

#include <texere/width.hpp>

#include "width_tables.hpp"

#include <cstddef>
#include <cstdint>
#include <string_view>
#include <utility>

namespace txt {
namespace {

using detail::width_base_ambiguous;
using detail::width_base_wide;
using detail::width_base_zero;
using detail::width_flag_ambiguous_letter;
using detail::width_flag_emoji_modifier_base;
using detail::width_flag_emoji_presentation;
using detail::width_flag_presentation_seq_starter;
using detail::width_flag_text_seq_starter;

// ---------------------------------------------------------------------------
// State machine (port of Rust unicode-width v0.2.0's WidthInfo, emoji subset)
// ---------------------------------------------------------------------------
//
// The fold runs RIGHT TO LEFT over the code points of one grapheme cluster:
// the width of a code point can depend on what follows it (FE0F/FE0E/ZWJ
// modifiers), and a right fold keeps that lookahead in the carried state.

enum class wstate : std::uint8_t {
    default_state,
    line_feed,
    emoji_modifier,
    regional_indicator,
    several_regional_indicator,
    emoji_presentation,
    zwj_emoji_presentation,
    vs16_zwj_emoji_presentation,
    keycap_zwj_emoji_presentation,
    vs16_keycap_zwj_emoji_presentation,
    regional_indicator_zwj_presentation,
    even_regional_indicator_zwj_presentation,
    odd_regional_indicator_zwj_presentation,
    tag_end_zwj_emoji_presentation,
    tag_d1_end_zwj_emoji_presentation,
    tag_d2_end_zwj_emoji_presentation,
    tag_d3_end_zwj_emoji_presentation,
    tag_a1_end_zwj_emoji_presentation,
    tag_a2_end_zwj_emoji_presentation,
    tag_a3_end_zwj_emoji_presentation,
    tag_a4_end_zwj_emoji_presentation,
    tag_a5_end_zwj_emoji_presentation,
    tag_a6_end_zwj_emoji_presentation,
    variation_selector_15,
    variation_selector_16,
};

constexpr bool is_regional_indicator(char32_t cp) noexcept {
    return cp >= 0x1F1E6 && cp <= 0x1F1FF;
}

constexpr bool is_emoji_modifier(char32_t cp) noexcept {
    return cp >= 0x1F3FB && cp <= 0x1F3FF;
}

constexpr bool is_keycap_base(char32_t cp) noexcept {
    return (cp >= '0' && cp <= '9') || cp == '#' || cp == '*';
}

constexpr bool is_tag_char(char32_t cp) noexcept {
    return cp >= 0xE0061 && cp <= 0xE007A;
}

constexpr bool is_tag_digit(char32_t cp) noexcept {
    return cp >= 0xE0030 && cp <= 0xE0039;
}

// UTS #51 flags carried by the per-code-point tables.
constexpr bool starts_emoji_presentation_seq(char32_t cp) noexcept {
    return (detail::width_lookup(cp) & width_flag_presentation_seq_starter) != 0;
}

constexpr bool starts_text_presentation_seq(char32_t cp) noexcept {
    return (detail::width_lookup(cp) & width_flag_text_seq_starter) != 0;
}

constexpr bool is_emoji_modifier_base(char32_t cp) noexcept {
    return (detail::width_lookup(cp) & width_flag_emoji_modifier_base) != 0;
}

constexpr bool has_emoji_presentation(char32_t cp) noexcept {
    return (detail::width_lookup(cp) & width_flag_emoji_presentation) != 0;
}

// WidthInfo bit semantics from unicode-width, reduced to our state set:
//   is_emoji_presentation     == top bit set (VS16 was seen)
//   is_zwj_emoji_presentation == VS16 after a ZWJ emoji state
constexpr bool is_emoji_presentation_state(wstate s) noexcept {
    return s == wstate::variation_selector_16 ||
           s == wstate::vs16_zwj_emoji_presentation ||
           s == wstate::vs16_keycap_zwj_emoji_presentation;
}

constexpr bool is_zwj_emoji_presentation_state(wstate s) noexcept {
    // unicode-width's is_zwj_emoji_presentation matches both VS16-ZWJ
    // states (0b1001_..._0110 and 0b1001_..._0111) — keycaps included.
    return s == wstate::vs16_zwj_emoji_presentation ||
           s == wstate::vs16_keycap_zwj_emoji_presentation;
}

constexpr wstate set_emoji_presentation(wstate s) noexcept {
    if (s == wstate::zwj_emoji_presentation) return wstate::vs16_zwj_emoji_presentation;
    if (s == wstate::keycap_zwj_emoji_presentation)
        return wstate::vs16_keycap_zwj_emoji_presentation;
    return wstate::variation_selector_16;
}

// Per-code-point width + carried state (unicode-width's lookup_width).
std::pair<std::uint8_t, wstate> lookup_width(char32_t cp, east_asian_context ctx) noexcept {
    // FE0E only re-styles in a narrow context: in an East Asian context the
    // CJK tables carry no VS15 state and text presentation is a no-op.
    if (cp == 0xFE0E && ctx == east_asian_context::narrow)
        return {0, wstate::variation_selector_15};
    if (cp == 0xFE0F) return {0, wstate::variation_selector_16};
    if (is_regional_indicator(cp)) return {1, wstate::regional_indicator};
    if (is_emoji_modifier(cp)) return {2, wstate::emoji_modifier};
    const std::uint8_t v = detail::width_lookup(cp);
    if (v & width_flag_emoji_presentation) return {2, wstate::emoji_presentation};
    const std::uint8_t base = v & 0x3;
    if (base == width_base_zero) return {0, wstate::default_state};
    if (base == width_base_wide) return {2, wstate::default_state};
    if (base == width_base_ambiguous) {
        // EAW=A letters and modifier symbols stay narrow even in a wide
        // context (unicode-width rule, precomputed as a table flag).
        const bool wide = ctx == east_asian_context::wide &&
                          (v & width_flag_ambiguous_letter) == 0;
        return {wide ? 2u : 1u, wstate::default_state};
    }
    return {1, wstate::default_state};
}

// One step of the right-to-left fold (unicode-width's width_in_str).
// Returns (width contribution, new carried state).
std::pair<int, wstate> width_in_str(char32_t c, wstate next, east_asian_context ctx) noexcept {
    if (is_emoji_presentation_state(next)) {
        if (starts_emoji_presentation_seq(c)) {
            const int w = is_zwj_emoji_presentation_state(next) ? 0 : 2;
            return {w, wstate::emoji_presentation};
        }
        next = wstate::default_state;
    }

    // Controls: everything <= U+00A0 counts 1 in strings (unicode-width
    // semantics); CR LF collapses to a single cell.
    if (c <= 0xA0) {
        if (c == 0x0A) return {1, wstate::line_feed};
        if (c == 0x0D && next == wstate::line_feed) return {0, wstate::default_state};
        return {1, wstate::default_state};
    }

    if (next != wstate::default_state) {
        // Variation selectors first: they re-style whatever precedes them.
        if (c == 0xFE0F) return {0, set_emoji_presentation(next)};
        if (c == 0xFE0E && ctx == east_asian_context::narrow)
            return {0, wstate::variation_selector_15};
        if (next == wstate::variation_selector_15) {
            if (starts_text_presentation_seq(c)) return {1, wstate::default_state};
            next = wstate::default_state;
        }

        if (next == wstate::emoji_modifier && is_emoji_modifier_base(c))
            return {0, wstate::emoji_presentation};

        if ((next == wstate::regional_indicator ||
             next == wstate::several_regional_indicator) &&
            is_regional_indicator(c))
            return {1, wstate::several_regional_indicator};

        if ((next == wstate::emoji_presentation ||
             next == wstate::several_regional_indicator ||
             next == wstate::even_regional_indicator_zwj_presentation ||
             next == wstate::odd_regional_indicator_zwj_presentation ||
             next == wstate::emoji_modifier) &&
            c == 0x200D)
            return {0, wstate::zwj_emoji_presentation};

        if (next == wstate::zwj_emoji_presentation && c == 0x20E3)
            return {0, wstate::keycap_zwj_emoji_presentation};
        if (next == wstate::vs16_zwj_emoji_presentation && starts_emoji_presentation_seq(c))
            return {0, wstate::emoji_presentation};
        if (next == wstate::vs16_keycap_zwj_emoji_presentation && is_keycap_base(c))
            return {0, wstate::emoji_presentation};

        if (next == wstate::zwj_emoji_presentation && is_regional_indicator(c))
            return {1, wstate::regional_indicator_zwj_presentation};
        if ((next == wstate::regional_indicator_zwj_presentation ||
             next == wstate::odd_regional_indicator_zwj_presentation) &&
            is_regional_indicator(c))
            return {-1, wstate::even_regional_indicator_zwj_presentation};
        if (next == wstate::even_regional_indicator_zwj_presentation &&
            is_regional_indicator(c))
            return {3, wstate::odd_regional_indicator_zwj_presentation};

        if (next == wstate::zwj_emoji_presentation && is_emoji_modifier(c))
            return {0, wstate::emoji_modifier};

        // Subdivision-flag tag sequences (black flag + tags + cancel tag).
        if (next == wstate::zwj_emoji_presentation && c == 0xE007F)
            return {0, wstate::tag_end_zwj_emoji_presentation};
        if (next == wstate::tag_end_zwj_emoji_presentation && is_tag_char(c))
            return {0, wstate::tag_a1_end_zwj_emoji_presentation};
        if (next == wstate::tag_a1_end_zwj_emoji_presentation && is_tag_char(c))
            return {0, wstate::tag_a2_end_zwj_emoji_presentation};
        if (next == wstate::tag_a2_end_zwj_emoji_presentation && is_tag_char(c))
            return {0, wstate::tag_a3_end_zwj_emoji_presentation};
        if (next == wstate::tag_a3_end_zwj_emoji_presentation && is_tag_char(c))
            return {0, wstate::tag_a4_end_zwj_emoji_presentation};
        if (next == wstate::tag_a4_end_zwj_emoji_presentation && is_tag_char(c))
            return {0, wstate::tag_a5_end_zwj_emoji_presentation};
        if (next == wstate::tag_a5_end_zwj_emoji_presentation && is_tag_char(c))
            return {0, wstate::tag_a6_end_zwj_emoji_presentation};
        if ((next == wstate::tag_end_zwj_emoji_presentation ||
             next == wstate::tag_a1_end_zwj_emoji_presentation ||
             next == wstate::tag_a2_end_zwj_emoji_presentation ||
             next == wstate::tag_a3_end_zwj_emoji_presentation ||
             next == wstate::tag_a4_end_zwj_emoji_presentation) &&
            is_tag_digit(c))
            return {0, wstate::tag_d1_end_zwj_emoji_presentation};
        if (next == wstate::tag_d1_end_zwj_emoji_presentation && is_tag_digit(c))
            return {0, wstate::tag_d2_end_zwj_emoji_presentation};
        if (next == wstate::tag_d2_end_zwj_emoji_presentation && is_tag_digit(c))
            return {0, wstate::tag_d3_end_zwj_emoji_presentation};
        if ((next == wstate::tag_a3_end_zwj_emoji_presentation ||
             next == wstate::tag_a4_end_zwj_emoji_presentation ||
             next == wstate::tag_a5_end_zwj_emoji_presentation ||
             next == wstate::tag_a6_end_zwj_emoji_presentation ||
             next == wstate::tag_d3_end_zwj_emoji_presentation) &&
            c == 0x1F3F4)
            return {0, wstate::emoji_presentation};

        if (next == wstate::zwj_emoji_presentation && has_emoji_presentation(c))
            return {0, wstate::emoji_presentation};
    }

    return lookup_width(c, ctx);
}

// Right-to-left fold over a code point range.
std::size_t fold_width(const char32_t* cps, std::size_t n, east_asian_context ctx) noexcept {
    int total = 0;
    wstate next = wstate::default_state;
    for (std::size_t i = n; i-- > 0;) {
        const auto step = width_in_str(cps[i], next, ctx);
        total += step.first;
        next = step.second;
    }
    return static_cast<std::size_t>(total);
}

// Decode one code point from valid UTF-8 (a txt::string invariant).
inline char32_t decode_cp(const char*& p) noexcept {
    const unsigned char b0 = static_cast<unsigned char>(*p++);
    if (b0 < 0x80) return b0;
    const int cont = b0 >= 0xF0 ? 3 : (b0 >= 0xE0 ? 2 : 1);
    char32_t cp = b0 & (0x3Fu >> cont);
    for (int i = 0; i < cont; ++i)
        cp = (cp << 6) | (static_cast<unsigned char>(*p++) & 0x3Fu);
    return cp;
}

// Right-to-left fold over the code points of a byte range.  UTF-8 is
// self-synchronizing, so the code points can be visited backwards without
// materializing them: continuation bytes (0b10xxxxxx) never start a code
// point, so each step scans back to the lead byte and decodes from there.
std::size_t fold_backward(const char* begin, std::size_t size,
                          east_asian_context ctx) noexcept {
    int total = 0;
    wstate next = wstate::default_state;
    const char* p = begin + size;
    while (p != begin) {
        const char* q = p;
        while (q != begin && (static_cast<unsigned char>(q[-1]) & 0xC0u) == 0x80u) --q;
        const unsigned char lead = static_cast<unsigned char>(*(q - 1));
        char32_t cp = lead;
        if (lead >= 0x80) {
            const int cont = static_cast<int>(p - q);
            cp = lead & (0x3Fu >> cont);
            for (const char* r = q; r != p; ++r)
                cp = (cp << 6) | (static_cast<unsigned char>(*r) & 0x3Fu);
        }
        p = q - 1;
        const auto step = width_in_str(cp, next, ctx);
        total += step.first;
        next = step.second;
    }
    return static_cast<std::size_t>(total);
}

} // namespace

std::size_t display_width(grapheme_ref g, east_asian_context ctx) noexcept {
    return fold_backward(g.utf8().data(), g.utf8().size(), ctx);
}

std::size_t display_width(const string& s, east_asian_context ctx) noexcept {
    const std::string_view chars = s.as_chars();
    return fold_backward(chars.data(), chars.size(), ctx);
}

std::size_t display_width(const string_view& sv, east_asian_context ctx) noexcept {
    return fold_backward(sv.as_chars().data(), sv.as_chars().size(), ctx);
}

} // namespace txt
