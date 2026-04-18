#pragma once

#include "string.hpp"

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
///       TODO: wire up uni-algo / built-in implementation.
void normalize(string& s, normalization_form form = normalization_form::NFC);

/// @brief Returns a normalized copy of a txt::string.
///
/// @param s     Source string (not modified).
/// @param form  The target normalization form (default: NFC).
/// @return      New txt::string in the requested form.
[[nodiscard]]
string normalized(const string& s, normalization_form form = normalization_form::NFC);

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
bool equals_normalized(const string& a, const string& b,
                       normalization_form form = normalization_form::NFC);

} // namespace txt
