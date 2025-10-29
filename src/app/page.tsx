import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Lazy load HeroSlider to reduce initial bundle size
const HeroSlider = dynamic(() => import("@/components/sections/HeroSlider"), {
  loading: () => (
    <div className="relative h-screen w-full bg-gradient-to-br from-teal-50 via-[#00d5be] to-teal-100" />
  ),
  ssr: true, // Keep SSR for SEO
});

export const metadata: Metadata = {
  title: "Indowud NFC – Premium Eco-Friendly Board Solutions | Design Technology",
  description:
    "Indowud NFC offers premium eco-friendly board solutions made from rice husk. Termite-proof, waterproof, fire-retardant panels for furniture, kitchens, bathrooms, and architectural applications. GreenPro certified.",
  keywords: [
    "Indowud NFC",
    "eco-friendly boards",
    "rice husk boards",
    "termite-proof boards",
    "waterproof boards",
    "fire-retardant panels",
    "sustainable furniture",
    "green building materials",
    "architectural panels",
    "kitchen boards",
    "bathroom panels",
  ],
  openGraph: {
    title: "Indowud NFC – Premium Eco-Friendly Board Solutions",
    description: "Termite-proof, waterproof, fire-retardant panels made from rice husk. GreenPro certified sustainable building materials.",
    type: "website",
    locale: "en_US",
    siteName: "Indowud",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indowud NFC – Premium Eco-Friendly Board Solutions",
    description: "Termite-proof, waterproof, fire-retardant panels made from rice husk. GreenPro certified.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Lazy load components below the fold for better initial load performance
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

const BenefitsSection = dynamic(() => import("@/components/sections/BenefitsSection"), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

const TrustedProgramsSection = dynamic(() => import("@/components/sections/TrustedProgramsSection"), {
  loading: () => <div className="h-64 bg-gray-50" />,
  ssr: true,
});

const BrandSection = dynamic(() => import("@/components/sections/BrandSection"), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

const CertificationsSection = dynamic(() => import("@/components/sections/CertificationsSection"), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesSection />
      <BenefitsSection />
      <TrustedProgramsSection />
      <BrandSection />
      <CertificationsSection />
    </>
  );
}
