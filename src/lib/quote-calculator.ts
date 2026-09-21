// Logique de calcul du simulateur de devis, répliquant la feuille
// SIMULATEUR_DEVIS du classeur Excel Regie_Publicitaire_Systeme_Commercial_2026-2027.xlsx,
// avec le barème de dégressif fourni par MediaHub Campus (basé sur le budget total,
// et non sur le nombre de zones comme dans la feuille PARAMETRES de l'Excel, dont le
// barème par nombre de zones n'était pas renseigné - 0% partout).

import { CampusZone } from "./campus-zones";

export const TVA_RATE = 0.2;

// Barème dégressif basé sur le sous-total HT (avant remise)
const DISCOUNT_BRACKETS = [
  { max: 10_000, rate: 0 },
  { max: 20_000, rate: 0.1 },
  { max: 30_000, rate: 0.2 },
  { max: Infinity, rate: 0.25 },
];

export function getDiscountRate(sousTotalHT: number): number {
  const bracket = DISCOUNT_BRACKETS.find((b) => sousTotalHT <= b.max);
  return bracket ? bracket.rate : DISCOUNT_BRACKETS[DISCOUNT_BRACKETS.length - 1].rate;
}

export interface ZoneLineResult {
  zone: CampusZone;
  budgetLigneHT: number;
  audience: number;
  odv: number;
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
 * Calcule un devis pour une sélection de zones et une durée donnée (en semaines).
 * Les coefficients "discipline" et "catégorie" de l'Excel sont neutres (1.0) pour
 * toutes les valeurs actuelles et ne sont donc pas appliqués ici.
 */
export function computeQuote(
  zones: CampusZone[],
  dureeSemaines: number
): QuoteResult {
  const facteurDuree = dureeSemaines / 4;

  const lines: ZoneLineResult[] = zones.map((zone) => ({
    zone,
    budgetLigneHT: zone.budgetBase4sem * facteurDuree,
    audience: zone.audience,
    odv: zone.odv4sem * facteurDuree,
    nbAffiches: Math.round(zone.nbAffiches * facteurDuree),
  }));

  const sousTotalHT = lines.reduce((sum, l) => sum + l.budgetLigneHT, 0);
  const tauxRemise = getDiscountRate(sousTotalHT);
  const montantRemise = sousTotalHT * tauxRemise;
  const budgetHTNet = sousTotalHT - montantRemise;
  const tva = budgetHTNet * TVA_RATE;
  const budgetTTC = budgetHTNet + tva;

  const audienceCumulee = lines.reduce((sum, l) => sum + l.audience, 0);
  const odvCumules = lines.reduce((sum, l) => sum + l.odv, 0);
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
