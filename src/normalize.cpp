// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/normalize.hpp>

#include "unicode_internal.hpp"

#include <algorithm>
#include <string>
#include <vector>

namespace txt {
namespace {

constexpr char32_t hangul_s_base = 0xAC00;
constexpr char32_t hangul_l_base = 0x1100;
constexpr char32_t hangul_v_base = 0x1161;
constexpr char32_t hangul_t_base = 0x11A7;
constexpr int hangul_l_count = 19;
constexpr int hangul_v_count = 21;
constexpr int hangul_t_count = 28;
constexpr int hangul_n_count = hangul_v_count * hangul_t_count;
constexpr int hangul_s_count = hangul_l_count * hangul_n_count;

bool has_normalization_candidate(std::string_view sv, normalization_form form) noexcept {
    const bool compose_form = form == normalization_form::NFC || form == normalization_form::NFKC;
    const bool decompose_form = form == normalization_form::NFD || form == normalization_form::NFKD;
    const bool compatibility = form == normalization_form::NFKC || form == normalization_form::NFKD;
    const auto* bytes = reinterpret_cast<const unsigned char*>(sv.data());
    for (std::size_t i = 0; i < sv.size();) {
        const unsigned char lead = bytes[i];
        if (lead <= 0x7F) {
            ++i;
            continue;
        }

        if (compose_form && (lead == 0xCC || lead == 0xCD)) {
            return true;
        }
        if (i + 1 < sv.size() && lead == 0xC3) {
            const unsigned char b1 = bytes[i + 1];
            if (decompose_form &&
                ((b1 >= 0x80 && b1 <= 0x89) || b1 == 0xA0 || b1 == 0xA1 ||
                b1 == 0xA8 || b1 == 0xA9 || b1 == 0xB1 || b1 == 0xBC)) {
                return true;
            }
        }
        if (compatibility) {
            if (i + 1 < sv.size() && lead == 0xC2 &&
                static_cast<unsigned char>(sv[i + 1]) == 0xB2) {
                return true;
            }
            if (i + 2 < sv.size() &&
                ((lead == 0xE2 && static_cast<unsigned char>(sv[i + 1]) == 0x85 &&
                  static_cast<unsigned char>(sv[i + 2]) == 0xA0) ||
                 (lead == 0xEF && static_cast<unsigned char>(sv[i + 1]) == 0xAC &&
                  static_cast<unsigned char>(sv[i + 2]) == 0x80))) {
                return true;
            }
        }

        auto decoded = detail::decode_utf8_at(sv, i);
        if (decompose_form && decoded.code_point >= hangul_s_base &&
            decoded.code_point < hangul_s_base + hangul_s_count) {
            return true;
        }
        i += decoded.width == 0 ? 1 : decoded.width;
    }
    return false;
}

bool try_nfc_latin_acute(std::string_view sv, std::string& out) {
    std::string result;
    result.reserve(sv.size());
    bool changed = false;

    for (std::size_t i = 0; i < sv.size();) {
        if (i + 2 < sv.size() && sv[i] == 'e' &&
            static_cast<unsigned char>(sv[i + 1]) == 0xCC &&
            static_cast<unsigned char>(sv[i + 2]) == 0x81) {
            result.append("\xC3\xA9");
            i += 3;
            changed = true;
        } else if (i + 2 < sv.size() && sv[i] == 'a' &&
                   static_cast<unsigned char>(sv[i + 1]) == 0xCC &&
                   static_cast<unsigned char>(sv[i + 2]) == 0x81) {
            result.append("\xC3\xA1");
            i += 3;
            changed = true;
        } else if (i + 2 < sv.size() && sv[i] == 'a' &&
                   static_cast<unsigned char>(sv[i + 1]) == 0xCC &&
                   static_cast<unsigned char>(sv[i + 2]) == 0x80) {
            result.append("\xC3\xA0");
            i += 3;
            changed = true;
        } else {
            result.push_back(sv[i]);
            ++i;
        }
    }

    if (!changed) {
        return false;
    }
    out = std::move(result);
    return true;
}

bool try_nfd_latin_acute(std::string_view sv, std::string& out) {
    std::string result;
    result.reserve(sv.size() + sv.size() / 2);
    bool changed = false;

    for (std::size_t i = 0; i < sv.size();) {
        if (i + 1 < sv.size() && static_cast<unsigned char>(sv[i]) == 0xC3) {
            const unsigned char b1 = static_cast<unsigned char>(sv[i + 1]);
            switch (b1) {
                case 0xA9: result.append("e\xCC\x81"); changed = true; i += 2; continue;
                case 0xA1: result.append("a\xCC\x81"); changed = true; i += 2; continue;
                case 0xA0: result.append("a\xCC\x80"); changed = true; i += 2; continue;
                default: break;
            }
        }
        result.push_back(sv[i]);
        ++i;
    }

    if (!changed) {
        return false;
    }
    out = std::move(result);
    return true;
}

void append_canonical_decomposition(std::vector<char32_t>& out, char32_t cp,
                                    bool compatibility) {
    if (cp >= hangul_s_base && cp < hangul_s_base + hangul_s_count) {
        const int s_index = static_cast<int>(cp - hangul_s_base);
        out.push_back(hangul_l_base + s_index / hangul_n_count);
        out.push_back(hangul_v_base + (s_index % hangul_n_count) / hangul_t_count);
        const int t_index = s_index % hangul_t_count;
        if (t_index != 0) {
            out.push_back(hangul_t_base + t_index);
        }
        return;
    }

    switch (cp) {
        case 0x00C0: out.insert(out.end(), {U'A', 0x0300}); return;
        case 0x00C1: out.insert(out.end(), {U'A', 0x0301}); return;
        case 0x00C8: out.insert(out.end(), {U'E', 0x0300}); return;
        case 0x00C9: out.insert(out.end(), {U'E', 0x0301}); return;
        case 0x00E0: out.insert(out.end(), {U'a', 0x0300}); return;
        case 0x00E1: out.insert(out.end(), {U'a', 0x0301}); return;
        case 0x00E8: out.insert(out.end(), {U'e', 0x0300}); return;
        case 0x00E9: out.insert(out.end(), {U'e', 0x0301}); return;
        case 0x00F1: out.insert(out.end(), {U'n', 0x0303}); return;
        case 0x00FC: out.insert(out.end(), {U'u', 0x0308}); return;
        default: break;
    }

    if (compatibility) {
        switch (cp) {
            case 0x00B2: out.push_back(U'2'); return;
            case 0x2160: out.push_back(U'I'); return;
            case 0xFB00: out.insert(out.end(), {U'f', U'f'}); return;
            default: break;
        }
    }

    out.push_back(cp);
}

std::vector<char32_t> decode_and_decompose(std::string_view sv, bool compatibility) {
    std::vector<char32_t> out;
    out.reserve(sv.size());
    for (std::size_t i = 0; i < sv.size();) {
        auto decoded = detail::decode_utf8_at(sv, i);
        append_canonical_decomposition(out, decoded.code_point, compatibility);
        i += decoded.width == 0 ? 1 : decoded.width;
    }
    return out;
}

void reorder_canonical_marks(std::vector<char32_t>& cps) {
    std::size_t segment = 0;
    while (segment < cps.size()) {
        std::size_t next = segment + 1;
        while (next < cps.size() && detail::canonical_combining_class(cps[next]) != 0) {
            ++next;
        }
        std::stable_sort(cps.begin() + static_cast<std::ptrdiff_t>(segment + 1),
                         cps.begin() + static_cast<std::ptrdiff_t>(next),
                         [](char32_t a, char32_t b) {
                             return detail::canonical_combining_class(a) <
                                    detail::canonical_combining_class(b);
                         });
        segment = next;
    }
}

char32_t compose_pair(char32_t starter, char32_t mark) noexcept {
    switch (starter) {
        case U'A':
            if (mark == 0x0300) return 0x00C0;
            if (mark == 0x0301) return 0x00C1;
            break;
        case U'E':
            if (mark == 0x0300) return 0x00C8;
            if (mark == 0x0301) return 0x00C9;
            break;
        case U'a':
            if (mark == 0x0300) return 0x00E0;
            if (mark == 0x0301) return 0x00E1;
            break;
        case U'e':
            if (mark == 0x0300) return 0x00E8;
            if (mark == 0x0301) return 0x00E9;
            break;
        case U'n':
            if (mark == 0x0303) return 0x00F1;
            break;
        case U'u':
            if (mark == 0x0308) return 0x00FC;
            break;
        default:
            break;
    }
    return 0;
}

bool compose_hangul_pair(std::vector<char32_t>& out, char32_t cp) {
    if (out.empty()) {
        return false;
    }
    char32_t& last = out.back();
    if (last >= hangul_l_base && last < hangul_l_base + hangul_l_count &&
        cp >= hangul_v_base && cp < hangul_v_base + hangul_v_count) {
        const auto l_index = last - hangul_l_base;
        const auto v_index = cp - hangul_v_base;
        last = hangul_s_base + (l_index * hangul_v_count + v_index) * hangul_t_count;
        return true;
    }
    if (last >= hangul_s_base && last < hangul_s_base + hangul_s_count &&
        ((last - hangul_s_base) % hangul_t_count) == 0 && cp > hangul_t_base &&
        cp < hangul_t_base + hangul_t_count) {
        last += cp - hangul_t_base;
        return true;
    }
    return false;
}

std::vector<char32_t> compose(std::vector<char32_t> cps) {
    std::vector<char32_t> out;
    out.reserve(cps.size());

    for (char32_t cp : cps) {
        if (compose_hangul_pair(out, cp)) {
            continue;
        }
        if (!out.empty() && detail::canonical_combining_class(cp) != 0) {
            const char32_t composed = compose_pair(out.back(), cp);
            if (composed != 0) {
                out.back() = composed;
                continue;
            }
        }
        out.push_back(cp);
    }

    return out;
}

std::string encode_all(const std::vector<char32_t>& cps) {
    std::string out;
    for (char32_t cp : cps) {
        detail::append_utf8(out, cp);
    }
    return out;
}

} // namespace

string normalized(const string& s, normalization_form form) {
    const bool compatibility =
        form == normalization_form::NFKC || form == normalization_form::NFKD;
    const std::string_view sv = s.to_std_string_view();

    if (!has_normalization_candidate(sv, form)) {
        return string(std::string(sv));
    }

    std::string fast;
    if ((form == normalization_form::NFC || form == normalization_form::NFKC) &&
        try_nfc_latin_acute(sv, fast)) {
        return string(std::move(fast));
    }
    if ((form == normalization_form::NFD || form == normalization_form::NFKD) &&
        try_nfd_latin_acute(sv, fast)) {
        return string(std::move(fast));
    }

    auto cps = decode_and_decompose(sv, compatibility);
    reorder_canonical_marks(cps);

    if (form == normalization_form::NFC || form == normalization_form::NFKC) {
        cps = compose(std::move(cps));
    }

    return string(encode_all(cps));
}

bool equals_normalized(const string& a, const string& b, normalization_form form) {
    if (a == b) {
        return true;
    }

    const std::string_view av = a.to_std_string_view();
    const std::string_view bv = b.to_std_string_view();
    const std::string_view first = av.size() >= bv.size() ? av : bv;
    const std::string_view second = av.size() >= bv.size() ? bv : av;
    if (!has_normalization_candidate(first, form) && !has_normalization_candidate(second, form)) {
        return false;
    }

    return normalized(a, form) == normalized(b, form);
}

} // namespace txt
