"use client";

import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-pixel font-bold uppercase tracking-wider rounded-xl transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#ffd000] text-black border-4 border-black card-shadow hover:bg-[#ff5500] hover:text-white",
    secondary:
      "bg-[var(--bg-card)] text-[#ffd000] border-4 border-[#ffd000] card-shadow hover:bg-[#ffd000] hover:text-black",
    accent:
      "bg-[#ff5500] text-white border-4 border-black card-shadow hover:bg-[#ffd000] hover:text-black",
    ghost:
      "bg-transparent text-[var(--text-cloud)] hover:text-[#ffd000] hover:bg-[var(--bg-card)]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-[9px]",
    md: "px-5 py-3 text-[10px] sm:text-xs",
    lg: "px-7 py-4 sm:px-9 sm:py-4.5 text-xs sm:text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
