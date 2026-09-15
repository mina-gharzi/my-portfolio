import { test, expect } from "@playwright/test";

test.describe("Sidebar navigation", () => {
  test("clicking each nav link scrolls to the corresponding section", async ({
    page,
  }) => {
    await page.goto("/");

    const sections = ["about", "skills", "projects", "contact"];

    for (const id of sections) {
      await page.locator(`a[href="#${id}"]`).first().click();
      await expect(page.locator(`#${id}`)).toBeInViewport({ ratio: 0.2 });
    }
  });
});