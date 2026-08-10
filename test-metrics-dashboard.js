/**Create `test-metrics-dashboard.js` showing test execution metrics.

**Use these data types:**
- Total tests (number)
- Passed tests (number)
- Failed tests (number)
- Pass rate (number with decimal)
- Test suite name (string)
- All tests passed? (boolean) */

console.log("=====================================");
console.log("        TEST EXECUTION MATRICS       ");
console.log("=====================================");
console.log("");

let totalTest = 90;
let passTest = 85;
let failTest = 5;
let testSuiteName = "Payment API Tests";

console.log("Total Test Cases: ", totalTest);

console.log("Total Pass Test Cases: ", passTest);

console.log("Total Failed Test Cases: ", failTest);

//pass rate
let passRate = (passTest / totalTest) * 100;
console.log("Pass rate is : ", + passRate + "%")

console.log("Test Suite: ", testSuiteName);

console.log("All Test Cases Are Passed?: ", false);

console.log("");
console.log("=====================================");
console.log("   TEST EXECUSTION MATRICS IS READY   ");
console.log("=====================================");