import { describe, it, expect } from "vitest";
import { getContactSchema } from "./contact";

describe("getContactSchema", () => {
  const schema = getContactSchema("en");

  it("accepts valid form data", () => {
    const result = schema.safeParse({
      name: "Mina Gharzi",
      email: "mina@example.com",
      message: "Hello, I would like to discuss a project with you.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a name shorter than 2 characters", () => {
    const result = schema.safeParse({
      name: "M",
      email: "mina@example.com",
      message: "Hello, I would like to discuss a project with you.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email address", () => {
    const result = schema.safeParse({
      name: "Mina Gharzi",
      email: "not-an-email",
      message: "Hello, I would like to discuss a project with you.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a message shorter than 10 characters", () => {
    const result = schema.safeParse({
      name: "Mina Gharzi",
      email: "mina@example.com",
      message: "short",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a message longer than 1000 characters", () => {
    const result = schema.safeParse({
      name: "Mina Gharzi",
      email: "mina@example.com",
      message: "a".repeat(1001),
    });
    expect(result.success).toBe(false);
  });

  it("returns Persian error messages when language is fa", () => {
    const faSchema = getContactSchema("fa");
    const result = faSchema.safeParse({
      name: "M",
      email: "mina@example.com",
      message: "Hello, I would like to discuss a project with you.",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("نام");
    }
  });
});