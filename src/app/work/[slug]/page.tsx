import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Cursor } from "@/components/Cursor";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Footer } from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find the next project for the footer link
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="w-full bg-[#09090b] min-h-screen text-white cursor-none selection:bg-purple-500/30">
      <Cursor />
      
      {/* Extremely subtle ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a0b2e_0%,#09090b_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-32">
        
        {/* Navigation */}
        <nav className="mb-24">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO PORTFOLIO
          </Link>
        </nav>

        {/* HERO SECTION */}
        <section className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Technical Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-sm">
            <div>
              <span className="block text-neutral-500 mb-2">Role</span>
              <span className="text-white">{project.role}</span>
            </div>
            <div>
              <span className="block text-neutral-500 mb-2">Timeline</span>
              <span className="text-white">{project.timeline}</span>
            </div>
            <div>
              <span className="block text-neutral-500 mb-2">Category</span>
              <span className="text-white">{project.category}</span>
            </div>
            <div>
              <span className="block text-neutral-500 mb-2">Tools</span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-white">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW / CHALLENGE */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase sticky top-32">
              01 / The Challenge
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              {project.challenge.text}
            </p>
            <blockquote className="border-l-4 border-purple-500 pl-6 md:pl-10 py-2">
              <p className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                "{project.challenge.quote}"
              </p>
            </blockquote>
          </div>
        </section>

        {/* RESEARCH / DISCOVERY */}
        {project.research && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase sticky top-32">
                02 / Discovery
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Core Questions</h3>
                <ul className="space-y-4">
                  {project.research.questions.map((q, i) => (
                    <li key={i} className="flex gap-4 text-neutral-400">
                      <span className="text-purple-500 font-mono">0{i + 1}</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Key Findings</h3>
                <ul className="space-y-4">
                  {project.research.findings.map((f, i) => (
                    <li key={i} className="flex gap-4 text-neutral-400 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* SYSTEM ARCHITECTURE */}
        {project.systemArchitecture && (
          <section className="relative w-full py-24 my-24 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]">
            {/* Subtle glow / grid behind the architecture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase">
                  System Architecture
                </h2>
                <p className="text-xl text-neutral-300 leading-relaxed">
                  {project.systemArchitecture.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                {project.systemArchitecture.components.map((comp, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                    <div className="font-mono text-xs text-purple-500">SYS_{i+1}</div>
                    <div className="text-neutral-200 font-medium">{comp}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SOLUTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase sticky top-32">
              Solution
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-medium">
              {project.solution.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {project.solution.features.map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-8 h-px bg-purple-500/50 mb-4" />
                  <h4 className="text-white font-medium">{feature}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pb-24">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase sticky top-32">
              Outcome & Learnings
            </h2>
          </div>
          <div className="md:col-span-8 space-y-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">Results</h3>
              <ul className="space-y-4">
                {project.outcome.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-neutral-300">
                    <span className="text-purple-500 mt-1">✓</span>
                    {res}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">Key Learnings</h3>
              <div className="grid grid-cols-1 gap-6">
                {project.outcome.learnings.map((learning, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-neutral-300">
                    {learning}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEXT PROJECT FOOTER */}
        <section className="pt-24 pb-24 border-t border-white/10">
          <Link href={`/work/${nextProject.slug}`} className="group block">
            <span className="block text-sm font-mono text-neutral-500 mb-4 uppercase tracking-widest">Next Case Study</span>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tighter">
                {nextProject.title}
              </h2>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500 transition-all">
                <ArrowUpRight className="w-8 h-8 text-white group-hover:text-purple-400" />
              </div>
            </div>
          </Link>
        </section>

      </div>
      <Footer />
    </main>
  );
}
