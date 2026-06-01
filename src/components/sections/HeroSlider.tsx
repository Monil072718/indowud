"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";

const images = [
  "/slider-1.webp",
  "/slider-2.webp",
  "/slider-3.webp",
  "/slider-4.png",
  "/slider-5.webp",
];

const accents = ["#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4"];

const AUTO_MS = 5000;

export default function HeroShowcaseWithFounder() {
  const t = useTranslations("HeroSlider");
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const slides = [0, 1, 2, 3, 4].map((i) => ({
    tag: t(`slides.${i}.tag`),
    title: t(`slides.${i}.title`),
    subtitle: t(`slides.${i}.subtitle`),
    image: images[i],
    accent: accents[i],
  }));

  const next = useCallback(() => setIndex((i) => (i + 1) % 5), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + 5) % 5), []);

  // Autoplay with reset
  useEffect(() => {
    timerRef.current = window.setInterval(next, AUTO_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [index, next]);

  const current = slides[index];

  // Text direction — keep slider columns in LTR order even in RTL locales
  // (Arabic text inside will still render RTL correctly)
  return (
    <div className="bg-[#FDFCF8]">
      {/* Hero Showcase Slider Section */}
      <section
        className="relative w-full h-[85vh] min-h-[600px] overflow-hidden text-stone-800 font-sans"
        style={{
          backgroundImage: "url('/imgi_43_Untitled-design.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#FDFCF8",
        }}
      >

        {/* Container — always LTR so image stays right, text stays left */}
        <div dir="ltr" className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-full grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* --- LEFT: Typography & Nav (5 Cols) --- */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-10 lg:pt-0">

              {/* Animated Text Content */}
              <div key={index} className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-stone-800" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                    {current.tag}
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1]">
                  {current.title}
                </h1>

                <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-md">
                  {current.subtitle}
                </p>

                {/* Tagline */}
                <div className="mt-8">
                  <p className="text-base sm:text-lg font-black italic text-teal-600 leading-relaxed tracking-wide">
                    {t("ecoText.line1")} <br />
                    {t("ecoText.line2")} <br />
                    {t("ecoText.line3")}
                  </p>
                </div>
              </div>

              {/* Pagination / Progress */}
              <div className="mt-16 flex items-center gap-6">
                <div className="flex gap-2">
                  <button onClick={prev} className="p-3 rounded-full border border-stone-200 hover:bg-stone-100 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13L5 8L10 3" /></svg>
                  </button>
                  <button onClick={next} className="p-3 rounded-full border border-stone-200 hover:bg-stone-100 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3L11 8L6 13" /></svg>
                  </button>
                </div>

                {/* Number Indicator */}
                <div className="flex items-end gap-1 font-serif">
                  <span className="text-2xl leading-none font-bold text-stone-900">0{index + 1}</span>
                  <span className="text-sm leading-none text-stone-400 mb-1">/ 0{slides.length}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-24 bg-stone-200 rounded-full overflow-hidden relative">
                  <div
                    key={`progress-${index}`}
                    className="absolute inset-y-0 left-0 bg-stone-800 animate-progress"
                  />
                </div>
              </div>

            </div>

            {/* --- RIGHT: Visual Showcase (7 Cols) --- */}
            <div className="lg:col-span-7 h-[50vh] lg:h-full relative order-1 lg:order-2 flex items-center justify-center">

              {/* The Product Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-12">
                {slides.map((s, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${i === index
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                      }`}
                  >
                    <div className="relative w-full h-[60%] lg:h-[70%] max-w-lg flex items-center justify-center">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-sm z-10 relative mx-auto"
                      />
                      {/* Grounding Shadow */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/10 blur-xl rounded-[100%]" />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes progress {
              from { width: 0%; }
              to { width: 100%; }
          }
          .animate-progress {
              animation: progress ${AUTO_MS}ms linear forwards;
          }
        `}</style>
      </section>

    </div>
  );
}