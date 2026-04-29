#pragma once

// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: string.hpp
// Description: Core implementation and declarations for texere.

#include "expected.hpp"
#include "grapheme.hpp"
#include "iterator.hpp"

#include <cstddef>
#include <cstdint>
#include <string>
#include <string_view>

namespace txt {

// Forward declarations
class string_view;
enum class normalization_form : std::uint8_t;

// ===========================================================================
// txt::string
// ===========================================================================

// Unicode-safe, UTF-8 encoded, owning string.
//
// texere's primary string type.  Internally backed by std::string (and thus
// benefits from SSO on most standard-library implementations).
//
// ### Key invariants
// - Storage is always valid UTF-8 **unless** constructed via
//   `from_utf8_unchecked()`.
// - The string is **not** automatically normalized; call `normalize()` or
//   `equals_normalized()` when normalization matters.
// - All `const` member functions are thread-safe (value-type semantics).
//
// ### Unicode version
// Unicode 15.1 is used for all Unicode algorithm tables (grapheme cluster
// boundaries, case folding, normalization, …).
class string {
public:
    // -----------------------------------------------------------------------
    // Constructors & destructor
    // -----------------------------------------------------------------------

    // Default-constructs an empty string.
    string() noexcept = default;

    string(const string&)            = default;
    string(string&&) noexcept        = default;
    string& operator=(const string&) = default;
    string& operator=(string&&) noexcept = default;
    ~string()                        = default;

    // -----------------------------------------------------------------------
    // Factory functions  (the only way to build a txt::string from raw bytes)
    // -----------------------------------------------------------------------

    // Strict factory: validates UTF-8 and returns an error on failure.
    //
    // sv: Raw UTF-8 bytes to validate and adopt.
    // Returns:    A txt::string on success, or a txt::error describing the
    //            first ill-formed sequence.
    [[nodiscard]]
    static expected<string, error> from_utf8(std::string_view sv);

    // Lossy factory: replaces ill-formed sequences with U+FFFD (�).
    //
    // sv: Raw bytes (may contain invalid UTF-8).
    // Returns:    A txt::string with replacement characters substituted in.
    [[nodiscard]]
    static string from_utf8_lossy(std::string_view sv);

    // Unchecked factory: adopts bytes without any validation.
    //
    // @warning **Unsafe.**  Passing non-UTF-8 bytes violates the class
    //          invariant and leads to undefined behaviour in subsequent
    //          Unicode operations.  Use only when the caller has already
    //          verified the input (e.g. after from_utf8 succeeds, or when
    //          working with known-good compile-time data).
    //
    // sv: Bytes assumed to be valid UTF-8.
    // Returns:    A txt::string wrapping those bytes.
    [[nodiscard]]
    static string from_utf8_unchecked(std::string_view sv) noexcept;

    // -----------------------------------------------------------------------
    // Size & emptiness
    // -----------------------------------------------------------------------

    // Number of UTF-8 bytes (not graphemes, not code points).
    [[nodiscard]] std::size_t size_bytes() const noexcept {
        return storage_.size();
    }

    // Number of Unicode grapheme clusters (user-perceived characters).
    //
    // @complexity O(n) – iterates the entire string to count cluster
    //             boundaries.  Cache the result if you need it repeatedly.
    [[nodiscard]] std::size_t length() const noexcept;

    // Returns true iff the string contains zero bytes.
    [[nodiscard]] bool empty() const noexcept { return storage_.empty(); }

    // -----------------------------------------------------------------------
    // Raw access
    // -----------------------------------------------------------------------

    // Read-only span over the raw UTF-8 bytes.
    [[nodiscard]] std::basic_string_view<std::uint8_t> as_bytes() const noexcept {
        return {reinterpret_cast<const std::uint8_t*>(storage_.data()), storage_.size()};
    }

    // Read-only span of the storage as char (convenience overload).
    [[nodiscard]] std::string_view as_chars() const noexcept {
        return {storage_.data(), storage_.size()};
    }

    // -----------------------------------------------------------------------
    // Conversion to standard types
    // -----------------------------------------------------------------------

    // Returns a copy of the underlying std::string.
    [[nodiscard]] std::string      to_std_string()      const { return storage_; }

    // Returns a std::string_view into the underlying storage.
    //        Valid only as long as this txt::string is alive and unmodified.
    [[nodiscard]] std::string_view to_std_string_view() const noexcept {
        return storage_;
    }

    // -----------------------------------------------------------------------
    // Iteration  (three-tier model)
    // -----------------------------------------------------------------------

    // Range over raw UTF-8 bytes (uint8_t).
    [[nodiscard]] byte_range bytes() const noexcept {
        return byte_range(storage_.data(), storage_.size());
    }

    // Range over Unicode scalar values (char32_t).
    [[nodiscard]] codepoint_range codepoints() const noexcept {
        return codepoint_range(storage_.data(), storage_.size());
    }

    // Range over Unicode grapheme clusters (grapheme_ref).
    [[nodiscard]] grapheme_range graphemes() const noexcept {
        return grapheme_range(storage_.data(), storage_.size());
    }

    // -----------------------------------------------------------------------
    // Grapheme-cluster indexing
    // -----------------------------------------------------------------------

    // Returns the n-th grapheme cluster (0-indexed).
    //
    // @complexity O(n) – must scan from the start of the string.
    //             Prefer iterating with graphemes() for bulk access.
    //
    // n: 0-based grapheme index.
    // Returns:   grapheme_ref for the n-th cluster, or an empty grapheme_ref
    //           if n ≥ length().
    // @note     Complexity: O(n).
    [[nodiscard]] grapheme_ref grapheme_at(std::size_t n) const noexcept;

    // -----------------------------------------------------------------------
    // Substring & search
    // -----------------------------------------------------------------------

    // Returns a sub-string starting at the grapheme-cluster Index.
    //
    // begin: Opaque byte-offset index (obtained from an iterator or
    //               grapheme_at()).
    // count: Number of grapheme clusters to include.
    // Returns:       A new txt::string containing those clusters.
    [[nodiscard]] string substr(Index begin, std::size_t count) const;

    // Searches for the first occurrence of `needle` (byte comparison).
    //
    // Returns: Index of the first byte of the match, or an invalid sentinel
    //         Index equal to end().
    [[nodiscard]] Index find(txt::string_view needle) const noexcept;

    // Returns the one-past-end sentinel Index.
    [[nodiscard]] Index end_index() const noexcept {
        return Index(storage_.size());
    }

    // -----------------------------------------------------------------------
    // Normalization
    // -----------------------------------------------------------------------

    // Compares two strings for Unicode equality after normalization.
    //
    // Neither string is modified.  The normalization form used is NFC by
    // default; see normalize.hpp for other forms.
    [[nodiscard]] bool equals_normalized(const string& other) const;

    // =======================================================================
    // Comparison operators  (byte-level, no Unicode collation)
    // =======================================================================

    [[nodiscard]] bool operator==(const string& o) const noexcept { return storage_ == o.storage_; }
    [[nodiscard]] bool operator!=(const string& o) const noexcept { return storage_ != o.storage_; }
    [[nodiscard]] bool operator<(const string& o) const noexcept  { return storage_ < o.storage_; }
    [[nodiscard]] bool operator<=(const string& o) const noexcept { return storage_ <= o.storage_; }
    [[nodiscard]] bool operator>(const string& o) const noexcept  { return storage_ > o.storage_; }
    [[nodiscard]] bool operator>=(const string& o) const noexcept { return storage_ >= o.storage_; }

    // -----------------------------------------------------------------------
    // Explicitly deleted dangerous operations
    // -----------------------------------------------------------------------

    // Integer indexing is disabled.
    //
    // Use grapheme_at(n) for grapheme access, or the bytes() / codepoints()
    // / graphemes() range adapters for iteration.
    char operator[](std::size_t) = delete;
    const char operator[](std::size_t) const = delete;

private:
    friend string to_upper(const string&);
    friend string to_lower(const string&);
    friend string to_title(const string&);
    friend string case_fold(const string&);
    friend string normalized(const string&, normalization_form);

    // Private constructor – only reachable from factory functions.
    explicit string(std::string storage) noexcept : storage_(std::move(storage)) {}

    std::string storage_; //< UTF-8 encoded backing store (SSO-enabled).
};

// ===========================================================================
// User-defined literal  _ts
// ===========================================================================

namespace literals {
    inline txt::string operator""_ts(const char* str, std::size_t len);
} // namespace literals

} // namespace txt

// ===========================================================================
// Inline Implementations
// ===========================================================================

namespace txt {

inline string string::from_utf8_unchecked(std::string_view sv) noexcept {
    return string(std::string(sv));
}

namespace detail {
    expected<std::string, error> validate_utf8(std::string_view sv);
} // namespace detail

} // namespace txt

namespace txt {
namespace literals {
inline txt::string operator""_ts(const char* str, std::size_t len) {
    auto validated = txt::detail::validate_utf8(std::string_view(str, len));
    if (!validated) {
        return txt::string::from_utf8_unchecked(std::string_view(str, len));
    }
    return txt::string::from_utf8_unchecked(std::string_view(str, len));
}
} // namespace literals
} // namespace txt
