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

export const CITIES = [
  { name: "Île-de-France", students: 750000, lat: 48.8566, lng: 2.3522 },
  { name: "Lyon", students: 110000, lat: 45.764, lng: 4.8357 },
  { name: "Lille", students: 90000, lat: 50.6292, lng: 3.0573 },
  { name: "Toulouse", students: 85000, lat: 43.6047, lng: 1.4442 },
  { name: "Bordeaux", students: 150000, lat: 44.8378, lng: -0.5792 },
  { name: "Montpellier", students: 60000, lat: 43.6108, lng: 3.8767 },
  { name: "Rennes", students: 55000, lat: 48.1173, lng: -1.6778 },
  { name: "Strasbourg", students: 50000, lat: 48.5734, lng: 7.7521 },
  { name: "Grenoble", students: 45000, lat: 45.1885, lng: 5.7245 },
  { name: "Nantes", students: 60000, lat: 47.2184, lng: -1.5536 },
  { name: "Marseille", students: 45000, lat: 43.2965, lng: 5.3698 },
  { name: "Nancy", students: 45000, lat: 48.6921, lng: 6.1844 },
  { name: "Nice", students: 30000, lat: 43.7102, lng: 7.262 },
  { name: "Rouen", students: 35000, lat: 49.4432, lng: 1.0993 },
  { name: "Clermont-Ferrand", students: 75000, lat: 45.7772, lng: 3.087 },
  { name: "Aix-en-Provence", students: 30000, lat: 43.5297, lng: 5.4474 },
  { name: "Caen", students: 25000, lat: 49.1829, lng: -0.3707 },
  { name: "Dijon", students: 25000, lat: 47.322, lng: 5.0415 },
  { name: "Reims", students: 25000, lat: 49.2583, lng: 4.0317 },
  { name: "Tours", students: 25000, lat: 47.3941, lng: 0.6848 },
  { name: "Orléans", students: 20000, lat: 47.9029, lng: 1.909 },
  { name: "Le Havre", students: 9000, lat: 49.4944, lng: 0.1079 },
  { name: "Le Mans", students: 9000, lat: 48.0061, lng: 0.1996 },
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

export const CLIENTS = [
  "LCL",
  "Crédit Mutuel",
  "Château de Versailles",
  "INSEE",
  "EPITA",
  "ISIT",
  "ESPI",
  "Education First",
  "Series Mania",
  "Urssaf",
  "Carsat",
  "INRS",
  "Hopteo",
  "Hela",
  "Paris Manga",
  "DREETS",
  "Montpellier Métropole",
  "Mémorial de la Shoah",
  "Les Compagnons du Devoir",
  "ISEGCOM",
  "Kangourou Kids",
  "Golden Coast",
  "Arena du Pays d'Aix",
  "Fontevraud",
  "MSA",
  "Luminiscence",
  "Unibail-Rodamco-Westfield",
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
  { href: "/#clients", label: "Références" },
  { href: "/simulateur-devis", label: "Simulateur de Devis" },
  { href: "/#contact", label: "Contact" },
];
