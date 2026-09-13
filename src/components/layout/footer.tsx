"use client";

import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/layout/container";

const footerText = {
  en: "Built with Next.js & Tailwind CSS.",
  fa: "ساخته‌شده با Next.js و Tailwind CSS.",
};

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-sm text-text-muted text-center">
          {footerText[language]}
        </p>
      </Container>
    </footer>
  );
}