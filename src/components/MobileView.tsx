"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  MobileOverviewSection,
  MobileDisciplinesSection,
  MobileProjectsSection,
  MobileCodeSpecSection,
  MobileSkillsSection,
  MobileJourneySection,
  MobileContactSection,
} from "@/components/sections";

export type MobileSectionId =
  | "overview"
  | "disciplines"
  | "projects"
  | "topology"
  | "skills"
  | "certifications"
  | "contact";

interface SectionItem {
  id: MobileSectionId;
  label: string;
  shortLabel: string;
  icon: string;
  num: string;
}

const SECTIONS: SectionItem[] = [
  { id: "overview", label: "Overview", shortLabel: "Overview", icon: "dashboard", num: "00" },
  { id: "disciplines", label: "Core Disciplines", shortLabel: "Disciplines", icon: "dns", num: "01" },
  { id: "projects", label: "Featured Projects", shortLabel: "Projects", icon: "code_blocks", num: "02" },
  { id: "topology", label: "Architecture Spec", shortLabel: "Code Spec", icon: "hub", num: "03" },
  { id: "skills", label: "Tech Stack", shortLabel: "Skills", icon: "terminal", num: "04" },
  { id: "certifications", label: "Education & Journey", shortLabel: "Journey", icon: "school", num: "05" },
  { id: "contact", label: "Direct Contact", shortLabel: "Contact", icon: "mail", num: "06" },
];

export default function MobileView() {
  const [activeSection, setActiveSection] = useState<MobileSectionId>("overview");
  const [downloading, setDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    const link = document.createElement("a");
    link.href = PERSONAL_INFO.cvUrl;
    link.download = PERSONAL_INFO.cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setDownloading(false);
      setDownloadDone(true);
      setTimeout(() => setDownloadDone(false), 2500);
    }, 800);
  };

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container w-full relative pb-20">
      {/* Top Header */}
      <header className="sticky top-0 w-full z-40 bg-surface-container-lowest/90 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)] border-b border-surface-container-high/50">
        <div className="h-16 px-gutter-mobile flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline truncate">
                {PERSONAL_INFO.shortName} {" // "} {PERSONAL_INFO.roleSubtitle}
              </span>
              <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface truncate">
                {SECTIONS[currentIndex].label}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <div className="inline-flex items-center gap-space-xs px-2 py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.6)] animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-tertiary font-mono">AVAILABLE</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/40 shadow-md">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.shortName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Horizontal Nav Chips */}
      <nav
        aria-label="Portfolio Sections"
        className="sticky top-16 z-30 flex items-center gap-2 overflow-x-auto py-2.5 px-gutter-mobile bg-surface-container-lowest/80 backdrop-blur-md border-b border-surface-container-high/40 no-scrollbar"
      >
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all shrink-0 ${
                isActive
                  ? "bg-primary text-on-primary font-semibold shadow-md"
                  : "bg-surface-container-low text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {sec.shortLabel}
            </button>
          );
        })}
      </nav>

      {/* Main Content Area (Only Active Section Renders) */}
      <main className="flex flex-col relative w-full pt-4 px-gutter-mobile bg-surface flex-1">
        <div className="flex flex-col w-full gap-space-lg">
          {/* Section Breadcrumb Indicator */}
          <div className="flex items-center justify-between text-xs font-mono text-outline border-b border-surface-container-high pb-2">
            <span>SECTION // {SECTIONS[currentIndex].num}</span>
            <span className="text-primary font-semibold">{SECTIONS[currentIndex].label}</span>
          </div>

          {/* Active Modular Section */}
          <div className="w-full">
            {activeSection === "overview" && (
              <MobileOverviewSection
                onDownloadCv={handleDownloadCv}
                downloading={downloading}
                downloadDone={downloadDone}
              />
            )}
            {activeSection === "disciplines" && <MobileDisciplinesSection />}
            {activeSection === "projects" && <MobileProjectsSection />}
            {activeSection === "topology" && <MobileCodeSpecSection />}
            {activeSection === "skills" && <MobileSkillsSection />}
            {activeSection === "certifications" && <MobileJourneySection />}
            {activeSection === "contact" && (
              <MobileContactSection onDownloadCv={handleDownloadCv} />
            )}
          </div>

          {/* Prev / Next Section Controls */}
          <div className="flex items-center justify-between pt-6 pb-8 border-t border-surface-container-high font-mono text-xs">
            {prevSection ? (
              <button
                onClick={() => setActiveSection(prevSection.id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors"
              >
                <span>←</span>
                <span>{prevSection.shortLabel}</span>
              </button>
            ) : (
              <div></div>
            )}

            {nextSection && (
              <button
                onClick={() => setActiveSection(nextSection.id)}
                className="ml-auto flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-on-primary font-semibold shadow transition-transform active:scale-95"
              >
                <span>{nextSection.shortLabel}</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation Dock */}
      <nav className="fixed bottom-0 w-full z-40 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl border-t border-surface-container-high shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        <div className="flex justify-around items-center h-16 px-gutter-mobile">
          {[
            { id: "overview", label: "Overview", icon: "dashboard" },
            { id: "disciplines", label: "Disciplines", icon: "dns" },
            { id: "projects", label: "Projects", icon: "code_blocks" },
            { id: "topology", label: "Spec", icon: "hub" },
            { id: "contact", label: "Contact", icon: "mail" },
          ].map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as MobileSectionId)}
                className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors gap-0.5 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
                <span className="font-label-sm text-label-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
