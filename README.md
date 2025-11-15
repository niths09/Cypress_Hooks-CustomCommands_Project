## Cypress Hooks & Custom Commands Automation Exercise

## Overview

This project is an end-to-end test automation suite built using **Cypress**, focusing on **custom commands**, **hooks** and real-time user flows.
It automates the **Signup** and **Login** features of the PHPTravels website, including dynamic country selection and a manual CAPTCHA step.

The goal of this project is to demonstrate:

* Clean test structure using Cypress hooks
* Reusable custom commands
* Handling dynamic dropdowns
* Using XPath selectors
* Executing flows that require human interaction (CAPTCHA)

---

## Test Scenarios Covered

1️⃣ Signup Flow (Manual CAPTCHA Required)

* Navigate to **phptravels.net**
* Open "Customer" menu → Click **Signup**
* Enter First Name, Last Name
* Select Country using dynamic search-based dropdown
* Enter Phone, Email, Password
* Pause execution for manual CAPTCHA
* Resume and submit the signup form
* Verify success message: **“Your account has been created”**

---

2️⃣ Login Flow

* Navigate to **phptravels.net**
* Open "Customer" menu → Click **Login**
* Enter valid Username + Password
* Click Login

---

## Tech Stack

| Component     | Description               |
| ------------- | ------------------------- |
| **Framework** | Cypress                   |
| **Language**  | JavaScript (ES6)          |
| **Selectors** | XPath (via cypress-xpath) |
| **Browser**   | Chrome (default)          |
| **Approach**  | Hooks + Custom Commands   |

---

## Step-by-Step Setup

1️⃣ Create Project Folder

```
mkdir Cypress_PHPTravels_E2E
cd Cypress_PHPTravels_E2E
```

2️⃣ Initialize Node.js

```
npm init -y
```

3️⃣ Install Cypress & Dependencies

```
npm install cypress cypress-xpath --save-dev
```

4️⃣ Open Cypress for the First Time

```
npx cypress open
```

This will auto-generate the `cypress/` folder structure.

---

## Folder Structure

```
Cypress_PHPTravels_E2E/
│
├── cypress/
│   ├── e2e/
│   │   └── phptravels_test.cy.js         # Signup & login test cases
│   ├── support/
│   │   ├── commands.js                   # Reusable custom commands
│   │   └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Important Commands Implemented

✔ goToSignUp()

Navigates to the Signup page inside the Customer dropdown.

✔ signup(firstName, lastName, country, phone, email, pass)

Fills the entire signup form, including the dynamic “Country” dropdown:

```
cy.contains('span.text', countryName).scrollIntoView().click()
```

✔ goToLogin()

Navigates to Login page via Customer dropdown.

✔ loginform(email, password)

Fills login form and clicks Submit.

---

## Manual CAPTCHA Handling

This project includes a manual verification step:

```
cy.pause()
```

During pause:

1. Cypress freezes the test
2. You manually solve CAPTCHA
3. Press **Resume** button in Cypress Test Runner. Automation continues automatically.

---

## Running the Tests

Option 1 — Cypress Test Runner (GUI)

```
npx cypress open
```

Select `phptravels_test.cy.js` and run it.

---

Option 2 — Headless Mode

```
npx cypress run
```

---

## Notes

* CAPTCHA **cannot** be automated; manual solve is required
* The Signup test continues only after the button becomes enabled
* Dropdown selection works for all countries, not only India

---
