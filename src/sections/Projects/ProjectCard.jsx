import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { GithubIcon } from "../../components/ui/icons";
import "./ProjectCard.css";

const PREVIEW_ICON_LABEL = {
  serviceflow: "SF",
  cyberwatch: "CW",
  "flowtask-pro": "FT",
  "network-labs": "NL",
};

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `case-study-${project.slug}`;

  return (
    <article className="project-card">
      <div className={`project-preview project-preview-${project.slug}`} aria-hidden="true">
        <span className="project-preview-mark">{PREVIEW_ICON_LABEL[project.slug]}</span>
        <div className="project-preview-lines">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="project-body">
        <div className="project-badges">
          {project.badges.map((badge) => (
            <Badge key={badge} tone="accent">
              {badge}
            </Badge>
          ))}
        </div>

        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-purpose">{project.purpose}</p>

        <ul className="project-highlights">
          {project.highlights.slice(0, 5).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <Badge key={tech} mono>
              {tech}
            </Badge>
          ))}
        </div>

        {project.demoModeNote && <p className="project-note">{project.demoModeNote}</p>}

        <div className="project-actions">
          {project.demoUrl ? (
            <Button href={project.demoUrl} external size="sm" icon={ExternalLink}>
              Live Demo
            </Button>
          ) : project.labDocsComingSoon ? (
            <Button size="sm" disabled>
              Lab documentation coming soon
            </Button>
          ) : null}

          {project.githubUrl && (
            <Button href={project.githubUrl} external size="sm" variant="secondary" icon={GithubIcon}>
              GitHub
            </Button>
          )}

          {project.caseStudy && (
            <button
              type="button"
              className="project-case-toggle"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Hide case study" : "View case study"}
              <ChevronDown size={16} aria-hidden="true" className={expanded ? "rotated" : ""} />
            </button>
          )}
        </div>

        {project.caseStudy && (
          <div id={panelId} className="project-case-study" hidden={!expanded}>
            <div className="case-block">
              <h4>Overview</h4>
              <p>{project.caseStudy.overview}</p>
            </div>
            <div className="case-block">
              <h4>Key Features</h4>
              <ul>
                {project.caseStudy.keyFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="case-block">
              <h4>Architecture</h4>
              <div className="architecture-flow">
                {project.caseStudy.architecture.map((step, i) => (
                  <span key={step}>
                    <span className="architecture-step">{step}</span>
                    {i < project.caseStudy.architecture.length - 1 && (
                      <span className="architecture-arrow" aria-hidden="true">
                        ↓
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="case-block">
              <h4>Engineering Challenges</h4>
              <ul>
                {project.caseStudy.engineeringChallenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="case-block">
              <h4>Testing</h4>
              <p>{project.caseStudy.testing}</p>
            </div>
            <div className="case-block case-block-note">
              <h4>Demo Note</h4>
              <p>{project.caseStudy.demoNote}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
