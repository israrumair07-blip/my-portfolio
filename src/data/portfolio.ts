export const profile = {
  name: "Umair Asrar",
  title: "Laravel & Full-Stack Developer",
  tagline:
    "Architecting high-concurrency Laravel systems, clean RESTful APIs, and responsive React web experiences.",
  about:
    "Full-stack engineer specializing in PHP Laravel, modern React.js, and reliable database architectures. With 1.5+ years of production experience, I build high-concurrency systems, secure REST APIs, and modular enterprise platforms. I focus on clean service layers, transaction integrity, and containerized deployments to deliver fast, scalable web applications.",
  experience: "1.5+",
  email: "israrumair07@gmail.com",
  phone: "+92 324 7694425",
  whatsappNumber: "923247694425",
  whatsappMessage: "Hi Umair, I saw your portfolio and I would like to discuss a project with you.",
  github: "https://github.com/israrumair07-blip",
  linkedin: "https://www.linkedin.com/in/umair-asrar-9353873a8",
  location: "Pakistan (Open to Remote Worldwide)",
  status: "Available for new projects & roles",
};

export const stats = [
  { value: "1.5+", label: "Years Experience", description: "Hands-on commercial & freelance delivery" },
  { value: "10+", label: "Projects Completed", description: "Enterprise ERPs, POS systems & custom web apps" },
  { value: "11+", label: "ERP Clinical Modules", description: "Architected across Hospital & POS platforms" },
  { value: "100%", label: "Concurrency & Integrity", description: "Row-level locking & ACID database transactions" },
];

export const skillGroups = [
  {
    title: "Backend Architecture",
    icon: "server",
    description: "Robust server-side engineering, database locking & secure REST APIs",
    items: [
      "PHP 8+",
      "Laravel (10 & 11)",
      "MySQL",
      "RESTful APIs",
      "Database Transactions",
      "Row-Level Locking",
      "Service & Repository Pattern",
      "Eloquent ORM",
    ],
  },
  {
    title: "Frontend & UI",
    icon: "layout",
    description: "Responsive client interfaces with reactive states & modern UX",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap 5",
      "HTML5 / Modern CSS",
      "Async Fetch / Axios",
    ],
  },
  {
    title: "DevOps, AI & Tools",
    icon: "cpu",
    description: "Containerized environments, automated pipelines & third-party integrations",
    items: [
      "Docker",
      "Git & GitHub",
      "PayPal API Integration",
      "AI Chatbot Integration",
      "Gmail SMTP / Mailers",
      "Linux / Bash Basics",
    ],
  },
  {
    title: "Core Specializations",
    icon: "shield",
    description: "Production-tested domain engineering patterns & business logic",
    items: [
      "FEFO Multi-Batch Inventory",
      "POS & Thermal Printing",
      "Role-Based Access (RBAC)",
      "Audit Trail & Logging",
      "Cooldown & Expiry Automation",
    ],
  },
];

export const projects = [
  {
    id: "novex-pharmacy",
    title: "Novex Pharmacy & Enterprise POS System",
    category: "Enterprise POS & Inventory",
    badge: "Enterprise",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap 5", "FEFO Engine", "Thermal POS"],
    summary:
      "A high-volume pharmacy management suite featuring multi-batch FEFO inventory automation, real-time POS, and bulletproof database locking.",
    highlights: [
      "Fast POS checkout with Hold Bills, barcode scanning & thermal receipt printing",
      "Multi-batch FEFO algorithm automatically prioritizing nearest-expiry medicine",
      "Row-level database locking & ACID transactions preventing concurrency errors",
      "Comprehensive supplier ledger with bank reconciliation and audit logging",
    ],
    live: "",
    repo: "",
    featured: true,
  },
  {
    id: "hospital-management",
    title: "Comprehensive Hospital Management ERP",
    category: "Full-Stack Healthcare ERP",
    badge: "Full-Stack ERP",
    tech: ["React.js", "PHP", "Laravel", "REST APIs", "MySQL", "Docker", "Git"],
    summary:
      "A modular 11-system hospital platform decoupling a snappy React.js frontend from a high-throughput Laravel REST API backend.",
    highlights: [
      "11 integrated modules covering clinical units (OPD/IPD, Lab, Pharmacy) and finances",
      "Decoupled React.js frontend consuming authenticated, high-performance Laravel APIs",
      "Automated billing, expense tracking, and centralized medical inventory control",
      "Granular Role-Based Access Control (Admin, Doctor, Nurse, Staff) with shift rosters",
    ],
    live: "",
    repo: "",
    featured: true,
  },
  {
    id: "ecommerce-ai",
    title: "Microservices E-Commerce with AI Concierge",
    category: "AI & Microservices",
    badge: "AI Powered",
    tech: ["Laravel", "Django", "Docker", "Bootstrap", "PayPal SDK", "MySQL", "JavaScript"],
    summary:
      "A distributed e-commerce application integrating an intelligent AI assistant for product guidance, coupled with secure PayPal payments.",
    highlights: [
      "Decoupled architecture connecting Laravel order services with a Python/Django AI engine",
      "Interactive AI assistant resolving customer inquiries and recommending products",
      "Secure PayPal checkout workflows with automated webhook verification",
      "Fully containerized with Docker for seamless development-to-production parity",
    ],
    live: "",
    repo: "",
    featured: true,
  },
  {
    id: "blood-donor",
    title: "Blood Donor Network & Real-Time Alert System",
    category: "Healthcare & Real-Time Alerts",
    badge: "Live Production",
    tech: ["PHP", "Laravel", "MySQL", "Fetch API", "Gmail SMTP", "Bootstrap 5"],
    summary:
      "A live community platform matching critical blood requests with eligible donors using automated cooldown tracking and SMTP notifications.",
    highlights: [
      "Instant asynchronous donor filtering across blood types, cities, and availability",
      "Automated 90-day medical cooldown eligibility tracking via Carbon date engine",
      "Real-time emergency alert dispatch powered by Laravel Mail and Gmail SMTP",
      "Zero-reload asynchronous CRUD interface built with modern Fetch API",
    ],
    live: "https://blood-donor-pkr.infinityfreeapp.com",
    repo: "",
    featured: true,
  },
];
