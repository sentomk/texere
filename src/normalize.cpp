// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/normalize.hpp>

#ifdef TEXERE_HAS_UNIALGO
#include <uni_algo/norm.h>
#endif

namespace txt {

string normalized(const string& s, normalization_form form) {
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
    return s;
#endif
}

} // namespace txt
