"use client";

import { SITE } from "@/lib/constants";
import { useSiteContext } from "@/contexts/SiteContext";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const { setMode } = useSiteContext();

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center justify-center px-4 md:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-terminal-green text-sm mb-4 tracking-widest uppercase">
            Hello, world
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {SITE.name}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-terminal-muted mb-8">
            {SITE.title} &middot; {SITE.location}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-terminal-muted leading-relaxed mb-10 max-w-xl mx-auto">
            Building intelligent systems that make complex data accessible.
            Passionate about MCP servers, deep research agents, and full-stack AI applications.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-terminal-green text-background font-medium text-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Projects
            </a>
            <button
              onClick={() => setMode("cli")}
              className="px-6 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:border-terminal-green/50 hover:text-terminal-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                Open Terminal
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
