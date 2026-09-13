import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Container } from "@/components/layout/container";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      {/* Placeholder — بعداً با کامپوننت واقعی جایگزین می‌شه */}
      <section id="skills" className="min-h-screen flex items-center">
        <Container>
          <h2 className="text-4xl font-bold text-text">
            <Skills />
          </h2>
        </Container>
      </section>

      <section id="projects" className="min-h-screen flex items-center">
        <Container>
          <h2 className="text-4xl font-bold text-text">
            <Projects />
          </h2>
        </Container>
      </section>

      <section id="contact" className="min-h-screen flex items-center">
        <Container>
          <h2 className="text-4xl font-bold text-text">Contact</h2>
        </Container>
      </section>
    </>
  );
}
