import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MediaHub Campus - Régie Publicitaire Universitaire",
    short_name: "MediaHub Campus",
    description:
      "Touchez plus de 2,19 millions d'étudiants dans 60 villes universitaires. Affichage, digital, événementiel sur les campus de France.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logos/brand/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
