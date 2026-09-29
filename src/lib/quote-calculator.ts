// Logique de calcul du simulateur de devis, répliquant la feuille SIMULATEUR_DEVIS
// du classeur Excel "Régie Tarification Finale.xlsx".
//
// Correctif du 29/09/2026 (soir) : le mécanisme de "tarification v2" introduit
// plus tôt dans la journée (prix unitaire par établissement ciblé + coefficient
// de dispersion géographique + coefficient "nombre de zones distinctes") faisait
// exploser le budget sur une campagne large (jusqu'à x2,60 dès 46 zones), ce qui
// n'a aucun sens commercial pour une campagne nationale. On revient à la logique
// d'origine, plus simple et plus sûre :
//   Budget ligne = Forfait pack fixe de la zone x Coefficient de typologie x
//                  Ratio durée (nb semaines / 4)
// Le forfait pack ne varie jamais avec le nombre d'établissements réellement
// ciblés (cibler une catégorie/filière ne réduit ni le forfait ni le nombre de
// panneaux facturés). Le nombre d'établissements ciblés reste affiché au client
// à titre d'indicateur de transparence uniquement, il ne pilote pas le prix.
// Aucun multiplicateur ne s'applique plus en fonction du nombre de zones
// sélectionnées : le dégressif volume porte directement sur le sous-total HT.

import { MhcZone } from "./mhc-zones";
import { ESTABLISHMENT_COUNTS } from "./mhc-establishment-counts";

export const TVA_RATE = 0.2;

export type NetworkType = "universites" | "lycees" | "both";

// Barème dégressif (PARAMETRES!B9:D14), basé directement sur le sous-total HT.
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

// Coefficient "Catégorie de lieu ciblée" (Campus uniquement) — barème fourni le
// 29/09/2026 : un lieu à forte valeur commerciale (école de commerce/ingénieur,
// université) coûte plus cher à cibler, un lieu de flux large (restauration)
// coûte moins cher.
export const CATEGORIE_OPTIONS = [
  { value: "Tous", label: "Toutes catégories", coefficient: 1 },
  { value: "École De Commerce", label: "École de Commerce", coefficient: 1.4 },
  { value: "École D'Ingénieur", label: "École d'Ingénieur", coefficient: 1.4 },
  { value: "Universités", label: "Universités", coefficient: 1.05 },
  { value: "Autres", label: "Autres lieux", coefficient: 1 },
  { value: "Iut Et But", label: "IUT & BUT", coefficient: 0.95 },
  { value: "Résidence Étudiante", label: "Résidence Étudiante", coefficient: 0.9 },
  { value: "Arts & Design", label: "Arts & Design", coefficient: 0.9 },
  { value: "Bibliothèque Universitaire", label: "Bibliothèque Universitaire", coefficient: 0.85 },
  { value: "Journalisme & Communication", label: "Journalisme & Communication", coefficient: 0.85 },
  { value: "Restauration Étudiante", label: "Restauration Étudiante", coefficient: 0.75 },
] as const;

// Coefficient "Filière ciblée" (Lycées uniquement) — neutre (1,00) partout pour
// l'instant. Toute filière non renseignée dans la base est classée "Général"
// en amont (extraction des données), il n'existe donc pas de bucket "Non
// précisé" à valoriser ici.
export const FILIERE_OPTIONS = [
  { value: "Tous", label: "Toutes filières", coefficient: 1 },
  { value: "Général", label: "Filière générale", coefficient: 1 },
  { value: "Techno", label: "Filière technologique", coefficient: 1 },
  { value: "Pro", label: "Filière professionnelle", coefficient: 1 },
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
 * formule COUNTIFS de l'Excel), ainsi que le total d'établissements de la
 * zone. Indicateur de transparence affiché au client : "X établissements
 * ciblés sur Y" — ne pilote PAS le calcul du prix.
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
  budgetLigneHT: number;
  audience: number;
  odv: number | null;
  nbAffiches: number;
  etablissementsCibles: number;
  etablissementsTotal: number;
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
  etablissementsCiblesCumules: number;
  etablissementsTotalCumules: number;
  /** Zones sélectionnées qui ne disposent pas du réseau demandé (ex. Béziers pour Universités) */
  zonesSansReseau: string[];
}

/**
 * Calcule un devis pour une sélection de zones, un réseau (Universités,
 * Lycées, ou les deux), une durée donnée (en semaines), et un ciblage
 * optionnel par discipline + catégorie de lieu (Campus) ou par filière
 * (Lycées).
 *
 * Le prix reste calculé sur le forfait pack complet de la zone multiplié par
 * les coefficients de typologie et de durée : cibler une discipline/catégorie
 * ne réduit ni le forfait ni le nombre de panneaux facturés. Le nombre
 * d'établissements ciblés est fourni à titre d'indicateur de transparence
 * uniquement. Aucun multiplicateur ne dépend du nombre de zones sélectionnées.
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

  const lines: ZoneLineResult[] = [];
  const zonesSansReseau: string[] = [];

  for (const zone of zones) {
    if (includeCampus) {
      if (!zone.campus) {
        zonesSansReseau.push(zone.zone);
      } else {
        const counts = getCampusEstablishmentCounts(zone.zone, categorieValue, disciplineValue);
        lines.push({
          zone,
          network: "universites",
          budgetLigneHT: zone.campus.budgetBase4sem * coefDiscipline * coefCategorie * facteurDuree,
          audience: zone.campus.audience,
          odv: zone.campus.odv4sem * facteurDuree,
          nbAffiches: Math.round(zone.campus.nbAffiches * facteurDuree),
          etablissementsCibles: counts.targeted,
          etablissementsTotal: counts.total,
        });
      }
    }
    if (includeLycees) {
      const counts = getLyceeEstablishmentCounts(zone.zone, filiereValue);
      lines.push({
        zone,
        network: "lycees",
        budgetLigneHT: zone.lycee.budgetBase4sem * coefFiliere * facteurDuree,
        audience: zone.lycee.effectifs,
        odv: null,
        nbAffiches: Math.round(zone.lycee.nbAffiches * facteurDuree),
        etablissementsCibles: counts.targeted,
        etablissementsTotal: counts.total,
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
  const etablissementsCiblesCumules = lines.reduce((sum, l) => sum + l.etablissementsCibles, 0);
  const etablissementsTotalCumules = lines.reduce((sum, l) => sum + l.etablissementsTotal, 0);

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
    etablissementsCiblesCumules,
    etablissementsTotalCumules,
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
