import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Indowud NFC",
  description:
    "Browse the Indowud NFC product portfolio: exterior and interior panels, doors, frames, jallis, profiles, trims and more — engineered with sustainable natural fibre composites.",
  keywords: [
    "Indowud products",
    "NFC boards",
    "natural fibre composite",
    "eco-friendly panels",
    "green building materials",
    "architectural products",
  ],
  openGraph: {
    title: "Products | Indowud NFC",
    description:
      "Discover the complete Indowud NFC range — zero-filler panels, engineered doors, frames, trims and speciality profiles.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


