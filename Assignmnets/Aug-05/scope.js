//Each curly brace pair is a block of code in js

//Funcion is a block of code which we wright to reusability
//Scope is where the variable is available while block of code is what is present in curly braces
//Functions are also hoisted in js , var variables also hoisted in js

//Each curly brace pair is a block of code in JavaScript.
loginToHomePage("stc123", "12345"); //Calling function

loginToHomePage("mark", "Mark123#"); //reusable
function demonstrateHoistingForVar() {
  console.log("Before declaration:", interestRate); // prints: undefined (not a crash!)
  var interestRate = 4.5;
  console.log("After declaration:", interestRate); // prints: 4.5
}

//reusability.

//Login

//Name of the function should be in camelcase
//Input parameters are nothing but local variables available only within the function block.
let username = "Steve";
function loginToHomePage(username, password) {
  console.log("Type Username: ", username);
  console.log("Type password:", password);
  console.log("Click Login Button !!");
  console.log("Login Successfull!!");
}

// consol.log(Username, password) we cannot write or print this line outside the funcion, username and password is a local to the function (local variables)
// let and const have block scope.
//var has function scope?
function logout() {
  let firstName = "Mark";
  console.log(username);
  if (firstName) {
    //Internally when program is executed and when the function is called,
    //all var variables are hoisted on the top of the function
    var salary, increment, isStatus;
    //Non empty strings are considered as truthy/true in Javascript
    // console.log("last name is ", lastName);
    console.log("salary is ", salary);
    let lastName = "Jobs";
    //var variables are hoisted
    var salary = 50000;
    var increment = 10000;
    var isStatus = true;
    console.log("Hello:", username);
  }
  //console.log(lastName); Will give error as it is declared inside a if and called outside that if
  console.log(salary);
}
//console.log(firstName); //Not Accessible Outside Logout Function
console.log(username);

logout();

//How to write a simple function ,
//function keyword, name, input parameters, curly braces, and function body
//block of code, each pair of curly braces is a block of code.
//block of code are nested.
//var variables are function scoped, while let and const are block scoped.
//var variables are hoisted at the top of the program or function
//functions in Javascript are also hoisted
