// Logique de calcul du simulateur de devis, répliquant la feuille SIMULATEUR_DEVIS
// du classeur Excel "Régie Tarification Finale.xlsx" (barème et mécanique validés
// le 29/09/2026). Toute divergence avec l'Excel doit être corrigée ici, jamais
// contournée côté UI : cette Excel est la source de vérité commerciale.
//
// Changements majeurs par rapport à la version précédente (basée sur l'ancien
// classeur) :
// - Quand une ligne cible un sous-ensemble de la zone (catégorie/discipline pour
//   le Campus, filière pour les Lycées), le budget de la ligne n'est plus le
//   budget de la zone entière multiplié par un coefficient : il est recalculé au
//   "prix unitaire de ciblage" (prix par établissement, PARAMETRES) multiplié par
//   le nombre exact d'établissements concernés (comptage croisé, feuilles
//   BASE_CAMPUS / BASE_LYCEES).
// - Un nouveau coefficient de dispersion géographique, fixe par zone, s'applique
//   au budget de la ligne dès qu'elle cible un sous-ensemble (une zone très
//   étalée reste coûteuse à desservir même en ciblant moins d'établissements).
// - Un nouveau coefficient "nombre de zones distinctes" s'applique au sous-total
//   HT du devis entier (avant le dégressif volume), pour refléter le coût de
//   coordination logistique d'un devis multi-zones.
// - Le dégressif volume se calcule désormais sur (sous-total HT x coefficient
//   nombre de zones), et non plus sur le sous-total HT seul.
// - Quand une ligne cible un sous-ensemble, l'audience/les effectifs de cette
//   ligne deviennent non disponibles ("ND" dans l'Excel) : ils ne sont plus
//   fiables à l'échelle d'un sous-ensemble d'établissements et sont exclus des
//   cumuls, avec une mention "cumul partiel" côté résultats.
// - Le nombre d'affiches d'une ligne ciblée est proratisé au nombre
//   d'établissements ciblés / nombre total d'établissements de la zone.

import { MhcZone } from "./mhc-zones";
import { ESTABLISHMENT_COUNTS } from "./mhc-establishment-counts";

export const TVA_RATE = 0.2;

export type NetworkType = "universites" | "lycees" | "both";

// Barème dégressif (PARAMETRES!B9:D14), basé sur le sous-total HT une fois
// multiplié par le coefficient "nombre de zones distinctes" (voir J23 / J21*L22
// dans SIMULATEUR_DEVIS).
const DISCOUNT_BRACKETS = [
  { max: 5_000, rate: 0.05 },
  { max: 10_000, rate: 0.1 },
  { max: 20_000, rate: 0.15 },
  { max: 30_000, rate: 0.2 },
  { max: Infinity, rate: 0.25 },
];

export function getDiscountRate(base: number): number {
  const bracket = DISCOUNT_BRACKETS.find((b) => base <= b.max);
  return bracket ? bracket.rate : DISCOUNT_BRACKETS[DISCOUNT_BRACKETS.length - 1].rate;
}

// Coefficient "nombre de zones distinctes" (PARAMETRES!B79:D88). S'applique au
// nombre de LIGNES du devis (une zone sélectionnée sur les deux réseaux compte
// pour deux lignes), pas au nombre de zones distinctes au sens strict - c'est le
// comportement exact de la formule Excel J22 = COUNTIF(B10:B19,"?*").
const ZONE_COUNT_BRACKETS = [
  { min: 1, max: 1, coefficient: 1 },
  { min: 2, max: 2, coefficient: 1.15 },
  { min: 3, max: 3, coefficient: 1.28 },
  { min: 4, max: 5, coefficient: 1.4 },
  { min: 6, max: 10, coefficient: 1.6 },
  { min: 11, max: 15, coefficient: 1.8 },
  { min: 16, max: 30, coefficient: 2.05 },
  { min: 31, max: 45, coefficient: 2.3 },
  { min: 46, max: Infinity, coefficient: 2.6 },
];

export function getZoneCountCoefficient(nbLignes: number): number {
  if (nbLignes <= 0) return 1;
  const bracket = ZONE_COUNT_BRACKETS.find((b) => nbLignes >= b.min && nbLignes <= b.max);
  return bracket ? bracket.coefficient : ZONE_COUNT_BRACKETS[ZONE_COUNT_BRACKETS.length - 1].coefficient;
}

// Coefficient "Discipline ciblée" (Campus uniquement). Reprend la feuille
// PARAMETRES de l'Excel. Toutes les valeurs y sont neutres (1,00) à ce jour.
export const DISCIPLINE_OPTIONS = [
  { value: "Tous", label: "Toutes disciplines", coefficient: 1 },
  { value: "Généraliste", label: "Généraliste", coefficient: 1 },
  { value: "Sciences & Ingénierie", label: "Sciences & Ingénierie", coefficient: 1 },
  { value: "Arts & Design", label: "Arts & Design", coefficient: 1 },
  { value: "Commerce & Management", label: "Commerce & Management", coefficient: 1 },
  { value: "Droit & Sciences Po", label: "Droit & Sciences Po", coefficient: 1 },
  { value: "Santé & Paramédical", label: "Santé & Paramédical", coefficient: 1 },
  { value: "Lettres & Sciences Humaines", label: "Lettres & Sciences Humaines", coefficient: 1 },
  { value: "Sport (Staps)", label: "Sport (Staps)", coefficient: 1 },
  { value: "Journalisme & Communication", label: "Journalisme & Communication", coefficient: 1 },
] as const;

// Coefficient "Catégorie de lieu ciblée" (Campus uniquement). Valeurs
// inchangées par rapport à l'ancien classeur (mise à jour du 25/09/2026).
export const CATEGORIE_OPTIONS = [
  { value: "Tous", label: "Toutes catégories", coefficient: 1 },
  { value: "Universités", label: "Universités", coefficient: 1.05 },
  { value: "Résidence Étudiante", label: "Résidence Étudiante", coefficient: 0.9 },
  { value: "Restauration Étudiante", label: "Restauration Étudiante", coefficient: 0.75 },
  { value: "Iut Et But", label: "IUT & BUT", coefficient: 0.95 },
  { value: "École De Commerce", label: "École de Commerce", coefficient: 1.4 },
  { value: "École D'Ingénieur", label: "École d'Ingénieur", coefficient: 1.4 },
  { value: "Arts & Design", label: "Arts & Design", coefficient: 0.9 },
  { value: "Journalisme & Communication", label: "Journalisme & Communication", coefficient: 0.85 },
  { value: "Bibliothèque Universitaire", label: "Bibliothèque Universitaire", coefficient: 0.85 },
  { value: "Autres", label: "Autres lieux", coefficient: 1 },
] as const;

// Coefficient "Filière ciblée" (Lycées uniquement). Reprend la feuille
// PARAMETRES de l'Excel. Toutes les valeurs y sont neutres (1,00) à ce jour.
export const FILIERE_OPTIONS = [
  { value: "Tous", label: "Toutes filières", coefficient: 1 },
  { value: "Général", label: "Filière générale", coefficient: 1 },
  { value: "Techno", label: "Filière technologique", coefficient: 1 },
  { value: "Pro", label: "Filière professionnelle", coefficient: 1 },
  { value: "Non précisé", label: "Non précisé", coefficient: 1 },
] as const;

export function getDisciplineCoefficient(value: string): number {
  return DISCIPLINE_OPTIONS.find((d) => d.value === value)?.coefficient ?? 1;
}

export function getCategorieCoefficient(value: string): number {
  return CATEGORIE_OPTIONS.find((c) => c.value === value)?.coefficient ?? 1;
}

export function getFiliereCoefficient(value: string): number {
  return FILIERE_OPTIONS.find((f) => f.value === value)?.coefficient ?? 1;
}

/**
 * Nombre exact d'établissements Campus d'une zone correspondant à une
 * discipline et/ou une catégorie donnée (comptage croisé identique à la
 * formule COUNTIFS de la ligne E10 de SIMULATEUR_DEVIS), ainsi que le total
 * d'établissements de la zone.
 */
export function getCampusEstablishmentCounts(
  zoneName: string,
  categorieValue: string,
  disciplineValue: string
): { targeted: number; total: number } {
  const c = ESTABLISHMENT_COUNTS.campus;
  const total = c.total[zoneName] ?? 0;
  const wantsCategorie = categorieValue !== "Tous";
  const wantsDiscipline = disciplineValue !== "Tous";
  if (!wantsCategorie && !wantsDiscipline) {
    return { targeted: total, total };
  }
  if (wantsCategorie && wantsDiscipline) {
    const targeted = c.crossed[zoneName]?.[disciplineValue]?.[categorieValue] ?? 0;
    return { targeted, total };
  }
  if (wantsCategorie) {
    return { targeted: c.byCategorie[zoneName]?.[categorieValue] ?? 0, total };
  }
  return { targeted: c.byDiscipline[zoneName]?.[disciplineValue] ?? 0, total };
}

export function getLyceeEstablishmentCounts(
  zoneName: string,
  filiereValue: string
): { targeted: number; total: number } {
  const total = ESTABLISHMENT_COUNTS.lycee.total[zoneName] ?? 0;
  if (filiereValue === "Tous") {
    return { targeted: total, total };
  }
  const targeted = ESTABLISHMENT_COUNTS.lycee.byFiliere[zoneName]?.[filiereValue] ?? 0;
  return { targeted, total };
}

export interface ZoneLineResult {
  zone: MhcZone;
  network: "universites" | "lycees";
  isTargeted: boolean;
  budgetLigneHT: number;
  /** null = non disponible (ND) : ligne ciblée sur un sous-ensemble d'établissements */
  audience: number | null;
  odv: number | null;
  nbAffiches: number;
  etablissementsCibles: number;
  etablissementsTotal: number;
}

export interface QuoteResult {
  lines: ZoneLineResult[];
  dureeSemaines: number;
  nbLignes: number;
  coefficientZones: number;
  sousTotalHT: number;
  tauxRemise: number;
  montantRemise: number;
  budgetHTNet: number;
  tva: number;
  budgetTTC: number;
  audienceCumulee: number;
  odvCumules: number;
  nbAffichesCumule: number;
  etablissementsCiblesCumules: number;
  etablissementsTotalCumules: number;
  /** Des lignes ciblées sur un sous-ensemble rendent l'audience/effectifs cumulés partiels (ND exclus) */
  audiencePartielle: boolean;
  /** Idem pour les ODV cumulés (Campus) */
  odvPartiels: boolean;
  /** Zones sélectionnées qui ne disposent pas du réseau demandé (ex. Béziers pour Universités) */
  zonesSansReseau: string[];
}

/**
 * Calcule un devis pour une sélection de zones, un réseau (Universités,
 * Lycées, ou les deux), une durée donnée (en semaines), et un ciblage
 * optionnel par discipline + catégorie de lieu (Campus) ou par filière
 * (Lycées).
 *
 * Réplique fidèlement la feuille SIMULATEUR_DEVIS de l'Excel "Régie
 * Tarification Finale.xlsx" (barème validé le 29/09/2026) : prix unitaire de
 * ciblage quand un sous-ensemble d'établissements est visé, coefficient de
 * dispersion géographique fixe par zone, coefficient "nombre de zones" sur le
 * sous-total avant dégressif, et statut ND pour l'audience/les effectifs des
 * lignes ciblées.
 */
export function computeQuote(
  zones: MhcZone[],
  dureeSemaines: number,
  network: NetworkType = "universites",
  categorieValue = "Tous",
  disciplineValue = "Tous",
  filiereValue = "Tous"
): QuoteResult {
  const facteurDuree = dureeSemaines / 4;
  const coefDiscipline = getDisciplineCoefficient(disciplineValue);
  const coefCategorie = getCategorieCoefficient(categorieValue);
  const coefFiliere = getFiliereCoefficient(filiereValue);
  const includeCampus = network === "universites" || network === "both";
  const includeLycees = network === "lycees" || network === "both";
  const campusTargeted = categorieValue !== "Tous" || disciplineValue !== "Tous";
  const lyceeTargeted = filiereValue !== "Tous";

  const lines: ZoneLineResult[] = [];
  const zonesSansReseau: string[] = [];

  for (const zone of zones) {
    if (includeCampus) {
      if (!zone.campus) {
        zonesSansReseau.push(zone.zone);
      } else {
        const counts = getCampusEstablishmentCounts(zone.zone, categorieValue, disciplineValue);
        const budgetBase = campusTargeted
          ? counts.targeted * zone.campus.prixUnitaireCiblage
          : zone.campus.budgetBase4sem;
        const coefDispersion = campusTargeted ? zone.campus.coefDispersion : 1;
        const budgetLigneHT = budgetBase * coefDiscipline * coefCategorie * facteurDuree * coefDispersion;
        const ratioEtablissements =
          zone.campus.nbLignesReel > 0 ? counts.targeted / zone.campus.nbLignesReel : 0;
        lines.push({
          zone,
          network: "universites",
          isTargeted: campusTargeted,
          budgetLigneHT,
          audience: campusTargeted ? null : zone.campus.audience,
          odv: campusTargeted ? null : zone.campus.odv4sem * facteurDuree,
          nbAffiches: Math.round(
            zone.campus.nbAffiches * (campusTargeted ? ratioEtablissements : 1) * facteurDuree
          ),
          etablissementsCibles: counts.targeted,
          etablissementsTotal: counts.total,
        });
      }
    }
    if (includeLycees) {
      const counts = getLyceeEstablishmentCounts(zone.zone, filiereValue);
      const budgetBase = lyceeTargeted
        ? counts.targeted * zone.lycee.prixUnitaireCiblage
        : zone.lycee.budgetBase4sem;
      const coefDispersion = lyceeTargeted ? zone.lycee.coefDispersion : 1;
      const budgetLigneHT = budgetBase * coefFiliere * facteurDuree * coefDispersion;
      const ratioEtablissements = zone.lycee.nbLycees > 0 ? counts.targeted / zone.lycee.nbLycees : 0;
      lines.push({
        zone,
        network: "lycees",
        isTargeted: lyceeTargeted,
        budgetLigneHT,
        audience: lyceeTargeted ? null : zone.lycee.effectifs,
        odv: null,
        nbAffiches: Math.round(
          zone.lycee.nbAffiches * (lyceeTargeted ? ratioEtablissements : 1) * facteurDuree
        ),
        etablissementsCibles: counts.targeted,
        etablissementsTotal: counts.total,
      });
    }
  }

  const nbLignes = lines.length;
  const coefficientZones = getZoneCountCoefficient(nbLignes);
  const sousTotalHT = lines.reduce((sum, l) => sum + l.budgetLigneHT, 0);
  const tauxRemise = getDiscountRate(sousTotalHT * coefficientZones);
  const budgetHTNet = sousTotalHT * coefficientZones * (1 - tauxRemise);
  const montantRemise = sousTotalHT * coefficientZones - budgetHTNet;
  const tva = budgetHTNet * TVA_RATE;
  const budgetTTC = budgetHTNet + tva;

  const audienceCumulee = lines.reduce((sum, l) => sum + (l.audience ?? 0), 0);
  const odvCumules = lines
    .filter((l) => l.network === "universites")
    .reduce((sum, l) => sum + (l.odv ?? 0), 0);
  const nbAffichesCumule = lines.reduce((sum, l) => sum + l.nbAffiches, 0);
  const etablissementsCiblesCumules = lines.reduce((sum, l) => sum + l.etablissementsCibles, 0);
  const etablissementsTotalCumules = lines.reduce((sum, l) => sum + l.etablissementsTotal, 0);
  const audiencePartielle = lines.some((l) => l.audience === null);
  const odvPartiels = lines.some((l) => l.network === "universites" && l.odv === null);

  return {
    lines,
    dureeSemaines,
    nbLignes,
    coefficientZones,
    sousTotalHT,
    tauxRemise,
    montantRemise,
    budgetHTNet,
    tva,
    budgetTTC,
    audienceCumulee,
    odvCumules,
    nbAffichesCumule,
    etablissementsCiblesCumules,
    etablissementsTotalCumules,
    audiencePartielle,
    odvPartiels,
    zonesSansReseau,
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
