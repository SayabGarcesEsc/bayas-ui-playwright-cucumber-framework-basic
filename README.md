# 🎭 Bayas UI Playwright Cucumber Framework

[![Playwright Version](https://shields.io)](https://playwright.dev)
[![TypeScript](https://shields.io)](https://typescriptlang.org)
[![Cucumber UI](https://shields.io)](https://cucumber.io)
[![License: MIT](https://shields.io)](https://opensource.org)

Highly scalable **BDD (Behavior-Driven Development) automation framework** built for UI testing. This repository combines the speed of **Playwright**, the human-readable syntax of **Cucumber**, and the type safety of **TypeScript**.

## 🚀 Key Features

*   **BDD Integration:** Write clean, human-readable feature files using Gherkin syntax.
*   **Robust Reporting:** Automatic generation of detailed HTML and Cucumber JSON test reports.
*   **Browser Support:** Testing on Chromium out of the box.

---

## 📂 Project Architecture

```text
├── features/          # Gherkin .feature files (Business logic)
│   ├── steps/             # Step definitions mapping Gherkin to code
├── test-results/          # Screenshots, videos, and trace logs
├── playwright.config.ts   # Core Playwright configurations
└── README.md
```

---

## 🛠️ Prerequisites

Before setting up the project, ensure you have the following installed:
*   [Node.js](https://nodejs.org) (v24.20.0 or higher)
*   [npm](https://npmjs.com) (v11.19.0 or higher)

---

## 🏁 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com
cd bayas-ui-playwright-cucumber-framework-basic
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install chrome
```

---

## 🏃 Running Tests

Execution commands are centralized via npm scripts.

### Run All Tests
```bash
npm run test:bdd
```

---

## 📊 Reporting & Debugging

### Generating Reports
After a test run finishes, a comprehensive HTML report is auto-generated inside the `reports/` folder. To view the local execution dashboard:
```bash
npx playwright show-report
```

---

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
