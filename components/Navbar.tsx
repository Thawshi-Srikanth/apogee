"use client";

import React, { useState, useEffect } from "react";
import { Flame, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenRegister: () => void;
}

export function Navbar({ onOpenRegister }: NavbarProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("apogee-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("apogee-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-card)] py-3.5 px-4 sm:px-8 transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        {/* Minimal Brand Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-orange)] text-black">
            <Flame className="h-5 w-5 stroke-[2.5]" />
          </div>
          <span className="font-heading text-xl font-black tracking-tight text-[var(--text-cloud)] uppercase">
            Apogee
          </span>
          <span className="font-mono text-[10px] font-bold text-[var(--accent-yellow)] bg-[var(--bg-card)] px-1.5 py-0.5 rounded border border-[var(--border-card)]">
            2027
          </span>
        </a>

        {/* Right Actions: Theme Toggle + CTA Button */}
        <div className="flex items-center gap-3">
          
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] px-2.5 py-1.5 font-mono text-xs font-bold text-[var(--text-cloud)] hover:border-[var(--accent-orange)] transition-all"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4 text-[var(--accent-yellow)]" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 text-[var(--accent-cyan)]" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenRegister}
            className="rounded-lg bg-[var(--accent-yellow)] px-4 py-1.5 font-mono text-xs font-bold text-black hover:bg-[var(--accent-orange)] hover:text-white transition-colors"
          >
            Register Now
          </button>

        </div>

      </div>
    </header>
  );
}
