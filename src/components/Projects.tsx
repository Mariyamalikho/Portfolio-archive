"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 text-white z-10 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mb-24"
        >
          <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase mb-4">
            01 / Selected Work
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Case Studies.
          </h3>
        </motion.div>

        <div className="w-full space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row gap-12 md:gap-24 items-center"
            >
              {/* Entire Card Click Target */}
              <Link href={`/work/${project.slug}`} className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />
              
              <div className="w-full md:w-1/2 block relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-black/20 to-black group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                  <span className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Case Study
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8 relative z-10 pointer-events-none">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <span>{project.category}</span>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-lg text-neutral-400 leading-relaxed max-w-lg group-hover:text-neutral-300 transition-colors duration-300">
                    {project.shortDescription}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300">
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 4 && (
                    <span className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300">
                      +{project.tools.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
