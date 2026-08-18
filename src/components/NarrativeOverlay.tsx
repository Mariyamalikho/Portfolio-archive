"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface NarrativeOverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function NarrativeOverlay({ scrollYProgress }: NarrativeOverlayProps) {
  // Fade out hero content quickly as they scroll down
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 md:px-12 lg:px-24">
      
      {/* Cinematic Shadow to ensure text legibility against any bright background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none -z-10" />

      <motion.div 
        style={{ opacity, y }} 
        className="relative z-10 flex flex-col items-start text-left gap-8 max-w-2xl"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-xl">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-xs font-mono text-neutral-200 tracking-widest uppercase">
            Portfolio Archive
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
          Design<br />
          Technology<br />
          Systems.
        </h1>
        
        <p className="text-base md:text-lg text-neutral-300 max-w-sm md:max-w-md leading-relaxed font-normal drop-shadow-xl">
          I don&apos;t just make things look good. I build the systems that make them work. Crafting digital experiences with precision and scale.
        </p>

        {/* Scroll Indicator */}
        <div className="pt-12 flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
          <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent animate-[pulse_2s_ease-in-out_Infinity]" />
          <span style={{ writingMode: "vertical-rl" }}>SCROLL</span>
        </div>
      </motion.div>

    </div>
  );
}
