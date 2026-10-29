import re

def html_to_jsx(html):
    # Convert comments
    body = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    # Convert attributes
    body = body.replace('class=', 'className=')
    body = body.replace('stroke-width=', 'strokeWidth=')
    body = body.replace('stroke-linecap=', 'strokeLinecap=')
    body = body.replace('stroke-linejoin=', 'strokeLinejoin=')
    body = body.replace('fill-rule=', 'fillRule=')
    body = body.replace('clip-rule=', 'clipRule=')
    body = body.replace('for=', 'htmlFor=')
    body = body.replace('viewbox=', 'viewBox=')
    # Self-closing tags
    body = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', body)
    body = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', body)
    body = re.sub(r'<br(?:\s*?)>', '<br />', body)
    body = re.sub(r'<hr(?:\s*?)>', '<hr />', body)
    # Fix BGP code block curly braces
    def fix_braces(match):
        code_text = match.group(0)
        code_text = code_text.replace('{', '__OPEN_BRACE__').replace('}', '__CLOSE_BRACE__')
        code_text = code_text.replace('__OPEN_BRACE__', '{"{"}').replace('__CLOSE_BRACE__', '{"}"}')
        return code_text
    body = re.sub(r'<code>(.*?)</code>', fix_braces, body, flags=re.DOTALL)
    return body

def process_desktop_view(source_html_path, target_path, is_dark=False):
    with open(source_html_path) as f:
        raw_html = f.read()

    # Extract body content
    match = re.search(r'<body[^>]*>(.*?)</body>', raw_html, re.DOTALL)
    body = match.group(1) if match else raw_html
    body = html_to_jsx(body)

    # Extract 8 sections
    sec_ids = ['hero', 'about', 'competencies', 'projects', 'topology', 'certificates', 'tech-stack', 'contact']
    sections = {}
    for s_id in sec_ids:
        m = re.search(r'(<section\b[^>]*\bid=[\"\']' + s_id + r'[\"\'][^>]*>.*?</section>)', body, re.DOTALL)
        if not m:
            raise Exception(f'Section {s_id} not found in {source_html_path}')
        content = m.group(1)
        # Clean top border/padding when displayed standalone in center
        if s_id not in ['tech-stack', 'contact']:
            content = re.sub(r'class(Name)?=[\"\']pt-6 border-t (border-slate-200|border-slate-800/80)\s*', 'className=\"', content)
        sections[s_id] = content

    # Colors and theme styling
    if is_dark:
        bg_main = "bg-[#090d16] text-slate-300"
        selection = "selection:bg-cyan-500/20 selection:text-cyan-300"
        sidebar_bg = "bg-[#090d16]/95 border-slate-800/80"
        right_bg = "bg-[#090d16]/95 border-slate-800/80"
        active_nav_cls = "bg-slate-800/90 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-950/40 font-medium"
        inactive_nav_cls = "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent font-normal"
        icon_active_color = "text-cyan-400"
        icon_inactive_color = "text-slate-500"
        border_col = "border-slate-800/80"
        card_bg = "bg-[#0d1424] border-slate-800 text-slate-200"
        badge_bg = "bg-cyan-950/60 text-cyan-300 border border-cyan-800/60"
        prev_next_btn = "bg-[#0d1424] border-slate-800 hover:bg-slate-800 text-slate-200"
        accent_btn = "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold"
        component_name = "DarkView"
        profile_accent = "bg-cyan-950/50 border-cyan-800/60 text-cyan-300"
        toc_active_color = "text-cyan-400 font-semibold"
    else:
        bg_main = "bg-[#f8fafc] text-slate-800"
        selection = "selection:bg-brand-100 selection:text-brand-700"
        sidebar_bg = "bg-[#f8fafc]/95 border-slate-200"
        right_bg = "bg-[#f8fafc]/95 border-slate-200"
        active_nav_cls = "bg-brand-50 text-brand-700 border border-brand-200/90 shadow-sm font-semibold"
        inactive_nav_cls = "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent font-normal"
        icon_active_color = "text-brand-600"
        icon_inactive_color = "text-slate-400"
        border_col = "border-slate-200"
        card_bg = "bg-white border-slate-200 text-slate-800"
        badge_bg = "bg-brand-50 text-brand-700 border border-brand-200"
        prev_next_btn = "bg-white border-slate-300 hover:bg-slate-50 text-slate-700"
        accent_btn = "bg-brand-600 hover:bg-brand-700 text-white font-semibold"
        component_name = "WhiteView"
        profile_accent = "bg-emerald-50 border-emerald-200/80 text-emerald-800"
        toc_active_color = "text-brand-600 font-semibold"

    # Extract top telemetry bar
    top_banner_start = body.find('<div className=\"bg-')
    top_banner_end = body.find('<div className=\"flex-1 w-full max-w-[1536px]')
    top_banner = body[top_banner_start:top_banner_end] if (top_banner_start != -1 and top_banner_end != -1) else ""

    template = """\"use client\";

import React, { useState } from \"react\";

export type SectionId =
  | \"hero\"
  | \"about\"
  | \"competencies\"
  | \"projects\"
  | \"topology\"
  | \"certificates\";

interface NavItem {
  id: SectionId;
  label: string;
  num: string;
  iconPath: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: \"hero\",
    label: \"Home / Brief\",
    num: \"00\",
    iconPath: \"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\",
  },
  {
    id: \"about\",
    label: \"01. About Me\",
    num: \"01\",
    iconPath: \"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\",
  },
  {
    id: \"competencies\",
    label: \"02. Core Disciplines\",
    num: \"02\",
    iconPath: \"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z\",
  },
  {
    id: \"projects\",
    label: \"03. Featured Projects\",
    num: \"03\",
    iconPath: \"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\",
  },
  {
    id: \"topology\",
    label: \"04. Network Configs\",
    num: \"04\",
    iconPath: \"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4\",
  },
  {
    id: \"certificates\",
    label: \"05. Certifications\",
    num: \"05\",
    iconPath: \"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z\",
  },
];

export default function __COMPONENT_NAME__() {
  const [activeSection, setActiveSection] = useState<SectionId>(\"hero\");
  const [copiedKey, setCopiedKey] = useState(false);

  const copyKey = () => {
    navigator.clipboard.writeText(\"8F4B 2991 C770 18A3 E311\");
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const scrollToContact = () => {
    document.getElementById(\"contact\")?.scrollIntoView({ behavior: \"smooth\" });
  };

  const currentIndex = NAV_ITEMS.findIndex((item) => item.id === activeSection);
  const prevItem = currentIndex > 0 ? NAV_ITEMS[currentIndex - 1] : null;
  const nextItem = currentIndex < NAV_ITEMS.length - 1 ? NAV_ITEMS[currentIndex + 1] : null;

  return (
    <div className=\"__BG_MAIN__ antialiased flex flex-col min-h-screen __SELECTION__ w-full\">
      __TOP_BANNER__

      <div className=\"flex-1 w-full max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-6\">
        <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6 min-h-[calc(100vh-37px)]\">
          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className=\"lg:col-span-3 xl:col-span-3 border-r __SIDEBAR_BG__ lg:sticky lg:top-0 lg:h-[calc(100vh-37px)] lg:overflow-y-auto pt-6 pb-10 pr-2 lg:pr-5 backdrop-blur-sm\">
            {/* Profile Info */}
            <div className=\"flex flex-col items-center justify-center text-center px-2\">
              <div className=\"relative mb-4 inline-block mx-auto\">
                <div className=\"w-28 h-28 rounded-full bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 p-[3px] shadow-lg\">
                  <div className=\"w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center text-white\">
                    <span className=\"font-mono text-3xl font-extrabold tracking-tight\">RA</span>
                    <span className=\"text-[10px] font-mono tracking-widest text-slate-400 mt-0.5\">DEV//OPS</span>
                  </div>
                </div>
                <span className=\"absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full\"></span>
              </div>
              <h1 className=\"text-xl font-bold tracking-tight\">Rian Aditya</h1>
              <p className=\"text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider\">
                software engineer <span className=\"text-slate-400\">|</span> network engineer
              </p>
              <div className=\"mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full __PROFILE_ACCENT__ text-[11px] font-medium mx-auto\">
                <span className=\"h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse\"></span>
                Available for Enterprise Roles
              </div>
            </div>

            <div className=\"my-6 border-b __BORDER_COL__ mx-2\"></div>

            {/* Navigation Menu */}
            <nav aria-label=\"Portfolio Menu\" className=\"space-y-4 px-2\">
              <div>
                <span className=\"text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block mb-2 px-1\">
                  Sections
                </span>
                <ul className=\"space-y-1.5 text-sm\">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all ${
                            isActive ? \"__ACTIVE_NAV_CLS__\" : \"__INACTIVE_NAV_CLS__\"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 flex-shrink-0 ${
                              isActive ? \"__ICON_ACTIVE_COLOR__\" : \"__ICON_INACTIVE_COLOR__\"
                            }`}
                            fill=\"none\"
                            stroke=\"currentColor\"
                            viewBox=\"0 0 24 24\"
                          >
                            <path
                              strokeLinecap=\"round\"
                              strokeLinejoin=\"round\"
                              strokeWidth=\"2\"
                              d={item.iconPath}
                            />
                          </svg>
                          <span className=\"flex-1 font-mono text-xs truncate\">{item.label}</span>
                          {isActive && (
                            <span className=\"w-1.5 h-1.5 rounded-full bg-current flex-shrink-0\"></span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>

            {/* Direct Contact Button */}
            <div className=\"mt-8 px-2\">
              <button
                onClick={scrollToContact}
                className=\"w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold __PREV_NEXT_BTN__ rounded-lg shadow-sm transition-all\"
              >
                <svg className=\"w-4 h-4 text-slate-400\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
                  <path
                    d=\"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\"
                    strokeLinecap=\"round\"
                    strokeLinejoin=\"round\"
                    strokeWidth=\"2\"
                  />
                </svg>
                Direct Contact & Reach ↓
              </button>
            </div>
          </aside>

          {/* CENTER MAIN CONTENT: ONLY ACTIVE SECTION IS RENDERED */}
          <main className=\"lg:col-span-6 xl:col-span-6 py-6 lg:px-4 space-y-6\" data-purpose=\"main-content\">
            {/* Breadcrumb / Section Header Indicator */}
            <div className=\"flex items-center justify-between border-b __BORDER_COL__ pb-3 text-xs font-mono\">
              <div className=\"flex items-center gap-2 text-slate-500\">
                <span>Docs</span>
                <span>/</span>
                <span className=\"font-semibold text-current\">{NAV_ITEMS[currentIndex].label}</span>
              </div>
              <div className=\"flex items-center gap-2\">
                <span className=\"px-2 py-0.5 rounded text-[10px] __BADGE_BG__\">
                  Section {NAV_ITEMS[currentIndex].num} / 05
                </span>
              </div>
            </div>

            {/* Render ONLY Active Section (hero, about, competencies, projects, topology, certificates) */}
            <div className=\"transition-opacity duration-200\">
              {activeSection === \"hero\" && (
                <div>__SECTION_HERO__</div>
              )}
              {activeSection === \"about\" && (
                <div>__SECTION_ABOUT__</div>
              )}
              {activeSection === \"competencies\" && (
                <div>__SECTION_COMPETENCIES__</div>
              )}
              {activeSection === \"projects\" && (
                <div>__SECTION_PROJECTS__</div>
              )}
              {activeSection === \"topology\" && (
                <div>__SECTION_TOPOLOGY__</div>
              )}
              {activeSection === \"certificates\" && (
                <div>__SECTION_CERTIFICATES__</div>
              )}
            </div>

            {/* Section Bottom Pagination Controls */}
            <div className=\"flex items-center justify-between pt-6 border-t __BORDER_COL__ text-xs font-mono\">
              {prevItem ? (
                <button
                  onClick={() => setActiveSection(prevItem.id)}
                  className=\"flex items-center gap-2 px-3 py-2 rounded-lg border __PREV_NEXT_BTN__ transition-all shadow-sm\"
                >
                  <span>←</span>
                  <span className=\"truncate\">Prev: {prevItem.label}</span>
                </button>
              ) : (
                <div></div>
              )}

              {nextItem && (
                <button
                  onClick={() => setActiveSection(nextItem.id)}
                  className=\"ml-auto flex items-center gap-2 px-3.5 py-2 rounded-lg __ACCENT_BTN__ transition-all shadow-sm\"
                >
                  <span className=\"truncate\">Next: {nextItem.label}</span>
                  <span>→</span>
                </button>
              )}
            </div>

            {/* Footer */}
            <footer className=\"pt-8 pb-12 border-t __BORDER_COL__ text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono\">
              <p>© 2025 Rian Aditya. Enterprise Engineering Portfolio.</p>
              <div className=\"flex gap-4\">
                <span>ASN 64512</span>
                <span>•</span>
                <span>BGP EVPN</span>
                <span>•</span>
                <button onClick={() => setActiveSection(\"hero\")} className=\"text-cyan-400 hover:underline\">
                  Back to Top ↑
                </button>
              </div>
            </footer>
          </main>

          {/* RIGHT RAIL: TOC, TECH STACK & DIRECT CONTACT (ALWAYS PRESENT ON THE RIGHT SIDEBAR) */}
          <aside className=\"lg:col-span-3 xl:col-span-3 border-l __RIGHT_BG__ lg:sticky lg:top-0 lg:h-[calc(100vh-37px)] lg:overflow-y-auto pt-6 pb-10 pl-2 lg:pl-5 space-y-6\" data-purpose=\"toc-and-contact\">
            {/* On This Page / Section Jump List */}
            <div className=\"space-y-2.5\">
              <h2 className=\"text-xs font-bold uppercase tracking-wider font-mono text-current\">
                On this page
              </h2>
              <nav className=\"border-l __BORDER_COL__ pl-3 space-y-1.5 text-xs font-mono\">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`block text-left w-full transition-colors truncate ${
                        isActive
                          ? \"__TOC_ACTIVE_COLOR__\"
                          : \"text-slate-500 hover:text-slate-300\"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <a
                  href=\"#tech-stack\"
                  className=\"block text-left w-full text-slate-500 hover:text-slate-300 transition-colors truncate pt-1 border-t __BORDER_COL__\"
                >
                  Tech Stack Matrix ↓
                </a>
                <a
                  href=\"#contact\"
                  className=\"block text-left w-full text-slate-500 hover:text-slate-300 transition-colors truncate\"
                >
                  Direct Contact ↓
                </a>
              </nav>
            </div>

            <div className=\"border-b __BORDER_COL__\"></div>

            {/* TECH STACK & SKILLS: ALWAYS IN RIGHT SIDEBAR */}
            __SECTION_TECH_STACK__

            <div className=\"border-b __BORDER_COL__\"></div>

            {/* DIRECT CONTACT: ALWAYS IN RIGHT SIDEBAR */}
            __SECTION_CONTACT__
          </aside>
        </div>
      </div>
    </div>
  );
}
"""

    code = template
    code = code.replace("__COMPONENT_NAME__", component_name)
    code = code.replace("__BG_MAIN__", bg_main)
    code = code.replace("__SELECTION__", selection)
    code = code.replace("__SIDEBAR_BG__", sidebar_bg)
    code = code.replace("__RIGHT_BG__", right_bg)
    code = code.replace("__ACTIVE_NAV_CLS__", active_nav_cls)
    code = code.replace("__INACTIVE_NAV_CLS__", inactive_nav_cls)
    code = code.replace("__ICON_ACTIVE_COLOR__", icon_active_color)
    code = code.replace("__ICON_INACTIVE_COLOR__", icon_inactive_color)
    code = code.replace("__BORDER_COL__", border_col)
    code = code.replace("__CARD_BG__", card_bg)
    code = code.replace("__BADGE_BG__", badge_bg)
    code = code.replace("__PREV_NEXT_BTN__", prev_next_btn)
    code = code.replace("__ACCENT_BTN__", accent_btn)
    code = code.replace("__PROFILE_ACCENT__", profile_accent)
    code = code.replace("__TOC_ACTIVE_COLOR__", toc_active_color)
    code = code.replace("__TOP_BANNER__", top_banner)

    code = code.replace("__SECTION_HERO__", sections['hero'])
    code = code.replace("__SECTION_ABOUT__", sections['about'])
    code = code.replace("__SECTION_COMPETENCIES__", sections['competencies'])
    code = code.replace("__SECTION_PROJECTS__", sections['projects'])
    code = code.replace("__SECTION_TOPOLOGY__", sections['topology'])
    code = code.replace("__SECTION_CERTIFICATES__", sections['certificates'])
    code = code.replace("__SECTION_TECH_STACK__", sections['tech-stack'])
    code = code.replace("__SECTION_CONTACT__", sections['contact'])

    with open(target_path, 'w') as out:
        out.write(code)
    print(f'Generated {target_path}')

# Process both from pristine /tmp files
process_desktop_view('/tmp/white.html', 'src/components/WhiteView.tsx', is_dark=False)
process_desktop_view('/tmp/dark.html', 'src/components/DarkView.tsx', is_dark=True)
