// status: "available" | "in-progress" | "planned"
export const labCategories = [
  {
    id: "network-engineering",
    title: "Network Engineering",
    status: "available",
    description:
      "Cisco Packet Tracer labs covering VLANs, routing, DHCP, DNS, and NAT — the practical foundation behind the networking skills listed above.",
    items: ["VLAN & trunking design", "Static routing", "DHCP & DNS services", "NAT / PAT configuration"],
  },
  {
    id: "network-traffic-analysis",
    title: "Network Traffic Analysis",
    status: "planned",
    description:
      "Packet capture and protocol inspection with Wireshark to practice recognizing normal vs. suspicious traffic patterns.",
    items: ["Wireshark packet capture", "Protocol inspection", "Suspicious communication analysis"],
  },
  {
    id: "network-reconnaissance",
    title: "Network Reconnaissance",
    status: "planned",
    description:
      "Nmap-based scanning labs to practice host and service discovery in a controlled lab environment.",
    items: ["Nmap scanning", "Port / service discovery", "Recon documentation"],
  },
  {
    id: "soc-investigation",
    title: "SOC Investigation",
    status: "planned",
    description:
      "Structured alert triage exercises: reviewing IPs, ports, and timestamps, then documenting and classifying findings.",
    items: ["Alert triage", "IP / port / timestamp review", "Evidence documentation & classification"],
  },
  {
    id: "incident-response",
    title: "Incident Response",
    status: "planned",
    description:
      "End-to-end incident-response practice: detection, triage, containment reasoning, evidence collection, and lessons learned.",
    items: ["Detection & triage", "Containment reasoning", "Evidence collection", "Lessons learned"],
  },
];
