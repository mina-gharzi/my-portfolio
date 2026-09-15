import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test("shows validation errors for empty submission", async ({ page }) => {
    await page.goto("/#contact");
    const form = page.locator("#contact");
    await form.scrollIntoViewIfNeeded();

    await form.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText(/at least 2 characters/i)).toBeVisible();
    await expect(page.getByText(/valid email/i)).toBeVisible();
    await expect(page.getByText(/at least 10 characters/i)).toBeVisible();
  });

  test("shows an error for an invalid email format", async ({ page }) => {
    await page.goto("/#contact");
    const form = page.locator("#contact");
    await form.scrollIntoViewIfNeeded();

    await form.getByLabel(/^name$/i).fill("Mina Gharzi");
    await form.getByLabel(/^email$/i).fill("not-an-email");
    await form
      .getByLabel(/^message$/i)
      .fill("This is a valid test message for the contact form.");

    await form.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText(/valid email/i)).toBeVisible();
  });

  test("accepts valid input without validation errors", async ({ page }) => {
    await page.goto("/#contact");
    const form = page.locator("#contact");
    await form.scrollIntoViewIfNeeded();

    await form.getByLabel(/^name$/i).fill("Mina Gharzi");
    await form.getByLabel(/^email$/i).fill("test@example.com");
    await form
      .getByLabel(/^message$/i)
      .fill("This is a valid test message for the contact form.");

    // We only assert that client-side validation passes (no error text appears)
    // right after submit is triggered — the real network call to Resend is not
    // exercised here to avoid sending live emails during test runs.
    await form.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText(/at least 2 characters/i)).not.toBeVisible();
    await expect(page.getByText(/at least 10 characters/i)).not.toBeVisible();
  });
});