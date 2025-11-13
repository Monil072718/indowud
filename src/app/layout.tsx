import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/components/common/Header";
import {
  OrganizationSchema,
  WebsiteSchema,
} from "@/components/common/StructuredData";

// Lazy load Footer - it's below the fold
const Footer = dynamic(() => import("@/components/common/Footer"), {
  ssr: true, // Keep SSR for SEO
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://indowud.com"),
  title: {
    default: "Indowud NFC – Premium Eco-Friendly Board Solutions",
    template: "%s | Indowud",
  },
  description:
    "Indowud NFC offers premium eco-friendly board solutions made from rice husk. Termite-proof, waterproof, fire-retardant panels for sustainable design and construction.",
  keywords: [
    "Indowud NFC",
    "eco-friendly boards",
    "rice husk boards",
    "sustainable building materials",
    "GreenPro certified",
  ],
  authors: [{ name: "Indowud" }],
  creator: "Indowud NFC Private Limited",
  publisher: "Indowud NFC Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Indowud",
    title: "Indowud NFC – Premium Eco-Friendly Board Solutions",
    description:
      "Termite-proof, waterproof, fire-retardant panels made from rice husk. GreenPro certified sustainable building materials.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indowud NFC – Premium Eco-Friendly Board Solutions",
    description: "Termite-proof, waterproof, fire-retardant panels made from rice husk.",
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="preload" as="image" href="/nfc-decking.png.webp" />
      </head>
      <body className="min-h-screen">
        <Header />
        <main className="pt-20" id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
