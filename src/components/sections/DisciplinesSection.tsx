"use client";

import React from "react";
import { DISCIPLINES } from "@/data/portfolioData";

interface DisciplinesSectionProps {
  theme: "dark" | "light";
}

export default function DisciplinesSection({ theme }: DisciplinesSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="space-y-4" id="competencies">
      <h2
        className={`text-xl font-bold ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        Core Engineering Disciplines
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {DISCIPLINES.map((discipline) => {
          const isWeb = discipline.iconType === "web";
          const isNetwork = discipline.iconType === "network";
          const iconColor = isWeb
            ? isDark
              ? "text-cyan-400"
              : "text-brand-600"
            : isNetwork
            ? isDark
              ? "text-emerald-400"
              : "text-emerald-600"
            : isDark
            ? "text-indigo-400"
            : "text-indigo-600";

          return (
            <div
              key={discipline.id}
              className={`p-4 rounded-lg border shadow-sm space-y-2.5 transition-all ${
                discipline.fullWidth ? "lg:col-span-2" : ""
              } ${
                isDark
                  ? isNetwork
                    ? "bg-[#0f172a] border-slate-800 hover:border-emerald-500/40"
                    : "bg-[#0f172a] border-slate-800 hover:border-cyan-500/40"
                  : isNetwork
                  ? "bg-white border-slate-200 hover:border-emerald-300"
                  : "bg-white border-slate-200 hover:border-brand-300"
              }`}
            >
              <div className={`flex items-center gap-2 ${iconColor}`}>
                {isWeb ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ) : isNetwork ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                <h3
                  className={`font-bold text-sm ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {discipline.title}
                </h3>
              </div>

              <ul
                className={`text-xs space-y-1.5 list-disc list-inside ${
                  isDark ? "text-slate-300" : "text-slate-600"
                } ${
                  discipline.fullWidth
                    ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 space-y-0"
                    : ""
                }`}
              >
                {discipline.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
