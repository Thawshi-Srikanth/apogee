import { create } from "zustand";
import timelineData from "@/data/timeline.json";

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

interface TimelineState {
  events: TimelineEvent[];
  simulatedTime: number;
  isPlaying: boolean;
  isDevDrawerOpen: boolean;
  hoveredId: string | null;
  expandedMobileId: string | null;

  // Trajectory & Curve Parameters
  orbitR: number;
  curveTension: number;
  itemHeight: number;
  playbackSpeed: number;

  // Starry Background Parameters
  starCount: number;
  starSpeed: number;
  starOpacity: number;

  // Actions
  setSimulatedTime: (time: number | ((prev: number) => number)) => void;
  setIsPlaying: (playing: boolean) => void;
  toggleIsPlaying: () => void;
  setDevDrawerOpen: (open: boolean) => void;
  toggleDevDrawer: () => void;
  setHoveredId: (id: string | null) => void;
  setExpandedMobileId: (id: string | null) => void;
  setOrbitR: (r: number) => void;
  setCurveTension: (t: number) => void;
  setItemHeight: (h: number) => void;
  setPlaybackSpeed: (s: number) => void;

  setStarCount: (count: number) => void;
  setStarSpeed: (speed: number) => void;
  setStarOpacity: (opacity: number) => void;

  addEvent: () => void;
  removeEvent: (id: string) => void;
  updateEvent: (id: string, updates: Partial<TimelineEvent>) => void;
  resetEvents: () => void;
  resetParameters: () => void;
}

const initialEvents: TimelineEvent[] = (timelineData as TimelineEvent[]).map((evt, idx) => ({
  ...evt,
  planetIndex: (idx % 5) + 1,
}));

export const useTimelineStore = create<TimelineState>((set) => ({
  events: initialEvents,
  simulatedTime: 18,
  isPlaying: false,
  isDevDrawerOpen: false,
  hoveredId: null,
  expandedMobileId: null,

  // Parameter Defaults
  orbitR: 105,
  curveTension: 0.5,
  itemHeight: 280,
  playbackSpeed: 1,

  // Starry Background Defaults
  starCount: 80,
  starSpeed: 0.5,
  starOpacity: 0.8,

  setSimulatedTime: (timeOrFn) =>
    set((state) => ({
      simulatedTime:
        typeof timeOrFn === "function" ? timeOrFn(state.simulatedTime) : timeOrFn,
    })),

  setIsPlaying: (isPlaying) => set({ isPlaying }),
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),

  setDevDrawerOpen: (isDevDrawerOpen) => set({ isDevDrawerOpen }),
  toggleDevDrawer: () => set((state) => ({ isDevDrawerOpen: !state.isDevDrawerOpen })),

  setHoveredId: (hoveredId) => set({ hoveredId }),
  setExpandedMobileId: (expandedMobileId) => set({ expandedMobileId }),

  setOrbitR: (orbitR) => set({ orbitR }),
  setCurveTension: (curveTension) => set({ curveTension }),
  setItemHeight: (itemHeight) => set({ itemHeight }),
  setPlaybackSpeed: (playbackSpeed) => set({ playbackSpeed }),

  setStarCount: (starCount) => set({ starCount }),
  setStarSpeed: (starSpeed) => set({ starSpeed }),
  setStarOpacity: (starOpacity) => set({ starOpacity }),

  addEvent: () =>
    set((state) => {
      const lastHour = state.events.at(-1)?.hourOffset ?? 0;
      const newHour = lastHour + 6;
      const newEvt: TimelineEvent = {
        id: `chk-${state.events.length + 1}`,
        time: `T+${newHour}:00`,
        code: `T+${String(newHour).padStart(2, "0")}:00`,
        phase: "ORBITAL CHECK",
        title: `Checkpoint ${state.events.length + 1}`,
        description: "Dynamically added node. Trajectory path recalculates automatically.",
        status: "upcoming",
        hourOffset: newHour,
        planetIndex: (state.events.length % 5) + 1,
      };
      return { events: [...state.events, newEvt] };
    }),

  removeEvent: (id) =>
    set((state) => {
      if (state.events.length <= 2) return state;
      return { events: state.events.filter((e) => e.id !== id) };
    }),

  updateEvent: (id, updates) =>
    set((state) => ({
      events: state.events.map((e) => (e.id === id ? { ...e, ...updates } : e)),
    })),

  resetEvents: () =>
    set({
      events: initialEvents,
      simulatedTime: 18,
      isPlaying: false,
    }),

  resetParameters: () =>
    set({
      orbitR: 105,
      curveTension: 0.5,
      itemHeight: 280,
      playbackSpeed: 1,
      starCount: 80,
      starSpeed: 0.5,
      starOpacity: 0.8,
    }),
}));
