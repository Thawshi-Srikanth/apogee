"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/Button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, FireIcon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    track: "Mission Software",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 card-border card-shadow z-10">
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white cursor-pointer"
        >
          <HugeiconsIcon icon={Cancel01Icon} className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <HugeiconsIcon icon={FireIcon} className="h-6 w-6 text-[#ff5500]" />
              <h3 className="font-mono text-xs font-bold text-[var(--text-cloud)] uppercase">
                REGISTER FOR APOGEE 2027
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kasun Perera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-void)] p-3 text-sm text-[var(--text-cloud)] placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-semibold"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="kasun@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-void)] p-3 text-sm text-[var(--text-cloud)] placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-semibold"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  University / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. SLIIT / University of Moratuwa"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-void)] p-3 text-sm text-[var(--text-cloud)] placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-semibold"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  Preferred Track
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-void)] p-3 text-sm text-[var(--text-cloud)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-semibold"
                >
                  <option value="Propulsion">Propulsion</option>
                  <option value="Mission Software">Mission Software</option>
                  <option value="Satellite Systems">Satellite Systems</option>
                  <option value="Space Biology">Space Biology</option>
                  <option value="Open Track">Open Track</option>
                </select>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="accent" size="md" className="w-full">
                  CONFIRM REGISTRATION →
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} className="h-12 w-12 text-[#ffd000] mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-2 uppercase">
              PLAYER 1 READY!
            </h3>
            <p className="font-sans text-sm text-[var(--text-muted)] mb-6">
              Welcome, <span className="text-[var(--text-cloud)] font-bold">{formData.name}</span>. Details sent to <span className="font-mono text-xs text-[#ffd000]">{formData.email}</span>.
            </p>
            <Button onClick={resetAndClose} variant="primary" size="sm">
              DONE
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
