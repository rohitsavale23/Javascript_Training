

console.log("Total " + "is"); // Wen we plus two strings it is called concatenation 
console.log("Total " + 5 ); // Whenever we are using plus and any of the side is string whether it is left or right then this plus won't be arithmetic this will be concatination
console.log("Total " + 5 + 3); // This will be the concatination as well as we have a strinig at the left side
console.log(5 + 3 + " Total " + 5 + 3 ); // Here program will be execute from the left means first arithmetic operation will happen then it will concatinate the string with the next value

/**
 * Formula for calculate the test matrix: (Passed Tests / Total Tests) × 100
 * 
 * 
 * 
 */


// bellow is the assignment
let totalTest = 15; // if you don't have string here then you do not need to use extra plus sine to print the pass rate, if you are using string then you need to use plus sine to convert string to the number like +passRate+
let totalPassedTest = 12;

//calculating failed test cases
let failedTests = totalTest - totalPassedTest;
console.log("Failed test cases are: ", failedTests);

//declaring variable to calculate passed test cases rate with the formula
let passRate = (totalPassedTest / totalTest) * 100; 
console.log("Passed test case rate is: ", passRate + "%"); // passRate + "%" this part will do the concatinatin with the output value

//Declaring variable to calculate the failed rate
let faileRate = (failedTests / totalTest) * 100;
console.log("Failed Test case rate is: ", faileRate + "%");