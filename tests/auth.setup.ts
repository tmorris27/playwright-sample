import { test as setup } from "@playwright/test";
import { expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page, baseURL }) => {
  if (!baseURL) throw new Error("No baseURL defined");
  await page.goto(baseURL, { waitUntil: "domcontentloaded" });
  if (process.env.ENV === "BASIC_AUTH") {
    await expect (page.getByRole('heading',{name:"Basic Auth"})).toBeVisible();
}
     await page.context().storageState({ path: authFile });
});

  