"use client";

import React, { useState, useEffect } from "react";

export function CountdownSection() {
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
    <section className="py-24 sm:py-32 bg-[var(--bg-void)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Master 4-8-12 Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-center">
          
          {/* Centered Title & Subtitle */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 flex flex-col items-center mb-4">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
              Countdown
            </h2>
            <p className="font-mono text-sm sm:text-lg font-medium text-[var(--accent-yellow)] tracking-wider">
              January 15, 2027 • Colombo, Sri Lanka (SLST / UTC+5:30)
            </p>
          </div>

          {/* Expanded Full-Width Giant Digit Columns */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 grid grid-cols-4 gap-4 sm:gap-10 lg:gap-16 w-full">
            
            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl sm:text-8xl lg:text-9xl font-black text-[#ff5500] leading-none tracking-tighter">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs sm:text-base font-black text-[var(--text-muted)] uppercase tracking-widest mt-4">
                DAYS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl sm:text-8xl lg:text-9xl font-black text-[#ffd000] leading-none tracking-tighter">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs sm:text-base font-black text-[var(--text-muted)] uppercase tracking-widest mt-4">
                HOURS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl sm:text-8xl lg:text-9xl font-black text-[#f72585] leading-none tracking-tighter">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs sm:text-base font-black text-[var(--text-muted)] uppercase tracking-widest mt-4">
                MINS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl sm:text-8xl lg:text-9xl font-black text-[#00f0ff] leading-none tracking-tighter">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs sm:text-base font-black text-[var(--text-muted)] uppercase tracking-widest mt-4">
                SECS
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
