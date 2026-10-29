"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import type { ProjectItem, ProjectFolderNode } from "@/types/portfolio";

interface ProjectsSectionProps {
  theme: "dark" | "light";
}

interface ProjectCardProps {
  project: ProjectItem;
  theme: "dark" | "light";
}

function ProjectCard({ project, theme }: ProjectCardProps) {
  const isDark = theme === "dark";
  const [viewMode, setViewMode] = useState<"preview" | "tree">("preview");

  let badgeStyle = isDark
    ? "bg-slate-800 text-slate-300 border-slate-700/80"
    : "bg-slate-100 text-slate-700 border-slate-200";

  if (project.badgeType === "internship") {
    badgeStyle = isDark
      ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
      : "bg-emerald-50 text-emerald-700 border-emerald-200";
  } else if (project.badgeType === "featured" || project.badgeType === "mobile") {
    badgeStyle = isDark
      ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/30"
      : "bg-brand-50 text-brand-700 border-brand-200";
  }

  return (
    <article
      className={`rounded-xl p-4 sm:p-5 shadow-sm transition-all duration-300 flex flex-col justify-between border ${
        isDark
          ? "bg-[#0f172a] border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/20"
          : "bg-white border-slate-200 hover:border-brand-300 hover:shadow-md"
      }`}
    >
      <div className="space-y-3">
        {/* Card Header: Title + Badge */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-2">
          <div>
            <h3
              className={`text-sm sm:text-base font-bold leading-snug ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {project.title}
            </h3>
            <span
              className={`text-[11px] font-mono block mt-0.5 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {project.category}
            </span>
          </div>

          <span
            className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded border font-medium whitespace-nowrap self-start ${badgeStyle}`}
          >
            {project.badge}
          </span>
        </div>

        {/* Interactive View Toggle Switch (Preview vs Folder Tree) */}
        <div className="flex items-center justify-between gap-2 pt-1 pb-0.5">
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <span
              className={`hidden sm:inline text-[10px] font-mono uppercase tracking-wider font-semibold shrink-0 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Mode:
            </span>
            <div
              className={`inline-flex w-full sm:w-auto p-0.5 rounded-lg border text-[11px] font-mono ${
                isDark
                  ? "bg-slate-900/90 border-slate-800"
                  : "bg-slate-100 border-slate-200"
              }`}
            >
              <button
                type="button"
                onClick={() => setViewMode("preview")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1 rounded-md transition-all text-xs ${
                  viewMode === "preview"
                    ? isDark
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold shadow-xs border border-cyan-500/30"
                      : "bg-white text-brand-700 font-semibold shadow-xs border border-brand-200"
                    : isDark
                    ? "text-slate-400 hover:text-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Tampilkan Gambar Screenshot"
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Preview</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("tree")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1 rounded-md transition-all text-xs ${
                  viewMode === "tree"
                    ? isDark
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold shadow-xs border border-cyan-500/30"
                      : "bg-white text-brand-700 font-semibold shadow-xs border border-brand-200"
                    : isDark
                    ? "text-slate-400 hover:text-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Lihat Struktur Folder Project"
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
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span>Folder Tree</span>
              </button>
            </div>
          </div>

          <span
            className={`hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
              isDark ? "text-cyan-400/90 bg-cyan-950/40" : "text-brand-600 bg-brand-50"
            }`}
          >
            {viewMode === "preview" ? "UI Snapshot" : "Architecture"}
          </span>
        </div>

        {/* Viewport: Image Preview OR Folder Tree */}
        <div
          className={`relative rounded-lg overflow-hidden transition-all h-44 sm:h-52 md:h-56 ${
            isDark
              ? "border border-slate-800 bg-[#070b14]"
              : "border-0 shadow-xs bg-slate-50"
          }`}
        >
          {viewMode === "preview" ? (
            <div className="relative w-full h-full group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-[11px] font-mono text-white/90 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded">
                  {project.typeLabel}
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col bg-[#070d18] text-slate-200">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-800/90 bg-slate-950/60 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-[11px] text-slate-400 ml-1.5 font-semibold truncate max-w-[150px] sm:max-w-[200px]">
                    ~/{project.rootFolder || "project"}
                  </span>
                </div>
                <span className="text-[10px] text-cyan-400 font-medium">
                  tree (git:main)
                </span>
              </div>

              {/* Terminal Tree Content */}
              <div
                className="flex-1 overflow-y-auto p-3 font-mono text-[11px] leading-relaxed space-y-1 select-text no-scrollbar scrollbar-none [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="text-cyan-400 font-bold flex items-center gap-1.5 pb-0.5">
                  <span>📁</span>
                  <span>{project.rootFolder || "project"}/</span>
                </div>

                {project.folderTree && project.folderTree.length > 0 ? (
                  project.folderTree.map((node: ProjectFolderNode, idx: number) => {
                    const indentPx = node.depth * 14;
                    const isFolder = node.type === "folder";

                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-[11px] hover:bg-slate-800/40 px-1 py-0.5 rounded transition-colors"
                        style={{ paddingLeft: `${indentPx}px` }}
                      >
                        <span className="text-slate-600 select-none">
                          {node.depth > 0 ? "├──" : "•"}
                        </span>
                        <span className="text-xs select-none">
                          {isFolder ? "📁" : "📄"}
                        </span>
                        <span
                          className={`truncate ${
                            isFolder
                              ? "text-cyan-300 font-medium"
                              : node.name.endsWith(".kt")
                              ? "text-amber-300"
                              : node.name.endsWith(".php")
                              ? "text-sky-300"
                              : "text-slate-300"
                          }`}
                        >
                          {node.name}
                        </span>

                        {node.comment && (
                          <span className="text-[10px] text-emerald-400/80 italic font-normal ml-auto truncate max-w-[140px] pl-2 hidden sm:inline">
                            // {node.comment}
                          </span>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-slate-500 text-xs italic py-2">
                    Struktur folder tidak tersedia.
                  </div>
                )}
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-3 py-1 border-t border-slate-800/80 bg-slate-950/80 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span className="truncate">
                  {project.architectureSummary || "Modular Architecture"}
                </span>
                <span className="text-emerald-400 shrink-0">
                  {project.folderTree?.length || 0} nodes
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Project Description */}
        <p
          className={`text-xs leading-relaxed line-clamp-3 min-h-[3rem] ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech Stack Pills & Type Label */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs border-t pt-2.5 mt-3 ${
          isDark ? "border-slate-800/80" : "border-slate-100"
        }`}
      >
        <div className="flex flex-wrap gap-1">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className={`px-1.5 py-0.5 rounded font-mono text-[10px] border ${
                isDark
                  ? "bg-slate-800 text-slate-300 border-slate-700/60"
                  : "bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <span
          className={`font-mono text-[11px] font-semibold self-start sm:self-auto ${
            isDark ? "text-cyan-400" : "text-brand-600"
          }`}
        >
          {project.typeLabel}
        </span>
      </div>
    </article>
  );
}

export default function ProjectsSection({ theme }: ProjectsSectionProps) {
  const isDark = theme === "dark";
  const [filterMode, setFilterMode] = useState<"featured" | "all">("featured");

  // Show 4 flagship cards by default, or all 6 if user switches to "all"
  const displayedProjects =
    filterMode === "featured" ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="space-y-5" id="projects">
      {/* Section Header with View Count & Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2
          className={`text-xl font-bold ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Featured Systems &amp; Projects
        </h2>

        {/* 4 Card / All Works View Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div
            className={`inline-flex w-full sm:w-auto p-0.5 rounded-lg border text-xs font-mono ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setFilterMode("featured")}
              className={`flex-1 sm:flex-initial text-center px-2.5 py-1 rounded-md transition-all font-medium ${
                filterMode === "featured"
                  ? isDark
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-white text-brand-700 shadow-xs border border-brand-200"
                  : isDark
                  ? "text-slate-400 hover:text-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              4 Featured Works
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("all")}
              className={`flex-1 sm:flex-initial text-center px-2.5 py-1 rounded-md transition-all font-medium ${
                filterMode === "all"
                  ? isDark
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-white text-brand-700 shadow-xs border border-brand-200"
                  : isDark
                  ? "text-slate-400 hover:text-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
          </div>
        </div>
      </div>

      {/* Professional Responsive Grid: 1-Column on Tablet/Mobile, 2-Column on Desktop (xl) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} theme={theme} />
        ))}
      </div>
    </section>
  );
}
