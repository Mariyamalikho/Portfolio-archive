"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Terminal, Network } from "lucide-react";

const SYSTEMS = [
  {
    title: "CORE PHILOSOPHY",
    description: "Building interfaces that are not just usable, but memorable. Merging data-driven structure with fluid, dynamic aesthetics.",
    icon: Terminal,
    delay: 0.1,
    colSpan: "md:col-span-2",
  },
  {
    title: "TECH STACK",
    description: "Next.js, Tailwind CSS, Framer Motion, and HTML5 Canvas for high-performance rendering.",
    icon: Code2,
    delay: 0.2,
    colSpan: "md:col-span-1",
  },
  {
    title: "LIVING SYSTEMS",
    description: "Data doesn't sit still. UIs should breathe, react, and respond to the user's presence instantly.",
    icon: Network,
    delay: 0.3,
    colSpan: "md:col-span-1",
  },
  {
    title: "WHAT I LEARNED",
    description: "Balancing heavy animations with 60fps performance requires strict optimization and understanding of browser paint cycles.",
    icon: Cpu,
    delay: 0.4,
    colSpan: "md:col-span-2",
  },
];

export function SystemArchitecture() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
      
      {/* Background Nodes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center">
        {/* Subtle glowing orb in center matching the case studies */}
        <div className="absolute w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Header matching CaseStudiesGrid typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.04] pb-10 gap-6">
          <div className="space-y-2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C084FC]">
                System Diagnostics
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight uppercase"
              style={{ textShadow: "0 0 20px rgba(168,85,247,0.15)" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#A855F7]">
                System
              </span>{" "}
              Architecture
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-mono text-neutral-500 max-w-xs md:text-right md:leading-relaxed"
          >
            Deconstructing the underlying framework. <br/>Data-driven logic and fluid visual experiences.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          


          {SYSTEMS.map((sys, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sys.delay, duration: 0.5 }}
              className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] backdrop-blur-md overflow-hidden ${sys.colSpan} transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(168,85,247,0.05)]`}
            >
              {/* Purple Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/30 rounded-2xl transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className="h-10 w-10 rounded-lg border border-white/[0.06] bg-[#0E0E10] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-purple-500/30 group-hover:bg-[#121215] transition-all duration-300">
                  <sys.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest group-hover:text-[#A855F7] transition-colors">
                  Node_{idx + 1}
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-neutral-300 group-hover:text-white transition-colors duration-300">
                  {sys.title}
                </h3>
                <p className="text-sm font-sans text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {sys.description}
                </p>
              </div>
              
              {/* Decorative corner brackets on hover */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
