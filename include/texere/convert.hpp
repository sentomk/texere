#pragma once

#include "expected.hpp"
#include "string.hpp"

#include <string>
#include <string_view>

namespace txt {

// ===========================================================================
// Encoding conversion utilities
// ===========================================================================
//
// These functions convert between txt::string (UTF-8) and platform-specific
// or legacy encodings.  They are primarily intended for Windows interop and
// for interfacing with APIs that deal in wchar_t / UTF-16.
//
// Note: std::wstring is UTF-16 on Windows (wchar_t = 16-bit) and UTF-32 on
// most POSIX platforms (wchar_t = 32-bit).  texere normalises both cases
// internally but the public API is the same.

/// @brief Convert a txt::string (UTF-8) to std::wstring (UTF-16 / UTF-32).
///
/// Primary use-case: Windows API interop (e.g. CreateFileW, MessageBoxW).
///
/// @param s  Source UTF-8 string.
/// @return   Wide string in the platform's native wchar_t encoding.
[[nodiscard]] std::wstring to_wstring(const string& s);

/// @brief Convert a std::wstring_view (UTF-16 / UTF-32) to a txt::string.
///
/// @param ws  Wide string view to convert.
/// @return    A txt::string on success, or a txt::error if `ws` contains
///            ill-formed surrogate pairs (UTF-16) or out-of-range code points.
[[nodiscard]] expected<string, error> from_wstring(std::wstring_view ws);

// ---------------------------------------------------------------------------
// Latin-1 / ISO-8859-1  (simple 8-bit → Unicode mapping)
// ---------------------------------------------------------------------------

/// @brief Convert a Latin-1 (ISO-8859-1) byte string to txt::string (UTF-8).
///
/// Every byte b in [0x00, 0xFF] maps directly to the Unicode code point U+00XX,
/// so this conversion is always lossless and infallible.
///
/// @param latin1  Raw Latin-1 bytes.
/// @return        UTF-8 encoded txt::string.
[[nodiscard]] string from_latin1(std::string_view latin1);

/// @brief Convert a txt::string to Latin-1 if all code points fit in U+00FF.
///
/// @param s  Source UTF-8 string.
/// @return   A std::string containing Latin-1 bytes on success, or an error
///           if any code point exceeds U+00FF.
[[nodiscard]] expected<std::string, error> to_latin1(const string& s);

} // namespace txt
