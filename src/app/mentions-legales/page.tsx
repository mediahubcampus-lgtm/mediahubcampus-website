import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales - MediaHub Campus",
  description: "Mentions légales du site MediaHub Campus",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Mentions Légales</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Éditeur du site</h2>
            <p className="text-[var(--text-muted)]">
              Le site <strong className="text-white">mediahubcampus.com</strong> est édité par{" "}
              <strong className="text-white">MediaHub Campus</strong>.
            </p>
            <p className="text-[var(--text-muted)] mt-2">
              Email : <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--accent-cyan)] hover:underline">{SITE_CONFIG.email}</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Hébergement</h2>
            <p className="text-[var(--text-muted)]">
              Le site est hébergé par :
            </p>
            <ul className="text-[var(--text-muted)] list-none space-y-1 mt-4">
              <li><strong className="text-white">Hébergeur :</strong> Vercel Inc.</li>
              <li><strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
              <li><strong className="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-cyan)] hover:underline">vercel.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Conception et développement</h2>
            <p className="text-[var(--text-muted)]">
              Le site a été conçu et développé par :
            </p>
            <ul className="text-[var(--text-muted)] list-none space-y-1 mt-4">
              <li><strong className="text-white">Designer & Développeur :</strong> Camille MALEK</li>
              <li><strong className="text-white">Société :</strong> Custom Digital</li>
              <li><strong className="text-white">Site web :</strong> <a href="https://customdigital.fr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-cyan)] hover:underline">customdigital.fr</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Propriété intellectuelle</h2>
            <p className="text-[var(--text-muted)]">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
              est la propriété exclusive de MediaHub Campus ou de ses partenaires et est protégé par les lois
              françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="text-[var(--text-muted)] mt-4">
              Toute reproduction, représentation, modification, publication, transmission, dénaturation,
              totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque
              support que ce soit est interdite sans l&apos;autorisation écrite préalable de MediaHub Campus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Données personnelles</h2>
            <p className="text-[var(--text-muted)]">
              Les informations concernant la collecte et le traitement de vos données personnelles sont
              détaillées dans notre{" "}
              <Link href="/politique-confidentialite" className="text-[var(--accent-cyan)] hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Cookies</h2>
            <p className="text-[var(--text-muted)]">
              Le site MediaHub Campus peut être amené à utiliser des cookies pour améliorer l&apos;expérience
              utilisateur. Pour plus d&apos;informations sur l&apos;utilisation des cookies, veuillez consulter notre{" "}
              <Link href="/politique-confidentialite" className="text-[var(--accent-cyan)] hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation de responsabilité</h2>
            <p className="text-[var(--text-muted)]">
              MediaHub Campus s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées
              sur ce site. Toutefois, MediaHub Campus ne peut garantir l&apos;exactitude, la précision ou
              l&apos;exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-[var(--text-muted)] mt-4">
              MediaHub Campus décline toute responsabilité pour toute imprécision, inexactitude ou omission
              portant sur des informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Droit applicable</h2>
            <p className="text-[var(--text-muted)]">
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-[var(--card-border)]">
            <p className="text-[var(--text-muted)] text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
