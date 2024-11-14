# Task 03

## Goals

### Step 1: Initialize the Playwright project

- For some reason some files were not correctly generated when initializing the Playwright project. I removed the test folder so we can fix this.

```bash
cd qa-automation-project
npm init playwright@latest # This is the proper command to initialize the Playwright project
```

- You should select the following options

```bash
✔ Do you want to use TypeScript or JavaScript? · TypeScript # Select TypeScript
✔ Where to put your end-to-end tests? · tests # Select tests
✔ Add a GitHub Actions workflow? (y/N) · false # Select N
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true # Select Y
```

- Inside that directory, you can run several commands

```bash
npx playwright test # Runs the end-to-end tests.
npx playwright test --ui # Starts the interactive UI mode.
npx playwright test --project=chromium # Runs the tests only on Desktop Chrome.
npx playwright test example # Runs the tests in a specific file.
npx playwright test --debug # Runs the tests in debug mode.
npx playwright codegen # Auto generate tests with Codegen.
```

### Step 2: Set Up and Write Your First Test

1. **Establish the Initial Test Structure**

- Begin by deleting any sample test files, like example.spec.ts.
- Delete the test-examples folder and its content as well.
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
