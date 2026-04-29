// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/case.hpp>

#include "unicode_internal.hpp"

#include <utility>

namespace txt {
namespace {

enum class case_mode {
    upper,
    lower,
    fold,
};

bool is_word_char(char32_t cp) noexcept {
    return (cp >= U'0' && cp <= U'9') || (cp >= U'A' && cp <= U'Z') ||
           (cp >= U'a' && cp <= U'z') || (cp >= 0x00C0 && cp <= 0x02AF) ||
           (cp >= 0x0370 && cp <= 0x03FF);
}

void append_upper(std::string& out, char32_t cp) {
    if (cp >= U'a' && cp <= U'z') {
        detail::append_utf8(out, cp - 0x20);
        return;
    }
    if (cp == 0x00DF) {
        out.append("SS");
        return;
    }
    if ((cp >= 0x00E0 && cp <= 0x00F6) || (cp >= 0x00F8 && cp <= 0x00FE)) {
        detail::append_utf8(out, cp - 0x20);
        return;
    }
    if (cp == 0x00FF) {
        detail::append_utf8(out, 0x0178);
        return;
    }
    if (cp == 0x0131) {
        out.push_back('I');
        return;
    }
    if (cp >= 0x03B1 && cp <= 0x03C1) {
        detail::append_utf8(out, cp - 0x20);
        return;
    }
    if (cp == 0x03C2 || (cp >= 0x03C3 && cp <= 0x03CB)) {
        detail::append_utf8(out, cp == 0x03C2 ? 0x03A3 : cp - 0x20);
        return;
    }
    detail::append_utf8(out, cp);
}

void append_lower(std::string& out, char32_t cp) {
    if (cp >= U'A' && cp <= U'Z') {
        detail::append_utf8(out, cp + 0x20);
        return;
    }
    if ((cp >= 0x00C0 && cp <= 0x00D6) || (cp >= 0x00D8 && cp <= 0x00DE)) {
        detail::append_utf8(out, cp + 0x20);
        return;
    }
    if (cp == 0x0130) {
        out.push_back('i');
        detail::append_utf8(out, 0x0307);
        return;
    }
    if ((cp >= 0x0391 && cp <= 0x03A1) || (cp >= 0x03A3 && cp <= 0x03AB)) {
        detail::append_utf8(out, cp + 0x20);
        return;
    }
    detail::append_utf8(out, cp);
}

void append_fold(std::string& out, char32_t cp) {
    if (cp == 0x00DF) {
        out.append("ss");
        return;
    }
    if (cp == 0x0130) {
        out.push_back('i');
        detail::append_utf8(out, 0x0307);
        return;
    }
    if (cp == 0x03C2) {
        detail::append_utf8(out, 0x03C3);
        return;
    }
    append_lower(out, cp);
}

void append_mapped(std::string& out, char32_t cp, case_mode mode) {
    switch (mode) {
        case case_mode::upper: append_upper(out, cp); break;
        case case_mode::lower: append_lower(out, cp); break;
        case case_mode::fold: append_fold(out, cp); break;
    }
}

std::pair<bool, std::string> try_map_ascii_case(std::string_view sv, case_mode mode) {
    for (unsigned char c : sv) {
        if (c > 0x7F) {
            return {false, std::string()};
        }
    }

    std::string out(sv);
    char* data = out.empty() ? nullptr : &out[0];
    for (std::size_t i = 0; i < out.size(); ++i) {
        const auto c = static_cast<unsigned char>(data[i]);
        if ((mode == case_mode::upper) && c >= 'a' && c <= 'z') {
            data[i] = static_cast<char>(c - 0x20);
        } else if ((mode == case_mode::lower || mode == case_mode::fold) &&
                   c >= 'A' && c <= 'Z') {
            data[i] = static_cast<char>(c + 0x20);
        }
    }
    return {true, std::move(out)};
}

std::size_t utf8_width_from_lead(unsigned char c) noexcept {
    if (c <= 0x7F) return 1;
    if ((c & 0xE0) == 0xC0) return 2;
    if ((c & 0xF0) == 0xE0) return 3;
    if ((c & 0xF8) == 0xF0) return 4;
    return 1;
}

bool may_have_supported_case_mapping(unsigned char lead) noexcept {
    return lead == 0xC3 || lead == 0xC4 || lead == 0xCE || lead == 0xCF;
}

bool mapping_changes(char32_t cp, case_mode mode) noexcept {
    switch (mode) {
        case case_mode::upper:
            return (cp >= U'a' && cp <= U'z') || cp == 0x00DF ||
                   ((cp >= 0x00E0 && cp <= 0x00F6) || (cp >= 0x00F8 && cp <= 0x00FF)) ||
                   cp == 0x0131 || (cp >= 0x03B1 && cp <= 0x03C1) ||
                   (cp >= 0x03C2 && cp <= 0x03CB);
        case case_mode::lower:
            return (cp >= U'A' && cp <= U'Z') ||
                   ((cp >= 0x00C0 && cp <= 0x00D6) || (cp >= 0x00D8 && cp <= 0x00DE)) ||
                   cp == 0x0130 || (cp >= 0x0391 && cp <= 0x03A1) ||
                   (cp >= 0x03A3 && cp <= 0x03AB);
        case case_mode::fold:
            return mapping_changes(cp, case_mode::lower) || cp == 0x00DF || cp == 0x03C2;
    }
    return false;
}

std::string map_case(std::string_view sv, case_mode mode) {
    auto ascii = try_map_ascii_case(sv, mode);
    if (ascii.first) {
        return std::move(ascii.second);
    }

    std::string out;
    bool changed = false;

    for (std::size_t i = 0; i < sv.size();) {
        const auto lead = static_cast<unsigned char>(sv[i]);
        if (lead <= 0x7F) {
            const bool upper_change = mode == case_mode::upper && lead >= 'a' && lead <= 'z';
            const bool lower_change = (mode == case_mode::lower || mode == case_mode::fold) &&
                                      lead >= 'A' && lead <= 'Z';
            if (upper_change || lower_change) {
                if (!changed) {
                    out.reserve(sv.size());
                    out.append(sv.data(), i);
                    changed = true;
                }
                out.push_back(static_cast<char>(upper_change ? lead - 0x20 : lead + 0x20));
            } else if (changed) {
                out.push_back(static_cast<char>(lead));
            }
            ++i;
            continue;
        }

        if (!may_have_supported_case_mapping(lead)) {
            const std::size_t width = utf8_width_from_lead(lead);
            if (changed) {
                out.append(sv.data() + i, width);
            }
            i += width;
            continue;
        }

        if (i + 1 < sv.size() && lead == 0xC3 &&
            static_cast<unsigned char>(sv[i + 1]) == 0x9F &&
            (mode == case_mode::upper || mode == case_mode::fold)) {
            if (!changed) {
                out.reserve(sv.size());
                out.append(sv.data(), i);
                changed = true;
            }
            out.append(mode == case_mode::upper ? "SS" : "ss");
            i += 2;
            continue;
        }

        auto decoded = detail::decode_utf8_at(sv, i);
        const std::size_t width = decoded.width == 0 ? 1 : decoded.width;
        if (mapping_changes(decoded.code_point, mode)) {
            if (!changed) {
                out.reserve(sv.size());
                out.append(sv.data(), i);
                changed = true;
            }
            append_mapped(out, decoded.code_point, mode);
        } else if (changed) {
            out.append(sv.data() + i, width);
        }
        i += width;
    }

    return changed ? out : std::string(sv);
}

std::pair<bool, std::string> try_title_ascii(std::string_view sv) {
    for (unsigned char c : sv) {
        if (c > 0x7F) {
            return {false, std::string()};
        }
    }

    std::string out(sv);
    char* data = out.empty() ? nullptr : &out[0];
    bool at_word_start = true;

    for (std::size_t i = 0; i < out.size(); ++i) {
        const auto c = static_cast<unsigned char>(data[i]);
        const bool word = (c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z') ||
                          (c >= 'a' && c <= 'z');
        if (word) {
            if (at_word_start && c >= 'a' && c <= 'z') {
                data[i] = static_cast<char>(c - 0x20);
            } else if (!at_word_start && c >= 'A' && c <= 'Z') {
                data[i] = static_cast<char>(c + 0x20);
            }
            at_word_start = false;
        } else {
            at_word_start = true;
        }
    }

    return {true, std::move(out)};
}

bool title_mapping_changes(char32_t cp, bool at_word_start) noexcept {
    if (!is_word_char(cp)) {
        return false;
    }
    return mapping_changes(cp, at_word_start ? case_mode::upper : case_mode::lower);
}

} // namespace

string to_upper(const string& s) {
    return string(map_case(s.to_std_string_view(), case_mode::upper));
}

string to_lower(const string& s) {
    return string(map_case(s.to_std_string_view(), case_mode::lower));
}

string to_title(const string& s) {
    const auto sv = s.to_std_string_view();
    auto ascii = try_title_ascii(sv);
    if (ascii.first) {
        return string(std::move(ascii.second));
    }

    std::string out;
    bool at_word_start = true;
    bool changed = false;

    for (std::size_t i = 0; i < sv.size();) {
        auto decoded = detail::decode_utf8_at(sv, i);
        const char32_t cp = decoded.code_point;
        const std::size_t width = decoded.width == 0 ? 1 : decoded.width;
        const bool word = is_word_char(cp);

        if (title_mapping_changes(cp, at_word_start)) {
            if (!changed) {
                out.reserve(sv.size());
                out.append(sv.data(), i);
                changed = true;
            }
            append_mapped(out, cp, at_word_start ? case_mode::upper : case_mode::lower);
            changed = true;
        } else if (changed) {
            out.append(sv.data() + i, width);
        }
        if (word) {
            at_word_start = false;
        } else {
            at_word_start = true;
        }
        i += width;
    }

    return string(changed ? std::move(out) : std::string(sv));
}

string case_fold(const string& s) {
    return string(map_case(s.to_std_string_view(), case_mode::fold));
}

} // namespace txt
