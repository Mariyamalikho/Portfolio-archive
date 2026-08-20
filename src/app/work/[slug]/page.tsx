import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Cursor } from "@/components/Cursor";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { CaseStudyNav } from "@/components/CaseStudyNav";

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

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Dynamically build the sections array
  const sections: { id: string; title: string; num: string }[] = [];
  let sectionIndex = 1;
  const getNum = () => String(sectionIndex++).padStart(2, "0");

  if (project.context) sections.push({ id: "context", title: "Context", num: getNum() });
  sections.push({ id: "challenge", title: "Challenge", num: getNum() });
  if (project.research) sections.push({ id: "discovery", title: "Discovery", num: getNum() });
  if (project.systemArchitecture) sections.push({ id: "system", title: "System", num: getNum() });
  if (project.process) sections.push({ id: "approach", title: "Approach", num: getNum() });
  sections.push({ id: "solution", title: "Solution", num: getNum() });
  sections.push({ id: "outcome", title: "Outcome", num: getNum() });
  if (project.outcome.learnings && project.outcome.learnings.length > 0) {
    sections.push({ id: "learnings", title: "Learnings", num: getNum() });
  }
  if (project.outcome.nextSteps && project.outcome.nextSteps.length > 0) {
    sections.push({ id: "next", title: "What's Next", num: getNum() });
  }

  const getSectionNum = (id: string) => sections.find(s => s.id === id)?.num;

  return (
    <main className="w-full bg-[#09090b] min-h-screen text-white cursor-none selection:bg-purple-500/30">
      <Cursor />
      <CaseStudyNav sections={sections} />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a0b2e_0%,#09090b_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 space-y-32">
        
        {/* Navigation */}
        <nav className="mb-24 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO PORTFOLIO
          </Link>
          
          {/* Mobile Progress Indicator */}
          <div className="xl:hidden text-xs font-mono text-neutral-500 flex gap-2">
            <span>{sections.length} SECTIONS</span>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="space-y-12">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
                {project.title}
              </h1>
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
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
          
          {project.heroImage && (
            <div className="w-full relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 mt-12">
              <Image 
                src={project.heroImage} 
                alt="Project Hero" 
                fill 
                className="object-contain object-center bg-black/50"
              />
            </div>
          )}
        </section>

        {/* CONTEXT */}
        {project.context && (
          <section id="context" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
                {getSectionNum("context")} / Context
              </h2>
            </div>
            <div className="md:col-span-8 space-y-12">
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed whitespace-pre-wrap">
                {project.context}
              </p>
            </div>
          </section>
        )}

        {/* CHALLENGE */}
        <section id="challenge" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
              {getSectionNum("challenge")} / The Challenge
            </h2>
          </div>
          <div className="md:col-span-8 space-y-16">
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              {project.challenge.text}
            </p>
            
            <blockquote className="border-l-4 border-purple-500 pl-6 md:pl-10 py-2">
              <p className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                &quot;{project.challenge.quote}&quot;
              </p>
            </blockquote>

            {project.challenge.image && (
              <div className="w-full relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <Image 
                  src={project.challenge.image} 
                  alt="The Challenge" 
                  fill 
                  className="object-contain object-center bg-black/50"
                />
              </div>
            )}
          </div>
        </section>

        {/* RESEARCH / DISCOVERY */}
        {project.research && (
          <section id="discovery" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
                {getSectionNum("discovery")} / Discovery
              </h2>
            </div>
            <div className="md:col-span-8 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white">Core Questions</h3>
                  <ul className="space-y-4">
                    {project.research.questions.map((q, i) => (
                      <li key={i} className="flex gap-4 text-neutral-400">
                        <span className="text-purple-500 font-mono shrink-0">0{i + 1}</span>
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

              {project.research.image && (
                <div className="w-full relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                  <Image 
                    src={project.research.image} 
                    alt="Research Findings" 
                    fill 
                    className="object-contain object-center bg-black/50"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* SYSTEM ARCHITECTURE */}
        {project.systemArchitecture && (
          <section id="system" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
                {getSectionNum("system")} / System
              </h2>
            </div>
            <div className="md:col-span-8 space-y-12">
              <p className="text-xl text-neutral-300 leading-relaxed">
                {project.systemArchitecture.description}
              </p>
              
              <div className="relative w-full py-16 px-8 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col gap-6 max-w-xl mx-auto">
                  {project.systemArchitecture.components.map((comp, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md relative">
                      <div className="font-mono text-xs text-purple-500">SYS_{i+1}</div>
                      <div className="text-neutral-200 font-medium">{comp}</div>
                      {/* Connection line between nodes */}
                      {i !== project.systemArchitecture!.components.length - 1 && (
                        <div className="absolute left-10 -bottom-6 w-px h-6 bg-purple-500/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {project.systemArchitecture.image && (
                <div className="w-full relative aspect-[4/3] md:aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                  <Image 
                    src={project.systemArchitecture.image} 
                    alt="System Architecture Diagram" 
                    fill 
                    className="object-contain object-center bg-black/50"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* APPROACH */}
        {project.process && (
          <section id="approach" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
                {getSectionNum("approach")} / Approach
              </h2>
            </div>
            <div className="md:col-span-8">
              {/* Desktop Horizontal */}
              <div className="hidden md:flex flex-row gap-4 items-center">
                {project.process.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 flex-1">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-purple-500">0{i+1}</span>
                      <span className="text-neutral-200 font-medium">{step}</span>
                    </div>
                    {i !== project.process!.length - 1 && (
                      <div className="flex-1 h-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile Vertical */}
              <div className="flex md:hidden flex-col gap-8">
                {project.process.map((step, i) => (
                  <div key={i} className="flex items-start gap-6 relative">
                    <span className="font-mono text-xs text-purple-500 shrink-0 mt-1">0{i+1}</span>
                    <span className="text-neutral-200 font-medium text-lg">{step}</span>
                    {i !== project.process!.length - 1 && (
                      <div className="absolute left-[0.4rem] top-6 bottom-[-2rem] w-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SOLUTION */}
        <section id="solution" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
              {getSectionNum("solution")} / Solution
            </h2>
          </div>
          <div className="md:col-span-8 space-y-16">
            <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-medium">
              {project.solution.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-8">
              {project.solution.features.map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-8 h-px bg-purple-500/50 mb-4" />
                  <h4 className="text-white font-medium">{feature}</h4>
                </div>
              ))}
            </div>

            {/* Visual Evidence (Images) */}
            {project.solution.images && project.solution.images.length > 0 && (
              <div className="flex flex-col gap-8 mt-16">
                {project.solution.images.map((img, i) => (
                  <div key={i} className="w-full relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                    <Image 
                      src={img} 
                      alt={`Solution feature ${i + 1}`} 
                      fill 
                      className="object-contain object-center bg-black/50"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* OUTCOME */}
        <section id="outcome" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
              {getSectionNum("outcome")} / Results
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-6">
              {project.outcome.results.map((res, i) => (
                <li key={i} className="flex items-start gap-6 text-xl text-neutral-300">
                  <span className="text-purple-500 font-mono text-sm mt-1.5 shrink-0">{(i+1).toString().padStart(2, "0")}</span>
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LEARNINGS */}
        {project.outcome.learnings && project.outcome.learnings.length > 0 && (
          <section id="learnings" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
                {getSectionNum("learnings")} / Learnings
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.outcome.learnings.map((learning, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-neutral-300 leading-relaxed">
                    {learning}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* NEXT STEPS */}
        {project.outcome.nextSteps && project.outcome.nextSteps.length > 0 && (
          <section id="next" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start pt-16 pb-24">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-[#A855F7] tracking-widest uppercase md:sticky md:top-32 mb-4 md:mb-0">
                {getSectionNum("next")} / What&apos;s Next
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <ul className="space-y-4">
                {project.outcome.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-neutral-400">
                    <span className="text-neutral-600 mt-1">→</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* NEXT PROJECT FOOTER */}
        <section className="pt-32 pb-32 border-t border-white/10">
          <Link href={`/work/${nextProject.slug}`} className="group block">
            <span className="block text-sm font-mono text-[#A855F7] mb-6 uppercase tracking-widest">Next Case Study</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="block text-neutral-500 mb-2">{nextProject.category}</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tighter">
                  {nextProject.title}
                </h2>
              </div>
              <div className="shrink-0 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500 transition-all group-hover:bg-purple-500/10">
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
