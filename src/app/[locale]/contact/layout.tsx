import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Indowud NFC",
  description:
    "Get in touch with Indowud NFC. Contact our team for inquiries about eco-friendly board solutions, technical specifications, pricing, or partnership opportunities. Located in Chennai, India.",
  keywords: [
    "contact Indowud",
    "NFC board inquiry",
    "board pricing",
    "technical support",
    "Chennai office",
  ],
  openGraph: {
    title: "Contact Us | Indowud NFC",
    description: "Get in touch with Indowud NFC for inquiries about eco-friendly board solutions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
