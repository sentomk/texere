cmake_minimum_required(VERSION 3.18)

# ============================================================================
# Fetch doctest (header-only, very lightweight)
# ============================================================================
include(FetchContent)
FetchContent_Declare(doctest
    GIT_REPOSITORY https://github.com/doctest/doctest.git
    GIT_TAG        v2.4.11
    GIT_SHALLOW    TRUE
)
FetchContent_GetProperties(doctest)
if(NOT doctest_POPULATED)
    FetchContent_Populate(doctest)
    add_library(doctest INTERFACE)
    add_library(doctest::doctest ALIAS doctest)
    target_include_directories(doctest INTERFACE ${doctest_SOURCE_DIR})
endif()

# ============================================================================
# Test executable
# ============================================================================
add_executable(texere_tests
    test_string.cpp
    test_algorithms.cpp
    test_string_view.cpp
    test_grapheme.cpp
    test_expected.cpp
    test_normalize.cpp
    test_case.cpp
    test_convert.cpp
    test_boundary.cpp
)

target_link_libraries(texere_tests PRIVATE
    texere::texere
    doctest::doctest
)

target_compile_features(texere_tests PRIVATE cxx_std_17)

include(${doctest_SOURCE_DIR}/scripts/cmake/doctest.cmake)
doctest_discover_tests(texere_tests)
