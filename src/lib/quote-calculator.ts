// Logique de calcul du simulateur de devis, répliquant la feuille
// SIMULATEUR_DEVIS du classeur Excel Regie_Publicitaire_Systeme_Commercial_2026-2027.xlsx,
// avec le barème de dégressif fourni par MediaHub Campus (basé sur le budget total,
// et non sur le nombre de zones comme dans la feuille PARAMETRES de l'Excel, dont le
// barème par nombre de zones n'était pas renseigné - 0% partout).

import { MhcZone } from "./mhc-zones";

export const TVA_RATE = 0.2;

export type NetworkType = "universites" | "lycees" | "both";

// Barème dégressif basé sur le sous-total HT (avant remise)
const DISCOUNT_BRACKETS = [
  { max: 5_000, rate: 0.05 },
  { max: 10_000, rate: 0.1 },
  { max: 20_000, rate: 0.15 },
  { max: 30_000, rate: 0.2 },
  { max: Infinity, rate: 0.25 },
];

export function getDiscountRate(sousTotalHT: number): number {
  const bracket = DISCOUNT_BRACKETS.find((b) => sousTotalHT <= b.max);
  return bracket ? bracket.rate : DISCOUNT_BRACKETS[DISCOUNT_BRACKETS.length - 1].rate;
}

// Coefficient discipline / filière ciblée. Reprend exactement la feuille
// PARAMETRES de l'Excel (coefficients discipline Campus + filière Lycées).
// Toutes les valeurs y sont neutres (1,00) à ce jour : si MediaHub Campus
// veut valoriser un ciblage plus rare, il suffit de changer les valeurs
// ci-dessous (et de nous prévenir pour qu'on les resynchronise avec l'Excel).
export const DISCIPLINE_OPTIONS = [
  { value: "Tous", label: "Toutes disciplines / filières", coefficient: 1 },
  { value: "Généraliste", label: "Généraliste", coefficient: 1 },
  { value: "Sciences & Ingénierie", label: "Sciences & Ingénierie", coefficient: 1 },
  { value: "Arts & Design", label: "Arts & Design", coefficient: 1 },
  { value: "Commerce & Management", label: "Commerce & Management", coefficient: 1 },
  { value: "Droit & Sciences Po", label: "Droit & Sciences Po", coefficient: 1 },
  { value: "Santé & Paramédical", label: "Santé & Paramédical", coefficient: 1 },
  { value: "Lettres & Sciences Humaines", label: "Lettres & Sciences Humaines", coefficient: 1 },
  { value: "Sport (Staps)", label: "Sport (Staps)", coefficient: 1 },
  { value: "Journalisme & Communication", label: "Journalisme & Communication", coefficient: 1 },
  { value: "Général", label: "Lycée – Filière générale", coefficient: 1 },
  { value: "Techno", label: "Lycée – Filière techno", coefficient: 1 },
  { value: "Pro", label: "Lycée – Filière pro", coefficient: 1 },
] as const;

export function getDisciplineCoefficient(value: string): number {
  return DISCIPLINE_OPTIONS.find((d) => d.value === value)?.coefficient ?? 1;
}

export interface ZoneLineResult {
  zone: MhcZone;
  network: "universites" | "lycees";
  budgetLigneHT: number;
  audience: number;
  odv: number | null;
  nbAffiches: number;
}

export interface QuoteResult {
  lines: ZoneLineResult[];
  dureeSemaines: number;
  sousTotalHT: number;
  tauxRemise: number;
  montantRemise: number;
  budgetHTNet: number;
  tva: number;
  budgetTTC: number;
  audienceCumulee: number;
  odvCumules: number;
  nbAffichesCumule: number;
}

/**
 * Calcule un devis pour une sélection de zones, un réseau (Universités,
 * Lycées, ou les deux), une discipline/filière ciblée et une durée
 * donnée (en semaines). Le coefficient "catégorie de lieu" de l'Excel
 * (Résidence étudiante, Bibliothèque, etc.) est neutre (1.0) pour toutes
 * les valeurs actuelles et n'est donc pas exposé dans le simulateur.
 */
export function computeQuote(
  zones: MhcZone[],
  dureeSemaines: number,
  network: NetworkType = "universites",
  disciplineValue = "Tous"
): QuoteResult {
  const facteurDuree = dureeSemaines / 4;
  const coefDiscipline = getDisciplineCoefficient(disciplineValue);
  const includeCampus = network === "universites" || network === "both";
  const includeLycees = network === "lycees" || network === "both";

  const lines: ZoneLineResult[] = [];

  for (const zone of zones) {
    if (includeCampus) {
      lines.push({
        zone,
        network: "universites",
        budgetLigneHT: zone.campus.budgetBase4sem * coefDiscipline * facteurDuree,
        audience: zone.campus.audience,
        odv: zone.campus.odv4sem * facteurDuree,
        nbAffiches: Math.round(zone.campus.nbAffiches * facteurDuree),
      });
    }
    if (includeLycees) {
      lines.push({
        zone,
        network: "lycees",
        budgetLigneHT: zone.lycee.budgetBase4sem * coefDiscipline * facteurDuree,
        audience: zone.lycee.effectifs,
        odv: null,
        nbAffiches: Math.round(zone.lycee.nbAffiches * facteurDuree),
      });
    }
  }

  const sousTotalHT = lines.reduce((sum, l) => sum + l.budgetLigneHT, 0);
  const tauxRemise = getDiscountRate(sousTotalHT);
  const montantRemise = sousTotalHT * tauxRemise;
  const budgetHTNet = sousTotalHT - montantRemise;
  const tva = budgetHTNet * TVA_RATE;
  const budgetTTC = budgetHTNet + tva;

  const audienceCumulee = lines.reduce((sum, l) => sum + l.audience, 0);
  const odvCumules = lines.reduce((sum, l) => sum + (l.odv ?? 0), 0);
  const nbAffichesCumule = lines.reduce((sum, l) => sum + l.nbAffiches, 0);

  return {
    lines,
    dureeSemaines,
    sousTotalHT,
    tauxRemise,
    montantRemise,
    budgetHTNet,
    tva,
    budgetTTC,
    audienceCumulee,
    odvCumules,
    nbAffichesCumule,
  };
}

export function formatEUR(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(Math.round(value));
}
