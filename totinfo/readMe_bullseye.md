## Measuring code coverage of tot_info using Bullseye
## Author: Abhishek Ahuja

## Requirements
GCC and bullseye should be installed and configured

## The directory info:
The directory structure has been modified to only include the files that are needed:
* Inputs: this directory contains a directory named Universe which contains all the test input files needed to run the test cases
* Results : folder containing all the files from the experiments
* versions.alt: This folder used to contain all the different versions of the code. All the versions except the one used for the experiment have been deleted, hence the 
    + versions.orig/v23: This folder contains:
        - source code files: tot_info.c, std.h, chisq.h, gamma.h
        - runTests.sh: the shell script written to execute the test cases

## Steps to duplicate the results:
Follow the below steps to measure code coverage using Bullseye:
1. Open terminal
2. Make sure the environment path is configured: export PATH=$PATH:/Applications/BullseyeCoverage/bin
3. Add path of directory to your system where you need to save your coverage file: export COVFILE=[directory_path_where_to_save_coverage_file]/test.cov
4. Toggle coverage on: cov01 -1
5. Compile the code using wrapper: covc gcc tot_info.c
6. Run tests using shell script: sh runTests.sh
7. Open the test.cov file in Bullseye Coverage Browser