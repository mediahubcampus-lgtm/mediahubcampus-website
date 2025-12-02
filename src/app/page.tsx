import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Statistics />
      <Gallery />
      <Clients />
      <Contact />
    </>
  );
}
