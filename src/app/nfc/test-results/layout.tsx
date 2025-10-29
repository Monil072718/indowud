import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Results | Indowud NFC",
  description:
    "Comprehensive test results for Indowud NFC boards: mechanical properties, physical properties, fire resistance, water resistance, and quality certifications.",
  keywords: [
    "NFC test results",
    "board test data",
    "quality certifications",
    "mechanical properties",
    "physical properties testing",
  ],
  openGraph: {
    title: "Test Results | Indowud NFC",
    description: "Comprehensive test results and quality certifications for NFC boards.",
  },
};

export default function TestResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
