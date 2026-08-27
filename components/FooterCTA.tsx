"use client";

import React from "react";
import { Flame } from "lucide-react";

interface FooterCTAProps {
  onOpenRegister: () => void;
}

export function FooterCTA({ onOpenRegister }: FooterCTAProps) {
  return (
    <footer className="bg-[var(--bg-void)] border-t border-[var(--border-card)] mt-12 py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-[var(--text-cloud)] mb-6">
          Your rocket doesn't <span className="text-[var(--accent-orange)]">build itself.</span>
        </h2>

        <button
          onClick={onOpenRegister}
          className="rounded-lg bg-[var(--accent-orange)] px-8 py-3.5 font-mono text-base font-bold text-white hover:bg-[var(--accent-yellow)] hover:text-black transition-all"
        >
          Register Now
        </button>
      </div>

      <div className="max-w-5xl mx-auto pt-8 border-t border-[var(--border-card)] flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[var(--text-muted)] gap-4">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-[var(--accent-orange)]" />
          <span className="font-bold text-[var(--text-cloud)] uppercase">Apogee 2027</span>
          <span>• Colombo, Sri Lanka</span>
        </div>

        <div>
          contact@apogee.lk
        </div>
      </div>

    </footer>
  );
}
