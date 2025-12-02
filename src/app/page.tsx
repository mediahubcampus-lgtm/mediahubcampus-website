import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Services from "@/components/sections/Services";
import Target from "@/components/sections/Target";
import Cities from "@/components/sections/Cities";
import Pack360 from "@/components/sections/Pack360";
import CaseStudies from "@/components/sections/CaseStudies";
import Gallery from "@/components/sections/Gallery";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
      <Target />
      <Cities />
      <Pack360 />
      <CaseStudies />
      <Gallery />
      <Clients />
      <Contact />
    </>
  );
}
