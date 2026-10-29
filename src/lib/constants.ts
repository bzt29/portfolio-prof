export const APP_CONFIG = {
  name: "Portfolio - S. M. Hafiz F. Syed",
  shortName: "Hafiz",
  version: "v2.0.0",
  environment: process.env.NODE_ENV || "development",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const SITE_METADATA = {
  title: "S. M. Hafiz F. Syed | Web & Mobile Developer",
  description:
    "Portfolio of S. M. Hafiz F. Syed. Web & Mobile App Developer based in Tasikmalaya, Indonesia. Specializing in Laravel, React, Next.js, Kotlin, and Flutter.",
  keywords: [
    "Hafiz",
    "S. M. Hafiz F. Syed",
    "Web Developer",
    "Mobile Apps",
    "Laravel",
    "React",
    "Next.js",
    "Kotlin",
    "Flutter",
    "Tasikmalaya",
  ],
} as const;
