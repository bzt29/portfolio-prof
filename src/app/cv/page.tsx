import type { Metadata } from "next";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: `CV | ${PERSONAL_INFO.name}`,
  description: `Preview dan unduh CV ${PERSONAL_INFO.name}, ${PERSONAL_INFO.fullRole}.`,
  alternates: { canonical: "/cv" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: `${PERSONAL_INFO.name} — Portfolio`,
    url: "/cv",
    title: `CV | ${PERSONAL_INFO.name}`,
    description: `Preview dan unduh CV ${PERSONAL_INFO.name}, ${PERSONAL_INFO.fullRole}.`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_METADATA.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `CV | ${PERSONAL_INFO.name}`,
    description: `Preview dan unduh CV ${PERSONAL_INFO.name}, ${PERSONAL_INFO.fullRole}.`,
    images: ["/opengraph-image"],
  },
};

export default function CvPage() {
  return (
    <main className="flex min-h-dvh flex-col bg-[#090d16] text-slate-100">
      <header className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#10151f] px-3 py-3 sm:gap-6 sm:px-6">
        <div className="min-w-0">
          <h1 className="text-sm font-medium tracking-tight">Curriculum Vitae</h1>
          <p className="mt-0.5 truncate text-xs text-slate-400">{PERSONAL_INFO.name}</p>
        </div>
        <nav aria-label="Aksi CV" className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md px-2 py-2 text-xs text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300 sm:inline-flex"
          >
            Buka PDF ↗
          </a>
          <a
            href={PERSONAL_INFO.cvUrl}
            download={PERSONAL_INFO.cvFileName}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-300 sm:px-4"
          >
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
            </svg>
            Unduh CV
          </a>
        </nav>
      </header>

      <section aria-label="Preview CV" className="flex flex-1 flex-col">
        <iframe
          src={`${PERSONAL_INFO.cvUrl}#toolbar=1&navpanes=0`}
          title={`CV ${PERSONAL_INFO.name}`}
          className="min-h-[65dvh] w-full flex-1 border-0 bg-slate-900"
        />
        <p className="border-t border-slate-800 px-4 py-3 text-center text-xs leading-relaxed text-slate-400">
          Preview tidak tampil?{" "}
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline underline-offset-4"
          >
            Buka PDF di tab baru
          </a>{" "}
          atau gunakan tombol Unduh CV.
        </p>
      </section>
    </main>
  );
}
