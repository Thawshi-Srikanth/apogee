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
    "inline-flex items-center justify-center font-mono font-black uppercase tracking-wider rounded-full transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:translate-x-[2px] active:translate-y-[2px] cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#ffd000] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:bg-[#ff5500] hover:text-white hover:shadow-[6px_6px_0px_0px_#000000]",
    secondary:
      "bg-[var(--bg-card)] text-[#ffd000] border-2 border-[#ffd000] shadow-[3px_3px_0px_0px_rgba(255,208,0,0.3)] hover:bg-[#ffd000] hover:text-black hover:shadow-[5px_5px_0px_0px_#000]",
    accent:
      "bg-[#ff5500] text-white border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:bg-[#ffd000] hover:text-black hover:shadow-[6px_6px_0px_0px_#000000]",
    ghost:
      "bg-transparent text-[var(--text-cloud)] hover:text-[#ffd000] hover:bg-[var(--bg-card)]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs sm:text-sm",
    lg: "px-8 py-4 sm:px-10 sm:py-4.5 text-sm sm:text-base",
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
