Project Structure

project/
├── playwright.config.ts           # Playwright configuration
├── locators/
│   ├── signupPage.ts             # Locators for the Signup Page
├── api/
│   ├── endpoints.ts              # API endpoints configuration
├── tests/
│   ├── signup.spec.ts            # Tests for automating the signup process
│   ├── apiValidation.spec.ts     # Tests for API validation and data retrieval
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation

Tests Included

Signup Process Automation

File: tests/signup.spec.ts

Purpose: Automates the end-to-end signup process for the AEMET portal.

Coverage:

Navigate to the signup page and fill in the form.

Handle manual reCAPTCHA (requires user intervention).

Retrieve the API key from the user’s email inbox.

Validate successful signup and API key retrieval.

Exception Handling:

Handles missing API keys or invalid credentials.

API Key and Data Validation

File: tests/apiValidation.spec.ts

Purpose: Validates the functionality of the retrieved API key.

Coverage:

Uses the API key to fetch data from the AEMET endpoint.

Validates:

HTTP status codes.

Response structure (fields like temp, pres, vel).

Correct formatting of the datetime field.

Implements parameterized tests for varying input combinations.

How to Launch Tests

Prerequisites

Node.js and npm:
Ensure Node.js and npm are installed. You can verify by running:

node -v
npm -v

Install Dependencies:
Run the following command in the project root:

npm install

Running the Tests

Run All Tests:
Execute the following command to run all tests:

npx playwright test

Run Specific Test:
To run a specific test file (e.g., signup.spec.ts):

npx playwright test tests/signup.spec.ts

Headed Mode (Optional):
To run tests in a visible browser:

npx playwright test --headed

Additional Notes

Trace Viewer:
For debugging failed tests, Playwright’s trace viewer is enabled on first retry. After running tests, you can view traces with:

npx playwright show-trace trace.zip

Environment Variables:
If using dynamic credentials or API keys, consider setting them via .env files or environment variables.

Key Features and Best Practices

Modularity: Locators and endpoints are organized into dedicated files for better reusability.

Error Handling: Includes exception handling for missing API keys, invalid responses, and unexpected failures.

Logging: Logs key steps to aid in debugging and analysis.

Feel free to reach out if you have any issues or suggestions for improvement!