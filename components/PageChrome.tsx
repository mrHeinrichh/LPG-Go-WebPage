import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PageChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="subpage">{children}</main>
      <Footer />
    </>
  );
}
