"use client";

import React, { useState, useMemo, useEffect } from "react";
import timelineData from "@/data/timeline.json";
import {
  Play, Pause, Plus, Trash2, RotateCcw, Clock,
  Lock, CheckCircle2, Navigation, ChevronDown, ChevronUp,
} from "lucide-react";

export interface TimelineEvent {
  id: string;
  time: string;
  code: string;
  phase: string;
  title: string;
  description: string;
  status?: string;
  hourOffset: number;
  align?: string;
  planetIndex?: number;
}

// ── Seeded PRNG ──────────────────────────────────────────────────────────────
function seededRNG(seed: number) {
  let s = seed ^ 0xdeadbeef;
  return () => {
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    s ^= s >>> 16;
    return (s >>> 0) / 0xffffffff;
  };
}

// ── Types ────────────────────────────────────────────────────────────────────
type Pt = { x: number; y: number };
interface Seg { p0: Pt; cp1: Pt; cp2: Pt; p1: Pt; len: number; }

// ── Evaluate a cubic bezier at t ─────────────────────────────────────────────
function evalBez(p0: Pt, cp1: Pt, cp2: Pt, p1: Pt, t: number) {
  const mt = 1 - t;
  return {
    x: mt**3*p0.x + 3*mt**2*t*cp1.x + 3*mt*t**2*cp2.x + t**3*p1.x,
    y: mt**3*p0.y + 3*mt**2*t*cp1.y + 3*mt*t**2*cp2.y + t**3*p1.y,
    dx: 3*mt**2*(cp1.x-p0.x)+6*mt*t*(cp2.x-cp1.x)+3*t**2*(p1.x-cp2.x),
    dy: 3*mt**2*(cp1.y-p0.y)+6*mt*t*(cp2.y-cp1.y)+3*t**2*(p1.y-cp2.y),
  };
}

// ── Arc-length of a bezier segment ───────────────────────────────────────────
function segLen(p0: Pt, cp1: Pt, cp2: Pt, p1: Pt, steps = 16): number {
  let len = 0, prev = p0;
  for (let k = 1; k <= steps; k++) {
    const cur = evalBez(p0, cp1, cp2, p1, k / steps);
    len += Math.hypot(cur.x - prev.x, cur.y - prev.y);
    prev = cur;
  }
  return len;
}

// ── Catmull-Rom spline helper ────────────────────────────────────────────────
function catmullRomSpline(pts: Pt[], tension = 0.5) {
  const segs: Seg[] = [];
  let d = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
  let totalLen = 0;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = i > 0 ? pts[i - 1] : pts[0];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = i < pts.length - 2 ? pts[i + 2] : pts[pts.length - 1];

    const cp1 = { x: p1.x + (p2.x - p0.x) / 6 * tension, y: p1.y + (p2.y - p0.y) / 6 * tension };
    const cp2 = { x: p2.x - (p3.x - p1.x) / 6 * tension, y: p2.y - (p3.y - p1.y) / 6 * tension };

    d += ` C ${cp1.x.toFixed(1)},${cp1.y.toFixed(1)} ${cp2.x.toFixed(1)},${cp2.y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    const len = segLen(p1, cp1, cp2, p2);
    totalLen += len;
    segs.push({ p0: p1, cp1, cp2, p1: p2, len });
  }
  return { d, segs, totalLen };
}

// ── Build slingshot path ──────────────────────────────────────────────────────
function buildPath(
  planets: (Pt & { isLeft: boolean })[],
  rng: () => number,
  VW: number,
  orbitR = 105
): { d: string; segs: Seg[]; totalLen: number } {
  if (!planets.length) return { d: "", segs: [], totalLen: 0 };

  const R = orbitR;
  const pts: Pt[] = [];

  function orbitPts(cx: number, cy: number, isLeft: boolean): Pt[] {
    const startDeg = isLeft ? -45 : 225;
    const step = isLeft ? -72 : 72;

    return [0, 1, 2, 3, 4].map(k => {
      const deg = startDeg + k * step;
      const rad = (deg * Math.PI) / 180;
      return { x: cx + R * Math.cos(rad), y: cy + R * Math.sin(rad) };
    });
  }

  const first = planets[0];
  const firstOrbit = orbitPts(first.x, first.y, first.isLeft);
  pts.push({ x: firstOrbit[0].x, y: firstOrbit[0].y - 180 });

  for (let i = 0; i < planets.length; i++) {
    const { x: px, y: py, isLeft } = planets[i];
    const orbit = orbitPts(px, py, isLeft);

    orbit.forEach(p => pts.push(p));

    if (i < planets.length - 1) {
      const nextOrbit = orbitPts(planets[i + 1].x, planets[i + 1].y, planets[i + 1].isLeft);
      const exitPt = orbit[4];
      const midY = exitPt.y + (nextOrbit[0].y - exitPt.y) * 0.5;
      const midX = VW / 2 + (rng() - 0.5) * (VW * 0.3);
      pts.push({ x: midX, y: midY });
    }
  }

  const last = planets[planets.length - 1];
  pts.push({ x: VW / 2, y: last.y + 180 });

  return catmullRomSpline(pts);
}

// ── Ship position by arc-length fraction ─────────────────────────────────────
function shipAt(segs: Seg[], totalLen: number, progress: number) {
  const target = Math.max(0, Math.min(1, progress)) * totalLen;
  let acc = 0;
  for (const seg of segs) {
    if (acc + seg.len >= target) {
      const t = seg.len > 0 ? (target - acc) / seg.len : 0;
      const r = evalBez(seg.p0, seg.cp1, seg.cp2, seg.p1, Math.max(0, Math.min(1, t)));
      return { x: r.x, y: r.y, angle: Math.atan2(r.dy, r.dx) * 180 / Math.PI + 90 };
    }
    acc += seg.len;
  }
  const last = segs[segs.length - 1];
  return { x: last.p1.x, y: last.p1.y, angle: 90 };
}

// ─────────────────────────────────────────────────────────────────────────────
export function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>(
    (timelineData as TimelineEvent[]).map((evt, idx) => ({
      ...evt, planetIndex: (idx % 5) + 1,
    }))
  );

  const minHour = events[0]?.hourOffset ?? 0;
  const maxHour = events[events.length - 1]?.hourOffset ?? 48;
  const [simulatedTime, setSimulatedTime] = useState(18);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setSimulatedTime(p => {
        if (p >= maxHour) { setIsPlaying(false); return maxHour; }
        return Math.min(maxHour, p + 0.2);
      });
    }, 80);
    return () => clearInterval(id);
  }, [isPlaying, maxHour]);

  // Layout — desktop
  const ITEM_H = 280;
  const PAD = 160;
  const VW = 1000;
  const VH = Math.max(900, events.length * ITEM_H + PAD + 200);
  const PLANET = 80;

  // Layout — mobile (planets aligned on left column at x=65px)
  const M_VW = 360;
  const M_ITEM_H = 210;
  const M_PAD = 90;
  const M_PLANET = 52;
  const M_VH = Math.max(600, events.length * M_ITEM_H + M_PAD + 140);

  // Desktop nodes — alternating sides
  const nodes = useMemo(() => {
    const rng = seededRNG(events.reduce((a, e) => a + e.hourOffset * 7, 13));
    return events.map((evt, i) => {
      const isLeft = i % 2 === 0;
      const baseX = isLeft ? 230 : VW - 230;
      const nudge = (rng() - 0.5) * 80;
      const x = Math.max(200, Math.min(VW - 200, baseX + nudge));
      const y = PAD + i * ITEM_H;

      const nextHour = events[i + 1]?.hourOffset ?? evt.hourOffset + 6;
      const derivedStatus: "completed" | "active" | "upcoming" =
        simulatedTime >= nextHour ? "completed" :
        simulatedTime >= evt.hourOffset ? "active" : "upcoming";

      return {
        ...evt, x, y, isLeft, derivedStatus,
        planetImg: `/roadmap/planet-${evt.planetIndex ?? (i % 5) + 1}.png`,
      };
    });
  }, [events, simulatedTime, VW, PAD, ITEM_H]);

  // Mobile nodes — all planets aligned on the left column (x = 65)
  const mobileNodes = useMemo(() => {
    return events.map((evt, i) => {
      const x = 65;
      const y = M_PAD + i * M_ITEM_H;

      const nextHour = events[i + 1]?.hourOffset ?? evt.hourOffset + 6;
      const derivedStatus: "completed" | "active" | "upcoming" =
        simulatedTime >= nextHour ? "completed" :
        simulatedTime >= evt.hourOffset ? "active" : "upcoming";

      return {
        ...evt, x, y, isLeft: true, derivedStatus,
        planetImg: `/roadmap/planet-${evt.planetIndex ?? (i % 5) + 1}.png`,
      };
    });
  }, [events, simulatedTime, M_PAD, M_ITEM_H]);

  // Desktop path
  const pathData = useMemo(() => {
    const rng = seededRNG(events.reduce((a, e) => a + e.id.length * 11 + e.hourOffset, 99));
    return buildPath(nodes.map(n => ({ x: n.x, y: n.y, isLeft: n.isLeft })), rng, VW, 105);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes.map(n => n.id).join(","), VW]);

  // Mobile path — generous large circular orbits (orbitR = 55px) around each mobile planet
  const mobilePathData = useMemo(() => {
    const rng = seededRNG(events.reduce((a, e) => a + e.id.length * 11 + e.hourOffset, 99));
    return buildPath(mobileNodes.map(n => ({ x: n.x, y: n.y, isLeft: true })), rng, 180, 55);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileNodes.map(n => n.id).join(",")]);

  // Desktop ship position
  const ship = useMemo(() => {
    if (!pathData.segs.length) return { x: VW / 2, y: PAD, angle: 90 };
    const progress = (simulatedTime - minHour) / Math.max(1, maxHour - minHour);
    return shipAt(pathData.segs, pathData.totalLen, progress);
  }, [pathData, simulatedTime, minHour, maxHour, VW, PAD]);

  // Mobile ship position
  const mobileShip = useMemo(() => {
    if (!mobilePathData.segs.length) return { x: 65, y: M_PAD, angle: 90 };
    const progress = (simulatedTime - minHour) / Math.max(1, maxHour - minHour);
    return shipAt(mobilePathData.segs, mobilePathData.totalLen, progress);
  }, [mobilePathData, simulatedTime, minHour, maxHour, M_PAD]);

  // Event management
  const addEvent = () => {
    const lastHour = events.at(-1)?.hourOffset ?? 0;
    const newHour = lastHour + 6;
    setEvents(prev => [...prev, {
      id: `chk-${prev.length + 1}`, time: `T+${newHour}:00`,
      code: `T+${String(newHour).padStart(2, "0")}:00`, phase: "ORBITAL CHECK",
      title: `Checkpoint ${prev.length + 1}`,
      description: "Dynamically added node. Path recalculates automatically.",
      status: "upcoming", hourOffset: newHour,
      planetIndex: (prev.length % 5) + 1,
    }]);
  };
  const removeEvent = (id: string) => {
    if (events.length > 2) setEvents(p => p.filter(e => e.id !== id));
  };
  const reset = () => {
    setEvents((timelineData as TimelineEvent[]).map((e, i) => ({ ...e, planetIndex: (i % 5) + 1 })));
    setSimulatedTime(18);
  };

  return (
    <section id="timeline" className="relative py-12 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] px-4 py-1.5 font-mono text-xs font-bold text-[var(--text-cloud)] uppercase tracking-wider mb-4">
            <span className="h-2 w-2 rounded-full bg-[var(--accent-orange)]" />
            GRAVITATIONAL SLINGSHOT TRAJECTORY
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
            Timeline
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto">
            Orbital gravity assists & planet slingshot checkpoints.
          </p>
        </div>

        {/* Debug scrubber */}
        <div className="mb-10 p-4 sm:p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] card-shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[var(--accent-orange)]" />
              <div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Debug Scrubber</div>
                <div className="text-sm font-mono font-bold text-[var(--text-cloud)]">T+{simulatedTime.toFixed(1)} hrs</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsPlaying(p => !p)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--bg-void)] border border-[var(--border-card)] text-[var(--text-cloud)] hover:border-[var(--accent-orange)] transition-colors text-xs font-mono font-bold">
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button onClick={addEvent}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--bg-void)] border border-[var(--border-card)] text-[var(--text-cloud)] hover:border-[var(--accent-orange)] transition-colors text-xs font-mono font-bold">
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
              <button onClick={reset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--bg-void)] border border-[var(--border-card)] text-[var(--text-muted)] hover:text-[var(--text-cloud)] transition-colors text-xs font-mono font-bold">
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
          </div>
          <input type="range" min={minHour} max={maxHour} step={0.1} value={simulatedTime}
            onChange={e => { setIsPlaying(false); setSimulatedTime(+e.target.value); }}
            className="w-full h-2 bg-[var(--bg-void)] rounded appearance-none cursor-pointer accent-[var(--accent-orange)]"
          />
          <div className="flex justify-between mt-1.5 font-mono text-[9px] text-[var(--text-muted)]">
            {events.map(e => <span key={e.id}>{e.code}</span>)}
          </div>
        </div>

        {/* ── Desktop View ─────────────────────────────────────────────────── */}
        <div className="hidden md:block relative w-full" style={{ height: `${VH}px` }}>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${VW} ${VH}`}
            preserveAspectRatio="none"
          >
            {/* Track line */}
            <path
              d={pathData.d}
              fill="none"
              stroke="var(--path-track)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dotted path */}
            <path
              d={pathData.d}
              fill="none"
              stroke="var(--path-dot)"
              strokeWidth="4"
              strokeDasharray="2 13"
              strokeLinecap="round"
            />

            {/* Connector stubs */}
            {nodes.map(node => (
              <line key={`conn-${node.id}`}
                x1={node.x} y1={node.y}
                x2={node.isLeft ? node.x + 90 : node.x - 90} y2={node.y}
                stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 4"
              />
            ))}

            {/* Ship */}
            <image
              href="/roadmap/ship.png"
              width="42" height="42"
              x={ship.x - 21} y={ship.y - 21}
              transform={`rotate(${ship.angle.toFixed(1)},${ship.x.toFixed(1)},${ship.y.toFixed(1)})`}
            />
          </svg>

          {/* Desktop Planets + Cards */}
          {nodes.map((node) => {
            const isHovered   = hoveredId === node.id;
            const isCompleted = node.derivedStatus === "completed";
            const isActive    = node.derivedStatus === "active";
            const isLocked    = node.derivedStatus === "upcoming";

            return (
              <React.Fragment key={`item-${node.id}`}>
                {/* Planet */}
                <div
                  className="absolute z-20 cursor-pointer pointer-events-auto"
                  style={{
                    left: `${(node.x / VW) * 100}%`,
                    top: `${node.y}px`,
                    transform: "translate(-50%, -50%)",
                    width: `${PLANET}px`,
                    height: `${PLANET}px`,
                  }}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={node.planetImg}
                    alt={node.title}
                    className={`w-full h-full object-contain transition-transform duration-200 ${isHovered ? "scale-110" : ""}`}
                  />
                  {isLocked && (
                    <img
                      src="/roadmap/lock-overlay.png"
                      alt="Locked"
                      style={{
                        position: "absolute",
                        width: "40px",
                        height: "40px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 30,
                      }}
                    />
                  )}
                </div>

                {/* Event Card */}
                <div
                  className="absolute z-20 group"
                  style={{
                    left:  node.isLeft  ? `${((node.x + PLANET / 2 + 14) / VW) * 100}%` : "auto",
                    right: !node.isLeft ? `${(((VW - node.x) + PLANET / 2 + 14) / VW) * 100}%` : "auto",
                    top: `${node.y}px`,
                    transform: "translateY(-50%)",
                    width: "270px",
                  }}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className={`p-4 rounded-xl border transition-colors bg-[var(--bg-card)] ${isHovered ? "border-[var(--accent-orange)]" : "border-[var(--border-card)]"}`}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] font-bold text-black bg-[var(--accent-yellow)] px-2 py-0.5 rounded uppercase">
                        {node.time}
                      </span>
                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[var(--accent-cyan)] uppercase">
                          <CheckCircle2 className="w-3 h-3" /> Unlocked
                        </span>
                      )}
                      {isActive && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[var(--accent-orange)] uppercase">
                          <Navigation className="w-3 h-3" /> Active
                        </span>
                      )}
                      {isLocked && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase">
                          <Lock className="w-3 h-3" /> Locked
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      {node.code} · {node.phase}
                    </div>
                    <h3 className="font-sans text-sm font-bold text-[var(--text-cloud)] mb-1">
                      {node.title}
                    </h3>
                    <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed">
                      {node.description}
                    </p>
                    {events.length > 2 && (
                      <button
                        onClick={e => { e.stopPropagation(); removeEvent(node.id); }}
                        className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* ── Mobile View: Planets Aligned on Left (x=65) + Large Circular Orbit (orbitR=55) + Cards on Right ── */}
        <div className="md:hidden relative w-full overflow-hidden" style={{ height: `${M_VH}px` }}>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${M_VW} ${M_VH}`}
            preserveAspectRatio="none"
          >
            {/* Thick track line for mobile orbital path */}
            <path
              d={mobilePathData.d}
              fill="none"
              stroke="var(--path-track)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dotted orbital path line */}
            <path
              d={mobilePathData.d}
              fill="none"
              stroke="var(--path-dot)"
              strokeWidth="3"
              strokeDasharray="2 9"
              strokeLinecap="round"
            />

            {/* Connector stubs: planet (x=65) → card tile (left: 110px) */}
            {mobileNodes.map(node => (
              <line
                key={`m-conn-${node.id}`}
                x1={node.x}
                y1={node.y}
                x2={108}
                y2={node.y}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
            ))}

            {/* Spaceship traveling along mobile path */}
            <image
              href="/roadmap/ship.png"
              width="32"
              height="32"
              x={mobileShip.x - 16}
              y={mobileShip.y - 16}
              transform={`rotate(${mobileShip.angle.toFixed(1)},${mobileShip.x.toFixed(1)},${mobileShip.y.toFixed(1)})`}
            />
          </svg>

          {/* Planets Aligned on Left (x=65) & Cards Aligned on Right (left:110px) */}
          {mobileNodes.map((node) => {
            const isHovered = hoveredId === node.id;
            const isCompleted = node.derivedStatus === "completed";
            const isActive = node.derivedStatus === "active";
            const isLocked = node.derivedStatus === "upcoming";
            const isExpanded = expandedMobileId === node.id || isHovered;

            return (
              <React.Fragment key={`m-item-${node.id}`}>
                {/* Mobile Planet Node (Left column x=65) */}
                <div
                  className="absolute z-20 cursor-pointer pointer-events-auto"
                  style={{
                    left: `${(node.x / M_VW) * 100}%`,
                    top: `${node.y}px`,
                    transform: "translate(-50%, -50%)",
                    width: `${M_PLANET}px`,
                    height: `${M_PLANET}px`,
                  }}
                  onClick={() => setExpandedMobileId(expandedMobileId === node.id ? null : node.id)}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={node.planetImg}
                    alt={node.title}
                    className={`w-full h-full object-contain transition-transform duration-200 ${
                      isExpanded ? "scale-110" : ""
                    }`}
                  />
                  {isLocked && (
                    <img
                      src="/roadmap/lock-overlay.png"
                      alt="Locked"
                      style={{
                        position: "absolute",
                        width: "28px",
                        height: "28px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 30,
                      }}
                    />
                  )}
                </div>

                {/* Mobile Tile Card (Right side, left:110px, right:12px) */}
                <div
                  className="absolute z-30 cursor-pointer pointer-events-auto"
                  style={{
                    left: "110px",
                    right: "12px",
                    top: `${node.y}px`,
                    transform: "translateY(-50%)",
                  }}
                  onClick={() => setExpandedMobileId(expandedMobileId === node.id ? null : node.id)}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`p-2.5 rounded-xl border transition-all duration-200 bg-[var(--bg-card)] ${
                      isExpanded
                        ? "border-[var(--accent-orange)] shadow-lg ring-1 ring-[var(--accent-orange)]/30"
                        : "border-[var(--border-card)] hover:border-[var(--accent-orange)]/60"
                    }`}
                  >
                    {/* Header: Time badge & Status indicator */}
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-[9px] font-bold text-black bg-[var(--accent-yellow)] px-1.5 py-0.5 rounded uppercase">
                        {node.time}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${
                          isCompleted ? "bg-[var(--accent-cyan)]" :
                          isActive    ? "bg-[var(--accent-orange)]" :
                                        "bg-[var(--text-muted)]"
                        }`} />
                        {isExpanded ? (
                          <ChevronUp className="w-3 h-3 text-[var(--text-muted)]" />
                        ) : (
                          <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-xs font-bold text-[var(--text-cloud)] leading-tight">
                      {node.title}
                    </h3>

                    {/* Expanded Content on Tap / Hover */}
                    {isExpanded && (
                      <div className="mt-2 pt-2 border-t border-[var(--border-card)] space-y-1.5 animate-in fade-in duration-200">
                        <div className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-wider">
                          {node.code} · {node.phase}
                        </div>
                        <p className="font-sans text-[11px] text-[var(--text-muted)] leading-relaxed">
                          {node.description}
                        </p>
                        <div className="flex items-center justify-between pt-1">
                          {isCompleted && (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-[var(--accent-cyan)] uppercase">
                              <CheckCircle2 className="w-3 h-3" /> Unlocked
                            </span>
                          )}
                          {isActive && (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-[var(--accent-orange)] uppercase">
                              <Navigation className="w-3 h-3" /> Active
                            </span>
                          )}
                          {isLocked && (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-[var(--text-muted)] uppercase">
                              <Lock className="w-3 h-3" /> Locked
                            </span>
                          )}

                          {events.length > 2 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeEvent(node.id);
                              }}
                              className="inline-flex items-center gap-1 text-[9px] font-mono text-red-400 hover:underline ml-auto"
                            >
                              <Trash2 className="w-2.5 h-2.5" /> Remove
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
