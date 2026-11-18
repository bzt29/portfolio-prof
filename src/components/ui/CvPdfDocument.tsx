"use client";

import { useEffect, useRef, useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function CvPdfDocument() {
  const viewport = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [zoom, setZoom] = useState(1);
  const pages = PERSONAL_INFO.cvPages || [
    "/assets/cv-page-1.webp",
    "/assets/cv-page-2.webp",
  ];

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;

    const updateWidth = () => {
      // Subtract padding (p-3 = 24px)
      const w = Math.max(280, element.clientWidth - 24);
      setContainerWidth(w);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(2.5, Math.round((prev + 0.25) * 100) / 100));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(1, Math.round((prev - 0.25) * 100) / 100));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  // Base page width fits within container, maxed at 820px for desktop sharpness
  const baseWidth = containerWidth > 0 ? Math.min(containerWidth, 820) : 600;
  const renderedWidth = Math.round(baseWidth * zoom);

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#141a24] text-slate-200">
      {/* Top Controls Toolbar */}
      <div
        role="toolbar"
        aria-label="Pengaturan preview CV"
        className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-[#0e131b] px-3.5 py-2 text-xs font-mono"
      >
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{pages.length} Halaman (Lengkap)</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Perkecil CV"
            disabled={zoom <= 1}
            onClick={handleZoomOut}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-base hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
          >
            −
          </button>
          <button
            type="button"
            aria-label="Sesuaikan CV dengan lebar layar"
            onClick={handleResetZoom}
            className="h-7 rounded-lg border border-white/10 bg-white/5 px-2.5 text-xs font-semibold hover:bg-white/15"
            title="Klik untuk reset zoom (100%)"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            type="button"
            aria-label="Perbesar CV"
            disabled={zoom >= 2.5}
            onClick={handleZoomIn}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-base hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
          >
            +
          </button>
        </div>
      </div>

      {/* Pages Container */}
      <div
        ref={viewport}
        tabIndex={0}
        aria-label="Halaman CV, gulir untuk membaca"
        className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-5"
      >
        <div
          className="mx-auto flex flex-col items-center space-y-4 sm:space-y-6"
          style={{ width: zoom > 1 ? `${renderedWidth}px` : "100%" }}
        >
          {pages.map((pageSrc, index) => (
            <div
              key={pageSrc}
              className="relative flex flex-col items-center bg-white shadow-xl rounded-sm overflow-hidden"
              style={{
                width: `${renderedWidth}px`,
                maxWidth: zoom === 1 ? "100%" : "none",
              }}
            >
              {/* Page Number Tag */}
              <div className="absolute top-2 right-2.5 z-10 rounded bg-slate-900/75 px-1.5 py-0.5 text-[9px] font-mono font-medium text-slate-200 backdrop-blur-xs select-none">
                Halaman {index + 1} / {pages.length}
              </div>

              {/* Rendered Document Page */}
              <img
                src={pageSrc}
                alt={`Curriculum Vitae ${PERSONAL_INFO.name} - Halaman ${index + 1}`}
                className="w-full h-auto block select-none"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
