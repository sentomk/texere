// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/string.hpp>
#include <texere/string_view.hpp>

#ifdef TEXERE_HAS_SIMDUTF
#include <simdutf.h>
#endif

namespace txt {
namespace detail {

expected<std::string, error> validate_utf8(std::string_view sv) {
#ifdef TEXERE_HAS_SIMDUTF
    simdutf::result r = simdutf::validate_utf8_with_errors(sv.data(), sv.size());
    if (r.error == simdutf::error_code::SUCCESS) {
        return std::string(sv);
    }
    // Map simdutf errors to txt::errc
    errc code = errc::invalid_utf8;
    if (r.error == simdutf::error_code::TOO_SHORT) code = errc::truncated_input;
    return unexpected<error>(error{code, r.count});
#else
    const unsigned char* bytes = reinterpret_cast<const unsigned char*>(sv.data());
    std::size_t len = sv.size();
    std::size_t i = 0;

    while (i < len) {
        unsigned char c = bytes[i];
        std::size_t error_pos = i;

        if (c <= 0x7F) {
            i += 1;
        } else if ((c & 0xE0) == 0xC0) {
            if (c < 0xC2) { return unexpected<error>({errc::invalid_utf8, error_pos}); } 
            if (i + 1 >= len) { return unexpected<error>({errc::truncated_input, error_pos}); }
            if ((bytes[i+1] & 0xC0) != 0x80) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
            i += 2;
        } else if ((c & 0xF0) == 0xE0) {
            if (i + 2 >= len) { return unexpected<error>({errc::truncated_input, error_pos}); }
            if (c == 0xE0 && (bytes[i+1] < 0xA0 || bytes[i+1] > 0xBF)) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
            if (c == 0xED && (bytes[i+1] < 0x80 || bytes[i+1] > 0x9F)) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
            if ((bytes[i+1] & 0xC0) != 0x80 || (bytes[i+2] & 0xC0) != 0x80) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
            i += 3;
        } else if ((c & 0xF8) == 0xF0) {
            if (c > 0xF4) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
            if (i + 3 >= len) { return unexpected<error>({errc::truncated_input, error_pos}); }
            if (c == 0xF0 && (bytes[i+1] < 0x90 || bytes[i+1] > 0xBF)) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
            if (c == 0xF4 && (bytes[i+1] < 0x80 || bytes[i+1] > 0x8F)) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
            if ((bytes[i+1] & 0xC0) != 0x80 || (bytes[i+2] & 0xC0) != 0x80 || (bytes[i+3] & 0xC0) != 0x80) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            i += 4;
        } else {
            return unexpected<error>({errc::invalid_utf8, error_pos});
        }
    }
    return std::string(sv);
#endif
}

std::string make_lossy_utf8(std::string_view sv) {
    std::string res;
    res.reserve(sv.size() + sv.size() / 4); // rough guess
    const unsigned char* bytes = reinterpret_cast<const unsigned char*>(sv.data());
    std::size_t len = sv.size();
    std::size_t i = 0;

    while (i < len) {
        auto valid_res = validate_utf8(std::string_view(reinterpret_cast<const char*>(bytes + i), len - i));
        if (valid_res) {
            res.append(reinterpret_cast<const char*>(bytes + i), len - i);
            break;
        } else {
            std::size_t error_pos = valid_res.error().byte_position;
            res.append(reinterpret_cast<const char*>(bytes + i), error_pos);
            res.append("\xEF\xBF\xBD"); // U+FFFD
            i += error_pos + 1;
            // Skip continuation bytes
            while (i < len && (bytes[i] & 0xC0) == 0x80) {
                i++;
            }
        }
    }
    return res;
}

} // namespace detail

string string::from_utf8_lossy(std::string_view sv) {
    auto validated = detail::validate_utf8(sv);
    if (validated.has_value()) {
        return string(std::move(validated.value()));
    }
    return string(detail::make_lossy_utf8(sv));
}

expected<string, error> string::from_utf8(std::string_view sv) {
    auto validated = detail::validate_utf8(sv);
    if (validated.has_value()) {
        return string(std::move(validated.value()));
    }
    return unexpected<error>(validated.error());
}

std::size_t string::length() const noexcept {
    std::size_t count = 0;
    for (auto it = graphemes().begin(); it != graphemes().end(); ++it) {
        ++count;
    }
    return count;
}

grapheme_ref string::grapheme_at(std::size_t n) const noexcept {
    auto it = graphemes().begin();
    auto end = graphemes().end();
    for (std::size_t i = 0; i < n && it != end; ++i) {
        ++it;
    }
    if (it != end) {
        return *it;
    }
    return grapheme_ref(std::string_view(), Index(storage_.size()));
}


// ---------------------------------------------------------------------------
// Mutation helpers
// ---------------------------------------------------------------------------

namespace detail {

// True when `off` may be used as a grapheme-cluster boundary of `s`:
// either the one-past-end offset, or a byte that is not a UTF-8
// continuation byte (0b10xxxxxx).
bool is_grapheme_start(std::string_view s, std::size_t off) noexcept {
    if (off == s.size()) return true;
    if (off > s.size()) return false;
    return (static_cast<unsigned char>(s[off]) & 0xC0) != 0x80;
}

// Byte offset of the cluster that begins `grapheme_count` clusters after the
// cluster starting at `begin_off` (clamped at the end of `s`).
//
// @complexity O(n) - scans clusters from the start of the string.
std::size_t offset_after_graphemes(std::string_view s, std::size_t begin_off,
                                   std::size_t grapheme_count) noexcept {
    std::size_t end_off = begin_off;
    grapheme_range range(s.data(), s.size());
    for (auto it = range.begin(); it != range.end(); ++it) {
        const grapheme_ref g = *it;
        const std::size_t start = g.index().byte_offset();
        if (start < begin_off) continue;
        if (grapheme_count == 0) {
            end_off = start;
            break;
        }
        --grapheme_count;
        end_off = start + g.byte_size();
    }
    return end_off;
}

} // namespace detail

// ---------------------------------------------------------------------------
// Concatenation & append
// ---------------------------------------------------------------------------

string& string::operator+=(const string& rhs) {
    storage_ += rhs.storage_;
    return *this;
}

string& string::append(string_view sv) {
    const std::string_view bytes = sv.to_std_string_view();
    const char* own_begin = storage_.data();
    const char* own_end   = own_begin + storage_.size();
    if (bytes.data() >= own_begin && bytes.data() < own_end) {
        // sv aliases this string's storage; appending may reallocate and
        // invalidate the view, so copy first.
        std::string copy(bytes);
        storage_ += copy;
    } else {
        storage_ += bytes;
    }
    return *this;
}

string operator+(string lhs, const string& rhs) {
    lhs.storage_.reserve(lhs.storage_.size() + rhs.storage_.size());
    lhs.storage_ += rhs.storage_;
    return lhs;
}

// ---------------------------------------------------------------------------
// Positional mutation
// ---------------------------------------------------------------------------

expected<void, error> string::insert(Index at, string_view sv) {
    const std::size_t off = at.byte_offset();
    if (off > storage_.size()) {
        return unexpected<error>(error{errc::invalid_index, storage_.size()});
    }
    if (!detail::is_grapheme_start(storage_, off)) {
        return unexpected<error>(error{errc::not_grapheme_boundary, off});
    }
    storage_.insert(off, sv.to_std_string_view());
    return {};
}

expected<void, error> string::erase(Index begin, std::size_t grapheme_count) {
    const std::size_t off = begin.byte_offset();
    if (off > storage_.size()) {
        return unexpected<error>(error{errc::invalid_index, storage_.size()});
    }
    if (!detail::is_grapheme_start(storage_, off)) {
        return unexpected<error>(error{errc::not_grapheme_boundary, off});
    }
    const std::size_t end_off =
        detail::offset_after_graphemes(storage_, off, grapheme_count);
    storage_.erase(off, end_off - off);
    return {};
}

expected<void, error> string::replace(Index begin, std::size_t grapheme_count,
                                      string_view replacement) {
    const std::size_t off = begin.byte_offset();
    if (off > storage_.size()) {
        return unexpected<error>(error{errc::invalid_index, storage_.size()});
    }
    if (!detail::is_grapheme_start(storage_, off)) {
        return unexpected<error>(error{errc::not_grapheme_boundary, off});
    }
    const std::size_t end_off =
        detail::offset_after_graphemes(storage_, off, grapheme_count);
    const std::string_view bytes = replacement.to_std_string_view();
    const char* own_begin = storage_.data();
    const char* own_end   = own_begin + storage_.size();
    if (bytes.data() >= own_begin && bytes.data() < own_end) {
        // Replacement aliases this string's storage; std::string::replace may
        // reallocate, so go through a copy.
        std::string copy(bytes);
        storage_.replace(off, end_off - off, copy);
    } else {
        storage_.replace(off, end_off - off, bytes);
    }
    return {};
}

// ---------------------------------------------------------------------------
// Substring & search
// ---------------------------------------------------------------------------

string string::substr(Index begin, std::size_t count) const {
    const std::size_t off = begin.byte_offset();
    if (off >= storage_.size() || count == 0) {
        return string();
    }
    const std::size_t end_off = detail::offset_after_graphemes(storage_, off, count);
    return string(std::string(storage_, off, end_off - off));
}

Index string::find(string_view needle) const noexcept {
    const std::size_t pos = std::string_view(storage_).find(needle.to_std_string_view());
    if (pos == std::string_view::npos) {
        return Index(storage_.size());
    }
    return Index(pos);
}

Index string_view::find(string_view needle) const noexcept {
    const std::size_t pos = sv_.find(needle.sv_);
    if (pos == std::string_view::npos) {
        return Index(sv_.size());
    }
    return Index(pos);
}

string_view string_view::substr(Index begin, std::size_t count) const noexcept {
    const std::size_t off = begin.byte_offset();
    if (off >= sv_.size() || count == 0) {
        return string_view();
    }
    const std::size_t end_off = detail::offset_after_graphemes(sv_, off, count);
    return string_view(sv_.substr(off, end_off - off));
}

} // namespace txt
