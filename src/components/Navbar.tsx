"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Terminal", href: "#terminal" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-12">
        <a
          href="#terminal"
          className="text-terminal-green font-bold text-sm tracking-tight"
        >
          ~/alexyoung
        </a>
        <ul className="flex gap-4 md:gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs md:text-sm text-terminal-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
