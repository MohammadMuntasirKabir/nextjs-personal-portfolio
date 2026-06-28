"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GithubIcon } from "@/lib/social-links";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Travel Planner",
    description:
      "An AI-powered travel planning app built with Next.js 16, React 19, and Prisma. Features AI-generated itineraries, location suggestions, drag-and-drop trip organization, and an interactive globe view.",
    tags: ["Next.js 16", "React 19", "Prisma", "NextAuth", "OpenRouter AI"],
    link: "https://ai-travel-planner-azure-chi.vercel.app",
    github: "https://github.com/MohammadMuntasirKabir/ai-travel-planner",
    image: "/travel-planner-hero.png",
    accent: "from-primary/20 via-primary/5 to-transparent",
    letter: "T",
  },
  {
    title: "HRMS System",
    description:
      "A comprehensive Human Resource Management System built with Laravel 13, Livewire, and Flux UI. Features employee management, recruitment workflows, payroll, and multi-role access control for 6 user roles.",
    tags: ["Laravel 13", "Livewire", "Flux UI", "SQLite"],
    link: "https://hrms-system-ogg4.onrender.com",
    github: "https://github.com/MohammadMuntasirKabir/hrms-system",
    image: "/hrms-hero.png",
    accent: "from-highlight/20 via-highlight/5 to-transparent",
    letter: "H",
  },
  {
    title: "Event Planner Pro",
    description:
      "A full-stack event management platform built with Next.js 16 and Clerk authentication. Features event creation, attendee management, real-time updates, and a polished dashboard with Prisma and Neon DB.",
    tags: ["Next.js 16", "Clerk", "Prisma", "Neon DB"],
    link: "https://event-planner-pro-lac.vercel.app",
    github: "https://github.com/MohammadMuntasirKabir/event-planner-pro",
    image: "/event-planner-hero.png",
    accent: "from-purple-500/20 via-purple-500/5 to-transparent",
    letter: "E",
  },
  {
    title: "GymAI Dhaka",
    description:
      "A gym partnership platform in Bangladesh connecting fitness enthusiasts with local gyms. Features gym discovery, membership management, and partner dashboards. Built with Vite, React, and Neon DB.",
    tags: ["Vite", "React 19", "Tailwind CSS", "Neon DB"],
    link: "https://gym-ai-dhaka.vercel.app",
    github: "https://github.com/MohammadMuntasirKabir/gymai-dhaka",
    image: "/gymai-hero.png",
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    letter: "G",
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
            const img = el.querySelector(".project-image") as HTMLElement;
            if (img) gsap.to(img, { scale: 1.08, duration: 0.6, ease: "power2.out" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
            const overlay = el.querySelector(".project-overlay");
            if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
            const letter = el.querySelector(".project-letter");
            if (letter) gsap.to(letter, { scale: 1, duration: 0.4, ease: "back.out(2)" });
            const img = el.querySelector(".project-image") as HTMLElement;
            if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
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
            platforms to AI-powered travel planners.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 relative"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-surface to-card">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="project-image object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Overlay Links */}
                <div className="project-overlay absolute inset-0 flex items-center justify-center gap-4 opacity-0 bg-black/40 backdrop-blur-sm transition-all duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo of ${project.title}`}
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
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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
                <div className="flex items-center gap-4 pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14 animate-fade-in animation-delay-600">
          <a
            href="https://github.com/MohammadMuntasirKabir?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
