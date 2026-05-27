import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "AI-Powered Delivery",
    description:
      "Leveraging Claude Code, Codex, n8n, and more to ship quality software faster.",
  },
  {
    icon: Users,
    title: "Client Communication",
    description:
      "Experienced in gathering requirements, translating them into deliverables, and maintaining client relationships.",
  },
  {
    icon: Lightbulb,
    title: "Full-Stack Versatility",
    description:
      "From React and Next.js to Laravel and Odoo ERP — comfortable across the entire stack.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Passionate about{" "}
              <span className="font-serif italic font-normal text-white">
                building things
              </span>{" "}
              that matter.
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I&apos;m Mohammad Muntasir Kabir — a software engineer based in
                Bangladesh with a B.Sc. in Computer Science from Brac University.
                I specialize in full-stack web development with React, Next.js,
                Laravel, and modern JavaScript, and I have hands-on experience
                with Odoo ERP from my internship at Xobotronix IT.
              </p>
              <p>
                What sets me apart is my heavy use of AI Automation tools. I use
                Claude Code, Codex, OpenCode, Zapier, n8n, OpenClaw, and Hermes
                Agent daily to deliver quality software in the shortest time
                possible. During my internship, this approach helped me ship
                client projects efficiently while maintaining high code quality.
              </p>
              <p>
                I&apos;m also experienced in client communication — gathering
                requirements, translating business needs into technical
                deliverables, and maintaining professional relationships across
                multiple concurrent projects.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &quot;Great software isn&apos;t just functional — it&apos;s
                delivered on time, communicates clearly, and is built to
                last.&quot;
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
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
