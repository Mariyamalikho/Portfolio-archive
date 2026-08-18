export type ProjectData = {
  slug: string;
  id: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  year: string;
  tools: string[];
  shortDescription: string;
  heroImage?: string; // e.g., an abstract visual or a screenshot

  // Editorial content
  challenge: {
    text: string;
    quote: string;
  };
  research?: {
    questions: string[];
    findings: string[];
  };
  process?: string[]; // E.g., ["Research", "Ideation", "Wireframes", "UI", "Prototype", "Build"]
  systemArchitecture?: {
    description: string;
    components: string[];
  };
  designExploration?: {
    description: string;
    stages: { label: string; image?: string }[];
  };
  solution: {
    description: string;
    features: string[];
  };
  outcome: {
    results: string[];
    learnings: string[];
    nextSteps: string[];
  };
};

export const PROJECTS: ProjectData[] = [
  {
    slug: "personal-finance-tracker",
    id: "01",
    title: "Personal Finance Tracker",
    category: "Product Design / Development",
    role: "Designer & Developer",
    timeline: "8 weeks",
    year: "2025",
    tools: ["Figma", "React", "Next.js", "Tailwind CSS"],
    shortDescription: "A financial management system designed to make personal budgeting simpler and more actionable.",
    challenge: {
      text: "Users often find existing financial tools either too simplistic, lacking necessary insights, or overly complex, requiring financial expertise to navigate effectively. The challenge was to bridge this gap.",
      quote: "Managing personal finances should not require users to understand complex financial systems."
    },
    research: {
      questions: ["How do users currently track their expenses?", "What causes budgeting burnout?"],
      findings: [
        "Users abandon tracking apps when data entry is tedious.",
        "Visual feedback is highly preferred over tabular data.",
        "Security and privacy are top concerns."
      ]
    },
    process: ["Discovery", "Information Architecture", "Wireframes", "High-Fidelity UI", "Frontend Dev", "Testing"],
    systemArchitecture: {
      description: "The application relies on a secure, highly responsive frontend architecture that processes financial data locally before syncing.",
      components: ["Client-side Data Aggregation", "Encrypted State Management", "Dynamic Visualization Engine"]
    },
    designExploration: {
      description: "Iterated through multiple visual paradigms before settling on a dark, high-contrast UI that emphasizes data legibility.",
      stages: [
        { label: "Initial concept" },
        { label: "Wireframes" },
        { label: "Visual exploration" },
        { label: "Final interface" }
      ]
    },
    solution: {
      description: "A cohesive platform that automates categorization and uses deep visual analytics to help users understand their spending habits instantly.",
      features: ["Automated Spending Categorization", "Custom Budget Thresholds", "Predictive Trend Analysis"]
    },
    outcome: {
      results: ["Streamlined user onboarding flow", "Implemented accessible high-contrast data charts", "Created a modular component system for future financial widgets"],
      learnings: ["Data visualization requires careful attention to color contrast and accessibility.", "State management complexity increases significantly with financial ledger logic."],
      nextSteps: ["Implement predictive ML models for budget forecasting.", "Expand exporting capabilities for tax purposes."]
    }
  },
  {
    slug: "unicef-digital-systems",
    id: "02",
    title: "UNICEF Digital Systems",
    category: "Digital Innovation / Systems",
    role: "Innovation Intern",
    timeline: "Nov 2025 – Apr 2026",
    year: "2026",
    tools: ["Information Architecture", "Knowledge Management Systems"],
    shortDescription: "Structured digital assets to improve internal knowledge accessibility across global teams.",
    challenge: {
      text: "Global teams were struggling to locate, organize, and utilize crucial digital assets and reporting workflows efficiently, leading to duplicated efforts and communication breakdowns.",
      quote: "Knowledge accessibility is the foundation of global impact. When information is siloed, progress slows."
    },
    process: ["Asset Audit", "Taxonomy Design", "System Restructuring", "Workflow Documentation"],
    systemArchitecture: {
      description: "A centralized taxonomy system designed to categorize and retrieve assets based on regional impact, project type, and media format.",
      components: ["Global Knowledge Base", "Standardized Reporting Workflows", "Cross-functional Asset Directories"]
    },
    solution: {
      description: "A completely overhauled internal structure prioritizing searchability and clear documentation for tech-enabled social impact initiatives.",
      features: ["Centralized Asset Repository", "Standardized Documentation Formats", "Streamlined Presentation Templates"]
    },
    outcome: {
      results: ["Organized massive libraries of digital assets for seamless global access", "Documented and standardized workflows across multiple cross-functional teams"],
      learnings: ["Creating scalable systems requires understanding the diverse technological literacy of global teams.", "A well-designed taxonomy is just as important as the platform it lives on."],
      nextSteps: ["Continually audit and refine the taxonomy as new global initiatives launch."]
    }
  },
  {
    slug: "frieslandcampina-operations",
    id: "03",
    title: "FrieslandCampina Operations",
    category: "Data Analysis / Compliance",
    role: "Trade Apprentice",
    timeline: "Dec 2022 – Dec 2024",
    year: "2024",
    tools: ["Data Reporting", "Inspection Protocols", "OEE Analysis"],
    shortDescription: "Digitized inspection findings and generated efficiency reports to optimize production lines.",
    challenge: {
      text: "Manual tracking of packet integrity and machine downtime was prone to human error and made it difficult to analyze long-term performance trends.",
      quote: "Operational efficiency requires accurate, accessible, and digitized data."
    },
    solution: {
      description: "A systematic approach to tracking Overall Equipment Efficiency (OEE) and compliance, translating manual inspections into digital insights.",
      features: ["Packet Integrity Testing (LS, SA, TS)", "Digitized Traceability Workflows", "Automated Downtime Analytics"]
    },
    outcome: {
      results: ["Digitized inspection findings for immediate traceability", "Analyzed and reported on machine downtime to improve OEE"],
      learnings: ["Consistent data formatting is critical for identifying macro trends in production.", "Digital transitions in traditional operational environments require robust change management."],
      nextSteps: ["Implement automated sensor logging to reduce manual data entry further."]
    }
  },
  {
    slug: "visual-narratives",
    id: "04",
    title: "Visual Narratives",
    category: "Visual Communication / Branding",
    role: "Illustrator & Graphic Designer",
    timeline: "Dec 2020 – Sep 2023",
    year: "2023",
    tools: ["Illustrator", "Photoshop", "Figma", "After Effects"],
    shortDescription: "Translated complex narratives into visual storytelling and animated creatives for diverse audiences.",
    challenge: {
      text: "Complex textual information often fails to engage digital audiences. The challenge was to distill intricate narratives into compelling, immediate visual communication.",
      quote: "Good design makes complex information feel obvious."
    },
    process: ["Concept Interpretation", "Sketching", "Vector Illustration", "Animation", "Delivery"],
    solution: {
      description: "Over 100 branding, illustration, and digital projects that prioritized clarity, aesthetic quality, and narrative alignment.",
      features: ["Multi-format Asset Production", "Campaign Identity Systems", "Narrative Illustration"]
    },
    outcome: {
      results: ["Delivered 100+ complex visual design projects", "Created highly successful visual systems for weekly campaigns"],
      learnings: ["Aesthetic consistency builds brand trust.", "Visual storytelling must adapt to the constraints and strengths of different digital mediums."],
      nextSteps: ["Explore generative visual systems and code-driven art."]
    }
  }
];
