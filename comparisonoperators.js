//== Checks if two values are equal. It ignores the data type. if equal then result will be true 
//=== Strict equality Checks if two values and their data types are equal. if both are same then true else false 
//> Checks if the left value is greater than the right value.
//< Checks if the left value is less than the right value.
//>= Checks if the left value is greater than or equal to the right value.
//<= Checks if the left value is less than or equal to the right value.
//!= Checks if two values are not equal. It ignores the data type.
//!== Checks if two values or their data types are different.

let waitTime = 25;
let waitThreshold = 30;
if (waitTime > waitThreshold) {
  console.log("❌ Wait time too long");
} else {
  console.log("✅ Wait time acceptable");
}

console.log(waitTime <= waitThreshold);
console.log(waitTime < waitThreshold);
console.log(waitTime >= waitThreshold);
console.log(waitTime != waitThreshold);
console.log(waitTime !== waitThreshold);

let a = "3";
let b = 3;
console.log(a != b); //false
console.log(a !== b);

// Practice

/*let regressionCases = 100;
let endToendCases = 101;

if(regressionCases > endToendCases){
    console.log("Regression cases have majority");
}else{
    console.log("end to end cases have majority")
}

console.log(regressionCases < endToendCases); // true
console.log(regressionCases <= endToendCases); // true 
console.log(regressionCases == endToendCases); // false
console.log(regressionCases > endToendCases); // false
console.log(regressionCases >= endToendCases); // false
console.log(regressionCases == endToendCases); // false
console.log(regressionCases != endToendCases); // true
console.log(regressionCases !== endToendCases); // true */
