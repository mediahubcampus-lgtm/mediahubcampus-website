"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CITIES } from "@/lib/constants";

interface City {
  name: string;
  students: number;
  lat: number;
  lng: number;
}

export function formatStudents(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${Math.floor(num / 1000)}k`;
  }
  return num.toString();
}

// France map bounds and projection settings
const MAP_CONFIG = {
  minLat: 41.3,
  maxLat: 51.2,
  minLng: -5.2,
  maxLng: 9.7,
  width: 400,
  height: 400,
  padding: 20,
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

// Calculate marker size based on student count
function getMarkerSize(students: number): number {
  const minSize = 6;
  const maxSize = 22;
  const minStudents = 10000;
  const maxStudents = 750000;

  const normalized =
    (Math.log(students) - Math.log(minStudents)) /
    (Math.log(maxStudents) - Math.log(minStudents));
  return minSize + normalized * (maxSize - minSize);
}

// France outline coordinates (simplified but accurate)
const FRANCE_OUTLINE = [
  { lat: 51.08, lng: 2.54 },   // Dunkerque
  { lat: 50.95, lng: 1.85 },   // Calais
  { lat: 49.45, lng: 0.12 },   // Le Havre
  { lat: 48.65, lng: -1.75 },  // St-Malo
  { lat: 48.38, lng: -4.5 },   // Brest
  { lat: 47.75, lng: -4.1 },   // Quimper
  { lat: 47.28, lng: -2.75 },  // Vannes
  { lat: 47.2, lng: -1.55 },   // Nantes
  { lat: 46.15, lng: -1.15 },  // La Rochelle
  { lat: 45.55, lng: -1.12 },  // Royan
  { lat: 44.65, lng: -1.18 },  // Arcachon
  { lat: 43.48, lng: -1.55 },  // Biarritz
  { lat: 42.7, lng: 0.4 },     // Pyrénées
  { lat: 42.45, lng: 2.9 },    // Perpignan
  { lat: 43.1, lng: 3.05 },    // Narbonne
  { lat: 43.3, lng: 5.05 },    // Marseille
  { lat: 43.12, lng: 5.93 },   // Toulon
  { lat: 43.55, lng: 7.02 },   // Nice
  { lat: 43.77, lng: 7.5 },    // Monaco
  { lat: 45.9, lng: 6.85 },    // Chamonix
  { lat: 46.2, lng: 6.15 },    // Geneva border
  { lat: 47.35, lng: 7.55 },   // Basel border
  { lat: 48.98, lng: 8.23 },   // Strasbourg
  { lat: 49.5, lng: 6.37 },    // Luxembourg border
  { lat: 50.1, lng: 4.8 },     // Belgium border
  { lat: 51.08, lng: 2.54 },   // Back to Dunkerque
].map((p) => latLngToSvg(p.lat, p.lng));

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
function pointsToPath(points: { x: number; y: number }[], tension = 1): string {
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

export default function FranceMap() {
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const cityPositions = useMemo(() => {
    return CITIES.map((city) => ({
      ...city,
      ...latLngToSvg(city.lat, city.lng),
      size: getMarkerSize(city.students),
    }));
  }, []);

  // The network's hub is the biggest node (Île-de-France) — every other city
  // gets a thin animated link to it, so the map reads as a live network
  // rather than a scatter of isolated dots.
  const hub = useMemo(
    () => cityPositions.reduce((a, b) => (b.students > a.students ? b : a)),
    [cityPositions]
  );

  const francePath = useMemo(() => pointsToPath(FRANCE_OUTLINE), []);
  const corsicaPath = useMemo(() => pointsToPath(CORSICA_OUTLINE), []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Map Container */}
      <div
        className="relative aspect-[1/1] md:aspect-[4/4] rounded-3xl border border-[var(--card-border)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1.2px), radial-gradient(circle at 50% 25%, rgba(79,70,229,0.25), rgba(255,255,255,0.02) 65%)",
          backgroundSize: "26px 26px, 100% 100%",
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 20px rgba(79, 70, 229, 0.2))" }}
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="franceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.08" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="networkLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-cyan)" />
              <stop offset="100%" stopColor="var(--accent-purple)" />
            </linearGradient>
            <radialGradient id="hubGlow">
              <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* France mainland outline */}
          <motion.path
            d={francePath}
            fill="url(#franceGradient)"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeOpacity="0.6"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Corsica outline */}
          <motion.path
            d={corsicaPath}
            fill="url(#franceGradient)"
            stroke="var(--primary)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          />

          {/* Network links: every city connects to the hub */}
          <g>
            {cityPositions
              .filter((city) => city.name !== hub.name)
              .map((city, index) => (
                <motion.line
                  key={`link-${city.name}`}
                  x1={hub.x}
                  y1={hub.y}
                  x2={city.x}
                  y2={city.y}
                  stroke="url(#networkLineGradient)"
                  strokeWidth={1.2}
                  strokeOpacity={0.35}
                  strokeDasharray="4 7"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.35,
                    strokeDashoffset: [0, -22],
                  }}
                  transition={{
                    pathLength: { duration: 1, delay: 0.6 + index * 0.03 },
                    opacity: { duration: 0.6, delay: 0.6 + index * 0.03 },
                    strokeDashoffset: {
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1.2,
                    },
                  }}
                />
              ))}
          </g>

          {/* Permanent glow on the hub city, so the network's center reads at a glance */}
          <motion.circle
            cx={hub.x}
            cy={hub.y}
            r={hub.size * 1.8}
            fill="url(#hubGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.12, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ pointerEvents: "none" }}
          />

          {/* City markers */}
          {cityPositions.map((city, index) => {
            const isHovered = hoveredCity?.name === city.name;
            const isSelected = selectedCity?.name === city.name;

            return (
              <g key={city.name}>
                {/* Pulse animation for selected/hovered */}
                {(isHovered || isSelected) && (
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r={city.size}
                    fill="none"
                    stroke="var(--accent-cyan)"
                    strokeWidth="2"
                    initial={{ r: city.size, opacity: 1 }}
                    animate={{ r: city.size * 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}

                {/* Main marker */}
                <motion.circle
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
                  fillOpacity={isHovered || isSelected ? 1 : 0.8}
                  stroke="white"
                  strokeWidth={isHovered || isSelected ? 2 : 1}
                  strokeOpacity={0.8}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() =>
                    setSelectedCity(selectedCity?.name === city.name ? null : city)
                  }
                />

                {/* City label for larger cities or when hovered */}
                {(city.students >= 70000 || isHovered || isSelected) && (
                  <motion.text
                    x={city.x}
                    y={city.y - city.size - 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize={isHovered || isSelected ? "12" : "10"}
                    fontWeight={isHovered || isSelected ? "600" : "400"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    style={{ pointerEvents: "none" }}
                  >
                    {city.name}
                  </motion.text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredCity && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-4 left-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="text-lg font-semibold text-white">
                {hoveredCity.name}
              </div>
              <div className="text-[var(--accent-cyan)] font-medium">
                {formatStudents(hoveredCity.students)} étudiants
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected city info */}
        <AnimatePresence>
          {selectedCity && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute bottom-4 left-4 right-4 bg-[var(--card-bg)] border border-[var(--accent-cyan)]/50 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-white">
                    {selectedCity.name}
                  </div>
                  <div className="text-[var(--text-muted)]">
                    {selectedCity.students.toLocaleString("fr-FR")} étudiants
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCity(null)}
                  className="text-[var(--text-muted)] hover:text-white transition-colors p-2"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
