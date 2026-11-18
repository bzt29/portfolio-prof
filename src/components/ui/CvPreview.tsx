"use client";

import dynamic from "next/dynamic";

// PDF.js uses browser APIs; load it only when a preview is mounted.
const CvPdfDocument = dynamic(() => import("./CvPdfDocument"), {
  ssr: false,
  loading: () => <p role="status" className="p-6 text-center text-sm text-slate-400">Memuat preview CV…</p>,
});

export function CvPreview() {
  return <CvPdfDocument />;
}
