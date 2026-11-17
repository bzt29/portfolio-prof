import { PERSONAL_INFO } from "@/data/portfolioData";

export const APP_CONFIG = {
  name: `Portfolio - ${PERSONAL_INFO.name}`,
  shortName: "Hafiz",
  version: "v2.0.0",
  environment: process.env.NODE_ENV || "development",
  baseUrl: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://syed.my.id"
  ).origin,
} as const;

export const SITE_METADATA = {
  title: `${PERSONAL_INFO.name} | Software & Network Engineer`,
  description:
    `Portofolio ${PERSONAL_INFO.name}, Software Engineer dan Network Engineer di Majalengka. Proyek web, mobile, infrastruktur jaringan, pengalaman, dan CV.`,
  keywords: [
    "Hafiz",
    PERSONAL_INFO.name,
    "Web Developer",
    "Mobile Apps",
    "Laravel",
    "React",
    "Next.js",
    "Kotlin",
    "Flutter",
    "Tasikmalaya",
    "Majalengka",
  ],
} as const;
