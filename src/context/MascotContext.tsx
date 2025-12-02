"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MASCOTS_CONFIG } from "@/lib/constants";

type MascotContextType = {
  mascotsEnabled: boolean;
  toggleMascots: () => void;
  MASCOTS: typeof MASCOTS_CONFIG;
  isHydrated: boolean;
};

const MascotContext = createContext<MascotContextType | undefined>(undefined);

export function MascotProvider({ children }: { children: ReactNode }) {
  // Start with mascots hidden, revealed by clicking the peeking cat
  const [mascotsEnabled, setMascotsEnabled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("mascotsEnabled");
    if (stored === "true") {
      setMascotsEnabled(true);
    }
    setIsHydrated(true);
  }, []);

  const toggleMascots = () => {
    setMascotsEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem("mascotsEnabled", String(newValue));
      return newValue;
    });
  };

  // Generate MASCOTS object based on enabled state
  // Only show mascots after hydration to prevent flash
  const MASCOTS = Object.fromEntries(
    Object.entries(MASCOTS_CONFIG).map(([key, value]) => [
      key,
      isHydrated && mascotsEnabled && value,
    ])
  ) as typeof MASCOTS_CONFIG;

  return (
    <MascotContext.Provider value={{ mascotsEnabled, toggleMascots, MASCOTS, isHydrated }}>
      {children}
    </MascotContext.Provider>
  );
}

export function useMascots() {
  const context = useContext(MascotContext);
  if (context === undefined) {
    throw new Error("useMascots must be used within a MascotProvider");
  }
  return context;
}
