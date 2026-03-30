"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SITE, ASCII_BANNER } from "@/lib/constants";
import { executeCommand } from "@/lib/commands";
import { useSiteContext } from "@/contexts/SiteContext";
import type { BlogPost } from "@/lib/blog";

interface HistoryEntry {
  command: string;
  output: string;
}

const WELCOME_TEXT = `Welcome to ${SITE.name}'s terminal.
Type 'help' to see available commands.`;

function TrafficLights({ onClose }: { onClose: () => void }) {
  return (
    <div className="group/lights flex gap-2">
      <button
        onClick={onClose}
        className="relative w-3 h-3 rounded-full bg-[var(--traffic-red)] flex items-center justify-center cursor-default"
        aria-label="Close terminal"
      >
        <svg
          className="w-1.5 h-1.5 opacity-0 group-hover/lights:opacity-100 transition-opacity"
          viewBox="0 0 8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="1.5" y1="1.5" x2="6.5" y2="6.5" />
          <line x1="6.5" y1="1.5" x2="1.5" y2="6.5" />
        </svg>
      </button>
      <button
        onClick={onClose}
        className="relative w-3 h-3 rounded-full bg-[var(--traffic-yellow)] flex items-center justify-center cursor-default"
        aria-label="Minimize terminal"
      >
        <svg
          className="w-2 h-2 opacity-0 group-hover/lights:opacity-100 transition-opacity"
          viewBox="0 0 8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="1" y1="4" x2="7" y2="4" />
        </svg>
      </button>
      <span className="relative w-3 h-3 rounded-full bg-[var(--traffic-green)] flex items-center justify-center">
        <svg
          className="w-2 h-2 opacity-0 group-hover/lights:opacity-100 transition-opacity"
          viewBox="0 0 8 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <polyline points="1,3.5 3.5,6 7,1.5" />
        </svg>
      </span>
    </div>
  );
}

export default function Terminal({ posts }: { posts: BlogPost[] }) {
  const { toggleTheme, setTheme, setMode } = useSiteContext();

  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: "", output: ASCII_BANNER + "\n" + WELCOME_TEXT },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (trimmed) {
      setCmdHistory((prev) => [trimmed, ...prev]);
    }
    setHistoryIndex(-1);

    const result = executeCommand(trimmed, posts);

    if (result.clear) {
      setHistory([]);
      setInput("");
      return;
    }

    if (result.action === "toggle-theme") toggleTheme();
    else if (result.action === "set-theme-light") setTheme("light");
    else if (result.action === "set-theme-dark") setTheme("dark");
    else if (result.action === "switch-gui") {
      setHistory((prev) => [
        ...prev,
        { command: trimmed, output: result.output },
      ]);
      setInput("");
      setTimeout(() => setMode("gui"), 300);
      return;
    }

    setHistory((prev) => [
      ...prev,
      { command: trimmed, output: result.output },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIdx = Math.min(historyIndex + 1, cmdHistory.length - 1);
        setHistoryIndex(newIdx);
        setInput(cmdHistory[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIdx = historyIndex - 1;
        setHistoryIndex(newIdx);
        setInput(cmdHistory[newIdx]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 md:p-8">
      <div className="terminal-window w-full max-w-4xl bg-surface border border-border overflow-hidden">
        {/* Title bar */}
        <div
          className="flex items-center px-4 h-[38px] border-b border-border select-none"
          style={{ background: "var(--title-bar)" }}
        >
          <TrafficLights onClose={() => setMode("gui")} />
          <span className="flex-1 text-center text-xs text-terminal-muted tracking-wide">
            {SITE.name.toLowerCase()} &mdash; -zsh &mdash; 80×24
          </span>
          <div className="w-[52px]" />
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          onClick={focusInput}
          className="p-4 md:p-6 h-[70vh] md:h-[75vh] overflow-y-auto cursor-text"
        >
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.command && (
                <div className="flex gap-2">
                  <span className="text-terminal-green terminal-glow">
                    {SITE.prompt} ~ $
                  </span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-terminal-green/90">
                  {entry.output}
                </pre>
              )}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <span className="text-terminal-green terminal-glow">
              {SITE.prompt} ~ $
            </span>
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-foreground caret-transparent focus-visible:ring-1 focus-visible:ring-terminal-green/50 rounded-sm"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                aria-label="Terminal command input"
              />
              <span
                className="cursor-blink absolute top-0 pointer-events-none"
                style={{ left: `${input.length}ch` }}
              >
                <span className="text-terminal-green/80">&#9608;</span>
              </span>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
