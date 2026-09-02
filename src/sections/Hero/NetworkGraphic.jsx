// A restrained, decorative network-topology motif for the hero: nodes
// connected by telemetry-style lines with a slow pulse. Purely
// decorative, so it is hidden from assistive technology.
export default function NetworkGraphic() {
  const nodes = [
    { id: "core", x: 260, y: 200, r: 7, label: "SOC" },
    { id: "n1", x: 90, y: 90, r: 4 },
    { id: "n2", x: 60, y: 220, r: 4 },
    { id: "n3", x: 140, y: 320, r: 4 },
    { id: "n4", x: 320, y: 60, r: 4 },
    { id: "n5", x: 430, y: 130, r: 4 },
    { id: "n6", x: 440, y: 260, r: 4 },
    { id: "n7", x: 350, y: 340, r: 4 },
    { id: "n8", x: 180, y: 130, r: 3 },
  ];

  const links = [
    ["core", "n1"],
    ["core", "n2"],
    ["core", "n3"],
    ["core", "n4"],
    ["core", "n5"],
    ["core", "n6"],
    ["core", "n7"],
    ["n1", "n8"],
    ["n8", "core"],
    ["n4", "n5"],
    ["n6", "n7"],
  ];

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg
      className="network-graphic"
      viewBox="0 0 500 400"
      role="img"
      aria-label="Decorative illustration of a security operations network topology"
      focusable="false"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="network-links">
        {links.map(([a, b]) => {
          const from = byId[a];
          const to = byId[b];
          return (
            <line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--color-border-strong)"
              strokeWidth="1"
            />
          );
        })}
      </g>

      <circle cx={260} cy={200} r={46} fill="url(#coreGlow)" className="network-pulse" />

      <g className="network-nodes">
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.id === "core" ? "var(--color-accent)" : "var(--color-text-muted)"}
            className={node.id === "core" ? "network-node network-node-core" : "network-node"}
          />
        ))}
      </g>
    </svg>
  );
}
