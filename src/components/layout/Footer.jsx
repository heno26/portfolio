import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/icons";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-title">{profile.title}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
            <Mail size={16} aria-hidden="true" />
            <span>{profile.email}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="footer-copy">© {year} {profile.name}. Built with React &amp; Vite.</p>
      </div>
    </footer>
  );
}
