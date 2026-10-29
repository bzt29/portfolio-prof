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

interface WhiteViewProps {
  onThemeChange?: (theme: "dark" | "light") => void;
  activeSection?: SectionId;
  onSelectSection?: (id: SectionId) => void;
}

export default function WhiteView({
  onThemeChange,
  activeSection: controlledSection,
  onSelectSection: controlledOnSelectSection,
}: WhiteViewProps = {}) {
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
    <div className="bg-[#f8fafc] text-slate-800 antialiased flex flex-col min-h-screen selection:bg-brand-100 selection:text-brand-700 w-full">
      {/* Mobile Sticky Top Header (< 768px) */}
      <header className="md:hidden sticky top-0 z-40 w-full border-b backdrop-blur-md px-3.5 py-2.5 flex items-center justify-between transition-colors bg-[#f8fafc]/95 border-slate-200 text-slate-800">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-300 flex-shrink-0">
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
            <p className="text-[10px] font-mono text-slate-500 truncate">
              {PERSONAL_INFO.roleSubtitle}
            </p>
          </div>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex items-center flex-shrink-0">
          <button
            type="button"
            onClick={() => onThemeChange?.("dark")}
            aria-label="Switch to Dark mode"
            title="Switch to Dark View"
            className="w-8 h-8 rounded-lg flex items-center justify-center border text-xs bg-white border-slate-200 text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Horizontal Quick Navigation Strip (< 768px) */}
      <div className="md:hidden w-full border-b overflow-x-auto scrollbar-none px-3 py-2 flex items-center gap-1.5 text-xs font-mono bg-white/95 border-slate-200">
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
                  ? "bg-brand-50 text-brand-700 border border-brand-300 font-semibold shadow-sm"
                  : "bg-slate-50 text-slate-600 border border-slate-200 hover:text-slate-900"
              }`}
            >
              {sec.shortLabel}
            </button>
          );
        })}
        <button
          onClick={scrollToContact}
          className="px-2.5 py-1 rounded-full whitespace-nowrap text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold"
        >
          Contact
        </button>
      </div>

      {/* Main Layout Container - Responsive 3-Column on Desktop, 2-Column on Tablet, Fluid 1-Column on Phone */}
      <div className="flex-1 w-full flex flex-col md:flex-row min-h-screen">
        {/* Left Navigation Sidebar (Hidden on mobile <768px, docked on tablet 768px+, full on desktop 1024px+) */}
        <ProfileSidebar
          theme="light"
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
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-xs gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-mono text-[11px]">Portfolio</span>
                  <span className="text-slate-300">/</span>
                  <span className="font-semibold text-slate-800">
                    {NAV_SECTIONS[currentIndex].label}
                  </span>
                </div>
              </div>

              {/* Modular Active Section */}
              <div className="transition-opacity duration-200">
                {activeSection === "hero" && <HeroSection theme="light" />}
                {activeSection === "about" && <AboutSection theme="light" />}
                {activeSection === "competencies" && <DisciplinesSection theme="light" />}
                {activeSection === "projects" && <ProjectsSection theme="light" />}
                {activeSection === "topology" && <TechStackSection theme="light" />}
                {activeSection === "certificates" && <JourneySection theme="light" />}
              </div>

              {/* Section Bottom Pagination Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200 text-xs font-mono">
                {prevItem ? (
                  <button
                    onClick={() => setActiveSection(prevItem.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white border-slate-200 hover:bg-slate-50 text-slate-700 transition-all shadow-sm"
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
                    className="ml-auto flex items-center gap-2 px-3.5 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-all shadow-sm"
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
              <div className="border-t border-slate-200 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h2 className="text-base font-bold flex items-center gap-2 font-mono text-slate-900">
                      <span className="text-brand-600">06.</span> Direct Contact &amp; Inquiry
                    </h2>
                    <p className="text-xs text-slate-600">
                      Kirim pesan email langsung atau hubungi via WhatsApp untuk kolaborasi.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border bg-emerald-50 text-emerald-700 border-emerald-200 font-medium">
                    Open for Work
                  </span>
                </div>

                {/* Contact Form */}
                <ContactForm theme="light" variant="standard" />

                {/* WhatsApp & CV Quick Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={PERSONAL_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold shadow-sm transition-all bg-emerald-600 hover:bg-emerald-500 text-white"
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
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold shadow-sm border transition-all bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                  >
                    <svg
                      className="w-4 h-4 text-emerald-600"
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
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono text-slate-600 border-t border-slate-200">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:underline hover:text-brand-600 flex items-center gap-1.5"
                  >
                    <span>✉</span> {PERSONAL_INFO.email}
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-brand-600 flex items-center gap-1.5"
                  >
                    <span>🔗</span> {PERSONAL_INFO.linkedinLabel}
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-brand-600 flex items-center gap-1.5"
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
            <DesktopFooter theme="light" onBackToTop={() => setActiveSection("hero")} />
          </main>
        </div>

        {/* Right Rail Sidebar (Desktop only >= 1024px) */}
        <RightRail theme="light" />
      </div>
    </div>
  );
}
