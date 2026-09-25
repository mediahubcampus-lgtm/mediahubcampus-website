"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CITIES, type CityData } from "@/lib/constants";
import { formatStudents } from "@/lib/format";
import { useLanguage } from "@/context/LanguageContext";

interface RegionGroup {
  region: string;
  total: number;
  cities: CityData[];
  color: string;
}

// Generate a palette that sweeps from the site's cyan accent to its purple
// accent, so every slice stays on-brand instead of picking arbitrary hues.
function paletteFor(count: number): string[] {
  const cyan = { h: 187, s: 85, l: 58 };
  const purple = { h: 258, s: 70, l: 72 };
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : i / (count - 1);
    const h = cyan.h + (purple.h - cyan.h) * t;
    const s = cyan.s + (purple.s - cyan.s) * t;
    const l = cyan.l + (purple.l - cyan.l) * t;
    colors.push(`hsl(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%)`);
  }
  return colors;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// Donut slice path with a small gap between segments for an "aéré" feel.
function donutSlicePath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number
) {
  const gap = 1.2; // degrees
  const a0 = startAngle + gap / 2;
  const a1 = endAngle - gap / 2;
  const largeArc = a1 - a0 > 180 ? 1 : 0;

  const o0 = polarToCartesian(cx, cy, outerR, a0);
  const o1 = polarToCartesian(cx, cy, outerR, a1);
  const i0 = polarToCartesian(cx, cy, innerR, a1);
  const i1 = polarToCartesian(cx, cy, innerR, a0);

  return [
    `M ${o0.x.toFixed(2)} ${o0.y.toFixed(2)}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${o1.x.toFixed(2)} ${o1.y.toFixed(2)}`,
    `L ${i0.x.toFixed(2)} ${i0.y.toFixed(2)}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${i1.x.toFixed(2)} ${i1.y.toFixed(2)}`,
    "Z",
  ].join(" ");
}

const SIZE = 320;
const CENTER = SIZE / 2;
const OUTER_R = 140;
const INNER_R = 82;

export default function CityPieChart() {
  const { t, locale } = useLanguage();
  const decimalSeparator = locale === "fr" || locale === "es" ? "," : ".";
  const cityWord = (count: number) =>
    count > 1 ? t("cityPieChart.cityCount.other", { count }) : t("cityPieChart.cityCount.one", { count });
  const regions: RegionGroup[] = useMemo(() => {
    const map = new Map<string, CityData[]>();
    for (const city of CITIES) {
      const list = map.get(city.region) ?? [];
      list.push(city);
      map.set(city.region, list);
    }
    const grouped = Array.from(map.entries()).map(([region, cities]) => ({
      region,
      total: cities.reduce((sum, c) => sum + c.students, 0),
      cities: [...cities].sort((a, b) => b.students - a.students),
    }));
    grouped.sort((a, b) => b.total - a.total);
    const colors = paletteFor(grouped.length);
    return grouped.map((g, i) => ({ ...g, color: colors[i] }));
  }, []);

  const totalStudents = useMemo(
    () => regions.reduce((sum, r) => sum + r.total, 0),
    [regions]
  );

  const [selectedRegion, setSelectedRegion] = useState<string | null>(
    regions[0]?.region ?? null
  );
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const slices = useMemo(() => {
    let angle = 0;
    return regions.map((r) => {
      const sweep = (r.total / totalStudents) * 360;
      const slice = { ...r, startAngle: angle, endAngle: angle + sweep };
      angle += sweep;
      return slice;
    });
  }, [regions, totalStudents]);

  const activeRegion = hoveredRegion ?? selectedRegion;
  const activeGroup = regions.find((r) => r.region === activeRegion);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Donut chart */}
        <div className="relative mx-auto" style={{ width: SIZE, height: SIZE, maxWidth: "100%" }}>
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-full">
            {slices.map((slice) => {
              const isActive = activeRegion === slice.region;
              return (
                <motion.path
                  key={slice.region}
                  d={donutSlicePath(
                    CENTER,
                    CENTER,
                    isActive ? OUTER_R + 6 : OUTER_R,
                    INNER_R,
                    slice.startAngle,
                    slice.endAngle
                  )}
                  fill={slice.color}
                  fillOpacity={isActive || !activeRegion ? 1 : 0.4}
                  style={{ cursor: "pointer" }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredRegion(slice.region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() =>
                    setSelectedRegion(
                      selectedRegion === slice.region ? null : slice.region
                    )
                  }
                />
              );
            })}
          </svg>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">
              {formatStudents(totalStudents, decimalSeparator)}
            </div>
            <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
              {t("cityPieChart.studentsReached")}
            </div>
            <div className="text-[10px] sm:text-xs text-[var(--text-muted)]/70 mt-2">
              {t("cityPieChart.citiesRegions", { cities: CITIES.length, regions: regions.length })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-1.5 max-h-[380px] overflow-y-auto pr-1">
          {regions.map((r) => {
            const isActive = activeRegion === r.region;
            const pct = ((r.total / totalStudents) * 100).toFixed(1);
            return (
              <button
                key={r.region}
                onClick={() =>
                  setSelectedRegion(selectedRegion === r.region ? null : r.region)
                }
                onMouseEnter={() => setHoveredRegion(r.region)}
                onMouseLeave={() => setHoveredRegion(null)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  isActive
                    ? "bg-[var(--card-bg)] border border-[var(--card-border)]"
                    : "border border-transparent hover:bg-[var(--card-bg)]/60"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: r.color }}
                />
                <span className="flex-grow min-w-0">
                  <span className="block text-sm font-medium text-white truncate">
                    {r.region}
                  </span>
                  <span className="block text-xs text-[var(--text-muted)]">
                    {cityWord(r.cities.length)}
                  </span>
                </span>
                <span className="text-right shrink-0">
                  <span className="block text-sm font-semibold text-[var(--accent-cyan)]">
                    {formatStudents(r.total, decimalSeparator)}
                  </span>
                  <span className="block text-xs text-[var(--text-muted)]">{pct}%</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded per-city breakdown for the selected/hovered region — this
          is where small cities get their own visible row instead of being
          buried in one giant 60-row list. */}
      <AnimatePresence mode="wait">
        {activeGroup && (
          <motion.div
            key={activeGroup.region}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-8 pt-8 border-t border-[var(--card-border)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeGroup.color }}
              />
              <h4 className="text-white font-semibold">{activeGroup.region}</h4>
              <span className="text-[var(--text-muted)] text-sm">
                — {cityWord(activeGroup.cities.length)}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {activeGroup.cities.map((city) => {
                const max = activeGroup.cities[0].students;
                return (
                  <div
                    key={city.name}
                    className="flex items-center gap-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-3 py-2"
                  >
                    <span className="w-28 shrink-0 text-sm font-medium text-white truncate">
                      {city.name}
                    </span>
                    <span className="flex-grow h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <span
                        className="block h-full rounded-full"
                        style={{
                          width: `${Math.max((city.students / max) * 100, 6)}%`,
                          backgroundColor: activeGroup.color,
                        }}
                      />
                    </span>
                    <span className="w-12 shrink-0 text-right text-xs text-[var(--accent-cyan)] font-semibold">
                      {formatStudents(city.students, decimalSeparator)}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
