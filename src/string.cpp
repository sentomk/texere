// Copyright 2026 The texere Authors.
// Licensed under the MIT License.

#include <texere/string.hpp>

#include "unicode_internal.hpp"

#include <cstdint>
#include <cstring>

namespace txt {
namespace detail {

expected<std::string, error> validate_utf8(std::string_view sv) {
    const auto* bytes = reinterpret_cast<const unsigned char*>(sv.data());
    const std::size_t len = sv.size();
    std::size_t i = 0;

    constexpr std::uint64_t high_bit_mask = 0x8080808080808080ull;
    while (i + sizeof(std::uint64_t) <= len) {
        std::uint64_t chunk = 0;
        std::memcpy(&chunk, bytes + i, sizeof(chunk));
        if ((chunk & high_bit_mask) != 0) {
            break;
        }
        i += sizeof(chunk);
    }

    while (i < len) {
        const unsigned char c = bytes[i];
        const std::size_t error_pos = i;

        if (c <= 0x7F) {
            ++i;
        } else if ((c & 0xE0) == 0xC0) {
            if (c < 0xC2) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            if (i + 1 >= len) {
                return unexpected<error>({errc::truncated_input, error_pos});
            }
            if ((bytes[i + 1] & 0xC0) != 0x80) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            i += 2;
        } else if ((c & 0xF0) == 0xE0) {
            if (i + 2 >= len) {
                return unexpected<error>({errc::truncated_input, error_pos});
            }
            if ((bytes[i + 1] & 0xC0) != 0x80 || (bytes[i + 2] & 0xC0) != 0x80) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            if (c == 0xE0 && bytes[i + 1] < 0xA0) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            if (c == 0xED && bytes[i + 1] > 0x9F) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            i += 3;
        } else if ((c & 0xF8) == 0xF0) {
            if (c > 0xF4) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            if (i + 3 >= len) {
                return unexpected<error>({errc::truncated_input, error_pos});
            }
            if ((bytes[i + 1] & 0xC0) != 0x80 || (bytes[i + 2] & 0xC0) != 0x80 ||
                (bytes[i + 3] & 0xC0) != 0x80) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            if (c == 0xF0 && bytes[i + 1] < 0x90) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            if (c == 0xF4 && bytes[i + 1] > 0x8F) {
                return unexpected<error>({errc::invalid_utf8, error_pos});
            }
            i += 4;
        } else {
            return unexpected<error>({errc::invalid_utf8, error_pos});
        }
    }

    return std::string(sv);
}

std::string make_lossy_utf8(std::string_view sv) {
    std::string res;
    res.reserve(sv.size() + sv.size() / 4); // rough guess
    const unsigned char* bytes = reinterpret_cast<const unsigned char*>(sv.data());
    std::size_t len = sv.size();
    std::size_t i = 0;

    while (i < len) {
        auto valid_res = validate_utf8(std::string_view(reinterpret_cast<const char*>(bytes + i), len - i));
        if (valid_res) {
            res.append(reinterpret_cast<const char*>(bytes + i), len - i);
            break;
        } else {
            std::size_t error_pos = valid_res.error().byte_position;
            res.append(reinterpret_cast<const char*>(bytes + i), error_pos);
            res.append("\xEF\xBF\xBD"); // U+FFFD
            i += error_pos + 1;
            // Skip continuation bytes
            while (i < len && (bytes[i] & 0xC0) == 0x80) {
                i++;
            }
        }
    }
    return res;
}

} // namespace detail

string string::from_utf8_lossy(std::string_view sv) {
    auto validated = detail::validate_utf8(sv);
    if (validated.has_value()) {
        return string(std::move(validated.value()));
    }
    return string(detail::make_lossy_utf8(sv));
}

expected<string, error> string::from_utf8(std::string_view sv) {
    auto validated = detail::validate_utf8(sv);
    if (validated.has_value()) {
        return string(std::move(validated.value()));
    }
    return unexpected<error>(validated.error());
}

std::size_t string::length() const noexcept {
    std::size_t count = 0;
    for (auto it = graphemes().begin(); it != graphemes().end(); ++it) {
        ++count;
    }
    return count;
}

grapheme_ref string::grapheme_at(std::size_t n) const noexcept {
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
