import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Indowud NFC",
  description:
    "Indowud NFC is GreenPro certified and contributes to Green Rating projects. Learn about our eco-friendly production, sustainable materials, and environmental certifications for sustainable building solutions.",
  keywords: [
    "sustainable boards",
    "GreenPro certified",
    "eco-friendly building materials",
    "green rating boards",
    "sustainable construction",
    "environmental certification",
  ],
  openGraph: {
    title: "Sustainability | Indowud NFC",
    description:
      "GreenPro certified NFC boards. Contributing to Green Rating projects with sustainable building solutions.",
  },
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
