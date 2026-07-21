"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Database, Layers } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "01",
    title: "UNICEF Digital Systems",
    role: "Innovation Intern",
    timeline: "Nov 2025 – Apr 2026",
    location: "Stockholm (Remote)",
    description: "Organized and structured digital assets to improve internal knowledge accessibility across global teams. Supported reporting workflows aligned with tech-enabled social impact initiatives.",
    metric: "Global Knowledge Base",
    metricLabel: "Structured Assets & Presentations",
    icon: Database,
    accent: "from-purple-500/20 to-violet-500/0",
    details: [
      "Organized digital assets for global team access.",
      "Documented workflows across cross-functional teams.",
      "Prepared presentations for key stakeholders."
    ]
  },
  {
    id: "02",
    title: "FrieslandCampina Quality Control",
    role: "Trade Apprentice",
    timeline: "Dec 2022 – Dec 2024",
    location: "Pakistan",
    description: "Conducted packet integrity testing and digitally documented quality compliance inspection findings, tracking machine downtime and generating weekly OEE (Overall Equipment Efficiency) reports.",
    metric: "OEE Optimization",
    metricLabel: "Integrity Compliance (LS, SA, TS)",
    icon: ShieldCheck,
    accent: "from-fuchsia-500/20 to-pink-500/0",
    details: [
      "Performed packet integrity testing (LS, SA, TS).",
      "Digitized inspection findings for traceability.",
      "Analyzed machine downtime & performance trends."
    ]
  },
  {
    id: "03",
    title: "Visual Communication & Design",
    role: "Illustrator & Graphic Designer",
    timeline: "Dec 2020 – Sep 2023",
    location: "Daastan / Freelance",
    description: "Translated complex narratives into visual storytelling. Produced multi-format assets optimized for digital and print platforms, delivering over 100 branding, illustration, and digital projects.",
    metric: "100+ Visual Assets",
    metricLabel: "Narratives & Brand Projects Deliveries",
    icon: Layers,
    accent: "from-indigo-500/20 to-purple-500/0",
    details: [
      "Delivered 100+ branding and design projects.",
      "Created 10+ weekly visual assets for campaigns.",
      "Translated complex text narratives into visuals."
    ]
  }
];

// ─── Main Component ───────────────────────────────────────────────────────────
export function CaseStudiesGrid() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 text-white overflow-hidden">

      {/* Subtle amethyst blob glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.04] pb-10 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C084FC] font-mono font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              DEEP-DIVE LEDGER
            </span>
            {/* ← Same size class as NarrativeOverlay h2 headlines */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ textShadow: "0 0 20px rgba(168,85,247,0.15)" }}
            >
              Milestone Case Studies
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-xs md:text-sm font-mono text-neutral-500 max-w-xs md:text-right md:leading-relaxed">
              Detailed inspection, metrics analysis,<br />and operational results.
            </p>
            <motion.div
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-600"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span>Scroll to explore</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </motion.svg>
            </motion.div>
          </div>
        </div>

        {/* Asymmetric 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => {
            const IconComponent = study.icon;
            const offsetClass =
              index === 1 ? "lg:translate-y-8" : index === 2 ? "lg:translate-y-16" : "";

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className={`group relative flex flex-col justify-between rounded-2xl border border-white/[0.03] bg-white/[0.01] p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.02] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(168,85,247,0.05)] ${offsetClass}`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${study.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                      ID: {study.id} // {study.timeline}
                    </span>
                    <div className="h-10 w-10 rounded-lg border border-white/[0.06] bg-[#0E0E10] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-purple-500/30 group-hover:bg-[#121215] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-300 group-hover:text-white transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-sm font-mono text-[#A855F7] uppercase tracking-wide">
                      {study.role}
                    </p>
                    <p className="text-xs text-neutral-500">{study.location}</p>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                    {study.description}
                  </p>

                  <ul className="space-y-2 border-t border-white/[0.03] pt-6">
                    {study.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300"
                      >
                        <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-neutral-600 group-hover:bg-[#A855F7] transition-colors" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.03] flex justify-between items-end relative z-10">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider font-mono text-neutral-600">
                      Primary Outcome
                    </span>
                    <span className="text-lg font-bold text-white font-mono tracking-tight group-hover:text-[#A855F7] transition-colors duration-300">
                      {study.metric}
                    </span>
                    <span className="block text-[10px] text-neutral-500 font-sans">
                      {study.metricLabel}
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-white/[0.06] flex items-center justify-center text-neutral-600 group-hover:text-white group-hover:scale-110 group-hover:border-[#A855F7] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="h-16 lg:h-24" />
      </div>
    </section>
  );
}
