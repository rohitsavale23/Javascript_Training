let patientId = "P-1001";
let insuranceId = "";

if (patientId != "") {
  if (insuranceId != "") {
  }
}

if (patientId != "" && insuranceId != "") {
  console.log("both patientId and insuranceID are not blank");
} else {
  console.log(
    "ERROR: Please check that patientId and insuranceId have valid values and are not blank",
  );
}

console.log("\n--- AND Truth Table ---\n");

console.log("true  && true  = " + (true && true));
console.log("true  && false = " + (true && false));
console.log("false && true  = " + (false && true));
console.log("false && false = " + (false && false));

patientId = "ANC";
insuranceId = "";
if (patientId != "" || insuranceId != "") {
  console.log("Atleast patientId or insuranceID are not blank");
} else {
  console.log(
    "ERROR: Please check that patientId and insuranceId have valid values and are not blank",
  );
}

console.log("typeof 95         -> " + typeof 95);
console.log('typeof "Aisha"    -> ' + typeof "Aisha");
console.log("typeof true       -> " + typeof true);
let abcd;
console.log("typeof abcd       -> " + typeof abcd);

if (typeof abcd != number) {
}
