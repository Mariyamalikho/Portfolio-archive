"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, AnimatePresence, motion } from "framer-motion";
import { NarrativeOverlay } from "./NarrativeOverlay";
import { CaseStudiesGrid } from "./CaseStudiesGrid";

const FRAME_COUNT = 120;
const CHROMA_BG = "#0B0B0C";

/**
 * Generates the correct WebP asset URL for a given frame index.
 * We use 0-padded indices (e.g. 000, 001) for the 120-frame sequence.
 * 
 * @param index - The zero-based integer index of the frame.
 * @returns The absolute URL path to the WebP image asset.
 */
function getFrameUrl(index: number): string {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.041s.webp`;
}

/**
 * ScrollyCanvas Component
 * 
 * An advanced scrollytelling component that uses a highly optimized HTML5 Canvas
 * to render a 120-frame WebP image sequence tied to the user's scroll position.
 * 
 * Features:
 * - Preloads all 120 frames before revealing the canvas.
 * - Interpolates between scroll targets using requestAnimationFrame for smooth 60fps playback.
 * - Dynamically calculates object-fit: cover logic within the canvas context based on devicePixelRatio.
 */
export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Scroll tracking setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress [0, 1] to frame indices [0, 119]
  const targetFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Layer 1 (The WebP Canvas): Smoothly fade canvas opacity from 1.0 down to 0.0 from progress 0.80 to 0.95
  const canvasOpacity = useTransform(scrollYProgress, [0.85, 0.97], [1, 0]);

  // Keep references for high-performance animation loop
  const targetFrameIndexRef = useRef(0);
  const currentFrameIndexRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Update target ref when scroll changes
  useEffect(() => {
    const unsubscribe = targetFrameIndex.on("change", (latest) => {
      targetFrameIndexRef.current = latest;
    });
    return () => unsubscribe();
  }, [targetFrameIndex]);

  /**
   * Effect: Image Preloader
   * 
   * Iterates through the FRAME_COUNT and loads all assets into memory.
   * Calculates a progress percentage for the loading overlay. Updates `isLoaded`
   * state when all frame onload callbacks have successfully fired.
   */
  useEffect(() => {
    let active = true;
    const preloadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const handleImageLoad = () => {
      if (!active) return;
      loadedCount++;
      setLoadProgress(Math.min(100, Math.round((loadedCount / FRAME_COUNT) * 100)));
      if (loadedCount === FRAME_COUNT) {
        setImages(preloadedImages);
        imagesRef.current = preloadedImages;
        setIsLoaded(true);
      }
    };

    const handleImageError = (e: ErrorEvent | string) => {
      console.warn("Failed to load frame image. Falling back to next frame.", e);
      handleImageLoad();
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = handleImageLoad;
      img.onerror = (e) => handleImageError(e as any);
      preloadedImages.push(img);
    }

    return () => {
      active = false;
    };
  }, []);

  /**
   * Helper: Frame Renderer
   * 
   * Renders a specific preloaded frame to the 2D canvas context.
   * Handles devicePixelRatio scaling for retina displays and calculates 
   * the proper offset/dimensions to simulate CSS `object-fit: cover`.
   * 
   * @param index - The target frame index to draw.
   */
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    ctx.fillStyle = CHROMA_BG;
    ctx.fillRect(0, 0, width, height);

    const canvasRatio = width / height;
    const imgRatio = img.width / img.height;

    let renderWidth = width;
    let renderHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = width;
      renderHeight = width / imgRatio;
      offsetY = (height - renderHeight) / 2;
    } else {
      renderWidth = height * imgRatio;
      renderHeight = height;
      offsetX = (width - renderWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.restore();
  };

  /**
   * Effect: High-Performance Animation Loop
   * 
   * Rather than binding drawFrame directly to the scroll event (which causes stutter),
   * we use a recursive requestAnimationFrame loop. It compares the `currentFrameIndex`
   * to the `targetFrameIndex` (driven by Framer Motion scroll progress), and lerps 
   * (linearly interpolates) towards the target.
   * 
   * This decouples the render rate from the scroll event rate, ensuring buttery smooth 60fps.
   */
  useEffect(() => {
    if (!isLoaded) return;

    let animationFrameId: number;

    const updateRender = () => {
      const target = targetFrameIndexRef.current;
      const current = currentFrameIndexRef.current;

      const diff = target - current;

      if (Math.abs(diff) > 0.005) {
        currentFrameIndexRef.current = current + diff * 0.15;
      } else {
        currentFrameIndexRef.current = target;
      }

      const drawIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(currentFrameIndexRef.current))
      );

      if (drawIndex !== lastDrawnIndexRef.current || lastDrawnIndexRef.current === -1) {
        drawFrame(drawIndex);
        lastDrawnIndexRef.current = drawIndex;
      }

      animationFrameId = requestAnimationFrame(updateRender);
    };

    drawFrame(0);
    animationFrameId = requestAnimationFrame(updateRender);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded]);

  // 4. Handle resize dynamically
  useEffect(() => {
    if (!isLoaded) return;

    const handleResize = () => {
      const activeIdx = Math.round(currentFrameIndexRef.current);
      drawFrame(activeIdx);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded]);

  return (
    <>
      {/* Cinematic Load Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0C] select-none"
          >
            <div className="space-y-6 w-72 md:w-96 text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A855F7] font-mono font-semibold">
                Initializing Cinematic Stage
              </span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Preloading Timeline Assets
              </h2>
              
              <div className="relative w-full h-[2px] bg-neutral-900 overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>INDEX 000 - 119</span>
                <span>{loadProgress}% COMPLETE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main 450vh scroll track */}
      <div ref={containerRef} className="relative h-[350vh] w-full bg-[#0B0B0C] select-none">
        {/* Sticky child container */}
        <div className="sticky top-0 left-0 h-screen w-screen overflow-hidden">
          
          {/* Layer 2 (The Ambient Void Canvas - New): Interactive radial background moving slow */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, #1C0D26 0%, #0B0B0C 100%)",
                "radial-gradient(circle at 45% 55%, #241133 0%, #0B0B0C 100%)",
                "radial-gradient(circle at 55% 45%, #170A20 0%, #0B0B0C 100%)",
                "radial-gradient(circle at 50% 50%, #1C0D26 0%, #0B0B0C 100%)"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-full h-full"
          />

          {/* Layer 1 (The WebP Canvas): Dual-layer opacity-linked sequence container */}
          <motion.canvas
            ref={canvasRef}
            style={{ opacity: canvasOpacity }}
            className="absolute top-0 left-0 h-full w-full pointer-events-none block"
          />

          {/* Subtle vignette layer overlay */}
          <div className="absolute inset-0 bg-[#0B0B0C]/10 pointer-events-none" />
          
          {/* Render Narrative Overlay */}
          <NarrativeOverlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Static 3-Column Luxury Case Studies Ledger */}
      <CaseStudiesGrid />
    </>
  );
}
