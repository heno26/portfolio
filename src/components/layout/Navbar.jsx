import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/icons";
import { navLinks, profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";
import { getCvHref } from "../../utils/cv";
import Button from "../ui/Button";
import "./Navbar.css";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const cvHref = getCvHref();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" aria-label={`${profile.shortName} — Home`}>
          <span className="navbar-brand-mark" aria-hidden="true" />
          <span className="navbar-brand-text">Mohammed El-Henawi</span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          <ul>
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a href={link.href} aria-current={isActive ? "true" : undefined} className={isActive ? "is-active" : ""}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Mohammed El-Henawi on GitHub (opens in a new tab)"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Mohammed El-Henawi on LinkedIn (opens in a new tab)"
          >
            <LinkedinIcon size={18} />
          </a>
          <Button href={cvHref || undefined} external size="sm" disabled={!cvHref} className="navbar-cv">
            Download CV
          </Button>
        </div>

        <button
          type="button"
          className="icon-btn navbar-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          ref={toggleRef}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <nav aria-label="Mobile primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu-footer">
          <Button href={cvHref || undefined} external disabled={!cvHref} onClick={() => setOpen(false)}>
            Download CV
          </Button>
          <div className="mobile-menu-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
