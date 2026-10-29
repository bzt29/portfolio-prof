"use client";

import React from "react";
import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  theme?: "dark" | "light";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, theme = "dark", className, ...props }, ref) => {
    const isDark = theme === "dark";

    return (
      <div className="w-full space-y-1">
        {label && (
          <label
            className={cn(
              "block text-xs font-mono",
              isDark ? "text-slate-400" : "text-slate-600"
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-3 py-2 rounded-lg text-sm font-mono transition-colors focus:outline-none",
            isDark
              ? "bg-[#0b1326] border border-slate-800 text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
              : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20",
            error && (isDark ? "border-rose-500" : "border-rose-600"),
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-rose-500 font-mono mt-0.5">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
