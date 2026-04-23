import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Indowud NFC",
  description:
    "Watch videos about Indowud NFC boards: corporate videos, testimonials, product demonstrations, and educational content about eco-friendly board solutions.",
  keywords: [
    "NFC videos",
    "board demonstration",
    "corporate video",
    "product video",
    "testimonials",
  ],
  openGraph: {
    title: "Videos | Indowud NFC",
    description: "Watch videos about Indowud NFC boards and eco-friendly solutions.",
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
