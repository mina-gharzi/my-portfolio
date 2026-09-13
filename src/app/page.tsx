import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <Container className="flex flex-col gap-6">
        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <Card>
          <h3 className="text-xl font-bold text-text mb-2">Jobino</h3>
          <p className="text-text-muted mb-4">
            Full-stack job board platform with role-based access.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Prisma</Badge>
          </div>
        </Card>
      </Container>
    </main>
  );
}