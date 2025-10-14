"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useMemo } from "react";
import { motion } from "framer-motion";

/* ----------------------------- types ----------------------------- */
type Post = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;        // ISO
  readMins?: number;
  tags?: string[];
  author?: { name: string; avatar?: string };
};

/* --------------------------- demo content ------------------------ */
/** replace this with your real fetcher */
function fetchBlogs(): Post[] {
  return [
    {
      id: "eco-friendly-furniture",
      title: "Eco-Friendly Furniture: Why Rice Husk Panels Are the Game Changer",
      excerpt:
        "Boards made from rice husk deliver strength, moisture-resistance and stunning finishes with a far smaller footprint.",
      cover:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-28",
      readMins: 6,
      tags: ["Sustainability", "NFC"],
      author: { name: "Indowud" },
    },
    {
      id: "termite-proof-boards",
      title: "Termite-Proof Boards: The Better Alternative to Plywood",
      excerpt:
        "Traditional plywood can be vulnerable to insects and moisture. Here’s why engineered boards win in the long run.",
      cover:
        "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-25",
      readMins: 5,
      tags: ["Termite Proof", "How-To"],
      author: { name: "Indowud" },
    },
    {
      id: "waterproof-kitchen-bath",
      title: "Water-Resistant Boards for Kitchens & Bathrooms",
      excerpt:
        "High moisture? No problem. Design with confidence in wet areas using boards that keep their form and finish.",
      cover:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-20",
      readMins: 7,
      tags: ["Moisture", "Applications"],
      author: { name: "Indowud" },
    },
    {
      id: "fire-retardant-boards",
      title: "Fire-Retardant Boards for Safer Homes & Offices",
      excerpt:
        "From international standards to real-world use, here’s what makes an interior genuinely safer.",
      cover:
        "https://images.pexels.com/photos/296110/pexels-photo-296110.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-15",
      readMins: 5,
      tags: ["Fire Safety"],
      author: { name: "Indowud" },
    },
    {
      id: "husk-vs-wood",
      title: "Husk Panels vs Wood Panels: Which Should You Choose?",
      excerpt:
        "Cost, stability, maintenance, and sustainability — a practical comparison for architects and homeowners.",
      cover:
        "https://images.pexels.com/photos/164010/pexels-photo-164010.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-12",
      readMins: 8,
      tags: ["Comparison"],
      author: { name: "Indowud" },
    },
    {
      id: "what-are-rice-husk-panels",
      title: "What Are Rice Husk Panels?",
      excerpt:
        "A quick primer on composition, performance advantages, and where they shine in projects.",
      cover:
        "https://images.pexels.com/photos/373544/pexels-photo-373544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-09-11",
      readMins: 4,
      tags: ["Basics"],
      author: { name: "Indowud" },
    },
  ];
}

/* ----------------------------- animations ------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

/* ----------------------------- helpers --------------------------- */
function prettyDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

/* ------------------------------ UI ------------------------------- */
function Featured({ post }: { post: Post }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* gradient stripe */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600" />
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          <span className="rounded-full bg-emerald-50 px-2 py-1">Featured</span>
          {post.tags?.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2 py-1 text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
          {post.title}
        </h2>
        <p className="mt-2 max-w-3xl text-slate-600">{post.excerpt}</p>

        <div className="mt-5 flex items-center gap-4 text-sm text-slate-500">
          <span>{prettyDate(post.date)}</span>
          {post.readMins ? <span>· {post.readMins} min read</span> : null}
          <a
            href={`/blog/${post.id}`}
            className="ml-auto inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
          >
            Read article
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Card({ post, i }: { post: Post; i: number }) {
  return (
    <motion.article
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative">
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags?.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="line-clamp-2 text-lg font-bold text-slate-900">
          {post.title}
        </h3>
        <p className="mt-1 line-clamp-3 text-sm text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{prettyDate(post.date)}</span>
          {post.readMins ? <span>{post.readMins} min</span> : <span />}
        </div>

        <a
          href={`/blog/${post.id}`}
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Read more
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

export default function BlogIndex() {
  const posts = useMemo(fetchBlogs, []);
  const [first, ...rest] = posts;

  // chunk remaining posts for grid
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

      {/* featured */}
      {first ? <Featured post={first} /> : null}

      {/* grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Card key={p.id} post={p} i={i} />
        ))}
      </div>

      {/* pagination */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {["Prev", "1", "2", "3", "Next"].map((label, i) => {
          const active = label === "1";
          const isArrow = label === "Prev" || label === "Next";
          return (
            <button
              key={i}
              className={[
                "rounded-xl border px-3 py-2 text-sm font-semibold transition",
                active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                isArrow && "!px-4",
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
