"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface NarrativeOverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function NarrativeOverlay({ scrollYProgress }: NarrativeOverlayProps) {
  // Keyframe Window 1: 0.00 - 0.20 (Title Scene)
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.18, 0.22], [1, 1, 0.15, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -30]);

  // Keyframe Window 2: 0.35 - 0.55 (Systems & Workflows)
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.35, 0.50, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.35, 0.50, 0.55], [30, 0, 0, -30]);

  // Keyframe Window 3: 0.70 - 0.90 (Creative Vision / Production Rigor)
  const opacity3 = useTransform(scrollYProgress, [0.63, 0.70, 0.85, 0.90], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.63, 0.70, 0.85, 0.90], [30, 0, 0, -30]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none select-none">
      {/* Dynamic ambient dark overlay to ensure maximum readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top Left: Portfolio Archive branding (Bigger, more visible, positioned according to margins) */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute top-10 left-8 md:top-14 md:left-16 lg:left-24 z-20"
      >
        <span className="text-sm md:text-base uppercase tracking-[0.4em] text-[#C084FC] font-mono font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Portfolio Archive
        </span>
      </motion.div>

      {/* Scene 1: Centered Title Scene — glassmorphic card for readability */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Glass card backdrop */}
        <div className="relative px-10 py-8 md:px-14 md:py-10 rounded-2xl border border-white/[0.08] bg-black/30 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">
          {/* Subtle inner amethyst glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#A855F7]/5 to-transparent pointer-events-none" />
          <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Case Studies:
            <span className="block mt-1 font-light text-neutral-300">Selected Works</span>
          </h1>
        </div>
        <p className="mt-6 text-xs md:text-sm text-neutral-200 font-mono tracking-[0.25em] max-w-md bg-black/40 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
          SCROLL TO EXPLORE
        </p>
      </motion.div>

      {/* Scene 2: Interactive Systems / Design Scene (Left-aligned) */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-0 flex flex-col justify-center px-8 md:px-20 lg:px-32 w-full md:w-2/3 lg:w-1/2"
      >
        <div className="border-l-2 border-[#A855F7] pl-6 py-4 space-y-4 bg-black/30 backdrop-blur-md rounded-r-xl pr-6 border-y border-r border-white/5 shadow-2xl">
          <div className="flex items-center space-x-3 text-[#C084FC]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C084FC] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
              Systems & Workflows
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Scalable Architectures & Interactive Systems
          </h2>
          
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-sans max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Translating complex technical processes and project guidelines into structured digital workflows, clean documentation, and highly accessible system designs.
          </p>
        </div>
      </motion.div>

      {/* Scene 3: Impact & Creative Vision Scene (Right-aligned) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-0 flex flex-col justify-center items-end text-right px-8 md:px-20 lg:px-32 w-full md:w-2/3 lg:w-1/2"
      >
        <div className="border-r-2 border-[#A855F7] pr-6 py-4 space-y-4 bg-black/30 backdrop-blur-md rounded-l-xl pl-6 border-y border-l border-white/5 shadow-2xl flex flex-col items-end">
          <div className="flex items-center space-x-3 text-[#C084FC]">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold">
              Digital Innovation
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#C084FC] animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Bridging Creative Vision with Technical Rigor
          </h2>
          
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-sans max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Fusing design aesthetics with operational metrics, user-centered details, and seamless cross-functional delivery to optimize product efficiency.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
