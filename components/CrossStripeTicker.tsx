"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CrossStripeTickerProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  rotation?: string;
  direction?: "left" | "right";
}

export function CrossStripeTicker({
  text = "REGISTER NOW • APOGEE 2027 • 24-HOUR SPACE HACKATHON • COLOMBO SRI LANKA • NO FLUFF • BUILD & DEMO • RS. 500,000+ PRIZES • ",
  bgColor = "bg-[#FFC857]",
  textColor = "text-black",
  rotation = "-rotate-1 sm:-rotate-2",
  direction = "left",
}: CrossStripeTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal translation
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["0%", "-20%"] : ["-20%", "0%"]
  );

  // Repeat text to create a continuous full-width stripe
  const repeatedText = Array(8).fill(text).join("");

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden z-20 py-3.5 border-y-4 border-black ${bgColor} ${textColor} ${rotation} shadow-[0_4px_20px_rgba(0,0,0,0.5)] my-10 sm:my-14`}
    >
      <motion.div
        style={{ x: xTransform }}
        className="flex whitespace-nowrap will-change-transform"
      >
        <span className="font-mono text-sm sm:text-base font-black tracking-widest uppercase px-2 select-none">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
