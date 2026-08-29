"use client";

import React, { useEffect, useState } from "react";
import { useTimelineStore } from "@/store/useTimelineStore";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, PauseIcon, FastForwardIcon, RewindIcon, ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";

export function DevDrawer() {
  const {
    events,
    simulatedTime,
    isPlaying,
    isDevDrawerOpen,
    orbitR,
    curveTension,
    itemHeight,
    playbackSpeed,
    starCount,
    starSpeed,
    starOpacity,
    setSimulatedTime,
    setIsPlaying,
    toggleIsPlaying,
    setDevDrawerOpen,
    setOrbitR,
    setCurveTension,
    setItemHeight,
    setPlaybackSpeed,
    setStarCount,
    setStarSpeed,
    setStarOpacity,
    addEvent,
    removeEvent,
    updateEvent,
    resetEvents,
    resetParameters,
  } = useTimelineStore();

  const [activeTab, setActiveTab] = useState("simulate");
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const minHour = events[0]?.hourOffset ?? 0;
  const maxHour = events[events.length - 1]?.hourOffset ?? 48;

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
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

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <Drawer isOpen={isDevDrawerOpen} onClose={() => setDevDrawerOpen(false)} side="right">
      <DrawerHeader>
        <div>
          <DrawerTitle>DEV PANEL</DrawerTitle>
          <DrawerDescription>TIMELINE CONTROLS & TRAJECTORY TUNER</DrawerDescription>
        </div>
        <DrawerClose onClose={() => setDevDrawerOpen(false)} />
      </DrawerHeader>

      <DrawerContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="simulate">SIMULATE</TabsTrigger>
            <TabsTrigger value="parameters">PARAMETERS</TabsTrigger>
            <TabsTrigger value="checkpoints">CHECKPOINTS</TabsTrigger>
          </TabsList>

          {/* Tab 1: SIMULATE */}
          <TabsContent value="simulate" className="space-y-5">
            <div className="p-4 rounded-xl border-3 border-[var(--card-border-color)] bg-[var(--bg-void)] shadow-[4px_4px_0px_0px_#000000] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)]">
                  TIME SCRUBBER
                </span>
                <span className="font-mono text-xs font-black text-black bg-[var(--accent-yellow)] border border-black px-2 py-0.5 rounded uppercase shadow-[1px_1px_0px_0px_#000]">
                  T+{simulatedTime.toFixed(1)} HRS
                </span>
              </div>

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
                  className="w-full h-2.5 bg-gray-900 rounded appearance-none cursor-pointer accent-[var(--accent-orange)]"
                />
                <div className="flex justify-between font-mono text-[9px] font-bold text-[var(--text-muted)] uppercase">
                  <span>Start (T+00)</span>
                  <span>Mid (T+{(maxHour / 2).toFixed(0)})</span>
                  <span>Finish (T+{maxHour.toFixed(0)})</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSimulatedTime(minHour)}
                    className="p-2 rounded bg-[var(--bg-card)] border-2 border-black text-[var(--text-cloud)] shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                    title="Jump to Start"
                  >
                    <HugeiconsIcon icon={RewindIcon} className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={toggleIsPlaying}
                    className="flex items-center gap-1.5 px-3 py-2 rounded bg-[var(--accent-orange)] text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                  >
                    {isPlaying ? <HugeiconsIcon icon={PauseIcon} className="w-3.5 h-3.5" /> : <HugeiconsIcon icon={PlayIcon} className="w-3.5 h-3.5" />}
                    {isPlaying ? "PAUSE" : "PLAY"}
                  </button>

                  <button
                    onClick={() => setSimulatedTime(maxHour)}
                    className="p-2 rounded bg-[var(--bg-card)] border-2 border-black text-[var(--text-cloud)] shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                    title="Jump to Finish"
                  >
                    <HugeiconsIcon icon={FastForwardIcon} className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={resetEvents}
                  className="px-2.5 py-2 rounded bg-[var(--bg-card)] border-2 border-black text-[var(--text-muted)] hover:text-white font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                >
                  RESET
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] block">
                TIMELINE PRESETS
              </span>
              <div className="grid grid-cols-2 gap-2">
                {events.map((evt) => (
                  <button
                    key={`preset-${evt.id}`}
                    onClick={() => {
                      setIsPlaying(false);
                      setSimulatedTime(evt.hourOffset);
                    }}
                    className={`px-2.5 py-1.5 rounded border-2 font-mono text-[10px] font-bold truncate text-left transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px] ${
                      Math.abs(simulatedTime - evt.hourOffset) < 0.5
                        ? "border-black bg-[var(--accent-orange)] text-black shadow-[2px_2px_0px_0px_#000]"
                        : "border-[var(--card-border-color)] bg-[var(--bg-void)] text-[var(--text-muted)] hover:text-[var(--text-cloud)] shadow-[2px_2px_0px_0px_#000]"
                    }`}
                  >
                    {evt.code}: {evt.title}
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: PARAMETERS */}
          <TabsContent value="parameters" className="space-y-4">
            <div className="p-4 rounded-xl border-3 border-[var(--card-border-color)] bg-[var(--bg-void)] shadow-[4px_4px_0px_0px_#000000] space-y-4">
              {/* Curve Tension */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)]">
                    CURVE TENSION (CATMULL-ROM)
                  </label>
                  <span className="font-mono text-xs font-bold text-[var(--accent-orange)]">
                    {curveTension.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={1.0}
                  step={0.05}
                  value={curveTension}
                  onChange={(e) => setCurveTension(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-900 rounded appearance-none cursor-pointer accent-[var(--accent-orange)]"
                />
              </div>

              {/* Orbit Radius */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)]">
                    ORBIT RADIUS (DESKTOP)
                  </label>
                  <span className="font-mono text-xs font-bold text-[var(--accent-yellow)]">
                    {orbitR}px
                  </span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={160}
                  step={5}
                  value={orbitR}
                  onChange={(e) => setOrbitR(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-900 rounded appearance-none cursor-pointer accent-[var(--accent-yellow)]"
                />
              </div>

              {/* Item Height */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)]">
                    VERTICAL ITEM SPACING
                  </label>
                  <span className="font-mono text-xs font-bold text-[var(--accent-cyan)]">
                    {itemHeight}px
                  </span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={360}
                  step={10}
                  value={itemHeight}
                  onChange={(e) => setItemHeight(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-900 rounded appearance-none cursor-pointer accent-[var(--accent-cyan)]"
                />
              </div>

              {/* Star Count */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)]">
                    STARRY BG: STAR COUNT
                  </label>
                  <span className="font-mono text-xs font-bold text-[var(--accent-pink)]">
                    {starCount}
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={200}
                  step={5}
                  value={starCount}
                  onChange={(e) => setStarCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-900 rounded appearance-none cursor-pointer accent-[var(--accent-pink)]"
                />
              </div>

              {/* Star Speed */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)]">
                    STARRY BG: DRIFT SPEED
                  </label>
                  <span className="font-mono text-xs font-bold text-[var(--accent-yellow)]">
                    {starSpeed.toFixed(1)}x
                  </span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={3.0}
                  step={0.1}
                  value={starSpeed}
                  onChange={(e) => setStarSpeed(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-900 rounded appearance-none cursor-pointer accent-[var(--accent-yellow)]"
                />
              </div>

              {/* Playback Speed Multiplier */}
              <div>
                <label className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)] block mb-2">
                  SIMULATION SPEED
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[0.5, 1, 2, 4].map((speed) => (
                    <button
                      key={`speed-${speed}`}
                      onClick={() => setPlaybackSpeed(speed)}
                      className={`py-1.5 rounded border-2 font-mono text-[10px] font-bold uppercase transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px] ${
                        playbackSpeed === speed
                          ? "border-black bg-[var(--accent-orange)] text-black shadow-[2px_2px_0px_0px_#000]"
                          : "border-[var(--card-border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] shadow-[2px_2px_0px_0px_#000]"
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={resetParameters}
                className="w-full py-2 rounded bg-[var(--bg-card)] border-2 border-black font-mono text-xs font-bold uppercase text-[var(--text-muted)] hover:text-white shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                RESET PARAMETERS
              </button>
            </div>
          </TabsContent>

          {/* Tab 3: CHECKPOINTS */}
          <TabsContent value="checkpoints" className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[var(--text-cloud)]">
                CHECKPOINTS ({events.length})
              </span>
              <button
                onClick={addEvent}
                className="px-2.5 py-1 rounded bg-[var(--accent-cyan)] text-black border-2 border-black font-mono text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              >
                + ADD PLANET
              </button>
            </div>

            <div className="space-y-2.5">
              {events.map((node, idx) => {
                const isExpanded = expandedEventId === node.id;
                const isCompleted = simulatedTime >= (events[idx + 1]?.hourOffset ?? node.hourOffset + 6);
                const isActive = simulatedTime >= node.hourOffset && !isCompleted;
                const isLocked = simulatedTime < node.hourOffset;

                return (
                  <div
                    key={`drawer-item-${node.id}`}
                    className={`rounded-xl border-2 transition-all bg-[var(--bg-void)] shadow-[3px_3px_0px_0px_#000000] ${
                      isExpanded ? "border-[var(--accent-orange)]" : "border-[var(--card-border-color)]"
                    }`}
                  >
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
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="font-mono text-[9px] font-black text-black bg-[var(--accent-yellow)] px-1 py-0.2 rounded border border-black">
                              {node.time}
                            </span>
                            <span className="font-mono text-[9px] font-semibold text-[var(--text-muted)]">
                              {node.code}
                            </span>
                          </div>
                          <h4 className="font-sans text-xs font-bold text-[var(--text-cloud)] truncate max-w-[170px]">
                            {node.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full border border-black ${
                          isCompleted ? "bg-[var(--accent-cyan)]" :
                          isActive    ? "bg-[var(--accent-orange)]" :
                                        "bg-[var(--text-muted)]"
                        }`} />
                        {isExpanded ? (
                          <HugeiconsIcon icon={ArrowUp01Icon} className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        ) : (
                          <HugeiconsIcon icon={ArrowDown01Icon} className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        )}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-3.5 border-t-2 border-[var(--card-border-color)] bg-black/30 space-y-3 animate-in fade-in duration-200">
                        <div>
                          <label className="block font-mono text-[9px] font-bold text-[var(--text-muted)] uppercase mb-1">
                            CHECKPOINT TITLE
                          </label>
                          <input
                            type="text"
                            value={node.title}
                            onChange={(e) => updateEvent(node.id, { title: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border-2 border-black font-sans text-xs font-semibold text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-[9px] font-bold text-[var(--text-muted)] uppercase mb-1">
                            DESCRIPTION
                          </label>
                          <textarea
                            rows={2}
                            value={node.description}
                            onChange={(e) => updateEvent(node.id, { description: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border-2 border-black font-sans text-xs text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none resize-none leading-relaxed"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block font-mono text-[9px] font-bold text-[var(--text-muted)] uppercase mb-1">
                              HOUR OFFSET (T+N)
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
                              className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border-2 border-black font-mono text-xs font-bold text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none"
                            />
                          </div>
                          <div>
                            <label className="block font-mono text-[9px] font-bold text-[var(--text-muted)] uppercase mb-1">
                              DISPLAY TIME
                            </label>
                            <input
                              type="text"
                              value={node.time}
                              onChange={(e) => updateEvent(node.id, { time: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded bg-[var(--bg-card)] border-2 border-black font-mono text-xs font-bold text-[var(--text-cloud)] focus:border-[var(--accent-orange)] outline-none"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="font-mono text-[9px] font-bold text-[var(--text-muted)] uppercase">
                            PLANET SPRITE #{node.planetIndex}
                          </span>
                          {events.length > 2 && (
                            <button
                              onClick={() => removeEvent(node.id)}
                              className="font-mono text-[10px] font-bold text-red-400 hover:text-red-300 transition-colors uppercase cursor-pointer"
                            >
                              REMOVE CHECKPOINT
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </DrawerContent>

      <DrawerFooter>
        <span>SHORTCUT: <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20">SHIFT+D</kbd></span>
        <span className="text-[var(--accent-orange)]">DEV TOOLS</span>
      </DrawerFooter>
    </Drawer>
  );
}
