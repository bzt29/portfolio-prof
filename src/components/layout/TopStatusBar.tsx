"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface TopStatusBarProps {
  theme: "dark" | "light";
}

export default function TopStatusBar({ theme }: TopStatusBarProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`${
        isDark
          ? "bg-[#060a12] text-slate-400 border-slate-800/80"
          : "bg-slate-900 text-slate-300 border-slate-800"
      } text-xs py-1.5 px-4 border-b flex items-center justify-between z-40`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isDark ? "bg-emerald-400" : "bg-emerald-500"
              }`}
            ></span>
          </span>
          {PERSONAL_INFO.systemStatus}
        </span>
        <span className={isDark ? "text-slate-700 hidden sm:inline" : "text-slate-600 hidden sm:inline"}>
          |
        </span>
        <span className="text-slate-400 hidden sm:inline font-mono">
          LOCATION:{" "}
          <span className={isDark ? "text-cyan-400 font-semibold" : ""}>
            {PERSONAL_INFO.shortLocation.toUpperCase()}
          </span>
        </span>
      </div>
      <div className="flex items-center gap-4 text-slate-400 text-[11px]">
        <span
          className={`font-mono ${
            isDark
              ? "text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800"
              : ""
          }`}
        >
          {PERSONAL_INFO.versionTag}
        </span>
        <a
          className={`transition-colors font-mono ${
            isDark ? "hover:text-cyan-300" : "hover:text-white"
          }`}
          href={`mailto:${PERSONAL_INFO.email}`}
        >
          {PERSONAL_INFO.email}
        </a>
      </div>
    </div>
  );
}
