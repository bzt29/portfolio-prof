"use client";

import React, { useState, useSyncExternalStore } from "react";
import WhiteView from "@/components/WhiteView";
import DarkView from "@/components/DarkView";
import type { NavSectionItem } from "@/data/portfolioData";

function subscribeTheme(callback: () => void) {
  window.addEventListener("theme_change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("theme_change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("portfolio_theme");
  return saved === "light" ? "light" : "dark";
}

function getThemeServerSnapshot(): "dark" | "light" {
  return "dark";
}

export default function HomePage() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );
  const [activeSection, setActiveSection] = useState<NavSectionItem["id"]>("hero");

  const handleThemeChange = (newTheme: "dark" | "light") => {
    localStorage.setItem("portfolio_theme", newTheme);
    window.dispatchEvent(new Event("theme_change"));
  };

  return (
    <div
      className={`min-h-screen flex flex-col w-full transition-colors duration-200 ${
        theme === "dark"
          ? "bg-[#090d16] text-slate-300"
          : "bg-[#f8fafc] text-slate-800"
      }`}
    >
      <main className="flex-1 flex flex-col w-full">
        {theme === "dark" ? (
          <DarkView
            onThemeChange={handleThemeChange}
            activeSection={activeSection}
            onSelectSection={setActiveSection}
          />
        ) : (
          <WhiteView
            onThemeChange={handleThemeChange}
            activeSection={activeSection}
            onSelectSection={setActiveSection}
          />
        )}
      </main>
    </div>
  );
}
