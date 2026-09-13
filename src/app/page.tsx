"use client";
import { useLanguage } from "@/context/language-context";

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">
        {language === "fa" ? "سلام دنیا" : "Hello World"}
      </h1>
      <button onClick={toggleLanguage} className="px-4 py-2 border rounded">
        Switch Language
      </button>
    </main>
  );
}
