"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TransitionSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={ref} className="relative w-full h-[15vh] md:h-[20vh] bg-[#121212] flex items-center justify-center overflow-hidden">
      {/* Subtle Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Animated gradient glow */}
      <motion.div 
        style={{ opacity, y: yOffset }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
          className="absolute w-[100vw] md:w-[70vw] h-[150px] bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 blur-[80px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: ["-10%", "10%", "-10%"],
          }}
          transition={{ 
            duration: 15, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
          className="absolute w-[60vw] md:w-[40vw] h-[100px] bg-indigo-500/10 blur-[60px] rounded-full" 
        />
      </motion.div>

      {/* Thin animated waveform / line fading in and out */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-0 w-full flex justify-center"
      >
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
          />
          <motion.div 
            animate={{ x: ["-200%", "100%"] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}
