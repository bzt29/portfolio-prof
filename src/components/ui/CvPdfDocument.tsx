"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PERSONAL_INFO } from "@/data/portfolioData";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function CvPdfDocument() {
  const viewport = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.max(1, Math.floor(entry.contentRect.width)));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const error = (
    <div role="alert" className="max-w-sm space-y-3 p-6 text-center text-sm text-slate-300">
      <p>Preview CV belum bisa dimuat. Periksa koneksi lalu coba lagi.</p>
      <button type="button" onClick={() => setAttempt((value) => value + 1)} className="rounded-lg border border-slate-600 px-4 py-2 hover:bg-slate-800">
        Coba lagi
      </button>
      <p><a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Buka PDF langsung</a></p>
    </div>
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[#171d28] text-slate-200">
      <div role="toolbar" aria-label="Pengaturan preview CV" className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 px-3 py-2 text-xs">
        <span aria-live="polite">{pages ? `${pages} halaman` : "Preview CV"}</span>
        <div className="flex items-center gap-1">
          <button type="button" aria-label="Perkecil CV" disabled={zoom <= 1} onClick={() => setZoom((value) => Math.max(1, value - 0.25))} className="size-8 rounded-md text-lg hover:bg-white/10 disabled:opacity-30">−</button>
          <button type="button" aria-label="Sesuaikan CV dengan lebar layar" onClick={() => setZoom(1)} className="rounded-md px-2 py-2 hover:bg-white/10">{Math.round(zoom * 100)}%</button>
          <button type="button" aria-label="Perbesar CV" disabled={zoom >= 2.5} onClick={() => setZoom((value) => Math.min(2.5, value + 0.25))} className="size-8 rounded-md text-lg hover:bg-white/10 disabled:opacity-30">+</button>
        </div>
      </div>
      <div ref={viewport} tabIndex={0} aria-label="Halaman CV, gulir untuk membaca" className="min-h-0 flex-1 overflow-auto overscroll-contain p-3">
        {width > 0 && (
          <Document
            key={attempt}
            file={PERSONAL_INFO.cvUrl}
            suspense={false}
            onLoadSuccess={({ numPages }) => setPages(numPages)}
            loading={<p role="status" className="p-6 text-center text-sm text-slate-400">Memuat dokumen CV…</p>}
            error={error}
            className="mx-auto w-fit space-y-4"
          >
            {Array.from({ length: pages }, (_, index) => (
              <Page
                key={index + 1}
                pageNumber={index + 1}
                width={Math.round(Math.min(width, 900) * zoom)}
                devicePixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
                loading={<p role="status" className="p-6 text-center text-sm text-slate-400">Memuat halaman {index + 1}…</p>}
                error={error}
                className="overflow-hidden bg-white shadow-lg"
              />
            ))}
          </Document>
        )}
      </div>
    </div>
  );
}
