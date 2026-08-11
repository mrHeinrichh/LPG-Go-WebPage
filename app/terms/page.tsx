import type { Metadata } from "next";
import Header from "@/components/Header";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions - ${site.name}`,
  description:
    "Terms and Conditions for LPG Go customers, merchants, riders, administrators, SCC, Credit Orders, returns, refunds, privacy, and marketplace operations.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <Terms />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
