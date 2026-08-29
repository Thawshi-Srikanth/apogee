"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTimelineStore } from "@/store/useTimelineStore";
import { HugeiconsIcon } from "@hugeicons/react";
import { SlidersHorizontalIcon } from "@hugeicons/core-free-icons";

export function DevButton() {
  const { toggleDevDrawer, isDevDrawerOpen } = useTimelineStore();

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <motion.button
      onClick={toggleDevDrawer}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-xl border-3 border-black font-mono text-xs font-black uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-[4px_4px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
        isDevDrawerOpen
          ? "bg-[var(--accent-orange)] text-black"
          : "bg-[var(--bg-card)] text-[var(--text-cloud)] hover:bg-[var(--accent-orange)] hover:text-black"
      }`}
      aria-label="Open Dev Panel"
      title="Open Dev Panel (Shift+D)"
    >
      <HugeiconsIcon icon={SlidersHorizontalIcon} className="w-4 h-4" />
      <span className="hidden sm:inline font-heading font-extrabold">DEV PANEL</span>
    </motion.button>
  );
}
