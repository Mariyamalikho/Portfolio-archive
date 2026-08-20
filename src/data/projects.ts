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
  heroImage?: string;
  demoLink?: string;

  // Editorial content
  context?: string;
  challenge: {
    text: string;
    quote: string;
    image?: string;
  };
  research?: {
    questions: string[];
    findings: string[];
    image?: string;
  };
  process?: string[];
  systemArchitecture?: {
    description: string;
    components: string[];
    image?: string;
  };
  designExploration?: {
    description: string;
    stages: { label: string; image?: string }[];
  };
  solution: {
    description: string;
    features: string[];
    images?: string[];
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
    category: "Frontend Development / Web App",
    role: "Designer & Developer",
    timeline: "2024",
    year: "2024",
    tools: ["HTML5", "CSS3", "JavaScript (ES6)", "Chart.js", "Local Storage API"],
    shortDescription: "A responsive web application that helps users manage their income, expenses, and financial activities in one place.",
    demoLink: "https://personal-finance-tracker-mak.netlify.app/",
    heroImage: "/images/personal-finance-tracker/dashboard-empty.png",
    context: "Personal Finance Tracker is a responsive web application designed with simplicity and usability in mind. It offers a clean interface that works across different devices while storing data securely using the browser's Local Storage API.",
    challenge: {
      text: "Users often find existing financial tools either too simplistic, lacking necessary insights, or overly complex. The goal was to build a secure, client-side only solution that encourages better budgeting habits without needing a backend.",
      quote: "Managing personal finances should not require users to understand complex financial systems.",
      image: "/images/personal-finance-tracker/login.jpg"
    },
    research: {
      questions: ["How do users currently track their expenses?", "How can we build a fully offline-capable tracker?"],
      findings: [
        "Users abandon tracking apps when data entry is tedious.",
        "Visual feedback via charts is highly preferred over tabular data.",
        "Security and privacy are top concerns, making Local Storage a great fit for a lightweight web app."
      ],
      image: "/images/personal-finance-tracker/signup.png"
    },
    process: ["UI/UX Design", "Responsive Web Design", "DOM Manipulation", "Data Visualization", "Local Storage Management"],
    systemArchitecture: {
      description: "The application relies on a secure, highly responsive frontend architecture that processes and stores all financial data locally on the user's device via the browser.",
      components: ["Local Storage API", "DOM Manipulation Engine", "Chart.js Data Visualization"]
    },
    solution: {
      description: "A cohesive platform providing interactive charts, spending analysis, categorized transactions, and smart financial insights.",
      features: [
        "Secure Sign In & Sign Up",
        "Income & Expense Tracking",
        "Add, Edit & Delete Transactions",
        "Interactive Financial Charts & Monthly Summary",
        "Smart Financial Insights",
        "Offline Data Storage"
      ],
      images: [
        "/images/personal-finance-tracker/dashboard-filled.png"
      ]
    },
    outcome: {
      results: [
        "Built a fully responsive interface with cross-browser compatibility",
        "Implemented robust local storage management for offline usage",
        "Created an intuitive financial dashboard with interactive data visualization"
      ],
      learnings: [
        "Mastered advanced DOM manipulation and vanilla JavaScript state management.",
        "Data visualization requires careful attention to UI design and responsive charts."
      ],
      nextSteps: [
        "Mobile Application & Cloud Synchronization",
        "AI-Powered Financial Insights & Budget Goals",
        "Export Data (PDF / Excel) & Monthly Reports",
        "Multi-language Support & Notifications"
      ]
    }
  },
  {
    slug: "unicef-digital-systems",
    id: "02",
    title: "UNICEF UPSHIFT",
    category: "Digital Innovation / Systems",
    role: "Innovation Intern",
    timeline: "Nov 2025 – Apr 2026",
    year: "2026",
    tools: ["Information Architecture", "Knowledge Management Systems", "Brand Design"],
    shortDescription: "Structured digital assets and brand guidelines to improve internal knowledge accessibility across global teams.",
    heroImage: "/images/unicef-digital-systems/new-2.jpg",
    context: "Working within the Office of Innovation, I helped scale the UPSHIFT program by organizing massive digital asset libraries and designing standardized brand materials for global deployment.",
    challenge: {
      text: "Global teams were struggling to locate, organize, and utilize crucial digital assets and reporting workflows efficiently, leading to duplicated efforts and communication breakdowns.",
      quote: "Knowledge accessibility is the foundation of global impact. When information is siloed, progress slows.",
      image: "/images/unicef-digital-systems/new-1.png"
    },
    research: {
      questions: ["How do different global teams interact with assets?", "What are the common friction points in asset retrieval?"],
      findings: [
        "A flat file structure fails at scale; a robust taxonomy is required.",
        "Brand assets must be standardized for print and digital to avoid inconsistencies."
      ],
      image: "/images/unicef-digital-systems/new-3.png"
    },
    process: ["Asset Audit", "Taxonomy Design", "System Restructuring", "Workflow Documentation", "Asset Production"],
    systemArchitecture: {
      description: "A centralized taxonomy system designed to categorize and retrieve assets based on regional impact, project type, and media format.",
      components: ["Global Knowledge Base", "Standardized Reporting Workflows", "Cross-functional Asset Directories"],
      image: "/images/unicef-digital-systems/new-4.png"
    },
    solution: {
      description: "A completely overhauled internal structure prioritizing searchability and clear documentation for tech-enabled social impact initiatives. I also designed numerous brand assets including certificates, ID cards, and merchandise.",
      features: ["Centralized Asset Repository", "Standardized Documentation Formats", "Streamlined Presentation Templates", "Merchandise & Brand Collateral"],
      images: [
        "/images/unicef-digital-systems/new-5.png"
      ]
    },
    outcome: {
      results: ["Organized massive libraries of digital assets for seamless global access", "Documented and standardized workflows across multiple cross-functional teams", "Produced print-ready brand collateral for global deployment"],
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
    heroImage: "/images/frieslandcampina-operations/merch.jpg",
    context: "Working as a Trade Apprentice at FrieslandCampina, my focus was on the ground-level operations that keep production moving efficiently. I worked closely with machine operators to transition manual logging into digital analytics.",
    challenge: {
      text: "Manual tracking of packet integrity and machine downtime was prone to human error and made it difficult to analyze long-term performance trends.",
      quote: "Operational efficiency requires accurate, accessible, and digitized data."
    },
    solution: {
      description: "A systematic approach to tracking Overall Equipment Efficiency (OEE) and compliance, translating manual inspections into digital insights.",
      features: ["Packet Integrity Testing (LS, SA, TS)", "Digitized Traceability Workflows", "Automated Downtime Analytics"],
      images: [
        "/images/frieslandcampina-operations/trophies.jpg"
      ]
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
    heroImage: "/images/visual-narratives/identity.png",
    challenge: {
      text: "Complex textual information often fails to engage digital audiences. The challenge was to distill intricate narratives into compelling, immediate visual communication.",
      quote: "Good design makes complex information feel obvious.",
      image: "/images/visual-narratives/design-1.png"
    },
    research: {
      questions: ["How do we translate dense text into visual language?", "What core aesthetic resonates with our target audience?"],
      findings: ["Visual metaphors must be immediately recognizable.", "Consistent color palettes and typography dramatically improve retention."],
      image: "/images/visual-narratives/design-2.png"
    },
    process: ["Concept Interpretation", "Sketching", "Vector Illustration", "Animation", "Delivery"],
    systemArchitecture: {
      description: "A cohesive brand identity system must establish consistent rules for typography, color, and layout across all mediums.",
      components: ["Brand Guidelines", "Typography & Color Palettes", "Asset Libraries"],
      image: "/images/visual-narratives/stationery.png"
    },
    solution: {
      description: "Over 100 branding, illustration, and digital projects that prioritized clarity, aesthetic quality, and narrative alignment.",
      features: ["Multi-format Asset Production", "Campaign Identity Systems", "Narrative Illustration"],
      images: [
        "/images/visual-narratives/cards.png",
        "/images/visual-narratives/standees.png"
      ]
    },
    outcome: {
      results: ["Delivered 100+ complex visual design projects", "Created highly successful visual systems for weekly campaigns"],
      learnings: ["Aesthetic consistency builds brand trust.", "Visual storytelling must adapt to the constraints and strengths of different digital mediums."],
      nextSteps: ["Explore generative visual systems and code-driven art."]
    }
  }
];

// Sort projects by year (newest first)
PROJECTS.sort((a, b) => parseInt(b.year) - parseInt(a.year));
