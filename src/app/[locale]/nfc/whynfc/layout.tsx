import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why NFC | Indowud NFC",
  description:
    "Discover why Indowud NFC boards are the superior choice: termite-proof, waterproof, fire-retardant, eco-friendly, and durable. Compare NFC boards with traditional materials and learn the advantages.",
  keywords: [
    "why NFC boards",
    "NFC advantages",
    "board benefits",
    "NFC vs plywood",
    "eco-friendly advantages",
  ],
  openGraph: {
    title: "Why NFC | Indowud NFC",
    description: "Discover why NFC boards are the superior choice for sustainable building.",
  },
};

export default function WhyNFCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
