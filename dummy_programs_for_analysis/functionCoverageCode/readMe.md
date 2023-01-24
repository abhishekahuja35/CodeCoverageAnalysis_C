## How to use the sample_int.c to show line coverage and statement coverage

* Directory structure
The folder contains the sample program sample_int.c and results folder containing 3 folders of results from respective coverage tools

* No need to execute any test cases
The subject program already has the required inputs hardcoded, no need to provide any further inputs

* How to use lcov to generate html report:
After running gcov command, execute the below 2 commands:
1. lcov -capture -directory . --output-file coverage.info
2. genhtml coverage.info --output-directory outcov

* How to replicate the results:
1. Follow the same steps as other subject programs to compile the code
2. Instead of running shell script to execute test cases, use the above provided steps
3. Validate the coverage report