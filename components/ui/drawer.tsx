"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "right" | "left";
  className?: string;
}

export function Drawer({
  isOpen,
  onClose,
  children,
  side = "right",
  className = "",
}: DrawerProps) {
  const xInitial = side === "right" ? "100%" : "-100%";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs"
          />

          <motion.aside
            initial={{ x: xInitial }}
            animate={{ x: 0 }}
            exit={{ x: xInitial }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className={`fixed top-0 bottom-0 z-50 w-full max-w-md bg-[var(--bg-card)] border-l-4 border-[var(--card-border-color)] shadow-[-8px_0px_0px_0px_#000000] flex flex-col overflow-hidden text-[var(--text-cloud)] font-sans ${
              side === "right" ? "right-0" : "left-0"
            } ${className}`}
          >
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function DrawerHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 border-b-3 border-[var(--card-border-color)] bg-[var(--bg-void)] ${className}`}
    >
      {children}
    </div>
  );
}

export function DrawerTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`font-heading text-sm font-black uppercase tracking-wide text-[var(--text-cloud)] ${className}`}>
      {children}
    </h3>
  );
}

export function DrawerDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-mono text-[10px] font-medium text-[var(--accent-orange)] uppercase ${className}`}>
      {children}
    </p>
  );
}

export function DrawerClose({
  onClose,
  className = "",
}: {
  onClose: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClose}
      className={`p-1.5 rounded border-2 border-black bg-[var(--bg-card)] text-[var(--text-cloud)] hover:bg-[var(--accent-pink)] hover:text-white active:translate-x-[1px] active:translate-y-[1px] shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer ${className}`}
      title="Close (Esc)"
    >
      <X className="w-4 h-4" />
    </button>
  );
}

export function DrawerContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex-1 overflow-y-auto p-5 ${className}`}>{children}</div>;
}

export function DrawerFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-4 border-t-3 border-[var(--card-border-color)] bg-[var(--bg-void)] flex items-center justify-between font-mono text-[10px] font-bold text-[var(--text-muted)] ${className}`}
    >
      {children}
    </div>
  );
}
