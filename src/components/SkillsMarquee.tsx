const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "Tailwind CSS", "Laravel", "MongoDB", "PostgreSQL", "Firebase",
  "Supabase", "Redux", "Zustand", "Redis", "Docker",
  "AWS", "Git", "GraphQL", "REST APIs", "Claude Code",
  "Codex", "n8n", "Zapier", "Figma",
];

export const SkillsMarquee = () => {
  const doubled = [...skills, ...skills];

  return (
    <section className="py-12 border-y border-border/50 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee">
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="mx-4 px-5 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default whitespace-nowrap flex-shrink-0"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
