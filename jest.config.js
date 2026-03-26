// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Path to your Next.js app root directory
  dir: "./",
});

// Custom Jest configuration
const customJestConfig = {
  // Setup testing library & other setups
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Use jsdom environment for React/Next.js
  testEnvironment: "jest-environment-jsdom",

  // Coverage configuration
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Optional: collect coverage from specific files
  collectCoverageFrom: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "components/**/*.{js,ts,jsx,tsx}"
  ]
};

// Export the Jest config created by next/jest
module.exports = createJestConfig(customJestConfig);
