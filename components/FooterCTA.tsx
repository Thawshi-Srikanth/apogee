"use client";

import React from "react";
import { Flame } from "lucide-react";

interface FooterCTAProps {
  onOpenRegister: () => void;
}

export function FooterCTA({ onOpenRegister }: FooterCTAProps) {
  return (
    <footer className="bg-[var(--bg-void)] border-t border-[var(--border-card)] mt-12 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Grid for Final CTA */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 text-center mb-16">
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <h2 className="font-heading text-4xl sm:text-6xl font-black text-[var(--text-cloud)] mb-6 uppercase">
              Your rocket doesn't <span className="text-[var(--accent-orange)]">build itself.</span>
            </h2>

            <button
              onClick={onOpenRegister}
              className="rounded-full bg-[var(--accent-yellow)] px-9 py-4 font-mono text-base font-black uppercase text-black hover:bg-[var(--accent-orange)] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] active:translate-x-[2px] active:translate-y-[2px]"
            >
              Register Now
            </button>
          </div>
        </div>

        {/* 4-8-12 Grid for Footer Meta */}
        <div className="pt-8 border-t border-[var(--border-card)] grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 items-center font-mono text-xs text-[var(--text-muted)]">
          <div className="col-span-4 sm:col-span-4 lg:col-span-6 flex items-center gap-2">
            <Flame className="h-4 w-4 text-[var(--accent-orange)]" />
            <span className="font-bold text-[var(--text-cloud)] uppercase">Apogee 2027</span>
            <span>• Colombo, Sri Lanka</span>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-6 flex sm:justify-end items-center">
            <span>contact@apogee.lk</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
