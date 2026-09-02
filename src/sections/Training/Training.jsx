import { training, journey, currentlyLearning } from "../../data/education";
import SectionHeading from "../../components/ui/SectionHeading";
import StatusChip from "../../components/common/StatusChip";
import "./Training.css";

export default function Training() {
  return (
    <section className="section section-alt" aria-labelledby="training-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Training & Technical Journey"
          title="Training, Certifications & Growth"
          id="training-heading"
          subtitle="Structured training in progress alongside university coursework."
        />

        <div className="training-list">
          {training.map((item) => (
            <div key={item.id} className="training-item">
              <div className="training-item-head">
                <span className="training-org mono">{item.org}</span>
                <StatusChip status={item.status} />
              </div>
              <h3 className="training-title">{item.title}</h3>
              <p className="training-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="journey-block">
          <h3 className="journey-title">Technical Journey</h3>
          <ol className="journey-list">
            {journey.map((step, i) => (
              <li key={step.label}>
                <span className="journey-index mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="journey-label">{step.label}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="learning-block">
          <h3 className="learning-title">Currently Learning</h3>
          <div className="learning-chips">
            {currentlyLearning.map((item) => (
              <span key={item.label} className="learning-chip">
                {item.label}
                <StatusChip status={item.status} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
