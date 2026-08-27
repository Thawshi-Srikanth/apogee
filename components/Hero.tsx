"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Clock } from "lucide-react";

interface HeroProps {
  onOpenRegister: () => void;
}

export function Hero({ onOpenRegister }: HeroProps) {
  // Target date: January 15, 2027 18:00:00 SLST
  const targetDate = new Date("2027-01-15T18:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center relative">
      
      {/* Fireship-style Pill Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-[var(--bg-card)] border border-[var(--border-card)] px-3.5 py-1 font-mono text-xs font-bold text-[var(--accent-yellow)]">
        <span className="h-2 w-2 rounded-full bg-[var(--accent-orange)]" />
        <span>JANUARY 2027 • COLOMBO, SRI LANKA</span>
      </div>

      {/* Hero Layout: Headline & Retro Graphic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left mb-10 w-full">
        
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start">
          <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-[var(--text-cloud)] mb-6">
            Build something that{" "}
            <span className="text-[var(--accent-orange)]">leaves the atmosphere.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[var(--text-muted)] font-medium max-w-2xl mb-8 leading-relaxed">
            Sri Lanka's 24-hour space hackathon. Real challenges. Real judges. January 2027 in Colombo.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onOpenRegister}
              className="rounded-lg bg-[var(--accent-orange)] px-7 py-3 font-mono text-sm font-bold text-white hover:bg-[var(--accent-yellow)] hover:text-black transition-all"
            >
              Register Now
            </button>

            <a
              href="#tracks"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] px-6 py-3 font-mono text-sm font-bold text-[var(--text-cloud)] hover:border-[var(--accent-yellow)] transition-all"
            >
              See the tracks <ArrowDown className="h-4 w-4 text-[var(--accent-yellow)]" />
            </a>
          </div>
        </div>

        {/* Retro Vector CRT Graphic */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative rounded-2xl border-4 border-black bg-black p-2 shadow-[6px_6px_0px_0px_#000] max-w-[280px]">
            <Image
              src="/retro_crt_monitor.jpg"
              alt="Retro CRT Monitor Space Graphic"
              width={280}
              height={280}
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>

      </div>

      {/* Minimal Mission Countdown */}
      <div className="w-full max-w-md rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] p-4 text-left font-mono shadow-sm">
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] border-b border-[var(--border-card)] pb-2 mb-3">
          <span className="flex items-center gap-1.5 text-[var(--accent-yellow)] font-bold">
            <Clock className="h-3.5 w-3.5 text-[var(--accent-orange)]" /> MISSION COUNTDOWN
          </span>
          <span>SLST (UTC+5:30)</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="rounded-lg bg-[var(--bg-void)] p-2 border border-[var(--border-card)]">
            <span className="block text-2xl font-black text-[var(--accent-orange)]">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-[var(--text-muted)]">DAYS</span>
          </div>
          <div className="rounded-lg bg-[var(--bg-void)] p-2 border border-[var(--border-card)]">
            <span className="block text-2xl font-black text-[var(--accent-yellow)]">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-[var(--text-muted)]">HOURS</span>
          </div>
          <div className="rounded-lg bg-[var(--bg-void)] p-2 border border-[var(--border-card)]">
            <span className="block text-2xl font-black text-[var(--accent-pink)]">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-[var(--text-muted)]">MINS</span>
          </div>
          <div className="rounded-lg bg-[var(--bg-void)] p-2 border border-[var(--border-card)]">
            <span className="block text-2xl font-black text-[var(--accent-cyan)]">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-[var(--text-muted)]">SECS</span>
          </div>
        </div>
      </div>

    </section>
  );
}
