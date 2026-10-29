"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { ViewMode, SectionId } from "@/types";

interface ViewState {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  isMobileScreen: boolean;
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  toggleDrawer: () => void;
}

const ViewStoreContext = createContext<ViewState | undefined>(undefined);

export function ViewStoreProvider({
  children,
  initialMode = "auto",
}: {
  children: React.ReactNode;
  initialMode?: ViewMode;
}) {
  const [mode, setMode] = useState<ViewMode>(initialMode);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <ViewStoreContext.Provider
      value={{
        mode,
        setMode,
        isMobileScreen,
        activeSection,
        setActiveSection,
        drawerOpen,
        setDrawerOpen,
        toggleDrawer,
      }}
    >
      {children}
    </ViewStoreContext.Provider>
  );
}

export function useViewStore(): ViewState {
  const context = useContext(ViewStoreContext);
  if (!context) {
    throw new Error("useViewStore must be used within a ViewStoreProvider");
  }
  return context;
}
