"use client";

import { Button } from "@/components/Button";
import {
  ArrowRight,
  Download,
  Bot,
  Code2,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { socialLinks } from "@/lib/social-links";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  duration: 15 + (i % 5) * 4,
  delay: (i % 7) * 0.7,
  size: i % 3 === 0 ? 2.5 : 1.5,
  opacity: i % 4 === 0 ? 0.8 : 0.4 + (i % 3) * 0.15,
}));

const aiAutomation = [
  "Claude Code", "Codex", "OpenCode", "Zapier", "n8n", "OpenClaw", "Hermes Agent",
];

const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Python",
  "React", "Next.js", "Tailwind CSS", "Laravel", "Livewire",
  "Vue.js", "PHP", "MySQL", "SQLite", "PostgreSQL",
  "Node.js", "Express", "MongoDB", "Redux", "Zustand",
  "Git", "GitHub", "GitLab", "Odoo ERP",
];

const typewriterTexts = [
  "digital products",
  "AI-powered apps",
  "scalable systems",
  "modern solutions",
];

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentText = typewriterTexts[typewriterIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    }
  }, [displayText, isDeleting, currentText]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, 100);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tick]);

  // Particle animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      particleRefs.current.forEach((p, i) => {
        if (!p) return;
        gsap.to(p, {
          y: `random(-30, 30)`,
          x: `random(-20, 20)`,
          duration: 3 + (i % 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-highlight/3 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            ref={(el) => { particleRefs.current[p.id] = el; }}
            className="absolute rounded-full"
            style={{
              backgroundColor: p.id % 5 === 0 ? "#f5a623" : "#20B2A6",
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              animation: `slow-drift ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer &bull; AI Automation Specialist
              </span>
            </div>

            {/* Headline with typewriter */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-gradient inline-block">
                  {displayText}
                  <span className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 animate-pulse align-middle" />
                </span>
                <br />
                with{" "}
                <span className="font-serif italic font-normal text-white relative">
                  purpose
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-highlight rounded-full" />
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
                Hi, I&apos;m Mohammad Muntasir Kabir — a software engineer
                specializing in full-stack web development and AI-powered
                automation. I build scalable applications with React, Next.js,
                Laravel, and leverage cutting-edge AI tools to deliver quality
                software faster.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="group">
                Contact Me <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex items-center gap-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300 group relative"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-6 animate-fade-in animation-delay-300">
            {/* Outer card */}
            <div className="glass rounded-3xl p-6 glow-border space-y-6 animate-glow-pulse">
              {/* AI Automation Card */}
              <div className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Bot className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">AI Automation</h3>
                    <p className="text-xs text-muted-foreground">
                      Tools I use to ship faster
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aiAutomation.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:scale-105 hover:bg-surface/80 transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="glass rounded-2xl p-6 border border-highlight/20 hover:border-highlight/40 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-highlight/20 transition-all duration-300">
                    <Code2 className="w-5 h-5 text-highlight group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Tech Stack</h3>
                    <p className="text-xs text-muted-foreground">
                      Technologies I work with daily
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-highlight/50 hover:text-highlight hover:scale-105 hover:bg-surface/80 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="flex gap-4">
              <div className="glass rounded-xl px-4 py-3 animate-float flex items-center gap-3 flex-1 group hover:border-primary/30 transition-all duration-300">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30" />
                </div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 animate-float animation-delay-500 flex items-center gap-3 flex-1 justify-center group hover:border-primary/30 transition-all duration-300">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-xs text-muted-foreground">Year Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5 group-hover:border-primary transition-colors duration-300">
            <div className="w-1.5 h-2.5 rounded-full bg-current animate-bounce-subtle" />
          </div>
        </a>
      </div>
    </section>
  );
};
