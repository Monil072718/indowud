import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Indowud NFC",
  description:
    "Frequently asked questions about Indowud NFC boards. Get answers about specifications, applications, installation, maintenance, pricing, and technical details.",
  keywords: [
    "NFC FAQs",
    "board questions",
    "frequently asked questions",
    "NFC specifications",
    "board installation questions",
  ],
  openGraph: {
    title: "FAQs | Indowud NFC",
    description: "Frequently asked questions about Indowud NFC boards.",
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
