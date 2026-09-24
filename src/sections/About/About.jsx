import { profile } from "../../data/profile";
import SectionHeading from "../../components/ui/SectionHeading";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container about-layout">
        <SectionHeading
          eyebrow="Profile"
          title="About"
          id="about-heading"
         subtitle="Cybersecurity and web development specialist delivering secure and practical digital solutions."
        />

        <div className="about-grid">
          <p className="about-body">{profile.aboutSummary}</p>

          <div className="about-skills">
            <h3 className="about-skills-title">Professional Strengths</h3>
            <ul className="about-skills-list">
              {profile.softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
