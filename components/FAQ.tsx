"use client";

import React from "react";

export function FAQ() {
  const items = [
    { q: "Do I need a team?", a: "No. Solo entries welcome, or form a team at the event." },
    { q: "What if I've never built anything space-related?", a: "Good. That's the point." },
    { q: "Is it free?", a: "Yes. 100% free for all Sri Lankan students. Food and drinks provided." },
    { q: "Who owns what I build?", a: "You do. 100% student owned." },
    { q: "Where is it held?", a: "Colombo, Sri Lanka." },
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      <div className="mb-4 inline-block font-mono text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
        // FAQ
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-cloud)] mb-8">
        Questions answered.
      </h2>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-5 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[var(--text-cloud)] mb-1">
              {item.q}
            </h3>
            <p className="font-sans text-sm text-[var(--text-muted)]">
              {item.a}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
