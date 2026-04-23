import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Process | Indowud NFC",
  description:
    "Discover Indowud NFC's advanced manufacturing process from fibre to future-ready boards. Explore our state-of-the-art infrastructure, quality control, and production methods for premium eco-friendly boards.",
  keywords: [
    "NFC manufacturing process",
    "rice husk board production",
    "eco-friendly board manufacturing",
    "board production process",
    "NFC quality control",
  ],
  openGraph: {
    title: "Manufacturing Process | Indowud NFC",
    description:
      "Discover Indowud NFC's advanced manufacturing process from fibre to future-ready boards.",
  },
};

export default function ManufacturingProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
