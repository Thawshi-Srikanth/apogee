"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function AttributionsPage() {
  const openSourceItems = [
    {
      category: "Core Frameworks & Runtime",
      items: [
        { name: "Next.js", desc: "React framework for hybrid static & server rendering.", license: "MIT License", url: "https://nextjs.org" },
        { name: "React & React DOM", desc: "User interface rendering engine.", license: "MIT License", url: "https://react.dev" },
        { name: "TypeScript", desc: "Typed superset of JavaScript.", license: "Apache 2.0", url: "https://www.typescriptlang.org" },
      ],
    },
    {
      category: "UI Frameworks & Styling",
      items: [
        { name: "Tailwind CSS v4", desc: "Utility-first CSS framework & theme engine.", license: "MIT License", url: "https://tailwindcss.com" },
        { name: "Lucide React", desc: "Clean, consistent SVG icon library.", license: "ISC License", url: "https://lucide.dev" },
      ],
    },
    {
      category: "State Management & Physics Animations",
      items: [
        { name: "Framer Motion", desc: "Motion library for fluid spring animations & gestures.", license: "MIT License", url: "https://framer.com/motion" },
        { name: "Zustand", desc: "Lightweight reactive state management.", license: "MIT License", url: "https://github.com/pmndrs/zustand" },
        { name: "Canvas Confetti", desc: "High-performance Canvas2D particle celebration engine.", license: "ISC License", url: "https://github.com/catdad/canvas-confetti" },
      ],
    },
    {
      category: "Fonts & Typography Assets",
      items: [
        { name: "Cubano", desc: "Rounded bold display headline typeface by C. Van De Water.", license: "Lost Type Personal & Educational License", url: "http://www.losttype.com/font/?name=cubano" },
        { name: "Outfit", desc: "Modern geometric display sans-serif typeface.", license: "SIL Open Font License 1.1", url: "https://fonts.google.com/specimen/Outfit" },
        { name: "JetBrains Mono", desc: "Developer monospaced typeface.", license: "SIL Open Font License 1.1", url: "https://fonts.google.com/specimen/JetBrains+Mono" },
        { name: "Inter", desc: "High-legibility sans-serif typeface.", license: "SIL Open Font License 1.1", url: "https://fonts.google.com/specimen/Inter" },
        { name: "Press Start 2P", desc: "Retro 8-bit arcade pixel font.", license: "SIL Open Font License 1.1", url: "https://fonts.google.com/specimen/Press+Start+2P" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-cloud)] selection:bg-[#FF6B35] selection:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b-3 border-[var(--card-border-color)]">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-card)] card-border font-mono text-xs sm:text-sm font-bold uppercase text-[var(--text-cloud)] card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            <ArrowLeft className="h-4 w-4 text-[var(--accent-cyan)]" />
            BACK TO HOMEPAGE
          </Link>
        </div>

        {/* Standard Centered Display Scale Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal text-[var(--text-cloud)] uppercase tracking-wide mb-3">
            ATTRIBUTIONS
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
            Educational Non-Profit Space Hackathon & Open Source Registry
          </p>
        </div>

        {/* Co-Organizers Highlight Card */}
        <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-10 card-shadow mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="h-6 w-6 text-[var(--accent-pink)] fill-current" />
            <h2 className="font-heading text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[var(--text-cloud)]">
              ORGANIZED BY STUDENT SPACE BODIES
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-3xl mb-8">
            Apogee is Sri Lanka's 1st 24-Hour Space Hackathon, developed as a non-profit educational initiative by student leaders and space tech enthusiasts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="https://sedssl.org/"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl bg-[var(--bg-void)] card-border hover:border-[var(--accent-orange)] card-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <div className="font-mono text-xs font-bold text-[var(--accent-orange)] uppercase mb-1">
                  National Chapter
                </div>
                <div className="font-heading text-xl font-normal text-[var(--text-cloud)] group-hover:underline">
                  SEDS Sri Lanka
                </div>
                <div className="font-mono text-xs text-[var(--text-muted)] mt-1">
                  sedssl.org
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] transition-colors" />
            </a>

            <a
              href="https://www.sedssliit.org/"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl bg-[var(--bg-void)] card-border hover:border-[var(--accent-yellow)] card-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <div className="font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase mb-1">
                  University Chapter
                </div>
                <div className="font-heading text-xl font-normal text-[var(--text-cloud)] group-hover:underline">
                  SEDS SLIIT
                </div>
                <div className="font-mono text-xs text-[var(--text-muted)] mt-1">
                  sedssliit.org
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] transition-colors" />
            </a>
          </div>
        </div>

        {/* Categories of Open Source Dependencies */}
        <div className="space-y-12">
          {openSourceItems.map((sec, idx) => (
            <div key={idx}>
              <h3 className="font-heading text-2xl sm:text-3xl font-normal uppercase tracking-wide text-[var(--accent-cyan)] mb-6 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6" />
                {sec.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-heading text-xl font-normal text-[var(--text-cloud)]">
                          {item.name}
                        </h4>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors p-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="font-sans text-sm text-[var(--text-muted)] font-normal leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent-yellow)] border-t border-white/10 pt-3">
                      {item.license}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 text-center border-t-4 border-[var(--card-border-color)] pt-10">
          <p className="font-sans text-base text-[var(--text-muted)] font-normal mb-6">
            Built with passion by student space engineers in Colombo. MIT Licensed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--accent-orange)] text-black font-mono text-sm font-black uppercase tracking-wider card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            ← RETURN TO APOGEE HOMEPAGE
          </Link>
        </div>

      </div>
    </div>
  );
}
