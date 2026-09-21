"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { blurRevealVariants } from "@/lib/useScrollAnimations";
import { useMascots } from "@/context/MascotContext";
import { CAMPAIGN_TYPES, BUDGET_RANGES } from "@/lib/constants";

const QUOTE_PREFILL_KEY = "mhc_quote_prefill";

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

const initialFormData = {
  name: "",
  email: "",
  company: "",
  campaignType: "",
  zone: "",
  period: "",
  budget: BUDGET_RANGES[0],
  message: "",
};

export default function Contact() {
  const { MASCOTS } = useMascots();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState(initialFormData);

  // Pré-remplissage depuis le simulateur de devis (voir /simulateur-devis)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(QUOTE_PREFILL_KEY);
      if (!raw) return;
      const prefill = JSON.parse(raw);
      setFormData((prev) => ({ ...prev, ...prefill }));
      localStorage.removeItem(QUOTE_PREFILL_KEY);
    } catch {
      // Données de préremplissage absentes ou invalides : on ignore
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialFormData);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Mascot - Desktop */}
        {MASCOTS.contact && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutQuart }}
            className="absolute -left-56 top-1/3 hidden xl:block"
          >
            <Image
              src="/images/cat-mascot/chat-devant-ordi-bulle-icon-mail.png"
              alt="Chat mascotte avec ordinateur"
              width={220}
              height={220}
              className="w-48 h-auto drop-shadow-xl"
            />
          </motion.div>
        )}
        {/* Mascot - Mobile */}
        {MASCOTS.contact && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="xl:hidden flex justify-center mb-6"
          >
            <Image
              src="/images/cat-mascot/chat-devant-ordi-bulle-icon-mail.png"
              alt="Chat mascotte avec ordinateur"
              width={200}
              height={200}
              className="w-20 h-auto drop-shadow-lg"
            />
          </motion.div>
        )}

        <motion.div
          variants={blurRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contactez-
            <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
              nous
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            Discutons de votre prochaine campagne
          </p>
        </motion.div>

            <motion.form
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOutQuart, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Entreprise
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                placeholder="Votre entreprise"
              />
            </div>
            <div>
              <label htmlFor="campaignType" className="block text-sm font-medium mb-2">
                Type de campagne *
              </label>
              <select
                id="campaignType"
                required
                value={formData.campaignType}
                onChange={(e) => setFormData({ ...formData, campaignType: e.target.value })}
                className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
              >
                <option value="" disabled>
                  Choisissez un type
                </option>
                {CAMPAIGN_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="zone" className="block text-sm font-medium mb-2">
                Zone(s) visée(s)
              </label>
              <input
                type="text"
                id="zone"
                value={formData.zone}
                onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                placeholder="ex : Lyon, Bordeaux, Île-de-France..."
              />
            </div>
            <div>
              <label htmlFor="period" className="block text-sm font-medium mb-2">
                Période souhaitée
              </label>
              <input
                type="text"
                id="period"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                placeholder="ex : 4 semaines, octobre 2026"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              Budget indicatif
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"
            >
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[var(--bg-dark)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
              placeholder="Décrivez votre projet..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading" || status === "success"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              status === "success"
                ? "bg-green-500 hover:bg-green-500"
                : status === "error"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[var(--primary)] hover:bg-[var(--primary-hover)]"
            } disabled:cursor-not-allowed text-white`}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle size={18} />
                <span>Message envoyé !</span>
              </>
            ) : status === "error" ? (
              <>
                <AlertCircle size={18} />
                <span>Réessayer</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Envoyer</span>
              </>
            )}
          </motion.button>

          {status === "error" && (
            <p className="mt-3 text-center text-red-400 text-sm">
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
