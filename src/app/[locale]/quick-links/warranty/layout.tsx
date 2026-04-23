import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty | Indowud NFC",
  description:
    "Indowud NFC warranty information. Learn about warranty terms, coverage, and claims process for our eco-friendly board products.",
  keywords: [
    "NFC warranty",
    "board warranty",
    "product warranty",
    "warranty terms",
  ],
  openGraph: {
    title: "Warranty | Indowud NFC",
    description: "Warranty information and terms for Indowud NFC products.",
  },
};

export default function WarrantyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
