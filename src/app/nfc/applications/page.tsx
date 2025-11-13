"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ───────────────────────────────── Brand Colors (from your site) */
const TEAL = "#008B8B";
const MAGENTA = "#E5006D";

/* ───────────────────────────────── Animations */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ───────────────────────────────── Panel Cards */
type PanelKey = "interior" | "exterior" | "furniture" | "partition";
type Panel = {
  key: PanelKey;
  title: string;
  img: string;
  desc: string;
  long: string;
};

const panels: Panel[] = [
  {
    key: "interior",
    title: "Interior Panels",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc:
      "Elegant, durable interior panels that elevate living and workspaces with a clean, modern finish.",
    long:
      "Made from natural fibre composites — termite-proof, moisture-resistant and low-VOC for healthier interiors.",
  },
  {
    key: "exterior",
    title: "Exterior Panels",
    img: "https://images.pexels.com/photos/3637738/pexels-photo-3637738.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc:
      "Façade-ready panels engineered to endure weather and UV while keeping designs sharp.",
    long:
      "Stable and strong in outdoor conditions. Excellent paint/texture adhesion and easy to maintain.",
  },
  {
    key: "furniture",
    title: "Furniture Boards",
    img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc:
      "Boards for cabinets, wardrobes, and worktops — great machinability and finish.",
    long:
      "Superior screw-holding strength, consistent density, CNC-friendly and veneer/paint ready.",
  },
  {
    key: "partition",
    title: "Partition Boards",
    img: "https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc:
      "Lightweight, sturdy partitions that add privacy and acoustic comfort.",
    long:
      "Fast to install, dimensionally stable and designed for flexible layouts in homes or offices.",
  },
];

/* ───────────────────────────────── Slider #1 (Hero gallery with thumbs) */
const heroSlides = [
  {
    title: "nfc Create & Neo",
    subtitle: "for interior panels",
    images: [
      "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    title: "nfc Build",
    subtitle: "for exterior & interior",
    images: [
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3637738/pexels-photo-3637738.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    title: "nfc Deco",
    subtitle: "for furniture & partitions",
    images: [
      "https://images.pexels.com/photos/157382/office-windows-house-architecture-157382.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/37347/office-windows-modern-exterior-buildings.jpg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/3586362/pexels-photo-3586362.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

/* ───────────────────────────────── Slider #2 (3-tile showcase) */
const showcaseSlides = [
  {
    title: "nfc Build",
    subtitle: "Deck • Facade • Balcony",
    images: [
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    title: "Outdoor & Garden",
    subtitle: "Decking • Pergolas • Fencing",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  {
    title: "Resort Style",
    subtitle: "Pool decks and sit-outs",
    images: [
      "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/259682/pexels-photo-259682.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
];

export default function ApplicationsPage() {
  /* ───────── states for panels */
  const [activePanel, setActivePanel] = useState<PanelKey>("interior");
  const activePanelData = useMemo(
    () => panels.find((p) => p.key === activePanel) ?? panels[0],
    [activePanel]
  );

  /* ───────── slider #1 */
  const [heroIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const hero = heroSlides[heroIndex];
  const heroImgs = hero.images;
  const heroCount = heroImgs.length;

  /* ───────── slider #2 */
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const showcase = showcaseSlides[showcaseIndex];
  const nextShowcase = () =>
    setShowcaseIndex((v) => (v + 1) % showcaseSlides.length);
  const prevShowcase = () =>
    setShowcaseIndex((v) => (v - 1 + showcaseSlides.length) % showcaseSlides.length);

  /* ───────── small, gentle autoplay for showcase */
  useEffect(() => {
    const id = setInterval(nextShowcase, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top band */}
      <div
        className="h-14 md:h-16 flex items-center justify-between px-4 md:px-8 text-white text-xs md:text-sm"
        style={{
          backgroundImage: `linear-gradient(90deg, ${TEAL}, #AE236B, ${MAGENTA})`,
        }}
      >
        <span className="uppercase tracking-[0.28em] font-semibold">
          Applications
        </span>
        <span className="opacity-90">Home / NFC / Applications</span>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#F2FFFD] via-white to-[#FFEFF5]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10 md:py-14 grid lg:grid-cols-2 gap-8 items-center">
          {/* Left copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1]"
              style={{ color: TEAL }}
            >
              Transform spaces with premium Interior & Exterior Panels
            </h1>
            <p className="text-slate-600 max-w-prose">
              Beautiful finishes that are engineered to last — healthy indoors, durable
              outdoors, and easy to fabricate. Explore our range for homes, offices and
              hospitality.
            </p>
            <div className="flex gap-3 pt-1">
              <Link
                href="/nfc/products"
                className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow"
                style={{ backgroundColor: MAGENTA }}
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="rounded-xl px-5 py-2.5 text-sm font-semibold border"
                style={{ color: TEAL, borderColor: TEAL }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right image card — fixed aspect prevents stretching */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-white/60 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Modern interior"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why section */}
      <section className="bg-gradient-to-r from-[#FDFEFE] via-white to-[#FFEFF5]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[28px] overflow-hidden border bg-white shadow-[0_16px_50px_rgba(0,0,0,0.06)]"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Indowud interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: TEAL }}>
              Why choose Indowud panels?
            </h2>
            <ul className="mt-5 space-y-3 text-[15px] text-slate-800">
              {[
                "Durable interior panels that enhance aesthetics and longevity.",
                "Stylish and sustainable exterior panels resistant to weather and wear.",
                "Versatile furniture boards for cabinets, wardrobes and desks.",
                "Smart partition boards that maximise privacy and acoustic comfort.",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-800" />
                  <p>{t}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Panel selector */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 text-center md:text-left"
          >
            <p className="text-xs uppercase tracking-[0.28em]" style={{ color: MAGENTA }}>
              Our Panel Range
            </p>
            <h3 className="mt-1 text-2xl md:text-3xl font-bold text-slate-900">
              Interior • Exterior • Furniture • Partition
            </h3>
          </motion.div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[0.36fr,0.64fr] gap-8">
            <div className="space-y-4">
              {panels.map((panel) => {
                const isActive = panel.key === activePanel;
                return (
                  <button
                    key={panel.key}
                    onClick={() => setActivePanel(panel.key)}
                    className={`w-full text-left rounded-2xl border px-4 py-4 transition-all ${
                      isActive
                        ? "bg-[#ECFFFE] border-[var(--teal)] shadow-sm"
                        : "bg-white border-slate-200 hover:border-[var(--teal)]/40"
                    }`}
                    style={
                      {
                        "--teal": TEAL,
                      } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="h-10 w-1.5 rounded-full mt-1"
                        style={{ background: isActive ? TEAL : "#E5E7EB" }}
                      />
                      <div className="flex-1">
                        <p
                          className="text-sm font-semibold"
                          style={{ color: isActive ? TEAL : "#0f172a" }}
                        >
                          {panel.title}
                        </p>
                        <p
                          className="text-[11px] mt-1"
                          style={{ color: isActive ? `${TEAL}B3` : "#6b7280" }}
                        >
                          {panel.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activePanelData.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={activePanelData.img}
                  alt={activePanelData.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: TEAL }}>
                  {activePanelData.title}
                </div>
              </div>
              <div className="p-7 space-y-3">
                <p className="text-sm text-slate-700">{activePanelData.desc}</p>
                <p className="text-sm text-slate-800">{activePanelData.long}</p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/nfc/products"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: TEAL }}
                  >
                    View specifications
                  </Link>
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-sm font-medium border"
                    style={{ color: MAGENTA, borderColor: "#e5e7eb" }}
                  >
                    Download brochure
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet cards */}
          <div className="lg:hidden space-y-5">
            {panels.map((panel) => {
              const isOpen = panel.key === activePanel;
              return (
                <motion.div
                  key={panel.key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`rounded-2xl border ${
                    isOpen ? "border-[var(--teal)]" : "border-slate-200"
                  } bg-white shadow-sm`}
                  style={
                    { "--teal": TEAL } as React.CSSProperties
                  }
                >
                  <button
                    onClick={() => setActivePanel(panel.key)}
                    className="w-full flex items-center gap-3 px-4 py-3"
                  >
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: isOpen ? TEAL : "#F1F5F9",
                        color: isOpen ? "white" : "#334155",
                      }}
                    >
                      {panel.title[0]}
                    </div>
                    <div className="flex-1 text-left">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: isOpen ? TEAL : "#0f172a" }}
                      >
                        {panel.title}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        {panel.desc}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: isOpen ? "#ECFFFE" : "#F1F5F9",
                        color: isOpen ? TEAL : "#64748b",
                      }}
                    >
                      {isOpen ? "Selected" : "View"}
                    </span>
                  </button>

                  {isOpen && (
                    <>
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={panel.img}
                          alt={panel.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                        />
                        <div
                          className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-medium text-white"
                          style={{ backgroundColor: TEAL }}
                        >
                          {panel.title}
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <p className="text-sm text-slate-600">{panel.desc}</p>
                        <p className="text-sm text-slate-800">{panel.long}</p>
                        <Link
                          href="/nfc/products"
                          className="inline-flex items-center gap-1 text-sm font-semibold"
                          style={{ color: MAGENTA }}
                        >
                          View specifications →
                        </Link>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slider #1 — hero gallery with proper aspect + thumbs */}
      <section>
        <div className="w-full" style={{ backgroundColor: "#EFE8E2" }}>
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12">
            <div className="rounded-3xl border border-white/70 bg-white/90 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.08)] p-5 md:p-7">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-lg md:text-xl font-medium italic" style={{ color: TEAL }}>
                    {hero.title}
                  </p>
                  <p className="relative inline-block italic text-sm md:text-base" style={{ color: TEAL }}>
                    {hero.subtitle}
                    <span
                      className="absolute left-0 -bottom-1 h-[3px] w-full"
                      style={{ backgroundColor: MAGENTA }}
                    />
                  </p>
                </div>

                <div className="hidden md:flex gap-2">
                  <button
                    onClick={() => setHeroImageIndex((v) => (v - 1 + heroCount) % heroCount)}
                    className="h-8 w-8 grid place-items-center rounded-md text-white"
                    style={{ backgroundColor: TEAL }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setHeroImageIndex((v) => (v + 1) % heroCount)}
                    className="h-8 w-8 grid place-items-center rounded-md text-white"
                    style={{ backgroundColor: TEAL }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="relative w-full rounded-2xl overflow-hidden">
                  <div className="relative aspect-[16/9] sm:aspect-[16/9] bg-slate-100">
                    <Image
                      src={heroImgs[heroImageIndex]}
                      alt="Application"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Thumbs */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {heroImgs.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroImageIndex(i)}
                    className={`relative rounded-xl overflow-hidden border ${
                      i === heroImageIndex ? "border-[var(--magenta)]" : "border-slate-200"
                    }`}
                    style={{ "--magenta": MAGENTA } as React.CSSProperties}
                    aria-label={`Go to image ${i + 1}`}
                  >
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <Image
                        src={img}
                        alt={`Thumb ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 300px"
                        loading="lazy"
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile controls */}
              <div className="flex md:hidden justify-center gap-2 mt-5">
                <button
                  onClick={() => setHeroImageIndex((v) => (v - 1 + heroCount) % heroCount)}
                  className="h-8 w-8 grid place-items-center rounded-md text-white"
                  style={{ backgroundColor: TEAL }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setHeroImageIndex((v) => (v + 1) % heroCount)}
                  className="h-8 w-8 grid place-items-center rounded-md text-white"
                  style={{ backgroundColor: TEAL }}
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider #2 — 3-tile showcase (autoplay) */}
      <section className="bg-[#F6F1EC]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center mb-6 md:mb-8">
            <p className="font-medium italic text-xl md:text-2xl" style={{ color: TEAL }}>
              {showcase.title}
            </p>
            <p className="inline-block relative italic text-sm md:text-base" style={{ color: TEAL }}>
              {showcase.subtitle}
              <span className="absolute left-0 -bottom-1 h-[3px] w-full" style={{ backgroundColor: MAGENTA }} />
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x md:snap-none">
            {showcase.images.map((img, i) => (
              <div
                key={i}
                className="flex-none md:flex-auto w-[78%] sm:w-[60%] md:w-auto snap-start rounded-2xl overflow-hidden border border-white/70 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3]">
                  <Image
                    src={img}
                    alt={`Showcase ${i + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 78vw, (max-width: 768px) 60vw, (max-width: 1024px) 33vw, 400px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prevShowcase}
              className="h-8 w-8 grid place-items-center rounded-md text-white"
              style={{ backgroundColor: TEAL }}
              aria-label="Previous showcase"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {showcaseSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setShowcaseIndex(i)}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: i === showcaseIndex ? TEAL : "#99d6d6",
                  }}
                  aria-label={`Go to showcase ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextShowcase}
              className="h-8 w-8 grid place-items-center rounded-md text-white"
              style={{ backgroundColor: TEAL }}
              aria-label="Next showcase"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
