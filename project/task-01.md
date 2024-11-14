# Task 01

## Goals

### Step 1: Create a New Playwright Project and Push it to Github

1. **Initialize the Project**  
   Clone the github repository

   ```bash
   git clone git@github.com:QA-Tipocos/qa-automation-project.git
   cd qa-automation-project
   ```

   Set up a new Node.js project and install Playwright as a dependency.

   ```bash
    npm init -y
    npm install @playwright/test
   ```

2. **Configure Playwright**
   Run the Playwright CLI to set up the configuration.

   ```bash
   npx playwright install
   ```

3. **Create a Basic Test**
   Playwright will download the browsers needed as well as create the following files.

   ```bash
   playwright.config.ts;
   package.json;
   package-lock.json;
   tests/example.spec.ts;
   tests-examples/demo-todo-app.spec.ts;
   ```

   The tests folder contains a basic example test to help you get started with testing.
   For a more detailed example check out the tests-examples folder which contains tests written to test a todo app.

   Running the Example Test

   By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the playwright.config file.
   Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

   ```bash
   npx playwright test #in headless mode
   ```

   ```bash
   npx playwright test --headed #in headed mode
   ```

4. **Open a Pull Request (PR) on Github**
   Commit all changes with a clear message, such as "feat: add basic test for"

   ```bash
   git add .
   git commit -m "feat: add basic test for example.com"
   ```

   Push to GitHub and Open a PR

   ```bash
   git push
   ```
