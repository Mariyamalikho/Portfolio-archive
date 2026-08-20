"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  title: string;
  num: string;
};

export function CaseStudyNav({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <div className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <nav className="flex flex-col gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center gap-4 text-xs font-mono transition-all duration-300 ${
                isActive ? "text-purple-400" : "text-neutral-600 hover:text-neutral-400"
              }`}
            >
              <span>{section.num}</span>
              <span className={`uppercase tracking-widest ${isActive ? "opacity-100" : "opacity-0 -translate-x-4"} transition-all duration-300`}>
                {section.title}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
