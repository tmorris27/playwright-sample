import { defineConfig, devices } from '@playwright/test';
 import dotenv from 'dotenv';
 import path from 'path';
 
 dotenv.config({ path: "./utils/env/.env" });

let baseUrl: string = process.env.BASE_URL || "";
let environment = process.env.ENV || "default";
let username: string = "";
let password: string = "";

if (!baseUrl) {
  switch (environment) {
    case "PST":
      baseUrl = process.env.PST_BASE_URL || "";
      break;
    case "UQA":
      baseUrl = process.env.UQA_BASE_URL || "";
      break;
    case "BASIC_AUTH":
      baseUrl = process.env.BASIC_AUTH_BASE_URL || "";
      username = process.env.BASIC_AUTH_USERNAME || "";
      password = process.env.BASIC_AUTH_PASSWORD || "";
      break;
     default:
      baseUrl = process.env.PROD_BASE_URL || "";
      environment = "default";
  }

  if (!baseUrl) {
    throw new Error(`No URL configured for environment '${environment}'`);
  }
}


/**
 * See https://playwright.dev/docs/test-configuration.
 * 
 */
const isProd =
  environment === "PROD" ||
  environment === "PST" ||
  environment === "UQA";

export default defineConfig({
  testDir: "./tests",
  snapshotPathTemplate: `{testDir}/_snapshots_/${process.env.ENV}/{testFilePath}/{projectName}/{arg}{ext}`,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 6,
  reporter: process.env.CI
    ? [
        ["json", { outputFile: "test-results/results.json" }],
        ["html", { open: "never" }],
      ]
    : [
        ["json", { outputFile: "test-results/results.json" }],
        ["html", { open: "on-failure" }],
      ],
  timeout: 120000,
  expect: {
    timeout: 120000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.3,
      threshold: 0.4,
    },
  },
  use: {
    baseURL: baseUrl,
    httpCredentials: {
      username: username,
      password: password,
    },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "lighthouse",
      testMatch: /.*\.lighthouse\.spec\.ts/,
      timeout: 60000,
      use: {},
    },
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
      testIgnore: /.*\.lighthouse\.spec\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        ...(isProd ? {} : { storageState: "playwright/.auth/user.json" }),
      },
      grepInvert: /@api/,
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      ...(isProd ? {} : { dependencies: ["setup"] }),
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        ...(isProd ? {} : { storageState: "playwright/.auth/user.json" }),
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      ...(isProd ? {} : { dependencies: ["setup"] }),
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        ...(isProd ? {} : { storageState: "playwright/.auth/user.json" }),
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      ...(isProd ? {} : { dependencies: ["setup"] }),
    },
    {
      name: "iPhone-15",
      use: {
        ...devices["iPhone 15"],
        ...(isProd ? {} : { storageState: "playwright/.auth/user.json" }),
      },
      testIgnore: /.*\.lighthouse\.spec\.ts/,
      ...(isProd ? {} : { dependencies: ["setup"] }),
    },
    {
      name: "Galaxy-S24",
      use: {
        ...devices["Galaxy S24"],
        channel: "chrome",
        ...(isProd ? {} : { storageState: "playwright/.auth/user.json" }),
      },
    },
  ],});
