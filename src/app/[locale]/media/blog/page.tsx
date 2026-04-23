"use client";

import { useMemo, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import BlogCard, { BlogCardPost } from "@/components/sections/blog/BlogCard";
import PageHeader from "@/components/common/PageHeader";

/* ----------------------- mock fetcher (swap with WP REST) ----------------------- */
import { getAllPosts } from "@/lib/blog-data";

function fetchBlogs(): BlogCardPost[] {
  return getAllPosts();
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

  // paginate the grid
  const PAGE_SIZE = 9; // Increased page size for better grid look
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));

  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const pageParam = Number(sp.get("page") || "1");
  const page =
    Number.isFinite(pageParam) && pageParam >= 1
      ? Math.min(pageParam, totalPages)
      : 1;

  const start = (page - 1) * PAGE_SIZE;
  const current = posts.slice(start, start + PAGE_SIZE);

  const setPage = (p: number) => {
    const params = new URLSearchParams(sp?.toString() ?? "");
    if (p <= 1) params.delete("page");
    else params.set("page", String(p));
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <PageHeader
        category="Media"
        title="Our Latest Stories"
        description="Discover insights, comparisons, and expert advice on sustainable construction and modern design with Indowud NFC."
      />

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-20">
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
