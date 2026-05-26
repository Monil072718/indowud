"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  ShieldCheck, 
  Layers, 
  Droplets, 
  Maximize, 
  Wrench, 
  Play, 
  Info,
  ChevronRight,
  Hammer,
  Wind,
  Sun,
  Thermometer,
  Zap,
  BoxSelect,
  Grid3X3,
  CheckCircle2,
  AlertCircle,
  Construction
} from "lucide-react";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/common/PageHeader";

/* ────────────────── Types ────────────────── */
type GridRow = {
  variant: string;
  density: string;
  values: string[];
}

type GeneralItem = {
  title: string;
  text: string;
}

type CeilingItem = {
  title: string;
  text: string;
}

/* ────────────────── Suggestions Page ────────────────── */
export default function SuggestionsPage() {
  const t = useTranslations("SuggestionsPage");

  const tableRows = t.raw("table.rows") as GridRow[];
  const tableCols = t.raw("table.cols") as string[];
  const generalItems = t.raw("general") as GeneralItem[];
  const ceilingItems = t.raw("ceiling.items") as CeilingItem[];

  const [activeCeilingIndex, setActiveCeilingIndex] = useState(0);

  const icons = [
    <Droplets key="1" className="w-8 h-8" />,
    <Layers key="2" className="w-8 h-8" />,
    <Zap key="3" className="w-8 h-8" />,
    <Maximize key="4" className="w-8 h-8" />,
    <Hammer key="5" className="w-8 h-8" />,
  ];


  const ceilingIcons = [
    <Thermometer key="c1" className="w-6 h-6" />,
    <Grid3X3 key="c2" className="w-6 h-6" />,
    <Wrench key="c3" className="w-6 h-6" />,
    <Maximize key="c4" className="w-6 h-6" />,
    <Sun key="c5" className="w-6 h-6" />,
    <ShieldCheck key="c6" className="w-6 h-6" />,
    <Droplets key="c7" className="w-6 h-6" />,
    <Info key="c8" className="w-6 h-6" />,
    <BoxSelect key="c9" className="w-6 h-6" />,
    <ArrowRightIcon key="c10" className="w-6 h-6" />,
    <Droplets key="c11" className="w-6 h-6" />,
    <Zap key="c12" className="w-6 h-6" />,
    <Wind key="c13" className="w-6 h-6" />,
    <Grid3X3 key="c14" className="w-6 h-6" />,
    <ShieldCheck key="c15" className="w-6 h-6" />,
    <Layers key="c16" className="w-6 h-6" />,
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader
        category={t("category")}
        title={t("title")}
        description={t("description")}
      />

      {/* Video Section - Redesigned as a "Cinematic Feature" */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-stone-900 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent pointer-events-none" />
          <div className="grid lg:grid-cols-5 items-center">
            <div className="lg:col-span-2 p-10 lg:p-16 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-teal-400 text-xs font-bold uppercase tracking-widest">
                  <Play className="w-4 h-4 fill-current" />
                  {t("videoBadge")}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {t("videoNote")}
                </h2>
                <div className="flex items-center gap-4 text-stone-400">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-stone-900 bg-stone-700" />
                    ))}
                  </div>
                  <span className="text-sm">{t("videoTrust")}</span>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-3 aspect-video relative group">
              <LazyYouTubeIframe />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700 pointer-events-none flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center shadow-2xl shadow-teal-500/50"
                >
                  <Play className="w-8 h-8 text-white fill-current transtone-x-1" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Support - Redesigned as a "Blueprint" */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-stone-900 mb-6">{t("gridTitle")}</h2>
              <p className="text-stone-600 text-lg">{t("gridDescription")}</p>
            </div>
            <div className="shrink-0">
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Construction className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t("gridRecommendedLabel")}</div>
                  <div className="text-lg font-bold text-stone-900">{t("gridRecommendedValue")}</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] border border-stone-200 shadow-2xl shadow-stone-200/50 overflow-hidden"
          >
            <div className="grid grid-cols-1 xl:grid-cols-4 divide-y xl:divide-y-0 xl:divide-x divide-stone-100">
              {tableRows.map((row) => (
                <div key={row.variant} className="p-8 hover:bg-stone-50 transition-colors">
                  <div className="mb-8">
                    <div className="text-xs font-bold text-teal-600 uppercase tracking-[0.2em] mb-2">{row.density}</div>
                    <h3 className="text-2xl font-bold text-stone-900">{row.variant}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold text-stone-400 uppercase tracking-widest pb-2 border-b border-stone-100">
                      <span>{t("table.thicknessLabel")}</span>
                      <span>{t("table.gridLabel")}</span>
                    </div>
                    {row.values.map((val, i) => (
                      <div key={i} className="flex justify-between items-center py-1 group">
                        <span className="text-sm font-bold text-stone-500 group-hover:text-stone-900 transition-colors">{tableCols[i]}mm</span>
                        <div className="h-px flex-1 mx-4 bg-stone-100 group-hover:bg-teal-200 transition-colors" />
                        <span className="text-base font-bold text-stone-900 group-hover:text-teal-600 transition-colors">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="p-8 bg-stone-900 text-white flex flex-col justify-between">
                <div className="space-y-6">
                  <h4 className="text-xl font-bold">{t("table.noteTitle")}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {t("table.note")}
                  </p>
                </div>
                <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 text-teal-400 mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">{t("table.proTipTitle")}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{t("table.proTipText")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* General Suggestions - Bento Grid Redesign */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {generalItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[2.5rem] p-10 border transition-all duration-500 group flex flex-col justify-between ${
                idx === 0 || idx === 1 ? "md:col-span-3 bg-white border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl" : 
                idx === 2 ? "md:col-span-2 bg-stone-900 border-stone-800 text-white" :
                "md:col-span-2 bg-white border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl"
              }`}
            >
              <div>
                <div className={`mb-8 p-5 rounded-3xl w-fit group-hover:scale-110 transition-transform duration-500 ${
                  idx === 2 ? "bg-white/10 text-teal-400" : "bg-stone-50 text-stone-900 group-hover:bg-teal-50 group-hover:text-teal-600"
                }`}>
                  {icons[idx]}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${idx === 2 ? "text-stone-400" : "text-stone-600"}`}>
                  {item.text}
                </p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transtone-y-2 group-hover:transtone-y-0 duration-300">
                <span className={idx === 2 ? "text-teal-400" : "text-teal-600"}>{t("learnMore")}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ceiling Guidelines - Redesigned as Sticky Scroll for Mobile & Desktop */}
      <section className="bg-stone-50 py-24 lg:py-32 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Sticky Sidebar */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-8 z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-teal-700 text-xs font-bold uppercase tracking-widest shadow-sm border border-stone-200 mb-6">
                  <Grid3X3 className="w-4 h-4" />
                  {t("ceiling.badge")}
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6">
                  {t("ceiling.mainTitle")}
                </h2>
                <div className="w-20 h-1 bg-teal-500 rounded-full mb-6" />
                <p className="text-stone-600 text-lg leading-relaxed">
                  {t("ceiling.intro")}
                </p>
              </div>
            </div>

            {/* Scrollable Content (Cards) */}
            <div className="lg:w-2/3 space-y-6">
              {ceilingItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-stone-200 hover:shadow-xl hover:-transtone-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <span className="text-9xl font-serif italic text-teal-900">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-stone-100 text-stone-500 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                      {ceilingIcons[idx % ceilingIcons.length]}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-teal-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-stone-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="p-12 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-16 h-16 text-teal-400 mx-auto mb-8" />
            <p className="text-2xl lg:text-3xl text-white font-light italic leading-relaxed">
              &quot;{t("ceiling.closing")}&quot;
            </p>
          </div>
        </div>
      </section>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </main>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12h14" />
    </svg>
  );
}

// Lazy load YouTube iframe - only load when in viewport
function LazyYouTubeIframe() {
  const t = useTranslations("SuggestionsPage");
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={iframeRef} className="h-full w-full relative bg-stone-800 flex items-center justify-center">
      {isInView ? (
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/MwGAWcENTGI?si=-txgTwmr472t8Q5E&rel=0&modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
          <p className="text-stone-400 text-sm">{t("videoInitializing")}</p>
        </div>
      )}
    </div>
  );
}
