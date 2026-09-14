"use client";

import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";
const content = {
  en: {
    eyebrow: "02",
    title: "Skills",
  },
  fa: {
    eyebrow: "۰۲",
    title: "مهارت‌ها",
  },
};

const categories = [
  {
    title: { en: "Frontend", fa: "فرانت‌اند" },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
      "Vite",
    ],
  },
  {
    title: { en: "Backend & Database", fa: "بک‌اند و دیتابیس" },
    items: ["Next.js Server Actions", "Prisma ORM", "PostgreSQL", "Better Auth"],
  },
  {
    title: { en: "State & Data", fa: "مدیریت State و داده" },
    items: ["Zustand", "TanStack Query", "Context API"],
  },
  {
    title: { en: "Forms & Validation", fa: "فرم‌ها و اعتبارسنجی" },
    items: ["React Hook Form", "Zod"],
  },
  {
    title: { en: "Testing & Tools", fa: "تست و ابزارها" },
    items: ["Playwright", "Vitest", "Git", "GitHub", "ESLint"],
  },
];

export function Skills() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <FadeIn>
        <div className="flex items-baseline gap-3 mb-14">
          <span className="text-sm font-mono text-accent">{t.eyebrow}</span>
          <h2 className="text-2xl font-bold text-text">{t.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          {categories.map((category) => (
            <div key={category.title.en}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-text mb-4">
                {category.title[language]}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}