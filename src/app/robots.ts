import type { MetadataRoute } from "next";
import { APP_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    // Includes search crawlers such as Googlebot, Bingbot, and OAI-SearchBot.
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/login"] },
    sitemap: `${APP_CONFIG.baseUrl}/sitemap.xml`,
  };
}
