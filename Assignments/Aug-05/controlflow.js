//if else
//switch case

let leaveStatus = "APPROVED";

if (leaveStatus === "APPROVED") {
  console.log("✓ Leave request approved!");
}

if (leaveStatus === "APPROVED") {
  console.log("✓ Leave request approved!");
} else {
  console.log("✗ Leave request rejected!");
}

let requestStatus = "JUNK";

if (requestStatus === "APPROVED") {
  console.log("✓ Request approved");
} else if (requestStatus === "REJECTED") {
  console.log("✗ Request rejected");
} else if (requestStatus === "PENDING") {
  console.log("⊘ Request pending");
} else {
  console.log("? Unknown request status");
}

let days = 5;
//Order of if statements are important. In below example if we keep less than 10
//conditioon before < 6 then < 6 conditioon will neve be executed
if (days < 6) {
  console.log("  ✗ First condition (< 6): FALSE, skip");
  console.log("   Result: Standard leave");
} else if (days < 10) {
  if (days === 9) {
  }
  console.log("  ✗ First condition (< 6): FALSE, skip");
  console.log("  ✓ Second condition (< 10): TRUE, EXECUTE THIS");
  console.log("  Result: Extended leave");
} else {
  console.log("  Result: Long leave");
}
let status = "APPROVED";
if (status === "APPROVED") {
  console.log("  Line 1: Request approved");
}
console.log("This line also you wanted part of if"); //this line is outside if

//switch case statement
requestStatus = "REJECTED";
switch (requestStatus) {
  case "APPROVED":
    console.log("Request approved");
    break; //brings you out of the switch statement
  case "REJECTED":
    console.log("Request rejected");
    break;
  case "PENDING":
    console.log("Request pending");
    break;
  default:
    console.log("Unknown status");
}

switch (requestStatus) {
  case "APPROVED":
    console.log("Request approved");
    break; //brings you out of the switch statement
  case "REJECTED":
  case "PENDING":
    console.log("Request pending or rejected");
    break;
  default:  // When the above all cases won't match then the default will get print in the console
    console.log("Unknown status");
}

let tenureYears = 3;

switch (true) {
  case tenureYears < 1:
    console.log("New hire");
    break;
  case tenureYears >= 1 && tenureYears <= 5:
    console.log("Established employee");
    break;
  default:
    console.log("Senior employee");
}

//ternary operator
requestStatus = "APPROVE";
let symbol;
if (requestStatus === "APPROVED") {
  symbol = "✓";
} else {
  symbol = "✗";
}

symbol = requestStatus === "APPROVED" ? "✓" : "✗";  // ? and : both are the ternary operators APPROVED is a condition and both symbols are possibilities
console.log("Symbol is - ", symbol);
