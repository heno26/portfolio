import { Mail, Phone } from "lucide-react";
import { profile } from "../../data/profile";
import SectionHeading from "../../components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../../components/ui/icons";
import "./Contact.css";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "mohammed-el-henawi",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "heno26",
    href: profile.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          id="contact-heading"
          subtitle="Open to internship opportunities, technical collaboration, networking, and legitimate freelance inquiries."
        />

        <div className="contact-grid">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-card"
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={`${item.label}: ${item.value}${item.external ? " (opens in a new tab)" : ""}`}
            >
              <span className="contact-icon" aria-hidden="true">
                <item.icon size={18} />
              </span>
              <span>
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="contact-note">
          Prefer email over a contact form — reach out directly at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a> and I'll respond as soon as I can.
        </p>
      </div>
    </section>
  );
}
