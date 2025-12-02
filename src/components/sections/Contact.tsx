"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { blurRevealVariants } from "@/lib/useScrollAnimations";

// Easing curve
const easeOutQuart = [0.25, 0.1, 0.25, 1] as const;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

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
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="mb-4">
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

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {status === "loading" ? (
              <>
                <span className="animate-spin">⏳</span>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send size={18} />
                Envoyer
              </>
            )}
          </button>

          {status === "success" && (
            <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle size={18} />
              <span>Message envoyé avec succès !</span>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={18} />
              <span>Une erreur est survenue. Veuillez réessayer.</span>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
