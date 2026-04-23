import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suggestions & Guidelines | Indowud NFC",
  description:
    "Technical guidelines and best practices for working with Indowud NFC boards. Installation suggestions, workflow recommendations, and tips for zero-defect furniture and architectural applications.",
  keywords: [
    "NFC board guidelines",
    "board installation",
    "furniture installation tips",
    "NFC board best practices",
    "technical guidelines",
    "board installation suggestions",
  ],
  openGraph: {
    title: "Suggestions & Guidelines | Indowud NFC",
    description:
      "Technical guidelines and best practices for working with Indowud NFC boards.",
  },
};

export default function SuggestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
