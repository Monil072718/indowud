"use client";
/* eslint-disable @next/next/no-img-element */

import { useMemo } from "react";
import { motion } from "framer-motion";
import BlogCard, { BlogCardPost } from "@/components/sections/blog/BlogCard";

function fetchBlogs(): BlogCardPost[] {
  // Replace with your WP fetch (map to BlogCardPost)
  return [
    {
      id: "1",
      slug: "eco-friendly-furniture",
      title: "Eco-Friendly Furniture: Why Rice Husk Panels Are the Game Changer",
      excerpt:
        "Boards made from rice husk deliver strength, moisture-resistance and stunning finishes with a smaller footprint.",
      cover:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-28",
      readMins: 6,
      tags: ["Sustainability", "NFC"],
    },
    {
      id: "2",
      slug: "termite-proof-boards",
      title: "Termite-Proof Boards: The Better Alternative to Plywood",
      excerpt:
        "Conventional plywood needs treatment; engineered boards stay stable and save maintenance.",
      cover:
        "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-25",
      readMins: 5,
      tags: ["Termite Proof"],
    },
    {
      id: "3",
      slug: "waterproof-kitchen-bath",
      title: "Boards for Kitchens & Bathrooms",
      excerpt:
        "Design confidently in high-moisture areas with panels that keep their form and finish.",
      cover:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-20",
      readMins: 7,
      tags: ["Moisture"],
    },
    {
      id: "4",
      slug: "fire-retardant-boards",
      title: "Fire-Retardant Boards for Safer Homes & Offices",
      excerpt:
        "Safety starts with better materials — understand ratings and real-world behavior.",
      cover:
        "https://images.pexels.com/photos/296110/pexels-photo-296110.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-15",
      readMins: 5,
      tags: ["Fire Safety"],
    },
    {
      id: "5",
      slug: "husk-vs-wood",
      title: "Husk Panels vs Wood Panels: Which Should You Choose?",
      excerpt:
        "Cost, stability, maintenance, and sustainability — a practical comparison.",
      cover:
        "https://images.pexels.com/photos/164010/pexels-photo-164010.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-12",
      readMins: 8,
      tags: ["Comparison"],
    },
  ];
}

export default function BlogListPage() {
  const posts = useMemo(fetchBlogs, []);
  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 md:py-14">
      {/* header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
        className="mb-8 md:mb-10"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Blog
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Stories, comparisons, and how-tos from Indowud NFC.
        </p>
      </motion.header>

      {/* featured post */}
      {featured ? (
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="relative">
            <div className="aspect-[21/9] w-full overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600" />
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <span className="rounded-full bg-emerald-50 px-2 py-1">Featured</span>
              {featured.tags?.slice(0, 2).map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                  {t}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-2 max-w-3xl text-slate-600">{featured.excerpt}</p>

            <a
              href={`/media/blog/${featured.slug}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Read article
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.article>
      ) : null}

      {/* grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <BlogCard key={p.id} post={p} i={i} />
        ))}
      </div>
    </div>
  );
}
