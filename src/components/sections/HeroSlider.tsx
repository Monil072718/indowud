"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  tag: string;
};

// Merged Data: Your content + Tags for the Magazine UI
const slides: Slide[] = [
  {
    title: "Design with soul",
    subtitle: "Spaces that breathe and inspire.",
    image: "/slider-1.webp",
    accent: "#10b981", // Emerald
    tag: "Interior Design",
  },
  {
    title: "Form meets function",
    subtitle: "Beauty, balance, and purpose.",
    image: "/slider-2.webp",
    accent: "#f59e0b", // Amber
    tag: "Architecture",
  },
  {
    title: "Crafted for living",
    subtitle: "Where ideas turn into homes.",
    image: "/slider-3.webp",
    accent: "#ec4899", // Pink
    tag: "Lifestyle",
  },
  {
    title: "Sustainable excellence",
    subtitle: "Quality and responsibility in every detail.",
    image: "/slider-4.png",
    accent: "#8b5cf6", // Violet
    tag: "Eco-Friendly",
  },
  {
    title: "Innovation meets tradition",
    subtitle: "Modern solutions with timeless appeal.",
    image: "/slider-5.webp",
    accent: "#06b6d4", // Cyan
    tag: "Modern Craft",
  },
];

const AUTO_MS = 5000;

export default function HeroShowcaseWithFounder() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i: number) => setIndex(i);

  // Autoplay with reset
  useEffect(() => {
    timerRef.current = window.setInterval(next, AUTO_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [index]);

  const current = slides[index];

  return (
    <div className="bg-[#FDFCF8]">
      {/* Hero Showcase Slider Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-[#FDFCF8] text-stone-800 font-sans">
        
        {/* Container */}
        <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
              
              {/* The Backdrop Shape (Arch) */}
              <div 
                  className="absolute w-[90%] h-[80%] lg:h-[85%] bottom-0 lg:bottom-auto rounded-t-[10rem] lg:rounded-t-full transition-colors duration-700 ease-in-out"
                  style={{ backgroundColor: `${current.accent}40` }} // 40 = 25% opacity hex
              />

              {/* The Product Image */}
              <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-12">
                   {slides.map((s, i) => (
                      <div
                          key={i}
                          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                              i === index 
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

      {/* Founder Section */}
      <section className="w-full bg-[#FDFCF8] py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Grid Layout: Ensures Text and Image are in the same line on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            
            {/* Text Content (Left Side) */}
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-2xl font-serif text-stone-900">
                Chairman's Message
              </h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light">
                With over 30 years in the ply industry, Mr. Bengani is respected as
                the founder of Uniply. Today, as the Chairman of Indowud, he is
                pioneering natural fibre composite wood in India and the world.
              </p>
            </div>

            {/* Image Content (Right Side) */}
            <div className="md:col-span-4 flex justify-start md:justify-end">
               {/* Circular Profile Image with subtle shadow */}
               <div className="relative group">
                  <div className="absolute inset-0 bg-stone-200 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img 
                    // Replace with your actual image path
                    src="/founder-image.png" 
                    alt="Mr. Bengani"
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-lg border-4 border-white"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}