export const SITE_CONFIG = {
  name: "MediaHub Campus",
  tagline: "La Régie des Universités, Campus, Écoles et Lycées",
  description:
    "Touchez plus de 2,19 millions d'étudiants dans 60 villes universitaires",
  pdfUrl: "/plaquette-mediahub-2026-2027.pdf",
  email: "team@mediahubcampus.com",
};

// Toggle mascots on/off per section
// This will be controlled dynamically by MascotContext
export const MASCOTS_CONFIG = {
  services: true,
  servicesBottom: true, // chips cat overlapping cards
  target: true,
  statistics: true,
  cities: true,
  clients: true,
  contact: true,
};

export const STATS = [
  { value: 60, suffix: "", label: "Villes universitaires" },
  { value: 3500, suffix: "+", label: "Établissements" },
  { value: 2.19, suffix: "M+", label: "Étudiants atteints", decimals: 2 },
];

export const SERVICES = [
  {
    id: "affichage",
    title: "Affichage Universitaire",
    description:
      "Le plus vaste réseau d'affichage au cœur des universités, campus, lycées et lieux de vie étudiants. Plus de 2,19M d'étudiants touchés, 100% étudiant.",
    icon: "Megaphone",
    image: "/images/gallery/Photos MediaHub Campus - 1.JPG",
  },
  {
    id: "scolaire",
    title: "Affichage Scolaire",
    description:
      "Réseau Lycée pour toucher lycéens et professeurs. Enseignants partenaires, lycées à la carte, profils précis.",
    icon: "GraduationCap",
    image: "/images/Photos Lycées 1.jpg",
  },
  {
    id: "digital",
    title: "Digital",
    description:
      "Achat d'espace web, création et gestion de comptes. TikTok (11M), Snapchat (10M), Instagram (9,5M) chez les 18-25 ans.",
    icon: "Smartphone",
    image: "/images/Photos service digital.png",
  },
  {
    id: "velib",
    title: "Stations Vélib'",
    description:
      "Plus de 1 400 stations à la carte. Habillages de totems et diapasons. 38% des abonnés ont 19-26 ans.",
    icon: "Bike",
    image: "/images/gallery/Photos Velib.jpg",
  },
  {
    id: "mediatables",
    title: "MédiaTables",
    description:
      "12 000 tables, 800 établissements, 50 min d'exposition. 91% des Français fréquentent les terrasses.",
    icon: "Coffee",
    image: "/images/gallery/Photos MediaTables.png",
  },
  {
    id: "event",
    title: "Événementiel",
    description:
      "Opérations terrain, street marketing, sampling, jeux-concours et activations digitales sur campus.",
    icon: "PartyPopper",
    image: "/images/Photos service EVENT.jpeg",
  },
];

// Données réelles issues du fichier de référence commercial
// (Regie_Publicitaire_Systeme_Commercial_2026-2027.xlsx, feuille TARIFS_CAMPUS).
// - students      = "Audience affichage" (base du chiffre "2,19M étudiants touchés")
// - totalStudents = "Total étudiants zone"
// - ots           = "ODV / 4 semaines" (Occasions de Voir)
// - panels        = "Nb affiches A2"
// - cpm           = "CPM 1000 étudiants touchés"
export interface CityData {
  name: string;
  region: string;
  departement: string;
  students: number;
  totalStudents: number;
  ots: number;
  panels: number;
  cpm: number;
  lat: number;
  lng: number;
}

export const CITIES: CityData[] = [
  { name: "Île-de-France", region: "Île-de-France", departement: "Île-de-France", students: 750000, totalStudents: 950000, ots: 60000000, panels: 1000, cpm: 7.33, lat: 48.8566, lng: 2.3522 },
  { name: "Bordeaux", region: "Nouvelle-Aquitaine", departement: "Gironde", students: 150000, totalStudents: 220000, ots: 12000000, panels: 400, cpm: 14, lat: 44.8378, lng: -0.5792 },
  { name: "Lyon", region: "Auvergne-Rhône-Alpes", departement: "Rhône", students: 110000, totalStudents: 150000, ots: 8800000, panels: 400, cpm: 16.36, lat: 45.764, lng: 4.8357 },
  { name: "Lille", region: "Hauts-de-France", departement: "Nord", students: 90000, totalStudents: 110000, ots: 7200000, panels: 400, cpm: 20, lat: 50.6292, lng: 3.0573 },
  { name: "Toulouse", region: "Occitanie", departement: "Haute-Garonne", students: 85000, totalStudents: 110000, ots: 6800000, panels: 400, cpm: 21.18, lat: 43.6047, lng: 1.4442 },
  { name: "Clermont-Ferrand", region: "Auvergne-Rhône-Alpes", departement: "Puy-de-Dôme", students: 75000, totalStudents: 95000, ots: 6000000, panels: 200, cpm: 18, lat: 45.7772, lng: 3.087 },
  { name: "Montpellier", region: "Occitanie", departement: "Hérault", students: 60000, totalStudents: 75000, ots: 4800000, panels: 200, cpm: 22.5, lat: 43.6108, lng: 3.8767 },
  { name: "Nantes", region: "Pays de la Loire", departement: "Loire-Atlantique", students: 60000, totalStudents: 74000, ots: 4800000, panels: 200, cpm: 22.5, lat: 47.2184, lng: -1.5536 },
  { name: "Rennes", region: "Bretagne", departement: "Ille-et-Vilaine", students: 55000, totalStudents: 65000, ots: 4400000, panels: 200, cpm: 24.55, lat: 48.1173, lng: -1.6778 },
  { name: "Strasbourg", region: "Grand Est", departement: "Bas-Rhin", students: 50000, totalStudents: 60000, ots: 4000000, panels: 200, cpm: 27, lat: 48.5734, lng: 7.7521 },
  { name: "Grenoble", region: "Auvergne-Rhône-Alpes", departement: "Isère", students: 45000, totalStudents: 55000, ots: 3600000, panels: 200, cpm: 30, lat: 45.1885, lng: 5.7245 },
  { name: "Marseille", region: "Provence-Alpes-Côte d’Azur", departement: "Bouches-du-Rhône", students: 45000, totalStudents: 65000, ots: 3600000, panels: 200, cpm: 30, lat: 43.2965, lng: 5.3698 },
  { name: "Nancy", region: "Grand Est", departement: "Meurthe-et-Moselle", students: 45000, totalStudents: 55000, ots: 3600000, panels: 200, cpm: 30, lat: 48.6921, lng: 6.1844 },
  { name: "Angers", region: "Pays de la Loire", departement: "Maine-et-Loire", students: 40000, totalStudents: 50000, ots: 3200000, panels: 200, cpm: 33.75, lat: 47.4784, lng: -0.5632 },
  { name: "Rouen", region: "Normandie", departement: "Seine-Maritime", students: 35000, totalStudents: 50000, ots: 2800000, panels: 200, cpm: 38.57, lat: 49.4432, lng: 1.0993 },
  { name: "Aix-en-Provence", region: "Provence-Alpes-Côte d’Azur", departement: "Bouches-du-Rhône", students: 30000, totalStudents: 40000, ots: 2400000, panels: 150, cpm: 41.67, lat: 43.5297, lng: 5.4474 },
  { name: "Amiens", region: "Hauts-de-France", departement: "Somme", students: 30000, totalStudents: 38000, ots: 2400000, panels: 150, cpm: 41.67, lat: 49.8942, lng: 2.2957 },
  { name: "Nice", region: "Provence-Alpes-Côte d’Azur", departement: "Alpes-Maritimes", students: 30000, totalStudents: 40000, ots: 2400000, panels: 200, cpm: 45, lat: 43.7102, lng: 7.262 },
  { name: "Caen", region: "Normandie", departement: "Calvados", students: 25000, totalStudents: 35000, ots: 2000000, panels: 150, cpm: 50, lat: 49.1829, lng: -0.3707 },
  { name: "Dijon", region: "Bourgogne-Franche-Comté", departement: "Côte-d’Or", students: 25000, totalStudents: 40000, ots: 2000000, panels: 150, cpm: 50, lat: 47.322, lng: 5.0415 },
  { name: "Reims", region: "Grand Est", departement: "Marne", students: 25000, totalStudents: 36000, ots: 2000000, panels: 150, cpm: 50, lat: 49.2583, lng: 4.0317 },
  { name: "Saint-Étienne", region: "Auvergne-Rhône-Alpes", departement: "Loire", students: 25000, totalStudents: 35000, ots: 2000000, panels: 150, cpm: 50, lat: 45.4397, lng: 4.3872 },
  { name: "Tours", region: "Centre-Val de Loire", departement: "Indre-et-Loire", students: 25000, totalStudents: 35000, ots: 2000000, panels: 150, cpm: 50, lat: 47.3941, lng: 0.6848 },
  { name: "Brest", region: "Bretagne", departement: "Finistère", students: 20000, totalStudents: 25000, ots: 1600000, panels: 150, cpm: 57.5, lat: 48.3904, lng: -4.4861 },
  { name: "Metz", region: "Grand Est", departement: "Moselle", students: 20000, totalStudents: 25000, ots: 1600000, panels: 150, cpm: 57.5, lat: 49.1193, lng: 6.1757 },
  { name: "Orléans", region: "Centre-Val de Loire", departement: "Loiret", students: 20000, totalStudents: 25000, ots: 1600000, panels: 150, cpm: 57.5, lat: 47.9029, lng: 1.909 },
  { name: "Besançon", region: "Bourgogne-Franche-Comté", departement: "Doubs", students: 15000, totalStudents: 25000, ots: 1200000, panels: 120, cpm: 63.33, lat: 47.2378, lng: 6.0241 },
  { name: "Nîmes", region: "Occitanie", departement: "Gard", students: 15000, totalStudents: 20000, ots: 1200000, panels: 200, cpm: 90, lat: 43.8367, lng: 4.3601 },
  { name: "Poitiers", region: "Nouvelle-Aquitaine", departement: "Vienne", students: 15000, totalStudents: 25000, ots: 1200000, panels: 150, cpm: 76.67, lat: 46.5802, lng: 0.3404 },
  { name: "Chambéry", region: "Auvergne-Rhône-Alpes", departement: "Savoie", students: 13000, totalStudents: 27000, ots: 1040000, panels: 150, cpm: 88.46, lat: 45.5646, lng: 5.9178 },
  { name: "La Rochelle", region: "Nouvelle-Aquitaine", departement: "Charente-Maritime", students: 12000, totalStudents: 15000, ots: 960000, panels: 150, cpm: 95.83, lat: 46.1603, lng: -1.1511 },
  { name: "Toulon - La Garde", region: "Provence-Alpes-Côte d’Azur", departement: "Var", students: 12000, totalStudents: 15000, ots: 960000, panels: 200, cpm: 108.33, lat: 43.1242, lng: 5.928 },
  { name: "Limoges", region: "Nouvelle-Aquitaine", departement: "Haute-Vienne", students: 10000, totalStudents: 18000, ots: 800000, panels: 120, cpm: 95, lat: 45.8336, lng: 1.2611 },
  { name: "Pau", region: "Nouvelle-Aquitaine", departement: "Pyrénées-Atlantiques", students: 10000, totalStudents: 15000, ots: 800000, panels: 120, cpm: 95, lat: 43.2951, lng: -0.3708 },
  { name: "Le Havre", region: "Normandie", departement: "Seine-Maritime", students: 9000, totalStudents: 12000, ots: 720000, panels: 150, cpm: 127.78, lat: 49.4944, lng: 0.1079 },
  { name: "Le Mans", region: "Pays de la Loire", departement: "Sarthe", students: 9000, totalStudents: 13000, ots: 720000, panels: 150, cpm: 127.78, lat: 48.0061, lng: 0.1996 },
  { name: "Annecy", region: "Auvergne-Rhône-Alpes", departement: "Haute-Savoie", students: 8000, totalStudents: 10000, ots: 640000, panels: 100, cpm: 100, lat: 45.8992, lng: 6.1294 },
  { name: "La Roche-sur-Yon", region: "Pays de la Loire", departement: "Vendée", students: 7000, totalStudents: 10000, ots: 560000, panels: 100, cpm: 114.29, lat: 46.6705, lng: -1.4267 },
  { name: "Perpignan", region: "Occitanie", departement: "Pyrénées-Orientales", students: 7000, totalStudents: 10000, ots: 560000, panels: 150, cpm: 164.29, lat: 42.6887, lng: 2.8948 },
  { name: "Troyes", region: "Grand Est", departement: "Aube", students: 7000, totalStudents: 13000, ots: 560000, panels: 200, cpm: 192.86, lat: 48.2973, lng: 4.0744 },
  { name: "Valence", region: "Auvergne-Rhône-Alpes", departement: "Drôme", students: 7000, totalStudents: 10000, ots: 560000, panels: 120, cpm: 135.71, lat: 44.9334, lng: 4.8924 },
  { name: "Valenciennes", region: "Hauts-de-France", departement: "Nord", students: 7000, totalStudents: 15000, ots: 560000, panels: 100, cpm: 114.29, lat: 50.3574, lng: 3.5233 },
  { name: "Avignon", region: "Provence-Alpes-Côte d’Azur", departement: "Vaucluse", students: 6500, totalStudents: 10000, ots: 520000, panels: 120, cpm: 146.15, lat: 43.9493, lng: 4.8055 },
  { name: "Cannes - Valbonne", region: "Provence-Alpes-Côte d’Azur", departement: "Alpes-Maritimes", students: 5500, totalStudents: 7000, ots: 440000, panels: 100, cpm: 236.36, lat: 43.5528, lng: 7.0174 },
  { name: "Laval", region: "Pays de la Loire", departement: "Mayenne", students: 5000, totalStudents: 8000, ots: 400000, panels: 150, cpm: 230, lat: 48.0736, lng: -0.7686 },
  { name: "Mulhouse", region: "Grand Est", departement: "Haut-Rhin", students: 5000, totalStudents: 7000, ots: 400000, panels: 100, cpm: 160, lat: 47.7508, lng: 7.3359 },
  { name: "Beauvais", region: "Hauts-de-France", departement: "Oise", students: 4500, totalStudents: 6000, ots: 360000, panels: 120, cpm: 211.11, lat: 49.4295, lng: 2.0807 },
  { name: "Lorient", region: "Bretagne", departement: "Morbihan", students: 4000, totalStudents: 6000, ots: 320000, panels: 100, cpm: 200, lat: 47.7482, lng: -3.366 },
  { name: "Quimper", region: "Bretagne", departement: "Finistère", students: 4000, totalStudents: 7000, ots: 320000, panels: 100, cpm: 200, lat: 47.996, lng: -4.1024 },
  { name: "Évreux", region: "Normandie", departement: "Eure", students: 3000, totalStudents: 3000, ots: 240000, panels: 100, cpm: 250, lat: 49.027, lng: 1.151 },
  { name: "Saint-Nazaire", region: "Pays de la Loire", departement: "Loire-Atlantique", students: 3000, totalStudents: 5000, ots: 240000, panels: 100, cpm: 250, lat: 47.2733, lng: -2.2137 },
  { name: "Béziers", region: "Occitanie", departement: "Hérault", students: 2500, totalStudents: 4500, ots: 200000, panels: 100, cpm: 300, lat: 43.3442, lng: 3.2158 },
  { name: "Bayonne", region: "Nouvelle-Aquitaine", departement: "Pyrénées-Atlantiques", students: 2200, totalStudents: 4000, ots: 176000, panels: 120, cpm: 431.82, lat: 43.4929, lng: -1.4748 },
  { name: "Agen", region: "Nouvelle-Aquitaine", departement: "Lot-et-Garonne", students: 2000, totalStudents: 3000, ots: 160000, panels: 100, cpm: 375, lat: 44.2033, lng: 0.6167 },
  { name: "Blois", region: "Centre-Val de Loire", departement: "Loir-et-Cher", students: 2000, totalStudents: 4000, ots: 160000, panels: 100, cpm: 375, lat: 47.5861, lng: 1.3359 },
  { name: "Bourges", region: "Centre-Val de Loire", departement: "Cher", students: 2000, totalStudents: 5000, ots: 160000, panels: 100, cpm: 375, lat: 47.081, lng: 2.3987 },
  { name: "Châteauroux", region: "Centre-Val de Loire", departement: "Indre", students: 2000, totalStudents: 2000, ots: 160000, panels: 80, cpm: 350, lat: 46.8106, lng: 1.691 },
  { name: "Chartres", region: "Centre-Val de Loire", departement: "Eure-et-Loir", students: 1500, totalStudents: 2000, ots: 120000, panels: 80, cpm: 466.67, lat: 48.4439, lng: 1.4894 },
  { name: "Colmar", region: "Grand Est", departement: "Haut-Rhin", students: 1500, totalStudents: 2000, ots: 120000, panels: 80, cpm: 466.67, lat: 48.0794, lng: 7.3585 },
  { name: "Auxerre", region: "Bourgogne-Franche-Comté", departement: "Yonne", students: 1100, totalStudents: 2000, ots: 88000, panels: 80, cpm: 636.36, lat: 47.7982, lng: 3.573 },
];

export const TARGET_LOCATIONS = [
  "Campus universitaires publics",
  "Écoles du supérieur sélectives",
  "Écoles du supérieur privées",
  "Restaurants universitaires",
  "Résidences universitaires",
  "Lieux de vie étudiants",
  "Lycées",
];

export const TARGET_DEMOGRAPHICS = [
  { value: "95%", label: "ont entre 18 et 24 ans" },
  { value: "7h", label: "par jour sur campus en moyenne" },
  { value: "84%", label: "fréquentent les commerces de proximité" },
  { value: "59%", label: "ont un abonnement salle de sport" },
];

export const STUDENT_HABITS = [
  { habit: "Révisent leurs examens sur leur campus", percentage: 69 },
  { habit: "Travaillent en groupe à l'université", percentage: 62 },
  { habit: "Déjeunent sur leur campus", percentage: 56 },
  { habit: "Profitent de la cafétéria de leur école", percentage: 45 },
  { habit: "Font du sport régulièrement", percentage: 21 },
  { habit: "Sont dans une association étudiante", percentage: 14 },
];

export const STUDENT_INTERESTS = [
  { interest: "Musique", percentage: 72 },
  { interest: "Cinéma", percentage: 59 },
  { interest: "TV & Séries", percentage: 58 },
  { interest: "Sport", percentage: 52 },
  { interest: "Jeux vidéo", percentage: 48 },
  { interest: "Voyages", percentage: 48 },
];

export const CASE_STUDIES = [
  {
    id: "toeic",
    client: "ETS Global",
    campaign: "Printemps de Cadeaux",
    description: "Campagne TOEIC-TOEFL de notoriété et engagement",
    stats: [
      { label: "Hôtes terrain", value: "8" },
      { label: "Sacs distribués", value: "8 000" },
      { label: "Lots gagnés", value: "48" },
    ],
    details: [
      "Van Volkswagen habillé aux couleurs TOEIC",
      "Quiz interactif + roue des cadeaux",
      "3 tablettes tactiles sur pied",
      "Beach flags pour visibilité maximale",
    ],
  },
  {
    id: "doritos",
    client: "Doritos",
    campaign: "For the Bold",
    description: "Échantillonnage et activation digitale massive",
    stats: [
      { label: "Paquets distribués", value: "200 000" },
      { label: "Sites Île-de-France", value: "31" },
      { label: "Semaines", value: "3" },
    ],
    details: [
      "14 beachflags déployés",
      "Activation Facebook et Twitter",
      "1 mois de postering en amont",
      "Couverture réseaux sociaux organique",
    ],
  },
];

// Catégories utilisées pour regrouper les logos sur la page /references
export const CLIENT_CATEGORIES = [
  "Institutions & Collectivités",
  "Écoles & Formation",
  "Grandes Marques & Entreprises",
  "Culture & Médias",
] as const;

export type ClientCategory = (typeof CLIENT_CATEGORIES)[number];

export interface ClientLogo {
  name: string;
  /** Chemin du fichier logo, ou null en attendant de recevoir le visuel */
  logo: string | null;
  category: ClientCategory;
  /** Mis en avant dans la sélection de la page d'accueil */
  featured?: boolean;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  // --- Déjà en ligne ---
  { name: "Crédit Mutuel", logo: "/logos/clients/Logo Credit-Mutuel.png", category: "Grandes Marques & Entreprises", featured: true },
  { name: "Le Figaro", logo: "/logos/clients/Logo_Le_Figaro.svg.png", category: "Culture & Médias", featured: true },
  { name: "Le Figaro Étudiant", logo: "/logos/clients/Logo Le Figaro étudiant 2.png", category: "Culture & Médias" },
  { name: "INSEE", logo: "/logos/clients/Logo Insee.png", category: "Institutions & Collectivités", featured: true },
  { name: "EPITA", logo: "/logos/clients/Logo EPITA.png", category: "Écoles & Formation" },
  { name: "ESPI", logo: "/logos/clients/Logo ESPI.jpg", category: "Écoles & Formation" },
  { name: "Urssaf", logo: "/logos/clients/Logo URSSAF.png", category: "Institutions & Collectivités", featured: true },
  { name: "Carsat Aquitaine", logo: "/logos/clients/Logo Carsat Aquitaine.jpg", category: "Institutions & Collectivités" },
  { name: "INRS", logo: "/logos/clients/Logo INRS.svg.png", category: "Institutions & Collectivités" },
  { name: "Hopteo", logo: "/logos/clients/Logo HOPTEO.jpeg", category: "Grandes Marques & Entreprises" },
  { name: "DREETS", logo: "/logos/clients/Logo DREETS Nvlle Aquitaine.png", category: "Institutions & Collectivités" },
  { name: "Montpellier Métropole", logo: "/logos/clients/Logo - Montpellier - Métropole.png", category: "Institutions & Collectivités", featured: true },
  { name: "Mémorial de la Shoah", logo: "/logos/clients/Logo Mémorial Shoah.jpeg", category: "Culture & Médias" },
  { name: "Les Compagnons du Devoir", logo: "/logos/clients/Logo CompagonsduDevoir.jpg", category: "Écoles & Formation" },
  { name: "ISEGCOM", logo: "/logos/clients/Logo ISEGCOM.png", category: "Écoles & Formation" },
  { name: "Kangourou Kids", logo: "/logos/clients/Logo Kangourou Kids.png", category: "Grandes Marques & Entreprises" },
  { name: "Golden Coast", logo: "/logos/clients/Logo Golden Coast.png", category: "Grandes Marques & Entreprises" },
  { name: "Arena du Pays d'Aix", logo: "/logos/clients/Logo Arena du Pays d_Aix.png", category: "Culture & Médias" },
  { name: "Abbaye Fontevraud", logo: "/logos/clients/Logo Abbaye Fontevraud.png", category: "Culture & Médias" },
  { name: "MSA", logo: "/logos/clients/Logo Mutualite Sociale Agricole.png", category: "Institutions & Collectivités" },
  { name: "Luminiscence", logo: "/logos/clients/Logo Luminiscence.jpeg", category: "Grandes Marques & Entreprises" },
  { name: "HAS", logo: "/logos/clients/Logo HAS.png", category: "Institutions & Collectivités", featured: true },
  { name: "ICN", logo: "/logos/clients/Logo ICN.avif", category: "Écoles & Formation" },
  { name: "Excelia", logo: "/logos/clients/Logo Excelia.png", category: "Écoles & Formation", featured: true },
  { name: "Rennes Métropole", logo: "/logos/clients/Logo Rennes Métropole.png", category: "Institutions & Collectivités", featured: true },
  { name: "Aivancity", logo: "/logos/clients/Logo aivancity.png", category: "Écoles & Formation", featured: true },
  { name: "Doritos", logo: "/logos/clients/Logo Doritos.png", category: "Grandes Marques & Entreprises", featured: true },
  { name: "PWC", logo: "/logos/clients/Logo PWC.png", category: "Grandes Marques & Entreprises", featured: true },
  { name: "Billets Discount", logo: "/logos/clients/Logo BilletsDiscount.webp", category: "Grandes Marques & Entreprises" },
  { name: "MdJ", logo: "/logos/clients/Logo MdJ.png", category: "Grandes Marques & Entreprises" },
  { name: "LCL", logo: "/images/Logo LCL.png", category: "Grandes Marques & Entreprises", featured: true },
  { name: "Château de Versailles", logo: "/images/Logo_Château_de_Versailles_2017.png", category: "Culture & Médias", featured: true },
  { name: "Education First", logo: "/images/Logo EF.png", category: "Écoles & Formation", featured: true },
  { name: "ENM", logo: "/images/Logo ENM.png", category: "Institutions & Collectivités" },
  { name: "Hela", logo: "/images/Logo Hela.png", category: "Grandes Marques & Entreprises" },
  { name: "ISIT Paris", logo: "/images/Logo ISIT Paris.png", category: "Écoles & Formation" },
  { name: "Paris Manga", logo: "/images/Logo ParisManga.png", category: "Culture & Médias" },
  { name: "Unibail-Rodamco-Westfield", logo: "/images/Lor URW.png", category: "Grandes Marques & Entreprises", featured: true },

  // --- Nouveaux clients ---
  { name: "Bouygues", logo: "/logos/clients/Logo Bouygues.png", category: "Grandes Marques & Entreprises" },
  { name: "Colas", logo: "/logos/clients/Logo Colas.png", category: "Grandes Marques & Entreprises" },
  { name: "Waffle Factory", logo: "/logos/clients/Logo Waffle Factory.png", category: "Grandes Marques & Entreprises" },
  { name: "CCOOP", logo: "/logos/clients/Logo CCOOP.png", category: "Grandes Marques & Entreprises" },
  { name: "Commune de Villeurbanne", logo: "/logos/clients/Logo Villeurbanne.png", category: "Institutions & Collectivités" },
  { name: "ACENSI", logo: "/logos/clients/Logo ACENSI.png", category: "Écoles & Formation" },
  { name: "Antaria Pharma", logo: "/logos/clients/Logo Antaria Pharma.png", category: "Grandes Marques & Entreprises" },
  { name: "OPM", logo: "/logos/clients/Logo OPM.webp", category: "Grandes Marques & Entreprises" },
  { name: "Kurokawa", logo: "/logos/clients/Logo Kurokawa.png", category: "Grandes Marques & Entreprises" },
  { name: "Quai Branly", logo: "/logos/clients/Logo Quai Branly.svg", category: "Culture & Médias" },
  { name: "Festival TV de Monte-Carlo", logo: "/logos/clients/Logo Festival TV Monte-Carlo.png", category: "Culture & Médias" },
  { name: "Département Loire-Atlantique", logo: "/logos/clients/Logo Departement Loire-Atlantique.jpg", category: "Institutions & Collectivités" },
  { name: "Département Essonne", logo: "/logos/clients/Logo Departement Essonne.png", category: "Institutions & Collectivités" },
  { name: "SOGEFI", logo: "/logos/clients/Logo SOGEFI.jpg", category: "Grandes Marques & Entreprises" },
  { name: "Formasup Méditerranée", logo: "/logos/clients/Logo Formasup Mediterranee.png", category: "Écoles & Formation" },
  { name: "CFA Gustave Eiffel Toulouse", logo: "/logos/clients/Logo CFA Gustave Eiffel Toulouse.png", category: "Écoles & Formation" },
  { name: "Versailles Grand Parc", logo: "/logos/clients/Logo Versailles Grand Parc.png", category: "Institutions & Collectivités" },
  { name: "EDC", logo: "/logos/clients/Logo EDC.png", category: "Écoles & Formation" },
  { name: "Région Île-de-France", logo: "/logos/clients/Logo Region IDF.webp", category: "Institutions & Collectivités" },
  { name: "Collège Universel", logo: "/logos/clients/Logo College Universel.webp", category: "Écoles & Formation" },
  { name: "FFF", logo: "/logos/clients/Logo FFF.jpeg", category: "Institutions & Collectivités" },
  { name: "Bourse du Commerce", logo: "/logos/clients/Logo Bourse du Commerce.svg", category: "Culture & Médias" },
  { name: "Hachette", logo: "/logos/clients/Logo Hachette.webp", category: "Grandes Marques & Entreprises" },
  { name: "Ecologic", logo: "/logos/clients/Logo Ecologic.png", category: "Grandes Marques & Entreprises" },
  { name: "Opcommerce", logo: "/logos/clients/Logo Opcommerce.svg", category: "Grandes Marques & Entreprises" },
];

export const CAMPAIGN_TYPES = [
  "Affichage Universitaire",
  "Affichage Scolaire",
  "Digital",
  "Stations Vélib'",
  "MédiaTables",
  "Événementiel",
  "Pack 360°",
  "Je ne sais pas encore",
];

export const BUDGET_RANGES = [
  "Budget non défini",
  "Moins de 2 000 €",
  "2 000 – 5 000 €",
  "5 000 – 15 000 €",
  "15 000 € et plus",
];

// Les ancres (#...) sont préfixées par "/" pour rester utilisables
// depuis n'importe quelle page du site (elles renvoient vers la page
// d'accueil puis scrollent jusqu'à la section).
export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#cible", label: "Notre Cible" },
  { href: "/#reseau", label: "Notre Réseau" },
  { href: "/references", label: "Références" },
  { href: "/simulateur-devis", label: "Simulateur de Devis" },
  { href: "/#contact", label: "Contact" },
];
