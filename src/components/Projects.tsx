"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { useRef } from "react";

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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className={`group relative flex flex-col gap-12 items-center ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <Link href={`/work/${project.slug}`} className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />
      
      {/* Image Container */}
      <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#0c0c0e] border border-white/5 group-hover:border-purple-500/30 transition-colors duration-700">
        {project.heroImage ? (
          <Image 
            src={project.heroImage} 
            alt={project.title} 
            fill 
            className="object-cover object-center group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-black/20 to-black group-hover:scale-105 transition-transform duration-700 ease-out" />
        )}
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />

        {/* Floating View Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-95 group-hover:scale-100">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white font-medium text-sm tracking-wide shadow-2xl">
            View Case Study <ArrowUpRight className="w-4 h-4 text-purple-400" />
          </div>
        </div>
      </div>
      
      {/* Text Content */}
      <motion.div 
        style={{ y }} 
        className="w-full md:w-1/2 space-y-8 relative z-10 pointer-events-none md:px-8"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <span className="text-purple-500">0{index + 1}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span>{project.category}</span>
          </div>
          <h4 className="text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-500">
            {project.title}
          </h4>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-lg group-hover:text-neutral-200 transition-colors duration-500">
            {project.shortDescription}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tools.slice(0, 4).map((tool: string) => (
            <span key={tool} className="text-xs px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300 backdrop-blur-sm group-hover:border-purple-500/20 group-hover:bg-purple-500/5 transition-colors duration-500">
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="text-xs px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-neutral-300">
              +{project.tools.length - 4}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
