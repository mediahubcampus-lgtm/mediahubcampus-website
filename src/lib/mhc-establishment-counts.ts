// Comptage d'établissements par zone, catégorie/discipline (Campus) et filière (Lycées),
// extrait du classeur Excel "Régie Publicitaire Finale 2026-2027.xlsx" (feuilles
// BASE_CAMPUS et BASE_LYCEES, colonne "Zone attribuée", lignes "HORS GRILLE" exclues).
// Utilisé uniquement à titre d'indicateur de transparence dans le simulateur de devis
// ("X établissements ciblés sur Y") : ne pilote PAS le calcul du prix, qui reste basé
// sur le budget de zone × coefficient (cf. quote-calculator.ts).
// Ne pas éditer à la main : régénérer depuis l'Excel si le réseau change.

export interface EstablishmentCounts {
  campus: {
    total: Record<string, number>;
    byCategorie: Record<string, Record<string, number>>;
    byDiscipline: Record<string, Record<string, number>>;
  };
  lycee: {
    total: Record<string, number>;
    byFiliere: Record<string, Record<string, number>>;
  };
}

export const ESTABLISHMENT_COUNTS: EstablishmentCounts = {
  "campus": {
    "byCategorie": {
      "AGEN": {
        "Arts & Design": 1,
        "Autres": 6,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 2,
        "Restauration Étudiante": 4,
        "Résidence Étudiante": 1,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "AIX-EN-PROVENCE": {
        "Arts & Design": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 10,
        "Résidence Étudiante": 13,
        "Universités": 5,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "AMIENS": {
        "Iut Et But": 1,
        "Restauration Étudiante": 17,
        "Résidence Étudiante": 3,
        "Universités": 14
      },
      "ANGERS": {
        "Arts & Design": 1,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 9,
        "Résidence Étudiante": 6,
        "Universités": 14,
        "École D'Ingénieur": 1
      },
      "ANNEÇY": {
        "Autres": 1,
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 1,
        "Restauration Étudiante": 3,
        "Universités": 2,
        "École D'Ingénieur": 1
      },
      "AUXERRE": {
        "Autres": 1,
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 1,
        "Restauration Étudiante": 3,
        "Résidence Étudiante": 1,
        "Universités": 3
      },
      "AVIGNON": {
        "Autres": 2,
        "Bibliothèque Universitaire": 2,
        "Restauration Étudiante": 2,
        "Universités": 7
      },
      "BAYONNE": {
        "Arts & Design": 1,
        "Bibliothèque Universitaire": 3,
        "Iut Et But": 1,
        "Restauration Étudiante": 2,
        "Universités": 8,
        "École De Commerce": 2
      },
      "BEAUVAIS": {
        "Iut Et But": 1,
        "Restauration Étudiante": 3,
        "Universités": 1,
        "École D'Ingénieur": 3
      },
      "BESANCON": {
        "Arts & Design": 1,
        "Autres": 4,
        "Iut Et But": 2,
        "Restauration Étudiante": 4,
        "Résidence Étudiante": 4,
        "Universités": 7,
        "École De Commerce": 1
      },
      "BEZIER": {
        "Iut Et But": 1,
        "Universités": 1,
        "École De Commerce": 1
      },
      "BLOIS": {
        "Autres": 3,
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 2,
        "Restauration Étudiante": 4,
        "Universités": 1
      },
      "BORDEAUX": {
        "Arts & Design": 5,
        "Autres": 14,
        "Bibliothèque Universitaire": 4,
        "Iut Et But": 3,
        "Journalisme & Communication": 2,
        "Restauration Étudiante": 14,
        "Universités": 11,
        "École D'Ingénieur": 7,
        "École De Commerce": 3
      },
      "BOURGES": {
        "Autres": 2,
        "Bibliothèque Universitaire": 1,
        "Restauration Étudiante": 2,
        "Résidence Étudiante": 3,
        "École D'Ingénieur": 1
      },
      "BREST": {
        "Arts & Design": 1,
        "Autres": 4,
        "Iut Et But": 1,
        "Restauration Étudiante": 2,
        "Universités": 6,
        "École D'Ingénieur": 3,
        "École De Commerce": 1
      },
      "CAEN": {
        "Arts & Design": 2,
        "Autres": 1,
        "Iut Et But": 2,
        "Restauration Étudiante": 7,
        "Universités": 12,
        "École De Commerce": 2
      },
      "CANNES - VALBONNE": {
        "Arts & Design": 1,
        "Autres": 15,
        "Iut Et But": 2,
        "Résidence Étudiante": 5,
        "Universités": 4,
        "École De Commerce": 6
      },
      "CHAMBERY": {
        "Arts & Design": 1,
        "Autres": 2,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 3,
        "Universités": 6,
        "École De Commerce": 1
      },
      "CHARTRES": {
        "Arts & Design": 5,
        "Autres": 5
      },
      "CHATEAUROUX": {
        "Arts & Design": 1,
        "Autres": 4,
        "Iut Et But": 1,
        "Restauration Étudiante": 1,
        "Résidence Étudiante": 1,
        "Universités": 1,
        "École D'Ingénieur": 1
      },
      "CLERMONT-FERRAND": {
        "Autres": 3,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 19,
        "Résidence Étudiante": 16,
        "Universités": 10,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "COLMAR": {
        "Autres": 2,
        "Iut Et But": 2,
        "Restauration Étudiante": 1,
        "Résidence Étudiante": 2,
        "Universités": 1
      },
      "DIJON": {
        "Autres": 4,
        "Iut Et But": 1,
        "Restauration Étudiante": 4,
        "Résidence Étudiante": 10,
        "Universités": 10,
        "École D'Ingénieur": 1
      },
      "EVREUX": {
        "Autres": 7,
        "Bibliothèque Universitaire": 1,
        "Restauration Étudiante": 3,
        "Résidence Étudiante": 1,
        "Universités": 1
      },
      "GRENOBLE": {
        "Bibliothèque Universitaire": 3,
        "Iut Et But": 13,
        "Restauration Étudiante": 9,
        "Résidence Étudiante": 13,
        "Universités": 15,
        "École D'Ingénieur": 2,
        "École De Commerce": 2
      },
      "LA ROCHE-SUR-YON": {
        "Arts & Design": 1,
        "Autres": 4,
        "Iut Et But": 1,
        "Résidence Étudiante": 3,
        "Universités": 1,
        "École De Commerce": 1
      },
      "LA ROCHELLE": {
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 1,
        "Restauration Étudiante": 4,
        "Universités": 5,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "LAVAL": {
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 4,
        "Restauration Étudiante": 2,
        "Universités": 3,
        "École D'Ingénieur": 1,
        "École De Commerce": 2
      },
      "LE HAVRE": {
        "Arts & Design": 1,
        "Autres": 1,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 2,
        "Restauration Étudiante": 5,
        "Universités": 8,
        "École D'Ingénieur": 3
      },
      "LE MANS": {
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 1,
        "Restauration Étudiante": 7,
        "Résidence Étudiante": 3,
        "Universités": 11,
        "École D'Ingénieur": 1
      },
      "LILLE": {
        "Arts & Design": 1,
        "Autres": 4,
        "Bibliothèque Universitaire": 4,
        "Iut Et But": 3,
        "Restauration Étudiante": 13,
        "Résidence Étudiante": 7,
        "Universités": 16,
        "École D'Ingénieur": 2,
        "École De Commerce": 2
      },
      "LIMOGES": {
        "Arts & Design": 1,
        "Autres": 1,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 7,
        "Résidence Étudiante": 5,
        "Universités": 13,
        "École De Commerce": 1
      },
      "LORIENT": {
        "Autres": 2,
        "Iut Et But": 1,
        "Universités": 3,
        "École D'Ingénieur": 1
      },
      "LYON": {
        "Arts & Design": 4,
        "Autres": 11,
        "Bibliothèque Universitaire": 6,
        "Iut Et But": 4,
        "Journalisme & Communication": 1,
        "Restauration Étudiante": 31,
        "Résidence Étudiante": 37,
        "Universités": 33,
        "École D'Ingénieur": 4,
        "École De Commerce": 7
      },
      "MARSEILLE": {
        "Iut Et But": 2,
        "Journalisme & Communication": 1,
        "Restauration Étudiante": 19,
        "Résidence Étudiante": 11,
        "Universités": 16,
        "École D'Ingénieur": 1
      },
      "METZ": {
        "Arts & Design": 1,
        "Autres": 4,
        "Iut Et But": 1,
        "Restauration Étudiante": 8,
        "Universités": 12,
        "École D'Ingénieur": 1
      },
      "MONTPELLIER": {
        "Arts & Design": 2,
        "Autres": 2,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 16,
        "Résidence Étudiante": 19,
        "Universités": 23,
        "École De Commerce": 2
      },
      "MULHOUSE": {
        "Autres": 10,
        "Bibliothèque Universitaire": 2,
        "Restauration Étudiante": 4,
        "Résidence Étudiante": 5,
        "Universités": 3,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "NANCY": {
        "Bibliothèque Universitaire": 3,
        "Iut Et But": 2,
        "Restauration Étudiante": 12,
        "Résidence Étudiante": 13,
        "Universités": 16,
        "École De Commerce": 1
      },
      "NANTES": {
        "Arts & Design": 2,
        "Bibliothèque Universitaire": 6,
        "Iut Et But": 2,
        "Restauration Étudiante": 14,
        "Universités": 17,
        "École D'Ingénieur": 2,
        "École De Commerce": 2
      },
      "NICE": {
        "Autres": 9,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 3,
        "Journalisme & Communication": 1,
        "Restauration Étudiante": 12,
        "Résidence Étudiante": 1,
        "Universités": 10,
        "École D'Ingénieur": 3,
        "École De Commerce": 8
      },
      "NIMES": {
        "Arts & Design": 1,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 6,
        "Résidence Étudiante": 1,
        "Universités": 10,
        "École De Commerce": 1
      },
      "ORLEANS": {
        "Autres": 2,
        "Bibliothèque Universitaire": 3,
        "Iut Et But": 1,
        "Restauration Étudiante": 8,
        "Résidence Étudiante": 8,
        "Universités": 4,
        "École D'Ingénieur": 1
      },
      "PAU": {
        "Autres": 1,
        "Iut Et But": 1,
        "Restauration Étudiante": 3,
        "Universités": 5,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "PERPIGNAN": {
        "Autres": 2,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 1,
        "Restauration Étudiante": 3,
        "Universités": 7,
        "École D'Ingénieur": 1
      },
      "POITIERS": {
        "Autres": 6,
        "Bibliothèque Universitaire": 4,
        "Iut Et But": 1,
        "Restauration Étudiante": 3,
        "Résidence Étudiante": 1,
        "Universités": 21,
        "École D'Ingénieur": 2
      },
      "QUIMPER": {
        "Arts & Design": 1,
        "Autres": 3,
        "Iut Et But": 1,
        "Restauration Étudiante": 2,
        "Universités": 2,
        "École De Commerce": 1
      },
      "REIMS": {
        "Bibliothèque Universitaire": 3,
        "Iut Et But": 1,
        "Restauration Étudiante": 6,
        "Résidence Étudiante": 4,
        "Universités": 9,
        "École D'Ingénieur": 2,
        "École De Commerce": 1
      },
      "RENNES": {
        "Arts & Design": 2,
        "Autres": 1,
        "Bibliothèque Universitaire": 2,
        "Iut Et But": 3,
        "Restauration Étudiante": 12,
        "Universités": 15,
        "École D'Ingénieur": 3,
        "École De Commerce": 2
      },
      "ROUEN": {
        "Arts & Design": 1,
        "Autres": 2,
        "Iut Et But": 2,
        "Restauration Étudiante": 4,
        "Résidence Étudiante": 3,
        "Universités": 11,
        "École D'Ingénieur": 2,
        "École De Commerce": 2
      },
      "SAINT-ETIENNE": {
        "Arts & Design": 2,
        "Autres": 1,
        "Bibliothèque Universitaire": 3,
        "Iut Et But": 1,
        "Restauration Étudiante": 11,
        "Résidence Étudiante": 3,
        "Universités": 21,
        "École D'Ingénieur": 2,
        "École De Commerce": 1
      },
      "SAINT-NAZAIRE": {
        "Autres": 4,
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 1,
        "Restauration Étudiante": 1,
        "Résidence Étudiante": 1
      },
      "STRASBOURG": {
        "Bibliothèque Universitaire": 4,
        "Iut Et But": 1,
        "Restauration Étudiante": 11,
        "Résidence Étudiante": 8,
        "Universités": 29,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "TOULON - LA GARDE": {
        "Arts & Design": 1,
        "Autres": 2,
        "Bibliothèque Universitaire": 3,
        "Iut Et But": 2,
        "Restauration Étudiante": 2,
        "Universités": 8,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "TOULOUSE": {
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 1,
        "Restauration Étudiante": 4,
        "Universités": 19,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "TOURS": {
        "Arts & Design": 1,
        "Autres": 2,
        "Iut Et But": 2,
        "Restauration Étudiante": 9,
        "Résidence Étudiante": 10,
        "Universités": 8,
        "École D'Ingénieur": 1,
        "École De Commerce": 1
      },
      "TROYES": {
        "Arts & Design": 1,
        "Autres": 7,
        "Bibliothèque Universitaire": 2,
        "Restauration Étudiante": 1,
        "Universités": 2,
        "École D'Ingénieur": 2
      },
      "VALENCE": {
        "Arts & Design": 1,
        "Autres": 14,
        "Iut Et But": 1,
        "Restauration Étudiante": 2,
        "Résidence Étudiante": 6,
        "Universités": 3,
        "École De Commerce": 1
      },
      "VALENCIENNES": {
        "Autres": 2,
        "Restauration Étudiante": 3,
        "Résidence Étudiante": 4,
        "Universités": 1,
        "École D'Ingénieur": 2
      },
      "ÎLE-DE-FRANCE": {
        "Arts & Design": 13,
        "Autres": 77,
        "Bibliothèque Universitaire": 1,
        "Iut Et But": 24,
        "Journalisme & Communication": 2,
        "Restauration Étudiante": 66,
        "Résidence Étudiante": 102,
        "Universités": 137,
        "École D'Ingénieur": 16,
        "École De Commerce": 21
      }
    },
    "byDiscipline": {
      "AGEN": {
        "Arts & Design": 2,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 14
      },
      "AIX-EN-PROVENCE": {
        "Arts & Design": 4,
        "Commerce & Management": 4,
        "Droit & Sciences Po": 3,
        "Généraliste": 20,
        "Lettres & Sciences Humaines": 1,
        "Sciences & Ingénierie": 1
      },
      "AMIENS": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 24,
        "Lettres & Sciences Humaines": 3,
        "Santé & Paramédical": 2,
        "Sciences & Ingénierie": 2,
        "Sport (Staps)": 1
      },
      "ANGERS": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 2,
        "Généraliste": 21,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 2,
        "Sciences & Ingénierie": 6
      },
      "ANNEÇY": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Généraliste": 6,
        "Sciences & Ingénierie": 1
      },
      "AUXERRE": {
        "Droit & Sciences Po": 1,
        "Généraliste": 8,
        "Santé & Paramédical": 1
      },
      "AVIGNON": {
        "Arts & Design": 1,
        "Généraliste": 12
      },
      "BAYONNE": {
        "Arts & Design": 2,
        "Commerce & Management": 2,
        "Droit & Sciences Po": 2,
        "Généraliste": 6,
        "Sciences & Ingénierie": 5
      },
      "BEAUVAIS": {
        "Généraliste": 5,
        "Sciences & Ingénierie": 3
      },
      "BESANCON": {
        "Arts & Design": 2,
        "Commerce & Management": 2,
        "Généraliste": 17,
        "Sciences & Ingénierie": 1,
        "Sport (Staps)": 1
      },
      "BEZIER": {
        "Commerce & Management": 1,
        "Généraliste": 2
      },
      "BLOIS": {
        "Généraliste": 11
      },
      "BORDEAUX": {
        "Arts & Design": 5,
        "Commerce & Management": 3,
        "Droit & Sciences Po": 6,
        "Généraliste": 26,
        "Journalisme & Communication": 2,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 7,
        "Sciences & Ingénierie": 12,
        "Sport (Staps)": 1
      },
      "BOURGES": {
        "Généraliste": 8,
        "Sciences & Ingénierie": 1
      },
      "BREST": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 7,
        "Santé & Paramédical": 2,
        "Sciences & Ingénierie": 6
      },
      "CAEN": {
        "Arts & Design": 2,
        "Commerce & Management": 3,
        "Généraliste": 12,
        "Journalisme & Communication": 1,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 1,
        "Sciences & Ingénierie": 5,
        "Sport (Staps)": 1
      },
      "CANNES - VALBONNE": {
        "Arts & Design": 1,
        "Commerce & Management": 7,
        "Généraliste": 23,
        "Sciences & Ingénierie": 1,
        "Sport (Staps)": 1
      },
      "CHAMBERY": {
        "Arts & Design": 1,
        "Commerce & Management": 2,
        "Droit & Sciences Po": 1,
        "Généraliste": 9,
        "Santé & Paramédical": 1,
        "Sciences & Ingénierie": 2
      },
      "CHARTRES": {
        "Arts & Design": 4,
        "Généraliste": 5,
        "Santé & Paramédical": 1
      },
      "CHATEAUROUX": {
        "Arts & Design": 1,
        "Généraliste": 8,
        "Sciences & Ingénierie": 1
      },
      "CLERMONT-FERRAND": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 41,
        "Journalisme & Communication": 1,
        "Santé & Paramédical": 3,
        "Sciences & Ingénierie": 5
      },
      "COLMAR": {
        "Généraliste": 7,
        "Sciences & Ingénierie": 1
      },
      "DIJON": {
        "Arts & Design": 4,
        "Généraliste": 20,
        "Lettres & Sciences Humaines": 1,
        "Sciences & Ingénierie": 3,
        "Sport (Staps)": 2
      },
      "EVREUX": {
        "Généraliste": 12,
        "Santé & Paramédical": 1
      },
      "GRENOBLE": {
        "Arts & Design": 2,
        "Commerce & Management": 3,
        "Droit & Sciences Po": 4,
        "Généraliste": 37,
        "Journalisme & Communication": 1,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 4,
        "Sciences & Ingénierie": 5
      },
      "LA ROCHE-SUR-YON": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Généraliste": 9
      },
      "LA ROCHELLE": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 6,
        "Journalisme & Communication": 1,
        "Sciences & Ingénierie": 3
      },
      "LAVAL": {
        "Commerce & Management": 2,
        "Droit & Sciences Po": 1,
        "Généraliste": 8,
        "Sciences & Ingénierie": 2
      },
      "LE HAVRE": {
        "Arts & Design": 2,
        "Droit & Sciences Po": 2,
        "Généraliste": 14,
        "Santé & Paramédical": 1,
        "Sciences & Ingénierie": 3
      },
      "LE MANS": {
        "Arts & Design": 2,
        "Droit & Sciences Po": 1,
        "Généraliste": 16,
        "Lettres & Sciences Humaines": 1,
        "Sciences & Ingénierie": 4
      },
      "LILLE": {
        "Arts & Design": 1,
        "Commerce & Management": 2,
        "Droit & Sciences Po": 6,
        "Généraliste": 35,
        "Santé & Paramédical": 2,
        "Sciences & Ingénierie": 6
      },
      "LIMOGES": {
        "Arts & Design": 4,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 2,
        "Généraliste": 15,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 4,
        "Sciences & Ingénierie": 4
      },
      "LORIENT": {
        "Généraliste": 6,
        "Sciences & Ingénierie": 1
      },
      "LYON": {
        "Arts & Design": 15,
        "Commerce & Management": 11,
        "Droit & Sciences Po": 7,
        "Généraliste": 84,
        "Journalisme & Communication": 2,
        "Lettres & Sciences Humaines": 8,
        "Santé & Paramédical": 3,
        "Sciences & Ingénierie": 8
      },
      "MARSEILLE": {
        "Arts & Design": 4,
        "Droit & Sciences Po": 1,
        "Généraliste": 32,
        "Journalisme & Communication": 2,
        "Santé & Paramédical": 5,
        "Sciences & Ingénierie": 6
      },
      "METZ": {
        "Arts & Design": 3,
        "Généraliste": 20,
        "Sciences & Ingénierie": 4
      },
      "MONTPELLIER": {
        "Arts & Design": 4,
        "Commerce & Management": 3,
        "Droit & Sciences Po": 4,
        "Généraliste": 43,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 7,
        "Sciences & Ingénierie": 3,
        "Sport (Staps)": 2
      },
      "MULHOUSE": {
        "Commerce & Management": 1,
        "Généraliste": 22,
        "Sciences & Ingénierie": 3
      },
      "NANCY": {
        "Arts & Design": 8,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 29,
        "Santé & Paramédical": 4,
        "Sciences & Ingénierie": 4
      },
      "NANTES": {
        "Arts & Design": 8,
        "Commerce & Management": 2,
        "Droit & Sciences Po": 3,
        "Généraliste": 22,
        "Lettres & Sciences Humaines": 2,
        "Santé & Paramédical": 2,
        "Sciences & Ingénierie": 6
      },
      "NICE": {
        "Arts & Design": 2,
        "Commerce & Management": 9,
        "Droit & Sciences Po": 2,
        "Généraliste": 26,
        "Journalisme & Communication": 1,
        "Santé & Paramédical": 3,
        "Sciences & Ingénierie": 4,
        "Sport (Staps)": 2
      },
      "NIMES": {
        "Arts & Design": 2,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 16,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 1
      },
      "ORLEANS": {
        "Droit & Sciences Po": 4,
        "Généraliste": 18,
        "Sciences & Ingénierie": 5
      },
      "PAU": {
        "Commerce & Management": 2,
        "Généraliste": 7,
        "Sciences & Ingénierie": 3
      },
      "PERPIGNAN": {
        "Commerce & Management": 1,
        "Droit & Sciences Po": 2,
        "Généraliste": 9,
        "Santé & Paramédical": 1,
        "Sciences & Ingénierie": 3
      },
      "POITIERS": {
        "Arts & Design": 3,
        "Droit & Sciences Po": 3,
        "Généraliste": 21,
        "Lettres & Sciences Humaines": 3,
        "Santé & Paramédical": 1,
        "Sciences & Ingénierie": 6,
        "Sport (Staps)": 1
      },
      "QUIMPER": {
        "Arts & Design": 1,
        "Commerce & Management": 1,
        "Généraliste": 8
      },
      "REIMS": {
        "Commerce & Management": 1,
        "Droit & Sciences Po": 3,
        "Généraliste": 8,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 5,
        "Sciences & Ingénierie": 7,
        "Sport (Staps)": 1
      },
      "RENNES": {
        "Arts & Design": 3,
        "Commerce & Management": 2,
        "Droit & Sciences Po": 3,
        "Généraliste": 19,
        "Lettres & Sciences Humaines": 2,
        "Santé & Paramédical": 3,
        "Sciences & Ingénierie": 7,
        "Sport (Staps)": 1
      },
      "ROUEN": {
        "Arts & Design": 2,
        "Commerce & Management": 3,
        "Droit & Sciences Po": 1,
        "Généraliste": 11,
        "Journalisme & Communication": 1,
        "Santé & Paramédical": 2,
        "Sciences & Ingénierie": 7
      },
      "SAINT-ETIENNE": {
        "Arts & Design": 4,
        "Commerce & Management": 3,
        "Droit & Sciences Po": 2,
        "Généraliste": 25,
        "Santé & Paramédical": 3,
        "Sciences & Ingénierie": 7,
        "Sport (Staps)": 1
      },
      "SAINT-NAZAIRE": {
        "Généraliste": 8
      },
      "STRASBOURG": {
        "Arts & Design": 2,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 3,
        "Généraliste": 30,
        "Journalisme & Communication": 1,
        "Lettres & Sciences Humaines": 2,
        "Santé & Paramédical": 5,
        "Sciences & Ingénierie": 11
      },
      "TOULON - LA GARDE": {
        "Arts & Design": 1,
        "Commerce & Management": 4,
        "Droit & Sciences Po": 2,
        "Généraliste": 7,
        "Sciences & Ingénierie": 5,
        "Sport (Staps)": 1
      },
      "TOULOUSE": {
        "Arts & Design": 3,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 3,
        "Généraliste": 12,
        "Journalisme & Communication": 1,
        "Santé & Paramédical": 2,
        "Sciences & Ingénierie": 5
      },
      "TOURS": {
        "Arts & Design": 2,
        "Commerce & Management": 1,
        "Droit & Sciences Po": 1,
        "Généraliste": 23,
        "Journalisme & Communication": 1,
        "Lettres & Sciences Humaines": 1,
        "Santé & Paramédical": 3,
        "Sciences & Ingénierie": 2
      },
      "TROYES": {
        "Arts & Design": 1,
        "Généraliste": 12,
        "Sciences & Ingénierie": 2
      },
      "VALENCE": {
        "Arts & Design": 2,
        "Commerce & Management": 2,
        "Généraliste": 23,
        "Sport (Staps)": 1
      },
      "VALENCIENNES": {
        "Arts & Design": 2,
        "Généraliste": 9,
        "Sciences & Ingénierie": 1
      },
      "ÎLE-DE-FRANCE": {
        "Arts & Design": 38,
        "Commerce & Management": 15,
        "Droit & Sciences Po": 12,
        "Généraliste": 324,
        "Journalisme & Communication": 4,
        "Lettres & Sciences Humaines": 6,
        "Santé & Paramédical": 11,
        "Sciences & Ingénierie": 43,
        "Sport (Staps)": 6
      }
    },
    "total": {
      "AGEN": 18,
      "AIX-EN-PROVENCE": 33,
      "AMIENS": 35,
      "ANGERS": 34,
      "ANNEÇY": 9,
      "AUXERRE": 10,
      "AVIGNON": 13,
      "BAYONNE": 17,
      "BEAUVAIS": 8,
      "BESANCON": 23,
      "BEZIER": 3,
      "BLOIS": 11,
      "BORDEAUX": 63,
      "BOURGES": 9,
      "BREST": 18,
      "CAEN": 26,
      "CANNES - VALBONNE": 33,
      "CHAMBERY": 16,
      "CHARTRES": 10,
      "CHATEAUROUX": 10,
      "CLERMONT-FERRAND": 53,
      "COLMAR": 8,
      "DIJON": 30,
      "EVREUX": 13,
      "GRENOBLE": 57,
      "LA ROCHE-SUR-YON": 11,
      "LA ROCHELLE": 13,
      "LAVAL": 13,
      "LE HAVRE": 22,
      "LE MANS": 24,
      "LILLE": 52,
      "LIMOGES": 31,
      "LORIENT": 7,
      "LYON": 138,
      "MARSEILLE": 50,
      "METZ": 27,
      "MONTPELLIER": 67,
      "MULHOUSE": 26,
      "NANCY": 47,
      "NANTES": 45,
      "NICE": 49,
      "NIMES": 22,
      "ORLEANS": 27,
      "PAU": 12,
      "PERPIGNAN": 16,
      "POITIERS": 38,
      "QUIMPER": 10,
      "REIMS": 26,
      "RENNES": 40,
      "ROUEN": 27,
      "SAINT-ETIENNE": 45,
      "SAINT-NAZAIRE": 8,
      "STRASBOURG": 55,
      "TOULON - LA GARDE": 20,
      "TOULOUSE": 27,
      "TOURS": 34,
      "TROYES": 15,
      "VALENCE": 28,
      "VALENCIENNES": 12,
      "ÎLE-DE-FRANCE": 459
    }
  },
  "lycee": {
    "byFiliere": {
      "AGEN": {
        "Général": 1,
        "Pro": 6,
        "Techno": 4
      },
      "AIX-EN-PROVENCE": {
        "Général": 3,
        "Pro": 3,
        "Techno": 5
      },
      "AMIENS": {
        "Général": 1,
        "Non précisé": 12,
        "Pro": 7,
        "Techno": 1
      },
      "ANGERS": {
        "Général": 3,
        "Pro": 10,
        "Techno": 4
      },
      "ANNEÇY": {
        "Général": 1,
        "Pro": 5,
        "Techno": 3
      },
      "AUXERRE": {
        "Général": 1,
        "Pro": 4,
        "Techno": 2
      },
      "AVIGNON": {
        "Général": 1,
        "Pro": 8,
        "Techno": 2
      },
      "BAYONNE": {
        "Général": 1,
        "Pro": 5,
        "Techno": 3
      },
      "BEAUVAIS": {
        "Général": 1,
        "Non précisé": 11,
        "Pro": 5,
        "Techno": 2
      },
      "BESANCON": {
        "Général": 2,
        "Pro": 9,
        "Techno": 6
      },
      "BEZIER": {
        "Général": 1,
        "Pro": 6,
        "Techno": 4
      },
      "BLOIS": {
        "Général": 1,
        "Pro": 10,
        "Techno": 4
      },
      "BORDEAUX": {
        "Général": 6,
        "Pro": 19,
        "Techno": 15
      },
      "BOURGES": {
        "Général": 1,
        "Pro": 11,
        "Techno": 4
      },
      "BREST": {
        "Général": 2,
        "Pro": 8,
        "Techno": 5
      },
      "CAEN": {
        "Général": 7,
        "Pro": 15,
        "Techno": 8
      },
      "CANNES - VALBONNE": {
        "Général": 6,
        "Pro": 5,
        "Techno": 7
      },
      "CHAMBERY": {
        "Général": 1,
        "Pro": 5,
        "Techno": 2
      },
      "CHARTRES": {
        "Général": 2,
        "Pro": 12,
        "Techno": 3
      },
      "CHATEAUROUX": {
        "Général": 2,
        "Pro": 10,
        "Techno": 1
      },
      "CLERMONT-FERRAND": {
        "Général": 2,
        "Pro": 7,
        "Techno": 3
      },
      "COLMAR": {
        "Pro": 7,
        "Techno": 1
      },
      "DIJON": {
        "Général": 2,
        "Pro": 11,
        "Techno": 5
      },
      "EVREUX": {
        "Général": 1,
        "Non précisé": 1,
        "Pro": 9,
        "Techno": 6
      },
      "GRENOBLE": {
        "Général": 2,
        "Pro": 13,
        "Techno": 4
      },
      "LA ROCHE-SUR-YON": {
        "Général": 1,
        "Non précisé": 1,
        "Pro": 7,
        "Techno": 2
      },
      "LA ROCHELLE": {
        "Non précisé": 14,
        "Pro": 11,
        "Techno": 3
      },
      "LAVAL": {
        "Non précisé": 6,
        "Pro": 10,
        "Techno": 3
      },
      "LE HAVRE": {
        "Général": 1,
        "Pro": 4,
        "Techno": 1
      },
      "LE MANS": {
        "Général": 1,
        "Non précisé": 10,
        "Pro": 6,
        "Techno": 4
      },
      "LILLE": {
        "Général": 3,
        "Non précisé": 55,
        "Pro": 10,
        "Techno": 4
      },
      "LIMOGES": {
        "Général": 1,
        "Pro": 8,
        "Techno": 2
      },
      "LORIENT": {
        "Général": 2,
        "Pro": 6,
        "Techno": 2
      },
      "LYON": {
        "Général": 4,
        "Pro": 8,
        "Techno": 4
      },
      "MARSEILLE": {
        "Général": 6,
        "Pro": 5,
        "Techno": 7
      },
      "METZ": {
        "Général": 1,
        "Pro": 7,
        "Techno": 5
      },
      "MONTPELLIER": {
        "Général": 3,
        "Pro": 11,
        "Techno": 6
      },
      "MULHOUSE": {
        "Général": 2,
        "Pro": 7,
        "Techno": 1
      },
      "NANCY": {
        "Général": 2,
        "Pro": 10,
        "Techno": 6
      },
      "NANTES": {
        "Général": 4,
        "Pro": 8,
        "Techno": 4
      },
      "NICE": {
        "Général": 4,
        "Pro": 8,
        "Techno": 9
      },
      "NIMES": {
        "Pro": 12,
        "Techno": 7
      },
      "ORLEANS": {
        "Général": 3,
        "Non précisé": 14,
        "Pro": 8,
        "Techno": 3
      },
      "PAU": {
        "Général": 1,
        "Non précisé": 15,
        "Pro": 4,
        "Techno": 4
      },
      "PERPIGNAN": {
        "Général": 2,
        "Pro": 8,
        "Techno": 1
      },
      "POITIERS": {
        "Général": 1,
        "Pro": 4,
        "Techno": 4
      },
      "QUIMPER": {
        "Général": 3,
        "Pro": 10,
        "Techno": 5
      },
      "REIMS": {
        "Général": 3,
        "Non précisé": 11,
        "Pro": 11,
        "Techno": 5
      },
      "RENNES": {
        "Général": 3,
        "Pro": 11,
        "Techno": 10
      },
      "ROUEN": {
        "Général": 3,
        "Non précisé": 14,
        "Pro": 7,
        "Techno": 2
      },
      "SAINT-ETIENNE": {
        "Général": 3,
        "Pro": 11,
        "Techno": 3
      },
      "SAINT-NAZAIRE": {
        "Général": 1,
        "Pro": 5,
        "Techno": 3
      },
      "STRASBOURG": {
        "Général": 3,
        "Pro": 3,
        "Techno": 4
      },
      "TOULON - LA GARDE": {
        "Général": 2,
        "Pro": 6,
        "Techno": 2
      },
      "TOULOUSE": {
        "Général": 6,
        "Pro": 16,
        "Techno": 9
      },
      "TOURS": {
        "Général": 5,
        "Non précisé": 15,
        "Pro": 12,
        "Techno": 4
      },
      "TROYES": {
        "Général": 2,
        "Non précisé": 14,
        "Pro": 8,
        "Techno": 5
      },
      "VALENCE": {
        "Général": 2,
        "Pro": 9,
        "Techno": 1
      },
      "VALENCIENNES": {
        "Général": 2,
        "Non précisé": 24,
        "Pro": 7,
        "Techno": 1
      },
      "ÎLE-DE-FRANCE": {
        "Général": 66,
        "Non précisé": 248,
        "Pro": 28,
        "Techno": 23
      }
    },
    "total": {
      "AGEN": 11,
      "AIX-EN-PROVENCE": 11,
      "AMIENS": 21,
      "ANGERS": 17,
      "ANNEÇY": 9,
      "AUXERRE": 7,
      "AVIGNON": 11,
      "BAYONNE": 9,
      "BEAUVAIS": 19,
      "BESANCON": 17,
      "BEZIER": 11,
      "BLOIS": 15,
      "BORDEAUX": 40,
      "BOURGES": 16,
      "BREST": 15,
      "CAEN": 30,
      "CANNES - VALBONNE": 18,
      "CHAMBERY": 8,
      "CHARTRES": 17,
      "CHATEAUROUX": 13,
      "CLERMONT-FERRAND": 12,
      "COLMAR": 8,
      "DIJON": 18,
      "EVREUX": 17,
      "GRENOBLE": 19,
      "LA ROCHE-SUR-YON": 11,
      "LA ROCHELLE": 28,
      "LAVAL": 19,
      "LE HAVRE": 6,
      "LE MANS": 21,
      "LILLE": 72,
      "LIMOGES": 11,
      "LORIENT": 10,
      "LYON": 16,
      "MARSEILLE": 18,
      "METZ": 13,
      "MONTPELLIER": 20,
      "MULHOUSE": 10,
      "NANCY": 18,
      "NANTES": 16,
      "NICE": 21,
      "NIMES": 19,
      "ORLEANS": 28,
      "PAU": 24,
      "PERPIGNAN": 11,
      "POITIERS": 9,
      "QUIMPER": 18,
      "REIMS": 30,
      "RENNES": 24,
      "ROUEN": 26,
      "SAINT-ETIENNE": 17,
      "SAINT-NAZAIRE": 9,
      "STRASBOURG": 10,
      "TOULON - LA GARDE": 10,
      "TOULOUSE": 31,
      "TOURS": 36,
      "TROYES": 29,
      "VALENCE": 12,
      "VALENCIENNES": 34,
      "ÎLE-DE-FRANCE": 365
    }
  }
};
