import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Support from "@/components/Support";
import Privacy from "@/components/Privacy";
import Terms from "@/components/Terms";
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
        <Features />
        <Screenshots />
        <Download />
        <Faq />
        <Support />
        <Privacy />
        <Terms />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
