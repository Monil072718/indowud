import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Indowud NFC",
  description:
    "Meet the Indowud NFC team. Learn about our leadership, experts, and dedicated professionals working to deliver premium eco-friendly board solutions.",
  keywords: [
    "Indowud team",
    "NFC leadership",
    "company team",
    "board experts",
  ],
  openGraph: {
    title: "Our Team | Indowud NFC",
    description: "Meet the Indowud NFC team of experts and professionals.",
  },
};

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
