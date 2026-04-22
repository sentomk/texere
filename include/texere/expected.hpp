#pragma once

#include <cstdint>
#include <string>
#include <type_traits>

namespace txt {

// ---------------------------------------------------------------------------
// txt::expected<T, E>  –  C++17-compatible Result type
// ---------------------------------------------------------------------------
// Mirrors the interface of std::expected (C++23) so that migration is trivial
// once the project adopts C++23.  Only the subset actually used by texere is
// implemented here.

/// @brief Sentinel tag for constructing an expected in the error state.
struct unexpect_t { explicit unexpect_t() = default; };
inline constexpr unexpect_t unexpect{};

/// @brief Wraps an error value for passing to expected's error constructor.
template <class E>
class unexpected {
public:
    explicit unexpected(E e) : value_(std::move(e)) {}
    [[nodiscard]] const E& value() const & noexcept { return value_; }
    [[nodiscard]] E        value()       && noexcept { return std::move(value_); }
private:
    E value_;
};

template <class E>
unexpected<std::decay_t<E>> make_unexpected(E&& e) {
    return unexpected<std::decay_t<E>>(std::forward<E>(e));
}

// ---------------------------------------------------------------------------

/// @brief A value-or-error type (subset of std::expected, C++17-compatible).
///
/// @tparam T  Value type (must be movable).
/// @tparam E  Error type (must be movable).
template <class T, class E>
class expected {
public:
    using value_type = T;
    using error_type = E;

    // --- constructors ---

    /// Construct in the value state.
    expected(T v) : has_value_(true) { new (&storage_.value) T(std::move(v)); }

    /// Construct in the error state via unexpected<E>.
    expected(unexpected<E> u) : has_value_(false) {
        new (&storage_.error) E(std::move(u).value());
    }

    /// Construct in the error state directly (unexpect tag).
    template <class... Args>
    expected(unexpect_t, Args&&... args) : has_value_(false) {
        new (&storage_.error) E(std::forward<Args>(args)...);
    }

    // copy / move
    expected(const expected& o) : has_value_(o.has_value_) {
        if (has_value_) new (&storage_.value) T(o.storage_.value);
        else            new (&storage_.error) E(o.storage_.error);
    }
    expected(expected&& o) noexcept : has_value_(o.has_value_) {
        if (has_value_) new (&storage_.value) T(std::move(o.storage_.value));
        else            new (&storage_.error) E(std::move(o.storage_.error));
    }

    ~expected() {
        if (has_value_) storage_.value.~T();
        else            storage_.error.~E();
    }

    expected& operator=(expected o) {
        this->~expected();
        new (this) expected(std::move(o));
        return *this;
    }

    // --- observers ---

    [[nodiscard]] bool has_value() const noexcept { return has_value_; }
    explicit operator bool() const noexcept { return has_value_; }

    [[nodiscard]] const T&  value() const &  { return storage_.value; }
    [[nodiscard]] T&        value()       &  { return storage_.value; }
    [[nodiscard]] T         value()       && { return std::move(storage_.value); }

    [[nodiscard]] const E&  error() const &  { return storage_.error; }
    [[nodiscard]] E&        error()       &  { return storage_.error; }

    [[nodiscard]] const T* operator->() const noexcept { return &storage_.value; }
    [[nodiscard]] T*       operator->()       noexcept { return &storage_.value; }
    [[nodiscard]] const T& operator*()  const &  noexcept { return storage_.value; }
    [[nodiscard]] T&       operator*()        &  noexcept { return storage_.value; }

private:
    bool has_value_;
    union Storage {
        T value;
        E error;
        Storage() {}
        ~Storage() {}
    } storage_;
};

// ---------------------------------------------------------------------------
// Error type used by texere factory functions
// ---------------------------------------------------------------------------

/// @brief Categories of UTF-8 / conversion errors reported by texere.
enum class errc : std::uint8_t {
    ok              = 0,
    invalid_utf8    = 1,  ///< Input contains ill-formed UTF-8 sequences.
    truncated_input = 2,  ///< Input ends in the middle of a multi-byte sequence.
    surrogate_pair  = 3,  ///< Input contains lone UTF-16 surrogates (U+D800–U+DFFF).
    out_of_range    = 4,  ///< Code point value exceeds U+10FFFF.
    conversion_fail = 5,  ///< Generic conversion failure (e.g. wstring round-trip).
};

/// @brief Error value returned by texere factory functions.
struct error {
    errc        code{errc::ok};
    std::size_t byte_position{0}; ///< Byte offset of the first offending byte.

    [[nodiscard]] bool ok() const noexcept { return code == errc::ok; }
    [[nodiscard]] const char* message() const noexcept {
        switch (code) {
            case errc::ok:              return "success";
            case errc::invalid_utf8:    return "invalid utf-8 sequence";
            case errc::truncated_input: return "truncated utf-8 sequence";
            case errc::surrogate_pair:  return "utf-16 surrogate in utf-8 stream";
            case errc::out_of_range:    return "code point out of range";
            case errc::conversion_fail: return "conversion failed";
        }
        return "unknown error";
    }
};

} // namespace txt
