"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "If you love something it will work",
    subtitle: "That's the real design mantra",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Innovation meets elegance",
    subtitle: "Creating tomorrow's designs today",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Where creativity comes alive",
    subtitle: "Designing the future of spaces",
    image:
      "https://images.pexels.com/photos/1647776/pexels-photo-1647776.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

const AUTO_MS = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTO_MS);
    return () => clearInterval(t);
  }, [paused]);

  // restart progress bar on slide change
  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [index]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // basic swipe (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[90vh] md:h-screen w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Background image with Ken Burns */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: AUTO_MS / 1000, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${slides[index].image})`,
            }}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `inherit` }} />
          </motion.div>

          {/* Gradient overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Caption card */}
          <motion.div
            className="absolute left-6 right-6 bottom-28 md:left-12 md:right-auto md:max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-5 md:p-7 shadow-2xl">
              <h2 className="text-white font-bold text-3xl md:text-5xl leading-tight tracking-tight">
                {slides[index].title}
              </h2>
              <p className="mt-2 md:mt-3 text-white/90 text-lg md:text-2xl">
                {slides[index].subtitle}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 transition"
                >
                  {/* Left chevron */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 transition"
                >
                  {/* Right chevron */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Slide counter (top-right) */}
          <div className="absolute top-6 right-6 md:top-8 md:right-10">
            <span className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-white/15 text-white border border-white/20 backdrop-blur">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Bottom controls: progress + dots */}
          <div className="absolute left-6 right-6 bottom-6 md:left-12 md:right-12">
            {/* Progress bar */}
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <motion.div
                key={progressKey}
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: "linear" }}
              />
            </div>

            {/* Dots */}
            <div className="mt-4 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  title={s.title}
                />
              ))}
              {/* Play/Pause */}
              <button
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play" : "Pause"}
                className="ml-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 transition"
              >
                {paused ? (
                  // Play icon
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  // Pause icon
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
