import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision | Indowud NFC",
  description:
    "Learn about Indowud NFC's mission and vision. Our commitment to sustainable building materials, eco-friendly solutions, and innovation in board technology.",
  keywords: [
    "Indowud mission",
    "company vision",
    "sustainability mission",
    "eco-friendly vision",
  ],
  openGraph: {
    title: "Mission & Vision | Indowud NFC",
    description: "Indowud NFC's commitment to sustainable building materials and innovation.",
  },
};

export default function MissionVisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
