import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { APP_CONFIG, SITE_METADATA } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_CONFIG.baseUrl),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  authors: [{ name: PERSONAL_INFO.name, url: APP_CONFIG.baseUrl }],
  creator: PERSONAL_INFO.name,
  icons: {
    icon: [{ url: "/favicon-192.png", type: "image/png", sizes: "192x192" }],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: `${PERSONAL_INFO.name} — Portfolio`,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_METADATA.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
