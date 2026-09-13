import { Container } from "@/components/layout/container";
import { Hero } from "@/components/sections/hero";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Home() {
  return (
    <>
      {sections.map((id) => (
        <section key={id} id={id} className="min-h-screen flex items-center">
          <Container>
            <h2 className="text-4xl font-bold text-text capitalize">
              <Hero />
            </h2>
          </Container>
        </section>
      ))}
    </>
  );
}
