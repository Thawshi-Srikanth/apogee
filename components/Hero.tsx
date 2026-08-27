"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, Gamepad2 } from "lucide-react";

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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Master 4-8-12 Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 8-Bit HUD Chip */}
            <div className="mb-4 inline-flex items-center gap-2 rounded border-2 border-black bg-[#ffc857] px-3 py-1 font-pixel text-[10px] text-black uppercase shadow-[3px_3px_0px_0px_#000]">
              <Gamepad2 className="h-3.5 w-3.5" />
              <span>[ 8-BIT HACKATHON • JAN 2027 ]</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-[var(--text-cloud)] uppercase mb-6">
              Build something that <br />
              <span className="text-[#00f0ff]">leaves the atmosphere.</span>
            </h1>

            <p className="font-sans text-lg sm:text-2xl text-[var(--text-cloud)] font-medium max-w-xl mb-8 leading-relaxed">
              Sri Lanka's 24-hour space hackathon in Colombo. Building{" "}
              <span className="font-bold text-[#ff5500]">real challenges</span>{" "}
              &&{" "}
              <span className="font-bold text-[#f72585]">real judges</span>.
            </p>

            {/* 8-Bit Styled Button */}
            <button
              onClick={onOpenRegister}
              className="rounded-xl border-4 border-black bg-[#ffc857] px-8 py-4 font-pixel text-xs font-bold uppercase text-black hover:bg-[#ff5500] hover:text-white transition-all shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] mb-10"
            >
              PRESS START → REGISTER
            </button>

            {/* 8-Bit Mission Countdown Bar */}
            <div className="w-full max-w-lg rounded-xl border-4 border-black bg-[var(--bg-card)] p-4 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center justify-between font-pixel text-[10px] text-[var(--text-muted)] border-b-2 border-black pb-2 mb-3">
                <span className="flex items-center gap-1.5 text-[#ffc857]">
                  <Clock className="h-3.5 w-3.5 text-[#ff5500]" /> T-MINUS CLOCK
                </span>
                <span>COLOMBO 🇱🇰</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="rounded-lg bg-[var(--bg-void)] p-2 border-2 border-black">
                  <span className="block text-2xl font-black text-[#ff5500]">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="font-pixel text-[8px] text-[var(--text-muted)]">DAYS</span>
                </div>
                <div className="rounded-lg bg-[var(--bg-void)] p-2 border-2 border-black">
                  <span className="block text-2xl font-black text-[#ffc857]">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="font-pixel text-[8px] text-[var(--text-muted)]">HOURS</span>
                </div>
                <div className="rounded-lg bg-[var(--bg-void)] p-2 border-2 border-black">
                  <span className="block text-2xl font-black text-[#f72585]">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="font-pixel text-[8px] text-[var(--text-muted)]">MINS</span>
                </div>
                <div className="rounded-lg bg-[var(--bg-void)] p-2 border-2 border-black">
                  <span className="block text-2xl font-black text-[#00f0ff]">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="font-pixel text-[8px] text-[var(--text-muted)]">SECS</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right 8-Bit Pixel Arcade Graphic */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] rounded-3xl border-4 border-black bg-black p-3 shadow-[10px_10px_0px_0px_#000]">
              <Image
                src="/8bit_arcade.jpg"
                alt="8-Bit Retro Space Arcade Graphic"
                width={340}
                height={340}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
