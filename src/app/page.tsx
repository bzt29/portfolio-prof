import PortfolioHome from "@/components/PortfolioHome";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { APP_CONFIG, SITE_METADATA } from "@/lib/constants";

const profile = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${APP_CONFIG.baseUrl}/#website`,
      url: `${APP_CONFIG.baseUrl}/`,
      name: `${PERSONAL_INFO.name} — Portfolio`,
      inLanguage: "id",
      publisher: { "@id": `${APP_CONFIG.baseUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${APP_CONFIG.baseUrl}/#profile`,
      url: `${APP_CONFIG.baseUrl}/`,
      name: SITE_METADATA.title,
      description: SITE_METADATA.description,
      inLanguage: "id",
      isPartOf: { "@id": `${APP_CONFIG.baseUrl}/#website` },
      mainEntity: { "@id": `${APP_CONFIG.baseUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${APP_CONFIG.baseUrl}/#person`,
      name: PERSONAL_INFO.name,
      url: `${APP_CONFIG.baseUrl}/`,
      image: new URL(PERSONAL_INFO.avatarUrl, APP_CONFIG.baseUrl).href,
      jobTitle: PERSONAL_INFO.fullRole,
      description: PERSONAL_INFO.detailedIntro,
      homeLocation: { "@type": "Place", name: PERSONAL_INFO.location },
      sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
      subjectOf: { "@type": "WebPage", url: `${APP_CONFIG.baseUrl}/cv`, name: `CV ${PERSONAL_INFO.name}` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }}
      />
      <PortfolioHome />
    </>
  );
}
