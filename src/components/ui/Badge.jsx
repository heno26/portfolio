import "./Badge.css";

const TONE_CLASS = {
  neutral: "badge-neutral",
  accent: "badge-accent",
  positive: "badge-positive",
  warning: "badge-warning",
  muted: "badge-muted",
};

export default function Badge({ children, tone = "neutral", mono = false }) {
  return (
    <span className={`badge ${TONE_CLASS[tone] || TONE_CLASS.neutral} ${mono ? "mono" : ""}`}>
      {children}
    </span>
  );
}
