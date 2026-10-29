"use client";

import React from "react";
import { EDUCATION_AND_JOURNEY } from "@/data/portfolioData";

interface JourneySectionProps {
  theme: "dark" | "light";
}

export default function JourneySection({ theme }: JourneySectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="space-y-4" id="certificates">
      <h2
        className={`text-xl font-bold ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        Education &amp; Experience
      </h2>
      <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        Formal university education, professional internship, and software development journey.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-1">
        {EDUCATION_AND_JOURNEY.map((item) => {
          let iconBg = isDark
            ? "bg-cyan-950/60 text-cyan-400 border-cyan-500/20"
            : "bg-brand-50 text-brand-600 border-brand-200";

          if (item.category === "internship") {
            iconBg = isDark
              ? "bg-amber-950/50 text-amber-400 border-amber-500/20"
              : "bg-amber-50 text-amber-700 border-amber-200";
          } else if (item.category === "web") {
            iconBg = isDark
              ? "bg-indigo-950/50 text-indigo-400 border-indigo-500/20"
              : "bg-indigo-50 text-indigo-700 border-indigo-200";
          } else if (item.category === "mobile") {
            iconBg = isDark
              ? "bg-rose-950/50 text-rose-400 border-rose-500/20"
              : "bg-rose-50 text-rose-700 border-rose-200";
          }

          return (
            <div
              key={item.id}
              className={`p-3.5 rounded-lg border flex items-start gap-3 shadow-sm transition-colors ${
                isDark
                  ? "bg-[#0f172a] border-slate-800 hover:border-slate-700"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className={`p-2 rounded-md border ${iconBg}`}>
                {item.category === "degree" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
                {item.category === "internship" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
                {item.category === "web" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
                {item.category === "mobile" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className={`font-bold text-xs leading-snug ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono shrink-0 whitespace-nowrap ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>
                <p
                  className={`text-[11px] font-mono mt-0.5 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {item.institution}
                </p>
                <p
                  className={`text-xs mt-1.5 leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
                <span
                  className={`inline-block mt-2 text-[10px] px-1.5 py-0.5 rounded font-medium border ${
                    isDark
                      ? "text-emerald-300 bg-emerald-950/60 border-emerald-500/30"
                      : "text-emerald-700 bg-emerald-50 border-emerald-200"
                  }`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
