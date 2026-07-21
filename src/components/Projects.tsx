"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Personal Finance Tracker",
    description: "Web application empowering users to manage income, expenses, and trends.",
    year: "2025",
    tags: ["Development", "Data Visualization"],
  },
  {
    id: 2,
    title: "UNICEF Digital Assets",
    description: "Structured digital assets improving internal knowledge accessibility for global teams.",
    year: "2026",
    tags: ["Digital Innovation", "Workflow"],
  },
  {
    id: 3,
    title: "FrieslandCampina Operations",
    description: "Generated OEE reports and digitized inspection findings to optimize production.",
    year: "2024",
    tags: ["Data Reporting", "Compliance"],
  },
  {
    id: 4,
    title: "Visual Narratives (Daastan)",
    description: "Translated complex narratives into clear visual storytelling and animated creatives.",
    year: "2023",
    tags: ["Visual Design", "Animation"],
  },
];

const variants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 45 : -45,
    opacity: 0,
    scale: 0.8,
    z: -500,
    x: direction > 0 ? 800 : -800,
  }),
  center: {
    zIndex: 1,
    rotateY: 0,
    opacity: 1,
    scale: 1,
    z: 0,
    x: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    rotateY: direction < 0 ? 45 : -45,
    opacity: 0,
    scale: 0.8,
    z: -500,
    x: direction < 0 ? 800 : -800,
  })
};

export function Projects() {
  const [[page, direction], setPage] = useState([0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0.12, 0.12, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Wrap index to always stay within bounds
  const projectIndex = Math.abs(page % PROJECTS.length);
  const currentProject = PROJECTS[projectIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const jumpTo = (index: number) => {
    const newDirection = index > projectIndex ? 1 : -1;
    if (index !== projectIndex) {
      setPage([index, newDirection]);
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full py-32 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
      
      {/* Invisible Atmospheric UI Effect */}
      <motion.div
        style={{ 
          opacity: bgOpacity, 
          scale: bgScale, 
          y: bgY, 
          willChange: "transform, opacity" 
        }}
        className="absolute inset-0 pointer-events-none mix-blend-screen"
      >
        <motion.div 
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(120, 80, 255, 1), rgba(34, 211, 238, 0.5), transparent 70%)",
            backgroundSize: "200% 200%",
            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
        {/* Ultra-light noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-center md:text-left text-white">
            Selected Work.
          </h2>
          <div className="h-[1px] w-full bg-white/10" />
        </motion.div>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full max-w-4xl h-[500px] md:h-[450px] flex items-center justify-center"
          style={{ perspective: 1500 }}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { type: "spring", stiffness: 300, damping: 30 },
                z: { type: "spring", stiffness: 300, damping: 30 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="absolute w-full h-full p-4"
            >
              <div className="group relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-md transition-all duration-500 hover:border-purple-500/50 hover:bg-white/[0.04] hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)] flex flex-col justify-between cursor-pointer">
                
                {/* Ambient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-white/40 text-sm font-medium uppercase tracking-widest">
                    {currentProject.year}
                  </span>
                  <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:border-transparent group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    {currentProject.title}
                  </h3>
                  <p className="text-white/50 text-xl max-w-2xl group-hover:text-white/80 transition-colors duration-300">
                    {currentProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="mt-16 flex items-center gap-8">
          <button 
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:border-purple-500/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-4">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === projectIndex 
                    ? "w-8 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40 hover:scale-125"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:border-purple-500/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
