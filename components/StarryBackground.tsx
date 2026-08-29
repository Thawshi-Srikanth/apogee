"use client";

import React, { useEffect, useRef } from "react";
import { useTimelineStore } from "@/store/useTimelineStore";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  color: string;
}

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { starCount, starSpeed, starOpacity } = useTimelineStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let touchStartY = 0;

    const colors = [
      "255, 255, 255", // Pure White
      "255, 255, 255", 
      "0, 240, 255",   // Accent Cyan
      "255, 200, 87",  // Accent Yellow
    ];

    let stars: Star[] = [];
    let alphaDirections: number[] = [];

    // Rationalize star count based on screen width/area to prevent mobile clutter
    const initStars = () => {
      // 1440px is standard baseline width
      const densityFactor = width / 1440;
      const effectiveCount = Math.max(20, Math.round(starCount * Math.min(2.0, densityFactor)));

      stars = Array.from({ length: effectiveCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.35 + 0.1,
        twinkleSpeed: Math.random() * 0.025 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));

      alphaDirections = stars.map(() => (Math.random() > 0.5 ? 1 : -1));
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    initStars();

    // Parallax velocity tracking across scroll, wheel, and touch
    const handleScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY;
      scrollVelocity += deltaY * 0.25;
      lastScrollY = currentY;
    };

    const handleWheel = (e: WheelEvent) => {
      scrollVelocity += e.deltaY * 0.2;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const currentTouchY = e.touches[0].clientY;
        const deltaY = touchStartY - currentTouchY;
        scrollVelocity += deltaY * 0.3;
        touchStartY = currentTouchY;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth friction deceleration back to base drift
      scrollVelocity *= 0.88;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star position proportional to base drift speed + scroll/swipe velocity
        star.y -= (star.speed * starSpeed) + (scrollVelocity * 0.22 * star.speed);

        // Wrap around screen bounds seamlessly
        if (star.y < -20) {
          star.y = height + 20;
          star.x = Math.random() * width;
        } else if (star.y > height + 20) {
          star.y = -20;
          star.x = Math.random() * width;
        }

        // Smooth twinkling animation
        star.opacity += alphaDirections[i] * star.twinkleSpeed;
        if (star.opacity >= 1) {
          star.opacity = 1;
          alphaDirections[i] = -1;
        } else if (star.opacity <= 0.25) {
          star.opacity = 0.25;
          alphaDirections[i] = 1;
        }

        const currentAlpha = Math.min(1, Math.max(0.1, star.opacity * starOpacity));

        // Always draw crisp, clean point stars
        ctx.fillStyle = `rgba(${star.color}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, starSpeed, starOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
      style={{ background: "transparent" }}
    />
  );
}
