"use client";

import React from "react";
import {
  PERSONAL_INFO,
  METRICS,
  INTERNSHIP_HIGHLIGHT,
  NETWORK_HIGHLIGHT,
  DISCIPLINES,
  PROJECTS,
  ARCHITECTURE_CODE,
  TECH_SKILLS,
  EDUCATION_AND_JOURNEY,
} from "@/data/portfolioData";
import { ContactForm } from "@/components/contact";

export function MobileOverviewSection({
  onDownloadCv,
  downloading,
  downloadDone,
}: {
  onDownloadCv: (e: React.MouseEvent) => void;
  downloading?: boolean;
  downloadDone?: boolean;
}) {
  return (
    <div className="space-y-6">
      <section className="flex flex-col items-center text-center pt-space-xs" id="overview">
        <div className="relative mb-space-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-2 border-primary/50">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.shortName}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-tertiary shadow-[0_0_10px_rgba(78,222,163,0.8)]"></span>
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm mb-space-xs shadow-sm">
          <span className="material-symbols-outlined text-[14px]">check_circle</span>
          {PERSONAL_INFO.statusBadge}
        </div>

        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tracking-tight">
          {PERSONAL_INFO.name}
        </h1>
        <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-1 px-4">
          {PERSONAL_INFO.roleTitle} <span className="text-primary mx-1">|</span> {PERSONAL_INFO.roleSubtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col w-full gap-space-sm mt-space-md">
          <a
            className="flex items-center justify-center gap-space-xs h-12 w-full rounded-lg bg-primary text-on-primary font-body-md text-body-md font-semibold shadow-md active:translate-y-0.5 transition-transform"
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            Chat on WhatsApp ({PERSONAL_INFO.whatsapp})
          </a>
          <button
            className="flex items-center justify-center gap-space-xs h-12 w-full rounded-lg bg-surface-container-high text-on-surface font-body-md text-body-md font-medium hover:bg-surface-bright active:translate-y-0.5 transition-colors cursor-pointer"
            onClick={onDownloadCv}
          >
            <span className="material-symbols-outlined text-[20px] text-primary">visibility</span>
            <span>Preview CV (.pdf)</span>
          </button>
        </div>
      </section>

      {/* Headline & Metrics */}
      <section className="flex flex-col gap-space-sm">
        <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">
            {PERSONAL_INFO.briefIntro}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            {PERSONAL_INFO.detailedIntro}
          </p>
        </div>

        {/* 2x2 Metrics */}
        <div className="grid grid-cols-2 gap-space-xs">
          {METRICS.map((metric, idx) => {
            const colorClass =
              metric.accent === "cyan"
                ? "text-primary"
                : metric.accent === "emerald"
                ? "text-tertiary"
                : "text-on-surface";

            return (
              <div key={idx} className="flex flex-col p-space-md rounded-lg bg-surface-container shadow-sm">
                <span className={`font-headline-md text-headline-md font-bold ${colorClass}`}>
                  {metric.value}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-semibold">
                  {metric.label}
                </span>
                {metric.sublabel && (
                  <span className="text-[10px] text-outline font-mono mt-0.5 truncate">
                    {metric.sublabel}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Internship Highlight Card */}
        {/* Experience Highlights */}
        <div className="space-y-3 mt-2">
          {/* PT IOSYS PLANET HOTSPOT Card */}
          <div className="p-space-md rounded-xl bg-surface-container border border-surface-container-high space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-tertiary/20 text-tertiary self-start">
                {NETWORK_HIGHLIGHT.badge}
              </span>
              <span className="text-[11px] text-outline font-mono">
                {NETWORK_HIGHLIGHT.location}
              </span>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-semibold text-on-surface">{NETWORK_HIGHLIGHT.company}</h3>
              <p className="text-[11px] text-primary font-mono">{NETWORK_HIGHLIGHT.companyType}</p>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {NETWORK_HIGHLIGHT.description}
            </p>
          </div>

          {/* PT MJU Card */}
          <div className="p-space-md rounded-xl bg-surface-container border border-surface-container-high space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-primary/20 text-primary self-start">
                {INTERNSHIP_HIGHLIGHT.badge}
              </span>
              <span className="text-[11px] text-outline font-mono">
                {INTERNSHIP_HIGHLIGHT.location}
              </span>
            </div>
            <div className="space-y-0.5">
              <h3 className="font-semibold text-on-surface">{INTERNSHIP_HIGHLIGHT.company}</h3>
              <p className="text-[11px] text-primary font-mono">{INTERNSHIP_HIGHLIGHT.companyType}</p>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {INTERNSHIP_HIGHLIGHT.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function MobileDisciplinesSection() {
  return (
    <section className="space-y-4" id="disciplines">
      {DISCIPLINES.map((d) => (
        <div
          key={d.id}
          className="p-space-md rounded-xl bg-surface-container-low shadow-sm space-y-3"
        >
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-[22px]">
              {d.iconType === "web" ? "code" : d.iconType === "network" ? "lan" : "smartphone"}
            </span>
            <h3 className="font-semibold text-on-surface">{d.title}</h3>
          </div>
          <ul className="text-xs text-on-surface-variant space-y-2 list-disc list-inside">
            {d.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function MobileProjectCard({
  project,
  idx,
}: {
  project: (typeof PROJECTS)[0];
  idx: number;
}) {
  const [viewMode, setViewMode] = React.useState<"preview" | "tree">("preview");

  return (
    <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-primary font-semibold">
          0{idx + 1} {" // "} {project.category}
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary font-mono">
          {project.badge}
        </span>
      </div>

      <h3 className="font-bold text-on-surface text-base">{project.title}</h3>

      {/* Mode switch */}
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="inline-flex p-0.5 rounded-lg bg-surface-container border border-surface-container-high text-[11px]">
          <button
            type="button"
            onClick={() => setViewMode("preview")}
            className={`px-2 py-0.5 rounded transition-all ${
              viewMode === "preview"
                ? "bg-primary text-on-primary font-medium shadow-xs"
                : "text-on-surface-variant"
            }`}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setViewMode("tree")}
            className={`px-2 py-0.5 rounded transition-all ${
              viewMode === "tree"
                ? "bg-primary text-on-primary font-medium shadow-xs"
                : "text-on-surface-variant"
            }`}
          >
            Folder Tree
          </button>
        </div>
        <span className="text-[10px] text-on-surface-variant">
          {viewMode === "preview" ? "UI Snapshot" : "Architecture"}
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-surface-container-high h-48 bg-[#070d18]">
        {viewMode === "preview" ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col font-mono text-xs text-slate-200">
            <div className="flex items-center justify-between px-2.5 py-1 bg-slate-950/80 border-b border-slate-800 text-[10px]">
              <span className="text-cyan-400 font-semibold truncate">
                ~/{project.rootFolder || "project"}
              </span>
              <span className="text-slate-400 text-[9px]">tree (git:main)</span>
            </div>
            <div
              className="flex-1 overflow-y-auto p-2 text-[11px] leading-relaxed space-y-1 no-scrollbar scrollbar-none [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="text-cyan-400 font-bold flex items-center gap-1 pb-0.5">
                <span>📁</span>
                <span>{project.rootFolder || "project"}/</span>
              </div>
              {project.folderTree?.map((node, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 truncate"
                  style={{ paddingLeft: `${node.depth * 10}px` }}
                >
                  <span className="text-slate-600 select-none">
                    {node.depth > 0 ? "├──" : "•"}
                  </span>
                  <span>{node.type === "folder" ? "📁" : "📄"}</span>
                  <span
                    className={
                      node.type === "folder"
                        ? "text-cyan-300 font-medium"
                        : "text-slate-300"
                    }
                  >
                    {node.name}
                  </span>
                  {node.comment && (
                    <span className="text-[9px] text-emerald-400/80 italic ml-auto pl-1">
                      // {node.comment}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-on-surface-variant leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded bg-surface-container text-xs font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MobileProjectsSection() {
  return (
    <section className="space-y-4" id="projects">
      {PROJECTS.map((project, idx) => (
        <MobileProjectCard key={project.id} project={project} idx={idx} />
      ))}
    </section>
  );
}

export function MobileCodeSpecSection() {
  return (
    <section className="space-y-4" id="topology">
      <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-on-surface text-sm">
            {ARCHITECTURE_CODE.filename}
          </h3>
          <span className="text-[10px] font-mono text-primary">
            {ARCHITECTURE_CODE.language}
          </span>
        </div>
        <pre className="p-3 bg-surface-container-lowest rounded-lg overflow-x-auto text-xs font-mono text-on-surface-variant leading-relaxed">
          <code>
            {ARCHITECTURE_CODE.comment}
            {"\n"}
            {ARCHITECTURE_CODE.code}
          </code>
        </pre>
      </div>
    </section>
  );
}

export function MobileSkillsSection() {
  return (
    <section className="space-y-4" id="skills">
      <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-on-surface text-sm">Tech Stack &amp; Skills Matrix</h3>
          <span className="text-[10px] font-mono text-primary font-semibold">10 Toolkits</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {TECH_SKILLS.map((s) => (
            <div
              key={s.name}
              className="p-3 rounded-lg bg-surface-container flex flex-col gap-1 border border-surface-container-high"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: s.color }}
                  ></span>
                  <span className="font-semibold text-on-surface">{s.name}</span>
                </div>
                <span className="text-[10px] uppercase font-mono text-on-surface-variant">
                  {s.category}
                </span>
              </div>
              <span className="text-[11px] font-mono text-primary">{s.type}</span>
              {s.description && (
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  {s.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileJourneySection() {
  return (
    <section className="space-y-3" id="certifications">
      {EDUCATION_AND_JOURNEY.map((item) => (
        <div
          key={item.id}
          className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-primary font-semibold">
              {item.title}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-tertiary/20 text-tertiary font-mono">
              {item.badge}
            </span>
          </div>
          <h3 className="font-bold text-on-surface text-sm">{item.institution}</h3>
          <p className="text-xs text-outline font-mono">{item.period}</p>
          <p className="text-xs text-on-surface-variant">{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export function MobileContactSection({
  onDownloadCv,
}: {
  onDownloadCv: (e: React.MouseEvent) => void;
}) {
  return (
    <section className="space-y-4" id="contact">
      <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high space-y-4">
        <div>
          <h3 className="font-bold text-on-surface text-base">Let&apos;s Work Together</h3>
          <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
            {PERSONAL_INFO.workInquiryText}
          </p>
        </div>

        {/* Email Contact Form */}
        <ContactForm theme="dark" variant="mobile" />

        <a
          className="flex items-center justify-center gap-space-xs h-12 w-full rounded-lg bg-tertiary text-on-tertiary font-body-md text-body-md font-semibold shadow-md active:translate-y-0.5 transition-transform"
          href={PERSONAL_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          WhatsApp: {PERSONAL_INFO.whatsapp}
        </a>

        <div className="space-y-2 pt-2 border-t border-surface-container-high text-xs">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors p-2 rounded-lg bg-surface-container"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors p-2 rounded-lg bg-surface-container"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">link</span>
            <span>{PERSONAL_INFO.linkedinLabel}</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors p-2 rounded-lg bg-surface-container"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
            <span>{PERSONAL_INFO.githubLabel}</span>
          </a>

          <div className="flex items-center gap-2 text-outline p-2 rounded-lg bg-surface-container">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <button
          onClick={onDownloadCv}
          className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors text-xs font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">visibility</span>
          <span>Preview CV (.pdf)</span>
        </button>
      </div>
    </section>
  );
}
