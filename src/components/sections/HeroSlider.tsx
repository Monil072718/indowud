"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  title: string;
  subtitle: string;
  image: string;
  accent: string;
};

const slides: Slide[] = [
  {
    title: "Design with soul",
    subtitle: "Spaces that breathe and inspire.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    accent: "#10b981",
  },
  {
    title: "Form meets function",
    subtitle: "Beauty, balance, and purpose.",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    accent: "#f59e0b",
  },
  {
    title: "Crafted for living",
    subtitle: "Where ideas turn into homes.",
    image:
      "https://images.pexels.com/photos/1647776/pexels-photo-1647776.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    accent: "#ec4899",
  },
];

// ⏱️ 3 seconds per slide
const AUTO_MS = 3000;

export default function HeroShowcaseSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i: number) => setIndex(i);

  // 🔁 always autoplay every 3s, no hover/touch pause
  useEffect(() => {
    timerRef.current = window.setInterval(next, AUTO_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  // mobile swipe (doesn't pause autoplay)
  const onTouchStart: React.TouchEventHandler = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove: React.TouchEventHandler = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd: React.TouchEventHandler = () => {
    const dx = touchDeltaX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background slides (Ken Burns + crossfade) */}
      <div className="absolute inset-0">
        {slides.map((s, i) => {
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className={`h-full w-full object-cover will-change-transform ${
                    isActive ? "animate-kenburns" : ""
                  }`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Foreground content card */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl rounded-3xl bg-white/80 backdrop-blur-md p-6 sm:p-8 shadow-xl">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="inline-block h-1 w-10 rounded-full"
                style={{ backgroundColor: slides[index].accent }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: slides[index].accent }}
              >
                0{index + 1} / 0{slides.length}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              {slides[index].title}
            </h1>
            <p className="mt-3 sm:mt-4 text-neutral-700 text-base sm:text-lg">
              {slides[index].subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="rounded-full px-5 py-2.5 text-white text-sm font-semibold shadow-md transition hover:shadow-lg"
                style={{ backgroundColor: slides[index].accent }}
              >
                Explore Work
              </a>
              <a
                href="#"
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-neutral-800 bg-white/90 ring-1 ring-black/5 hover:bg-white"
              >
                Our Process
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dots */}
      <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center gap-2 sm:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Desktop thumbnail strip (kept, as requested) */}
      <div className="pointer-events-none absolute bottom-6 inset-x-0 z-20 hidden justify-center lg:flex">
        <div className="flex gap-3 rounded-2xl bg-black/30 p-3 backdrop-blur-md">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`pointer-events-auto relative h-14 w-24 overflow-hidden rounded-xl ring-2 transition ${
                i === index ? "ring-white" : "ring-transparent hover:ring-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className={`absolute inset-0 transition ${
                  i === index ? "bg-black/0" : "bg-black/25"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* corner counter */}
      <div className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-md">
        {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      <style>{`
        /* Ken Burns tuned for 3s slide */
        @keyframes kenburns {
          0%   { transform: scale(1.02) translate3d(0,0,0); }
          100% { transform: scale(1.08) translate3d(0,0,0); }
        }
        .animate-kenburns {
          animation: kenburns ${AUTO_MS}ms ease-out both;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
