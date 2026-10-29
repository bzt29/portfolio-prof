"use client";

import React from "react";
import { PERSONAL_INFO, METRICS } from "@/data/portfolioData";

interface HeroSectionProps {
  theme: "dark" | "light";
}

export default function HeroSection({ theme }: HeroSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="space-y-6" id="hero">
      {/* Primary Headline */}
      <div className="space-y-3">
        <h1
          className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {PERSONAL_INFO.briefIntro}
        </h1>

        <p
          className={`text-sm sm:text-base leading-relaxed whitespace-pre-line ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {PERSONAL_INFO.detailedIntro}
        </p>
      </div>

      {/* Real Core Capabilities & Practical Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-2">
        <div
          className={`p-4 rounded-xl border transition-colors ${
            isDark
              ? "bg-[#0f172a] border-slate-800"
              : "bg-white border-slate-200 shadow-xs"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                isDark
                  ? "bg-cyan-950/70 border-cyan-800/60 text-cyan-300"
                  : "bg-slate-100 border-slate-200 text-slate-800"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3
              className={`text-sm font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Full-Stack &amp; Mobile
            </h3>
          </div>
          <p
            className={`text-xs leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Pengembangan 6+ aplikasi web dan mobile (Laravel, Next.js, Kotlin, Flutter) dengan arsitektur scalable, REST API, dan integrasi basis data.
          </p>
        </div>

        <div
          className={`p-4 rounded-xl border transition-colors ${
            isDark
              ? "bg-[#0f172a] border-slate-800"
              : "bg-white border-slate-200 shadow-xs"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                isDark
                  ? "bg-emerald-950/70 border-emerald-800/60 text-emerald-300"
                  : "bg-slate-100 border-slate-200 text-slate-800"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3
              className={`text-sm font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Network Engineering &amp; ISP
            </h3>
          </div>
          <p
            className={`text-xs leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Teknisi Jaringan Mitra Resmi PT IOSYS untuk 1.000+ pelanggan (MikroTik, PPPoE, RADIUS) serta pembangunan ekosistem SIPRESGA &amp; SIMJU di PT MJU.
          </p>
        </div>
      </div>

      {/* 4 KPI Metrics */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 pt-1">
        {METRICS.map((item, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-xl border transition-all ${
              isDark
                ? "bg-[#0f172a] border-slate-800 hover:border-slate-700"
                : "bg-white border-slate-200 shadow-xs hover:border-slate-300"
            }`}
          >
            <div className="flex items-baseline justify-between mb-1">
              <span
                className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
                  item.accent === "cyan"
                    ? isDark ? "text-cyan-400" : "text-cyan-600"
                    : item.accent === "brand"
                    ? isDark ? "text-blue-400" : "text-brand-600"
                    : item.accent === "emerald"
                    ? isDark ? "text-emerald-400" : "text-emerald-600"
                    : isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {item.value}
              </span>
            </div>
            <p
              className={`text-xs font-bold font-mono uppercase tracking-wider ${
                isDark ? "text-slate-200" : "text-slate-800"
              }`}
            >
              {item.label}
            </p>
            {item.sublabel && (
              <p
                className={`text-[11px] font-mono mt-0.5 leading-snug ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {item.sublabel}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
