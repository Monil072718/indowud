import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermoforming | Indowud NFC",
  description:
    "Learn about thermoforming process for Indowud NFC boards. Discover temperature ranges, pressure settings, and best practices for thermoforming rice husk boards into custom shapes for furniture and architectural applications.",
  keywords: [
    "thermoforming NFC boards",
    "thermoforming rice husk boards",
    "NFC board thermoforming process",
    "custom shaped boards",
    "furniture thermoforming",
  ],
  openGraph: {
    title: "Thermoforming Process | Indowud NFC",
    description:
      "Learn about thermoforming process for Indowud NFC boards. Temperature ranges, pressure settings, and best practices.",
  },
};

export default function ThermoformingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
