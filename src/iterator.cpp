// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/iterator.hpp>

#ifdef TEXERE_HAS_UNIALGO
#include <uni_algo/ranges_grapheme.h>
#endif

namespace txt {

void grapheme_iterator::find_cluster_end() noexcept {
    if (ptr_ == end_) {
        cluster_end_ = end_;
        return;
    }

#ifdef TEXERE_HAS_UNIALGO
    std::string_view sv(ptr_, end_ - ptr_);
    auto view = una::ranges::grapheme::utf8_view(sv);
    auto it = view.begin();
    if (it != view.end()) {
        cluster_end_ = ptr_ + std::distance((*it).begin(), (*it).end());
    } else {
        cluster_end_ = end_;
    }
#else
    // Fallback heuristic if uni_algo is missing
    const unsigned char* p = reinterpret_cast<const unsigned char*>(ptr_);
    const unsigned char* e = reinterpret_cast<const unsigned char*>(end_);
    
    auto advance_cp = [](const unsigned char* curr, const unsigned char* end_ptr) -> const unsigned char* {
        if (curr >= end_ptr) return end_ptr;
        unsigned char c = *curr;
        if (c <= 0x7F) return curr + 1;
        if ((c & 0xE0) == 0xC0) return curr + 2;
        if ((c & 0xF0) == 0xE0) return curr + 3;
        if ((c & 0xF8) == 0xF0) return curr + 4;
        return curr + 1;
    };

    p = advance_cp(p, e);
    while (p < e) {
        if (e - p >= 3 && p[0] == 0xE2 && p[1] == 0x80 && p[2] == 0x8D) {
            p += 3;
            p = advance_cp(p, e);
            continue;
        }
        if (e - p >= 2 && ((p[0] == 0xCC) || (p[0] == 0xCD && p[1] <= 0xAF))) {
            p += 2;
            continue;
        }
        break;
    }
    cluster_end_ = reinterpret_cast<const char*>(p);
    if (cluster_end_ > end_) cluster_end_ = end_;
#endif
}

} // namespace txt
