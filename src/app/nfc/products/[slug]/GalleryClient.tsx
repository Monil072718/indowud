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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[4/3] w-full bg-slate-50">
              <Image
                src={src}
                alt={`${name} pattern ${i + 1}`}
                fill
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i < 3}
              />
            </div>
            <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              View
            </span>
          </button>
        ))}
      </div>

      {/* lightbox */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      >
        <div
          className="absolute inset-0 mx-auto flex max-w-6xl items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {open && (
            <div className="relative w-full max-w-5xl mx-auto">
              {/* controls - top */}
              <div className="absolute -top-12 left-0 right-0 flex items-center justify-between px-1 z-10">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-white/90 px-3 py-1 text-sm shadow hover:bg-white transition-colors"
                >
                  Close
                </button>
                <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-medium shadow">
                  {idx + 1} / {items.length}
                </span>
              </div>
              
              {/* image container */}
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                <div className="relative aspect-video w-full max-h-[85vh] bg-slate-50 rounded-lg overflow-hidden">
                  <Image
                    src={items[idx]}
                    alt={`${name} large pattern ${idx + 1}`}
                    fill
                    className="object-contain p-4"
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

