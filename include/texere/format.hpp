// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#pragma once

#include "string.hpp"

#ifdef TEXERE_HAS_FMT
#include <fmt/core.h>

template <>
struct fmt::formatter<txt::string> : fmt::formatter<std::string_view> {
    auto format(const txt::string& s, format_context& ctx) const {
        return formatter<std::string_view>::format(s.to_std_string_view(), ctx);
    }
};

template <>
struct fmt::formatter<txt::grapheme_ref> : fmt::formatter<std::string_view> {
    auto format(const txt::grapheme_ref& g, format_context& ctx) const {
        return formatter<std::string_view>::format(g.utf8(), ctx);
    }
};

#endif
