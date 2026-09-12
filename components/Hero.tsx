import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero lpg-hero" id="home">
      <Image className="lpg-hero-image" src="/lpg-cylinders-editorial.png" alt="Upright household LPG cylinders" fill sizes="100vw" priority />
      <div className="wrap">
        <div className="lpg-hero-copy">
          <p className="eyebrow">LOCAL DEALERS. EVERYDAY LPG.</p>
          <h1>LPG GO</h1>
          <p className="lpg-hero-title">Cooking gas,<br /> close to home.</p>
          <p className="sub">Find a nearby dealer. Choose your brand and cylinder size. Order a refill or a new tank.</p>
          <div className="hero-cta">
            <a className="btn" href="https://lpg-go-customer-web.vercel.app">Find a store<ArrowRight size={18} aria-hidden="true" /></a>
            <a className="btn ghost" href="https://lpg-go-merchant-web.vercel.app">Dealer sign in<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
