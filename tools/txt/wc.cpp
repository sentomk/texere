// Copyright 2026 The texere Authors.
// Licensed under the MIT License.
//
// File: wc.cpp
// Description: `txt wc` subcommand - honest text statistics.

#include "wc.hpp"

#include <texere/iterator.hpp>

#include <algorithm>
#include <cstdio>
#include <fstream>
#include <iostream>
#include <string>
#include <vector>

namespace txt_tool {
namespace wc {

counts count(std::string_view input) noexcept {
    counts c;
    c.bytes = input.size();
    c.lines = static_cast<std::size_t>(std::count(input.begin(), input.end(), '\n'));

    txt::codepoint_range cps(input.data(), input.size());
    for (auto it = cps.begin(); it != cps.end(); ++it) {
        ++c.codepoints;
    }

    txt::grapheme_range gs(input.data(), input.size());
    for (auto it = gs.begin(); it != gs.end(); ++it) {
        ++c.graphemes;
    }
    return c;
}

namespace {

// Column order is fixed regardless of flag order: canonical and stable.
struct column_spec {
    char flag;
    const char* header;
};

const column_spec k_columns[] = {
    {'l', "lines"},
    {'g', "graphemes"},
    {'m', "codepoints"},
    {'c', "bytes"},
};

struct options {
    bool selected[128] = {};   // flag character -> selected
    bool any_selected = false;
    std::vector<std::string> files;
};

int usage(std::FILE* out) {
    std::fprintf(out,
        "usage: txt wc [-l|-m|-g|-c] [file ...]\n"
        "\n"
        "Count text granularities, honestly:\n"
        "  -l  lines      (newline bytes, wc semantics)\n"
        "  -g  graphemes  (user-perceived characters, e.g. one emoji family)\n"
        "  -m  codepoints (Unicode scalar values)\n"
        "  -c  bytes      (raw UTF-8 bytes)\n"
        "\n"
        "With no flags, all four columns are printed.\n"
        "Reads standard input when no file is given.\n"
        "Invalid sequences degrade to U+FFFD for -m/-g; -c always reports raw bytes.\n");
    return 1;
}

bool read_file(const std::string& path, std::string& out, std::string& err) {
    std::ifstream f(path, std::ios::binary);
    if (!f) {
        err = path + ": cannot open";
        return false;
    }
    constexpr std::size_t chunk = 1 << 16;
    char buf[chunk];
    while (f.read(buf, static_cast<std::streamsize>(chunk)) || f.gcount() > 0) {
        out.append(buf, static_cast<std::size_t>(f.gcount()));
        if (!f) break;
    }
    return true;
}

void print_row(const counts& c, const options& o, const char* name, bool multiple) {
    bool printed = false;
    for (const auto& col : k_columns) {
        if (!o.any_selected || o.selected[static_cast<unsigned char>(col.flag)]) {
            std::size_t value = 0;
            switch (col.flag) {
                case 'l': value = c.lines; break;
                case 'g': value = c.graphemes; break;
                case 'm': value = c.codepoints; break;
                case 'c': value = c.bytes; break;
            }
            std::printf(printed ? " %zu" : "%zu", value);
            printed = true;
        }
    }
    if (name != nullptr && multiple) {
        std::printf(" %s", name);
    }
    std::printf("\n");
}

} // namespace

int run(int argc, char** argv) {
    options o;
    for (int i = 0; i < argc; ++i) {
        const std::string arg = argv[i];
        if (arg.size() >= 2 && arg[0] == '-' && arg != "-") {
            for (char f : arg.substr(1)) {
                switch (f) {
                    case 'l': case 'g': case 'm': case 'c':
                        o.selected[static_cast<unsigned char>(f)] = true;
                        o.any_selected = true;
                        break;
                    case 'a':
                        o.any_selected = false;   // explicit "all"
                        break;
                    case 'h': case '?':
                        return usage(stdout);
                    default:
                        std::fprintf(stderr, "txt wc: unknown flag '-%c'\n", f);
                        usage(stderr);
                        return 1;
                }
            }
        } else {
            o.files.push_back(arg);
        }
    }

    int failures = 0;

    if (o.files.empty()) {
        std::string input;
        char buf[1 << 16];
        while (std::cin.read(buf, sizeof(buf)) || std::cin.gcount() > 0) {
            input.append(buf, static_cast<std::size_t>(std::cin.gcount()));
        }
        print_row(count(input), o, nullptr, false);
        return 0;
    }

    const bool multiple = o.files.size() > 1;
    counts total;
    for (const auto& f : o.files) {
        std::string input;
        std::string err;
        if (!read_file(f, input, err)) {
            std::fprintf(stderr, "txt wc: %s\n", err.c_str());
            ++failures;
            continue;
        }
        const counts c = count(input);
        total.lines += c.lines;
        total.graphemes += c.graphemes;
        total.codepoints += c.codepoints;
        total.bytes += c.bytes;
        print_row(c, o, f.c_str(), multiple);
    }
    if (multiple) {
        print_row(total, o, "total", multiple);
    }
    return failures > 0 ? 2 : 0;
}

} // namespace wc
} // namespace txt_tool
