import { skillCategories } from "../../data/skills";
import SectionHeading from "../../components/ui/SectionHeading";
import Badge from "../../components/ui/Badge";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Skills & Tools"
          id="skills-heading"
          subtitle="Grouped by area, not scored — tools tagged “Learning / Labs” are actively being built up through coursework and hands-on practice rather than production use."
        />

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skills-category">
              <h3 className="skills-category-title">{category.label}</h3>
              <div className="skills-chips">
                {category.skills.map((skill) => (
                  <span key={skill.name} className={`skill-chip ${skill.status === "learning" ? "is-learning" : ""}`}>
                    {skill.name}
                    {skill.status === "learning" && <Badge tone="warning">Learning</Badge>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
