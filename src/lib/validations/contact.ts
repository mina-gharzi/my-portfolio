import { z } from "zod";

type Language = "en" | "fa";

const messages = {
  en: {
    nameRequired: "Name must be at least 2 characters",
    emailInvalid: "Please enter a valid email address",
    messageRequired: "Message must be at least 10 characters",
    messageMax: "Message must be under 1000 characters",
  },
  fa: {
    nameRequired: "نام باید حداقل ۲ حرف باشد",
    emailInvalid: "لطفاً یک ایمیل معتبر وارد کنید",
    messageRequired: "پیام باید حداقل ۱۰ حرف باشد",
    messageMax: "پیام باید کمتر از ۱۰۰۰ حرف باشد",
  },
};

export function getContactSchema(language: Language) {
  const m = messages[language];

  return z.object({
    name: z.string().min(2, m.nameRequired),
    email: z.string().email(m.emailInvalid),
    message: z.string().min(10, m.messageRequired).max(1000, m.messageMax),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;