// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/convert.hpp>

#ifdef TEXERE_HAS_UNIALGO
#include <uni_algo/conv.h>
#endif

namespace txt {

std::wstring to_wstring(const string& s) {
#ifdef TEXERE_HAS_UNIALGO
    std::string_view sv = s.to_std_string_view();
    if constexpr (sizeof(wchar_t) == 2) {
        return una::utf8to16<std::wstring>(sv);
    } else {
        return una::utf8to32<std::wstring>(sv);
    }
#else
    // Fallback: Just cast if no unialgo, though it's lossy/wrong for non-ASCII
    std::string_view sv = s.to_std_string_view();
    return std::wstring(sv.begin(), sv.end());
#endif
}

expected<string, error> from_wstring(std::wstring_view ws) {
#ifdef TEXERE_HAS_UNIALGO
    std::string res;
    if constexpr (sizeof(wchar_t) == 2) {
        res = una::utf16to8<std::string>(ws);
    } else {
        res = una::utf32to8<std::string>(ws);
    }
    // utf16to8 returns valid utf8, we can use unchecked
    return string::from_utf8_unchecked(res);
#else
    // Fallback stub
    std::string res(ws.begin(), ws.end());
    return string::from_utf8(res);
#endif
}

string from_latin1(std::string_view latin1) {
    std::string res;
    res.reserve(latin1.size() * 2);
    for (unsigned char c : latin1) {
        if (c <= 0x7F) {
            res.push_back(c);
        } else {
            res.push_back(0xC0 | (c >> 6));
            res.push_back(0x80 | (c & 0x3F));
        }
    }
    return string::from_utf8_unchecked(res);
}

expected<std::string, error> to_latin1(const string& s) {
    std::string res;
    res.reserve(s.size_bytes());
    auto cps = s.codepoints();
    std::size_t byte_pos = 0;
    
    // We need to iterate carefully to track byte_position for error reporting
    // Let's use basic iteration
    for (char32_t cp : cps) {
        if (cp > 0xFF) {
            return unexpected<error>(error{errc::invalid_utf8, byte_pos}); 
            // Better error code might be needed, but using existing one
        }
        res.push_back(static_cast<char>(cp));
        // byte_pos increment is tricky without iterator that tracks it.
        byte_pos += (cp <= 0x7F) ? 1 : 2; 
    }
    return res;
}

} // namespace txt
