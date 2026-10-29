"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface DesktopFooterProps {
  theme: "dark" | "light";
  onBackToTop: () => void;
  className?: string;
}

export default function DesktopFooter({
  theme,
  onBackToTop,
  className = "",
}: DesktopFooterProps) {
  const isDark = theme === "dark";

  return (
    <footer
      className={`mt-auto w-full pt-6 pb-6 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-3 font-mono ${
        isDark
          ? "border-slate-800/80 text-slate-500"
          : "border-slate-200 text-slate-500"
      } ${className}`}
    >
      <p>© 2025 {PERSONAL_INFO.name}. All rights reserved.</p>
      <div className="flex gap-4">
        <span>{PERSONAL_INFO.shortLocation}</span>
        <span>•</span>
        <span>React &amp; Laravel</span>
        <span>•</span>
        <button
          onClick={onBackToTop}
          className={`hover:underline transition-colors ${
            isDark ? "text-cyan-400 hover:text-cyan-300" : "text-brand-600 hover:text-brand-700"
          }`}
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
