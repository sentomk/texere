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
FetchContent_MakeAvailable(doctest)

# ============================================================================
# Test executable
# ============================================================================
add_executable(texere_tests test_string.cpp)

target_link_libraries(texere_tests PRIVATE
    texere::texere
    doctest::doctest
)

target_compile_features(texere_tests PRIVATE cxx_std_17)

include(doctest)
doctest_discover_tests(texere_tests)
