// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/iterator.hpp>

#include "unicode_internal.hpp"

namespace txt {

void grapheme_iterator::find_cluster_end() noexcept {
    if (ptr_ == end_) {
        cluster_end_ = end_;
        return;
    }

    const std::string_view sv(ptr_, static_cast<std::size_t>(end_ - ptr_));
    auto first = detail::decode_utf8_at(sv, 0);
    if (first.width == 0) {
        cluster_end_ = end_;
        return;
    }

    std::size_t offset = first.width;
    char32_t previous = first.code_point;
    int regional_indicator_count =
        (previous >= 0x1F1E6 && previous <= 0x1F1FF) ? 1 : 0;

    while (offset < sv.size()) {
        auto current = detail::decode_utf8_at(sv, offset);
        if (current.width == 0) {
            break;
        }

        const char32_t cp = current.code_point;
        bool keep_in_cluster = false;

        if (previous == 0x000D && cp == 0x000A) {
            keep_in_cluster = true;
        } else if (detail::is_control_for_grapheme(previous) ||
                   detail::is_control_for_grapheme(cp)) {
            keep_in_cluster = false;
        } else if (detail::is_combining_mark(cp) || detail::is_variation_selector(cp) ||
                   detail::is_emoji_modifier(cp)) {
            keep_in_cluster = true;
        } else if (cp == 0x200D || previous == 0x200D) {
            keep_in_cluster = true;
        } else if (cp >= 0x1F1E6 && cp <= 0x1F1FF && regional_indicator_count == 1) {
            keep_in_cluster = true;
        }

        if (!keep_in_cluster) {
            break;
        }

        offset += current.width;
        previous = cp;
        if (cp >= 0x1F1E6 && cp <= 0x1F1FF) {
            ++regional_indicator_count;
        } else if (cp != 0x200D && !detail::is_variation_selector(cp) &&
                   !detail::is_combining_mark(cp)) {
            regional_indicator_count = 0;
        }
    }

    cluster_end_ = ptr_ + offset;
}

} // namespace txt
