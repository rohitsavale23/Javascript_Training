// console.log("Status before declaration: " + testStatus); undefine ( if we will use let here then it will through the error )
// var testStatus = "PASSED";
// console.log("Status after declaration: " + testStatus); will get the output

for (var i = 0; i < 3; i++) { 
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here? 3

// in the above example if we want to use the let variable then we have to declare it first then we can use this outside the loop