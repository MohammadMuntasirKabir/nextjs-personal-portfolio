import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Nov 2025 — May 2026",
    role: "Software Developer Intern",
    company: "Xobotronix IT",
    description:
      "Learned and worked extensively with Odoo ERP — customizing modules, building workflows, and delivering client-facing solutions. Heavily leveraged AI Automation tools (Claude Code, Codex, n8n) to ship quality software in the shortest time possible. Actively involved in client communications across multiple projects, gathering requirements and translating them into technical deliverables.",
    technologies: [
      "Odoo ERP",
      "Python",
      "JavaScript",
      "Claude Code",
      "Codex",
      "n8n",
      "Zapier",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Where I&apos;ve{" "}
            <span className="font-serif italic font-normal text-white">
              worked and learned.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            My professional experience building real software for real clients —
            combining traditional development with AI-powered automation to
            deliver faster.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

              {/* Content */}
              <div className="pl-8 md:pl-0 md:pr-16 md:text-left">
                <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
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
