"use client";

import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    category: "Design",
    skills: ["UI/UX Design", "Graphic Design", "Visual Identity", "Illustration", "Design Systems"],
  },
  {
    category: "Technology",
    skills: ["Frontend Development", "React & Next.js", "Web Animations", "Technical Architecture"],
  },
  {
    category: "Systems",
    skills: ["Data Visualization", "Process Workflows", "Knowledge Management", "IT Compliance"],
  }
];

export function Capabilities() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-transparent text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        
        <div className="md:col-span-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32 space-y-6"
          >
            <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase mb-4">
              02 / Capabilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Structured <br /> Expertise.
            </h3>
            <p className="text-neutral-400 leading-relaxed text-lg max-w-sm">
              My skill set sits at the intersection of creative execution and technical logic. I design systems that look beautiful and build interfaces that perform efficiently.
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-8 space-y-16">
          {CAPABILITIES.map((group, groupIdx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: groupIdx * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-neutral-500">0{groupIdx + 1}</span>
                <div className="flex-1 h-px bg-white/10" />
                <h4 className="text-xl font-medium tracking-tight">{group.category}</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-[#09090b] hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group flex items-center justify-between cursor-default overflow-hidden"
                  >
                    {/* Subtle internal gradient that activates on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <span className="relative z-10 text-neutral-300 group-hover:text-white font-medium transition-colors duration-300">{skill}</span>
                    
                    <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-purple-500/30 group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] group-hover:scale-[2] transition-all duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
