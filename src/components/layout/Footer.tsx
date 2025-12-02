import Link from "next/link";
import { Download } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-semibold text-lg">MediaHub Campus</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <a
              href={SITE_CONFIG.pdfUrl}
              download
              className="inline-flex items-center gap-2 bg-[var(--card-bg)] hover:bg-[var(--primary)] border border-[var(--card-border)] text-white px-4 py-2.5 rounded-lg text-sm transition-colors"
            >
              <Download size={16} />
              <span>Télécharger la Plaquette 2025</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            &copy; {new Date().getFullYear()} MediaHub Campus. Tous droits
            réservés.
          </p>
          <Link
            href="/mentions-legales"
            className="text-[var(--text-muted)] hover:text-white text-sm transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
