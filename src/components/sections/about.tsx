"use client";

import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/ui/fade-in";

const content = {
  en: {
    eyebrow: "01",
    title: "About",
    paragraphs: [
      "I'm a Computer Engineering graduate from Islamic Azad University, and I've continued my professional path through my interest in programming and web development. My current focus is building modern, responsive, and reliable user interfaces with React, TypeScript, and Next.js.",

      "When I build projects, I care about more than just how the interface looks. Clean code, user experience, accessibility, state management, testing, and maintainability are all part of the process. I aim to use the foundation I've built through computer engineering to create products that are both technically solid and enjoyable to use.",
    ],
    focusTitle: "Currently focused on",
    focus: [
      "Building modern interfaces with React and TypeScript",
      "Creating scalable and maintainable applications with Next.js",
      "Designing responsive, accessible, and user-focused experiences",
    ],
    education: "B.Sc. in Computer Engineering — Islamic Azad University",
  },

  fa: {
    eyebrow: "۰۱",
    title: "درباره من",
    paragraphs: [
      "من فارغ‌التحصیل رشته‌ی مهندسی کامپیوتر از دانشگاه آزاد اسلامی هستم و مسیر حرفه‌ای خودم را با علاقه به برنامه‌نویسی و توسعه‌ی وب ادامه داده‌ام. در حال حاضر تمرکز اصلی من روی توسعه‌ی رابط‌های کاربری مدرن، واکنش‌گرا و قابل‌اعتماد با React، TypeScript و Next.js است.",

      "در پروژه‌هایی که می‌سازم، فقط به ظاهر رابط کاربری توجه نمی‌کنم؛ ساختار تمیز کد، تجربه‌ی کاربر، دسترسی‌پذیری، مدیریت state، تست و قابلیت نگهداری پروژه هم برایم اهمیت دارد. هدفم این است که از دانشی که در مهندسی کامپیوتر به دست آورده‌ام برای ساخت محصولاتی استفاده کنم که هم از نظر فنی درست باشند و هم تجربه‌ی خوبی برای کاربر ایجاد کنند.",
    ],
    focusTitle: "تمرکز فعلی من",
    focus: [
      "توسعه‌ی رابط‌های کاربری مدرن با React و TypeScript",
      "ساخت پروژه‌های مقیاس‌پذیر و قابل‌نگهداری با Next.js",
      "طراحی رابط‌های واکنش‌گرا، دسترس‌پذیر و کاربرمحور",
    ],
    education: "کارشناسی مهندسی کامپیوتر — دانشگاه آزاد اسلامی",
  },
};

export function About() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <FadeIn>
        <div className="grid md:grid-cols-[minmax(0,140px)_1fr] gap-8 md:gap-16">
          {/* Section label */}
          <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-2">
            <span className="text-sm font-mono text-accent">{t.eyebrow}</span>
            <h2 className="text-2xl font-bold text-text">{t.title}</h2>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            {t.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-text-muted leading-relaxed mb-5 last:mb-0"
              >
                {p}
              </p>
            ))}

            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text mb-4">
                {t.focusTitle}
              </h3>
              <ul className="flex flex-col gap-3">
                {t.focus.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-text-muted/70">🎓 {t.education}</p>
          </div>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}
