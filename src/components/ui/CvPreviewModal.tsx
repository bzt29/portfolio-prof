"use client";

import React, { useEffect, useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: "dark" | "light";
}

export function CvPreviewModal({
  isOpen,
  onClose,
  theme = "dark",
}: CvPreviewModalProps) {
  const isDark = theme === "dark";
  const [copied, setCopied] = useState(false);

  // Close on Escape key & lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    const fullUrl = window.location.origin + PERSONAL_INFO.cvUrl;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-preview-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        className={`relative z-10 w-full max-w-5xl h-[92vh] sm:h-[88vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden transition-all ${
          isDark
            ? "bg-[#0b101d] border-slate-800 text-slate-100 shadow-cyan-950/30"
            : "bg-white border-slate-200 text-slate-900 shadow-slate-300/50"
        }`}
      >
        {/* Top Header Bar */}
        <div
          className={`flex items-center justify-between px-3 sm:px-5 py-3 border-b shrink-0 gap-2 ${
            isDark
              ? "bg-[#080d18] border-slate-800/90"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          {/* Title & Metadata */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                isDark
                  ? "bg-rose-950/60 border-rose-500/30 text-rose-400"
                  : "bg-rose-50 border-rose-200 text-rose-600"
              }`}
            >
              <svg
                className="w-5 h-5"
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
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  id="cv-preview-title"
                  className="font-bold font-mono text-xs sm:text-sm truncate leading-tight"
                >
                  Curriculum Vitae Preview
                </h3>
                <span
                  className={`hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border uppercase tracking-wider font-semibold ${
                    isDark
                      ? "bg-emerald-950/70 text-emerald-300 border-emerald-500/30"
                      : "bg-emerald-50 text-emerald-700 border-emerald-200"
                  }`}
                >
                  ATS Verified
                </span>
              </div>
              <p
                className={`text-[11px] font-mono truncate mt-0.5 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {PERSONAL_INFO.name} • {PERSONAL_INFO.cvFileName}
              </p>
            </div>
          </div>

          {/* Action Buttons: Open Tab, Download, Close */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Open in New Tab Button */}
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Buka dokumen di tab baru"
              className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                isDark
                  ? "bg-[#0d1424] border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                  : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>Tab Baru</span>
            </a>

            {/* Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyLink}
              title="Salin tautan CV"
              className={`hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                isDark
                  ? "bg-[#0d1424] border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                  : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>{copied ? "Tersalin!" : "Salin Link"}</span>
            </button>

            {/* Primary Download Button */}
            <a
              href={PERSONAL_INFO.cvUrl}
              download={PERSONAL_INFO.cvFileName}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-sm transition-all ${
                isDark
                  ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-950/40"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-700/20"
              }`}
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download (.pdf)</span>
            </a>

            {/* Close Modal Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup preview"
              className={`p-1.5 rounded-lg text-xs transition-colors ml-1 ${
                isDark
                  ? "text-slate-400 hover:text-white hover:bg-slate-800"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-200"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF Viewer with Fallback */}
        <div className="flex-1 w-full relative bg-slate-900/60 overflow-hidden flex flex-col">
          <iframe
            src={`${PERSONAL_INFO.cvUrl}#toolbar=1&navpanes=0`}
            title="CV ATS Syed M Hafiz Firdaus"
            className="w-full h-full flex-1 border-0 bg-slate-950/40"
          />

          {/* Polite Fallback Info Strip at bottom if browser has iframe PDF restrictions */}
          <div
            className={`px-3 py-1.5 border-t text-[11px] font-mono flex items-center justify-between gap-2 shrink-0 ${
              isDark
                ? "bg-[#070b14] border-slate-800/80 text-slate-400"
                : "bg-slate-100 border-slate-200 text-slate-600"
            }`}
          >
            <span className="truncate">
              Tips: Gunakan tombol zoom bawaan PDF viewer di atas untuk memperbesar.
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline font-medium ${
                  isDark ? "text-cyan-400" : "text-brand-600"
                }`}
              >
                Buka tab baru ↗
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div
          className={`flex items-center justify-between px-3 sm:px-5 py-2.5 border-t shrink-0 ${
            isDark
              ? "bg-[#080d18] border-slate-800/90 text-slate-400"
              : "bg-slate-50 border-slate-200 text-slate-600"
          }`}
        >
          <div className="text-[11px] font-mono hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>Format: ATS-Friendly Standard PDF • Lulusan S1 Sistem Informasi</span>
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Tutup
            </button>

            <a
              href={PERSONAL_INFO.cvUrl}
              download={PERSONAL_INFO.cvFileName}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-mono font-bold shadow-sm transition-all sm:hidden ${
                isDark
                  ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white"
              }`}
            >
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download CV (.pdf)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

