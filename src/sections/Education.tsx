import { GraduationCap } from "lucide-react";

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
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
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
        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-highlight/70 via-highlight/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(245,166,35,0.5)]" />

          {education.map((edu, idx) => (
            <div
              key={idx}
              className="relative animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-highlight rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

              {/* Content */}
              <div className="pl-8 md:pl-0 md:pr-16 md:text-left">
                <div className="glass p-6 rounded-2xl border border-highlight/30 hover:border-highlight/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-4 h-4 text-highlight" />
                    <span className="text-sm text-highlight font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.highlights.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
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
