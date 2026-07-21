"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  {
    role: "Innovation Intern",
    company: "UNICEF",
    location: "Stockholm County, Sweden (Remote)",
    date: "Nov 2025 – Apr 2026",
    details: [
      "Organized and structured digital assets to improve internal knowledge accessibility.",
      "Supported innovation documentation across cross-functional international teams.",
      "Contributed to reporting workflows aligned with tech-enabled social impact initiatives.",
      "Assisted in preparation of internal stakeholder presentations."
    ]
  },
  {
    role: "Trade Apprentice",
    company: "FrieslandCampina",
    location: "Pakistan",
    date: "Dec 2022 – Dec 2024",
    details: [
      "Conducted packet integrity testing (LS, SA, TS) supporting quality compliance.",
      "Digitally documented inspection findings, improving traceability and issue escalation.",
      "Maintained structured digital log sheets tracking machine downtime and performance.",
      "Generated weekly OEE (Overall Equipment Efficiency) reports to support operational decisions."
    ]
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    location: "Online",
    date: "Dec 2020 – Sep 2023",
    details: [
      "Produced multi-format assets optimized for digital and print platforms.",
      "Managed full design lifecycle from concept development to final delivery.",
      "Delivered 100+ branding, illustration, and digital media projects for diverse clients.",
      "Built long-term client relationships through structured communication and quality execution."
    ]
  },
  {
    role: "Illustrator",
    company: "Daastan",
    location: "Islamabad (Remote)",
    date: "May 2022 – Feb 2023",
    details: [
      "Translated complex narratives into clear visual storytelling.",
      "Delivered engagement-focused digital creatives for campaigns.",
      "Produced 10+ weekly visual assets, including illustrations and animated creatives."
    ]
  },
  {
    role: "Graphic Design Intern",
    company: "GAOTek Inc.",
    location: "United States (Remote)",
    date: "Apr 2022 – Jul 2022",
    details: [
      "Supported internal documentation using Bitrix24.",
      "Simplified technical concepts into user-friendly visuals and designed technical illustrations."
    ]
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 text-white relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Professional Experience.
        </h2>

        <div ref={containerRef} className="relative space-y-12 pb-12">
          
          {/* Background Timeline Line */}
          <div className="absolute left-0 md:left-[25%] top-4 bottom-0 w-[1px] bg-white/10 hidden md:block translate-x-[15px]" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-0 md:left-[25%] top-4 w-[2px] bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block origin-top translate-x-[14.5px] z-10 blur-[1px]"
          />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0 group"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                
                {/* Mobile timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white/10 md:hidden" />
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-purple-500 md:hidden" />

                <div className="md:col-span-1 mb-4 md:mb-0 md:text-right relative z-20 md:pr-8">
                  <p className="text-sm text-white/50 font-medium uppercase tracking-wider group-hover:text-purple-400 transition-colors">{exp.date}</p>
                  <p className="text-xs text-white/40 mt-1">{exp.location}</p>
                </div>
                
                <div className="md:col-span-3 relative md:pl-12 transition-all duration-300 group-hover:translate-x-2">
                  
                  {/* Glowing dot on the timeline */}
                  <div className="hidden md:block absolute -left-[20px] top-1.5 h-3 w-3 rounded-full bg-[#121212] border-2 border-white/20 z-20 transition-all duration-300 group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

                  <div className="p-6 rounded-2xl border border-transparent transition-all duration-300 group-hover:bg-white/[0.02] group-hover:border-white/10 group-hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.1)] -mt-6">
                    <h3 className="text-2xl font-semibold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">{exp.role}</h3>
                    <p className="text-lg text-purple-400/80 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-white/60 text-base leading-relaxed flex items-start group-hover:text-white/80 transition-colors">
                          <span className="mr-3 mt-[8px] h-1.5 w-1.5 rounded-full bg-white/20 flex-shrink-0 group-hover:bg-pink-500/50 transition-colors" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
