// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/case.hpp>

#ifdef TEXERE_HAS_UNIALGO
#include <uni_algo/case.h>
#endif

namespace txt {

string to_upper(const string& s) {
#ifdef TEXERE_HAS_UNIALGO
    return string::from_utf8_unchecked(una::cases::to_uppercase_utf8(s.to_std_string_view()));
#else
    return s;
#endif
}

string to_lower(const string& s) {
#ifdef TEXERE_HAS_UNIALGO
    return string::from_utf8_unchecked(una::cases::to_lowercase_utf8(s.to_std_string_view()));
#else
    return s;
#endif
}

string to_title(const string& s) {
#ifdef TEXERE_HAS_UNIALGO
    return string::from_utf8_unchecked(una::cases::to_titlecase_utf8(s.to_std_string_view()));
#else
    return s;
#endif
}

string case_fold(const string& s) {
#ifdef TEXERE_HAS_UNIALGO
    return string::from_utf8_unchecked(una::cases::to_casefold_utf8(s.to_std_string_view()));
#else
    return s;
#endif
}

} // namespace txt
