"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CookieConsentStatus = "accepted" | "declined" | null;

type CookieConsentContextType = {
  status: CookieConsentStatus;
  isHydrated: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  declineAll: () => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const STORAGE_KEY = "cookieConsent";

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<CookieConsentStatus>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setStatus(stored);
    }
    setIsHydrated(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setStatus("accepted");
    setIsSettingsOpen(false);
  };

  const declineAll = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setStatus("declined");
    setIsSettingsOpen(false);
  };

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <CookieConsentContext.Provider
      value={{ status, isHydrated, isSettingsOpen, acceptAll, declineAll, openSettings, closeSettings }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
}
