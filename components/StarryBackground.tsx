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

    const colors = [
      "255, 255, 255", // Pure White
      "255, 255, 255", 
      "0, 240, 255",   // Accent Cyan
      "255, 200, 87",  // Accent Yellow
    ];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Initialize stars
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.35 + 0.1,
      twinkleSpeed: Math.random() * 0.025 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const alphaDirections = stars.map(() => (Math.random() > 0.5 ? 1 : -1));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Slow upward drift
        star.y -= star.speed * starSpeed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Smooth twinkling
        star.opacity += alphaDirections[i] * star.twinkleSpeed;
        if (star.opacity >= 1) {
          star.opacity = 1;
          alphaDirections[i] = -1;
        } else if (star.opacity <= 0.25) {
          star.opacity = 0.25;
          alphaDirections[i] = 1;
        }

        // Draw glowing star
        const currentAlpha = Math.min(1, Math.max(0.1, star.opacity * starOpacity));
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
