"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 25% (fades in fast, fades out as we scroll to 30%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 25% to 55%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.55], [100, -100]);

  // Section 3: 55% to 85%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 text-white pointer-events-none">
      {/* Section 1 - Center */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Mariyam Ali K.
        </h1>
        <p className="mt-4 text-xl md:text-3xl font-light text-white/80 tracking-wide">
          IT Graduate & Innovation Intern.
        </p>
      </motion.div>

      {/* Section 2 - Left Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-0 flex flex-col justify-center px-8 md:px-24 w-full md:w-2/3"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Translating complex <br /> <span className="italic text-white/70">technical processes</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/50 max-w-sm">
          into structured workflows and clear visual narratives.
        </p>
        <div className="h-1 w-24 bg-white/20 mt-8 rounded-full" />
      </motion.div>

      {/* Section 3 - Right Aligned */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-0 flex flex-col justify-center items-end text-right px-8 md:px-24 w-full md:w-2/3"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Digital Innovation <br />
          <span className="text-white/70">& IT Systems.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/50 max-w-sm">
          Bridging design, data-driven impact, and visual communication.
        </p>
      </motion.div>
    </div>
  );
}
