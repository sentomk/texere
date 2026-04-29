#pragma once

// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: normalize.hpp
// Description: Core implementation and declarations for texere.

#include "string.hpp"


namespace txt {

// ===========================================================================
// Normalization forms  (Unicode Standard, Chapter 3)
// ===========================================================================

// Unicode normalization form selector.
//
// | Form  | Decomposition | Composition |
// |-------|---------------|-------------|
// | NFC   | Canonical     | Yes         |
// | NFD   | Canonical     | No          |
// | NFKC  | Compatible    | Yes         |
// | NFKD  | Compatible    | No          |
enum class normalization_form : std::uint8_t {
    NFC  = 0, //< Canonical Decomposition, followed by Canonical Composition.
    NFD  = 1, //< Canonical Decomposition.
    NFKC = 2, //< Compatibility Decomposition, followed by Canonical Composition.
    NFKD = 3, //< Compatibility Decomposition.
};

// ===========================================================================
// Free functions
// ===========================================================================

// Returns a normalized copy of a txt::string.
//
// s: Source string (not modified).
// form: The target normalization form (default: NFC).
// Returns:      New txt::string in the requested form.
[[nodiscard]]
string normalized(const string& s, normalization_form form = normalization_form::NFC);

// Normalize a txt::string in-place.
//
// Transforms `s` into the requested normalization form according to
// Unicode 15.1 normalization rules.
//
// s: String to normalize (modified in-place).
// form: The target normalization form (default: NFC).
//
// @note The implementation uses texere's built-in normalization tables.
inline void normalize(string& s, normalization_form form = normalization_form::NFC) {
    s = normalized(s, form);
}

// Compares two strings for Unicode equality under a given normalization.
//
// Equivalent to `normalized(a, form) == normalized(b, form)` but may avoid
// full normalization when a quick-check can short-circuit.
//
// a: First string.
// b: Second string.
// form: Normalization form to apply before comparison (default: NFC).
// Returns:      true iff a and b are canonically equivalent under `form`.
[[nodiscard]]
bool equals_normalized(const string& a, const string& b,
                       normalization_form form = normalization_form::NFC);

inline bool string::equals_normalized(const string& other) const {
    return txt::equals_normalized(*this, other);
}

} // namespace txt
