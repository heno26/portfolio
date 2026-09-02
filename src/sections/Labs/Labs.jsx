import { Network, Radar, ScanSearch, ShieldCheck, Siren } from "lucide-react";
import { labCategories } from "../../data/labs";
import SectionHeading from "../../components/ui/SectionHeading";
import StatusChip from "../../components/common/StatusChip";
import "./Labs.css";

const ICONS = {
  "network-engineering": Network,
  "network-traffic-analysis": Radar,
  "network-reconnaissance": ScanSearch,
  "soc-investigation": ShieldCheck,
  "incident-response": Siren,
};

export default function Labs() {
  return (
    <section id="labs" className="section section-alt" aria-labelledby="labs-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Cybersecurity & Networking Labs"
          title="Labs & Practical Work"
          id="labs-heading"
          subtitle="Space to grow toward a SOC / Incident Response role. Anything not yet completed is labeled honestly rather than presented as finished work."
        />

        <div className="labs-grid">
          {labCategories.map((lab) => {
            const Icon = ICONS[lab.id];
            return (
              <article key={lab.id} className="lab-card">
                <div className="lab-card-head">
                  <div className="lab-icon" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <StatusChip status={lab.status} />
                </div>
                <h3 className="lab-title">{lab.title}</h3>
                <p className="lab-desc">{lab.description}</p>
                <ul className="lab-items">
                  {lab.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
