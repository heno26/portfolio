export const education = {
  institution: "Arab Open University (AOU)",
  degree: "B.Sc. in Cybersecurity",
  expectedGraduation: "July 2028",
  status: "Entering Third Year",
  coursework: [
    "Network Security",
    "Computer Networking",
    "Programming",
    "Java",
    "Python",
    "Web Development",
  ],
};

// status: "in-progress" | "completed"
export const training = [
  {
    id: "depi",
    org: "DEPI",
    title: "Cyber Security Incident Response Analyst",
    status: "in-progress",
    description:
      "Structured training focused on cybersecurity incident-response concepts and practical security-analysis development.",
  },
  {
    id: "ccna",
    org: "Cisco",
    title: "CCNA",
    status: "in-progress",
    description:
      "Developing networking knowledge across routing, switching, IP addressing, network services, and troubleshooting.",
  },
  {
    id: "cisco-intro-cyber",
    org: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    status: "completed",
    description: "Foundational course covering core cybersecurity concepts and terminology.",
  },
  {
    id: "cisco-networking-basics",
    org: "Cisco Networking Academy",
    title: "Networking Basics",
    status: "completed",
    description: "Foundational course covering core networking concepts and terminology.",
  },
  {
    id: "amideast",
    org: "AMIDEAST",
    title: "English Level 12 (C1 / Advanced)",
    status: "completed",
    description: "Advanced English proficiency, supporting technical communication and documentation.",
  },
];

export const journey = [
  { label: "Programming Foundations" },
  { label: "Web Development Projects" },
  { label: "Networking & Cisco Labs" },
  { label: "Cybersecurity Degree" },
  { label: "DEPI Incident Response Training" },
  { label: "SOC / Incident Response Career Focus" },
];

// status: "active" | "in-progress"
export const currentlyLearning = [
  { label: "SOC analyst workflows", status: "active" },
  { label: "Incident response", status: "active" },
  { label: "CCNA networking", status: "in-progress" },
  { label: "Linux for cybersecurity", status: "in-progress" },
  { label: "Network traffic analysis", status: "in-progress" },
  { label: "SIEM concepts", status: "in-progress" },
  { label: "Security investigation practices", status: "in-progress" },
];
