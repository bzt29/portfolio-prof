"use client";

import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "emerald" | "brand" | "neutral" | "warning";
  theme?: "dark" | "light";
}

export function Badge({
  variant = "cyan",
  theme = "dark",
  className,
  children,
  ...props
}: BadgeProps) {
  const isDark = theme === "dark";

  const variantStyles = {
    cyan: isDark
      ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/30"
      : "bg-brand-50 text-brand-700 border-brand-200",
    emerald: isDark
      ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
      : "bg-emerald-50 text-emerald-700 border-emerald-200",
    brand: isDark
      ? "bg-cyan-950/70 text-cyan-300 border-cyan-500/30"
      : "bg-brand-50 text-brand-700 border-brand-200",
    neutral: isDark
      ? "bg-slate-800 text-slate-300 border-slate-700/80"
      : "bg-slate-100 text-slate-700 border-slate-200",
    warning: isDark
      ? "bg-amber-950/50 text-amber-400 border-amber-500/20"
      : "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono border font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
