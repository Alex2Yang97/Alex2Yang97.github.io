"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SITE, ASCII_BANNER } from "@/lib/constants";
import { executeCommand } from "@/lib/commands";
import type { BlogPost } from "@/lib/blog";

type ThemeColor = "green" | "amber" | "blue";

interface HistoryEntry {
  command: string;
  output: string;
}

const THEME_CLASSES: Record<ThemeColor, string> = {
  green: "text-terminal-green",
  amber: "text-terminal-amber",
  blue: "text-blue-400",
};

const WELCOME_TEXT = `Welcome to ${SITE.name}'s terminal.
Type 'help' to see available commands.`;

export default function Terminal({ posts }: { posts: BlogPost[] }) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: "", output: ASCII_BANNER + "\n" + WELCOME_TEXT },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState<ThemeColor>("green");
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

    if (trimmed === "theme") {
      setTheme((prev) => {
        const themes: ThemeColor[] = ["green", "amber", "blue"];
        const idx = themes.indexOf(prev);
        return themes[(idx + 1) % themes.length];
      });
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

  const themeClass = THEME_CLASSES[theme];

  return (
    <div className="min-h-[100dvh] flex items-center justify-center p-4 md:p-8">
      <div className="terminal-window w-full max-w-4xl rounded-xl bg-surface border border-border overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-sm text-terminal-muted">
            alexyoung ~ terminal
          </span>
          <div className="w-[52px]" />
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          onClick={focusInput}
          className="p-4 md:p-6 h-[70vh] md:h-[75vh] overflow-y-auto cursor-text"
        >
          {/* History */}
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.command && (
                <div className="flex gap-2">
                  <span className={themeClass}>{SITE.prompt} ~ $</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <pre className={`whitespace-pre-wrap text-sm leading-relaxed ${themeClass} opacity-90`}>
                  {entry.output}
                </pre>
              )}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <span className={themeClass}>{SITE.prompt} ~ $</span>
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-foreground caret-transparent"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                aria-label="Terminal command input"
              />
              {/* Custom block cursor */}
              <span
                className="cursor-blink absolute top-0 pointer-events-none"
                style={{ left: `${input.length}ch` }}
              >
                <span className={`${themeClass} opacity-80`}>&#9608;</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
