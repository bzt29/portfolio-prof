import type { MetadataRoute } from "next";
import { APP_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/cv"].map((path) => ({
    url: new URL(path, APP_CONFIG.baseUrl).href,
  }));
}
