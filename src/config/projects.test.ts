import { describe, expect, it } from "vitest";
import { projects } from "./projects";

function isHttpsUrl(value: string, host?: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (host === undefined || url.hostname === host);
  } catch {
    return false;
  }
}

describe("projects config", () => {
  it("has unique ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(projects.map((p) => [p.id, p] as const))("%s has real links", (_id, project) => {
    expect(isHttpsUrl(project.github, "github.com"), "github").toBe(true);
    if (project.live !== undefined) {
      expect(isHttpsUrl(project.live), "live").toBe(true);
    }
  });

  it.each(projects.map((p) => [p.id, p] as const))("%s has English and Persian text everywhere", (_id, project) => {
    const texts = [
      project.description,
      project.overview,
      project.problem,
      project.solution,
      project.challenges,
      project.learned,
      ...project.features,
      ...project.architecture,
    ];
    for (const text of texts) {
      expect(text.en.trim()).not.toBe("");
      expect(text.fa.trim()).not.toBe("");
    }
  });
});
