"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Send, X, Check } from "lucide-react";
import { CAMPUS_ZONES, CampusZone } from "@/lib/campus-zones";
import {
  computeQuote,
  formatEUR,
  formatNumber,
} from "@/lib/quote-calculator";
import { BUDGET_RANGES } from "@/lib/constants";

const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

const DUREE_OPTIONS = [4, 8, 12, 16, 24, 52];

function budgetRangeForAmount(amount: number): string {
  if (amount < 2000) return BUDGET_RANGES[1];
  if (amount < 5000) return BUDGET_RANGES[2];
  if (amount < 15000) return BUDGET_RANGES[3];
  return BUDGET_RANGES[4];
}

export default function QuoteSimulator() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [dureeSemaines, setDureeSemaines] = useState(4);
  const [copied, setCopied] = useState(false);

  const regions = useMemo(() => {
    const map = new Map<string, CampusZone[]>();
    for (const z of CAMPUS_ZONES) {
      if (!map.has(z.region)) map.set(z.region, []);
      map.get(z.region)!.push(z);
    }
    return Array.from(map.entries())
      .map(([region, zones]) => ({
        region,
        zones: zones
          .filter((z) =>
            search.trim() === ""
              ? true
              : z.zone.toLowerCase().includes(search.trim().toLowerCase())
          )
          .sort((a, b) => a.zone.localeCompare(b.zone)),
      }))
      .filter((r) => r.zones.length > 0)
      .sort((a, b) => a.region.localeCompare(b.region));
  }, [search]);

  const selectedZoneObjects = useMemo(
    () => CAMPUS_ZONES.filter((z) => selectedZones.includes(z.zone)),
    [selectedZones]
  );

  const result = useMemo(
    () => computeQuote(selectedZoneObjects, dureeSemaines),
    [selectedZoneObjects, dureeSemaines]
  );

  const toggleZone = (zone: string) => {
    setSelectedZones((prev) =>
      prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone]
    );
  };

  const clearZones = () => setSelectedZones([]);

  const handleRequestQuote = () => {
    const zoneNames = selectedZoneObjects.map((z) => z.zone).join(", ");
    const message = [
      `Devis simulé en ligne :`,
      `Zones (${selectedZoneObjects.length}) : ${zoneNames}`,
      `Durée : ${dureeSemaines} semaines`,
      `Sous-total HT : ${formatEUR(result.sousTotalHT)}`,
      result.tauxRemise > 0
        ? `Remise dégressive : -${Math.round(result.tauxRemise * 100)}% (${formatEUR(
            result.montantRemise
          )})`
        : null,
      `Budget HT net : ${formatEUR(result.budgetHTNet)}`,
      `Budget TTC : ${formatEUR(result.budgetTTC)}`,
    ]
      .filter(Boolean)
      .join("\n");

    const prefill = {
      campaignType: "Affichage Universitaire",
      zone: zoneNames,
      period: `${dureeSemaines} semaines`,
      budget: budgetRangeForAmount(result.budgetTTC),
      message,
    };

    try {
      localStorage.setItem("mhc_quote_prefill", JSON.stringify(prefill));
    } catch {
      // localStorage indisponible (navigation privée, etc.) - on continue sans préremplissage
    }

    router.push("/#contact");
  };

  const handleCopySummary = async () => {
    const zoneNames = selectedZoneObjects.map((z) => z.zone).join(", ");
    const text = [
      `Zones (${selectedZoneObjects.length}) : ${zoneNames || "aucune"}`,
      `Durée : ${dureeSemaines} semaines`,
      `Sous-total HT : ${formatEUR(result.sousTotalHT)}`,
      `Remise : ${Math.round(result.tauxRemise * 100)}%`,
      `Budget HT net : ${formatEUR(result.budgetHTNet)}`,
      `TVA (20%) : ${formatEUR(result.tva)}`,
      `Budget TTC : ${formatEUR(result.budgetTTC)}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponible
    }
  };

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Simulateur de{" "}
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              Devis
            </span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Sélectionnez vos zones et la durée de campagne pour obtenir une
            estimation budgétaire immédiate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Zone selection */}
          <div className="lg:col-span-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
              <h2 className="text-xl font-semibold">
                Zones Campus{" "}
                <span className="text-[var(--text-muted)] font-normal text-base">
                  ({selectedZones.length} sélectionnée
                  {selectedZones.length > 1 ? "s" : ""})
                </span>
              </h2>
              {selectedZones.length > 0 && (
                <button
                  onClick={clearZones}
                  className="text-sm text-[var(--text-muted)] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <X size={14} />
                  Tout désélectionner
                </button>
              )}
            </div>

            <div className="relative mb-4">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une ville..."
                className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg pl-10 pr-4 py-2.5 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>

            <div className="max-h-[480px] overflow-y-auto pr-2 space-y-5">
              {regions.map(({ region, zones }) => (
                <div key={region}>
                  <div className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-2">
                    {region}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {zones.map((z) => {
                      const isSelected = selectedZones.includes(z.zone);
                      return (
                        <button
                          key={z.zone}
                          onClick={() => toggleZone(z.zone)}
                          className={`flex items-center gap-2 text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                            isSelected
                              ? "bg-[var(--primary)]/20 border-[var(--primary)] text-white"
                              : "bg-[var(--bg-dark)] border-[var(--card-border)] text-[var(--text-muted)] hover:border-[var(--primary)]/50 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                              isSelected
                                ? "bg-[var(--primary)] border-[var(--primary)]"
                                : "border-[var(--card-border)]"
                            }`}
                          >
                            {isSelected && <Check size={12} className="text-white" />}
                          </span>
                          <span className="truncate">{z.zone}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              {regions.length === 0 && (
                <p className="text-[var(--text-muted)] text-sm text-center py-8">
                  Aucune ville ne correspond à votre recherche.
                </p>
              )}
            </div>
          </div>

          {/* Results panel */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24">
              <h2 className="text-xl font-semibold mb-4">Votre estimation</h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Durée de campagne
                </label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {DUREE_OPTIONS.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDureeSemaines(d)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                        dureeSemaines === d
                          ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                          : "bg-[var(--bg-dark)] border-[var(--card-border)] text-[var(--text-muted)] hover:border-[var(--primary)]/50 hover:text-white"
                      }`}
                    >
                      {d} sem.
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min={1}
                  value={dureeSemaines}
                  onChange={(e) =>
                    setDureeSemaines(Math.max(1, Number(e.target.value) || 1))
                  }
                  className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>

              {selectedZones.length === 0 ? (
                <p className="text-[var(--text-muted)] text-sm py-6 text-center">
                  Sélectionnez au moins une zone pour voir votre estimation.
                </p>
              ) : (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">
                      Audience cumulée
                    </span>
                    <span className="font-medium">
                      {formatNumber(result.audienceCumulee)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">
                      Occasions de voir
                    </span>
                    <span className="font-medium">
                      {formatNumber(result.odvCumules)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">
                      Affiches posées
                    </span>
                    <span className="font-medium">
                      {formatNumber(result.nbAffichesCumule)}
                    </span>
                  </div>

                  <div className="h-px bg-[var(--card-border)] my-3" />

                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">
                      Sous-total HT
                    </span>
                    <span className="font-medium">
                      {formatEUR(result.sousTotalHT)}
                    </span>
                  </div>
                  {result.tauxRemise > 0 && (
                    <div className="flex justify-between text-sm text-[var(--accent-cyan)]">
                      <span>
                        Remise dégressive (-{Math.round(result.tauxRemise * 100)}%)
                      </span>
                      <span className="font-medium">
                        -{formatEUR(result.montantRemise)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">
                      Budget HT net
                    </span>
                    <span className="font-medium">
                      {formatEUR(result.budgetHTNet)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">TVA (20%)</span>
                    <span className="font-medium">{formatEUR(result.tva)}</span>
                  </div>

                  <div className="h-px bg-[var(--card-border)] my-3" />

                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold">Budget TTC</span>
                    <span className="text-2xl font-bold text-[var(--accent-cyan)]">
                      {formatEUR(result.budgetTTC)}
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <motion.button
                  onClick={handleRequestQuote}
                  disabled={selectedZones.length === 0}
                  whileHover={{ scale: selectedZones.length ? 1.02 : 1 }}
                  whileTap={{ scale: selectedZones.length ? 0.98 : 1 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
                >
                  <Send size={18} />
                  <span>Demander ce devis</span>
                </motion.button>
                <button
                  onClick={handleCopySummary}
                  disabled={selectedZones.length === 0}
                  className="w-full text-sm text-[var(--text-muted)] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors py-2"
                >
                  {copied ? "Résumé copié !" : "Copier le résumé"}
                </button>
              </div>

              <p className="text-xs text-[var(--text-muted)] mt-4">
                Estimation indicative, hors coefficients discipline/catégorie
                et conditions commerciales spécifiques. Un devis définitif
                vous sera transmis par notre équipe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
