"use client";

import { GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    period: "2022 — Jun 2026",
    degree: "Bachelor of Science in Computer Science",
    institution: "Brac University",
    description:
      "Completed a comprehensive Computer Science degree with coursework in software engineering, algorithms, data structures, database systems, artificial intelligence, and web technologies. Built multiple academic and personal projects throughout the program.",
    highlights: [
      "Software Engineering",
      "Algorithms & Data Structures",
      "Database Systems",
      "Artificial Intelligence",
      "Web Technologies",
      "Operating Systems",
    ],
  },
];

export const Education = () => {
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
        const items = timelineRef.current.querySelectorAll(".edu-item");
        items.forEach((item) => {
          const dot = item.querySelector(".edu-dot");
          const card = item.querySelector(".edu-card");

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
    <section id="education" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My{" "}
            <span className="font-serif italic font-normal text-white">
              academic foundation.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            The formal education that laid the groundwork for my career in
            software engineering and technology.
          </p>
        </div>

        {/* Education Cards */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Animated timeline line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-highlight/70 via-highlight/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(245,166,35,0.4)] origin-top"
          />

          {education.map((edu, idx) => (
            <div key={idx} className="relative edu-item mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="edu-dot absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-highlight rounded-full -translate-x-1/2 ring-4 ring-background z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>

              {/* Content */}
              <div className="pl-12 md:pl-0 md:pr-16 md:text-left">
                <div className="edu-card glass p-6 rounded-2xl border border-highlight/30 hover:border-highlight/50 transition-all duration-500 group hover:translate-x-1">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-4 h-4 text-highlight" />
                    <span className="text-sm text-highlight font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-highlight transition-colors duration-300">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                      >
                        {item}
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
