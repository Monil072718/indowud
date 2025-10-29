import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applications | Indowud NFC",
  description:
    "Explore applications of Indowud NFC boards: furniture, kitchen cabinets, bathroom panels, architectural cladding, commercial interiors, and more. Premium eco-friendly board solutions for various design needs.",
  keywords: [
    "NFC board applications",
    "kitchen boards",
    "bathroom panels",
    "furniture boards",
    "architectural panels",
    "commercial interior boards",
    "cabinet boards",
  ],
  openGraph: {
    title: "Applications | Indowud NFC",
    description:
      "Explore applications of Indowud NFC boards: furniture, kitchens, bathrooms, and architectural projects.",
  },
};

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
