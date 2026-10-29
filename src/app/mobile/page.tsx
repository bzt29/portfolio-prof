"use client";

import React, { useState } from "react";
import MobileView from "@/components/MobileView";
import Link from "next/link";

export default function MobilePage() {
  const [frameMode, setFrameMode] = useState<"phone" | "fluid">("phone");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top bar for mobile preview controls */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Hub</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="font-mono text-cyan-400 font-semibold">Mobile View</span>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setFrameMode("phone")}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
              frameMode === "phone"
                ? "bg-emerald-600 text-white font-medium"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">smartphone</span>
            <span>Phone Frame (390px)</span>
          </button>
          <button
            onClick={() => setFrameMode("fluid")}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
              frameMode === "fluid"
                ? "bg-emerald-600 text-white font-medium"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">open_in_full</span>
            <span>Full View</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-0 md:p-6 bg-slate-950">
        {frameMode === "phone" ? (
          <div className="w-full max-w-[390px] min-h-[844px] bg-[#0b1326] md:rounded-[40px] md:border-8 md:border-slate-800 md:shadow-2xl overflow-hidden relative">
            {/* Phone Notch speaker aesthetic */}
            <div className="hidden md:flex justify-center pt-2 pb-1 bg-surface z-50">
              <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                <span className="w-8 h-1.5 bg-slate-800 rounded-full"></span>
              </div>
            </div>
            <MobileView />
          </div>
        ) : (
          <div className="w-full max-w-2xl bg-[#0b1326]">
            <MobileView />
          </div>
        )}
      </div>
    </div>
  );
}
