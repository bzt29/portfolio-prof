"use client";

import React from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: "dark" | "light";
  hoverable?: boolean;
}

export function Card({
  theme = "dark",
  hoverable = true,
  className,
  children,
  ...props
}: CardProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "rounded-lg border p-4 shadow-sm transition-all",
        isDark
          ? "bg-[#0f172a] border-slate-800 text-slate-300"
          : "bg-white border-slate-200 text-slate-700",
        hoverable &&
          (isDark
            ? "hover:border-cyan-500/50 hover:shadow-cyan-950/20"
            : "hover:border-brand-300 hover:shadow-md"),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
