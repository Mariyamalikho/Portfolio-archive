import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="w-full bg-[#0B0B0C] min-h-screen cursor-none">
      <Cursor />

      {/* Sequence / Canvas section — sits above particles at z-index 10 */}
      <div className="relative" style={{ zIndex: 10 }}>
        <ScrollyCanvas />
      </div>

      {/* Ambient floating particle background — fixed, full viewport, z-index 1 */}
      <ParticleBackground />

      {/* All content sections below sequence — z-index 2, transparent backgrounds */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Projects />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
