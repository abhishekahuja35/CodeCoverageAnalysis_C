## Measuring code coverage of tot_info using CTC++:
## Author: Abhishek Ahuja

## Requirements
GCC and CTC++ should be installed and configured. The following path must be added to your system:
* PATH=$PATH:/usr/local/bin
* MANPATH=/usr/local/man
* CTCHOME=/usr/local/bin/ctc

## The directory info:
The directory structure has been modified to only include the files that are needed:
* Inputs: this directory contains a directory named Universe which contains all the test input files needed to run the test cases
* Results : folder containing all the files from the experiments
* versions.alt: This folder used to contain all the different versions of the code. All the versions except the one used for the experiment have been deleted, hence the 
    + versions.orig/v23: This folder contains:
        - source code files: tot_info.c, std.h, chisq.h, gamma.h
        - runTests.sh: the shell script written to execute the test cases

## Steps to duplicate the results:
Follow the below steps to measure code coverage using CTC++:

* Use the below steps for function coverage instrumentation -if
1. Open terminal
2. Compile the code with CTC and gcc: ctc -i f gcc tot_info.c
3. Run the tests using shell script: sh runTests.sh
4. Run the command to generate profile file with function coverage: ctcpost -p function.txt -ff
5. Create an html report using the profile file created in last step: ctc2html -i function.txt

* Use the below steps for multicondition instrumentation -im
1. Open terminal
2. Compile the code with CTC and gcc: ctc -i m gcc tot_info.c
3. Run the tests using shell script: sh runTests.sh
4. Run the command to generate profile file with condition coverage: ctcpost -p condition.txt -fc
5. Create an html report using the profile file created in last step: ctc2html -i condition.txt
6. Run the command to generate profile file with decision coverage: ctcpost -p decision.txt -fd
7. Create an html report using the profile file created in last step: ctc2html -i decision.txt
8. Run the command to generate profile file with MC/DC coverage: ctcpost -p mcdc.txt -fmcdc
9. Create an html report using the profile file created in last step: ctc2html -i mcdc.txt
10. Run the command to generate profile file with multicondition coverage: ctcpost -p multicondition.txt
11. Create an html report using the profile file created in last step: ctc2html -i multicondition.txt