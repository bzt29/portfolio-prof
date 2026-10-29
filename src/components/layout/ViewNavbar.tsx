"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import type { ViewMode } from "@/types";

interface ViewNavbarProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function ViewNavbar({
  currentMode,
  onModeChange,
}: ViewNavbarProps) {
  return (
    <aside
      aria-label="Portfolio View Switcher"
      className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono font-semibold text-slate-100 tracking-wide uppercase">
            {PERSONAL_INFO.shortName} Portfolio
          </span>
        </div>
        <span className="hidden sm:inline-block text-slate-600">|</span>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-slate-400">
          <span>ROLE:</span>
          <span className="text-cyan-400 font-medium">Web &amp; Mobile Developer</span>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
        <button
          onClick={() => onModeChange("auto")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            currentMode === "auto"
              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
          }`}
          title="Responsive View (Auto adapt to screen width)"
        >
          <span className="material-symbols-outlined text-[16px]">devices</span>
          <span>Responsive</span>
        </button>

        <button
          onClick={() => onModeChange("white")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            currentMode === "white"
              ? "bg-white text-slate-900 font-semibold shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
          }`}
          title="White View (Light Theme)"
        >
          <span className="material-symbols-outlined text-[16px]">light_mode</span>
          <span>White View</span>
        </button>

        <button
          onClick={() => onModeChange("dark")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            currentMode === "dark"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
          }`}
          title="Dark View (Dark Theme)"
        >
          <span className="material-symbols-outlined text-[16px]">dark_mode</span>
          <span>Dark View</span>
        </button>

        <button
          onClick={() => onModeChange("mobile")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            currentMode === "mobile"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
          }`}
          title="Mobile View (Mobile Layout)"
        >
          <span className="material-symbols-outlined text-[16px]">smartphone</span>
          <span>Mobile</span>
        </button>
      </div>

      {/* Direct Permalinks */}
      <div className="hidden md:flex items-center gap-2 text-slate-400 font-mono text-[11px]">
        <Link
          href="/white"
          className="hover:text-cyan-300 transition-colors underline decoration-slate-700"
        >
          /white
        </Link>
        <span>•</span>
        <Link
          href="/dark"
          className="hover:text-cyan-300 transition-colors underline decoration-slate-700"
        >
          /dark
        </Link>
        <span>•</span>
        <Link
          href="/mobile"
          className="hover:text-cyan-300 transition-colors underline decoration-slate-700"
        >
          /mobile
        </Link>
      </div>
    </aside>
  );
}
