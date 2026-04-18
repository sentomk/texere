#pragma once

#include "string.hpp"

namespace txt {

// ===========================================================================
// Unicode case-mapping operations
// ===========================================================================
//
// All functions follow Unicode full case-mapping rules (Unicode 15.1,
// SpecialCasing.txt + CaseFolding.txt) rather than simple one-to-one
// character replacement.  This means:
//
//   - A single code point may expand to multiple code points (e.g. German ß
//     → "SS" in upper case).
//   - Locale-sensitive mappings (tr/az dotted-I) are NOT applied by default.
//     Pass an explicit BCP 47 locale tag if locale sensitivity is needed
//     (planned for a future milestone).
//
// TODO: wire up uni-algo or ICU for full case mapping tables.

/// @brief Returns an uppercased copy of `s` (Unicode full case mapping).
///
/// @param s  Source string.
/// @return   New txt::string with every code point uppercased.
[[nodiscard]] string to_upper(const string& s);

/// @brief Returns a lowercased copy of `s` (Unicode full case mapping).
///
/// @param s  Source string.
/// @return   New txt::string with every code point lowercased.
[[nodiscard]] string to_lower(const string& s);

/// @brief Returns a title-cased copy of `s`.
///
/// Each grapheme cluster that begins a "word" (Unicode word boundary,
/// UAX #29) is uppercased; all others are lowercased.
///
/// @param s  Source string.
/// @return   New txt::string in title case.
[[nodiscard]] string to_title(const string& s);

/// @brief Returns a case-folded copy of `s` for case-insensitive comparison.
///
/// Case folding is more aggressive than lowercasing and is locale-independent.
/// Use `case_fold(a) == case_fold(b)` for portable case-insensitive equality.
///
/// @param s  Source string.
/// @return   Case-folded txt::string.
[[nodiscard]] string case_fold(const string& s);

} // namespace txt
