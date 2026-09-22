"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { formatStudents } from "@/components/ui/FranceMap";

export default function CityList() {
  const [query, setQuery] = useState("");

  const maxStudents = useMemo(
    () => Math.max(...CITIES.map((c) => c.students)),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? CITIES.filter((c) => c.name.toLowerCase().includes(q))
      : CITIES;
    return [...list].sort((a, b) => b.students - a.students);
  }, [query]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une ville..."
          className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)]/60 transition-colors"
        />
      </div>

      {/* List */}
      <div className="max-h-[420px] overflow-y-auto pr-1 flex flex-col gap-2">
        {filtered.map((city, index) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.4) }}
            className="flex items-center gap-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 hover:border-[var(--accent-cyan)]/40 transition-colors"
          >
            <div className="w-32 sm:w-40 shrink-0 font-medium text-white truncate">
              {city.name}
            </div>
            <div className="flex-grow h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)]"
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.max((city.students / maxStudents) * 100, 4)}%`,
                }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
            </div>
            <div className="w-16 shrink-0 text-right text-sm text-[var(--accent-cyan)] font-semibold">
              {formatStudents(city.students)}
            </div>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center text-[var(--text-muted)] py-8">
            Aucune ville ne correspond à &quot;{query}&quot;
          </div>
        )}
      </div>
    </div>
  );
}
