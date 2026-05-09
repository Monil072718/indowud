"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TEAL = "#008B8B";
const MAGENTA = "#E5006D";

const galleryImages = [
  { src: "/pattern-2.jpg", alt: "Indowud Neo & Create - Interior Design 1" },
  { src: "/pattern-3.jpg", alt: "Indowud Neo & Create - Interior Design 2" },
  { src: "/pattern-4.jpg", alt: "Indowud Neo & Create - Interior Design 3" },
  { src: "/pattern-5.jpg", alt: "Indowud Neo & Create - Interior Design 4" },
  { src: "/pattern-6.jpg", alt: "Indowud Neo & Create - Interior Design 5" },
];

export default function GalleryHero({ footerText }: { footerText: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = galleryImages.length;

  const prev = () => setActiveIndex((i) => (i - 1 + count) % count);
  const next = () => setActiveIndex((i) => (i + 1) % count);

  return (
    <div className="pt-8">
      {/* Gallery Container */}
      <div className="w-full rounded-[2rem] overflow-hidden" style={{ backgroundColor: "#EFE8E2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

          {/* Header */}
          <div className="flex items-end justify-between mb-8 px-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: TEAL }}>
                Real Images
              </p>
              <h3 className="text-2xl md:text-3xl font-bold italic" style={{ color: MAGENTA }}>
                Designed by Great Architects
              </h3>
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex gap-3">
              <button
                onClick={prev}
                className="h-11 w-11 flex items-center justify-center rounded-full bg-white text-slate-800 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} strokeWidth={2} />
              </button>
              <button
                onClick={next}
                className="h-11 w-11 flex items-center justify-center rounded-full text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                style={{ backgroundColor: MAGENTA }}
                aria-label="Next image"
              >
                <ChevronRight size={22} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Main Large Image */}
          <div className="relative w-full rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-slate-200">
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className="object-cover object-center transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1400px"
                priority
              />
            </div>

            {/* Thumbnails Overlay — Desktop */}
            <div className="hidden md:flex absolute bottom-5 right-5 gap-2 z-10 bg-white/20 backdrop-blur-md p-2 rounded-2xl border border-white/30">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                    i === activeIndex
                      ? "border-[3px] border-white scale-110"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>

            {/* Counter Badge */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {activeIndex + 1} / {count}
            </div>
          </div>

          {/* Mobile Controls + Thumbnails */}
          <div className="md:hidden mt-6 flex flex-col items-center gap-5">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-slate-800 shadow-md"
                aria-label="Previous"
              >
                <ChevronLeft size={22} strokeWidth={2} />
              </button>
              <button
                onClick={next}
                className="h-12 w-12 flex items-center justify-center rounded-full text-white shadow-md"
                style={{ backgroundColor: MAGENTA }}
                aria-label="Next"
              >
                <ChevronRight size={22} strokeWidth={2} />
              </button>
            </div>
            <div className="flex gap-2 justify-center flex-wrap">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-14 h-10 rounded-lg overflow-hidden transition-all ${
                    i === activeIndex
                      ? "border-[3px] scale-110"
                      : "border-2 border-transparent opacity-50"
                  }`}
                  style={i === activeIndex ? { borderColor: TEAL } : {}}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "2rem" : "0.5rem",
                  backgroundColor: i === activeIndex ? TEAL : "#99d6d6",
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Footer caption */}
      <div className="text-right pt-6 pr-4">
        <span className="text-stone-500 font-serif italic text-sm md:text-base">
          {footerText}
        </span>
      </div>
    </div>
  );
}
