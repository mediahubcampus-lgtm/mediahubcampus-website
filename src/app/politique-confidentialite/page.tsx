import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - MediaHub Campus",
  description: "Politique de confidentialité et protection des données personnelles de MediaHub Campus",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="text-[var(--text-muted)]">
              MediaHub Campus s&apos;engage à protéger la vie privée des utilisateurs de son site web.
              Cette politique de confidentialité explique comment nous collectons, utilisons,
              partageons et protégeons vos données personnelles conformément au Règlement Général
              sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Responsable du traitement</h2>
            <p className="text-[var(--text-muted)]">
              Le responsable du traitement des données personnelles est :
            </p>
            <ul className="text-[var(--text-muted)] list-none space-y-1 mt-4">
              <li><strong className="text-white">MediaHub Campus</strong></li>
              <li>Email : {SITE_CONFIG.email}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Données collectées</h2>
            <p className="text-[var(--text-muted)]">
              Nous pouvons collecter les données suivantes :
            </p>
            <ul className="text-[var(--text-muted)] list-disc list-inside space-y-2 mt-4">
              <li><strong className="text-white">Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong className="text-white">Données professionnelles :</strong> nom de l&apos;entreprise, fonction</li>
              <li><strong className="text-white">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
              <li><strong className="text-white">Données de communication :</strong> messages envoyés via le formulaire de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Finalités du traitement</h2>
            <p className="text-[var(--text-muted)]">
              Vos données personnelles sont collectées pour les finalités suivantes :
            </p>
            <ul className="text-[var(--text-muted)] list-disc list-inside space-y-2 mt-4">
              <li>Répondre à vos demandes de contact et de renseignements</li>
              <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Établir des statistiques de fréquentation</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Base légale du traitement</h2>
            <p className="text-[var(--text-muted)]">
              Le traitement de vos données personnelles est fondé sur :
            </p>
            <ul className="text-[var(--text-muted)] list-disc list-inside space-y-2 mt-4">
              <li><strong className="text-white">Votre consentement</strong> pour l&apos;envoi de communications commerciales</li>
              <li><strong className="text-white">L&apos;exécution d&apos;un contrat</strong> ou de mesures précontractuelles</li>
              <li><strong className="text-white">Notre intérêt légitime</strong> pour l&apos;amélioration de nos services</li>
              <li><strong className="text-white">Le respect d&apos;obligations légales</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Destinataires des données</h2>
            <p className="text-[var(--text-muted)]">
              Vos données personnelles peuvent être transmises à :
            </p>
            <ul className="text-[var(--text-muted)] list-disc list-inside space-y-2 mt-4">
              <li>Nos équipes internes (commerciales, marketing, techniques)</li>
              <li>Nos sous-traitants techniques (hébergement, envoi d&apos;emails)</li>
              <li>Les autorités compétentes si la loi l&apos;exige</li>
            </ul>
            <p className="text-[var(--text-muted)] mt-4">
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Durée de conservation</h2>
            <p className="text-[var(--text-muted)]">
              Vos données personnelles sont conservées pendant une durée limitée :
            </p>
            <ul className="text-[var(--text-muted)] list-disc list-inside space-y-2 mt-4">
              <li><strong className="text-white">Données de contact :</strong> 3 ans après le dernier contact</li>
              <li><strong className="text-white">Données clients :</strong> pendant la durée de la relation commerciale + 5 ans</li>
              <li><strong className="text-white">Données de navigation :</strong> 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Vos droits</h2>
            <p className="text-[var(--text-muted)]">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-[var(--text-muted)] list-disc list-inside space-y-2 mt-4">
              <li><strong className="text-white">Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong className="text-white">Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong className="text-white">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong className="text-white">Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong className="text-white">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong className="text-white">Droit de retirer votre consentement</strong> à tout moment</li>
            </ul>
            <p className="text-[var(--text-muted)] mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[var(--accent-cyan)] hover:underline">
                {SITE_CONFIG.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Cookies</h2>
            <p className="text-[var(--text-muted)]">
              Notre site peut utiliser des cookies pour améliorer votre expérience de navigation.
              Les cookies sont de petits fichiers texte stockés sur votre appareil.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Types de cookies utilisés :</h3>
            <ul className="text-[var(--text-muted)] list-disc list-inside space-y-2">
              <li><strong className="text-white">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong className="text-white">Cookies analytiques :</strong> pour mesurer l&apos;audience (anonymisés)</li>
            </ul>
            <p className="text-[var(--text-muted)] mt-4">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Sécurité</h2>
            <p className="text-[var(--text-muted)]">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre tout accès non autorisé,
              modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Transferts internationaux</h2>
            <p className="text-[var(--text-muted)]">
              Certaines de vos données peuvent être transférées vers des pays situés en dehors
              de l&apos;Union Européenne (notamment pour l&apos;hébergement). Dans ce cas, nous nous assurons
              que des garanties appropriées sont en place (clauses contractuelles types, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Réclamation</h2>
            <p className="text-[var(--text-muted)]">
              Si vous estimez que le traitement de vos données personnelles constitue une violation
              de vos droits, vous pouvez introduire une réclamation auprès de la CNIL :
            </p>
            <ul className="text-[var(--text-muted)] list-none space-y-1 mt-4">
              <li><strong className="text-white">Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong></li>
              <li>3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
              <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-cyan)] hover:underline">www.cnil.fr</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Modifications</h2>
            <p className="text-[var(--text-muted)]">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications prendront effet dès leur publication sur le site.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-[var(--card-border)]">
            <p className="text-[var(--text-muted)] text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-2">
              <Link href="/mentions-legales" className="text-[var(--accent-cyan)] hover:underline">
                Voir les mentions légales
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
