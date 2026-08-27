"use client";

import React, { useState, useEffect } from "react";
import { Flame, Sun, Moon, ArrowRight } from "lucide-react";

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
    <>
      {/* Actionable Non-Sticky Top Banner */}
      <div className="bg-[#ffc857] py-2 px-4 text-center font-mono text-xs font-bold text-black border-b-2 border-black flex items-center justify-center gap-2 flex-wrap">
        <span>⚡ REGISTRATION IS OPEN: Apogee 24-Hour Student Space Hackathon • Colombo, Sri Lanka • Jan 2027</span>
        <button
          onClick={onOpenRegister}
          className="inline-flex items-center gap-1 rounded bg-black px-2.5 py-0.5 text-[11px] font-extrabold text-[#ffc857] hover:bg-[#ff5500] hover:text-white transition-colors"
        >
          <span>Register Team</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      {/* Main Non-Sticky Header */}
      <header className="relative bg-[var(--header-bg)] py-4 border-b border-[var(--border-card)] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 items-center">
            
            {/* Logo */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex items-center">
              <a href="#" className="flex items-center gap-2 group">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff5500] text-black shadow-sm group-hover:scale-105 transition-transform">
                  <Flame className="h-6 w-6 stroke-[2.5] fill-black" />
                </div>
                <span className="font-heading text-2xl font-black tracking-tight text-[var(--text-cloud)] uppercase">
                  Apogee
                </span>
              </a>
            </div>

            {/* Actions */}
            <div className="col-span-2 sm:col-span-5 lg:col-span-8 flex items-center justify-end gap-3">
              
              <a
                href="#tracks"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
              >
                <span className="rounded bg-[#00f0ff] px-1 py-0.2 text-[10px] font-black text-black uppercase">
                  NEW
                </span>
                <span>24H Space Hackathon in Colombo →</span>
              </a>

              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-cloud)] hover:border-[var(--accent-yellow)] transition-colors"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-[var(--accent-yellow)]" />
                ) : (
                  <Moon className="h-4 w-4 text-[var(--accent-cyan)]" />
                )}
              </button>

              <button
                onClick={onOpenRegister}
                className="rounded-full border-2 border-[#ffc857] px-5 py-1.5 font-mono text-xs font-black uppercase text-[#ffc857] hover:bg-[#ffc857] hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(255,200,87,0.3)]"
              >
                Register
              </button>

            </div>

          </div>
        </div>
      </header>
    </>
  );
}
