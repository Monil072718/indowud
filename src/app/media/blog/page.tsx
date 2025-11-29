"use client";
/* eslint-disable @next/next/no-img-element */

import { useMemo, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import BlogCard, { BlogCardPost } from "@/components/sections/blog/BlogCard";
import Breadcrumb from "@/components/common/Breadcrumb";

/* ----------------------- mock fetcher (unchanged) ----------------------- */
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
    // add more posts here to test > 1 page with larger PAGE_SIZE
  ];
}

/* ------------------------------ Pagination UI ------------------------------ */
function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "…")[] = [];
  const windowSize = 1;
  const push = (v: number | "…") => pages.push(v);

  for (let p = 1; p <= totalPages; p++) {
    const isEdge = p === 1 || p === totalPages;
    const isNear = Math.abs(p - page) <= windowSize;
    if (isEdge || isNear) push(p);
    else {
      const last = pages[pages.length - 1];
      if (last !== "…") push("…");
    }
  }

  const btnBase =
    "inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-200";
  const active = "border-slate-900 bg-slate-900 text-white shadow-md hover:bg-slate-800 hover:shadow-lg";
  const normal = "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900";

  return (
    <nav
      className="mt-16 flex items-center justify-center gap-3"
      aria-label="Pagination"
    >
      {/* PREVIOUS ONLY */}
      <button
        className={`${btnBase} ${normal} disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
      >
        Previous
      </button>

      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`dots-${i}`} className="px-2 text-slate-400 font-medium">
              …
            </span>
          ) : (
            <button
              key={p}
              className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all ${p === page
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100"
                }`}
              onClick={() => onChange(p)}
              aria-current={p === page ? "page" : undefined}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* NEXT ONLY */}
      <button
        className={`${btnBase} ${normal} disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}

/* --------------------------------- Blog Content Component --------------------------------- */
function BlogContent() {
  const posts = useMemo(fetchBlogs, []);
  const [featured, ...rest] = posts;

  // paginate ONLY the grid (rest)
  const PAGE_SIZE = 6; // Increased page size for better grid look
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));

  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const pageParam = Number(sp.get("page") || "1");
  const page =
    Number.isFinite(pageParam) && pageParam >= 1
      ? Math.min(pageParam, totalPages)
      : 1;

  const start = (page - 1) * PAGE_SIZE;
  const current = rest.slice(start, start + PAGE_SIZE);

  const setPage = (p: number) => {
    const params = new URLSearchParams(sp?.toString() ?? "");
    if (p <= 1) params.delete("page");
    else params.set("page", String(p));
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Breadcrumb
                items={[
                  { label: "HOME", href: "/" },
                  { label: "MEDIA", href: "/media" },
                  { label: "BLOG" },
                ]}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Our Latest <span className="text-emerald-600">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Discover insights, comparisons, and expert advice on sustainable construction and modern design with Indowud NFC.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
        {/* Featured Post */}
        {featured ? (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px flex-1 bg-slate-200"></span>
              <span className="text-sm font-bold tracking-wider text-slate-400 uppercase">Featured Article</span>
              <span className="h-px flex-1 bg-slate-200"></span>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200/60 grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-600 opacity-0 md:opacity-100" />

                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                    Featured
                  </span>
                  {featured.tags?.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-emerald-800 transition-colors">
                  <a href={`/media/blog/${featured.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0 md:hidden" aria-hidden="true" />
                    {featured.title}
                  </a>
                </h2>

                <p className="text-slate-600 text-lg mb-8 line-clamp-3 leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium text-slate-500">
                    {new Date(featured.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <a
                    href={`/media/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    Read Article
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        ) : null}

        {/* Grid Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
          <div className="hidden md:block h-px flex-1 bg-slate-200 ml-6"></div>
        </div>

        {/* Grid (paginated) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {current.map((p, i) => (
            <BlogCard key={p.id} post={p} i={i} />
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
}

/* --------------------------------- Page Component --------------------------------- */
export default function BlogListPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50/50">
          <div className="bg-white border-b border-slate-200 py-24">
            <div className="mx-auto max-w-[1200px] px-4 text-center">
              <div className="h-12 w-64 bg-slate-200 rounded-lg mx-auto mb-4 animate-pulse" />
              <div className="h-6 w-96 bg-slate-100 rounded-lg mx-auto animate-pulse" />
            </div>
          </div>
          <div className="mx-auto max-w-[1200px] px-4 py-20">
            <div className="h-96 w-full bg-slate-200 rounded-3xl mb-20 animate-pulse" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[400px] rounded-2xl bg-slate-200 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
