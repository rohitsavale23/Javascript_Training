/****Requirements:**
1. Create a variable `email` with value `"customer@examplebank.com"`
2. Write an if-else statement that:
   - Checks if email contains both `@` AND `.`
   - If yes, print: `"Valid email format"`
   - If no, print: `"Invalid email format"`

 */

   let email = "customer@examplebank.com";

   if(email.includes("@") && (".")){   // here .includes is just checking whether & and . is available or not inside the email 
    
    console.log("======================")
    console.log("Below is the output")
    console.log("======================")
    
    console.log("Testing email format line number 10: ", email)
    console.log("This is the valid email format")
    console.log("")
  
}else{
    console.log("======================")
    console.log("Below is the output")
    console.log("======================")
    console.log("Line Number 10 email Format Is Invalid:", email)
   }

   email = "invalid.com"

   if(email.includes("@")){
    console.log("======================")
    console.log("Below is the output")
    console.log("======================")
    console.log("Line Number 29 having valid format : ", email)
   }else{
    console.log("======================")
    console.log("Below is the output")
    console.log("======================")
    console.log("Line Number 29 Don't have Valid Email Format Missing @: ", email)
   }

email = "rohit@gmail.com"

if(email.includes("@") && (".")){
    console.log("======================")
    console.log("Below is the output")
    console.log("======================")
    console.log("Line number 43 have valid email format: ", email)
}else{
    console.log("Line Number 43 isn't the valid email format: ", email)
}