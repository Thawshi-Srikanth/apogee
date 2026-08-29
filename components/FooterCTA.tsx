"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { RoverMascot } from "@/components/RetroMascots";

interface FooterCTAProps {
  onOpenRegister: () => void;
}

export function FooterCTA({ onOpenRegister }: FooterCTAProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative mt-20 pb-12 overflow-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Top Containerized CTA Card Section (Vibrant Theme Orange) ── */}
        <div className="rounded-3xl bg-[var(--accent-orange)] text-black border-4 border-black p-8 sm:p-12 mb-12 shadow-[8px_8px_0px_0px_#000000] overflow-hidden">
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-8 items-center">
            {/* Left Text Content */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-7">
              <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal text-black uppercase tracking-wide mb-4 leading-none">
                READY TO <br />LAUNCH?
              </h2>
              <p className="font-sans text-lg sm:text-xl text-black font-semibold mb-3 max-w-xl leading-relaxed">
                Build real space-tech projects with a 24-hour hackathon in Colombo.
              </p>
              <p className="font-sans text-sm sm:text-base text-black/90 font-medium mb-8 max-w-xl">
                Compete for over <strong className="underline underline-offset-4 font-black">Rs. 500,000</strong> in prizes, cloud credits & mentorship.
              </p>

              <button
                onClick={onOpenRegister}
                className="px-8 py-4 rounded-2xl bg-black text-white border-3 border-black font-mono text-sm sm:text-base font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer inline-flex items-center gap-2"
              >
                REGISTER FOR APOGEE
              </button>
            </div>

            {/* Right Rover Mascot Graphic */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex justify-center lg:justify-end items-end">
              <div className="w-[180px] sm:w-[260px] flex justify-center">
                <RoverMascot size={260} className="transform hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Card Footer ── */}
        <div className="rounded-3xl bg-[var(--bg-card)] border-3 border-[var(--card-border-color)] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000000]">
          
          {/* Top Row: Logo & Newsletter */}
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-8 items-center pb-8 border-b-2 border-black/40 mb-8">
            <div className="col-span-4 sm:col-span-8 lg:col-span-6">
              <Logo className="h-8 w-auto mb-2" />
              <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
                Sri Lanka's 1st 24-Hour Student Space Hackathon. Organized by SEDS Sri Lanka & SEDS SLIIT.
              </p>
            </div>

            <div className="col-span-4 sm:col-span-8 lg:col-span-6">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-lg bg-[var(--bg-void)] border-2 border-black font-sans text-xs text-[var(--text-cloud)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-[var(--accent-yellow)] text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000000] hover:bg-[#ffe066] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer shrink-0"
                >
                  {subscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
                </button>
              </form>
            </div>
          </div>

          {/* Middle Row: Links & Large Social Icons */}
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-8 mb-8 items-start font-sans text-xs text-[var(--text-muted)]">
            
            {/* Col 1: Page Navigation (First 5 Links) */}
            <div className="col-span-2 sm:col-span-4 lg:col-span-3">
              <ul className="space-y-2">
                <li><a href="#what" className="hover:text-[var(--text-cloud)] transition-colors">What is Apogee</a></li>
                <li><a href="#why" className="hover:text-[var(--text-cloud)] transition-colors">Why Apogee</a></li>
                <li><a href="#tracks" className="hover:text-[var(--text-cloud)] transition-colors">Tracks</a></li>
                <li><a href="#timeline" className="hover:text-[var(--text-cloud)] transition-colors">Timeline</a></li>
                <li><a href="#mentors" className="hover:text-[var(--text-cloud)] transition-colors">Mentors</a></li>
              </ul>
            </div>

            {/* Col 2: Info & Rules */}
            <div className="col-span-2 sm:col-span-4 lg:col-span-3">
              <ul className="space-y-2">
                <li><a href="#prizes" className="hover:text-[var(--text-cloud)] transition-colors">Prizes</a></li>
                <li><a href="#faq" className="hover:text-[var(--text-cloud)] transition-colors">FAQ</a></li>
                <li><a href="#faq" className="hover:text-[var(--text-cloud)] transition-colors">Rules & Guidelines</a></li>
                <li><a href="#faq" className="hover:text-[var(--text-cloud)] transition-colors">Code of Conduct</a></li>
                <li><Link href="/attributions" className="hover:text-[var(--text-cloud)] transition-colors">Open Source & Attributions</Link></li>
              </ul>
            </div>

            {/* Col 3: Large Social Icons (GitHub, Discord, Twitter / X) */}
            <div className="col-span-4 sm:col-span-8 lg:col-span-6 flex items-center justify-start lg:justify-end gap-4">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="h-14 w-14 rounded-2xl bg-[var(--bg-void)] border-3 border-black p-3.5 text-[var(--text-cloud)] shadow-[4px_4px_0px_0px_#000000] hover:bg-[var(--accent-orange)] hover:text-black hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center"
              >
                <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord Server"
                className="h-14 w-14 rounded-2xl bg-[var(--bg-void)] border-3 border-black p-3.5 text-[var(--text-cloud)] shadow-[4px_4px_0px_0px_#000000] hover:bg-[var(--accent-cyan)] hover:text-black hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center"
              >
                <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="h-14 w-14 rounded-2xl bg-[var(--bg-void)] border-3 border-black p-3.5 text-[var(--text-cloud)] shadow-[4px_4px_0px_0px_#000000] hover:bg-[var(--accent-yellow)] hover:text-black hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-black/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
            <div>
              APOGEE 2027 • SRI LANKA
            </div>

            <div>
              &copy; {new Date().getFullYear()} APOGEE. All rights reserved.
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
