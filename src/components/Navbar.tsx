"use client";

import { useState, useEffect, useCallback } from "react";
import { useSiteContext } from "@/contexts/SiteContext";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggleTheme, setMode } = useSiteContext();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveSection = useCallback(() => {
    const sections = NAV_ITEMS.map((item) => item.href.slice(1));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-12">
        <a
          href="#hero"
          className="text-terminal-green font-bold text-sm tracking-tight"
        >
          ~/alexyoung
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green rounded-sm px-1 ${
                    activeSection === item.href.slice(1)
                      ? "text-terminal-green"
                      : "text-terminal-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 ml-2 border-l border-border pl-4">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-terminal-muted hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMode("cli")}
              className="p-1.5 rounded-md text-terminal-muted hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green"
              aria-label="Switch to terminal mode"
            >
              <TerminalIcon />
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-terminal-muted hover:text-foreground transition-colors"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMode("cli")}
            className="p-1.5 rounded-md text-terminal-muted hover:text-foreground transition-colors"
            aria-label="Switch to terminal mode"
          >
            <TerminalIcon />
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-1.5 rounded-md text-terminal-muted hover:text-foreground transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-terminal-green"
                      : "text-terminal-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
