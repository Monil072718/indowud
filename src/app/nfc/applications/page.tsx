"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, Paintbrush, Leaf, Settings } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";

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
      <PageHeader
        category="Applications"
        title="Transform spaces with premium"
        highlight="Interior & Exterior Panels"
        description="Beautiful finishes that are engineered to last — healthy indoors, durable outdoors, and easy to fabricate. Explore our range for homes, offices and hospitality."
      >
        <Link
          href="/nfc/products"
          className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 transition-opacity"
          style={{ backgroundColor: MAGENTA }}
        >
          Explore Products
        </Link>
        <Link
          href="/contact"
          className="rounded-xl px-5 py-2.5 text-sm font-semibold border hover:bg-teal-50 transition-colors"
          style={{ color: TEAL, borderColor: TEAL }}
        >
          Contact Us
        </Link>
      </PageHeader>

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
            <ul className="mt-8 space-y-6 text-lg sm:text-xl text-slate-900 list-disc pl-6 marker:text-slate-900">
              <li className="pl-2">
                Durable <strong style={{ color: TEAL }}>interior panels</strong> that enhance aesthetics and longevity.
              </li>
              <li className="pl-2">
                Stylish and sustainable <strong style={{ color: TEAL }}>exterior panels</strong> resistant to weather and wear.
              </li>
              <li className="pl-2">
                Versatile <strong style={{ color: TEAL }}>furniture boards</strong> for custom cabinets, wardrobes, and desks.
              </li>
              <li className="pl-2">
                Smart <strong style={{ color: TEAL }}>partition boards</strong> for office and home spaces, maximising utility.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-b from-white to-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic mb-14 md:mb-20 tracking-tight"
            style={{ color: MAGENTA }}
          >
            Built for Quality, Designed for You
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group flex flex-col items-center px-4 py-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,139,139,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/Icons_100-Eco-friendly-1-1.png.webp"
                  alt="Durable"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Durable & Long-lasting</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed max-w-[220px] mx-auto group-hover:text-slate-800 transition-colors">
                Premium materials that withstand daily use.
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group flex flex-col items-center px-4 py-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(229,0,109,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/Icons_Better-Glue-Cover-1.png.webp"
                  alt="Customizable"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customizable Designs</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed max-w-[220px] mx-auto group-hover:text-slate-800 transition-colors">
                Choose finishes and textures to match your style.
              </p>
            </motion.div>

            {/* 3 */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group flex flex-col items-center px-4 py-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,139,139,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/Icons_Easily-machinable-1.png.webp"
                  alt="Eco-Friendly"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Eco-Friendly Options</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed max-w-[220px] mx-auto group-hover:text-slate-800 transition-colors">
                Sustainable panels for conscious living.
              </p>
            </motion.div>

            {/* 4 */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group flex flex-col items-center px-4 py-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(229,0,109,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/Icons_Strong-Bonding-1.png.webp"
                  alt="Easy Installation"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Easy Installation</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed max-w-[220px] mx-auto group-hover:text-slate-800 transition-colors">
                Quick and hassle-free setup for all spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slider #1 — Premium Hero Gallery */}
      <section>
        <div className="w-full" style={{ backgroundColor: "#EFE8E2" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 w-full px-2">
              <div>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2" style={{ color: TEAL }}>
                  {hero.title}
                </h3>
                <p className="text-xl md:text-2xl text-slate-600 font-medium italic">
                  {hero.subtitle}
                </p>
              </div>

              {/* Desktop Controls */}
              <div className="hidden md:flex gap-3">
                <button
                  onClick={() => setHeroImageIndex((v) => (v - 1 + heroCount) % heroCount)}
                  className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-slate-800 shadow-sm hover:shadow-md hover:scale-105 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setHeroImageIndex((v) => (v + 1) % heroCount)}
                  className="h-12 w-12 flex items-center justify-center rounded-full text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
                  style={{ backgroundColor: MAGENTA }}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Main Image Banner */}
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] group">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-slate-200">
                <Image
                  src={heroImgs[heroImageIndex]}
                  alt={`${hero.title} Showcase`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1400px"
                  priority
                />
              </div>

              {/* Thumbs Overlay - Desktop Only */}
              <div className="hidden md:flex absolute bottom-6 right-6 gap-3 z-10 bg-white/20 backdrop-blur-md p-2 rounded-2xl border border-white/30">
                {heroImgs.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroImageIndex(i)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                      i === heroImageIndex ? "border-[3px] border-white scale-110" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Thumb ${i}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Controls & Thumbs */}
            <div className="md:hidden mt-8 flex flex-col items-center gap-6">
              <div className="flex gap-4">
                <button
                  onClick={() => setHeroImageIndex((v) => (v - 1 + heroCount) % heroCount)}
                  className="h-14 w-14 flex items-center justify-center rounded-full bg-white text-slate-800 shadow-sm"
                >
                  <ChevronLeft size={24} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setHeroImageIndex((v) => (v + 1) % heroCount)}
                  className="h-14 w-14 flex items-center justify-center rounded-full text-white shadow-md"
                  style={{ backgroundColor: MAGENTA }}
                >
                  <ChevronRight size={24} strokeWidth={2} />
                </button>
              </div>
              <div className="flex gap-3 justify-center">
                {heroImgs.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroImageIndex(i)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all ${
                      i === heroImageIndex ? "border-[3px] border-[var(--teal)] opacity-100 scale-105" : "border-2 border-transparent opacity-50"
                    }`}
                    style={{ "--teal": TEAL } as React.CSSProperties}
                  >
                    <Image src={img} alt={`Thumb ${i}`} fill className="object-cover" sizes="64px" />
                  </button>
                ))}
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
