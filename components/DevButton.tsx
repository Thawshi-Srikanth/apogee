"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTimelineStore } from "@/store/useTimelineStore";
import { Sliders, Wrench, Sparkles } from "lucide-react";

export function DevButton() {
  const { toggleDevDrawer, isDevDrawerOpen } = useTimelineStore();

  return (
    <motion.button
      onClick={toggleDevDrawer}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full border shadow-xl transition-all duration-300 font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md cursor-pointer ${
        isDevDrawerOpen
          ? "bg-[var(--accent-orange)] text-black border-[var(--accent-orange)] shadow-[0_0_20px_rgba(255,85,0,0.5)]"
          : "bg-[var(--bg-card)]/90 text-[var(--text-cloud)] border-[var(--border-card)] hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      }`}
      aria-label="Open Dev Panel"
      title="Open Trajectory Dev Panel (Shift+D)"
    >
      <div className="relative flex items-center justify-center">
        <Sliders className="w-4 h-4" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--accent-yellow)] animate-ping" />
      </div>
      <span className="hidden sm:inline">DEV PANEL</span>
    </motion.button>
  );
}
