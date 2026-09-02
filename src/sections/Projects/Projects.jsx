import { useMemo, useState } from "react";
import { projectCategories, projectProgression, projects } from "../../data/projects";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected Work"
          id="projects-heading"
          subtitle="From foundational JavaScript to a full-stack business platform and network engineering labs — each project builds toward the next."
        />

        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${activeCategory === category ? "is-active" : ""}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="project-empty">No projects in this category yet.</p>
        )}

        <div className="project-progression" aria-label="Project progression over time">
          <h3 className="progression-title">Progression</h3>
          <ol className="progression-list">
            {projectProgression.map((step) => (
              <li key={step.name}>
                <span className="progression-name">{step.name}</span>
                <span className="progression-note">{step.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
