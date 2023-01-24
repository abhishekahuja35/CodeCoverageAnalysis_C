## Measuring code coverage of schedule using Squish Coco:
## Author: Abhishek Ahuja

## Requirements
GCC and Squish Coco should be installed and configured

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
Follow the below steps to measure code coverage using Squish Coco:
1. Open terminal
2. Compile the code with csgcc: csgcc schedule.c
3. Run the shell script: sh runTests.sh
4. There will be two files generated - a.out.csmes and a.out.csexe
5. Open the a.out.csmes in Coco Coverage Browser
6. When the coverage browser gives prompt, load the execution file - a.out.csexe