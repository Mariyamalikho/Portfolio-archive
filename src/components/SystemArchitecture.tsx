"use client";

import { motion } from "framer-motion";

const APPROACH = [
  { step: "01", title: "Understand", desc: "Research the problem and context." },
  { step: "02", title: "Structure", desc: "Turn complexity into systems and clear flows." },
  { step: "03", title: "Design", desc: "Develop the visual and interaction language." },
  { step: "04", title: "Build", desc: "Translate the concept into a functional product." },
  { step: "05", title: "Refine", desc: "Iterate based on feedback and results." }
];

export function SystemArchitecture() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase mb-4">
            03 / System Approach
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            How I Work.
          </h3>
        </motion.div>

        {/* The 5-Step System Diagram */}
        <div className="relative pt-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {APPROACH.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col items-center md:items-start group cursor-pointer"
              >
                {/* Connecting line for desktop (to the next node) */}
                {idx !== APPROACH.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-6 w-[calc(100%+2rem)] h-px bg-purple-500/20 group-hover:bg-purple-500/80 transition-colors duration-500" />
                )}

                {/* Node */}
                <div className="relative z-10 w-12 h-12 rounded-full border border-purple-500/30 bg-[#09090b] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-mono text-purple-400 group-hover:text-purple-200 transition-colors">{item.step}</span>
                </div>
                
                {/* Connecting line for mobile */}
                {idx !== APPROACH.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-purple-500/30 my-2 group-hover:bg-purple-500/80 transition-colors" />
                )}

                {/* Content */}
                <div className="text-center md:text-left pt-6 space-y-3">
                  <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">{item.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed max-w-[200px] group-hover:text-neutral-300 transition-colors duration-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
