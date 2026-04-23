// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#pragma once

#include "string.hpp"

#ifdef TEXERE_HAS_FMT
#include <fmt/core.h>
#include <fmt/format.h> // Needed for std::string_view formatter

template <>
struct fmt::formatter<txt::string> : fmt::formatter<std::string_view> {
    template <typename FormatContext>
    auto format(const txt::string& s, FormatContext& ctx) const {
        return fmt::formatter<std::string_view>::format(s.to_std_string_view(), ctx);
    }
};

template <>
struct fmt::formatter<txt::grapheme_ref> : fmt::formatter<std::string_view> {
    template <typename FormatContext>
    auto format(const txt::grapheme_ref& g, FormatContext& ctx) const {
        return fmt::formatter<std::string_view>::format(g.utf8(), ctx);
    }
};

#endif
