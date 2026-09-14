"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { siteContent } from "@/config/nav";

type Language = "en" | "fa";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === "fa" ? "rtl" : "ltr";
    document.body.classList.remove("font-en", "font-fa");
    document.body.classList.add(language === "fa" ? "font-fa" : "font-en");

    // Cookie is the source of truth read by the server on the next request
    document.cookie = `language=${language}; path=/; max-age=31536000; SameSite=Lax`;
    // Keep localStorage too, harmless fallback / for any client-only reads
    localStorage.setItem("language", language);

    // Keep <title> and meta description in sync with the active language
    const t = siteContent[language];
    document.title = `${t.name} — ${t.title}`;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", t.description);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", `${t.name} — ${t.title}`);
    }

    const ogDescriptionTag = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute("content", t.description);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, dir: language === "fa" ? "rtl" : "ltr" }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}