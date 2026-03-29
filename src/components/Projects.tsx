import { PROJECTS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 inline-block mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function LanguageDot({ language }: { language: string }) {
  const colors: Record<string, string> = {
    Python: "bg-blue-400",
    TypeScript: "bg-blue-600",
    JavaScript: "bg-yellow-400",
    Rust: "bg-orange-500",
  };
  return (
    <span
      className={`inline-block w-3 h-3 rounded-full mr-1.5 ${colors[language] || "bg-gray-400"}`}
    />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 md:px-8 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-terminal-green text-sm mb-2 tracking-wider">
            $ ls projects/
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Open Source Projects
          </h3>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.name} delay={0.1 * i}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface border border-border rounded-lg p-5 hover:border-terminal-green/50 transition-all duration-300 group h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-terminal-green transition-colors">
                    {project.name}
                  </h4>
                  <svg
                    className="w-4 h-4 text-terminal-muted group-hover:text-terminal-green transition-colors shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-sm text-terminal-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-terminal-muted">
                  <span className="flex items-center">
                    <LanguageDot language={project.language} />
                    {project.language}
                  </span>
                  <span className="flex items-center text-terminal-orange">
                    <StarIcon />
                    {project.stars}
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
