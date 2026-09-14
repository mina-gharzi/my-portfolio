"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Sandbox fallback for local/dev — replace by setting these env vars once
// a domain is verified in Resend (RESEND_FROM_EMAIL must be @ that domain).
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "minagharzipv@gmail.com";

// Simple in-memory rate limit: max 3 submissions per IP every 10 minutes.
// Good enough for a low-traffic portfolio site. Note: this resets whenever
// the server process restarts, and on serverless hosts (Vercel) each
// instance has its own memory, so it's a soft limit rather than a hard
// guarantee — fine here since the goal is just deterring casual spam.
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  submissions.set(ip, timestamps);
  return false;
}

const serverSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

interface ActionResult {
  success: boolean;
  errorCode?: "rate_limited" | "invalid" | "failed";
}

export async function sendContactEmail(data: unknown): Promise<ActionResult> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return { success: false, errorCode: "rate_limited" };
  }

  const parsed = serverSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, errorCode: "invalid" };
  }

  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name} (Portfolio)`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, errorCode: "failed" };
  }
}