"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { projects } from "@/config/projects";

const content = {
  en: { eyebrow: "03", title: "Projects" },
  fa: { eyebrow: "۰۳", title: "پروژه‌ها" },
};

const MAX_VISIBLE_TAGS = 5;

export function Projects() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="flex items-baseline gap-3 mb-14">
            <span className="text-sm font-mono text-accent">{t.eyebrow}</span>
            <h2 className="text-2xl font-bold text-text">{t.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const visibleTags = project.tech.slice(0, MAX_VISIBLE_TAGS);
              const hiddenCount = project.tech.length - visibleTags.length;

              return (
                <Card
                  key={project.id}
                  className="p-0 overflow-hidden flex flex-col"
                >
                  <div className="aspect-video bg-bg border-b border-border overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-text-muted/40 text-sm">
                        {project.name}
                      </div>
                    )}
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <a href={`/projects/${project.id}`} className="block">
                      <h3 className="text-lg md:text-xl font-bold text-text mb-2 hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                    </a>

                    <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {visibleTags.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                      {hiddenCount > 0 && (
                        <Badge className="text-text-muted/70">
                          +{hiddenCount}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
                      >
                        <SiGithub size={16} />
                        {language === "en" ? "Code" : "کد"}
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink size={16} />
                          {language === "en" ? "Live Demo" : "دمو"}
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}