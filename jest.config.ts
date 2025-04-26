import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/imageMock.js",
    "^next/headers$": "<rootDir>/__mocks__/next/headers.ts",
    "^next/image$": "<rootDir>/__mocks__/next/image.tsx",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  transformIgnorePatterns: ["node_modules/(?!(your-esm-package|another-esm)/)"],

  globals: {
    "ts-jest": {
      useESM: false,
    },
  },
};

export default config;
