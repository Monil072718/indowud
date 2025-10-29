"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "If you love something it will work",
    subtitle: "That's the real design mantra",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
    accent: "#10b981",
  },
  {
    title: "Innovation meets elegance",
    subtitle: "Creating tomorrow's designs today",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920",
    accent: "#f59e0b",
  },
  {
    title: "Where creativity comes alive",
    subtitle: "Designing the future of spaces",
    image:
      "https://images.pexels.com/photos/1647776/pexels-photo-1647776.jpeg?auto=compress&cs=tinysrgb&w=1920",
    accent: "#ec4899",
  },
];

const AUTO_MS = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const next = () => {
    setDirection("next");
    setIndex(i => (i + 1) % slides.length);
  };

  const prev = () => {
    setDirection("prev");
    setIndex(i => (i - 1 + slides.length) % slides.length);
  };

  const goTo = (i: number) => {
    setDirection(i > index ? "next" : "prev");
    setIndex(i);
  };

  useEffect(() => {
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [index]);

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-teal-50 via-\[#00d5be\] to-teal-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
      </div>
      
      {/* Split Screen Design */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Image with Clip Path */}
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
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-\[#00d5be\]/60 via-\[#00d5be\]/30 to-transparent" />
            </div>
          ))}

          {/* Geometric Accent Lines (REMOVED) */}
          {/* 
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-white/0 via-white/80 to-white/0" />
          <div
            className="absolute top-0 right-4 w-1 h-full transition-all duration-700"
            style={{
              background: `linear-gradient(to bottom, transparent, ${slides[index].accent}, transparent)`,
            }}
          />
          */}
        </div>

        {/* Right Side - Content */}
        <div className="hidden lg:flex w-2/5 h-full items-center justify-center px-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-\[#00d5be\]/10 to-teal-50" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #00d5be 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse"
              style={{ backgroundColor: slides[index].accent }}
            />
            <div
              className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-3xl animate-pulse"
              style={{ backgroundColor: slides[index].accent, animationDelay: '1s' }}
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

                <button
                  className="group relative px-8 py-4 bg-white text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-105 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ borderColor: slide.accent }}
                  aria-label={`Explore more about ${slide.title}`}
                >
                  <span className="relative z-10">Explore More</span>
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ backgroundColor: slide.accent }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Content Overlay */}
      <div className="lg:hidden absolute inset-0 flex items-end pb-32 px-8">
        <div className="w-full">
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

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {slide.title}
              </h1>

              <p className="text-lg text-gray-700 mb-6">{slide.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls (Prev/Next only) */}
      <div className="absolute bottom-8 left-8 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={next}
          className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Vertical Progress Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        {slides.map((slide, i) => (
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

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-white font-mono text-sm z-20">
        <span className="text-3xl font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-white/40 mx-2">/</span>
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
