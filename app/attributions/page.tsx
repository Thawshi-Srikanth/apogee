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
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-cloud)] selection:bg-[#FF6B35] selection:text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Header & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 border-b-4 border-[var(--card-border-color)] pb-8">
          <div className="flex items-center gap-4">
            <Logo />
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-normal uppercase tracking-wide">
                Attributions & Open Source
              </h1>
              <p className="font-sans text-sm text-[var(--accent-orange)] font-medium">
                Educational Non-Profit Hackathon Project
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-card)] card-border font-mono text-xs font-bold uppercase text-[var(--text-cloud)] card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform w-fit"
          >
            <ArrowLeft className="h-4 w-4 text-[var(--accent-cyan)]" />
            BACK TO APOGEE
          </Link>
        </div>

        {/* Co-Organizers Highlight Card */}
        <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-8 card-shadow mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="h-6 w-6 text-[var(--accent-pink)] fill-current" />
            <h2 className="font-heading text-2xl font-normal uppercase tracking-wide text-[var(--text-cloud)]">
              Organized By Student Space Bodies
            </h2>
          </div>
          <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed mb-6">
            Apogee is Sri Lanka's 1st 24-Hour Space Hackathon, developed as a non-profit educational initiative by student leaders and space tech enthusiasts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://sedssrilanka.org"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[var(--bg-void)] border-3 border-[var(--card-border-color)] hover:border-[var(--accent-orange)] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="font-mono text-xs font-bold text-[var(--accent-orange)] uppercase">National Body</div>
                <div className="font-heading text-lg font-normal text-[var(--text-cloud)]">SEDS Sri Lanka</div>
              </div>
              <ExternalLink className="h-5 w-5 text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] transition-colors" />
            </a>

            <a
              href="https://seds-sliit.org"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[var(--bg-void)] border-3 border-[var(--card-border-color)] hover:border-[var(--accent-yellow)] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase">University Chapter</div>
                <div className="font-heading text-lg font-normal text-[var(--text-cloud)]">SEDS SLIIT</div>
              </div>
              <ExternalLink className="h-5 w-5 text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] transition-colors" />
            </a>
          </div>
        </div>

        {/* Categories of Open Source Dependencies */}
        <div className="space-y-10">
          {openSourceItems.map((sec, idx) => (
            <div key={idx}>
              <h3 className="font-heading text-2xl font-normal uppercase tracking-wide text-[var(--accent-cyan)] mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                {sec.category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sec.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="rounded-xl bg-[var(--bg-card)] card-border p-5 flex flex-col justify-between card-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-heading text-lg font-normal text-[var(--text-cloud)]">
                          {item.name}
                        </h4>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent-yellow)] border-t border-white/10 pt-2">
                      {item.license}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Back Link */}
        <div className="mt-16 text-center border-t-4 border-[var(--card-border-color)] pt-8">
          <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
            Built with passion by student space engineers in Colombo. MIT Licensed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-orange)] text-black font-mono text-sm font-black uppercase tracking-wider card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
          >
            ← RETURN TO APOGEE HOMEPAGE
          </Link>
        </div>

      </div>
    </div>
  );
}
