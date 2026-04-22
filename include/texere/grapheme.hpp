#pragma once

// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: grapheme.hpp
// Description: Core implementation and declarations for texere.

#include <cstddef>
#include <string_view>

namespace txt {

// Opaque byte-offset index into a txt::string.
//
// Users cannot construct an Index directly from an integer; they obtain
// Index values from iterators or grapheme_at(). This prevents the common
// mistake of mixing byte offsets with grapheme counts.
class Index {
public:
    Index() noexcept = default;

    // Byte offset within the underlying UTF-8 storage.
    [[nodiscard]] std::size_t byte_offset() const noexcept { return offset_; }

    bool operator==(const Index& o) const noexcept { return offset_ == o.offset_; }
    bool operator!=(const Index& o) const noexcept { return offset_ != o.offset_; }
    bool operator< (const Index& o) const noexcept { return offset_ < o.offset_; }
    bool operator<=(const Index& o) const noexcept { return offset_ <= o.offset_; }
    bool operator> (const Index& o) const noexcept { return offset_ > o.offset_; }
    bool operator>=(const Index& o) const noexcept { return offset_ >= o.offset_; }

private:
    friend class string;
    friend class string_view;
    friend class grapheme_iterator;
    friend class codepoint_iterator;

    explicit Index(std::size_t offset) noexcept : offset_(offset) {}

    std::size_t offset_{0};
};

// A non-owning view of a single Unicode grapheme cluster.
//
// A grapheme_ref is valid only as long as the originating txt::string (or
// txt::string_view) is alive and unmodified.  It stores the raw UTF-8 bytes
// of the cluster and the Index of its first byte.
class grapheme_ref {
public:
    grapheme_ref() = delete;

    // The raw UTF-8 bytes of this grapheme cluster.
    [[nodiscard]] std::string_view utf8() const noexcept { return bytes_; }

    // Opaque index of this cluster within the parent string.
    [[nodiscard]] Index index() const noexcept { return index_; }

    // Number of UTF-8 bytes in this grapheme cluster.
    [[nodiscard]] std::size_t byte_size() const noexcept { return bytes_.size(); }

    bool operator==(const grapheme_ref& o) const noexcept { return bytes_ == o.bytes_; }
    bool operator!=(const grapheme_ref& o) const noexcept { return bytes_ != o.bytes_; }

private:
    friend class grapheme_iterator;
    friend class string;
    friend class string_view;

    grapheme_ref(std::string_view bytes, Index index) noexcept
        : bytes_(bytes), index_(index) {}

    std::string_view bytes_;
    Index            index_;
};

} // namespace txt
