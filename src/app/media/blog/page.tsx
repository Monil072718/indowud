"use client";
/* eslint-disable @next/next/no-img-element */

import { useMemo, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard, { BlogCardPost } from "@/components/sections/blog/BlogCard";

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
    "inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-semibold transition-colors";
  const active = "border-slate-900 bg-slate-900 text-white hover:bg-slate-800";
  const normal = "border-slate-200 bg-white text-slate-800 hover:bg-slate-50";

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {/* PREVIOUS ONLY */}
      <button
        className={`${btnBase} ${normal}`}
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`dots-${i}`} className="px-2 text-slate-500">
            …
          </span>
        ) : (
          <button
            key={p}
            className={`${btnBase} ${p === page ? active : normal}`}
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}

      {/* NEXT ONLY */}
      <button
        className={`${btnBase} ${normal}`}
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}

/* --------------------------------- Blog Content Component --------------------------------- */
function BlogContent() {
  const posts = useMemo(fetchBlogs, []);
  const [featured, ...rest] = posts;

  // paginate ONLY the grid (rest)
  const PAGE_SIZE = 3; // TEMP: make small to verify pagination. Set back to 9 later.
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
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 text-xs md:text-sm tracking-widest text-gray-500 uppercase"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-gray-700"
              >
                HOME
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">
              /
            </li>
            <li>
              <Link
                href="/media"
                className="transition-colors hover:text-gray-700"
              >
                MEDIA
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">
              /
            </li>
            <li>BLOG</li>
          </ol>
        </motion.nav>
        <p className="mt-2 max-w-2xl text-slate-600">
          Stories, comparisons, and how-tos from Indowud NFC.
        </p>
      </motion.header>

      {/* featured post (unchanged) */}
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
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600" />
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <span className="rounded-full bg-emerald-50 px-2 py-1">
                Featured
              </span>
              {featured.tags?.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-2 py-1 text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-2 max-w-3xl text-slate-600">
              {featured.excerpt}
            </p>

            <a
              href={`/media/blog/${featured.slug}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Read article
              <svg
                className="h-4 w-4"
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
      ) : null}

      {/* grid (paginated) */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {current.map((p, i) => (
          <BlogCard key={p.id} post={p} i={i} />
        ))}
      </div>

      {/* pagination controls */}
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}

/* --------------------------------- Page Component --------------------------------- */
export default function BlogListPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1200px] px-4 py-10 md:py-14">
          <div className="mb-8 md:mb-10">
            <div className="mb-2 h-10 w-64 rounded bg-slate-200"></div>
            <div className="h-4 w-96 rounded bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 rounded-2xl bg-slate-200"></div>
            ))}
          </div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
