import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/policy/refund-policy",
    "/policy/flowcharts",
    "/policy/configuration",
    "/kaligtasan",
    "/kaligtasan/emergency",
    "/consumer-rights",
    "/about/compliance",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
