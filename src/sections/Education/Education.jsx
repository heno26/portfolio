import { GraduationCap } from "lucide-react";
import { education } from "../../data/education";
import SectionHeading from "../../components/ui/SectionHeading";
import Badge from "../../components/ui/Badge";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic Background" id="education-heading" />

        <div className="education-card">
          <div className="education-icon" aria-hidden="true">
            <GraduationCap size={22} />
          </div>
          <div className="education-body">
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-institution">{education.institution}</p>
            <div className="education-meta">
              <Badge tone="accent">Expected Graduation: {education.expectedGraduation}</Badge>
              <Badge tone="warning">{education.status}</Badge>
            </div>
            <div className="education-coursework">
              <h4>Relevant Coursework</h4>
              <div className="coursework-tags">
                {education.coursework.map((course) => (
                  <span key={course} className="coursework-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
