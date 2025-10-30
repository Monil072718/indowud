"use client";

import { useState, useEffect } from "react";
// ✅ top-level import — NOT /dist/esm/... (this is what fixes the error)
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "If you love something it will work",
    subtitle: "That's the real design mantra",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    accent: "#10b981",
  },
  {
    title: "Innovation meets elegance",
    subtitle: "Creating tomorrow's designs today",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    accent: "#f59e0b",
  },
  {
    title: "Where creativity comes alive",
    subtitle: "Designing the future of spaces",
    image:
      "https://images.pexels.com/photos/1647776/pexels-photo-1647776.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    accent: "#ec4899",
  },
];

const AUTO_MS = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const next = () => {
    setDirection("next");
    setIndex((i) => (i + 1) % slides.length);
  };

  const prev = () => {
    setDirection("prev");
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const goTo = (i: number) => {
    setDirection(i > index ? "next" : "prev");
    setIndex(i);
  };

  useEffect(() => {
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-teal-50 via-[#00d5be] to-teal-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      {/* Split Screen Design */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-3/5 h-full overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                i === index
                  ? "opacity-100 scale-100"
                  : i === (index - 1 + slides.length) % slides.length &&
                    direction === "next"
                  ? "opacity-0 scale-110"
                  : i === (index + 1) % slides.length && direction === "prev"
                  ? "opacity-0 scale-110"
                  : "opacity-0 scale-95"
              }`}
              style={{
                // mobile: no diagonal cut → no white gap
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "auto"}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d5be]/60 via-[#00d5be]/30 to-transparent lg:to-transparent" />
            </div>
          ))}
        </div>

        {/* Right Side - Content (desktop only) */}
        <div className="hidden lg:flex w-2/5 h-full items-center justify-center px-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#00d5be]/10 to-teal-50" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle, #00d5be 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse"
              style={{ backgroundColor: slides[index].accent }}
            />
            <div
              className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-3xl animate-pulse"
              style={{ backgroundColor: slides[index].accent, animationDelay: "1s" }}
            />
          </div>

          <div className="relative z-10 w-full">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === index
                    ? "opacity-100 translate-x-0"
                    : direction === "next"
                    ? "opacity-0 -translate-x-12 absolute"
                    : "opacity-0 translate-x-12 absolute"
                }`}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="h-1 w-20 transition-all duration-700"
                    style={{ backgroundColor: slide.accent }}
                  />
                  <span
                    className="text-sm font-bold tracking-widest"
                    style={{ color: slide.accent }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Content Overlay — tightened bottom padding to kill empty white space */}
      <div className="lg:hidden absolute inset-0 flex items-end pb-10 px-6 pointer-events-none">
        <div className="w-full pointer-events-auto">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-1 w-16"
                  style={{ backgroundColor: slide.accent }}
                />
                <span
                  className="text-sm font-bold"
                  style={{ color: slide.accent }}
                >
                  0{i + 1}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight drop-shadow-sm">
                {slide.title}
              </h1>

              <p className="text-lg text-gray-800 mb-2 drop-shadow-sm">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Progress Indicators – desktop only */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={`w-1 transition-all duration-300 ${
                i === index
                  ? "h-16 bg-white"
                  : "h-8 bg-white/30 group-hover:bg-white/50"
              }`}
            />
            {i === index && (
              <div
                className="absolute top:0 left-0 w-1 bg-gradient-to-b from-transparent to-white origin-top"
                style={{
                  animation: `slideDown ${AUTO_MS}ms linear`,
                  height: "100%",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Prev/Next buttons — show on desktop, small on mobile */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-30">
        <button
          onClick={prev}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white/90 text-gray-900 shadow-md hover:bg-white transition lg:h-12 lg:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white/90 text-gray-900 shadow-md hover:bg-white transition lg:h-12 lg:w-12"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 text-white font-mono text-sm z-20 drop-shadow">
        <span className="text-2xl font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-white/40 mx-1">/</span>
        <span className="text-white/60">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <style>{`
        @keyframes slideDown {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
