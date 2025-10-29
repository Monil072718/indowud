import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Test Results | Indowud NFC",
  description:
    "Comprehensive fire test results for Indowud NFC boards. Fire-retardant properties, safety certifications, and flame resistance testing data.",
  keywords: [
    "fire test results",
    "fire-retardant boards",
    "fire safety certification",
    "flame resistance",
    "NFC fire rating",
  ],
  openGraph: {
    title: "Fire Test Results | Indowud NFC",
    description: "Fire-retardant properties and safety certifications for NFC boards.",
  },
};

export default function FireTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
