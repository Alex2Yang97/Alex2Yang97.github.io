import { ABOUT_TEXT, EXPERIENCE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-terminal-green text-sm mb-2 tracking-wider">
            $ cat about.md
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            About Me
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-surface border border-border rounded-lg p-6 md:p-8 mb-12">
            {ABOUT_TEXT.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-terminal-muted leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Experience timeline */}
        <ScrollReveal delay={0.2}>
          <h2 className="text-terminal-green text-sm mb-2 tracking-wider">
            $ cat experience.log
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Experience
          </h3>
        </ScrollReveal>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="relative pl-6 border-l-2 border-border hover:border-terminal-green transition-colors">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-terminal-green" />
                <p className="text-sm text-terminal-orange mb-1">
                  {exp.period}
                </p>
                <h4 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h4>
                <p className="text-sm text-terminal-muted mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-terminal-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
