import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Indowud NFC",
  description:
    "Explore Indowud NFC’s complete product range: boards, doors, frames, jaali, decking, fluted profiles, textured panels, trims and more.",
  keywords: [
    "Indowud",
    "NFC products",
    "natural fibre composite",
    "eco-friendly boards",
    "decking",
    "fluted profiles",
    "textured panels",
    "door frames",
    "jaali",
  ],
  openGraph: {
    title: "Products | Indowud NFC",
    description:
      "Boards, doors, frames, jaali, decking, fluted profiles, textured panels, trims—engineered for performance, finish and sustainability.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
