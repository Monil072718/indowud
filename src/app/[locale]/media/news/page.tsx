"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";
import { Play, ExternalLink, FileText, X, ArrowRight, Video } from "lucide-react";

type NewsKind = "video" | "article" | "short";

type NewsItem = {
  id: string;
  kind: NewsKind;
  title: string;
  source: string;
  thumb: string;
  href: string;
  lang?: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    kind: "short",
    title: "Nas Daily - Indowud NFC Feature",
    source: "Nas Daily",
    thumb: "/NAS daily vlog.webp",
    href: "https://youtube.com/shorts/Jk4pxVx-kWY?si=xsD1mcA7Dp1Zxn_K",
  },
  {
    id: "2",
    kind: "article",
    title: "A Wood Without Wood: Saving Forests with Rice Husk Technology",
    source: "Hindu Business Line",
    thumb: "/Hindu baseline.webp",
    href: "https://www.thehindubusinessline.com/news/awoodwithout-wood-to-save-forests/article65553026.ece",
  },
  {
    id: "3",
    kind: "video",
    title: "Sustainable Construction: Eco-Friendly Plywood from Agricultural Waste",
    source: "One India",
    thumb: "https://img.youtube.com/vi/RJp2zMV0VN0/maxresdefault.jpg",
    href: "https://youtu.be/RJp2zMV0VN0?si=E_nN-CXiV9yv612R",
  },
  {
    id: "4",
    kind: "video",
    title: "Manufacturing Innovation: Indowud NFC Factory Feature",
    source: "Dainik Bhaskar",
    thumb: "https://img.youtube.com/vi/5UyIzKtaSFA/maxresdefault.jpg",
    href: "https://youtu.be/5UyIzKtaSFA?si=LRpu2EX-d4L_5hz7",
  },
  {
    id: "5",
    kind: "article",
    title: "The Vision of B L Bengani: Creating Wealth from Agricultural Stubble",
    source: "Navbharath Times",
    thumb: "/navbharat time.webp",
    href: "https://navbharattimes.indiatimes.com/business/business-news/story-of-bl-bengani-who-made-plywood-by-using-stubble-and-earning-millions/articleshow/90015448.cms?story=1",
  },
  {
    id: "6",
    kind: "article",
    title: "Success Story: From Humble Beginnings to Sustainable Industry Leader",
    source: "Dainik Bhaskar",
    thumb: "/daily bhaskar.webp",
    href: "https://www.bhaskar.com/db-original/news/once-used-to-work-as-an-office-boy-on-a-salary-of-100-rupees-today-plywood-is-made-from-paddy-straw-turnover-of-more-than-one-crore-128591419.html",
  },
  {
    id: "7",
    kind: "short",
    title: "Modern Interiors with Indowud NFC Panels",
    source: "YouTube Shorts",
    thumb: "https://img.youtube.com/vi/ecf2aEtmPJk/maxresdefault.jpg",
    href: "https://youtu.be/ecf2aEtmPJk?si=U4SO7ytyd1pDJ1A1",
  },
  {
    id: "8",
    kind: "article",
    title: "Waterproof Wood from Rice Husk: A Sustainable Breakthrough",
    source: "The Better India",
    thumb: "/better india.webp",
    href: "https://thebetterindia.com/289539/chennai-entrepreneur-makes-waterproof-wood-from-rice-husk-to-build-furniture/",
  },
  {
    id: "9",
    kind: "article",
    title: "Circular Economy in Action: Chennai Startup's Green Innovation",
    source: "Hindu Business Line",
    thumb: "/Hindu baseline.webp",
    href: "https://www.thehindubusinessline.com/multimedia/video/watch-this-chennai-start-up-creates-boards-from-agricultural-husks/article65556865.ece",
  },
  {
    id: "10",
    kind: "article",
    title: "Saving Forests: One Indowud NFC Board at a Time",
    source: "Construction World",
    thumb: "/construction world.webp",
    href: "https://www.constructionworld.in/policy-updates-and-economic-news/indowud-produces-nfc-board-from-agricultural-husks-to-save-forest/34840",
  },
  {
    id: "11",
    kind: "article",
    title: "The Future of Wood: Rags to Riches Story of Eco-Innovation",
    source: "The Better India (Hindi)",
    thumb: "/better india hindi.webp",
    href: "https://hindi.thebetterindia.com/%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%E0%A4%A3/rags-to-riches-story-chennai-businessman-making-eco-friendly-plywood-indowud-nfc-from-agricultural-waste-india/",
  },
  {
    id: "11a",
    kind: "article",
    title: "The Future of Wood: Rags to Riches Story of Eco-Innovation",
    source: "The Better India (Tamil)",
    thumb: "/better india tamil.webp",
    href: "https://tamil.thebetterindia.com/",
  },
  {
    id: "12",
    kind: "article",
    title: "Technological Advancement in Paddy Husk Upcycling",
    source: "ETV Bharat",
    thumb: "/ETV gujarat.webp",
    href: "https://www.etvbharat.com/gujarati/gujarat/bharat/tamil-nadu-a-private-company-is-now-producing-artificial-wood-from-the-husk-of-paddy/gj20220714221841726726386",
  },
  {
    id: "13",
    kind: "article",
    title: "Sustainable Furnishing: The Indowud Revolution",
    source: "ETV Bharat",
    thumb: "/ETV odisha.webp",
    href: "https://www.etvbharat.com/oriya/odisha/bharat/a-private-company-producing-artificial-wood-from-the-husk-of-paddy-in-chennai/or20220715142225261261476",
  },
  {
    id: "14",
    kind: "article",
    title: "Green Furniture: Chennai's Answer to Deforestation",
    source: "DT Next",
    thumb: "/DT Next.webp",
    href: "https://www.dtnext.in/city/2022/07/12/city-based-company-makes-furniture-out-of-rice-husks-",
  },
  {
    id: "15",
    kind: "short",
    title: "Educational Feature: Sustainability and Indowud",
    source: "YouTube Shorts",
    thumb: "https://img.youtube.com/vi/AbhDCoSCAmg/maxresdefault.jpg",
    href: "https://youtu.be/AbhDCoSCAmg?si=8JcKKYbt614uTYom",
  },
  {
    id: "16",
    kind: "video",
    title: "Indowud NFC: Deep Dive into the Sustainable Plywood Alternative",
    source: "The Hindu Business Line",
    thumb: "https://img.youtube.com/vi/-zfhJLH2fXM/maxresdefault.jpg",
    href: "https://youtu.be/-zfhJLH2fXM?si=JlmEsKtJwqsFDZkO",
  },
  {
    id: "17",
    kind: "video",
    title: "Anuj Ramatri Exploring the World of Indowud NFC",
    source: "Anuj Ramatri",
    thumb: "https://img.youtube.com/vi/F-0Q7k-mlQk/maxresdefault.jpg",
    href: "https://youtu.be/F-0Q7k-mlQk?si=w-BUAMCfi_XGbp_o",
  },
  {
    id: "18",
    kind: "article",
    title: "NFC Rafter Installation: Transforming Modern Architecture with Indowud",
    source: "Indowud NFC",
    thumb: "/nfcrafter.jpg",
    href: "https://www.indowud.com/nfc/products/nfc-rafters",
  },
];

/* ----------------------------- Small Utilities ----------------------------- */

function getYouTubeEmbed(url: string) {
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

  const featuredHero = NEWS_ITEMS.find(n => n.id === "16") || NEWS_ITEMS[0];
  const otherItems = NEWS_ITEMS.filter(n => n.id !== featuredHero.id);

  // Group remaining by kind
  const videosAndShorts = otherItems.filter(n => n.kind === "video" || n.kind === "short");
  const articles = otherItems.filter(n => n.kind === "article");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar / breadcrumb */}
      <PageHeader
        category={t("category")}
        title={t("pageTitle")}
        description={t("pageDescription")}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 -mt-10 relative z-10">
        
        {/* Hero Featured Section */}
        <div className="mb-16 lg:mb-24">
          <HeroCard
            item={featuredHero}
            labelFeatured={t("featured")}
            labelWatch={t("watchFullStory")}
            labelRead={t("readFullArticle")}
            onPlay={() => {
              if (featuredHero.kind === "video" || featuredHero.kind === "short") setVideoOpen(featuredHero);
            }}
          />
        </div>

        {/* Latest Articles Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
              <FileText className="text-teal-600" size={28} />
              {t("inThePress")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((n, idx) => (
              <ArticleCard key={n.id} item={n} index={idx} labelArticle={t("kinds.article")} labelRead={t("readArticle")} />
            ))}
          </div>
        </div>

        {/* Multimedia & Shorts Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
              <Video className="text-teal-600" size={28} />
              {t("multimediaShorts")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videosAndShorts.map((n, idx) => (
              <VideoCard
                key={n.id}
                item={n}
                index={idx}
                labelShort={t("kinds.short")}
                labelVideo={t("kinds.video")}
                onPlay={() => setVideoOpen(n)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Video lightbox */}
      <Lightbox item={videoOpen} onClose={() => setVideoOpen(null)} />
    </div>
  );
}

/* ----------------------------- Hero Card ----------------------------- */
const HeroCard = React.memo(function HeroCard({ item, onPlay, labelFeatured, labelWatch, labelRead }: { item: NewsItem; onPlay: () => void; labelFeatured: string; labelWatch: string; labelRead: string }) {
  const isVideo = item.kind === "video" || item.kind === "short";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl cursor-pointer flex flex-col lg:flex-row min-h-[500px]"
      onClick={() => {
        if (isVideo) onPlay();
        else window.open(item.href, '_blank');
      }}
    >
      <div className="w-full lg:w-3/5 relative overflow-hidden min-h-[300px] lg:min-h-full order-1 lg:order-2">
        <Image
          src={item.thumb}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-slate-900/40 lg:to-slate-900" />
        
        {isVideo && (
          <div className="absolute inset-0 m-auto h-24 w-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110">
            <Play className="h-10 w-10 text-white ml-2" fill="currentColor" />
          </div>
        )}
      </div>
      
      <div className="w-full lg:w-2/5 p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-4 py-1.5 text-xs font-bold text-teal-300 uppercase tracking-widest border border-teal-500/30">
            {labelFeatured} {item.kind}
          </span>
          <span className="text-slate-400 text-sm font-medium tracking-wide uppercase">{item.source}</span>
        </div>
        <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-[1.1] mb-8 group-hover:text-teal-400 transition-colors duration-300">
          {item.title}
        </h3>
        <div className="mt-auto">
          <span className="inline-flex items-center gap-2 text-white font-semibold tracking-wide border-b border-transparent group-hover:border-teal-400 pb-1 transition-all">
             {isVideo ? labelWatch : labelRead}
             {isVideo ? <Play size={16} /> : <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
          </span>
        </div>
      </div>
    </motion.div>
  );
});

/* ----------------------------- Article Card ----------------------------- */
const ArticleCard = React.memo(function ArticleCard({ item, index, labelArticle, labelRead }: { item: NewsItem; index: number; labelArticle: string; labelRead: string }) {
  const [imgError, setImgError] = React.useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => window.open(item.href, '_blank')}
    >
      <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-100 border-b border-slate-100">
        {!imgError ? (
          <Image
            src={item.thumb}
            alt={item.title}
            fill
            unoptimized={item.thumb.startsWith('/')}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
            <FileText className="text-slate-400" size={40} />
          </div>
        )}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded-md">
            {labelArticle}
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.source}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-slate-900 leading-snug mb-6 group-hover:text-teal-700 transition-colors line-clamp-3">
          {item.title}
        </h3>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-600 group-hover:text-teal-700 transition-colors">
          <span>{labelRead}</span>
          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
});

/* ----------------------------- Video Card ----------------------------- */
const VideoCard = React.memo(function VideoCard({ item, index, onPlay, labelShort, labelVideo }: { item: NewsItem; index: number; onPlay: () => void; labelShort: string; labelVideo: string }) {
  const isShort = item.kind === "short";
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
      onClick={onPlay}
    >
      <div className="relative w-full pt-[56.25%] overflow-hidden bg-slate-900 border-b border-slate-100">
        <Image
          src={item.thumb}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 border border-white/30">
            <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Type Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1.5 rounded bg-black/80 px-2.5 py-1 text-[10px] font-bold text-white tracking-widest uppercase shadow-sm">
            {isShort ? labelShort : labelVideo}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center mb-3">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
            {item.source}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors line-clamp-3">
          {item.title}
        </h3>
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
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10 ${
              item.kind === "short" ? "max-w-sm aspect-[9/16]" : "max-w-5xl aspect-video"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${embed}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
              title={item.title}
            />
          </motion.div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 sm:right-8 sm:top-8 rounded-full bg-white/10 text-white p-3 hover:bg-white/20 hover:scale-110 transition-all ring-1 ring-white/20"
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
