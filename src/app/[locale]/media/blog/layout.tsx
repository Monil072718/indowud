import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Indowud NFC",
  description:
    "Read stories, comparisons, and how-to guides about Indowud NFC boards. Learn about eco-friendly furniture, termite-proof boards, waterproof solutions, and sustainable building materials.",
  keywords: [
    "NFC blog",
    "eco-friendly furniture",
    "sustainable building materials",
    "rice husk board articles",
    "green building blog",
  ],
  openGraph: {
    title: "Blog | Indowud NFC",
    description: "Stories, comparisons, and how-tos about Indowud NFC eco-friendly boards.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
