// Copyright 2026 The texere Authors.
// Licensed under the MIT License.
//
// File: main.cpp
// Description: `txt` multi-call binary - dispatches to a subcommand.

#include "wc.hpp"

#include <cstdio>
#include <cstring>
#include <string_view>

namespace {

int usage() {
    std::fprintf(stderr,
        "usage: txt <command> [options]\n"
        "\n"
        "commands:\n"
        "  wc    count lines / graphemes / codepoints / bytes\n");
    return 1;
}

} // namespace

int main(int argc, char** argv) {
    if (argc < 2) {
        return usage();
    }
    const std::string_view cmd = argv[1];
    if (cmd == "wc") {
        return txt_tool::wc::run(argc - 2, argv + 2);
    }
    if (cmd == "-h" || cmd == "--help" || cmd == "help") {
        usage();
        return 0;
    }
    std::fprintf(stderr, "txt: unknown command '%.*s'\n",
                 static_cast<int>(cmd.size()), cmd.data());
    return usage();
}
