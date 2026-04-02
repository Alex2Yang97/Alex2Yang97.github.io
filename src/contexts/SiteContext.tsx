"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type ViewMode = "cli" | "gui";

interface SiteContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  mode: ViewMode;
  setMode: (m: ViewMode) => void;
  mounted: boolean;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mode, setModeState] = useState<ViewMode>("cli");
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((t: Theme) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
  }, []);

  const setTheme = useCallback(
    (t: Theme) => {
      setThemeState(t);
      applyTheme(t);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  const setMode = useCallback((m: ViewMode) => {
    setModeState(m);
    sessionStorage.setItem("viewMode", m);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    let initialTheme: Theme = "dark";
    if (storedTheme === "light" || storedTheme === "dark") {
      initialTheme = storedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      initialTheme = "light";
    }
    setThemeState(initialTheme);
    applyTheme(initialTheme);

    const storedMode = sessionStorage.getItem("viewMode");
    if (storedMode === "cli" || storedMode === "gui") {
      setModeState(storedMode);
    }

    setMounted(true);
  }, [applyTheme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [setTheme]);

  return (
    <SiteContext.Provider value={{ theme, setTheme, toggleTheme, mode, setMode, mounted }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContext() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSiteContext must be used within SiteProvider");
  return ctx;
}
