#pragma once

// Copyright 2026 The texere Authors.
//
// Licensed under the MIT License.
//
// File: case.hpp
// Description: Core implementation and declarations for texere.

#include "string.hpp"


namespace txt {

// ===========================================================================
// Unicode case-mapping operations
// ===========================================================================
//
// The built-in mapping tables support Unicode one-to-many case expansions for
// the covered scripts rather than limiting results to simple one-to-one
// character replacement. This means:
//
//   - A single code point may expand to multiple code points (e.g. German ß
//     → "SS" in upper case).
//   - Locale-sensitive mappings (tr/az dotted-I) are NOT applied by default.
//     Pass an explicit BCP 47 locale tag if locale sensitivity is needed
//     (planned for a future milestone).

// Returns an uppercased copy of `s`.
//
// s: Source string.
// Returns:   New txt::string with every code point uppercased.
[[nodiscard]] string to_upper(const string& s);

// Returns a lowercased copy of `s` (Unicode full case mapping).
//
// s: Source string.
// Returns:   New txt::string with every code point lowercased.
[[nodiscard]] string to_lower(const string& s);

// Returns a title-cased copy of `s`.
//
// Each grapheme cluster that begins a "word" (Unicode word boundary,
// UAX #29) is uppercased; all others are lowercased.
//
// s: Source string.
// Returns:   New txt::string in title case.
[[nodiscard]] string to_title(const string& s);

// Returns a case-folded copy of `s` for case-insensitive comparison.
//
// Case folding is more aggressive than lowercasing and is locale-independent.
// Use `case_fold(a) == case_fold(b)` for portable case-insensitive equality.
//
// s: Source string.
// Returns:   Case-folded txt::string.
[[nodiscard]] string case_fold(const string& s);

} // namespace txt
