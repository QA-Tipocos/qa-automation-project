// Import the necessary libraries from Playwright to set up and run tests
import { test, expect } from "@playwright/test";

// Define a new test named "should access the login page"
test("should access the login page", async ({ page }) => {
  // The 'page.goto()' command opens the URL of the website we want to test
  // In this case, we are opening the Sauce Demo login page
  await page.goto("https://www.saucedemo.com/");

  // Check if the page title is correct. 
  // 'expect' is used to make the check, and 'toBe' is used to compare with the expected value
  // The expected value is "Swag Labs", which is the login page title of Sauce Demo
  await expect(page).toHaveTitle("Swag Labs");

  // After the check, the test will pass if the title matches the expected one
});

