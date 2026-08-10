/***Requirements:**
- Create a variable for test status
- Show how it changes during test execution
- Create variables for test details (test name, step number, etc.)
- Print the flow as it progresses
*/

console.log("==================================");
console.log("      TEST EXECUTION FLOW         ");
console.log("==================================");
console.log("");

const testName = "Newsletter functionality";
let testerName = "Rohit Savale";
let testStatus = "Inprogress";

console.log("");
console.log("Functionlity to test: ", testName);
console.log("Tester Name: ", testerName);

let step1 = "Open firefox browser and paste the application URL";
console.log("");
console.log("Step 1: ", step1);
console.log("Status: ", testStatus)

let step2 = "Scroll down to the home page till the newsletter form appears";
console.log("");
console.log("Step 2: ", step2);
console.log("Status: ", testStatus);

let step3 = "Check mandatory fields on the form";
console.log("");
console.log("Step 3: ", step3);
console.log("Status: ", testStatus);

let step4 = "Click on submit button without providing the data";
console.log("");
console.log("Step 4: ", step4);
console.log("Status: ", testStatus);

let step5 = "Provide Email";
let email = "rohit@gmail.com";
console.log("");
console.log("Step 5: ", step5);
console.log("Status: ", testStatus);

let step6 = "Provide Name";
let name = "Rohit Test";
console.log("");
console.log("Step 6: ", step6);
console.log("Status: ", testStatus);


let step7 = "CLick On Submit"
testStatus = "COMPLETE";
console.log("");
console.log("Step 7: ", step7);
console.log("Status: ", testStatus);

console.log("");
console.log("=====================================");
console.log("  FLOW CHECKED WORKING AS EXPECTED   ");
console.log("=====================================");