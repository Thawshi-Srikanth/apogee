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
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
              FAQ
            </h2>
            <p className="font-sans text-lg text-[#00f0ff] font-medium max-w-2xl mx-auto">
              Short, direct answers to common questions. Answered like a person, not a policy document.
            </p>
          </div>

          {/* FAQ items centered */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-10 lg:col-start-2 space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="rounded-xl bg-[var(--bg-card)] card-border p-6 card-shadow-sm">
                <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-2">
                  {item.q}
                </h3>
                <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
