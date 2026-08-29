"use client";

import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon01Icon, ArrowRight01Icon, FlashIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

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
      {/* Actionable Top Banner Ticker */}
      <div className="bg-[#ffd000] py-2 px-4 text-center font-mono text-xs font-bold text-black border-b-2 border-black flex items-center justify-center gap-2.5 flex-wrap">
        <span className="flex items-center gap-1.5">
          <HugeiconsIcon icon={FlashIcon} className="h-4 w-4 text-black fill-current" />
          <span>REGISTRATION IS OPEN: Apogee 24-Hour Student Space Hackathon • Colombo, Sri Lanka • Jan 2027</span>
        </span>
        <button
          onClick={onOpenRegister}
          className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 font-mono text-xs font-black text-[#ffd000] hover:bg-[#ff5500] hover:text-white transition-colors cursor-pointer"
        >
          <span>Register Team</span>
          <HugeiconsIcon icon={ArrowRight01Icon} className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Main Grid Header */}
      <header className="relative bg-[var(--header-bg)] py-4 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 items-center">
            
            {/* Theme-Adaptive Logo */}
            <div className="col-span-2 sm:col-span-4 lg:col-span-4 flex items-center">
              <a href="#" className="flex items-center group transition-transform hover:scale-[1.03]">
                <Logo className="h-7 sm:h-9 w-auto" />
              </a>
            </div>

            {/* Actions */}
            <div className="col-span-2 sm:col-span-5 lg:col-span-8 flex items-center justify-end gap-3.5">
              
              {/* Theme Toggle Button without border and animated with framer-motion */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.85, rotate: 180 }}
                whileHover={{ scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[var(--text-cloud)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer outline-none border-none"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    {theme === "dark" ? (
                      <HugeiconsIcon icon={Sun01Icon} className="h-5 w-5 text-[#ffd000]" />
                    ) : (
                      <HugeiconsIcon icon={Moon01Icon} className="h-5 w-5 text-[#0084a3]" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

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
