#pragma once

#include "string.hpp"

#ifdef TEXERE_HAS_UNIALGO
#include <uni_algo/norm.h>
#endif

namespace txt {

// ===========================================================================
// Normalization forms  (Unicode Standard, Chapter 3)
// ===========================================================================

/// @brief Unicode normalization form selector.
///
/// | Form  | Decomposition | Composition |
/// |-------|---------------|-------------|
/// | NFC   | Canonical     | Yes         |
/// | NFD   | Canonical     | No          |
/// | NFKC  | Compatible    | Yes         |
/// | NFKD  | Compatible    | No          |
enum class normalization_form : std::uint8_t {
    NFC  = 0, ///< Canonical Decomposition, followed by Canonical Composition.
    NFD  = 1, ///< Canonical Decomposition.
    NFKC = 2, ///< Compatibility Decomposition, followed by Canonical Composition.
    NFKD = 3, ///< Compatibility Decomposition.
};

// ===========================================================================
// Free functions
// ===========================================================================

/// @brief Returns a normalized copy of a txt::string.
///
/// @param s     Source string (not modified).
/// @param form  The target normalization form (default: NFC).
/// @return      New txt::string in the requested form.
[[nodiscard]]
inline string normalized(const string& s, normalization_form form = normalization_form::NFC) {
#ifdef TEXERE_HAS_UNIALGO
    std::string_view sv = s.to_std_string_view();
    std::string res;
    switch (form) {
        case normalization_form::NFC:  res = una::norm::to_nfc_utf8(sv); break;
        case normalization_form::NFD:  res = una::norm::to_nfd_utf8(sv); break;
        case normalization_form::NFKC: res = una::norm::to_nfkc_utf8(sv); break;
        case normalization_form::NFKD: res = una::norm::to_nfkd_utf8(sv); break;
    }
    return string::from_utf8_unchecked(res);
#else
    return s; // Fallback: no-op if uni-algo is missing
#endif
}

/// @brief Normalize a txt::string in-place.
///
/// Transforms `s` into the requested normalization form according to
/// Unicode 15.1 normalization rules.
///
/// @param s     String to normalize (modified in-place).
/// @param form  The target normalization form (default: NFC).
///
/// @note The implementation delegates to uni-algo when available, or to a
///       built-in table-driven algorithm otherwise.
inline void normalize(string& s, normalization_form form = normalization_form::NFC) {
    s = normalized(s, form);
}

/// @brief Compares two strings for Unicode equality under a given normalization.
///
/// Equivalent to `normalized(a, form) == normalized(b, form)` but may avoid
/// full normalization when a quick-check can short-circuit.
///
/// @param a     First string.
/// @param b     Second string.
/// @param form  Normalization form to apply before comparison (default: NFC).
/// @return      true iff a and b are canonically equivalent under `form`.
[[nodiscard]]
inline bool equals_normalized(const string& a, const string& b,
                       normalization_form form = normalization_form::NFC) {
    return normalized(a, form) == normalized(b, form);
}

inline bool string::equals_normalized(const string& other) const {
    return txt::equals_normalized(*this, other);
}

} // namespace txt
