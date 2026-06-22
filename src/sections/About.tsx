"use client";

import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
    color: "primary",
  },
  {
    icon: Rocket,
    title: "AI-Powered Delivery",
    description: "Leveraging Claude Code, Codex, n8n, and more to ship quality software faster.",
    color: "highlight",
  },
  {
    icon: Users,
    title: "Client Communication",
    description: "Experienced in gathering requirements and translating them into deliverables.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Full-Stack Versatility",
    description: "From React and Next.js to Laravel and Odoo ERP — comfortable across the stack.",
    color: "highlight",
  },
];

const stats = [
  { value: "0.5+", label: "Years Experience" },
  { value: "3+", label: "Major Projects" },
  { value: "7+", label: "AI Tools Used" },
  { value: "20+", label: "Technologies" },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Cards stagger with scale
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        cards.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.6,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        // Hover tilt effect
        cards.forEach((card) => {
          const el = card as HTMLElement;
          el.addEventListener("mouseenter", () => {
            gsap.to(el, { y: -8, scale: 1.03, duration: 0.4, ease: "power2.out" });
            const icon = el.querySelector(".card-icon-box");
            if (icon) gsap.to(icon, { scale: 1.15, rotate: 8, duration: 0.4, ease: "back.out(2)" });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(el, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
            const icon = el.querySelector(".card-icon-box");
            if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.4, ease: "power2.out" });
          });
        });
      }

      // Stats counter animation
      if (statsRef.current) {
        gsap.from(Array.from(statsRef.current.children), {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-highlight/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
                About Me
              </span>
            </div>

            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              Passionate about{" "}
              <span className="font-serif italic font-normal text-white">
                building things
              </span>{" "}
              that matter.
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="animate-fade-in animation-delay-200 leading-relaxed">
                I&apos;m Mohammad Muntasir Kabir — a software engineer based in
                Bangladesh with a B.Sc. in Computer Science from Brac University.
                I specialize in full-stack web development with React, Next.js,
                Laravel, and modern JavaScript, and I have hands-on experience
                with Odoo ERP from my internship at Xobotronix IT.
              </p>
              <p className="animate-fade-in animation-delay-300 leading-relaxed">
                What sets me apart is my heavy use of AI Automation tools. I use
                Claude Code, Codex, OpenCode, Zapier, n8n, OpenClaw, and Hermes
                Agent daily to deliver quality software in the shortest time
                possible. During my internship, this approach helped me ship
                client projects efficiently while maintaining high code quality.
              </p>
              <p className="animate-fade-in animation-delay-400 leading-relaxed">
                I&apos;m also experienced in client communication — gathering
                requirements, translating business needs into technical
                deliverables, and maintaining professional relationships across
                multiple concurrent projects.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-500">
              <p className="text-lg font-medium italic text-foreground">
                &quot;Great software isn&apos;t just functional — it&apos;s
                delivered on time, communicates clearly, and is built to
                last.&quot;
              </p>
            </div>

            {/* Stats row */}
            <div ref={statsRef} className="grid grid-cols-4 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-500 cursor-default group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`card-icon-box w-12 h-12 rounded-xl ${item.color === "highlight" ? "bg-highlight/10" : "bg-primary/10"} flex items-center justify-center mb-4 transition-all duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color === "highlight" ? "text-highlight" : "text-primary"}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-muted-foreground relative z-10 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
