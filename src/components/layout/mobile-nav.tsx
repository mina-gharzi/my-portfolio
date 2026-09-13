"use client";

import { useState } from "react";
import { Menu, X, Mail, Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/context/language-context";
import { navItems, siteContent } from "@/config/nav";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = siteContent[language];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Header نوار بالا فقط تو موبایل */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-5 py-4 bg-bg/95 backdrop-blur border-b border-border">
        <span className="font-bold text-text">{t.name}</span>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="text-text"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* پس‌زمینه‌ی تیره پشت پنل، فقط وقتی باز است */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* پنل کشویی */}
      <div
        className={`lg:hidden fixed top-0 start-0 z-50 h-dvh w-[80%] max-w-xs bg-bg-secondary border-e border-border p-8 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "ltr:-translate-x-full rtl:translate-x-full"
        }`}
      >
        <div>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-text-muted mb-8"
          >
            <X size={24} />
          </button>

          <h2 className="text-xl font-bold text-text mb-1">{t.name}</h2>
          <p className="text-sm text-text-muted mb-8">{t.title}</p>

          <nav>
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="text-base font-bold uppercase tracking-widest text-text hover:text-accent transition-colors"
                  >
                    {language === "fa" ? item.fa : item.en}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/mina-gharzi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="mailto:Minagharzipv@gmail.com"
              aria-label="Email"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors self-start"
          >
            <Globe size={16} />
            {language === "en" ? "فارسی" : "English"}
          </button>
        </div>
      </div>
    </>
  );
}
