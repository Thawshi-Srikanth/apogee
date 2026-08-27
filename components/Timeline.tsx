"use client";

import React from "react";

export function Timeline() {
  const events = [
    { time: "FRI 6:00 PM", title: "Doors open, team formation and dinner" },
    { time: "FRI 7:00 PM", title: "Opening ceremony and challenge reveal" },
    { time: "SAT 12:00 PM", title: "Midpoint check-in and mentor desk" },
    { time: "SUN 12:00 PM", title: "Submissions close and code freeze" },
    { time: "SUN 2:00 PM", title: "Demos and live judging" },
    { time: "SUN 5:00 PM", title: "Winners announced and prize ceremony" },
  ];

  return (
    <section id="timeline" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <div className="mb-2 inline-block font-mono text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
              // TIMELINE
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)]">
              24 hours. <span className="text-[var(--accent-orange)]">No filler.</span>
            </h2>
          </div>

          {/* Timeline centered: Spans 4 cols on mobile, 8 on tablet, 10 on desktop (centered) */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-10 lg:col-start-2 space-y-3 font-mono">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-4 sm:p-5 gap-3 shadow-sm"
              >
                <span className="text-xs font-bold text-[var(--accent-yellow)] bg-[var(--bg-void)] px-3 py-1 rounded w-fit border border-[var(--border-card)]">
                  {evt.time}
                </span>
                <span className="font-sans text-base font-semibold text-[var(--text-cloud)]">
                  {evt.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
