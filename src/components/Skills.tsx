"use client";

import { motion } from "framer-motion";

const SKILLS_DATA = [
  {
    category: "Technical Skills",
    skills: ["Microsoft Office", "Adobe Illustrator", "Photoshop", "Figma", "HTML/CSS", "JavaScript", "C / C++", "WordPress", "Bitrix24", "SEO Fundamentals"]
  },
  {
    category: "Core & Digital",
    skills: ["Digital Workflow Documentation", "Innovation & IT Support", "Data Reporting & Analysis", "Process Optimization"]
  },
  {
    category: "Communication & Media",
    skills: ["Digital Content Creation", "Visual Storytelling", "Social Media Strategy", "Copywriting", "Multimedia Editing"]
  },
  {
    category: "Professional",
    skills: ["Cross-functional Collaboration", "Stakeholder Communication", "Project Coordination", "Analytical Thinking", "Adaptability"]
  }
];

const CERTIFICATIONS = [
  "Graphic Design Certification",
  "Google Prompting Essentials",
  "Google AI Essentials Specialization",
  "WordPress Development Certification",
  "ISO/IEC 27001 Information Security Associate"
];

export function Skills() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 text-white relative overflow-hidden">
      {/* Ambient background glow blobs to enhance translucent effect */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">
          Capabilities & Certifications.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILLS_DATA.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-xl shadow-black/10 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 hover:shadow-purple-500/5"
            >
              <h3 className="text-xl font-semibold mb-6 text-white/90">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 hover:bg-purple-500/25 hover:border-purple-500/40 hover:text-white hover:scale-[1.03] transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-md shadow-xl shadow-black/10 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-500 hover:border-pink-500/30 hover:shadow-pink-500/5"
        >
          <h3 className="text-xl font-semibold mb-6 text-white/90 text-center">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {CERTIFICATIONS.map(cert => (
              <span key={cert} className="text-sm px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm text-white/80 hover:bg-pink-500/15 hover:border-pink-500/40 hover:scale-[1.03] transition-all duration-300">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
