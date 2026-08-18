# `txt` — Unicode-honest text tools, powered by texere.
#
# Multi-call binary: `txt <subcommand> ...`.  Each subcommand lives in its
# own translation unit and dispatches from main.cpp.
#
# The counting core is a small static library so that the unit tests can
# link it without pulling in the executable.

add_library(txt_tool_core STATIC
    wc.cpp
)
target_link_libraries(txt_tool_core PUBLIC texere::texere)
target_compile_features(txt_tool_core PUBLIC cxx_std_17)
target_include_directories(txt_tool_core PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})

add_executable(txt
    main.cpp
)
target_link_libraries(txt PRIVATE txt_tool_core)
target_compile_features(txt PRIVATE cxx_std_17)
