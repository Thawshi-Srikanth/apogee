"use client";

import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  RocketIcon,
  Calendar01Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

export function CountdownSection() {
  // Target date: January 15, 2027 18:00:00 SLST
  const targetDate = new Date("2027-01-15T18:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const milestones = [
    {
      phase: "PHASE 01",
      title: "Registration Open",
      date: "NOW LIVE",
      status: "active",
      color: "text-[#00e676] border-[#00e676]",
    },
    {
      phase: "PHASE 02",
      title: "Team Formation",
      date: "Dec 15, 2026",
      status: "upcoming",
      color: "text-[var(--accent-yellow)] border-[var(--accent-yellow)]",
    },
    {
      phase: "PHASE 03",
      title: "Hackathon Liftoff",
      date: "Jan 15, 2027",
      status: "upcoming",
      color: "text-[var(--accent-orange)] border-[var(--accent-orange)]",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-cloud)] uppercase tracking-tight mb-3">
            COUNTDOWN TO LAUNCH
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
            January 15, 2027 • 18:00 SLST (Colombo, Sri Lanka / UTC+5:30)
          </p>
        </div>

        {/* Digital Readout Card Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-5xl mx-auto">
          
          {/* Days */}
          <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-8 card-shadow flex flex-col items-center justify-center border-t-8 border-t-[var(--accent-orange)]">
            <div className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--accent-orange)] leading-none tracking-tight font-mono">
              {mounted ? String(timeLeft.days).padStart(2, "0") : "--"}
            </div>
            <div className="mt-4 px-4 py-1 rounded-md bg-[var(--bg-void)] border border-black/40 font-mono text-xs font-black text-[var(--text-cloud)] uppercase tracking-widest">
              DAYS TO GO
            </div>
          </div>

          {/* Hours */}
          <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-8 card-shadow flex flex-col items-center justify-center border-t-8 border-t-[var(--accent-yellow)]">
            <div className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--accent-yellow)] leading-none tracking-tight font-mono">
              {mounted ? String(timeLeft.hours).padStart(2, "0") : "--"}
            </div>
            <div className="mt-4 px-4 py-1 rounded-md bg-[var(--bg-void)] border border-black/40 font-mono text-xs font-black text-[var(--text-cloud)] uppercase tracking-widest">
              HOURS
            </div>
          </div>

          {/* Minutes */}
          <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-8 card-shadow flex flex-col items-center justify-center border-t-8 border-t-[var(--accent-pink)]">
            <div className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--accent-pink)] leading-none tracking-tight font-mono">
              {mounted ? String(timeLeft.minutes).padStart(2, "0") : "--"}
            </div>
            <div className="mt-4 px-4 py-1 rounded-md bg-[var(--bg-void)] border border-black/40 font-mono text-xs font-black text-[var(--text-cloud)] uppercase tracking-widest">
              MINUTES
            </div>
          </div>

          {/* Seconds */}
          <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-8 card-shadow flex flex-col items-center justify-center border-t-8 border-t-[var(--accent-cyan)]">
            <div className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--accent-cyan)] leading-none tracking-tight font-mono">
              {mounted ? String(timeLeft.seconds).padStart(2, "0") : "--"}
            </div>
            <div className="mt-4 px-4 py-1 rounded-md bg-[var(--bg-void)] border border-black/40 font-mono text-xs font-black text-[var(--text-cloud)] uppercase tracking-widest">
              SECONDS
            </div>
          </div>

        </div>

        {/* Event Milestone Trajectory Bar */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-8 card-shadow">
          <div className="flex items-center gap-2.5 mb-6 pb-3 border-b-2 border-white/10">
            <HugeiconsIcon icon={Clock01Icon} className="h-5 w-5 text-[var(--accent-cyan)]" />
            <h3 className="font-mono text-xs sm:text-sm font-bold text-[var(--text-cloud)] uppercase tracking-wider">
              MISSION MILESTONE SCHEDULE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--bg-void)] card-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                      {item.phase}
                    </span>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${item.color}`}>
                      {item.date}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[var(--text-cloud)] uppercase">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
