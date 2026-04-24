import type { Metadata } from "next";
import "@/app/globals.css";
import dynamic from "next/dynamic";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import {
  OrganizationSchema,
  WebsiteSchema,
} from "@/components/common/StructuredData";

const inter = Inter({ subsets: ["latin"], display: "swap" });

import Header from "@/components/layout/Header";

// Lazy load Footer - it's below the fold
const Footer = dynamic(() => import("@/components/layout/Footer"), {
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

import MotionProvider from "@/components/common/MotionProvider";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "hi" | "ar" | "pt" | "tr" | "fr")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className={inter.className}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/imgi_2_logo.png.webp" fetchPriority="high" />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>
            <Header />
            <main className="pt-32" id="main-content">{children}</main>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
