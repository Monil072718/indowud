"use client";

import React, { useMemo, useState, memo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------- Types & Data ----------------------------- */
type NewsKind = "video" | "article" | "short";
type NewsItem = {
  id: string;
  kind: NewsKind;
  title: string;
  source: string; // e.g., Hindu Business Line, One India
  thumb: string;  // image to show in the card (logo or video thumb)
  href: string;   // article URL or YouTube URL
  lang?: string;  // optional label (EN / HI / TA, etc.)
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    kind: "video",
    title: "ETV Article and Video",
    source: "ETV Tamil Nadu",
    thumb:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    lang: "TA",
  },
  {
    id: "2",
    kind: "article",
    title: "Feature in Hindu Business Line",
    source: "Hindu BusinessLine",
    thumb:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60",
    href: "https://www.thehindubusinessline.com/",
  },
  {
    id: "3",
    kind: "video",
    title: "Influencer Video",
    source: "YouTube",
    thumb:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=60",
    href: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
  },
  {
    id: "4",
    kind: "article",
    title: "Construction World — Article",
    source: "Construction World",
    thumb:
      "https://images.unsplash.com/photo-1520697222861-7b53fa0f92f3?auto=format&fit=crop&w=1200&q=60",
    href: "https://www.constructionworld.in/",
  },
  {
    id: "5",
    kind: "short",
    title: "NAS Daily — Shorts",
    source: "YouTube Shorts",
    thumb:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=60",
    href: "https://www.youtube.com/shorts/aqz-KE-bpKQ",
    lang: "EN",
  },
  {
    id: "6",
    kind: "article",
    title: "One India — Coverage",
    source: "One India",
    thumb:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=1200&q=60",
    href: "https://www.oneindia.com/",
  },
  // add as many as you like (videos, shorts, articles)...
];

/* ----------------------------- Small Utilities ----------------------------- */
const TABS: { key: "all" | NewsKind; label: string }[] = [
  { key: "all", label: "All" },
  { key: "video", label: "Videos" },
  { key: "short", label: "Shorts" },
  { key: "article", label: "Articles" },
];

function getYouTubeEmbed(url: string) {
  // quick & forgiving extractor
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
      if (u.pathname.startsWith("/shorts/")) return `https://www.youtube.com/embed/${u.pathname.split("/")[2]}`;
    }
    if (u.hostname === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
  } catch {}
  return null;
}

/* ----------------------------- Page Component ----------------------------- */
export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["key"]>("all");
  const [videoOpen, setVideoOpen] = useState<NewsItem | null>(null);

  const items = useMemo(() => {
    if (activeTab === "all") return NEWS_ITEMS;
    return NEWS_ITEMS.filter((n) => n.kind === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Top bar / breadcrumb */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                News & Media
              </h1>
              {/* Breadcrumb */}
              <nav className="mt-3 text-xs md:text-sm tracking-widest text-gray-500 uppercase" aria-label="Breadcrumb">
                <ol className="flex items-center">
                  <li>
                    <Link href="/" className="hover:text-gray-700 transition-colors">
                      HOME
                    </Link>
                  </li>
                  <li aria-hidden="true" className="mx-1">/</li>
                  <li>
                    <Link href="/media" className="hover:text-gray-700 transition-colors">
                      MEDIA
                    </Link>
                  </li>
                  <li aria-hidden="true" className="mx-1">/</li>
                  <li>NEWS</li>
                </ol>
              </nav>
              <p className="mt-1 text-slate-600">
                Media mentions, videos, and articles about Indowud.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          {TABS.map((t) => {
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={[
                  "px-3 py-1.5 rounded-full text-sm transition",
                  active
                    ? "bg-slate-900 text-white shadow"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-8"
          >
            {items.map((n) => (
              <Card
                key={n.id}
                item={n}
                onPlay={() => {
                  if (n.kind === "video" || n.kind === "short") setVideoOpen(n);
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* (Optional) Load more */}
        {/* <div className="pb-12 text-center">
          <button className="px-4 py-2 text-sm rounded-full bg-slate-900 text-white hover:opacity-90">
            Load more
          </button>
        </div> */}
      </div>

      {/* Video lightbox */}
      <Lightbox item={videoOpen} onClose={() => setVideoOpen(null)} />
    </div>
  );
}

/* ----------------------------- Card ----------------------------- */
const Card = React.memo(function Card({ item, onPlay }: { item: NewsItem; onPlay: () => void }) {
  const isVideo = item.kind === "video" || item.kind === "short";

  return (
      <motion.article
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
    >
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        {/* Use <img> to avoid next.config image domains fuss */}
        <img
          src={item.thumb}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isVideo && (
          <button
            onClick={onPlay}
            className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg transition group-hover:scale-105"
            aria-label="Play video"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-slate-900">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span
            className={[
              "inline-flex items-center rounded-full px-2 py-0.5 ring-1",
              item.kind === "article" && "bg-emerald-50 text-emerald-700 ring-emerald-200",
              item.kind === "video" && "bg-indigo-50 text-indigo-700 ring-indigo-200",
              item.kind === "short" && "bg-pink-50 text-pink-700 ring-pink-200",
            ].join(" ")}
          >
            {item.kind.toUpperCase()}
          </span>
          {item.lang && <span>• {item.lang}</span>}
          <span className="ml-auto">{item.source}</span>
        </div>

        <h3 className="mt-2 text-base font-semibold text-slate-900 leading-snug line-clamp-2">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          {item.kind === "article" ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-900 hover:opacity-80"
            >
              Read article →
            </a>
          ) : (
            <button
              onClick={onPlay}
              className="text-sm font-medium text-slate-900 hover:opacity-80"
            >
              Watch video →
            </button>
          )}

          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-xs text-slate-500 hover:text-slate-700"
          >
            Open source
          </a>
        </div>
      </div>
    </motion.article>
  );
});

/* ----------------------------- Lightbox ----------------------------- */
function Lightbox({
  item,
  onClose,
}: {
  item: NewsItem | null;
  onClose: () => void;
}) {
  const embed = item ? getYouTubeEmbed(item.href) : null;
  const isVideo = item && (item.kind === "video" || item.kind === "short");

  return (
    <AnimatePresence>
      {item && isVideo && embed && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 m-auto h-[60vh] w-[92vw] max-w-5xl rounded-2xl bg-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${embed}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-2xl border-0"
              title={item.title}
            />
          </motion.div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full bg-white/90 p-2 shadow"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
