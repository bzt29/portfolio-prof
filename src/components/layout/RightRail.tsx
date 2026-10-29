"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ContactForm } from "@/components/contact";

interface RightRailProps {
  theme: "dark" | "light";
}

export default function RightRail({ theme }: RightRailProps) {
  const isDark = theme === "dark";

  return (
    <aside
      className={`hidden lg:flex lg:flex-col justify-start w-[320px] xl:w-[350px] 2xl:w-[380px] shrink-0 border-l ${
        isDark
          ? "bg-[#090d16]/95 border-slate-800/80"
          : "bg-[#f8fafc]/95 border-slate-200"
      } lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden p-3 xl:p-4 space-y-2.5`}
      data-purpose="toc-and-contact"
    >
      {/* DIRECT CONTACT */}
      <section className="space-y-2 xl:space-y-2.5 flex flex-col justify-between" id="contact">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-0.5">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                isDark ? "bg-cyan-400" : "bg-emerald-500"
              }`}
            ></span>
            <h2
              className={`text-xs font-bold uppercase tracking-wider font-mono ${
                isDark ? "text-slate-200" : "text-slate-900"
              }`}
            >
              Direct Contact
            </h2>
          </div>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded border font-medium ${
              isDark
                ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                : "bg-emerald-50 text-emerald-700 border-emerald-200"
            }`}
          >
            Available for Work
          </span>
        </div>

        {/* Email Contact Form */}
        <ContactForm theme={theme} variant="sidebar" />

        {/* Consultation Card */}
        <div
          className={`rounded-xl border p-2.5 xl:p-3 shadow-xs space-y-2 xl:space-y-2.5 ${
            isDark
              ? "bg-[#0f172a] border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="space-y-0.5">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider block font-mono ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Work &amp; Project Inquiry
            </span>
            <p
              className={`text-[11px] leading-snug line-clamp-2 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {PERSONAL_INFO.workInquiryText}
            </p>
          </div>

          {/* WhatsApp Chat CTA Button (Card Style) */}
          <a
            className={`w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg border transition-colors group ${
              isDark
                ? "bg-[#090d16]/50 border-slate-800/80 hover:bg-slate-800/60 text-slate-300"
                : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100 text-slate-700"
            }`}
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border transition-colors ${
                  isDark
                    ? "bg-slate-800 border-slate-700/60 text-emerald-400 group-hover:text-emerald-300"
                    : "bg-white border-slate-200 text-emerald-600 group-hover:text-emerald-700"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1 font-mono text-[11px]">
                <span className="text-[9px] text-slate-400 block leading-tight">
                  WhatsApp
                </span>
                <span className="truncate block font-medium">
                  {PERSONAL_INFO.whatsapp}
                </span>
              </div>
            </div>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 transition-colors ${
                isDark
                  ? "bg-slate-800 text-emerald-400 border-slate-700 group-hover:border-emerald-500/40"
                  : "bg-emerald-50 text-emerald-700 border-emerald-200"
              }`}
            >
              Chat ↗
            </span>
          </a>

          {/* Clean Channels List (1 Baris per Item) */}
          <div
            className={`space-y-1.5 pt-2 border-t ${
              isDark ? "border-slate-800/80" : "border-slate-100"
            }`}
          >
            {/* Email */}
            <a
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg border transition-colors group ${
                isDark
                  ? "bg-[#090d16]/50 border-slate-800/80 hover:bg-slate-800/60 text-slate-300"
                  : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100 text-slate-700"
              }`}
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border transition-colors ${
                  isDark
                    ? "bg-slate-800 border-slate-700/60 text-slate-400 group-hover:text-cyan-300"
                    : "bg-white border-slate-200 text-slate-500 group-hover:text-slate-900"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1 font-mono text-[11px]">
                <span className="text-[9px] text-slate-400 block leading-tight">
                  Email
                </span>
                <span className="truncate block font-medium">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg border transition-colors group ${
                isDark
                  ? "bg-[#090d16]/50 border-slate-800/80 hover:bg-slate-800/60 text-slate-300"
                  : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100 text-slate-700"
              }`}
              href={PERSONAL_INFO.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border transition-colors ${
                  isDark
                    ? "bg-slate-800 border-slate-700/60 text-slate-400 group-hover:text-cyan-300"
                    : "bg-white border-slate-200 text-slate-500 group-hover:text-slate-900"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1 font-mono text-[11px]">
                <span className="text-[9px] text-slate-400 block leading-tight">
                  GitHub
                </span>
                <span className="truncate block font-medium">
                  {PERSONAL_INFO.githubLabel}
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg border transition-colors group ${
                isDark
                  ? "bg-[#090d16]/50 border-slate-800/80 hover:bg-slate-800/60 text-slate-300"
                  : "bg-slate-50/80 border-slate-200/80 hover:bg-slate-100 text-slate-700"
              }`}
              href={PERSONAL_INFO.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border transition-colors ${
                  isDark
                    ? "bg-slate-800 border-slate-700/60 text-slate-400 group-hover:text-cyan-300"
                    : "bg-white border-slate-200 text-slate-500 group-hover:text-slate-900"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1 font-mono text-[11px]">
                <span className="text-[9px] text-slate-400 block leading-tight">
                  LinkedIn
                </span>
                <span className="truncate block font-medium">
                  {PERSONAL_INFO.linkedinLabel}
                </span>
              </div>
            </a>

            {/* Location */}
            <div
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg border ${
                isDark
                  ? "bg-[#090d16]/50 border-slate-800/80 text-slate-400"
                  : "bg-slate-50/80 border-slate-200/80 text-slate-600"
              }`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center shrink-0 border ${
                  isDark
                    ? "bg-slate-800 border-slate-700/60 text-slate-500"
                    : "bg-white border-slate-200 text-slate-400"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1 font-mono text-[11px]">
                <span className="text-[9px] text-slate-400 block leading-tight">
                  Location
                </span>
                <span className="truncate block font-medium">
                  {PERSONAL_INFO.shortLocation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
