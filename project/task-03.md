# Task 03

## Goals

### Step 1: Set Up and Write Your First Test

1. **Establish the Initial Test Structure**

   - Begin by deleting any sample test files, like example.spec.ts.
   - Create a new test file named `login.spec.ts`. Use the following command in the terminal:

   ```bash
   cd tests
   touch login.spec.ts # Command to create a new file in the terminal
   ```

2. **Write the First Test Case**

   - **I want you to explain me each line of code using comments "//example of comment"!!!**
   - At the top of the file, import necessary libraries to set up the test environment:

   ```ts
   import { test, expect } from "@playwright/test";
   ```

   - Use the following basic test structure in Playwright:

   ```ts
   test("basic test", async ({ page }) => {
     // Place your test steps here
   });
   ```

3. **Test Requirements**
   - The goal of this test is to:
     - The name of the test must be "should access the login page"
     - Access the [Sauce Demo Page](https://www.saucedemo.com/)
     - Assert that the page title is "Swag Labs"
