import Hero from "@/components/Hero";
import FamilyGallery from "@/components/FamilyGallery";
import HowItWorks from "@/components/HowItWorks";
import CoverageCompartments from "@/components/CoverageCompartments";
import Testimonials from "@/components/Testimonials";
import ConversionPanel from "@/components/ConversionPanel";
import FAQ from "@/components/FAQ";
import CarrierStrip from "@/components/CarrierStrip";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <FamilyGallery />
      <HowItWorks />
      <CoverageCompartments />
      <ConversionPanel />
      <Testimonials />
      <FAQ />
      <section className="bg-forest px-6">
        <div className="mx-auto max-w-5xl">
          <CarrierStrip tone="dark" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
