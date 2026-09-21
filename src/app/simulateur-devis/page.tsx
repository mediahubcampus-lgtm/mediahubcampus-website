import type { Metadata } from "next";
import QuoteSimulator from "@/components/simulator/QuoteSimulator";

export const metadata: Metadata = {
  title: "Simulateur de Devis - MediaHub Campus",
  description:
    "Simulez votre budget de campagne d'affichage universitaire en quelques clics : sélectionnez vos zones Campus et la durée souhaitée pour obtenir une estimation immédiate.",
  alternates: {
    canonical: "/simulateur-devis",
  },
  openGraph: {
    title: "Simulateur de Devis - MediaHub Campus",
    description:
      "Estimez le budget de votre campagne d'affichage universitaire sur les 60 zones Campus MediaHub.",
    url: "https://mediahubcampus.com/simulateur-devis",
  },
};

export default function SimulateurDevisPage() {
  return <QuoteSimulator />;
}
