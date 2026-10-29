"use client";

import React, { useState } from "react";
import {
  TECH_SKILLS,
  TechSkillItem,
} from "@/data/portfolioData";

interface TechStackSectionProps {
  theme: "dark" | "light";
}

type SkillCategory = "all" | TechSkillItem["category"];

export default function TechStackSection({ theme }: TechStackSectionProps) {
  const isDark = theme === "dark";
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");

  const categories: { id: SkillCategory; label: string; count: number }[] = [
    { id: "all", label: "All Stack", count: TECH_SKILLS.length },
    {
      id: "backend",
      label: "Backend",
      count: TECH_SKILLS.filter((s) => s.category === "backend").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: TECH_SKILLS.filter((s) => s.category === "frontend").length,
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      count: TECH_SKILLS.filter((s) => s.category === "mobile").length,
    },
    {
      id: "database",
      label: "Database",
      count: TECH_SKILLS.filter((s) => s.category === "database").length,
    },
    {
      id: "tools",
      label: "Tools & DevOps",
      count: TECH_SKILLS.filter((s) => s.category === "tools").length,
    },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? TECH_SKILLS
      : TECH_SKILLS.filter((s) => s.category === selectedCategory);



  return (
    <section className="space-y-6" id="topology">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 border-slate-800/70 dark:border-slate-800/80">
        <div>
          <h2
            className={`text-xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Tech Stack &amp; Skills Matrix
          </h2>
          <p
            className={`text-xs mt-1 leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Production technologies, frameworks, and developer toolkits across
            modern web and mobile ecosystems.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span
            className={`px-2.5 py-1 rounded text-[11px] font-mono border ${
              isDark
                ? "bg-cyan-950/60 text-cyan-300 border-cyan-800/60"
                : "bg-brand-50 text-brand-700 border-brand-200"
            }`}
          >
            10 Core Toolkits
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all ${
                isActive
                  ? isDark
                    ? "bg-cyan-950/70 text-cyan-300 border-cyan-700/80 shadow-sm"
                    : "bg-brand-50 text-brand-700 border-brand-300 shadow-sm"
                  : isDark
                  ? "bg-[#0d1424] text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
                  : "bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? isDark
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "bg-brand-200/60 text-brand-800 font-semibold"
                    : isDark
                    ? "bg-slate-800 text-slate-400"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tech Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`rounded-xl border p-4 transition-all duration-200 group hover:shadow-md ${
              isDark
                ? "bg-[#0d1424] border-slate-800/90 hover:border-slate-700 hover:shadow-cyan-950/20"
                : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/50"
            }`}
          >
            {/* Top Row: Name, Color Dot & Category Badge */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 8px ${skill.color}55`,
                  }}
                ></span>
                <h3
                  className={`font-mono font-bold text-sm truncate ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  {skill.name}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                    isDark
                      ? "bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {skill.category}
                </span>
                {skill.level && (
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      skill.level === "Advanced"
                        ? isDark
                          ? "bg-emerald-950/60 text-emerald-300 border border-emerald-800/60"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : isDark
                        ? "bg-cyan-950/60 text-cyan-300 border border-cyan-800/60"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {skill.level}
                  </span>
                )}
              </div>
            </div>

            {/* Subtitle / Role Type */}
            <div
              className={`text-[11px] font-mono mt-1 ${
                isDark ? "text-cyan-400/80" : "text-brand-600"
              }`}
            >
              {skill.type}
            </div>

            {/* Description */}
            {skill.description && (
              <p
                className={`text-xs leading-relaxed mt-2.5 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {skill.description}
              </p>
            )}

            {/* Applied in Projects Tags */}
            {skill.projects && skill.projects.length > 0 && (
              <div
                className={`flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t text-[11px] font-mono ${
                  isDark ? "border-slate-800/80" : "border-slate-100"
                }`}
              >
                <span
                  className={`text-[10px] ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Applied in:
                </span>
                {skill.projects.map((proj) => (
                  <span
                    key={proj}
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      isDark
                        ? "bg-[#131d33] text-slate-300 border border-slate-800"
                        : "bg-slate-50 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {proj}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
