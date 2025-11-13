"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";

type YT = { id: string; title: string; tag?: string };

const vids: YT[] = [
  { id: "7r3axN50R8w", title: "Indowud Innovate" },
  { id: "1MmTPyymufE", title: "Corporate Video (Hindi)" },
  { id: "Nkel1DsLYKA", title: "Corporate Video (English)" },
  { id: "VlHbrlvkV9A", title: "Fire Safety Comparison" },
  { id: "Zh7TyIQuISU", title: "NAS Daily Feature" },
  { id: "RO6LK3mdi4E", title: "Testimonial" },
  { id: "iKU7k7dCoyI", title: "Testimonial" },
  { id: "mKCC5HZ3Nic", title: "Testimonial" },
  { id: "AvrSnE5bypg", title: "Testimonial" },
  { id: "5UyIzKtaSFA", title: "Dainik Bhaskar Feature" },
  { id: "RJp2zMV0VN0", title: "One India Feature" },
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05 },
  }),
};

function Card({ v, i }: { v: YT; i: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`;

  return (
    <motion.article
      custom={i}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm cursor-pointer"
    >
      <div className="relative" ref={containerRef}>
        <div className="pt-[56.25%]" />
        {isLoaded && isInView ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0 h-full w-full bg-slate-900 cursor-pointer"
            onClick={handleClick}
          >
            <Image
              src={thumbnailUrl}
              alt={v.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/30">
              <div className="rounded-full bg-red-600 p-4 shadow-lg transition-transform group-hover:scale-110">
                <svg
                  className="h-8 w-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
          {v.title}
        </h3>
        {v.tag && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">
            {v.tag}
          </span>
        )}
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 md:py-14">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
        className="mb-8 md:mb-10"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Videos
        </h1>
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3"
        >
          <Breadcrumb
            items={[
              { label: "HOME", href: "/" },
              { label: "MEDIA", href: "/media" },
              { label: "VIDEOS" },
            ]}
          />
        </motion.div>
        <p className="mt-2 max-w-2xl text-slate-600">
          Explore stories, comparisons, and features about Indowud NFC.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vids.map((v, i) => (
          <Card key={v.id} v={v} i={i} />
        ))}
      </div>
    </div>
  );
}
