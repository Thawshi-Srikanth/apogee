"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import timelineData from "@/data/timeline.json";

export interface TimelineEvent {
  id: string;
  time: string;
  code: string;
  phase: string;
  title: string;
  description: string;
  status: string; // 'completed' | 'active' | 'upcoming'
}

export function Timeline() {
  const [events] = useState<TimelineEvent[]>(timelineData as TimelineEvent[]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="timeline" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-4 py-1.5 font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider mb-4">
            <span className="h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse" />
            24-HOUR SLINGSHOT FLIGHT PLAN
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
            Timeline
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#ff5500] font-medium max-w-xl mx-auto">
            All times in Sri Lanka Standard Time (SLST). Dynamic & expanding.
          </p>
        </div>

        {/* Vertical Zig-Zag Slingshot Container */}
        <div className="relative">
          
          {/* Central / Zig-Zag Connecting Guide Line (Desktop & Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#00f0ff] via-[#ff5500] to-[#f72585] opacity-30 pointer-events-none hidden md:block" />
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#ff5500] to-[#f72585] opacity-30 pointer-events-none md:hidden" />

          {/* Render Checkpoints Dynamically */}
          <div className="space-y-10 sm:space-y-14">
            {events.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              const isHovered = hoveredId === evt.id;
              const isCompleted = evt.status === "completed";
              const isActive = evt.status === "active";

              return (
                <motion.div
                  key={evt.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredId(evt.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  
                  {/* Event Content Card (Takes half width on desktop) */}
                  <div className="w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 md:px-8">
                    <div
                      className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 card-shadow-sm ${
                        isHovered
                          ? "bg-[var(--bg-card)] border-[#00f0ff] shadow-[0_0_25px_rgba(0,240,255,0.25)] -translate-y-1"
                          : "bg-[var(--bg-card)] border-[var(--card-border)] hover:border-[#ff5500]/50"
                      }`}
                    >
                      {/* Header Badge & Code */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-black text-black bg-[var(--accent-yellow)] px-2.5 py-0.5 rounded uppercase">
                          {evt.time}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                          {evt.code} • {evt.phase}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-lg sm:text-xl font-bold text-[var(--text-cloud)] mb-1.5">
                        {evt.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                  </div>

                  {/* Checkpoint Slingshot Node (Center Pin on Desktop, Left on Mobile) */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
                    
                    {/* Outer Glowing Aura */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center bg-[var(--bg-card)] transition-all duration-300 ${
                        isHovered
                          ? "scale-125 border-[#00f0ff] shadow-[0_0_20px_#00f0ff]"
                          : isActive
                          ? "border-[#ffd000] shadow-[0_0_15px_#ffd000]"
                          : isCompleted
                          ? "border-[#00f0ff]"
                          : "border-[#ff5500]"
                      }`}
                    >
                      {/* Inner Node Index Circle */}
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                          isActive
                            ? "bg-[#ffd000] text-black animate-pulse"
                            : isCompleted
                            ? "bg-[#00f0ff] text-black"
                            : "bg-[#ff5500] text-white"
                        }`}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    {/* Connecting Slingshot Horizontal Line to Card (Desktop only) */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-8 transition-colors ${
                        isEven ? "right-full" : "left-full"
                      } ${isHovered ? "bg-[#00f0ff]" : "bg-[var(--text-cloud)] opacity-30"}`}
                    />
                  </div>

                  {/* Empty Spacer Column for layout symmetry on Desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}


