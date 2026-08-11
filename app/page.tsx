import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SafetyManual from "@/components/SafetyManual";
import PortalPreview from "@/components/PortalPreview";
import PartnerPages from "@/components/PartnerPages";
import CoverageTestimonials from "@/components/CoverageTestimonials";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <SafetyManual />
        <Features />
        <PortalPreview />
        <PartnerPages />
        <Screenshots />
        <CoverageTestimonials />
        <Download />
        <Faq />
        <Support />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
