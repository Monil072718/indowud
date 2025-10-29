import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparative Study | Indowud NFC",
  description:
    "Compare Indowud NFC boards with traditional materials like plywood, MDF, and particle boards. See specifications, performance, and advantages side-by-side.",
  keywords: [
    "NFC vs plywood",
    "board comparison",
    "NFC vs MDF",
    "material comparison",
    "board specifications comparison",
  ],
  openGraph: {
    title: "Comparative Study | Indowud NFC",
    description: "Compare NFC boards with traditional materials like plywood and MDF.",
  },
};

export default function ComparativeStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
