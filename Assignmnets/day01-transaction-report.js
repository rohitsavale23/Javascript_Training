/*### Part 2: Print a Transaction Report (10 min)

Create a new file called `day01-transaction-report.js` and write code to print a daily transaction report for a bank branch.

**Requirements:**
1. Print a report title (for example, "Daily Transaction Report")
2. Print 5 transactions, each with a transaction ID and an amount
3. Each transaction should have a status: APPROVED, DECLINED, or PENDING
4. Use blank lines to make it readable
5. Print a summary at the end (for example, "3 Approved, 2 Declined") 
*/

console.log("==========================");
console.log(" DAILY TRANSACTION REPORT ");
console.log("==========================");
console.log("");

let transaction1 = "TXN-101, Amount: 25000";
console.log("Transaction 1: ", transaction1)
console.log("Status: APPROVED");

let transaction2 = "TXN-102, Amount: 2500";
console.log("");
console.log("Transaction 2: ", transaction2);
console.log("Status: Decline");

let transaction3 = "TXN-103, Amount: 1200";
console.log("");
console.log("Transaction 3: ", transaction3);
console.log("Status: PENDING");

let transaction4 = "TXN-104, Amount: 500";
console.log("");
console.log("Transaction 4: ", transaction4);
console.log("Status: APPROVED");

let transaction5 = "TXN-105, Amount: 25000";
console.log("");
console.log("Transaction 5: ", transaction5);
console.log("Status: PENDING");
console.log("");

console.log("==========================");
console.log("          SUMMARY         ")
console.log("==========================");

console.log("");
console.log("Total Transactions: 5");
console.log("Approved: 2");
console.log("Decline: 1");
console.log("Pending: 2");