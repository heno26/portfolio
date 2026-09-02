export default function SectionHeading({ eyebrow, title, subtitle, id }) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-heading" id={id}>
        {title}
      </h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  );
}
