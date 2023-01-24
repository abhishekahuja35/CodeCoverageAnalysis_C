## How to use the sample_int.c to show line coverage and statement coverage

* Directory structure
The folder contains the sample program sample_int.c and results folder containing 3 folders of results from respective coverage tools

* Using a.out file to execute test cases
Provide 3 inputs to the program - 0,1,2. Follow the steps below:
1. Once a.out file is generated, execute the same using terminal: ./a.out
2. The program will ask for input, give 0 and press enter
3. Run the program again: ./a.out
4. The program will ask for input, give 1 and press enter
5. Run the program again: ./a.out
6. The program will ask for input, give 2 and press enter

* How to use lcov to generate html report:
After running gcov command, execute the below 2 commands:
1. lcov -capture -directory . --output-file coverage.info
2. genhtml coverage.info --output-directory outcov

* How to replicate the results:
1. Follow the same steps as other subject programs to compile the code
2. Instead of running shell script to execute test cases, use the above provided steps
3. Validate the coverage report