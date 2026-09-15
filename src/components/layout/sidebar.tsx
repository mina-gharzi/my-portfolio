"use client";

import { Mail, Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/context/language-context";
import { navItems, siteContent } from "@/config/nav";

export function Sidebar() {
  const { language, toggleLanguage } = useLanguage();
  const t = siteContent[language];

  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:top-0 lg:inset-s-0 lg:h-screen lg:w-90 lg:p-10">
      <div>
        <p className="text-3xl font-bold text-text mb-2">{t.name}</p>
        <p className="text-lg text-text-muted mb-4">{t.title}</p>

        <nav>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-bold uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
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
            href="mailto:minagharzipv@gmail.com"
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
    </aside>
  );
}
