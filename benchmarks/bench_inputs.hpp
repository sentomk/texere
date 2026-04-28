// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// Shared benchmark inputs. Keep these helpers local to the benchmark target so
// public texere headers stay free of benchmark-only fixtures.

#pragma once

#include <string>

namespace texere_bench::inputs {

inline const std::string& ascii_1k() {
    static const std::string s(1000, 'a');
    return s;
}

inline const std::string& ascii_x_1k() {
    static const std::string s(1000, 'x');
    return s;
}

inline const std::string& ascii_lower_1k() {
    static const std::string s = []() {
        std::string out;
        out.reserve(1000);
        for (int i = 0; i < 1000; ++i) out += static_cast<char>('a' + (i % 26));
        return out;
    }();
    return s;
}

inline const std::string& ascii_upper_1k() {
    static const std::string s = []() {
        std::string out;
        out.reserve(1000);
        for (int i = 0; i < 1000; ++i) out += static_cast<char>('A' + (i % 26));
        return out;
    }();
    return s;
}

inline const std::string& cjk_1k() {
    static const std::string s = []() {
        std::string out;
        out.reserve(3000);
        for (int i = 0; i < 1000; ++i) out += "\xe4\xb8\xad";
        return out;
    }();
    return s;
}

inline const std::string& mixed_ascii_cjk_1k() {
    static const std::string s = []() {
        std::string out;
        out.reserve(2000);
        for (int i = 0; i < 500; ++i) out += 'a';
        for (int i = 0; i < 500; ++i) out += "\xe4\xb8\xad";
        return out;
    }();
    return s;
}

inline const std::string& emoji_100() {
    static const std::string s = []() {
        std::string out;
        out.reserve(400);
        for (int i = 0; i < 100; ++i) out += "\xf0\x9f\x98\x80";
        return out;
    }();
    return s;
}

inline const std::string& emoji_family_100() {
    static const std::string s = []() {
        const char family[] =
            "\xf0\x9f\x91\xa8\xe2\x80\x8d"
            "\xf0\x9f\x91\xa9\xe2\x80\x8d"
            "\xf0\x9f\x91\xa7";
        std::string out;
        for (int i = 0; i < 100; ++i) out += family;
        return out;
    }();
    return s;
}

inline const std::string& invalid_continuation_1k() {
    static const std::string s = []() {
        std::string out = ascii_x_1k();
        out[500] = '\x80';
        return out;
    }();
    return s;
}

inline const std::string& invalid_mixed_1k() {
    static const std::string s = []() {
        std::string out = ascii_x_1k();
        out[100] = '\x80';
        out[500] = '\xfe';
        return out;
    }();
    return s;
}

inline const std::string& nfd_e_acute_1k() {
    static const std::string s = []() {
        std::string out;
        out.reserve(3000);
        for (int i = 0; i < 1000; ++i) out += "\x65\xcc\x81";
        return out;
    }();
    return s;
}

inline const std::string& nfc_e_acute_1k() {
    static const std::string s = []() {
        std::string out;
        out.reserve(2000);
        for (int i = 0; i < 1000; ++i) out += "\xc3\xa9";
        return out;
    }();
    return s;
}

inline const std::string& eszett_100() {
    static const std::string s = []() {
        std::string out;
        out.reserve(200);
        for (int i = 0; i < 100; ++i) out += "\xc3\x9f";
        return out;
    }();
    return s;
}

inline const std::string& latin1_1k() {
    static const std::string s = []() {
        std::string out;
        out.reserve(1000);
        for (int i = 0; i < 1000; ++i) out += static_cast<char>(i % 256);
        return out;
    }();
    return s;
}

inline const std::wstring& wide_ascii_1k() {
    static const std::wstring s(1000, L'a');
    return s;
}

inline const std::wstring& wide_cjk_1k() {
    static const std::wstring s(1000, L'\x4e2d');
    return s;
}

inline const std::wstring& wide_emoji_100() {
    static const std::wstring s = []() {
        std::wstring out;
        out.reserve(200);
        for (int i = 0; i < 100; ++i) {
            out += L'\xD83D';
            out += L'\xDE00';
        }
        return out;
    }();
    return s;
}

} // namespace texere_bench::inputs
