import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="w-full bg-[#09090b] min-h-screen cursor-none selection:bg-purple-500/30">
      <Cursor />

      {/* Sequence / Canvas section — Hero */}
      <div className="relative" style={{ zIndex: 10 }}>
        <ScrollyCanvas />
      </div>

      {/* Interactive dotted design globally behind content */}
      <div className="fixed inset-0 z-0 opacity-50">
        <ParticleBackground />
      </div>

      {/* All content sections below sequence */}
      <div className="relative z-10 bg-transparent">
        <Projects />
        <Capabilities />
        <SystemArchitecture />
        <Footer />
      </div>
    </main>
  );
}
