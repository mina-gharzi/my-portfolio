"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const serverSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(data: unknown): Promise<ActionResult> {
  const parsed = serverSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "minagharzipv@gmail.com",
      replyTo: email,
      subject: `New message from ${name} (Portfolio)`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send message." };
  }
}
