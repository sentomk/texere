cmake_minimum_required(VERSION 3.18)

if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.30.0")
    set(CMAKE_POLICY_VERSION_MINIMUM "3.0")
endif()

project(texere
    VERSION      0.1.0
    DESCRIPTION  "Unicode-safe UTF-8 string library for C++17"
    HOMEPAGE_URL "https://github.com/yourorg/texere"
    LANGUAGES    CXX
)

# ============================================================================
# C++ standard
# ============================================================================
set(CMAKE_CXX_STANDARD          17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS        OFF)

# ============================================================================
# Options
# ============================================================================
option(TEXERE_BUILD_TESTS      "Build unit tests"   ON)
option(TEXERE_BUILD_BENCHMARKS "Build benchmarks"   OFF)
option(TEXERE_USE_SIMDUTF      "Use simdutf for fast UTF-8 validation"  ON)
option(TEXERE_USE_UNIALGO      "Use uni-algo for Unicode algorithms"     ON)
option(TEXERE_USE_FMT          "Use {fmt} for formatting support"        OFF)

# ============================================================================
# FetchContent dependencies
# ============================================================================
include(FetchContent)

if(TEXERE_USE_SIMDUTF)
    FetchContent_Declare(simdutf
        GIT_REPOSITORY https://github.com/simdutf/simdutf.git
        GIT_TAG        v5.2.8
        GIT_SHALLOW    TRUE
    )
    FetchContent_MakeAvailable(simdutf)
endif()

if(TEXERE_USE_UNIALGO)
    FetchContent_Declare(uni_algo
        GIT_REPOSITORY https://github.com/uni-algo/uni-algo.git
        GIT_TAG        v1.2.0
        GIT_SHALLOW    TRUE
    )
    FetchContent_MakeAvailable(uni_algo)
endif()

if(TEXERE_USE_FMT)
    FetchContent_Declare(fmt
        GIT_REPOSITORY https://github.com/fmtlib/fmt.git
        GIT_TAG        10.2.1
        GIT_SHALLOW    TRUE
    )
    FetchContent_MakeAvailable(fmt)
endif()

# ============================================================================
# texere library target
# ============================================================================
add_library(texere INTERFACE)
add_library(texere::texere ALIAS texere)

target_include_directories(texere INTERFACE
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)

target_compile_features(texere INTERFACE cxx_std_17)

# Optional dependency linkage
if(TEXERE_USE_SIMDUTF)
    target_link_libraries(texere INTERFACE simdutf)
    target_compile_definitions(texere INTERFACE TEXERE_HAS_SIMDUTF=1)
endif()

if(TEXERE_USE_UNIALGO)
    target_link_libraries(texere INTERFACE uni-algo::uni-algo)
    target_compile_definitions(texere INTERFACE TEXERE_HAS_UNIALGO=1)
endif()

if(TEXERE_USE_FMT)
    target_link_libraries(texere INTERFACE fmt::fmt)
    target_compile_definitions(texere INTERFACE TEXERE_HAS_FMT=1)
endif()

# ============================================================================
# Tests
# ============================================================================
if(TEXERE_BUILD_TESTS)
    enable_testing()
    add_subdirectory(tests)
endif()

# ============================================================================
# Benchmarks
# ============================================================================
if(TEXERE_BUILD_BENCHMARKS)
    add_subdirectory(benchmarks)
endif()

# Skip installation during development to avoid export errors with FetchContent dependencies
if(OFF)
# ============================================================================
# Install & export  (supports FetchContent + find_package)
# ============================================================================
include(GNUInstallDirs)
include(CMakePackageConfigHelpers)

install(TARGETS texere
    EXPORT  texere-targets
)

install(DIRECTORY include/texere
    DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}
)

install(EXPORT texere-targets
    FILE        texere-targets.cmake
    NAMESPACE   texere::
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/texere
)

configure_package_config_file(
    "${CMAKE_CURRENT_SOURCE_DIR}/cmake/texere-config.cmake.in"
    "${CMAKE_CURRENT_BINARY_DIR}/texere-config.cmake"
    INSTALL_DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/texere"
)

write_basic_package_version_file(
    "${CMAKE_CURRENT_BINARY_DIR}/texere-config-version.cmake"
    VERSION       ${PROJECT_VERSION}
    COMPATIBILITY SameMajorVersion
)

install(FILES
    "${CMAKE_CURRENT_BINARY_DIR}/texere-config.cmake"
    "${CMAKE_CURRENT_BINARY_DIR}/texere-config-version.cmake"
    DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/texere"
)
endif()
