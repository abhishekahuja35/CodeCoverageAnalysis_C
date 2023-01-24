## Measuring code coverage of tcas using Squish Coco:
## Author: Abhishek Ahuja

## Requirements
GCC and Squish Coco should be installed and configured

## The directory info:
The directory structure has been modified to only include the files that are needed - only v41 of all the versions has been kept as it was the only one used for the experiments
* Results : folder containing all the files from the experiments
* outputs : empty folder to store the outputs in files
* tcas.c : the original source code file
* runTests.sh : the shell script written to execute the test cases

## Steps to duplicate the results:
Follow the below steps to measure code coverage using Squish Coco:
1. Open terminal
2. Compile the code with csgcc: csgcc tcas.c
3. Run the shell script to execute test cases: sh runTests.sh
4. There will be two files generated - a.out.csmes and a.out.csexe 
5. Open the a.out.csmes in Coco Coverage Browser
6. When asked, load the execution file - a.out.csexe