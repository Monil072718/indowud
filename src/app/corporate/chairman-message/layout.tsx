import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chairman's Message | Indowud NFC",
  description:
    "Read the Chairman's message about Indowud NFC's journey, values, and vision for sustainable building materials and eco-friendly board solutions.",
  keywords: [
    "chairman message",
    "leadership message",
    "company message",
  ],
  openGraph: {
    title: "Chairman's Message | Indowud NFC",
    description: "Read the Chairman's message about Indowud NFC's vision and values.",
  },
};

export default function ChairmanMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
