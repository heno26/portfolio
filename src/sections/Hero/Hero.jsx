import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { getCvHref } from "../../utils/cv";
import Button from "../../components/ui/Button";
import { GithubIcon, LinkedinIcon } from "../../components/ui/icons";
import NetworkGraphic from "./NetworkGraphic";
import "./Hero.css";

export default function Hero() {
  const cvHref = getCvHref();

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={13} aria-hidden="true" /> {profile.location}
          </p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-summary">{profile.heroSummary}</p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href={cvHref || undefined} variant="secondary" disabled={!cvHref} external>
              Download CV
            </Button>
          </div>

          <div className="hero-meta">
            <span className="hero-status">
              <span className="status-dot" aria-hidden="true" />
              {profile.statusNote}
            </span>
            <div className="hero-social">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <NetworkGraphic />
        </div>
      </div>
    </section>
  );
}
