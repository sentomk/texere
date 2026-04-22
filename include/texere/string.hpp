#pragma once

#include "expected.hpp"
#include "grapheme.hpp"
#include "iterator.hpp"

#include <cstddef>
#include <string>
#include <string_view>

namespace txt {

// Forward declarations
class string_view;

// ===========================================================================
// txt::string
// ===========================================================================

/// @brief Unicode-safe, UTF-8 encoded, owning string.
///
/// texere's primary string type.  Internally backed by std::string (and thus
/// benefits from SSO on most standard-library implementations).
///
/// ### Key invariants
/// - Storage is always valid UTF-8 **unless** constructed via
///   `from_utf8_unchecked()`.
/// - The string is **not** automatically normalized; call `normalize()` or
///   `equals_normalized()` when normalization matters.
/// - All `const` member functions are thread-safe (value-type semantics).
///
/// ### Unicode version
/// Unicode 15.1 is used for all Unicode algorithm tables (grapheme cluster
/// boundaries, case folding, normalization, …).
class string {
public:
    // -----------------------------------------------------------------------
    // Constructors & destructor
    // -----------------------------------------------------------------------

    /// @brief Default-constructs an empty string.
    string() noexcept = default;

    string(const string&)            = default;
    string(string&&) noexcept        = default;
    string& operator=(const string&) = default;
    string& operator=(string&&) noexcept = default;
    ~string()                        = default;

    // -----------------------------------------------------------------------
    // Factory functions  (the only way to build a txt::string from raw bytes)
    // -----------------------------------------------------------------------

    /// @brief Strict factory: validates UTF-8 and returns an error on failure.
    ///
    /// @param sv  Raw UTF-8 bytes to validate and adopt.
    /// @return    A txt::string on success, or a txt::error describing the
    ///            first ill-formed sequence.
    [[nodiscard]]
    static expected<string, error> from_utf8(std::string_view sv);

    /// @brief Lossy factory: replaces ill-formed sequences with U+FFFD (�).
    ///
    /// @param sv  Raw bytes (may contain invalid UTF-8).
    /// @return    A txt::string with replacement characters substituted in.
    [[nodiscard]]
    static string from_utf8_lossy(std::string_view sv);

    /// @brief Unchecked factory: adopts bytes without any validation.
    ///
    /// @warning **Unsafe.**  Passing non-UTF-8 bytes violates the class
    ///          invariant and leads to undefined behaviour in subsequent
    ///          Unicode operations.  Use only when the caller has already
    ///          verified the input (e.g. after from_utf8 succeeds, or when
    ///          working with known-good compile-time data).
    ///
    /// @param sv  Bytes assumed to be valid UTF-8.
    /// @return    A txt::string wrapping those bytes.
    [[nodiscard]]
    static string from_utf8_unchecked(std::string_view sv) noexcept;

    // -----------------------------------------------------------------------
    // Size & emptiness
    // -----------------------------------------------------------------------

    /// @brief Number of UTF-8 bytes (not graphemes, not code points).
    [[nodiscard]] std::size_t size_bytes() const noexcept {
        return storage_.size();
    }

    /// @brief Number of Unicode grapheme clusters (user-perceived characters).
    ///
    /// @complexity O(n) – iterates the entire string to count cluster
    ///             boundaries.  Cache the result if you need it repeatedly.
    [[nodiscard]] std::size_t length() const noexcept;

    /// @brief Returns true iff the string contains zero bytes.
    [[nodiscard]] bool empty() const noexcept { return storage_.empty(); }

    // -----------------------------------------------------------------------
    // Raw access
    // -----------------------------------------------------------------------

    /// @brief Read-only span over the raw UTF-8 bytes.
    [[nodiscard]] std::basic_string_view<std::uint8_t> as_bytes() const noexcept {
        return {reinterpret_cast<const std::uint8_t*>(storage_.data()), storage_.size()};
    }

    /// @brief Read-only span of the storage as char (convenience overload).
    [[nodiscard]] std::string_view as_chars() const noexcept {
        return {storage_.data(), storage_.size()};
    }

    // -----------------------------------------------------------------------
    // Conversion to standard types
    // -----------------------------------------------------------------------

    /// @brief Returns a copy of the underlying std::string.
    [[nodiscard]] std::string      to_std_string()      const { return storage_; }

    /// @brief Returns a std::string_view into the underlying storage.
    ///        Valid only as long as this txt::string is alive and unmodified.
    [[nodiscard]] std::string_view to_std_string_view() const noexcept {
        return storage_;
    }

    // -----------------------------------------------------------------------
    // Iteration  (three-tier model)
    // -----------------------------------------------------------------------

    /// @brief Range over raw UTF-8 bytes (uint8_t).
    [[nodiscard]] byte_range bytes() const noexcept {
        return byte_range(storage_.data(), storage_.size());
    }

    /// @brief Range over Unicode scalar values (char32_t).
    [[nodiscard]] codepoint_range codepoints() const noexcept {
        return codepoint_range(storage_.data(), storage_.size());
    }

    /// @brief Range over Unicode grapheme clusters (grapheme_ref).
    [[nodiscard]] grapheme_range graphemes() const noexcept {
        return grapheme_range(storage_.data(), storage_.size());
    }

    // -----------------------------------------------------------------------
    // Grapheme-cluster indexing
    // -----------------------------------------------------------------------

    /// @brief Returns the n-th grapheme cluster (0-indexed).
    ///
    /// @complexity O(n) – must scan from the start of the string.
    ///             Prefer iterating with graphemes() for bulk access.
    ///
    /// @param n  0-based grapheme index.
    /// @return   grapheme_ref for the n-th cluster, or an empty grapheme_ref
    ///           if n ≥ length().
    /// @note     Complexity: O(n).
    [[nodiscard]] grapheme_ref grapheme_at(std::size_t n) const noexcept;

    // -----------------------------------------------------------------------
    // Substring & search
    // -----------------------------------------------------------------------

    /// @brief Returns a sub-string starting at the grapheme-cluster Index.
    ///
    /// @param begin  Opaque byte-offset index (obtained from an iterator or
    ///               grapheme_at()).
    /// @param count  Number of grapheme clusters to include.
    /// @return       A new txt::string containing those clusters.
    [[nodiscard]] string substr(Index begin, std::size_t count) const;

    /// @brief Searches for the first occurrence of `needle` (byte comparison).
    ///
    /// @return Index of the first byte of the match, or an invalid sentinel
    ///         Index equal to end().
    [[nodiscard]] Index find(txt::string_view needle) const noexcept;

    /// @brief Returns the one-past-end sentinel Index.
    [[nodiscard]] Index end_index() const noexcept {
        return Index(storage_.size());
    }

    // -----------------------------------------------------------------------
    // Normalization
    // -----------------------------------------------------------------------

    /// @brief Compares two strings for Unicode equality after normalization.
    ///
    /// Neither string is modified.  The normalization form used is NFC by
    /// default; see normalize.hpp for other forms.
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

    /// @brief Integer indexing is disabled.
    ///
    /// Use grapheme_at(n) for grapheme access, or the bytes() / codepoints()
    /// / graphemes() range adapters for iteration.
    char operator[](std::size_t) = delete;
    const char operator[](std::size_t) const = delete;

private:
    // Private constructor – only reachable from factory functions.
    explicit string(std::string storage) noexcept : storage_(std::move(storage)) {}

    std::string storage_; ///< UTF-8 encoded backing store (SSO-enabled).
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
    inline expected<std::string, error> validate_utf8(std::string_view sv) {
        const unsigned char* bytes = reinterpret_cast<const unsigned char*>(sv.data());
        std::size_t len = sv.size();
        std::size_t i = 0;

        while (i < len) {
            unsigned char c = bytes[i];
            std::size_t error_pos = i;

            if (c <= 0x7F) {
                // 1-byte
                i += 1;
            } else if ((c & 0xE0) == 0xC0) {
                // 2-byte
                if (c < 0xC2) { return unexpected<error>({errc::invalid_utf8, error_pos}); } // overlong
                if (i + 1 >= len) { return unexpected<error>({errc::truncated_input, error_pos}); }
                if ((bytes[i+1] & 0xC0) != 0x80) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
                i += 2;
            } else if ((c & 0xF0) == 0xE0) {
                // 3-byte
                if (i + 2 >= len) { return unexpected<error>({errc::truncated_input, error_pos}); }
                unsigned char c2 = bytes[i+1];
                unsigned char c3 = bytes[i+2];
                if ((c2 & 0xC0) != 0x80 || (c3 & 0xC0) != 0x80) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
                if (c == 0xE0 && c2 < 0xA0) { return unexpected<error>({errc::invalid_utf8, error_pos}); } // overlong
                if (c == 0xED && c2 >= 0xA0) { return unexpected<error>({errc::surrogate_pair, error_pos}); } // surrogate
                i += 3;
            } else if ((c & 0xF8) == 0xF0) {
                // 4-byte
                if (c > 0xF4) { return unexpected<error>({errc::out_of_range, error_pos}); }
                if (i + 3 >= len) { return unexpected<error>({errc::truncated_input, error_pos}); }
                unsigned char c2 = bytes[i+1];
                unsigned char c3 = bytes[i+2];
                unsigned char c4 = bytes[i+3];
                if ((c2 & 0xC0) != 0x80 || (c3 & 0xC0) != 0x80 || (c4 & 0xC0) != 0x80) { return unexpected<error>({errc::invalid_utf8, error_pos}); }
                if (c == 0xF0 && c2 < 0x90) { return unexpected<error>({errc::invalid_utf8, error_pos}); } // overlong
                if (c == 0xF4 && c2 >= 0x90) { return unexpected<error>({errc::out_of_range, error_pos}); } // out of range
                i += 4;
            } else {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
        }
        return std::string(sv);
    }

    inline std::string make_lossy_utf8(std::string_view sv) {
        std::string result;
        result.reserve(sv.size() + 3); // heuristic
        const unsigned char* bytes = reinterpret_cast<const unsigned char*>(sv.data());
        std::size_t len = sv.size();
        std::size_t i = 0;

        auto append_replacement = [&]() {
            result.push_back('\xEF');
            result.push_back('\xBF');
            result.push_back('\xBD');
        };

        while (i < len) {
            unsigned char c = bytes[i];

            if (c <= 0x7F) {
                result.push_back(static_cast<char>(c));
                i += 1;
            } else if ((c & 0xE0) == 0xC0) {
                if (c < 0xC2 || i + 1 >= len || (bytes[i+1] & 0xC0) != 0x80) {
                    append_replacement();
                    i += 1;
                } else {
                    result.push_back(static_cast<char>(c));
                    result.push_back(static_cast<char>(bytes[i+1]));
                    i += 2;
                }
            } else if ((c & 0xF0) == 0xE0) {
                if (i + 2 >= len) {
                    append_replacement();
                    i += 1; // Just advance by 1 on error for simplicity in lossy
                    continue;
                }
                unsigned char c2 = bytes[i+1];
                unsigned char c3 = bytes[i+2];
                if ((c2 & 0xC0) != 0x80 || (c3 & 0xC0) != 0x80 || 
                    (c == 0xE0 && c2 < 0xA0) || (c == 0xED && c2 >= 0xA0)) {
                    append_replacement();
                    i += 1;
                } else {
                    result.push_back(static_cast<char>(c));
                    result.push_back(static_cast<char>(c2));
                    result.push_back(static_cast<char>(c3));
                    i += 3;
                }
            } else if ((c & 0xF8) == 0xF0) {
                if (c > 0xF4 || i + 3 >= len) {
                    append_replacement();
                    i += 1;
                    continue;
                }
                unsigned char c2 = bytes[i+1];
                unsigned char c3 = bytes[i+2];
                unsigned char c4 = bytes[i+3];
                if ((c2 & 0xC0) != 0x80 || (c3 & 0xC0) != 0x80 || (c4 & 0xC0) != 0x80 ||
                    (c == 0xF0 && c2 < 0x90) || (c == 0xF4 && c2 >= 0x90)) {
                    append_replacement();
                    i += 1;
                } else {
                    result.push_back(static_cast<char>(c));
                    result.push_back(static_cast<char>(c2));
                    result.push_back(static_cast<char>(c3));
                    result.push_back(static_cast<char>(c4));
                    i += 4;
                }
            } else {
                append_replacement();
                i += 1;
            }
        }
        return result;
    }
} // namespace detail

inline string string::from_utf8_lossy(std::string_view sv) {
    auto validated = detail::validate_utf8(sv);
    if (validated.has_value()) {
        return string(std::move(validated.value()));
    }
    return string(detail::make_lossy_utf8(sv));
}

inline expected<string, error> string::from_utf8(std::string_view sv) {
    auto validated = detail::validate_utf8(sv);
    if (validated.has_value()) {
        return string(std::move(validated.value()));
    }
    return unexpected<error>(validated.error());
}

inline std::size_t string::length() const noexcept {
    std::size_t count = 0;
    for (auto it = graphemes().begin(); it != graphemes().end(); ++it) {
        ++count;
    }
    return count;
}

inline grapheme_ref string::grapheme_at(std::size_t n) const noexcept {
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

