#pragma once

#include "expected.hpp"
#include "grapheme.hpp"
#include "iterator.hpp"

#include <cstddef>
#include <cstdint>
#include <string_view>

namespace txt {

class string; // forward declaration

// ===========================================================================
// txt::string_view
// ===========================================================================

/// @brief Non-owning, read-only view of a UTF-8 encoded string.
///
/// Analogous to std::string_view but grapheme-cluster aware.  Like
/// std::string_view, it does **not** own the underlying bytes – the caller
/// is responsible for ensuring the referenced storage outlives this view.
///
/// txt::string_view can be constructed from:
/// - A txt::string (implicit, safe)
/// - A std::string_view (explicit, assumed valid UTF-8)
/// - A raw (const char*, size) pair (explicit, assumed valid UTF-8)
class string_view {
public:
    // -----------------------------------------------------------------------
    // Constructors
    // -----------------------------------------------------------------------

    constexpr string_view() noexcept = default;

    /// @brief Construct from txt::string (implicit conversion).
    string_view(const string& s) noexcept;

    /// @brief Construct from std::string_view.
    ///        @warning The bytes are **not** validated; use with care.
    explicit constexpr string_view(std::string_view sv) noexcept : sv_(sv) {}

    /// @brief Construct from pointer + length.
    explicit constexpr string_view(const char* data, std::size_t size) noexcept
        : sv_(data, size) {}

    // -----------------------------------------------------------------------
    // Size & emptiness
    // -----------------------------------------------------------------------

    /// @brief Number of UTF-8 bytes.
    [[nodiscard]] constexpr std::size_t size_bytes() const noexcept { return sv_.size(); }

    /// @brief Number of Unicode grapheme clusters.
    /// @complexity O(n)
    [[nodiscard]] std::size_t length() const noexcept;

    [[nodiscard]] constexpr bool empty() const noexcept { return sv_.empty(); }

    // -----------------------------------------------------------------------
    // Raw access
    // -----------------------------------------------------------------------

    [[nodiscard]] std::basic_string_view<std::uint8_t> as_bytes() const noexcept {
        return {reinterpret_cast<const std::uint8_t*>(sv_.data()), sv_.size()};
    }
    [[nodiscard]] std::string_view as_chars() const noexcept {
        return {sv_.data(), sv_.size()};
    }

    [[nodiscard]] constexpr std::string_view to_std_string_view() const noexcept { return sv_; }

    // -----------------------------------------------------------------------
    // Iteration
    // -----------------------------------------------------------------------

    [[nodiscard]] byte_range      bytes()      const noexcept { return {sv_.data(), sv_.size()}; }
    [[nodiscard]] codepoint_range codepoints() const noexcept { return {sv_.data(), sv_.size()}; }
    [[nodiscard]] grapheme_range  graphemes()  const noexcept { return {sv_.data(), sv_.size()}; }

    // -----------------------------------------------------------------------
    // Grapheme-cluster indexing
    // -----------------------------------------------------------------------

    /// @complexity O(n)
    [[nodiscard]] grapheme_ref grapheme_at(std::size_t n) const noexcept;

    // -----------------------------------------------------------------------
    // Search & substring
    // -----------------------------------------------------------------------

    [[nodiscard]] Index find(string_view needle) const noexcept;
    [[nodiscard]] string_view substr(Index begin, std::size_t count) const noexcept;
    [[nodiscard]] Index end_index() const noexcept { return Index(sv_.size()); }

    // -----------------------------------------------------------------------
    // Comparison (byte-level)
    // -----------------------------------------------------------------------

    [[nodiscard]] bool operator==(const string_view& o) const noexcept { return sv_ == o.sv_; }
    [[nodiscard]] bool operator!=(const string_view& o) const noexcept { return sv_ != o.sv_; }
    [[nodiscard]] bool operator<(const string_view& o) const noexcept  { return sv_ < o.sv_; }
    [[nodiscard]] bool operator<=(const string_view& o) const noexcept { return sv_ <= o.sv_; }
    [[nodiscard]] bool operator>(const string_view& o) const noexcept  { return sv_ > o.sv_; }
    [[nodiscard]] bool operator>=(const string_view& o) const noexcept { return sv_ >= o.sv_; }

    // -----------------------------------------------------------------------
    // Disabled
    // -----------------------------------------------------------------------

    char operator[](std::size_t)       = delete;
    char operator[](std::size_t) const = delete;

private:
    std::string_view sv_;
};

inline std::size_t string_view::length() const noexcept {
    std::size_t count = 0;
    for (auto it = graphemes().begin(); it != graphemes().end(); ++it) {
        ++count;
    }
    return count;
}

inline grapheme_ref string_view::grapheme_at(std::size_t n) const noexcept {
    auto it = graphemes().begin();
    auto end = graphemes().end();
    for (std::size_t i = 0; i < n && it != end; ++i) {
        ++it;
    }
    if (it != end) {
        return *it;
    }
    return grapheme_ref(std::string_view(), Index(sv_.size()));
}

} // namespace txt
