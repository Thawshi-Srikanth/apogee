"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTimelineStore } from "@/store/useTimelineStore";
import {
  X, Play, Pause, Plus, Trash2, RotateCcw, Clock,
  Lock, CheckCircle2, Navigation, Settings2, Sliders, ChevronDown, ChevronUp,
  FastForward, Rewind, Sparkles, Layers
} from "lucide-react";

export function DevDrawer() {
  const {
    events,
    simulatedTime,
    isPlaying,
    isDevDrawerOpen,
    setSimulatedTime,
    setIsPlaying,
    toggleIsPlaying,
    setDevDrawerOpen,
    addEvent,
    removeEvent,
    updateEvent,
    resetEvents,
  } = useTimelineStore();

  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const minHour = events[0]?.hourOffset ?? 0;
  const maxHour = events[events.length - 1]?.hourOffset ?? 48;

  // Keyboard shortcut listener (Shift+D or Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.shiftKey && e.key.toLowerCase() === "d") || (e.altKey && e.key.toLowerCase() === "d")) {
        e.preventDefault();
        setDevDrawerOpen(!isDevDrawerOpen);
      }
      if (e.key === "Escape" && isDevDrawerOpen) {
        setDevDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDevDrawerOpen, setDevDrawerOpen]);

  return (
    <AnimatePresence>
      {isDevDrawerOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDevDrawerOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Right Sliding Drawer Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[var(--bg-card)] border-l border-[var(--border-card)] shadow-2xl flex flex-col overflow-hidden text-[var(--text-cloud)] font-sans"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-card)] bg-[var(--bg-void)]">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[var(--accent-orange)]/15 border border-[var(--accent-orange)]/30 text-[var(--accent-orange)]">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-cloud)]">
                    Trajectory Dev Panel
                  </h3>
                  <p className="font-mono text-[10px] text-[var(--text-muted)]">
                    Simulated Time & Orbital Controls
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDevDrawerOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-[var(--text-muted)] hover:text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">

              {/* ── Section 1: Time Scrubber & Playback ── */}
              <div className="p-4 rounded-xl border border-[var(--border-card)] bg-[var(--bg-void)]/60 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--accent-orange)]" /> Time Scrubber
                  </span>
                  <span className="font-mono text-xs font-bold text-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 px-2 py-0.5 rounded border border-[var(--accent-yellow)]/20">
                    T+{simulatedTime.toFixed(1)} hrs
                  </span>
                </div>

                {/* Main Scrubber Slider */}
                <div className="space-y-1.5">
                  <input
                    type="range"
                    min={minHour}
                    max={maxHour}
                    step={0.1}
                    value={simulatedTime}
                    onChange={(e) => {
                      setIsPlaying(false);
                      setSimulatedTime(parseFloat(e.target.value));
                    }}
                    className="w-full h-2 bg-black/40 rounded appearance-none cursor-pointer accent-[var(--accent-orange)]"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-[var(--text-muted)]">
                    <span>T+0.0</span>
                    <span>T+{(maxHour / 2).toFixed(0)}.0</span>
                    <span>T+{maxHour.toFixed(0)}.0</span>
                  </div>
                </div>

                {/* Playback Controls */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSimulatedTime(minHour)}
                      className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent-orange)] text-[var(--text-cloud)] transition-colors"
                      title="Jump to Start"
                    >
                      <Rewind className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={toggleIsPlaying}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--accent-orange)] hover:bg-[var(--accent-orange)]/90 text-black font-mono text-xs font-bold transition-colors"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      {isPlaying ? "Pause" : "Play"}
                    </button>
                    <button
                      onClick={() => setSimulatedTime(maxHour)}
                      className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent-orange)] text-[var(--text-cloud)] transition-colors"
                      title="Jump to Finish"
                    >
                      <FastForward className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={resetEvents}
                    className="flex items-center gap-1 px-2.5 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-muted)] hover:text-white transition-colors text-xs font-mono font-bold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset
                  </button>
                </div>
              </div>

              {/* ── Section 2: Quick Jump Presets ── */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] block">
                  Quick Timeline Presets
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {events.map((evt) => (
                    <button
                      key={`preset-${evt.id}`}
                      onClick={() => {
                        setIsPlaying(false);
                        setSimulatedTime(evt.hourOffset);
                      }}
                      className={`px-2.5 py-1.5 rounded-lg border font-mono text-[10px] font-semibold truncate text-left transition-colors ${
                        Math.abs(simulatedTime - evt.hourOffset) < 0.5
                          ? "border-[var(--accent-orange)] bg-[var(--accent-orange)]/15 text-[var(--accent-orange)]"
                          : "border-[var(--border-card)] bg-[var(--bg-void)]/40 text-[var(--text-muted)] hover:text-[var(--text-cloud)]"
                      }`}
                    >
                      {evt.code}: {evt.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Section 3: Checkpoints & Planets Manager ── */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[var(--accent-cyan)]" /> Checkpoints ({events.length})
                  </span>
                  <button
                    onClick={addEvent}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--accent-cyan)]/15 border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/25 transition-colors font-mono text-[10px] font-bold uppercase"
                  >
                    <Plus className="w-3 h-3" /> Add Planet
                  </button>
                </div>

                {/* List of editable events */}
                <div className="space-y-2">
                  {events.map((node, idx) => {
                    const isExpanded = expandedEventId === node.id;
                    const isCompleted = simulatedTime >= (events[idx + 1]?.hourOffset ?? node.hourOffset + 6);
                    const isActive = simulatedTime >= node.hourOffset && !isCompleted;
                    const isLocked = simulatedTime < node.hourOffset;

                    return (
                      <div
                        key={`drawer-item-${node.id}`}
                        className={`rounded-xl border transition-all bg-[var(--bg-void)]/40 ${
                          isExpanded ? "border-[var(--accent-orange)]" : "border-[var(--border-card)]"
                        }`}
                      >
                        {/* Event summary row */}
                        <div
                          onClick={() => setExpandedEventId(isExpanded ? null : node.id)}
                          className="flex items-center justify-between p-3 cursor-pointer hover:bg-white/5 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="relative w-8 h-8 shrink-0">
                              <img
                                src={`/roadmap/planet-${node.planetIndex ?? (idx % 5) + 1}.png`}
                                alt={node.title}
                                className="w-full h-full object-contain"
                              />
                              {isLocked && (
                                <img
                                  src="/roadmap/lock-overlay.png"
                                  alt="Locked"
                                  className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
                                />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-[9px] font-bold text-black bg-[var(--accent-yellow)] px-1 py-0.2 rounded">
                                  {node.time}
                                </span>
                                <span className="font-mono text-[9px] text-[var(--text-muted)]">
                                  {node.code}
                                </span>
                              </div>
                              <h4 className="font-sans text-xs font-bold text-[var(--text-cloud)] truncate max-w-[170px]">
                                {node.title}
                              </h4>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${
                              isCompleted ? "bg-[var(--accent-cyan)]" :
                              isActive    ? "bg-[var(--accent-orange)]" :
                                            "bg-[var(--text-muted)]"
                            }`} />
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                            )}
                          </div>
                        </div>

                        {/* Expanded Edit Form */}
                        {isExpanded && (
                          <div className="p-3 border-t border-[var(--border-card)] bg-black/20 space-y-3 animate-in fade-in duration-200">
                            <div>
                              <label className="block font-mono text-[9px] text-[var(--text-muted)] uppercase mb-1">
                                Title
                              </label>
                              <input
                                type="text"
                                value={node.title}
                                onChange={(e) => updateEvent(node.id, { title: e.target.value })}
                                className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-card)] font-sans text-xs text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none"
                              />
                            </div>

                            <div>
                              <label className="block font-mono text-[9px] text-[var(--text-muted)] uppercase mb-1">
                                Description
                              </label>
                              <textarea
                                rows={2}
                                value={node.description}
                                onChange={(e) => updateEvent(node.id, { description: e.target.value })}
                                className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-card)] font-sans text-xs text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none resize-none"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block font-mono text-[9px] text-[var(--text-muted)] uppercase mb-1">
                                  Hour Offset (T+N)
                                </label>
                                <input
                                  type="number"
                                  value={node.hourOffset}
                                  onChange={(e) => {
                                    const val = parseFloat(e.target.value) || 0;
                                    updateEvent(node.id, {
                                      hourOffset: val,
                                      code: `T+${String(val).padStart(2, "0")}:00`,
                                    });
                                  }}
                                  className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-card)] font-mono text-xs text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none"
                                />
                              </div>
                              <div>
                                <label className="block font-mono text-[9px] text-[var(--text-muted)] uppercase mb-1">
                                  Time Code
                                </label>
                                <input
                                  type="text"
                                  value={node.time}
                                  onChange={(e) => updateEvent(node.id, { time: e.target.value })}
                                  className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-card)] font-mono text-xs text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none"
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-1">
                              <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase">
                                Planet sprite #{node.planetIndex}
                              </span>
                              {events.length > 2 && (
                                <button
                                  onClick={() => removeEvent(node.id)}
                                  className="inline-flex items-center gap-1 font-mono text-[10px] text-red-400 hover:text-red-300 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" /> Remove Node
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Panel Footer */}
            <div className="p-4 border-t border-[var(--border-card)] bg-[var(--bg-void)] flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
              <span>Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">Shift+D</kbd></span>
              <span className="text-[var(--accent-orange)] font-semibold">Zustand Reactive</span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
