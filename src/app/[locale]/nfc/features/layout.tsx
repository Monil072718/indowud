import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Indowud NFC",
  description:
    "Explore the key features of Indowud NFC boards: termite-proof, waterproof, fire-retardant, UV-stable, and eco-friendly. Engineered for durability and performance in furniture, kitchens, bathrooms, and architectural applications.",
  keywords: [
    "NFC board features",
    "termite-proof boards",
    "waterproof boards",
    "fire-retardant panels",
    "UV stable boards",
    "eco-friendly board features",
  ],
  openGraph: {
    title: "Features | Indowud NFC",
    description:
      "Termite-proof, waterproof, fire-retardant, UV-stable NFC boards. Engineered for durability and performance.",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
