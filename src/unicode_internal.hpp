// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#pragma once

#include <cstddef>
#include <string>
#include <string_view>

namespace txt::detail {

struct utf8_decode_result {
    char32_t code_point{0};
    std::size_t width{0};
    bool valid{false};
    bool truncated{false};
};

inline utf8_decode_result decode_utf8_at(std::string_view sv, std::size_t pos) noexcept {
    const auto* bytes = reinterpret_cast<const unsigned char*>(sv.data());
    const std::size_t len = sv.size();
    if (pos >= len) {
        return {};
    }

    const unsigned char c0 = bytes[pos];
    if (c0 <= 0x7F) {
        return {c0, 1, true, false};
    }

    if ((c0 & 0xE0) == 0xC0) {
        if (c0 < 0xC2) {
            return {0xFFFD, 1, false, false};
        }
        if (pos + 1 >= len) {
            return {0xFFFD, 1, false, true};
        }
        const unsigned char c1 = bytes[pos + 1];
        if ((c1 & 0xC0) != 0x80) {
            return {0xFFFD, 1, false, false};
        }
        return {static_cast<char32_t>(((c0 & 0x1F) << 6) | (c1 & 0x3F)), 2, true, false};
    }

    if ((c0 & 0xF0) == 0xE0) {
        if (pos + 2 >= len) {
            return {0xFFFD, 1, false, true};
        }
        const unsigned char c1 = bytes[pos + 1];
        const unsigned char c2 = bytes[pos + 2];
        if ((c1 & 0xC0) != 0x80 || (c2 & 0xC0) != 0x80) {
            return {0xFFFD, 1, false, false};
        }
        if (c0 == 0xE0 && c1 < 0xA0) {
            return {0xFFFD, 1, false, false};
        }
        if (c0 == 0xED && c1 > 0x9F) {
            return {0xFFFD, 1, false, false};
        }
        return {static_cast<char32_t>(((c0 & 0x0F) << 12) | ((c1 & 0x3F) << 6) |
                                      (c2 & 0x3F)),
                3,
                true,
                false};
    }

    if ((c0 & 0xF8) == 0xF0) {
        if (c0 > 0xF4) {
            return {0xFFFD, 1, false, false};
        }
        if (pos + 3 >= len) {
            return {0xFFFD, 1, false, true};
        }
        const unsigned char c1 = bytes[pos + 1];
        const unsigned char c2 = bytes[pos + 2];
        const unsigned char c3 = bytes[pos + 3];
        if ((c1 & 0xC0) != 0x80 || (c2 & 0xC0) != 0x80 || (c3 & 0xC0) != 0x80) {
            return {0xFFFD, 1, false, false};
        }
        if (c0 == 0xF0 && c1 < 0x90) {
            return {0xFFFD, 1, false, false};
        }
        if (c0 == 0xF4 && c1 > 0x8F) {
            return {0xFFFD, 1, false, false};
        }
        return {static_cast<char32_t>(((c0 & 0x07) << 18) | ((c1 & 0x3F) << 12) |
                                      ((c2 & 0x3F) << 6) | (c3 & 0x3F)),
                4,
                true,
                false};
    }

    return {0xFFFD, 1, false, false};
}

inline void append_utf8(std::string& out, char32_t cp) {
    if (cp <= 0x7F) {
        out.push_back(static_cast<char>(cp));
    } else if (cp <= 0x7FF) {
        out.push_back(static_cast<char>(0xC0 | (cp >> 6)));
        out.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
    } else if (cp <= 0xFFFF) {
        out.push_back(static_cast<char>(0xE0 | (cp >> 12)));
        out.push_back(static_cast<char>(0x80 | ((cp >> 6) & 0x3F)));
        out.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
    } else {
        out.push_back(static_cast<char>(0xF0 | (cp >> 18)));
        out.push_back(static_cast<char>(0x80 | ((cp >> 12) & 0x3F)));
        out.push_back(static_cast<char>(0x80 | ((cp >> 6) & 0x3F)));
        out.push_back(static_cast<char>(0x80 | (cp & 0x3F)));
    }
}

inline bool is_combining_mark(char32_t cp) noexcept {
    return (cp >= 0x0300 && cp <= 0x036F) || (cp >= 0x0483 && cp <= 0x0489) ||
           (cp >= 0x0591 && cp <= 0x05BD) || cp == 0x05BF ||
           (cp >= 0x05C1 && cp <= 0x05C2) || (cp >= 0x05C4 && cp <= 0x05C5) ||
           cp == 0x05C7 || (cp >= 0x0610 && cp <= 0x061A) ||
           (cp >= 0x064B && cp <= 0x065F) || cp == 0x0670 ||
           (cp >= 0x06D6 && cp <= 0x06DC) || (cp >= 0x06DF && cp <= 0x06E4) ||
           (cp >= 0x06E7 && cp <= 0x06E8) || (cp >= 0x06EA && cp <= 0x06ED) ||
           (cp >= 0x0711 && cp <= 0x074A) || (cp >= 0x07A6 && cp <= 0x07B0) ||
           (cp >= 0x07EB && cp <= 0x07F3) || (cp >= 0x0816 && cp <= 0x082D) ||
           (cp >= 0x0859 && cp <= 0x085B) || (cp >= 0x08D3 && cp <= 0x08FF) ||
           (cp >= 0x0900 && cp <= 0x0903) || (cp >= 0x093A && cp <= 0x093C) ||
           (cp >= 0x0941 && cp <= 0x0948) || (cp >= 0x094D && cp <= 0x094F) ||
           (cp >= 0x0951 && cp <= 0x0957) || (cp >= 0x0962 && cp <= 0x0963) ||
           (cp >= 0x0981 && cp <= 0x0983) || (cp >= 0x09BC && cp <= 0x09C4) ||
           cp == 0x09CD || (cp >= 0x09E2 && cp <= 0x09E3) ||
           (cp >= 0x0A01 && cp <= 0x0A03) || cp == 0x0A3C ||
           (cp >= 0x0A41 && cp <= 0x0A42) || (cp >= 0x0A47 && cp <= 0x0A48) ||
           (cp >= 0x0A4B && cp <= 0x0A4D) || (cp >= 0x0A70 && cp <= 0x0A71) ||
           (cp >= 0x0A81 && cp <= 0x0A83) || cp == 0x0ABC ||
           (cp >= 0x0AC1 && cp <= 0x0AC5) || (cp >= 0x0AC7 && cp <= 0x0AC8) ||
           cp == 0x0ACD || (cp >= 0x0AE2 && cp <= 0x0AE3) ||
           (cp >= 0x0B01 && cp <= 0x0B03) || cp == 0x0B3C ||
           (cp >= 0x0B3F && cp <= 0x0B44) || cp == 0x0B4D ||
           (cp >= 0x0B55 && cp <= 0x0B57) || (cp >= 0x0B62 && cp <= 0x0B63) ||
           (cp >= 0x0BBE && cp <= 0x0BCD) || (cp >= 0x0C00 && cp <= 0x0C04) ||
           (cp >= 0x0C3E && cp <= 0x0C56) || (cp >= 0x0C62 && cp <= 0x0C63) ||
           (cp >= 0x0CBC && cp <= 0x0CCD) || (cp >= 0x0D00 && cp <= 0x0D03) ||
           (cp >= 0x0D3B && cp <= 0x0D4D) || (cp >= 0x0D62 && cp <= 0x0D63) ||
           (cp >= 0x0DCA && cp <= 0x0DDF) || cp == 0x0E31 ||
           (cp >= 0x0E34 && cp <= 0x0E3A) || (cp >= 0x0E47 && cp <= 0x0E4E) ||
           cp == 0x0EB1 || (cp >= 0x0EB4 && cp <= 0x0EBC) ||
           (cp >= 0x0EC8 && cp <= 0x0ECD) || (cp >= 0x1AB0 && cp <= 0x1AFF) ||
           (cp >= 0x1DC0 && cp <= 0x1DFF) || (cp >= 0x20D0 && cp <= 0x20FF) ||
           (cp >= 0xFE20 && cp <= 0xFE2F);
}

inline bool is_variation_selector(char32_t cp) noexcept {
    return (cp >= 0xFE00 && cp <= 0xFE0F) || (cp >= 0xE0100 && cp <= 0xE01EF);
}

inline bool is_emoji_modifier(char32_t cp) noexcept {
    return cp >= 0x1F3FB && cp <= 0x1F3FF;
}

inline bool is_control_for_grapheme(char32_t cp) noexcept {
    return (cp <= 0x001F) || (cp >= 0x007F && cp <= 0x009F);
}

inline int canonical_combining_class(char32_t cp) noexcept {
    switch (cp) {
        case 0x0300:
        case 0x0301:
        case 0x0302:
        case 0x0303:
        case 0x0304:
        case 0x0306:
        case 0x0307:
        case 0x0308:
        case 0x030A:
        case 0x030B:
        case 0x030C:
        case 0x0327:
            return 230;
        case 0x0323:
            return 220;
        default:
            return 0;
    }
}

} // namespace txt::detail
