import { describe, expect, it } from "vitest";
import { projects, projectCategories } from "../data/projects";

describe("projects data model", () => {
  it("every project has the required featured-card fields", () => {
    projects.forEach((project) => {
      expect(project.slug).toBeTruthy();
      expect(project.name).toBeTruthy();
      expect(project.purpose).toBeTruthy();
      expect(project.highlights.length).toBeGreaterThanOrEqual(3);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(projectCategories).toContain(project.category);
    });
  });

  it("every project exposes either a live demo, a GitHub link, or an honest coming-soon state", () => {
    projects.forEach((project) => {
      const hasLink = Boolean(project.demoUrl || project.githubUrl);
      const hasHonestFallback = Boolean(project.labDocsComingSoon);
      expect(hasLink || hasHonestFallback).toBe(true);
    });
  });

  it("does not fabricate a live demo link for the networking labs project", () => {
    const labs = projects.find((p) => p.slug === "network-labs");
    expect(labs.demoUrl).toBeNull();
    expect(labs.githubUrl).toBeNull();
    expect(labs.labDocsComingSoon).toBe(true);
  });

  it("slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
