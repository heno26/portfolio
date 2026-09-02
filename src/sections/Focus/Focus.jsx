import { Code2, Radar, ShieldAlert, Waypoints } from "lucide-react";
import { focusAreas } from "../../data/focus";
import SectionHeading from "../../components/ui/SectionHeading";
import "./Focus.css";

const ICONS = {
  "security-operations": Radar,
  "incident-response": ShieldAlert,
  "networking-security": Waypoints,
  "technical-development": Code2,
};

export default function Focus() {
  return (
    <section className="section section-alt" aria-labelledby="focus-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Career Focus"
          title="Where I'm building depth"
          id="focus-heading"
          subtitle="Security operations and networking are the primary target. Software development is a complementary strength."
        />

        <div className="focus-grid">
          {focusAreas.map((area) => {
            const Icon = ICONS[area.id];
            return (
              <article
                key={area.id}
                className={`focus-card ${area.primary ? "focus-card-primary" : ""}`}
              >
                <div className="focus-icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3 className="focus-title">{area.title}</h3>
                <p className="focus-desc">{area.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
