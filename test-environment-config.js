/*### Part 1: Test Environment Variables

Create a new file called `test-environment-config.js` and create variables for a test environment configuration.

**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create at least 6 variables
- Print them in a formatted way

**Variables to create:**
1. Application URL (constant)
2. Application name (constant)
3. Environment name (QA, Staging, Production)
4. Current tester name
5. Test execution date
6. Is automation enabled? (we'll use text for now) */

const applicationUrl = 'www.google.com';
const applicatioName = 'Google pay';
let environmentName = 'Staging';
let currentTester = 'Rohit Savale';
let testExecutionDate = '21-09-2026';
let automationEnabled = 'Yes';

console.log("=====================================");
console.log("   TEST ENVIRONMENT CONFIGURATION"    )
console.log("=====================================");
console.log("");

console.log("Applicatoin URL: ", applicationUrl);
console.log("Application Name: ", applicatioName);
console.log("Environment: ", environmentName);
console.log("Current Tester Name Is: ", currentTester);
console.log("Test Execution Date: ", testExecutionDate);
console.log("Is Automation enabled?: ", automationEnabled);

console.log("");
console.log("===============================================")
console.log("ABOVE IS THE TEST ENVIRONMENT CONFIGURATION")
console.log("===============================================")