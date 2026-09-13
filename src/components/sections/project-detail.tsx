"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import type { Project } from "@/config/projects";

const labels = {
  en: {
    back: "Back to projects",
    overview: "Overview",
    problem: "Problem",
    solution: "Solution",
    features: "Key Features",
    architecture: "Architecture & Technical Highlights",
    challenges: "Challenges",
    learned: "What I Learned",
    code: "View Code",
    live: "Live Demo",
  },
  fa: {
    back: "بازگشت به پروژه‌ها",
    overview: "معرفی کلی",
    problem: "مسئله",
    solution: "راه‌حل",
    features: "ویژگی‌های کلیدی",
    architecture: "معماری و نکات فنی",
    challenges: "چالش‌ها",
    learned: "چیزی که یاد گرفتم",
    code: "مشاهده‌ی کد",
    live: "دموی زنده",
  },
};

export function ProjectDetail({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = labels[language];

  return (
    <article className="py-24 md:py-32">
      <Container className="max-w-3xl">
        <ButtonLink
          href="/#projects"
          variant="ghost"
          size="sm"
          className="mb-10 -ms-3"
        >
          <ArrowLeft size={16} className="me-2 rtl:-scale-x-100" />
          {t.back}
        </ButtonLink>

        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
          {project.name}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <SiGithub size={16} />
            {t.code}
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={16} />
              {t.live}
            </a>
          )}
        </div>

        {project.image && (
          <div className="rounded-card overflow-hidden border border-border mb-16">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="flex flex-col gap-14">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              {t.overview}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {project.overview[language]}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              {t.problem}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {project.problem[language]}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              {t.solution}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {project.solution[language]}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              {t.features}
            </h2>
            <ul className="flex flex-col gap-3">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-muted leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {feature[language]}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              {t.architecture}
            </h2>
            <ul className="flex flex-col gap-3">
              {project.architecture.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-muted leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {point[language]}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              {t.challenges}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {project.challenges[language]}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              {t.learned}
            </h2>
            <p className="text-text-muted leading-relaxed">
              {project.learned[language]}
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}