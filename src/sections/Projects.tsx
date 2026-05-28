"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: "GymAI Dhaka",
    description:
      "A gym partnership platform in Bangladesh connecting fitness enthusiasts with local gyms. Features gym discovery, membership management, and partner dashboards.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "#",
    github: "#",
    accent: "from-primary/20 via-primary/5 to-transparent",
    letter: "G",
  },
  {
    title: "HRMS System",
    description:
      "A comprehensive Human Resource Management System with employee management, recruitment workflows, payroll, and multi-role access control for 6 user roles.",
    tags: ["Laravel", "Livewire", "Flux UI", "SQLite"],
    link: "#",
    github: "#",
    accent: "from-highlight/20 via-highlight/5 to-transparent",
    letter: "H",
  },
  {
    title: "AI Agent Playground",
    description:
      "An experimental platform for building and testing autonomous AI agents. Exploring multi-agent orchestration, tool use, and reasoning patterns.",
    tags: ["Python", "TypeScript", "LLMs", "MCP"],
    link: "#",
    github: "#",
    accent: "from-purple-500/20 via-purple-500/5 to-transparent",
    letter: "A",
  },
  {
    title: "Personal Portfolio",
    description:
      "This very portfolio — built with Next.js 16, React 19, and Tailwind CSS 4. Features glass morphism, animated borders, and a dark teal theme.",
    tags: ["Next.js", "React 19", "Tailwind CSS 4", "TypeScript"],
    link: "#",
    github: "#",
    accent: "from-pink-500/20 via-pink-500/5 to-transparent",
    letter: "P",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        cards.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.7,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });

          // Hover animations
          const el = card as HTMLElement;
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { y: -10, scale: 1.02, duration: 0.4, ease: "power2.out" });
            const overlay = el.querySelector(".project-overlay");
            if (overlay) gsap.to(overlay, { opacity: 1, duration: 0.3 });
            const letter = el.querySelector(".project-letter");
            if (letter) gsap.to(letter, { scale: 1.4, duration: 0.4, ease: "back.out(2)" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
            const overlay = el.querySelector(".project-overlay");
            if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
            const letter = el.querySelector(".project-letter");
            if (letter) gsap.to(letter, { scale: 1, duration: 0.4, ease: "back.out(2)" });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              solve real problems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-2xl mx-auto">
            A selection of projects I&apos;ve built — from production HRMS
            platforms to experimental AI agent systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 relative"
            >
              {/* Image placeholder with animated gradient */}
              <div className={`relative overflow-hidden aspect-video bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-primary/5">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="project-letter text-5xl font-bold text-primary/15 group-hover:text-primary/30 transition-all duration-500">
                    {project.letter}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                {/* Overlay Links */}
                <div className="project-overlay absolute inset-0 flex items-center justify-center gap-4 opacity-0 bg-black/40 backdrop-blur-sm transition-all duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Project number badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-mono text-muted-foreground">
                  0{idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface/80 text-xs font-medium border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14 animate-fade-in animation-delay-600">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
