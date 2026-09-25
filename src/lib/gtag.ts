// Petit utilitaire pour envoyer des événements personnalisés à Google Analytics 4
// (le tag gtag.js est chargé globalement dans src/app/layout.tsx).

type GtagEventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: GtagEventParams): void {
  if (typeof window === "undefined") return;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;

  gtag("event", eventName, params);
}
