cmake_minimum_required(VERSION 3.18)

include(FetchContent)
FetchContent_Declare(benchmark
    GIT_REPOSITORY https://github.com/google/benchmark.git
    GIT_TAG        v1.8.3
    GIT_SHALLOW    TRUE
)
set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(benchmark)

add_executable(texere_bench
    bench_string.cpp
    bench_normalize.cpp
    bench_case.cpp
    bench_convert.cpp
)

target_link_libraries(texere_bench PRIVATE
    texere::texere
    benchmark::benchmark_main
)

target_compile_features(texere_bench PRIVATE cxx_std_17)
