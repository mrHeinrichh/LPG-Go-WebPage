import type { Metadata } from "next";
import Header from "@/components/Header";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy - ${site.name}`,
  description:
    "Privacy Policy for LPG Go account, order, location, delivery evidence, merchant, rider, SCC, Credit Order, cylinder return, support, and retention data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <Privacy />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
