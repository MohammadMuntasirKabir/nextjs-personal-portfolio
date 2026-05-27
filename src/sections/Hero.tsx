"use client";

import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Bot,
  Code2,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { socialLinks } from "@/lib/social-links";

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  duration: 15 + (i % 5) * 4,
  delay: (i % 7) * 0.7,
}));

const aiAutomation = [
  "Claude Code",
  "Codex",
  "OpenCode",
  "Zapier",
  "n8n",
  "OpenClaw",
  "Hermes Agent",
];

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Laravel",
  "Livewire",
  "Vue.js",
  "PHP",
  "MySQL",
  "SQLite",
  "PostgreSQL",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "Zustand",
  "Git",
  "GitHub",
  "GitLab",
  "Odoo ERP",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: p.left,
              top: p.top,
              animation: `slow-drift ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer &bull; AI Automation Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">digital</span>
                <br />
                products with
                <br />
                <span className="font-serif italic font-normal text-white">
                  purpose.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I&apos;m Mohammad Muntasir Kabir — a software engineer
                specializing in full-stack web development and AI-powered
                automation. I build scalable applications with React, Next.js,
                Laravel, and leverage cutting-edge AI tools to deliver quality
                software faster.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="animate-fade-in animation-delay-300 space-y-6">
            {/* Outer card */}
            <div className="glass rounded-3xl p-6 glow-border space-y-6">
              {/* AI Automation Card */}
              <div className="glass rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
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
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="glass rounded-2xl p-6 border border-highlight/20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-highlight" />
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
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="flex gap-4">
              <div className="glass rounded-xl px-4 py-3 animate-float flex items-center gap-3 flex-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-sm font-medium">Available for work</span>
              </div>
              <div className="glass rounded-xl px-4 py-3 animate-float animation-delay-500 flex items-center gap-3 flex-1 justify-center">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-xs text-muted-foreground">Year Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
