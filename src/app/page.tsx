import { Container } from "@/components/layout/container";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Home() {
  return (
    <>
      {sections.map((id) => (
        <section key={id} id={id} className="min-h-screen flex items-center">
          <Container>
            <h2 className="text-4xl font-bold text-text capitalize">{id}</h2>
          </Container>
        </section>
      ))}
    </>
  );
}