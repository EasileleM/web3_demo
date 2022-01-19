# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.10

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /wax/testtest/wax

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /wax/testtest/wax/build

# Utility rule file for wax_project.

# Include the progress variables for this target.
include CMakeFiles/wax_project.dir/progress.make

CMakeFiles/wax_project: CMakeFiles/wax_project-complete


CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-install
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-mkdir
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-download
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-update
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-patch
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-configure
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-build
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-install
CMakeFiles/wax_project-complete: wax_project-prefix/src/wax_project-stamp/wax_project-test
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Completed 'wax_project'"
	/usr/bin/cmake -E make_directory /wax/testtest/wax/build/CMakeFiles
	/usr/bin/cmake -E touch /wax/testtest/wax/build/CMakeFiles/wax_project-complete
	/usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-done

wax_project-prefix/src/wax_project-stamp/wax_project-install: wax_project-prefix/src/wax_project-stamp/wax_project-build
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "No install step for 'wax_project'"
	cd /wax/testtest/wax/build/wax && /usr/bin/cmake -E echo_append
	cd /wax/testtest/wax/build/wax && /usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-install

wax_project-prefix/src/wax_project-stamp/wax_project-mkdir:
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Creating directories for 'wax_project'"
	/usr/bin/cmake -E make_directory /wax/testtest/wax/src
	/usr/bin/cmake -E make_directory /wax/testtest/wax/build/wax
	/usr/bin/cmake -E make_directory /wax/testtest/wax/build/wax_project-prefix
	/usr/bin/cmake -E make_directory /wax/testtest/wax/build/wax_project-prefix/tmp
	/usr/bin/cmake -E make_directory /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp
	/usr/bin/cmake -E make_directory /wax/testtest/wax/build/wax_project-prefix/src
	/usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-mkdir

wax_project-prefix/src/wax_project-stamp/wax_project-download: wax_project-prefix/src/wax_project-stamp/wax_project-mkdir
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "No download step for 'wax_project'"
	/usr/bin/cmake -E echo_append
	/usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-download

wax_project-prefix/src/wax_project-stamp/wax_project-update: wax_project-prefix/src/wax_project-stamp/wax_project-download
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "No update step for 'wax_project'"
	cd /wax/testtest/wax/src && /usr/bin/cmake -E echo_append
	cd /wax/testtest/wax/src && /usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-update

wax_project-prefix/src/wax_project-stamp/wax_project-patch: wax_project-prefix/src/wax_project-stamp/wax_project-download
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "No patch step for 'wax_project'"
	cd /wax/testtest/wax/src && /usr/bin/cmake -E echo_append
	cd /wax/testtest/wax/src && /usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-patch

wax_project-prefix/src/wax_project-stamp/wax_project-configure: wax_project-prefix/tmp/wax_project-cfgcmd.txt
wax_project-prefix/src/wax_project-stamp/wax_project-configure: wax_project-prefix/src/wax_project-stamp/wax_project-update
wax_project-prefix/src/wax_project-stamp/wax_project-configure: wax_project-prefix/src/wax_project-stamp/wax_project-patch
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Performing configure step for 'wax_project'"
	cd /wax/testtest/wax/build/wax && /usr/bin/cmake -DCMAKE_TOOLCHAIN_FILE=/usr/local/eosio.cdt/lib/cmake/eosio.cdt/EosioWasmToolchain.cmake "-GUnix Makefiles" /wax/testtest/wax/src
	cd /wax/testtest/wax/build/wax && /usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-configure

wax_project-prefix/src/wax_project-stamp/wax_project-build: wax_project-prefix/src/wax_project-stamp/wax_project-configure
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Performing build step for 'wax_project'"
	cd /wax/testtest/wax/build/wax && $(MAKE)

wax_project-prefix/src/wax_project-stamp/wax_project-test: wax_project-prefix/src/wax_project-stamp/wax_project-install
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold --progress-dir=/wax/testtest/wax/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_9) "No test step for 'wax_project'"
	cd /wax/testtest/wax/build/wax && /usr/bin/cmake -E echo_append
	cd /wax/testtest/wax/build/wax && /usr/bin/cmake -E touch /wax/testtest/wax/build/wax_project-prefix/src/wax_project-stamp/wax_project-test

wax_project: CMakeFiles/wax_project
wax_project: CMakeFiles/wax_project-complete
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-install
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-mkdir
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-download
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-update
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-patch
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-configure
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-build
wax_project: wax_project-prefix/src/wax_project-stamp/wax_project-test
wax_project: CMakeFiles/wax_project.dir/build.make

.PHONY : wax_project

# Rule to build all files generated by this target.
CMakeFiles/wax_project.dir/build: wax_project

.PHONY : CMakeFiles/wax_project.dir/build

CMakeFiles/wax_project.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/wax_project.dir/cmake_clean.cmake
.PHONY : CMakeFiles/wax_project.dir/clean

CMakeFiles/wax_project.dir/depend:
	cd /wax/testtest/wax/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /wax/testtest/wax /wax/testtest/wax /wax/testtest/wax/build /wax/testtest/wax/build /wax/testtest/wax/build/CMakeFiles/wax_project.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/wax_project.dir/depend

