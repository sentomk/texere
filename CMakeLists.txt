cmake_minimum_required(VERSION 3.18)

if(${CMAKE_VERSION} VERSION_GREATER_EQUAL "3.30.0")
    set(CMAKE_POLICY_VERSION_MINIMUM "3.0")
endif()

project(texere
    VERSION      0.1.0
    DESCRIPTION  "Unicode-safe UTF-8 string library for C++17"
    HOMEPAGE_URL "https://github.com/sentomk/texere"
    LANGUAGES    CXX
)

# ============================================================================
# C++ standard
# ============================================================================
set(CMAKE_CXX_STANDARD          17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS        OFF)

# MSVC: treat source files as UTF-8 for correct string literal encoding
if(MSVC)
    add_compile_options(/utf-8)
endif()

# ============================================================================
# Options
# ============================================================================
# texere is built two ways: as its own project by its maintainers, and as a
# subproject by consumers that want the library and nothing else. Those want
# different defaults — a checkout wants the tests, a consumer does not — and
# making every consumer switch them off by hand is the dependency-management
# smell this block exists to remove.
if(CMAKE_SOURCE_DIR STREQUAL CMAKE_CURRENT_SOURCE_DIR)
    set(TEXERE_IS_TOP_LEVEL ON)
else()
    set(TEXERE_IS_TOP_LEVEL OFF)
endif()

option(TEXERE_BUILD_TESTS      "Build unit tests"   ${TEXERE_IS_TOP_LEVEL})
option(TEXERE_BUILD_TOOLS      "Build the txt command-line tools" ${TEXERE_IS_TOP_LEVEL})
option(TEXERE_BUILD_BENCHMARKS "Build benchmarks"   OFF)
option(TEXERE_USE_SIMDUTF      "Use simdutf for fast UTF-8 validation"  ON)
option(TEXERE_USE_UNIALGO      "Use uni-algo for Unicode algorithms"     ON)
option(TEXERE_USE_FMT          "Use {fmt} for formatting support"        OFF)

# ============================================================================
# Dependencies
#
# Every optional dependency is looked for first and downloaded only when it is
# missing. A consumer that already has the package — vcpkg, Conan, a distro —
# therefore configures with no network access at all, and one that forbids
# downloads (FETCHCONTENT_FULLY_DISCONNECTED=ON) gets a sentence saying what to
# do instead of a surprise clone. The version pins live here, next to the only
# place that needs them.
# ============================================================================

# "Neither find_package nor FetchContent produced it" needs a better sentence
# than the one CMake reaches for: the missing target otherwise surfaces at
# generate time as "there is a typo in the target name", which is a poor thing
# to read three projects down a dependency chain.
function(texere_dependency_missing package_name option_name remedy)
    message(FATAL_ERROR
        "${package_name} is required by ${option_name}=ON but is not available: "
        "find_package did not find it and FetchContent did not populate it. Install "
        "it (for example \`vcpkg install ${package_name}\`), put its prefix on "
        "CMAKE_PREFIX_PATH, or configure with -D${option_name}=OFF ${remedy}.")
endfunction()

if(TEXERE_USE_SIMDUTF)
    find_package(simdutf CONFIG QUIET)
    if(NOT simdutf_FOUND)
        # simdutf's own tests and tools are not ours to build, and this is
        # where those knobs belong: texere is what pulls simdutf in. Its `sutf`
        # tool has to stay out in particular — its iconv probe picks up msys2's
        # mingw headers on Windows and contaminates an MSVC-ABI compile, which
        # is a bizarre failure to debug from three projects away.
        set(SIMDUTF_TESTS OFF CACHE BOOL "" FORCE)
        set(SIMDUTF_TOOLS OFF CACHE BOOL "" FORCE)
        include(FetchContent)
        FetchContent_Declare(simdutf
            GIT_REPOSITORY https://github.com/simdutf/simdutf.git
            GIT_TAG        v5.2.8
            GIT_SHALLOW    TRUE
        )
        FetchContent_MakeAvailable(simdutf)
    endif()
    if(NOT TARGET simdutf::simdutf)
        texere_dependency_missing(simdutf TEXERE_USE_SIMDUTF
            "to use the built-in validator, which is exact but scalar")
    endif()
endif()

if(TEXERE_USE_UNIALGO)
    find_package(uni-algo CONFIG QUIET)
    if(NOT uni-algo_FOUND)
        include(FetchContent)
        FetchContent_Declare(uni_algo
            GIT_REPOSITORY https://github.com/uni-algo/uni-algo.git
            GIT_TAG        v1.2.0
            GIT_SHALLOW    TRUE
        )
        FetchContent_MakeAvailable(uni_algo)
    endif()
    if(NOT TARGET uni-algo::uni-algo)
        texere_dependency_missing(uni-algo TEXERE_USE_UNIALGO
            "to use the built-in segmentation heuristic, which is coarser")
    endif()
endif()

if(TEXERE_USE_FMT)
    find_package(fmt CONFIG QUIET)
    if(NOT fmt_FOUND)
        include(FetchContent)
        FetchContent_Declare(fmt
            GIT_REPOSITORY https://github.com/fmtlib/fmt.git
            GIT_TAG        10.2.1
            GIT_SHALLOW    TRUE
        )
        FetchContent_MakeAvailable(fmt)
    endif()
    if(NOT TARGET fmt::fmt)
        texere_dependency_missing(fmt TEXERE_USE_FMT
            "to leave txt::format behind")
    endif()
endif()

# ============================================================================
# texere library target
# ============================================================================
file(GLOB TEXERE_SOURCES "src/*.cpp")
add_library(texere ${TEXERE_SOURCES})
add_library(texere::texere ALIAS texere)

target_include_directories(texere PUBLIC
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)

target_compile_features(texere PUBLIC cxx_std_17)

# Optional dependency linkage
# Link interfaces. No public header mentions simdutf or uni-algo, so those
# stay PRIVATE — but texere is a *static* library, and the objects it compiled
# against them sit inside the archive. CMake records a static library's
# private dependencies as LINK_ONLY in its interface, which is exactly right:
# consumers link them, and inherit neither include directories nor defines.
# Wrapping them in $<BUILD_INTERFACE:> instead would strip them from the
# installed target and leave the consumer with undefined symbols.
#
# fmt is different: include/texere/format.hpp includes <fmt/core.h> behind a
# PUBLIC define, so it is part of texere's public surface.
if(TEXERE_USE_SIMDUTF)
    target_link_libraries(texere PRIVATE simdutf::simdutf)
    target_compile_definitions(texere PRIVATE TEXERE_HAS_SIMDUTF=1)
endif()

if(TEXERE_USE_UNIALGO)
    target_link_libraries(texere PRIVATE uni-algo::uni-algo)
    target_compile_definitions(texere PRIVATE TEXERE_HAS_UNIALGO=1)
endif()

if(TEXERE_USE_FMT)
    target_link_libraries(texere PUBLIC fmt::fmt)
    target_compile_definitions(texere PUBLIC TEXERE_HAS_FMT=1)
endif()

# ============================================================================
# Tests
# ============================================================================
if(TEXERE_BUILD_TESTS)
    enable_testing()
    add_subdirectory(tests)
endif()

# ============================================================================
# Tools (txt ...)
# ============================================================================

if(TEXERE_BUILD_TOOLS)
    add_subdirectory(tools/txt)
endif()

# ============================================================================
# Benchmarks
# ============================================================================
if(TEXERE_BUILD_BENCHMARKS)
    add_subdirectory(benchmarks)
endif()

# ============================================================================
# Install & export  (supports FetchContent + find_package)
# ============================================================================
option(TEXERE_BUILD_INSTALL "Generate install targets for find_package() support" OFF)

if(TEXERE_BUILD_INSTALL)
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
