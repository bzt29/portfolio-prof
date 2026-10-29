"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  PERSONAL_INFO,
  NAV_SECTIONS,
  NavSectionItem,
} from "@/data/portfolioData";

interface ProfileSidebarProps {
  theme: "dark" | "light";
  activeSection: string;
  onSelectSection: (id: NavSectionItem["id"]) => void;
  onScrollToContact: () => void;
  onThemeChange?: (theme: "dark" | "light") => void;
  className?: string;
}

export default function ProfileSidebar({
  theme,
  activeSection,
  onSelectSection,
  onScrollToContact,
  onThemeChange,
  className,
}: ProfileSidebarProps) {
  const isDark = theme === "dark";
  const router = useRouter();

  const handleSelectTheme = (newTheme: "dark" | "light") => {
    if (onThemeChange) {
      onThemeChange(newTheme);
    } else {
      if (newTheme === "dark") {
        router.push("/dark");
      } else {
        router.push("/white");
      }
    }
  };

  const handleNavClick = (id: NavSectionItem["id"]) => {
    onSelectSection(id);
  };

  const handleContactClick = () => {
    onScrollToContact();
  };

  const defaultClasses =
    "hidden md:block md:w-[245px] lg:w-[260px] xl:w-[275px] shrink-0 border-r md:sticky md:top-0 md:h-screen md:overflow-y-auto no-scrollbar pt-4 lg:pt-5 pb-8 px-3 lg:px-4 backdrop-blur-sm relative";

  return (
    <aside
      className={`border-r ${
        isDark
          ? "bg-[#090d16]/95 border-slate-800/80"
          : "bg-[#f8fafc]/95 border-slate-200"
      } ${className || defaultClasses}`}
    >
      {/* Top Utility Header */}
      <div className="flex justify-end mb-4 px-1">
        <button
          type="button"
          onClick={() => handleSelectTheme(isDark ? "light" : "dark")}
          aria-label={
            isDark ? "Switch to White (Light) mode" : "Switch to Dark mode"
          }
          title={
            isDark
              ? "Switch to White View (Light Theme)"
              : "Switch to Dark View (Dark Theme)"
          }
          className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-sm ${
            isDark
              ? "bg-[#0d1424] border-slate-800 text-amber-400 hover:text-amber-300 hover:bg-slate-800 hover:border-slate-700"
              : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300"
          }`}
        >
          {isDark ? (
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 hover:-rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center justify-center text-center px-1">
        <div className="relative mb-3 inline-block mx-auto">
          <div
            className={`w-20 h-20 lg:w-28 lg:h-28 rounded-full shadow-md overflow-hidden transition-all border ${
              isDark
                ? "border-slate-700/80"
                : "border-slate-300"
            }`}
          >
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span
            className={`absolute bottom-1 right-1.5 w-3.5 h-3.5 bg-emerald-500 border-2 rounded-full ${
              isDark ? "border-slate-900" : "border-white"
            }`}
          ></span>
        </div>
        <h1
          className={`text-base lg:text-xl font-bold tracking-tight text-center leading-snug ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-center gap-1.5 flex-wrap font-medium">
          <span className="whitespace-nowrap">{PERSONAL_INFO.roleTitle}</span>
          <span className={isDark ? "text-slate-600" : "text-slate-400"}>
            /
          </span>
          <span className="whitespace-nowrap">
            {PERSONAL_INFO.roleSubtitle}
          </span>
        </p>
        <div
          className={`mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium mx-auto whitespace-nowrap max-w-full border ${
            isDark
              ? "bg-slate-900 border-slate-800 text-slate-300"
              : "bg-emerald-50 border-emerald-200 text-emerald-800"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
          <span>{PERSONAL_INFO.statusBadge}</span>
        </div>
      </div>

      <div
        className={`my-5 border-b mx-1 ${
          isDark ? "border-slate-800/80" : "border-slate-200"
        }`}
      ></div>

      {/* Navigation Menu */}
      <nav aria-label="Portfolio Menu" className="space-y-4 px-1">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block mb-2 px-1">
            Sections
          </span>
          <ul className="space-y-1.5 text-sm">
            {NAV_SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all ${
                      isActive
                        ? isDark
                          ? "bg-slate-800/90 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-950/40 font-medium"
                          : "bg-brand-50 text-brand-700 border border-brand-200/90 shadow-sm font-semibold"
                        : isDark
                          ? "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent font-normal"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent font-normal"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${
                        isActive
                          ? isDark
                            ? "text-cyan-400"
                            : "text-brand-600"
                          : isDark
                            ? "text-slate-500"
                            : "text-slate-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.iconPath}
                      />
                    </svg>
                    <span className="flex-1 font-mono text-[11.5px] lg:text-xs truncate">
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"></span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Resume & Credentials Cardlet */}
      <div className="mt-6 px-1">
        <div
          className={`p-3.5 rounded-xl text-xs space-y-2.5 border shadow-xs ${
            isDark
              ? "bg-[#0f172a] border-slate-800 text-slate-300"
              : "bg-white border-slate-200 text-slate-700 shadow-xs"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`inline-flex items-center gap-1.5 font-mono font-semibold text-[10.5px] ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              <svg
                className="w-3.5 h-3.5 text-emerald-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume &amp; Credentials
            </span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-medium ${
                isDark
                  ? "bg-slate-800 text-slate-400 border-slate-700"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              PDF
            </span>
          </div>

          <div className="space-y-0.5">
            <p
              className={`font-bold font-sans text-sm ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {PERSONAL_INFO.name}
            </p>
            <p
              className={`text-[11px] font-mono ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {PERSONAL_INFO.fullRole}
            </p>
          </div>

          <a
            href={PERSONAL_INFO.cvUrl}
            download={PERSONAL_INFO.cvFileName}
            className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-mono text-xs font-semibold border transition-all ${
              isDark
                ? "bg-slate-800/80 border-slate-700 text-cyan-300 hover:bg-slate-800 hover:border-cyan-500/50"
                : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300"
            }`}
          >
            <svg
              className="w-3.5 h-3.5 text-emerald-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>Download CV (.pdf)</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
