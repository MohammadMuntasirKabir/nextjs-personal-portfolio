"use client";

import { Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "Nov 2025 — May 2026",
    role: "Software Developer Intern",
    company: "Xobotronix IT",
    description:
      "Learned and worked extensively with Odoo ERP — customizing modules, building workflows, and delivering client-facing solutions. Heavily leveraged AI Automation tools (Claude Code, Codex, n8n) to ship quality software in the shortest time possible. Actively involved in client communications across multiple projects, gathering requirements and translating them into technical deliverables.",
    technologies: [
      "Odoo ERP", "Python", "JavaScript", "Claude Code", "Codex", "n8n", "Zapier",
    ],
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line growth
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );
      }

      // Animate timeline items
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll(".timeline-item");
        items.forEach((item) => {
          const dot = item.querySelector(".timeline-dot");
          const card = item.querySelector(".timeline-card");

          gsap.from(card, {
            opacity: 0,
            x: 50,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          if (dot) {
            gsap.from(dot, {
              scale: 0,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Where I&apos;ve{" "}
            <span className="font-serif italic font-normal text-white">
              worked and learned.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My professional experience building real software for real clients —
            combining traditional development with AI-powered automation to
            deliver faster.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Animated timeline line */}
          <div
            ref={lineRef}
            className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 origin-top"
          />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative timeline-item mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="timeline-dot absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>

              {/* Content */}
              <div className="pl-12 md:pl-0 md:pr-16 md:text-left">
                <div className="timeline-card glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 group hover:translate-x-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
