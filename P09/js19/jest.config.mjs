import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/pages/about/index.tsx",
    "src/pages/produk/index.tsx",
    "src/components/layout/navbar/index.tsx",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!**/__test__/**",
    "!**/*.d.ts",
    "!**/jest.config.mjs",
    "!**/next.config.*",
    "!**/types/**",
    "!**/views/**",
    "!**/pages/api/**",
  ],
};

export default createJestConfig(config);
