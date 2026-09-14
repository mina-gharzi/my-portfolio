"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { projects } from "@/config/projects";
import Link from "next/link";
import Image from "next/image";

const content = {
  en: { eyebrow: "03", title: "Projects", featured: "Featured Project" },
  fa: { eyebrow: "۰۳", title: "پروژه‌ها", featured: "پروژه‌ی ویژه" },
};

export function Projects() {
  const { language } = useLanguage();
  const t = content[language];

  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="flex items-baseline gap-3 mb-14">
            <span className="text-sm font-mono text-accent">{t.eyebrow}</span>
            <h2 className="text-2xl font-bold text-text">{t.title}</h2>
          </div>

          {/* Featured project — large, full-width */}
          <Card className="p-0 overflow-hidden mb-8">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto bg-bg border-b md:border-b-0 md:border-e border-border overflow-hidden">
                {featuredProject.image ? (
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text-muted/40 text-sm">
                    {featuredProject.name}
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  {t.featured}
                </span>

                <Link href={`/projects/${featuredProject.id}`} className="block">
                  <h3 className="text-2xl md:text-3xl font-bold text-text mb-3 hover:text-accent transition-colors">
                    {featuredProject.name}
                  </h3>
                </Link>

                <p className="text-sm md:text-base text-text-muted leading-relaxed mb-5">
                  {featuredProject.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-2">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    <SiGithub size={16} />
                    {language === "en" ? "Code" : "کد"}
                  </a>
                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
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
            </div>
          </Card>

          {/* Other projects — compact grid, keeps priority order */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => {
              return (
                <Card
                  key={project.id}
                  className="p-0 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-video bg-bg border-b border-border overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-text-muted/40 text-sm">
                        {project.name}
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <Link href={`/projects/${project.id}`} className="block">
                      <h3 className="text-base font-bold text-text mb-2 hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-3">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} className="text-[11px] px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge className="text-[11px] px-2 py-0.5 text-text-muted/70">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mt-auto pt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
                      >
                        <SiGithub size={14} />
                        {language === "en" ? "Code" : "کد"}
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink size={14} />
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