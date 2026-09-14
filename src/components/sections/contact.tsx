"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  getContactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { sendContactEmail } from "@/app/actions/contact";
import { FadeIn } from "@/components/ui/fade-in";

const content = {
  en: {
    eyebrow: "04",
    title: "Contact",
    subtitle:
      "I'm currently open to new opportunities and freelance projects. Feel free to reach out.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    sending: "Sending...",
    success: "Thanks! Your message has been sent — I'll get back to you soon.",
    error: "Something went wrong. Please try again or email me directly.",
  },
  fa: {
    eyebrow: "۰۴",
    title: "تماس",
    subtitle:
      "در حال حاضر برای فرصت‌های شغلی و پروژه‌های فریلنسری آماده‌ام. خوشحال می‌شم باهام در ارتباط باشی.",
    name: "نام",
    email: "ایمیل",
    message: "پیام",
    submit: "ارسال پیام",
    sending: "در حال ارسال...",
    success: "ممنون! پیامت ارسال شد — به‌زودی جواب می‌دم.",
    error: "مشکلی پیش اومد. دوباره تلاش کن یا مستقیم برام ایمیل بزن.",
  },
};

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { language } = useLanguage();
  const t = content[language];
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(getContactSchema(language)),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    const result = await sendContactEmail(data);

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container className="max-w-2xl">
        <FadeIn>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-sm font-mono text-accent">{t.eyebrow}</span>
            <h2 className="text-2xl font-bold text-text">{t.title}</h2>
          </div>
          <p className="text-[15px] text-text-muted mb-10">{t.subtitle}</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-text mb-2"
              >
                {t.name}
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-4 py-2.5 bg-bg-secondary border border-border rounded-button text-text focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              {errors.name && (
                <p className="text-sm text-red-400 mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-text mb-2"
              >
                {t.email}
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-2.5 bg-bg-secondary border border-border rounded-button text-text focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-text mb-2"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full px-4 py-2.5 bg-bg-secondary border border-border rounded-button text-text resize-none focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-1.5">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "loading"}
              className="self-start mt-2"
            >
              {status === "loading" && (
                <Loader2 size={18} className="me-2 animate-spin" />
              )}
              {status === "loading" ? t.sending : t.submit}
            </Button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle2 size={16} />
                {t.success}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <XCircle size={16} />
                {t.error}
              </p>
            )}
          </form>
        </FadeIn>
      </Container>
    </section>
  );
}
