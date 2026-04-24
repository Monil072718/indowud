"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";

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
    kind: "short",
    title: "Nas Daily - shorts",
    source: "Nas Daily",
    thumb: "https://img.youtube.com/vi/Jk4pxVx-kWY/hqdefault.jpg",
    href: "https://youtube.com/shorts/Jk4pxVx-kWY?si=xsD1mcA7Dp1Zxn_K",
  },
  {
    id: "2",
    kind: "article",
    title: "Hindu Business Line Article",
    source: "Hindu Business Line",
    thumb: "",
    href: "https://www.thehindubusinessline.com/news/awoodwithout-wood-to-save-forests/article65553026.ece",
  },
  {
    id: "3",
    kind: "video",
    title: "One India",
    source: "One India",
    thumb: "https://img.youtube.com/vi/RJp2zMV0VN0/hqdefault.jpg",
    href: "https://youtu.be/RJp2zMV0VN0?si=E_nN-CXiV9yv612R",
  },
  {
    id: "4",
    kind: "video",
    title: "Dainik Bhaskar Youtube",
    source: "Dainik Bhaskar",
    thumb: "https://img.youtube.com/vi/5UyIzKtaSFA/hqdefault.jpg",
    href: "https://youtu.be/5UyIzKtaSFA?si=LRpu2EX-d4L_5hz7",
  },
  {
    id: "5",
    kind: "article",
    title: "Navbharath Times",
    source: "Navbharath Times",
    thumb: "",
    href: "https://navbharattimes.indiatimes.com/business/business-news/story-of-bl-bengani-who-made-plywood-by-using-stubble-and-earning-millions/articleshow/90015448.cms?story=1",
  },
  {
    id: "6",
    kind: "article",
    title: "Dainik Bhaskar News Paper",
    source: "Dainik Bhaskar",
    thumb: "",
    href: "https://www.bhaskar.com/db-original/news/once-used-to-work-as-an-office-boy-on-a-salary-of-100-rupees-today-plywood-is-made-from-paddy-straw-turnover-of-more-than-one-crore-128591419.html",
  },
  {
    id: "7",
    kind: "short",
    title: "Influencer Video - Shorts",
    source: "YouTube Shorts",
    thumb: "https://img.youtube.com/vi/ecf2aEtmPJk/hqdefault.jpg",
    href: "https://youtu.be/ecf2aEtmPJk?si=U4SO7ytyd1pDJ1A1",
  },
  {
    id: "8",
    kind: "article",
    title: "Better India",
    source: "The Better India",
    thumb: "",
    href: "https://thebetterindia.com/289539/chennai-entrepreneur-makes-waterproof-wood-from-rice-husk-to-build-furniture/",
  },
  {
    id: "9",
    kind: "article",
    title: "Hindu Business Line Video",
    source: "Hindu Business Line",
    thumb: "",
    href: "https://www.thehindubusinessline.com/multimedia/video/watch-this-chennai-start-up-creates-boards-from-agricultural-husks/article65556865.ece",
  },
  {
    id: "10",
    kind: "article",
    title: "Construction World - Article",
    source: "Construction World",
    thumb: "",
    href: "https://www.constructionworld.in/policy-updates-and-economic-news/indowud-produces-nfc-board-from-agricultural-husks-to-save-forest/34840",
  },
  {
    id: "11",
    kind: "article",
    title: "Hindi Better India - Article",
    source: "The Better India (Hindi)",
    thumb: "",
    href: "https://hindi.thebetterindia.com/%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3/rags-to-riches-story-chennai-businessman-making-eco-friendly-plywood-indowud-nfc-from-agricultural-waste-india/",
  },
  {
    id: "12",
    kind: "article",
    title: "Gujrati Newspaper and Digital Page",
    source: "ETV Bharat",
    thumb: "",
    href: "https://www.etvbharat.com/gujarati/gujarat/bharat/tamil-nadu-a-private-company-is-now-producing-artificial-wood-from-the-husk-of-paddy/gj20220714221841726726386",
  },
  {
    id: "13",
    kind: "article",
    title: "Telegu Newspaper and Digital Page",
    source: "ETV Bharat",
    thumb: "",
    href: "https://www.etvbharat.com/oriya/odisha/bharat/a-private-company-producing-artificial-wood-from-the-husk-of-paddy-in-chennai/or20220715142225261261476",
  },
  {
    id: "14",
    kind: "article",
    title: "Dina Thandi Newspaper and Digital Page",
    source: "DT Next",
    thumb: "",
    href: "https://www.dtnext.in/city/2022/07/12/city-based-company-makes-furniture-out-of-rice-husks-",
  },
  {
    id: "15",
    kind: "short",
    title: "Class 7 CBSE - Shorts",
    source: "YouTube Shorts",
    thumb: "https://img.youtube.com/vi/AbhDCoSCAmg/hqdefault.jpg",
    href: "https://youtu.be/AbhDCoSCAmg?si=8JcKKYbt614uTYom",
  },
  {
    id: "16",
    kind: "video",
    title: "The Hindu Business Line – Video",
    source: "Hindu Business Line",
    thumb: "https://img.youtube.com/vi/-zfhJLH2fXM/hqdefault.jpg",
    href: "https://youtu.be/-zfhJLH2fXM?si=JlmEsKtJwqsFDZkO",
  },
  {
    id: "17",
    kind: "video",
    title: "Anuj Ramatri - Video",
    source: "Anuj Ramatri",
    thumb: "https://img.youtube.com/vi/F-0Q7k-mlQk/hqdefault.jpg",
    href: "https://youtu.be/F-0Q7k-mlQk?si=w-BUAMCfi_XGbp_o",
  },
];

/* ----------------------------- Small Utilities ----------------------------- */


function getYouTubeEmbed(url: string) {
  // quick & forgiving extractor
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
      if (u.pathname.startsWith("/shorts/")) return `https://www.youtube.com/embed/${u.pathname.split("/")[2]}`;
    }
    if (u.hostname === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
  } catch { }
  return null;
}

/* ----------------------------- Page Component ----------------------------- */
export default function NewsPage() {
  const t = useTranslations("NewsPage");
  const [videoOpen, setVideoOpen] = useState<NewsItem | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Top bar / breadcrumb */}
      <PageHeader
        category={t("category")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-8">
          {NEWS_ITEMS.map((n) => (
            <Card
              key={n.id}
              item={n}
              onPlay={() => {
                if (n.kind === "video" || n.kind === "short") setVideoOpen(n);
              }}
            />
          ))}
        </div>
      </div>

      {/* Video lightbox */}
      <Lightbox item={videoOpen} onClose={() => setVideoOpen(null)} />
    </div>
  );
}

/* ----------------------------- Card ----------------------------- */
const Card = React.memo(function Card({ item, onPlay }: { item: NewsItem; onPlay: () => void }) {
  const t = useTranslations("NewsPage");
  const isVideo = item.kind === "video" || item.kind === "short";

  return (
    <motion.article
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 cursor-pointer"
    >
      <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
        {item.thumb && !item.thumb.includes("youtube.com") && !item.thumb.includes("youtu.be") ? (
          <Image
            src={item.thumb}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
            <span className="text-sm">{t("noThumbnail")}</span>
          </div>
        )}
        {isVideo && (
          <button
            onClick={onPlay}
            className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg transition group-hover:scale-105 cursor-pointer"
            aria-label={t("watchVideo")}
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
            {t(`kinds.${item.kind}`)}
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
              className="text-sm font-medium text-slate-900 hover:opacity-80 cursor-pointer"
            >
              {t("readArticle")} →
            </a>
          ) : (
            <button
              onClick={onPlay}
              className="text-sm font-medium text-slate-900 hover:opacity-80 cursor-pointer"
            >
              {t("watchVideo")} →
            </button>
          )}

          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
          >
            {t("openSource")}
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
