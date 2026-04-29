// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/convert.hpp>

#include "unicode_internal.hpp"

namespace txt {

std::wstring to_wstring(const string& s) {
    std::wstring out;
    const auto sv = s.to_std_string_view();
    out.reserve(sv.size());

    for (std::size_t i = 0; i < sv.size();) {
        auto decoded = detail::decode_utf8_at(sv, i);
        const char32_t cp = decoded.code_point;
        if constexpr (sizeof(wchar_t) == 2) {
            if (cp <= 0xFFFF) {
                out.push_back(static_cast<wchar_t>(cp));
            } else {
                const char32_t u = cp - 0x10000;
                out.push_back(static_cast<wchar_t>(0xD800 + (u >> 10)));
                out.push_back(static_cast<wchar_t>(0xDC00 + (u & 0x3FF)));
            }
        } else {
            out.push_back(static_cast<wchar_t>(cp));
        }
        i += decoded.width == 0 ? 1 : decoded.width;
    }

    return out;
}

expected<string, error> from_wstring(std::wstring_view ws) {
    std::string out;
    out.reserve(ws.size());

    for (std::size_t i = 0; i < ws.size(); ++i) {
        char32_t cp = static_cast<char32_t>(ws[i]);
        if constexpr (sizeof(wchar_t) == 2) {
            if (cp >= 0xD800 && cp <= 0xDBFF) {
                if (i + 1 >= ws.size()) {
                    return unexpected<error>(error{errc::surrogate_pair, i});
                }
                const char32_t low = static_cast<char32_t>(ws[i + 1]);
                if (low < 0xDC00 || low > 0xDFFF) {
                    return unexpected<error>(error{errc::surrogate_pair, i});
                }
                cp = 0x10000 + ((cp - 0xD800) << 10) + (low - 0xDC00);
                ++i;
            } else if (cp >= 0xDC00 && cp <= 0xDFFF) {
                return unexpected<error>(error{errc::surrogate_pair, i});
            }
        } else if (cp > 0x10FFFF || (cp >= 0xD800 && cp <= 0xDFFF)) {
            return unexpected<error>(error{errc::out_of_range, i});
        }
        detail::append_utf8(out, cp);
    }

    return string::from_utf8_unchecked(out);
}

string from_latin1(std::string_view latin1) {
    std::string res;
    res.reserve(latin1.size() * 2);
    for (unsigned char c : latin1) {
        detail::append_utf8(res, c);
    }
    return string::from_utf8_unchecked(res);
}

expected<std::string, error> to_latin1(const string& s) {
    std::string res;
    res.reserve(s.size_bytes());
    const auto sv = s.to_std_string_view();

    for (std::size_t i = 0; i < sv.size();) {
        auto decoded = detail::decode_utf8_at(sv, i);
        if (!decoded.valid || decoded.code_point > 0xFF) {
            return unexpected<error>(error{errc::conversion_fail, i});
        }
        res.push_back(static_cast<char>(decoded.code_point));
        i += decoded.width == 0 ? 1 : decoded.width;
    }

    return res;
}

} // namespace txt
