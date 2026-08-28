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
  align: string; // 'top' | 'bottom'
}

export function Timeline() {
  const [events] = useState<TimelineEvent[]>(timelineData as TimelineEvent[]);
  const [activeCheckpoint, setActiveCheckpoint] = useState<string | null>(null);

  // Coordinate mapping for Desktop SVG Parabolic Trajectory Curve (1200x520 ViewBox)
  const desktopNodes = [
    { x: 70,   y: 400, cardX: 70,   cardY: 100, labelPos: "top" },    // Checkpoint 1
    { x: 280,  y: 280, cardX: 280,  cardY: 420, labelPos: "bottom" }, // Checkpoint 2
    { x: 500,  y: 190, cardX: 500,  cardY: 60,  labelPos: "top" },    // Checkpoint 3
    { x: 720,  y: 160, cardX: 720,  cardY: 420, labelPos: "bottom" }, // Checkpoint 4
    { x: 930,  y: 200, cardX: 930,  cardY: 60,  labelPos: "top" },    // Checkpoint 5
    { x: 1130, y: 310, cardX: 1130, cardY: 430, labelPos: "bottom" }, // Checkpoint 6
  ];

  return (
    <section id="timeline" className="relative py-16 sm:py-28 overflow-hidden z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-4 py-1.5 font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider mb-4">
            <span className="h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse" />
            MISSION TRAJECTORY & FLIGHT PLAN
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-4">
            Timeline
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#ff5500] font-medium max-w-2xl mx-auto">
            24 hours. Parabolic flight plan. All times in Sri Lanka Standard Time (SLST).
          </p>
        </div>

        {/* --- DESKTOP PARABOLIC TRAJECTORY VIEW (Hidden on mobile) --- */}
        <div className="hidden lg:block relative w-full h-[580px] my-6">
          
          {/* SVG Vector Layer: Curve, Grid Lines & Pointer Callout Lines */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            viewBox="0 0 1200 520"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Curve Trajectory Gradient */}
              <linearGradient id="trajectoryGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#ff5500" stopOpacity="1" />
                <stop offset="70%" stopColor="#ffd000" stopOpacity="1" />
                <stop offset="100%" stopColor="#f72585" stopOpacity="0.8" />
              </linearGradient>

              {/* Glowing Filter for Curve */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Glowing Halo for Active Node */}
              <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Tactical Grid Background Lines */}
            <g className="opacity-15 stroke-[var(--text-cloud)]" strokeDasharray="3 6" strokeWidth="1">
              <line x1="0" y1="130" x2="1200" y2="130" />
              <line x1="0" y1="260" x2="1200" y2="260" />
              <line x1="0" y1="390" x2="1200" y2="390" />
            </g>

            {/* Primary Parabolic Trajectory Path */}
            <motion.path
              d="M 70,400 C 180,310 360,220 500,190 C 620,165 670,150 720,160 C 830,175 920,200 1130,310"
              fill="none"
              stroke="url(#trajectoryGradient)"
              strokeWidth="4"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Secondary Dashed Trajectory Shadow Line */}
            <motion.path
              d="M 70,400 C 180,310 360,220 500,190 C 620,165 670,150 720,160 C 830,175 920,200 1130,310"
              fill="none"
              stroke="var(--text-cloud)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-40"
            />

            {/* Checkpoint Leader Pointer Lines connecting nodes to cards */}
            {events.map((evt, idx) => {
              const pos = desktopNodes[idx];
              const isHovered = activeCheckpoint === evt.id;

              return (
                <g key={`pointer-${evt.id}`}>
                  {/* Leader line from arc node to card point */}
                  <line
                    x1={pos.x}
                    y1={pos.y}
                    x2={pos.cardX}
                    y2={pos.labelPos === "top" ? pos.cardY + 80 : pos.cardY - 80}
                    stroke={isHovered ? "#00f0ff" : "var(--text-cloud)"}
                    strokeWidth={isHovered ? "2" : "1"}
                    strokeDasharray={isHovered ? "none" : "4 4"}
                    className="transition-all duration-300 opacity-60"
                  />
                  {/* Pointer Target Reticle Dot */}
                  <circle
                    cx={pos.cardX}
                    cy={pos.labelPos === "top" ? pos.cardY + 80 : pos.cardY - 80}
                    r={isHovered ? "4" : "2.5"}
                    fill={isHovered ? "#00f0ff" : "#ff5500"}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}

            {/* Checkpoint Nodes along the curve */}
            {events.map((evt, idx) => {
              const pos = desktopNodes[idx];
              const isHovered = activeCheckpoint === evt.id;
              const isCompleted = evt.status === "completed";
              const isActive = evt.status === "active";

              const nodeColor = isActive
                ? "#ffd000"
                : isCompleted
                ? "#00f0ff"
                : "#ff5500";

              return (
                <g
                  key={`node-${evt.id}`}
                  className="cursor-pointer pointer-events-auto"
                  onMouseEnter={() => setActiveCheckpoint(evt.id)}
                  onMouseLeave={() => setActiveCheckpoint(null)}
                >
                  {/* Outer Pulsing Aura */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 24 : 16}
                    fill={nodeColor}
                    fillOpacity={isHovered ? 0.35 : 0.15}
                    stroke={nodeColor}
                    strokeWidth="1.5"
                    strokeDasharray={isActive ? "3 3" : "none"}
                    animate={{
                      scale: isHovered || isActive ? [1, 1.25, 1] : 1,
                      rotate: isActive ? 360 : 0,
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Concentric Node Ring */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 12 : 9}
                    fill="var(--bg-card)"
                    stroke={nodeColor}
                    strokeWidth={isHovered ? 3 : 2}
                    className="transition-all duration-300"
                    filter={isHovered ? "url(#nodeGlow)" : undefined}
                  />

                  {/* Core Node Center Circle */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 5 : 3.5}
                    fill={nodeColor}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* HTML Pop-Out Callout Cards Layer (Positioned over SVG points) */}
          {events.map((evt, idx) => {
            const pos = desktopNodes[idx];
            const isHovered = activeCheckpoint === evt.id;
            const isTop = pos.labelPos === "top";

            return (
              <motion.div
                key={`card-${evt.id}`}
                className="absolute transform -translate-x-1/2 cursor-pointer z-20"
                style={{
                  left: `${(pos.cardX / 1200) * 100}%`,
                  top: `${(pos.cardY / 520) * 100}%`,
                  width: "210px",
                }}
                initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveCheckpoint(evt.id)}
                onMouseLeave={() => setActiveCheckpoint(null)}
              >
                <div
                  className={`relative p-3.5 rounded-xl border transition-all duration-300 card-shadow-sm ${
                    isHovered
                      ? "bg-[var(--bg-card)] border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.35)] -translate-y-1 scale-105"
                      : "bg-[var(--bg-card)] border-[var(--card-border)] hover:border-[#ff5500]/60"
                  }`}
                >
                  {/* Status Indicator Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <span className="font-mono text-[10px] font-black text-black bg-[var(--accent-yellow)] px-2 py-0.5 rounded uppercase tracking-wider">
                      {evt.time}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#00f0ff] uppercase tracking-wide">
                      {evt.code}
                    </span>
                  </div>

                  {/* Title & Phase */}
                  <div className="font-mono text-[11px] font-bold text-[#ff5500] uppercase tracking-wider mb-0.5">
                    {evt.phase}
                  </div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[var(--text-cloud)] leading-tight mb-1">
                    {evt.title}
                  </h4>

                  {/* Pop-Out Description */}
                  <p className="font-sans text-[11px] text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                    {evt.description}
                  </p>

                  {/* Pointer Callout Arrow indicator */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 rotate-45 border transition-colors ${
                      isTop
                        ? "-bottom-1.5 border-b border-r"
                        : "-top-1.5 border-t border-l"
                    } ${
                      isHovered
                        ? "bg-[var(--bg-card)] border-[#00f0ff]"
                        : "bg-[var(--bg-card)] border-[var(--card-border)]"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- MOBILE / TABLET CURVED TRAJECTORY VIEW (< lg screens) --- */}
        <div className="lg:hidden relative pl-6 sm:pl-10 space-y-8 my-8">
          
          {/* Vertical Trajectory Curve Line */}
          <div className="absolute left-3 sm:left-5 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b from-[#00f0ff] via-[#ff5500] to-[#f72585] opacity-80" />

          {events.map((evt, idx) => {
            const isCompleted = evt.status === "completed";
            const isActive = evt.status === "active";

            return (
              <motion.div
                key={`mobile-${evt.id}`}
                className="relative pl-6 sm:pl-8"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                {/* Node Circle on the Left Trajectory Line */}
                <div className="absolute -left-[17px] sm:-left-[15px] top-2 flex items-center justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center bg-[var(--bg-card)] ${
                      isActive
                        ? "border-[#ffd000] shadow-[0_0_12px_#ffd000]"
                        : isCompleted
                        ? "border-[#00f0ff] shadow-[0_0_8px_#00f0ff]"
                        : "border-[#ff5500]"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isActive
                          ? "bg-[#ffd000] animate-ping"
                          : isCompleted
                          ? "bg-[#00f0ff]"
                          : "bg-[#ff5500]"
                      }`}
                    />
                  </div>
                </div>

                {/* Event Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] card-border card-shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-black bg-[var(--accent-yellow)] px-2.5 py-0.5 rounded uppercase">
                      {evt.time}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                      {evt.code} • {evt.phase}
                    </span>
                  </div>

                  <h3 className="font-sans text-base sm:text-lg font-bold text-[var(--text-cloud)]">
                    {evt.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

