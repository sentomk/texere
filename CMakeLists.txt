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

# MSVC: treat source files as UTF-8 for correct string literal encoding
if(MSVC)
    add_compile_options(/utf-8)
endif()

# ============================================================================
# Options
# ============================================================================
option(TEXERE_BUILD_TESTS      "Build unit tests"   ON)
option(TEXERE_BUILD_BENCHMARKS "Build benchmarks"   OFF)
option(TEXERE_USE_FMT          "Use {fmt} for formatting support"        OFF)

# ============================================================================
# FetchContent dependencies
# ============================================================================
include(FetchContent)

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
file(GLOB TEXERE_SOURCES "src/*.cpp")
add_library(texere ${TEXERE_SOURCES})
add_library(texere::texere ALIAS texere)

target_include_directories(texere PUBLIC
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)

target_compile_features(texere PUBLIC cxx_std_17)

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
