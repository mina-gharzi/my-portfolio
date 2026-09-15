import { test, expect } from "@playwright/test";

test.describe("Language toggle", () => {
  test("switches to Persian and applies RTL", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    await expect(html).toHaveAttribute("dir", "ltr");

    const languageButton = page
      .locator("aside")
      .getByRole("button", { name: /فارسی/i });
    await languageButton.click();

    await expect(html).toHaveAttribute("dir", "rtl");
    await expect(html).toHaveAttribute("lang", "fa");
  });

  test("persists the selected language after reload", async ({ page }) => {
    await page.goto("/");

    const languageButton = page
      .locator("aside")
      .getByRole("button", { name: /فارسی/i });
    await languageButton.click();
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");

    await page.reload();

    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("html")).toHaveAttribute("lang", "fa");
  });
});