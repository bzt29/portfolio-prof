"use client";

import React, { useState } from "react";
import {
  NAV_SECTIONS,
  NavSectionItem,
  PERSONAL_INFO,
} from "@/data/portfolioData";
import {
  ProfileSidebar,
  RightRail,
  DesktopFooter,
} from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  DisciplinesSection,
  ProjectsSection,
  TechStackSection,
  JourneySection,
} from "@/components/sections";
import { ContactForm } from "@/components/contact";

export type SectionId = NavSectionItem["id"];

interface DarkViewProps {
  onThemeChange?: (theme: "dark" | "light") => void;
  activeSection?: SectionId;
  onSelectSection?: (id: SectionId) => void;
}

export default function DarkView({
  onThemeChange,
  activeSection: controlledSection,
  onSelectSection: controlledOnSelectSection,
}: DarkViewProps = {}) {
  const [internalSection, setInternalSection] = useState<SectionId>("hero");
  const activeSection = controlledSection ?? internalSection;
  const setActiveSection = controlledOnSelectSection ?? setInternalSection;

  const scrollToContact = () => {
    const el =
      (typeof window !== "undefined" && window.innerWidth < 1024
        ? document.getElementById("contact-mobile")
        : document.getElementById("contact")) ||
      document.getElementById("contact") ||
      document.getElementById("contact-mobile");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const currentIndex = NAV_SECTIONS.findIndex((item) => item.id === activeSection);
  const prevItem = currentIndex > 0 ? NAV_SECTIONS[currentIndex - 1] : null;
  const nextItem =
    currentIndex < NAV_SECTIONS.length - 1 ? NAV_SECTIONS[currentIndex + 1] : null;

  return (
    <div className="bg-[#090d16] text-slate-300 antialiased flex flex-col min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300 w-full">
      {/* Mobile Sticky Top Header (< 768px) */}
      <header className="md:hidden sticky top-0 z-40 w-full border-b backdrop-blur-md px-3.5 py-2.5 flex items-center justify-between transition-colors bg-[#090d16]/95 border-slate-800/90 text-slate-200">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700 flex-shrink-0">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs truncate">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 truncate">
              {PERSONAL_INFO.roleSubtitle}
            </p>
          </div>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex items-center flex-shrink-0">
          <button
            type="button"
            onClick={() => onThemeChange?.("light")}
            aria-label="Switch to White (Light) mode"
            title="Switch to White View"
            className="w-8 h-8 rounded-lg flex items-center justify-center border text-xs bg-[#0d1424] border-slate-800 text-amber-400 hover:text-amber-300 transition-colors"
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Horizontal Quick Navigation Strip (< 768px) */}
      <div className="md:hidden w-full border-b overflow-x-auto scrollbar-none px-3 py-2 flex items-center gap-1.5 text-xs font-mono bg-[#060a12]/95 border-slate-800/80">
        {NAV_SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => {
                setActiveSection(sec.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all text-[11px] ${
                isActive
                  ? "bg-cyan-950 text-cyan-300 border border-cyan-700 font-semibold shadow-sm"
                  : "bg-[#0d1424] text-slate-400 border border-slate-800 hover:text-slate-200"
              }`}
            >
              {sec.shortLabel}
            </button>
          );
        })}
        <button
          onClick={scrollToContact}
          className="px-2.5 py-1 rounded-full whitespace-nowrap text-[11px] bg-emerald-950/60 text-emerald-300 border border-emerald-800/70 font-semibold"
        >
          Contact
        </button>
      </div>

      {/* Main Layout Container - Responsive 3-Column on Desktop, 2-Column on Tablet, Fluid 1-Column on Phone */}
      <div className="flex-1 w-full flex flex-col md:flex-row min-h-screen">
        {/* Left Navigation Sidebar (Hidden on mobile <768px, docked on tablet 768px+, full on desktop 1024px+) */}
        <ProfileSidebar
          theme="dark"
          activeSection={activeSection}
          onSelectSection={setActiveSection}
          onScrollToContact={scrollToContact}
          onThemeChange={onThemeChange}
        />

        {/* Center Main Content Area */}
        <div className="flex-1 min-w-0 flex flex-col items-center py-4 sm:py-6 px-3.5 sm:px-5 md:px-5 lg:px-8 min-h-screen">
          <main
            className="w-full max-w-3xl xl:max-w-4xl flex-1 flex flex-col justify-between space-y-6"
            data-purpose="main-content"
          >
            <div className="space-y-6 flex-1">
              {/* Section Header Indicator */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-mono text-[11px]">Portfolio</span>
                  <span className="text-slate-700">/</span>
                  <span className="font-semibold text-slate-200">
                    {NAV_SECTIONS[currentIndex].label}
                  </span>
                </div>
              </div>

              {/* Modular Active Section */}
              <div className="transition-opacity duration-200">
                {activeSection === "hero" && <HeroSection theme="dark" />}
                {activeSection === "about" && <AboutSection theme="dark" />}
                {activeSection === "competencies" && <DisciplinesSection theme="dark" />}
                {activeSection === "projects" && <ProjectsSection theme="dark" />}
                {activeSection === "topology" && <TechStackSection theme="dark" />}
                {activeSection === "certificates" && <JourneySection theme="dark" />}
              </div>

              {/* Section Bottom Pagination Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/80 text-xs font-mono">
                {prevItem ? (
                  <button
                    onClick={() => setActiveSection(prevItem.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-[#0d1424] border-slate-800 hover:bg-slate-800 text-slate-200 transition-all shadow-sm"
                  >
                    <span>←</span>
                    <span className="truncate">Prev: {prevItem.shortLabel}</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {nextItem && (
                  <button
                    onClick={() => setActiveSection(nextItem.id)}
                    className="ml-auto flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-sm"
                  >
                    <span className="truncate">Next: {nextItem.shortLabel}</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            </div>

            {/* Mobile & Tablet Direct Contact Section (visible only when RightRail is hidden on screens < 1024px) */}
            <section
              id="contact-mobile"
              className="block lg:hidden w-full pt-8 pb-4 space-y-4"
            >
              <div className="border-t border-slate-800/80 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h2 className="text-base font-bold flex items-center gap-2 font-mono text-white">
                      <span className="text-cyan-400">06.</span> Direct Contact &amp; Inquiry
                    </h2>
                    <p className="text-xs text-slate-400">
                      Kirim pesan email langsung atau hubungi via WhatsApp untuk kolaborasi.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border bg-emerald-950/60 text-emerald-300 border-emerald-800/60">
                    Open for Work
                  </span>
                </div>

                {/* Contact Form */}
                <ContactForm theme="dark" variant="standard" />

                {/* WhatsApp & CV Quick Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={PERSONAL_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold shadow-sm transition-all bg-cyan-400 hover:bg-cyan-300 text-slate-950"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Chat on WhatsApp ({PERSONAL_INFO.whatsapp})</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.cvUrl}
                    download={PERSONAL_INFO.cvFileName}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold shadow-sm border transition-all bg-[#0d1424] border-slate-800 hover:bg-slate-800 text-slate-200"
                  >
                    <svg
                      className="w-4 h-4 text-emerald-400"
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

                {/* Channels List */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/60">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:underline hover:text-cyan-300 flex items-center gap-1.5"
                  >
                    <span>✉</span> {PERSONAL_INFO.email}
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-cyan-300 flex items-center gap-1.5"
                  >
                    <span>🔗</span> {PERSONAL_INFO.linkedinLabel}
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-cyan-300 flex items-center gap-1.5"
                  >
                    <span>💻</span> {PERSONAL_INFO.githubLabel}
                  </a>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span>📍</span> {PERSONAL_INFO.shortLocation}
                  </span>
                </div>
              </div>
            </section>

            {/* Desktop Footer (Pinned at bottom) */}
            <DesktopFooter theme="dark" onBackToTop={() => setActiveSection("hero")} />
          </main>
        </div>

        {/* Right Rail Sidebar (Desktop only >= 1024px) */}
        <RightRail theme="dark" />
      </div>
    </div>
  );
}
