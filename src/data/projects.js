// Centralized project data. Each project drives both the featured project
// card grid and its optional case-study detail route (/#/projects/:slug).

export const projectCategories = ["All", "Cybersecurity", "Networking", "Web Applications"];

export const projects = [
  {
    slug: "serviceflow",
    name: "ServiceFlow",
    tagline: "Booking & Business Management Platform",
    category: "Web Applications",
    badges: ["Full-Stack Architecture", "Web Application"],
    purpose:
      "A responsive booking and business-management platform for service businesses such as clinics, salons, gyms, and training centers.",
    contribution:
      "Designed and built the full application: booking flow, role-aware dashboards, scheduling logic, and the demo/live provider architecture.",
    highlights: [
      "Multi-step public booking flow with staff selection and live availability",
      "Owner, admin, staff, and customer role-aware dashboards",
      "Calendar, invoices, simulated payments, and reporting",
      "Supabase-oriented backend architecture with RLS policies and RPCs",
      "18/18 automated tests passing",
    ],
    stack: [
      "React",
      "Vite",
      "React Router",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Recharts",
      "date-fns",
      "Lucide React",
      "Supabase (architecture)",
      "PostgreSQL",
    ],
    demoUrl: "https://heno26.github.io/serviceflow-business-platform/",
    githubUrl: "https://github.com/heno26/serviceflow-business-platform",
    demoModeNote:
      "The hosted public demo currently runs in Demo Mode with local persistence. The repository includes a full Supabase/PostgreSQL backend architecture — migrations, Row Level Security policies, RPC patterns, and an Edge Function for public booking — but a production Supabase backend has not yet been fully verified against a live project.",
    featured: true,
    caseStudy: {
      overview:
        "Service businesses often manage appointments, customers, staff, and payments through disconnected tools. ServiceFlow centralizes these workflows into one responsive business-management experience, from a customer-facing booking page to an internal owner/admin/staff dashboard.",
      keyFeatures: [
        "Public business page with service browsing and multi-step appointment booking",
        "Staff selection with generated availability and time slots",
        "Day/week calendar with blocked-time and staff-availability handling",
        "Customer management, invoices, simulated payments, and notifications",
        "Reports and analytics for owners, plus a self-service customer portal",
      ],
      architecture: [
        "React UI",
        "Feature Hooks",
        "TanStack Query",
        "Provider Contract",
        "Demo Provider (LocalStorage)  /  Supabase Provider (PostgreSQL, Auth, RPC, RLS)",
      ],
      engineeringChallenges: [
        "Generating accurate appointment availability from staff hours, service duration, and buffers",
        "Preventing double-booking through overlap detection on appointments and blocked time",
        "Role-aware access across owner, admin, staff, and customer views",
        "Scoping all business data to a multi-tenant business_id model",
        "Keeping invoice and payment calculations consistent across simulated flows",
        "Building a clean demo/live provider abstraction so the same UI runs on LocalStorage or Supabase",
      ],
      testing: "18/18 automated tests passing, covering slot generation, working-hour logic, service buffers, blocked-time and appointment overlap, authentication demo flows, duplicate account/slug checks, workspace creation, customer deduplication, invoice calculations, payment simulation, balance updates, and double-booking rejection.",
      demoNote:
        "The hosted version runs in Demo Mode using local, in-browser persistence — no real payments or messages are sent.",
    },
  },
  {
    slug: "cyberwatch",
    name: "CyberWatch",
    tagline: "Personal Security Dashboard",
    category: "Cybersecurity",
    badges: ["Cybersecurity UI", "React"],
    purpose:
      "A React-based security dashboard simulation for exploring alert visualization, incident tracking, and security analytics.",
    contribution:
      "Designed the dashboard architecture, alert/incident workflow, and state management from scratch.",
    highlights: [
      "Structured alert and incident presentation with filtering and search",
      "Investigation notes and status management workflow",
      "Security metrics and analytics built with Recharts",
      "Custom hooks with Context API and useReducer for state",
      "LocalStorage persistence across sessions",
    ],
    stack: [
      "React",
      "Vite",
      "React Router",
      "Context API",
      "useReducer",
      "Recharts",
      "LocalStorage",
    ],
    demoUrl: "https://heno26.github.io/cyberwatch-react-dashboard/",
    githubUrl: "https://github.com/heno26/cyberwatch-react-dashboard",
    demoModeNote:
      "CyberWatch is a security-oriented portfolio application and simulation. It is not connected to a production SIEM, endpoint agent, or real enterprise telemetry.",
    featured: true,
    caseStudy: {
      overview:
        "CyberWatch was built to bridge Mohammed's cybersecurity career direction with his ability to build software tools — a dashboard that presents security alerts, incidents, and devices the way an analyst would expect to see them, without claiming a real backend it does not have.",
      keyFeatures: [
        "Alert and incident lists with severity, status, and filtering",
        "IOC exploration and device/security visibility views",
        "Investigation notes and status management per incident",
        "Security metrics and trend charts",
      ],
      architecture: [
        "React UI",
        "Context API + useReducer (application state)",
        "Custom hooks (alerts, incidents, filters)",
        "LocalStorage persistence layer",
      ],
      engineeringChallenges: [
        "Modeling alert/incident state transitions cleanly with useReducer",
        "Keeping filtering and search responsive across larger mock datasets",
        "Structuring reusable components for alert, incident, and device views",
        "Persisting investigation notes and status changes locally",
      ],
      testing: "Manually verified across core workflows: alert filtering, incident status changes, and data persistence across page reloads.",
      demoNote:
        "All data is simulated for demonstration purposes and stored locally in the browser.",
    },
  },
  {
    slug: "flowtask-pro",
    name: "FlowTask Pro",
    tagline: "Project Management Dashboard",
    category: "Web Applications",
    badges: ["Vanilla JavaScript"],
    purpose:
      "A vanilla JavaScript project-management dashboard with Kanban boards, calendar views, and analytics.",
    contribution:
      "Built end-to-end with plain HTML, CSS, and JavaScript to establish strong fundamentals before moving to React.",
    highlights: [
      "Kanban board with drag-and-drop task management",
      "Calendar view alongside task CRUD",
      "Search, filtering, and theme support",
      "JSON backup and restore for saved data",
      "Fully responsive, framework-free UI",
    ],
    stack: ["HTML", "CSS", "Vanilla JavaScript", "LocalStorage", "Chart.js"],
    demoUrl: "https://heno26.github.io/flowtask-pro-vanilla-js/",
    githubUrl: "https://github.com/heno26/flowtask-pro-vanilla-js",
    featured: true,
    caseStudy: {
      overview:
        "FlowTask Pro was built to prove out core JavaScript fundamentals — DOM manipulation, state persistence, and interaction design — before taking on React. It marks the starting point of a progression from vanilla JavaScript toward richer application architecture.",
      keyFeatures: [
        "Full project and task CRUD with a Kanban board",
        "Drag-and-drop task movement between columns",
        "Calendar view, search, and filtering",
        "Analytics built with Chart.js",
        "JSON export/import for backup and restore",
      ],
      architecture: [
        "Vanilla JavaScript modules",
        "DOM rendering layer",
        "LocalStorage persistence",
        "Chart.js analytics layer",
      ],
      engineeringChallenges: [
        "Implementing drag-and-drop without a framework",
        "Keeping DOM state and LocalStorage state in sync",
        "Structuring plain JavaScript into maintainable modules",
      ],
      testing: "Manually verified core CRUD, drag-and-drop, filtering, and backup/restore flows across desktop and mobile widths.",
      demoNote: "All project data is stored locally in the browser.",
    },
  },
  {
    slug: "network-labs",
    name: "Cisco Packet Tracer Network Labs",
    tagline: "Networking & Network Security Labs",
    category: "Networking",
    badges: ["Networking Lab"],
    purpose:
      "A set of Cisco Packet Tracer labs covering VLANs, routing, DHCP, DNS, NAT, subnetting, and troubleshooting.",
    contribution:
      "Designed and built each topology, configured devices, and validated connectivity end to end.",
    highlights: [
      "VLAN segmentation with trunking between switches",
      "Static routing between multiple network segments",
      "DHCP and DNS service configuration",
      "NAT/PAT configuration for internet-bound traffic",
      "Subnetting and VLSM address planning",
    ],
    stack: ["Cisco Packet Tracer", "TCP/IP", "VLANs", "Routing", "NAT", "DHCP", "DNS"],
    demoUrl: null,
    githubUrl: null,
    labDocsComingSoon: true,
    featured: true,
    caseStudy: {
      overview:
        "This project is a stylized, topology-style presentation of network engineering labs built in Cisco Packet Tracer — not a claim of a specific enterprise deployment. It demonstrates practical fundamentals that sit directly alongside Mohammed's cybersecurity coursework.",
      keyFeatures: [
        "Segmented topology with VLANs and inter-switch trunking",
        "A router and DHCP/DNS server supporting multiple client endpoints",
        "Static routing between segments with connectivity verification",
        "NAT/PAT configuration and outbound connectivity testing",
      ],
      architecture: [
        "Router",
        "Switch(es) with VLAN trunking",
        "DHCP/DNS Server",
        "Client Endpoints",
      ],
      engineeringChallenges: [
        "Planning address space with subnetting and VLSM",
        "Segmenting broadcast domains correctly with VLANs and trunking",
        "Troubleshooting connectivity issues across routed segments",
        "Verifying NAT/PAT behavior for outbound traffic",
      ],
      testing: "Connectivity and service reachability verified within Packet Tracer simulation across all lab topologies.",
      demoNote: "Downloadable .pkt lab files and written documentation are in progress.",
    },
  },
];

export const projectProgression = [
  { name: "FlowTask Pro", note: "Strong JavaScript fundamentals." },
  { name: "CyberWatch", note: "React architecture applied to a cybersecurity-focused interface." },
  {
    name: "ServiceFlow",
    note: "Large business application architecture, validation, testing, scheduling logic, role-aware workflows, and Supabase/PostgreSQL design.",
  },
  {
    name: "Cybersecurity & Network Labs",
    note: "Increasing focus toward Mohammed's target SOC / Incident Response career.",
  },
];
