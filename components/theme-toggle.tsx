"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const KEY = "drladipo-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Light/dark switch. Follows the system until the visitor picks; the pick is remembered. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = (() => { try { return localStorage.getItem(KEY) as Theme | null; } catch { return null; } })();
    setTheme(stored ?? systemTheme());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => { if (!localStorage.getItem(KEY)) setTheme(systemTheme()); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = (theme ?? systemTheme()) === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-fade");
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch {}
    window.setTimeout(() => root.classList.remove("theme-fade"), 350);
    setTheme(next);
  };

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-surface/70 text-ink/80 transition hover:border-accent hover:text-accent ${className}`}
    >
      {theme === null ? <span className="h-4 w-4" /> : isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
