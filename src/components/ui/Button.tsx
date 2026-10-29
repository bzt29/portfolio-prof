"use client";

import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  theme = "dark",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const isDark = theme === "dark";

  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-3.5 py-2 text-xs",
    lg: "px-4 py-2.5 text-sm",
  };

  const variantStyles = {
    primary: isDark
      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-sm"
      : "bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-sm",
    secondary: isDark
      ? "bg-[#0d1424] border border-slate-800 hover:bg-slate-800 text-slate-200"
      : "bg-white border border-slate-200 hover:bg-slate-50 text-slate-700",
    outline: isDark
      ? "border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/30"
      : "border border-brand-300 text-brand-700 hover:bg-brand-50",
    ghost: isDark
      ? "text-slate-400 hover:text-white hover:bg-slate-800/40"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-mono transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
