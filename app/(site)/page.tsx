import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riviut",
  description: "Clinica especializada en salud renal Reviut.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/*<Brands />*/}
      <Feature />
      {/*<About />
      <FeaturesTab />*/}
      <FunFact />
      {/*<Integration />*/}
      <CTA />
      {/*<FAQ />*/}
      <Testimonial />
      {/*<Pricing />*/}
      <Contact />
      {/*<Blog />*/}
    </main>
  );
}
