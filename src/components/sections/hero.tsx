"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/context/language-context";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const content = {
  en: {
    badge: "Available for work",

    name: "Mina Gharzi",
    subtitle: "Building clean, responsive, and user-focused web experiences.",
    location: "Sabzevar, Iran — Open to remote",
    cta: "View Projects",
    resume: "Resume",
    scroll: "Scroll",
  },
  fa: {
    badge: "آماده‌ی همکاری",

    name: "مینا قارزی",
    subtitle: "ساخت تجربه‌های وب تمیز، واکنش‌گرا و کاربرمحور.",
    location: "خراسان رضوی ایران — آماده‌ی همکاری ریموت",
    cta: "مشاهده‌ی پروژه‌ها",
    resume: "رزومه",
    scroll: "اسکرول",
  },
};

const roles = {
  en: ["Frontend Developer", "React Developer", "UI Engineer"],
  fa: ["توسعه‌دهنده‌ی Frontend", "توسعه‌دهنده‌ی React", "مهندس رابط کاربری"],
};

const socials = [
  { icon: SiGithub, href: "https://github.com/mina-gharzi", label: "GitHub" },
  { icon: Mail, href: "mailto:Minagharzipv@gmail.com", label: "Email" },
];

export function Hero() {
  const { language } = useLanguage();
  const t = content[language];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
    setRoleIndex(0);
  }, [language]);

  useEffect(() => {
    const currentRole = roles[language][roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles[language].length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1),
        );
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, language]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-24"
    >
      <Container>
        <div className="max-w-2xl">
          {/* Availability badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2 mb-8 transition-all duration-500",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2",
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
              {t.badge}
            </span>
          </div>

          {/* Name */}
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 leading-tight transition-all duration-500 delay-150",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            {t.name}
          </h1>

          {/* Typed role */}
          <div
            className={cn(
              "h-9 md:h-10 flex items-center mb-6 transition-all duration-500 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            <span className="text-xl md:text-2xl font-bold text-text-muted">
              {displayText}
            </span>
            <span className="w-0.5 h-6 md:h-7 bg-accent ms-1 animate-caret" />
          </div>
          {/* Subtitle */}
          <p
            className={cn(
              "text-sm md:text-base text-text-muted leading-relaxed mb-3 transition-all duration-500 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            {t.subtitle}
          </p>
          {/* Location */}
          <p
            className={cn(
              "flex items-center gap-2 text-sm text-text-muted/70 mb-8 transition-all duration-500 delay-350",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            <MapPin size={14} />
            {t.location}
          </p>

          {/* CTA + Socials */}
          <div
            className={cn(
              "flex flex-wrap items-center gap-4 transition-all duration-500 delay-400",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            <ButtonLink href="#projects" variant="primary" size="lg">
              {t.cta}
            </ButtonLink>

            <ButtonLink
              href="/resume.pdf"
              download
              variant="secondary"
              size="lg"
            >
              <Download size={18} className="me-2 inline-block" />
              {t.resume}
            </ButtonLink>

            <div className="flex items-center gap-1 rounded-full border border-border p-1.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-text-muted hover:text-accent hover:bg-bg-secondary transition-colors duration-300 rounded-full"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className={cn(
          "hidden md:flex flex-col items-center gap-2 absolute bottom-10 inset-s-1/2 -translate-x-1/2 rtl:translate-x-1/2 text-text-muted/50 hover:text-accent transition-all duration-500 delay-500",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="text-[10px] uppercase tracking-widest">
          {t.scroll}
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
