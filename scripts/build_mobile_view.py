import re

with open('src/components/MobileView.tsx') as f:
    text = f.read()

# Extract sections
sec_overview_start = text.rfind('<section', 0, text.find('id=\"overview\"'))
nav_start = text.find('<nav aria-label=\"Portfolio Sections\"')
nav_end = text.find('</nav>', nav_start) + 6
sec_disciplines_start = text.rfind('<section', 0, text.find('id=\"disciplines\"'))

overview_p1 = text[sec_overview_start:nav_start]
overview_p2 = text[nav_end:sec_disciplines_start]
sec_overview = overview_p1 + overview_p2

sec_disciplines = re.search(r'(<section\b[^>]*\bid=\"disciplines\"[^>]*>.*?</section>)', text, re.DOTALL).group(1)
sec_projects = re.search(r'(<section\b[^>]*\bid=\"projects\"[^>]*>.*?</section>)', text, re.DOTALL).group(1)
sec_topology = re.search(r'(<section\b[^>]*\bid=\"topology\"[^>]*>.*?</section>)', text, re.DOTALL).group(1)
sec_skills = re.search(r'(<section\b[^>]*\bid=\"skills\"[^>]*>.*?</section>)', text, re.DOTALL).group(1)
sec_certs = re.search(r'(<section\b[^>]*\bid=\"certifications\"[^>]*>.*?</section>)', text, re.DOTALL).group(1)
sec_contact = re.search(r'(<section\b[^>]*\bid=\"contact\"[^>]*>.*?</section>)', text, re.DOTALL).group(1)

template = """\"use client\";

import React, { useState } from \"react\";

export type MobileSectionId =
  | \"overview\"
  | \"disciplines\"
  | \"projects\"
  | \"topology\"
  | \"skills\"
  | \"certifications\"
  | \"contact\";

interface SectionItem {
  id: MobileSectionId;
  label: string;
  shortLabel: string;
  icon: string;
  num: string;
}

const SECTIONS: SectionItem[] = [
  { id: \"overview\", label: \"Overview\", shortLabel: \"Overview\", icon: \"dashboard\", num: \"00\" },
  { id: \"disciplines\", label: \"Core Disciplines\", shortLabel: \"Disciplines\", icon: \"dns\", num: \"01\" },
  { id: \"projects\", label: \"Featured Projects\", shortLabel: \"Projects\", icon: \"code_blocks\", num: \"02\" },
  { id: \"topology\", label: \"Topology Spec\", shortLabel: \"Topology\", icon: \"hub\", num: \"03\" },
  { id: \"skills\", label: \"Tech Stack\", shortLabel: \"Skills\", icon: \"terminal\", num: \"04\" },
  { id: \"certifications\", label: \"Certifications\", shortLabel: \"Certs\", icon: \"verified\", num: \"05\" },
  { id: \"contact\", label: \"Direct Contact\", shortLabel: \"Contact\", icon: \"mail\", num: \"06\" },
];

export default function MobileView() {
  const [activeSection, setActiveSection] = useState<MobileSectionId>(\"overview\");
  const [downloading, setDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadDone(true);
      setTimeout(() => setDownloadDone(false), 2500);
    }, 1000);
  };

  const handleCopyFingerprint = () => {
    navigator.clipboard.writeText(\"4A2F 8C91 00B3 4E88 DC15 B6C9 148F 39A2 C4D0 917B\");
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  return (
    <div className=\"bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container w-full relative pb-20\">
      {/* Top Header */}
      <header className=\"sticky top-0 w-full z-40 bg-surface-container-lowest/90 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)] border-b border-surface-container-high/50\">
        <div className=\"h-16 px-gutter-mobile flex items-center justify-between gap-space-sm\">
          <div className=\"flex items-center gap-space-sm min-w-0\">
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label=\"Toggle navigation drawer\"
              className=\"w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-primary transition-colors active:scale-95\"
            >
              <span className=\"material-symbols-outlined text-[24px]\">
                {drawerOpen ? \"close\" : \"terminal\"}
              </span>
            </button>
            <div className=\"flex flex-col min-w-0\">
              <span className=\"font-label-sm text-label-sm uppercase tracking-wider text-outline truncate\">
                rian aditya // ops
              </span>
              <span className=\"font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface truncate\">
                {SECTIONS[currentIndex].label}
              </span>
            </div>
          </div>
          <div className=\"flex items-center gap-space-sm shrink-0\">
            <div className=\"inline-flex items-center gap-space-xs px-2 py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md\">
              <span className=\"w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.6)] animate-pulse\"></span>
              <span className=\"font-label-sm text-label-sm text-tertiary font-mono\">ASN 64512</span>
            </div>
            <div className=\"w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md\">
              <span className=\"material-symbols-outlined text-on-primary text-[18px]\">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Overlay Menu */}
      {drawerOpen && (
        <div className=\"fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col pt-16\">
          <div className=\"bg-surface-container-lowest border-b border-surface-container-high p-4 space-y-3\">
            <div className=\"flex items-center justify-between\">
              <span className=\"font-label-sm text-label-sm uppercase tracking-wider text-outline\">
                Navigation Menu
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                className=\"text-outline hover:text-on-surface text-xs font-mono px-2 py-1\"
              >
                [Close ✕]
              </button>
            </div>
            <div className=\"grid grid-cols-2 gap-2\">
              {SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSection(sec.id);
                    setDrawerOpen(false);
                  }}
                  className={`flex items-center gap-2 p-3 rounded-lg text-left transition-all ${
                    activeSection === sec.id
                      ? \"bg-primary text-on-primary font-semibold shadow\"
                      : \"bg-surface-container text-on-surface hover:bg-surface-bright\"
                  }`}
                >
                  <span className=\"material-symbols-outlined text-[18px]\">{sec.icon}</span>
                  <span className=\"font-label-sm text-label-sm truncate\">{sec.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className=\"flex-1\" onClick={() => setDrawerOpen(false)}></div>
        </div>
      )}

      {/* Horizontal Nav Chips */}
      <nav
        aria-label=\"Portfolio Sections\"
        className=\"sticky top-16 z-30 flex items-center gap-2 overflow-x-auto py-2.5 px-gutter-mobile bg-surface-container-lowest/80 backdrop-blur-md border-b border-surface-container-high/40 no-scrollbar\"
      >
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all shrink-0 ${
                isActive
                  ? \"bg-primary text-on-primary font-semibold shadow-md\"
                  : \"bg-surface-container-low text-on-surface-variant hover:text-on-surface\"
              }`}
            >
              {sec.shortLabel}
            </button>
          );
        })}
      </nav>

      {/* Main Content Area (Only Active Section Renders) */}
      <main className=\"flex flex-col relative w-full pt-4 px-gutter-mobile bg-surface flex-1\">
        <div className=\"flex flex-col w-full gap-space-lg\">
          {/* Section Breadcrumb Indicator */}
          <div className=\"flex items-center justify-between text-xs font-mono text-outline border-b border-surface-container-high pb-2\">
            <span>SECTION // {SECTIONS[currentIndex].num}</span>
            <span className=\"text-primary font-semibold\">{SECTIONS[currentIndex].label}</span>
          </div>

          {/* Active Section Content */}
          <div className=\"w-full\">
            {activeSection === \"overview\" && <div>__SEC_OVERVIEW__</div>}
            {activeSection === \"disciplines\" && <div>__SEC_DISCIPLINES__</div>}
            {activeSection === \"projects\" && <div>__SEC_PROJECTS__</div>}
            {activeSection === \"topology\" && <div>__SEC_TOPOLOGY__</div>}
            {activeSection === \"skills\" && <div>__SEC_SKILLS__</div>}
            {activeSection === \"certifications\" && <div>__SEC_CERTS__</div>}
            {activeSection === \"contact\" && <div>__SEC_CONTACT__</div>}
          </div>

          {/* Prev / Next Section Controls */}
          <div className=\"flex items-center justify-between pt-6 pb-8 border-t border-surface-container-high font-mono text-xs\">
            {prevSection ? (
              <button
                onClick={() => setActiveSection(prevSection.id)}
                className=\"flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors\"
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
                className=\"ml-auto flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-on-primary font-semibold shadow transition-transform active:scale-95\"
              >
                <span>{nextSection.shortLabel}</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation Dock */}
      <nav className=\"fixed bottom-0 w-full z-40 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl border-t border-surface-container-high shadow-[0_-2px_10px_rgba(0,0,0,0.3)]\">
        <div className=\"flex justify-around items-center h-16 px-gutter-mobile\">
          {[
            { id: \"overview\", label: \"Overview\", icon: \"dashboard\" },
            { id: \"disciplines\", label: \"Disciplines\", icon: \"dns\" },
            { id: \"projects\", label: \"Projects\", icon: \"code_blocks\" },
            { id: \"topology\", label: \"Topology\", icon: \"hub\" },
            { id: \"contact\", label: \"Contact\", icon: \"mail\" },
          ].map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as MobileSectionId)}
                className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors gap-0.5 ${
                  isActive
                    ? \"text-primary font-semibold\"
                    : \"text-on-surface-variant hover:text-on-surface\"
                }`}
              >
                <span className=\"material-symbols-outlined text-[22px]\">{tab.icon}</span>
                <span className=\"font-label-sm text-label-sm\">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
"""

code = template
code = code.replace("__SEC_OVERVIEW__", sec_overview)
code = code.replace("__SEC_DISCIPLINES__", sec_disciplines)
code = code.replace("__SEC_PROJECTS__", sec_projects)
code = code.replace("__SEC_TOPOLOGY__", sec_topology)
code = code.replace("__SEC_SKILLS__", sec_skills)
code = code.replace("__SEC_CERTS__", sec_certs)
code = code.replace("__SEC_CONTACT__", sec_contact)

with open('src/components/MobileView.tsx', 'w') as out:
    out.write(code)

print('Generated separated MobileView.tsx successfully!')
