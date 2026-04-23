#pragma once

// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: iterator.hpp
// Description: Core implementation and declarations for texere.

#include "grapheme.hpp"

#include <cstddef>
#include <cstdint>
#include <iterator>
#include <string_view>

namespace txt {

// Forward declarations
class string;
class string_view;

// ===========================================================================
// byte_iterator  –  iterates over raw UTF-8 bytes
// ===========================================================================

// Input iterator over the raw UTF-8 bytes of a txt::string / string_view.
class byte_iterator {
public:
    using iterator_category = std::bidirectional_iterator_tag;
    using value_type        = std::uint8_t;
    using difference_type   = std::ptrdiff_t;
    using pointer           = const std::uint8_t*;
    using reference         = std::uint8_t;

    byte_iterator() noexcept = default;
    explicit byte_iterator(const char* p) noexcept
        : ptr_(reinterpret_cast<const std::uint8_t*>(p)) {}

    reference  operator*()  const noexcept { return *ptr_; }
    pointer    operator->() const noexcept { return ptr_; }

    byte_iterator& operator++()    noexcept { ++ptr_; return *this; }
    byte_iterator  operator++(int) noexcept { auto t = *this; ++*this; return t; }
    byte_iterator& operator--()    noexcept { --ptr_; return *this; }
    byte_iterator  operator--(int) noexcept { auto t = *this; --*this; return t; }

    bool operator==(const byte_iterator& o) const noexcept { return ptr_ == o.ptr_; }
    bool operator!=(const byte_iterator& o) const noexcept { return ptr_ != o.ptr_; }

private:
    const std::uint8_t* ptr_{nullptr};
};

// Range adaptor that provides begin/end byte_iterators.
class byte_range {
public:
    byte_range(const char* data, std::size_t size) noexcept
        : begin_(data), end_(data + size) {}

    [[nodiscard]] byte_iterator begin() const noexcept { return begin_; }
    [[nodiscard]] byte_iterator end()   const noexcept { return end_;   }

private:
    byte_iterator begin_;
    byte_iterator end_;
};

// ===========================================================================
// codepoint_iterator  –  iterates over Unicode scalar values (code points)
// ===========================================================================

// Forward iterator over Unicode code points (char32_t) decoded from UTF-8.
//
// Ill-formed sequences yield U+FFFD (replacement character) per the
// "best-fit" substitution strategy; use from_utf8() if you need strict
// validation instead.
class codepoint_iterator {
public:
    using iterator_category = std::forward_iterator_tag;
    using value_type        = char32_t;
    using difference_type   = std::ptrdiff_t;
    using pointer           = const char32_t*;
    using reference         = char32_t;

    codepoint_iterator() noexcept = default;
    explicit codepoint_iterator(const char* p, const char* end) noexcept
        : ptr_(p), end_(end) { decode(); }

    reference operator*()  const noexcept { return current_; }

    codepoint_iterator& operator++() noexcept {
        ptr_ += advance_;
        decode();
        return *this;
    }
    codepoint_iterator operator++(int) noexcept {
        auto t = *this; ++*this; return t;
    }

    bool operator==(const codepoint_iterator& o) const noexcept { return ptr_ == o.ptr_; }
    bool operator!=(const codepoint_iterator& o) const noexcept { return ptr_ != o.ptr_; }

    // The byte Index of the current code point's first byte.
    [[nodiscard]] Index index() const noexcept {
        return Index(static_cast<std::size_t>(ptr_ - base_));
    }

    void set_base(const char* base) noexcept { base_ = base; }

private:
    void decode() noexcept {
        if (ptr_ == end_) {
            advance_ = 0;
            current_ = 0;
            return;
        }
        const unsigned char* p = reinterpret_cast<const unsigned char*>(ptr_);
        const unsigned char* e = reinterpret_cast<const unsigned char*>(end_);
        unsigned char c = p[0];
        if (c <= 0x7F) {
            current_ = c;
            advance_ = 1;
        } else if ((c & 0xE0) == 0xC0 && e - p >= 2) {
            current_ = ((c & 0x1F) << 6) | (p[1] & 0x3F);
            advance_ = 2;
        } else if ((c & 0xF0) == 0xE0 && e - p >= 3) {
            current_ = ((c & 0x0F) << 12) | ((p[1] & 0x3F) << 6) | (p[2] & 0x3F);
            advance_ = 3;
        } else if ((c & 0xF8) == 0xF0 && e - p >= 4) {
            current_ = ((c & 0x07) << 18) | ((p[1] & 0x3F) << 12) | ((p[2] & 0x3F) << 6) | (p[3] & 0x3F);
            advance_ = 4;
        } else {
            current_ = 0xFFFD;
            advance_ = 1;
        }
    }

    const char* ptr_{nullptr};
    const char* end_{nullptr};
    const char* base_{nullptr};
    char32_t    current_{0};
    int         advance_{0};
};

// Range adaptor for code-point iteration.
class codepoint_range {
public:
    codepoint_range(const char* data, std::size_t size) noexcept
        : data_(data), size_(size) {}

    [[nodiscard]] codepoint_iterator begin() const noexcept {
        auto it = codepoint_iterator(data_, data_ + size_);
        it.set_base(data_);
        return it;
    }
    [[nodiscard]] codepoint_iterator end() const noexcept {
        auto it = codepoint_iterator(data_ + size_, data_ + size_);
        it.set_base(data_);
        return it;
    }

private:
    const char* data_{nullptr};
    std::size_t size_{0};
};

// ===========================================================================
// grapheme_iterator  –  iterates over Unicode grapheme clusters
// ===========================================================================

// Forward iterator over Unicode grapheme clusters.
//
// Each dereference returns a grapheme_ref – a lightweight, non-owning view
// of the UTF-8 bytes that form a single user-perceived character.
//
// Cluster boundaries are determined according to Unicode Standard Annex #29
// (Unicode 15.1).
class grapheme_iterator {
public:
    using iterator_category = std::forward_iterator_tag;
    using value_type        = grapheme_ref;
    using difference_type   = std::ptrdiff_t;
    using pointer           = const grapheme_ref*;
    using reference         = grapheme_ref;

    grapheme_iterator() noexcept = default;
    explicit grapheme_iterator(const char* p, const char* end, const char* base) noexcept
        : ptr_(p), end_(end), base_(base) { find_cluster_end(); }

    reference operator*() const noexcept {
        return grapheme_ref(
            std::string_view(ptr_, static_cast<std::size_t>(cluster_end_ - ptr_)),
            Index(static_cast<std::size_t>(ptr_ - base_)));
    }

    grapheme_iterator& operator++() noexcept {
        ptr_ = cluster_end_;
        find_cluster_end();
        return *this;
    }
    grapheme_iterator operator++(int) noexcept {
        auto t = *this; ++*this; return t;
    }

    bool operator==(const grapheme_iterator& o) const noexcept { return ptr_ == o.ptr_; }
    bool operator!=(const grapheme_iterator& o) const noexcept { return ptr_ != o.ptr_; }

private:
    // Advance cluster_end_ past the current grapheme cluster.
    // TODO: implement UAX #29 grapheme cluster boundary algorithm.
    void find_cluster_end() noexcept;

    const char* ptr_{nullptr};
    const char* end_{nullptr};
    const char* base_{nullptr};
    const char* cluster_end_{nullptr};
};

// Range adaptor for grapheme-cluster iteration.
class grapheme_range {
public:
    grapheme_range(const char* data, std::size_t size) noexcept
        : data_(data), size_(size) {}

    [[nodiscard]] grapheme_iterator begin() const noexcept {
        return grapheme_iterator(data_, data_ + size_, data_);
    }
    [[nodiscard]] grapheme_iterator end() const noexcept {
        return grapheme_iterator(data_ + size_, data_ + size_, data_);
    }

private:
    const char* data_{nullptr};
    std::size_t size_{0};
};

} // namespace txt
