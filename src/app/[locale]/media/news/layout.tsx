import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Indowud NFC",
  description:
    "Stay updated with the latest news, articles, and updates about Indowud NFC boards. Industry insights, product launches, and sustainability news.",
  keywords: [
    "NFC news",
    "board industry news",
    "sustainability updates",
    "product launches",
  ],
  openGraph: {
    title: "News & Updates | Indowud NFC",
    description: "Latest news and updates about Indowud NFC eco-friendly boards.",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
