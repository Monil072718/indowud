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

  // Safety check: if no items, return empty state
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-neutral-500">No pattern images available.</p>
      </div>
    );
  }

  const onKey = (e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowRight") setIdx((i) => (i + 1) % items.length);
    if (e.key === "ArrowLeft")
      setIdx((i) => (i - 1 + items.length) % items.length);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

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
            className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md"
          >
            <Image
              src={src}
              alt={`${name} pattern ${i + 1}`}
              width={900}
              height={600}
              className="h-56 w-full object-cover transition group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={i < 3}
            />
            <span className="absolute bottom-2 right-2 rounded-md bg-black/55 px-2 py-1 text-[11px] font-medium text-white">
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
            <div className="relative w-full">
              <Image
                src={items[idx]}
                alt={`${name} large pattern ${idx + 1}`}
                width={1600}
                height={1066}
                className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
                sizes="100vw"
                priority
              />
              {/* controls */}
              <div className="absolute inset-x-0 -top-12 flex items-center justify-between px-1">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-white/90 px-3 py-1 text-sm shadow hover:bg-white"
                >
                  Close
                </button>
                <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-medium shadow">
                  {idx + 1} / {items.length}
                </span>
              </div>
              <button
                aria-label="Prev"
                onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={() => setIdx((i) => (i + 1) % items.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

