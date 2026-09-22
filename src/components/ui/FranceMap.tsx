"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CITIES, type CityData } from "@/lib/constants";

export function formatStudents(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (num >= 1000) {
    return `${Math.round(num / 100) / 10}k`.replace(".0k", "k");
  }
  return num.toString();
}

// France map bounds and projection settings — bounds match the real
// mainland + Corsica extent so the outline below sits correctly.
const MAP_CONFIG = {
  minLat: 41.2,
  maxLat: 51.3,
  minLng: -5.3,
  maxLng: 9.7,
  width: 640,
  height: 640,
  padding: 24,
};

// Convert lat/lng to SVG coordinates for France
function latLngToSvg(lat: number, lng: number): { x: number; y: number } {
  const { minLat, maxLat, minLng, maxLng, width, height, padding } = MAP_CONFIG;
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;

  const x = padding + ((lng - minLng) / (maxLng - minLng)) * usableWidth;
  const y = padding + ((maxLat - lat) / (maxLat - minLat)) * usableHeight;

  return { x, y };
}

// Calculate marker radius based on audience size — area-proportional (sqrt
// scale) rather than log scale, and kept small/tight so 60 markers don't
// overlap ("cannibalize") each other on the map.
function getMarkerSize(students: number): number {
  const minSize = 3.2;
  const maxSize = 15;
  const minStudents = 1100;
  const maxStudents = 750000;

  const normalized = Math.sqrt(
    (students - minStudents) / (maxStudents - minStudents)
  );
  return minSize + normalized * (maxSize - minSize);
}

// France mainland outline — sampled from a real geographic boundary dataset
// (~110 points) for accurate coastlines and borders, then smoothed below.
const FRANCE_OUTLINE_RAW: { lat: number; lng: number }[] = [
  { lat: 47.503, lng: 7.1303 }, { lat: 47.3857, lng: 6.9113 }, { lat: 47.2878, lng: 6.9429 },
  { lat: 47.0282, lng: 6.6616 }, { lat: 46.7482, lng: 6.3951 }, { lat: 46.4639, lng: 6.0739 },
  { lat: 46.2209, lng: 6.0026 }, { lat: 46.2437, lng: 6.3101 }, { lat: 46.3919, lng: 6.4829 },
  { lat: 46.2043, lng: 6.8037 }, { lat: 46.0652, lng: 6.9245 }, { lat: 45.8595, lng: 6.951 },
  { lat: 45.6746, lng: 6.9065 }, { lat: 45.4972, lng: 7.0445 }, { lat: 45.2569, lng: 7.1378 },
  { lat: 45.1484, lng: 6.8123 }, { lat: 45.0215, lng: 6.7257 }, { lat: 44.8506, lng: 6.8632 },
  { lat: 44.68, lng: 7.0597 }, { lat: 44.4773, lng: 6.882 }, { lat: 44.233, lng: 7.0702 },
  { lat: 44.1437, lng: 7.5057 }, { lat: 44.0828, lng: 7.7157 }, { lat: 43.8623, lng: 7.4952 },
  { lat: 43.6861, lng: 7.2972 }, { lat: 43.548, lng: 7.0559 }, { lat: 43.4174, lng: 6.8268 },
  { lat: 43.2788, lng: 6.6773 }, { lat: 43.137, lng: 6.3687 }, { lat: 43.0869, lng: 6.0765 },
  { lat: 43.1176, lng: 5.7732 }, { lat: 43.1753, lng: 5.5691 }, { lat: 43.3569, lng: 5.3239 },
  { lat: 43.3556, lng: 5.0243 }, { lat: 43.3299, lng: 4.833 }, { lat: 43.4433, lng: 4.5621 },
  { lat: 43.5524, lng: 4.0112 }, { lat: 43.3929, lng: 3.6928 }, { lat: 43.1654, lng: 3.1773 },
  { lat: 42.7998, lng: 3.0393 }, { lat: 42.4778, lng: 3.153 }, { lat: 42.4584, lng: 2.9245 },
  { lat: 42.3429, lng: 2.5003 }, { lat: 42.3737, lng: 2.0895 }, { lat: 42.4868, lng: 1.7633 },
  { lat: 42.6336, lng: 1.5857 }, { lat: 42.6995, lng: 1.3544 }, { lat: 42.8056, lng: 0.9599 },
  { lat: 42.6991, lng: 0.6076 }, { lat: 42.7174, lng: 0.2267 }, { lat: 42.8355, lng: -0.2767 },
  { lat: 42.8068, lng: -0.5689 }, { lat: 42.9508, lng: -0.865 }, { lat: 43.0552, lng: -1.2287 },
  { lat: 43.0463, lng: -1.4412 }, { lat: 43.2879, lng: -1.5647 }, { lat: 43.3514, lng: -1.7871 },
  { lat: 43.5723, lng: -1.4919 }, { lat: 44.3192, lng: -1.2775 }, { lat: 44.6472, lng: -1.1408 },
  { lat: 44.7581, lng: -1.18 }, { lat: 45.3576, lng: -1.1589 }, { lat: 45.4634, lng: -0.9741 },
  { lat: 45.0419, lng: -0.5907 }, { lat: 45.5479, lng: -0.9323 }, { lat: 45.7816, lng: -1.2426 },
  { lat: 45.9499, lng: -1.0643 }, { lat: 46.1943, lng: -1.1993 }, { lat: 46.3486, lng: -1.3667 },
  { lat: 46.4749, lng: -1.7559 }, { lat: 47.0735, lng: -2.0326 }, { lat: 47.256, lng: -2.2454 },
  { lat: 47.4124, lng: -2.4839 }, { lat: 47.4958, lng: -2.6813 }, { lat: 47.5473, lng: -2.8189 },
  { lat: 47.619, lng: -2.8512 }, { lat: 47.4738, lng: -3.1294 }, { lat: 47.6804, lng: -3.1666 },
  { lat: 47.7019, lng: -3.3871 }, { lat: 47.8, lng: -4.33 }, { lat: 48.02, lng: -4.5 },
  { lat: 48.28, lng: -4.79 }, { lat: 48.39, lng: -4.77 }, { lat: 48.38, lng: -4.49 },
  { lat: 48.45, lng: -4.56 }, { lat: 48.65, lng: -4.37 }, { lat: 48.75, lng: -3.83 },
  { lat: 48.83, lng: -3.48 }, { lat: 48.78, lng: -3.03 }, { lat: 48.63, lng: -2.55 },
  { lat: 48.61, lng: -2.02 }, { lat: 48.65, lng: -1.65 }, { lat: 48.86, lng: -1.56 },
  { lat: 49.34, lng: -1.62 }, { lat: 49.44, lng: -1.28 }, { lat: 49.35, lng: -0.72 },
  { lat: 49.29, lng: -0.37 }, { lat: 49.5, lng: 0.15 }, { lat: 49.49, lng: 0.11 },
  { lat: 50.0, lng: 1.08 }, { lat: 50.72, lng: 1.6 }, { lat: 50.95, lng: 1.85 },
  { lat: 51.03, lng: 2.35 }, { lat: 50.79, lng: 2.9 }, { lat: 50.76, lng: 3.25 },
  { lat: 50.29, lng: 4.05 }, { lat: 49.98, lng: 4.8 }, { lat: 49.6, lng: 5.3 },
  { lat: 49.45, lng: 6.1 }, { lat: 49.02, lng: 7.6 }, { lat: 48.97, lng: 8.1 },
  { lat: 48.55, lng: 7.75 }, { lat: 47.8, lng: 7.58 },
];

const FRANCE_OUTLINE = FRANCE_OUTLINE_RAW.map((p) => latLngToSvg(p.lat, p.lng));

// Corsica outline
const CORSICA_OUTLINE = [
  { lat: 43.0, lng: 9.4 },
  { lat: 42.7, lng: 9.55 },
  { lat: 41.38, lng: 9.2 },
  { lat: 41.55, lng: 8.75 },
  { lat: 42.15, lng: 8.55 },
  { lat: 42.7, lng: 8.9 },
  { lat: 43.0, lng: 9.4 },
].map((p) => latLngToSvg(p.lat, p.lng));

// Convert points to a smooth closed SVG path (Catmull-Rom → cubic Bézier),
// so the coastline reads as a real map outline instead of a faceted polygon.
function pointsToPath(points: { x: number; y: number }[], tension = 0.75): string {
  const n = points.length;
  if (n === 0) return "";
  if (n < 3) return `M ${points[0].x} ${points[0].y} Z`;

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)} `;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i % n];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const c1x = p1.x + ((p2.x - p0.x) / 6) * tension;
    const c1y = p1.y + ((p2.y - p0.y) / 6) * tension;
    const c2x = p2.x - ((p3.x - p1.x) / 6) * tension;
    const c2y = p2.y - ((p3.y - p1.y) / 6) * tension;
    d += `C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} `;
  }
  return d + "Z";
}

// A city is always labeled above this audience threshold; smaller ones only
// show their name on hover/selection, keeping the map legible with 60 points.
const ALWAYS_LABEL_THRESHOLD = 40000;

export default function FranceMap() {
  const [hoveredCity, setHoveredCity] = useState<CityData | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);

  const cityPositions = useMemo(() => {
    return CITIES.map((city) => ({
      ...city,
      ...latLngToSvg(city.lat, city.lng),
      size: getMarkerSize(city.students),
    }));
  }, []);

  const francePath = useMemo(() => pointsToPath(FRANCE_OUTLINE), []);
  const corsicaPath = useMemo(() => pointsToPath(CORSICA_OUTLINE), []);

  const activeCity = hoveredCity ?? selectedCity;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Map Container */}
      <div
        className="relative aspect-square rounded-3xl border border-[var(--card-border)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1.2px), radial-gradient(circle at 50% 22%, rgba(79,70,229,0.16), rgba(255,255,255,0.02) 65%)",
          backgroundSize: "28px 28px, 100% 100%",
        }}
      >
        <svg
          viewBox="0 0 640 640"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 24px rgba(79, 70, 229, 0.12))" }}
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="franceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.14" />
              <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.07" />
            </linearGradient>
          </defs>

          {/* France mainland outline — static, no looping animation */}
          <motion.path
            d={francePath}
            fill="url(#franceGradient)"
            stroke="var(--primary)"
            strokeWidth="1.75"
            strokeOpacity="0.55"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Corsica outline */}
          <motion.path
            d={corsicaPath}
            fill="url(#franceGradient)"
            stroke="var(--primary)"
            strokeWidth="1.5"
            strokeOpacity="0.55"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          />

          {/* City markers — rendered first, in a layer below all labels, so
              a label can never be hidden behind a neighboring bubble. */}
          <g>
            {cityPositions.map((city) => {
              const isHovered = hoveredCity?.name === city.name;
              const isSelected = selectedCity?.name === city.name;
              return (
                <circle
                  key={city.name}
                  cx={city.x}
                  cy={city.y}
                  r={city.size}
                  fill={
                    isSelected
                      ? "var(--accent-cyan)"
                      : isHovered
                        ? "var(--accent-purple)"
                        : "var(--primary)"
                  }
                  fillOpacity={isHovered || isSelected ? 1 : 0.82}
                  stroke="white"
                  strokeWidth={isHovered || isSelected ? 1.5 : 1}
                  strokeOpacity={0.75}
                  style={{ cursor: "pointer", transition: "fill 0.15s, fill-opacity 0.15s" }}
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() =>
                    setSelectedCity(selectedCity?.name === city.name ? null : city)
                  }
                />
              );
            })}
          </g>

          {/* Labels — always drawn in their own top layer, above every
              bubble, so no city name can ever be masked by a marker. */}
          <g style={{ pointerEvents: "none" }}>
            {cityPositions.map((city) => {
              const isHovered = hoveredCity?.name === city.name;
              const isSelected = selectedCity?.name === city.name;
              const shouldLabel =
                city.students >= ALWAYS_LABEL_THRESHOLD || isHovered || isSelected;
              if (!shouldLabel) return null;

              // Île-de-France is the largest bubble on the map: put its
              // label beside it with a small leader line instead of above,
              // so it's never crowded out by the bubble or nearby cities.
              const isHub = city.name === "Île-de-France";
              const labelX = isHub ? city.x + city.size + 22 : city.x;
              const labelY = isHub ? city.y : city.y - city.size - 6;
              const anchor = isHub ? "start" : "middle";

              return (
                <g key={`label-${city.name}`}>
                  {isHub && (
                    <line
                      x1={city.x + city.size + 2}
                      y1={city.y}
                      x2={labelX - 4}
                      y2={labelY}
                      stroke="white"
                      strokeOpacity={0.4}
                      strokeWidth={1}
                    />
                  )}
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor={anchor}
                    dominantBaseline={isHub ? "middle" : undefined}
                    fill="white"
                    fillOpacity={isHovered || isSelected ? 1 : 0.85}
                    fontSize={isHovered || isSelected ? 12 : isHub ? 13 : 10.5}
                    fontWeight={isHovered || isSelected || isHub ? 600 : 500}
                    style={{ paintOrder: "stroke" }}
                    stroke="var(--bg-dark)"
                    strokeWidth={3}
                    strokeOpacity={0.55}
                  >
                    {city.name}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Tooltip / detail card — same content whether hovered or clicked */}
        <AnimatePresence>
          {activeCity && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:w-72 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-4 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold text-white">
                  {activeCity.name}
                </div>
                {selectedCity && (
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="text-[var(--text-muted)] hover:text-white transition-colors -mr-1"
                    aria-label="Fermer"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="text-xs text-[var(--text-muted)] mb-3">
                {activeCity.region}
                {activeCity.region !== activeCity.departement
                  ? ` · ${activeCity.departement}`
                  : ""}
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                <div>
                  <div className="text-[var(--text-muted)] text-xs">Étudiants touchés</div>
                  <div className="text-[var(--accent-cyan)] font-semibold">
                    {formatStudents(activeCity.students)}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--text-muted)] text-xs">OTS / 4 semaines</div>
                  <div className="text-[var(--accent-cyan)] font-semibold">
                    {formatStudents(activeCity.ots)}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--text-muted)] text-xs">Affiches A2</div>
                  <div className="text-white font-medium">{activeCity.panels}</div>
                </div>
                <div>
                  <div className="text-[var(--text-muted)] text-xs">CPM / 1000 étud.</div>
                  <div className="text-white font-medium">
                    {activeCity.cpm.toLocaleString("fr-FR")} €
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
