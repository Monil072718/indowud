import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Indowud NFC",
  description:
    "View Indowud NFC's certifications and accreditations: GreenPro certification, environmental certifications, quality standards, and industry recognitions.",
  keywords: [
    "NFC certifications",
    "GreenPro certified",
    "environmental certifications",
    "quality certifications",
    "board certifications",
  ],
  openGraph: {
    title: "Certifications | Indowud NFC",
    description: "View Indowud NFC's certifications and accreditations.",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
