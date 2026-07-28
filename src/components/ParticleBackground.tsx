"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorIdx: number;
}

const COLORS = [
  "168,85,247",  // amethyst purple
  "216,180,254", // light purple
  "236,72,153",  // pink
  "192,132,252", // mid purple
];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CONNECTION_DIST = 180;
    const REPULSE_RADIUS = 150;
    const REPULSE_FORCE = 3; // How fast they run away from the cursor

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Lower density: 1 particle per 20000px²
      const COUNT = Math.floor((canvas.width * canvas.height) / 20000);
      particlesRef.current = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.2 + 0.4,
        colorIdx: Math.floor(Math.random() * COLORS.length),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Move and repel
      for (const p of particles) {
        // Natural drift
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPULSE_RADIUS) {
          const force = (REPULSE_RADIUS - dist) / REPULSE_RADIUS; // 1 at center, 0 at edge
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * REPULSE_FORCE;
          p.y += Math.sin(angle) * force * REPULSE_FORCE;
        }

        // Boundary bounce
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > canvas.width) {
          p.x = canvas.width;
          p.vx *= -1;
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > canvas.height) {
          p.y = canvas.height;
          p.vy *= -1;
        }
      }

      // Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.45; // Increased line opacity
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(168,85,247,${alpha})`;
            ctx.lineWidth = 0.6; // Slightly thicker lines
            ctx.stroke();
          }
        }
      }

      // Dots + glow rings
      for (const p of particles) {
        const col = COLORS[p.colorIdx];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},0.05)`; // Increased glow opacity
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},0.8)`; // Increased core dot opacity
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOut = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    init();
    draw();

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
