import { ABOUT_TEXT, EXPERIENCE } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-terminal-green text-sm mb-2 tracking-wider">
            $ cat about.md
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            About Me
          </h2>
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

        <ScrollReveal delay={0.2}>
          <p className="text-terminal-green text-sm mb-2 tracking-wider">
            $ cat experience.log
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Experience
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <ScrollReveal
              key={`${exp.period}-${exp.company}-${exp.role}`}
              delay={0.1 * (i + 1)}
            >
              <div className="relative pl-6 border-l-2 border-border hover:border-terminal-green transition-colors">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-terminal-green" />
                <p className="text-sm text-terminal-orange mb-1">
                  {exp.period}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-terminal-muted mb-2">
                  {exp.company}
                </p>
                {exp.bullets && exp.bullets.length > 0 ? (
                  <ul className="text-sm text-terminal-muted leading-relaxed list-disc pl-4 space-y-1.5">
                    {exp.bullets.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-terminal-muted leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
