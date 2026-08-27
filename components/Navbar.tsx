"use client";

import React, { useState, useEffect } from "react";
import { Flame, Sun, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
      {/* Top Banner Ticker */}
      <div className="bg-[#ffc857] py-2 px-4 text-center font-mono text-xs font-bold text-black border-b-2 border-black flex items-center justify-center gap-2.5 flex-wrap">
        <span>⚡ REGISTRATION IS OPEN: Apogee 24-Hour Student Space Hackathon • Colombo, Sri Lanka • Jan 2027</span>
        <button
          onClick={onOpenRegister}
          className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 font-mono text-xs font-black text-[#ffc857] hover:bg-[#ff5500] hover:text-white transition-colors cursor-pointer"
        >
          <span>Register Team</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Main Header without bottom border */}
      <header className="relative bg-[var(--header-bg)] py-4 transition-colors">
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
            <div className="col-span-2 sm:col-span-5 lg:col-span-8 flex items-center justify-end gap-3.5">
              
              <a
                href="#tracks"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-3.5 py-1.5 font-mono text-xs font-bold text-[#00f0ff] hover:border-[#00f0ff] transition-colors"
              >
                <span className="rounded bg-[#00f0ff] px-1 py-0.2 text-[10px] font-black text-black uppercase">
                  NEW
                </span>
                <span>24H Space Hackathon in Colombo →</span>
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-cloud)] hover:border-[var(--accent-yellow)] transition-colors cursor-pointer"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? (
                  <Sun className="h-4.5 w-4.5 text-[var(--accent-yellow)]" />
                ) : (
                  <Moon className="h-4.5 w-4.5 text-[var(--accent-cyan)]" />
                )}
              </button>

              {/* Prominent Header Register Button */}
              <Button onClick={onOpenRegister} variant="primary" size="md">
                Register
              </Button>

            </div>

          </div>
        </div>
      </header>
    </>
  );
}
