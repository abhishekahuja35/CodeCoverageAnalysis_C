## Measuring code coverage of schedule.c using gcov
## Author: Abhishek Ahuja

## Requirements
GCC, gcov and gcovr should be installed and configured

## The directory info:
The directory structure has been modified to only include the files that are needed:
* Inputs: this directory contains a directory (input) which contains all the test input files needed to run the test cases
* Results: folder containing all the files from the experiments
* versions.alt: This folder used to contain all the different versions of the code. All the versions except the one used for the experiment have been deleted. Currently the folder contains:
    + versions.orig/v9: This folder contains:
        - source code files: schedule.c
        - runTests.sh: the shell script written to execute the test cases
        - outputs: an empty directory to store the outputs of the test cases

## Steps to duplicate the results:
Follow the below steps to measure code coverage using gcov:
1. Open terminal and navigate to the folder containing source code (v9)
2. Compile the code with flags: gcc schedule.c -fprofile-arcs -ftest-coverage
3. Run the shell script: sh runTests.sh
4. Use gcov to create a coverage file: gcov -b schedule.c
5. Create HTML report using gcovr: gcovr --html -o coverage.html