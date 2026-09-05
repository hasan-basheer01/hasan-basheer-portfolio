"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // localStorage unavailable — theme just won't persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "click-glow inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-2.5 text-ink transition-colors hover:border-accent-soft",
        className,
      )}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {mounted && isLight ? <Sun size={15} /> : <Moon size={15} />}
      <span className="hidden font-mono text-2xs sm:inline">
        {mounted && isLight ? "Light" : "Dark"}
      </span>
    </button>
  );
}
