"use client";

import React from "react";

interface CrossStripeTickerProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  rotation?: string;
}

export function CrossStripeTicker({
  text = "REGISTER NOW • APOGEE 2027 • 24-HOUR SPACE HACKATHON • COLOMBO SRI LANKA • NO FLUFF • BUILD & DEMO • RS. 500,000+ PRIZES • ",
  bgColor = "bg-[#FFC857]",
  textColor = "text-black",
  rotation = "-rotate-1 sm:-rotate-2",
}: CrossStripeTickerProps) {
  // Repeat text to create a seamless infinite banner effect
  const repeatedText = Array(6).fill(text).join("");

  return (
    <div className={`relative w-full overflow-hidden z-20 py-3 border-y-4 border-black ${bgColor} ${textColor} ${rotation} shadow-[0_4px_20px_rgba(0,0,0,0.5)] my-10 sm:my-14`}>
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-mono text-sm sm:text-base font-black tracking-widest uppercase px-4">
          {repeatedText}
        </span>
        <span className="font-mono text-sm sm:text-base font-black tracking-widest uppercase px-4" aria-hidden="true">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
