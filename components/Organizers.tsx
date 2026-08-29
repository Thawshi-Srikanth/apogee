"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export function Organizers() {
  const organizers = [
    {
      name: "SEDS Sri Lanka",
      role: "National Chapter",
      desc: "Students for the Exploration and Development of Space (SEDS) Sri Lanka.",
      color: "var(--accent-cyan)",
      url: "https://sedssl.org/",
    },
    {
      name: "SEDS SLIIT",
      role: "University Chapter",
      desc: "SEDS SLIIT Student Branch & Space Robotics Lab.",
      color: "var(--accent-yellow)",
      url: "https://www.sedssliit.org/",
    },
  ];

  return (
    <section id="organizers" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Standard Section Header */}
        <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal text-[var(--text-cloud)] uppercase tracking-wide mb-3">
            ORGANIZERS
          </h2>
          <p className="font-sans text-lg text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
            A joint collaboration between SEDS Sri Lanka and SEDS SLIIT.
          </p>
        </div>

        {/* 4-8-12 Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          {organizers.map((org, idx) => (
            <a
              key={idx}
              href={org.url}
              target="_blank"
              rel="noreferrer"
              className="col-span-4 sm:col-span-4 lg:col-span-6 rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="font-mono text-xs font-bold uppercase" style={{ color: org.color }}>
                    {org.role}
                  </div>
                  <ExternalLink className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--text-cloud)] transition-colors" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-cloud)] mb-2 group-hover:underline">
                  {org.name}
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] font-normal leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
