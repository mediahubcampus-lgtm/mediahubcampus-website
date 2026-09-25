import type { Metadata } from "next";
import ReferencesContent from "@/components/sections/ReferencesContent";

export const metadata: Metadata = {
  title: "Nos Références - MediaHub Campus",
  description:
    "Marques, institutions et établissements qui font confiance à MediaHub Campus pour leurs campagnes sur les campus universitaires et lycées de France.",
  alternates: {
    canonical: "/references",
  },
  openGraph: {
    title: "Nos Références - MediaHub Campus",
    description:
      "Marques, institutions et établissements qui font confiance à MediaHub Campus.",
    url: "https://mediahubcampus.com/references",
  },
};

export default function ReferencesPage() {
  return <ReferencesContent />;
}
