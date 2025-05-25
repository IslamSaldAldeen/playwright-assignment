# Playwright Assignment

This project is a test automation framework built using **Playwright** and **TypeScript** for testing the [SauceDemo website](https://www.saucedemo.com/).

## 🔍 Features Covered

The following functionalities have been implemented and tested:

- ✅ **Login feature**
- ✅ **Add to cart**
- ✅ **Remove from cart**
- ✅ **Sort Feature** (A–Z and Price High–Low)
- ✅ **Complete Checkout Process**

## 📁 Project Structure

├── pages/ # Page Object Models
│ ├── loginPage.ts
│ ├── inventoryPage.ts
│ ├── cartPage.ts
│ └── checkoutPage.ts
├── tests/ # Test Files
│ ├── login.spec.ts
│ ├── addToCart.spec.ts
│ ├── removeItem.spec.ts
│ ├── sort.spec.ts
│ └── checkout.spec.ts
├── .env # Environment variables (credentials)
├── .gitignore # Ignored files and folders
├── global-setup.ts # Reuse login state before tests
├── playwright.config.ts # Playwright configuration
└── README.md 

## ✅ Concepts Used

- Page Object Model (POM)
- Playwright Hooks
- Environment Variables (`.env`)
- Grouped and Parameterized Tests
- Login Reuse with `global-setup.ts`
- Multi-browser Testing (Chromium, Firefox)

## 🔧 How to Run

1. Install dependencies:

```bash
npm install
