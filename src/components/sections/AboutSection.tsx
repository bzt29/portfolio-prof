"use client";

import React from "react";
import {
  PERSONAL_INFO,
  INTERNSHIP_HIGHLIGHT,
  NETWORK_HIGHLIGHT,
} from "@/data/portfolioData";

interface AboutSectionProps {
  theme: "dark" | "light";
}

export default function AboutSection({ theme }: AboutSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="space-y-4" id="about">
      <h2
        className={`text-xl font-bold ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        About Me
      </h2>

      <div
        className={`text-sm leading-relaxed space-y-3 ${
          isDark ? "prose prose-invert text-slate-300" : "prose text-slate-600"
        }`}
      >
        <p className="whitespace-pre-line">
          {PERSONAL_INFO.aboutParagraph1}
        </p>

        {PERSONAL_INFO.aboutParagraph2 && (
          <p className="whitespace-pre-line">
            {PERSONAL_INFO.aboutParagraph2}
          </p>
        )}

        {/* Dynamic Experience Highlight Cards */}
        <div className="space-y-3.5 mt-4">
          {/* Card 1: Network Engineering Highlight (PT IOSYS PLANET HOTSPOT) */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isDark
                ? "bg-[#0f172a] border-slate-800"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1.5 lg:gap-2">
              <span
                className={`px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono font-medium self-start inline-block ${
                  isDark
                    ? "bg-emerald-950/70 border border-emerald-500/30 text-emerald-300"
                    : "bg-emerald-50 border border-emerald-200 text-emerald-700"
                }`}
              >
                {NETWORK_HIGHLIGHT.badge}
              </span>
              <span
                className={`text-[11px] sm:text-xs font-mono ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {NETWORK_HIGHLIGHT.location}
              </span>
            </div>
            <div className="space-y-0.5">
              <h3
                className={`text-base font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {NETWORK_HIGHLIGHT.company}
              </h3>
              <p
                className={`text-xs font-medium ${
                  isDark ? "text-cyan-400" : "text-brand-600"
                }`}
              >
                {NETWORK_HIGHLIGHT.companyType}
              </p>
            </div>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {NETWORK_HIGHLIGHT.description}
            </p>
          </div>

          {/* Card 2: Software Development Internship (PT MJU) */}
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              isDark
                ? "bg-[#0f172a] border-slate-800"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1.5 lg:gap-2">
              <span
                className={`px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono font-medium self-start inline-block ${
                  isDark
                    ? "bg-cyan-950/70 border border-cyan-500/30 text-cyan-300"
                    : "bg-brand-50 border border-brand-200 text-brand-700"
                }`}
              >
                {INTERNSHIP_HIGHLIGHT.badge}
              </span>
              <span
                className={`text-[11px] sm:text-xs font-mono ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {INTERNSHIP_HIGHLIGHT.location}
              </span>
            </div>
            <div className="space-y-0.5">
              <h3
                className={`text-base font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {INTERNSHIP_HIGHLIGHT.company}
              </h3>
              <p
                className={`text-xs font-medium ${
                  isDark ? "text-cyan-400" : "text-brand-600"
                }`}
              >
                {INTERNSHIP_HIGHLIGHT.companyType}
              </p>
            </div>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {INTERNSHIP_HIGHLIGHT.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
