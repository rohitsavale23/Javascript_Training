//Assignment operator

let email = "emailtesterone@gmail.com"; // = is the assignment, right side value is assign to the left side variable

let a;
console.log((a=5));
console.log(a==3); // Comparison operatore, when we have to compare the value then we have to use the ( == ), it will compare the value and print the result in true or false

a = "3";
console.log(a==3); //type coercion happens
console.log(a===3); // it does not type coercion, it data type also should be same 

//in programing you can do conditional execution
 
let age = 25;
if (age === 25){ // good pracrice is go with the === as this will check your data type as well 
console.log("The age is: ", age) // If this data will match the age the  the program won't execute next line
}else{
    console.log("The correct age is: ", age) // if the above line is not matching the age then this line will execute and will get the output
}

//in js any non zero value is true. Zero is consider as a false in js   

//Compound assignment operators

age +=5;
console.log(age);

age -=5;
console.log(age);
age *=5;
console.log(age);
age /=5;
console.log(age);

age %=5;
console.log(age);

age **=5;
console.log(age);

age++;
console.log("line number 43",age++)

++age;
console.log("line number 46",age)
console.log("line number 47",++age)
console.log("line number 48",age++)
console.log("line number 49",age)