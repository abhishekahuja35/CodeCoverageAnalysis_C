## Measuring code coverage of tcas using Bullseye
## Author: Abhishek Ahuja

## Requirements
GCC and bullseye should be installed and configured
* Make sure the environment path is configured: export PATH=$PATH:/Applications/BullseyeCoverage/bin

## The directory info:
The directory structure has been modified to only include the files that are needed - only v41 of all the versions has been kept as it was the only one used for the experiments
* Results : folder containing all the files from the experiments
* outputs : empty folder to store the outputs in files
* tcas.c : the original source code file
* runTests.sh : the shell script written to execute the test cases

## Steps to duplicate the results:
Follow the below steps to measure code coverage using Bullseye:
1. Open terminal
2. Export path of directory where you want to store the coverage file: export COVFILE=[directory_where_to_save_coverage_file]/test.cov
4. Toggle coverage on: cov01 -1
5. Compile the code using wrapper: covc gcc tcas.c
6. Execute tests using shell script: sh runTests.sh
7. Open the test.cov file in Bullseye Coverage Browser