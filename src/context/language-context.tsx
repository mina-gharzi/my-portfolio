"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "fa";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored === "en" || stored === "fa") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === "fa" ? "rtl" : "ltr";
    document.body.classList.remove("font-en", "font-fa");
    document.body.classList.add(language === "fa" ? "font-fa" : "font-en");
    localStorage.setItem("language", language);
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