import Badge from "../ui/Badge";

const STATUS_MAP = {
  available: { label: "Available", tone: "positive" },
  completed: { label: "Completed", tone: "positive" },
  active: { label: "Active", tone: "accent" },
  "in-progress": { label: "In Progress", tone: "warning" },
  planned: { label: "Planned Lab", tone: "muted" },
  "coming-soon": { label: "Coming Soon", tone: "muted" },
  learning: { label: "Learning / Labs", tone: "warning" },
  practicing: null,
};

export default function StatusChip({ status }) {
  const config = STATUS_MAP[status];
  if (!config) return null;
  return <Badge tone={config.tone}>{config.label}</Badge>;
}
