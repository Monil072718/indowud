"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function cn(...x: (string | false | null | undefined)[]) {
  return x.filter(Boolean).join(" ");
}

export default function GalleryClient({
  items,
  name,
}: {
  items: string[];
  name: string;
}) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const onKey = (e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowRight" && items.length > 0) setIdx((i) => (i + 1) % items.length);
    if (e.key === "ArrowLeft" && items.length > 0)
      setIdx((i) => (i - 1 + items.length) % items.length);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

  // Safety check: if no items, return empty state (after all hooks)
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-neutral-500">No pattern images available.</p>
      </div>
    );
  }

  return (
    <>
      {/* grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            className="group relative overflow-hidden rounded-3xl border border-stone-100 bg-stone-50/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="relative aspect-[2/1] w-full">
              <Image
                src={src}
                alt={`${name} pattern ${i + 1}`}
                fill
                className="object-contain p-0 transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={i < 2}
              />
            </div>
            
            {/* Elegant hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-stone-800 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md border border-stone-100/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              </svg>
              View Pattern
            </span>
          </button>
        ))}
      </div>

      {/* lightbox */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-md transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      >
        <div
          className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center p-4 sm:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {open && (
            <div className="relative w-full max-w-5xl mx-auto">
              {/* controls - top */}
              <div className="absolute -top-14 left-0 right-0 flex items-center justify-between px-2 z-10">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/10 text-white px-5 py-2 text-sm font-medium hover:bg-white hover:text-stone-900 transition-colors backdrop-blur-md border border-white/20"
                >
                  Close
                </button>
                <span className="rounded-full bg-white/10 text-white px-4 py-2 text-xs font-medium tracking-widest backdrop-blur-md border border-white/20">
                  {idx + 1} / {items.length}
                </span>
              </div>
              
              {/* image container */}
              <div className="relative bg-white/5 rounded-[2rem] p-2 md:p-4 shadow-2xl backdrop-blur-lg border border-white/10 overflow-hidden">
                <div className="relative aspect-video w-full max-h-[80vh] bg-stone-50 rounded-3xl overflow-hidden flex items-center justify-center shadow-inner">
                  <Image
                    src={items[idx]}
                    alt={`${name} large pattern ${idx + 1}`}
                    fill
                    className="object-contain p-0"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority
                  />
                </div>
              </div>
              
              {/* navigation buttons */}
              {items.length > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg hover:bg-white transition-colors z-10"
                  >
                    <span className="text-2xl leading-none">‹</span>
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => setIdx((i) => (i + 1) % items.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg hover:bg-white transition-colors z-10"
                  >
                    <span className="text-2xl leading-none">›</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

