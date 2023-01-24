## Measuring code coverage of tcas using gcov
## Author: Abhishek Ahuja

## Requirements
GCC, gcov and gcovr should be installed and configured

## The directory info:
The directory structure has been modified to only include the files that are needed - only v41 of all the versions has been kept as it was the only one used for the experiments
* Results : folder containing all the files from the experiments
* outputs : empty folder to store the outputs in files
* tcas.c : the original source code file
* runTests.sh : the shell script written to execute the test cases

## Steps to duplicate the results:
Follow the below steps to measure code coverage using gcov:
1. Open terminal
2. Compile the code with required flags: gcc tcas.c -fprofile-arcs -ftest-coverage
3. Run the shell script to execute test cases: sh runTests.sh
4. Use gcov to create a coverage file: gcov -b tcas.c
5. Create HTML report using gcovr: gcovr --html -o coverage.html