"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------- animations ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.08 * i,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

/* ---------- static panel cards ---------- */
type PanelKey = "interior" | "exterior" | "furniture" | "partition";
interface Panel {
  key: PanelKey;
  title: string;
  img: string;
  desc: string;
  long: string;
}

const panels: Panel[] = [
  {
    key: "interior",
    title: "Interior Panels",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: `Transform your living and work spaces with Indowud Interior Panels. The perfect blend of elegance, durability, and sustainability.`,
    long: `Made from natural fiber composites, our panels are termite-proof, waterproof, flame-retardant, and free from formaldehyde emissions, ensuring a safe and long-lasting interior solution.`,
  },
  {
    key: "exterior",
    title: "Exterior Panels",
    img: "https://images.pexels.com/photos/3637738/pexels-photo-3637738.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: `Enhance your building’s façade with Indowud Exterior Panels, engineered for strength, beauty, and sustainability.`,
    long: `Crafted from high natural fiber composites, our panels are waterproof, termite-proof, flame-retardant, and weather-resistant — ideal for all outdoor applications.`,
  },
  {
    key: "furniture",
    title: "Furniture Boards",
    img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: `Create furniture that lasts with Indowud Furniture Boards, designed for durability, versatility, and style.`,
    long: `Perfect for cabinets, wardrobes, tables, and modular furniture. Superior screw-holding strength, smooth finish, and easy machinability.`,
  },
  {
    key: "partition",
    title: "Partition Boards",
    img: "https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: `Redefine your interiors with Indowud Partition Boards, crafted for strength, style, and sustainability.`,
    long: `Lightweight yet sturdy, they provide excellent sound absorption and design flexibility — ideal for healthy indoor environments.`,
  },
];

/* ---------- slider data (first / existing) ---------- */
const slides = [
  {
    title: "nfc create & Neo",
    subtitle: "for interior Panels",
    images: [
      "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    title: "nfc Build",
    subtitle: "for exterior Panels and interior panels",
    images: [
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3637738/pexels-photo-3637738.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    title: "nfc Deco",
    subtitle: "for furniture & partitions",
    images: [
      "https://images.pexels.com/photos/157382/office-windows-house-architecture-157382.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/37347/office-windows-modern-exterior-buildings.jpg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3586362/pexels-photo-3586362.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
];

/* ---------- slider data (second / new, 3-images layout) ---------- */
const showcaseSlides = [
  {
    title: "nfc Build",
    subtitle: "for exterior Panels and interior panels",
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
  /* ---------- states ---------- */
  const [activePanel, setActivePanel] = useState<PanelKey>("interior");
  const activePanelData =
    panels.find((p) => p.key === activePanel) ?? panels[0];

  // first slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const current = slides[currentSlide];
  const [activeImage, setActiveImage] = useState(0);
  const imgCount = current.images.length;

  const goNextImage = () => {
    setActiveImage((prev) => {
      const next = (prev + 1) % imgCount;
      return next;
    });
  };

  const goPrevImage = () => {
    setActiveImage((prev) => {
      const next = (prev - 1 + imgCount) % imgCount;
      return next;
    });
  };

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setActiveImage(0);
  };

  // second (new) slider
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const showcase = showcaseSlides[showcaseIndex];

  const goShowcasePrev = () => {
    setShowcaseIndex((p) =>
      p === 0 ? showcaseSlides.length - 1 : p - 1
    );
  };
  const goShowcaseNext = () => {
    setShowcaseIndex((p) =>
      p === showcaseSlides.length - 1 ? 0 : p + 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* top color band */}
      <div className="h-16 bg-gradient-to-r from-[#008B8B] via-[#AE236B] to-[#E5006D] flex items-center px-4 md:px-10 text-white text-sm justify-between">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
          Applications
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className="opacity-70">Home</span>
          <span>/</span>
          <span className="font-medium">Applications</span>
        </div>
      </div>

      {/* hero */}
      <section className="w-full bg-gradient-to-r from-[#F2FFFD] via-[#FDFEFE] to-[#FFEFF5] py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-7"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] text-[#008B8B] tracking-tight">
              Transform Your
              <br />
              Spaces with
              <br />
              Premium Interior
              <br />
              Panels &amp; Exterior
              <br />
              Panels
            </h1>

            {/* breadcrumb */}
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500">
              Home / NFC / Applications
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center gap-2 bg-[#E5006D] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_15px_35px_rgba(229,0,109,0.35)]"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/15">
                  ✦
                </span>
                Explore Products
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center gap-2 bg-white text-[#008B8B] px-7 py-3 rounded-xl text-sm font-semibold border border-[#008B8B]"
              >
                Contact Us
                <span aria-hidden="true">→</span>
              </motion.button>
            </div>
          </motion.div>

          {/* right card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] bg-white rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(229,0,109,0.12)] border border-white/60">
              <div className="relative h-[240px] sm:h-[300px] md:h-[360px]">
                <Image
                  src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Modern interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why section */}
      <section className="w-full bg-gradient-to-r from-[#FDFEFE] via-white to-[#FFEFF5] py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-[34px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden border border-white/40"
          >
            <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[340px]">
              <Image
                src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Indowud interior"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#008B8B]">
              Why Indowud Panels Are the
              <br />
              Perfect Choice
            </h2>

            <ul className="space-y-4 text-[15px] text-gray-800">
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#222]" />
                <p>
                  Durable <strong>interior panels</strong> that enhance
                  aesthetics and longevity.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#222]" />
                <p>
                  Stylish and sustainable <strong>exterior panels</strong>{" "}
                  resistant to weather and wear.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#222]" />
                <p>
                  Versatile <strong>furniture boards</strong> for custom
                  cabinets, wardrobes, and desks.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#222]" />
                <p>
                  Smart <strong>partition boards</strong> for office and home
                  spaces, maximising utility.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* product cards */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 text-center md:text-left"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#E5006D] mb-1">
              Our Panel Range
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C1217]">
              Interior, Exterior, Furniture &amp; Partition
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-2xl md:max-w-xl mx-auto md:mx-0">
              Select a panel type to see where to use it and what makes it different.
            </p>
          </motion.div>

          {/* desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-[0.34fr,0.66fr] gap-8">
            {/* left: cards as list */}
            <div className="space-y-4">
              {panels.map((panel) => {
                const isActive = panel.key === activePanel;
                return (
                  <button
                    key={panel.key}
                    onClick={() => setActivePanel(panel.key)}
                    className={`w-full flex items-start gap-3 rounded-2xl border px-4 py-4 transition-all text-left ${isActive
                        ? "bg-[#ECFFFE] border-[#008B8B] shadow-sm"
                        : "bg-white border-gray-200 hover:border-[#008B8B]/50"
                      }`}
                  >
                    <div
                      className={`h-10 w-1.5 rounded-full mt-1 ${isActive ? "bg-[#008B8B]" : "bg-gray-200"
                        }`}
                    />
                    <div className="flex-1">
                      <p
                        className={`text-sm font-semibold ${isActive ? "text-[#008B8B]" : "text-slate-900"
                          }`}
                      >
                        {panel.title}
                      </p>
                      <p
                        className={`text-[11px] mt-1 ${isActive ? "text-[#008B8B]/70" : "text-gray-500"
                          }`}
                      >
                        {panel.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* right: main card */}
            <motion.div
              key={activePanelData.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100/70 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden"
            >
              <div className="relative h-[300px]">
                <Image
                  src={activePanelData.img}
                  alt={activePanelData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-[#008B8B]">
                  {activePanelData.title}
                </div>
              </div>
              <div className="p-7 space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  {activePanelData.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {activePanelData.desc}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {activePanelData.long}
                </p>
                <div className="pt-2 flex gap-3 flex-wrap">
                  <button className="inline-flex items-center gap-2 bg-[#008B8B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#006c6c] transition-all">
                    View specifications
                    <span aria-hidden="true">→</span>
                  </button>
                  <button className="inline-flex items-center gap-1 text-[#E5006D] text-sm font-medium hover:gap-2 transition-all">
                    Download brochure
                    <span aria-hidden="true">↓</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* mobile / tablet layout: cards */}
          <div className="lg:hidden space-y-5">
            {panels.map((panel) => {
              const isActive = panel.key === activePanel;
              const isCurrent = panel.key === activePanelData.key;
              return (
                <motion.div
                  key={panel.key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`rounded-2xl border ${isActive ? "border-[#008B8B]" : "border-gray-200"
                    } bg-white shadow-sm overflow-hidden`}
                >
                  {/* top row */}
                  <button
                    onClick={() => setActivePanel(panel.key)}
                    className="w-full flex items-center gap-3 px-4 py-3"
                  >
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold ${isActive ? "bg-[#008B8B] text-white" : "bg-slate-100 text-slate-700"
                        }`}
                    >
                      {panel.title.split(" ")[0].charAt(0)}
                    </div>
                    <div className="flex-1 text-left">
                      <p
                        className={`text-sm font-semibold ${isActive ? "text-[#008B8B]" : "text-slate-900"
                          }`}
                      >
                        {panel.title}
                      </p>
                      <p className="text-[11px] text-gray-500 line-clamp-2">
                        {panel.desc}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${isActive
                          ? "bg-[#ECFFFE] text-[#008B8B]"
                          : "bg-slate-100 text-slate-500"
                        }`}
                    >
                      {isActive ? "Selected" : "View"}
                    </span>
                  </button>

                  {/* expanded part for active card */}
                  {isCurrent && (
                    <div className="pt-2">
                      <div className="relative h-[180px]">
                        <Image
                          src={panel.img}
                          alt={panel.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 rounded-full px-4 py-1 text-[10px] font-medium text-[#008B8B]">
                          {panel.title}
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <p className="text-sm text-gray-600">{panel.desc}</p>
                        <p className="text-sm text-gray-700">{panel.long}</p>
                        <button className="inline-flex items-center gap-1 text-[#E5006D] text-sm font-semibold hover:gap-2 transition-all mt-1">
                          View specifications
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Slider section (bottom) - EXISTING */}
      <section className="w-full">
        {/* top teal strip */}
        <div className="w-full bg-[#33A2A2] py-3">
          <p className="max-w-6xl mx-auto text-center text-white italic text-sm md:text-base px-4">
            Explore Our Panel Range interior panels, exterior panels, furniture
            boards, and partition boards to suit every design need.
          </p>
        </div>

        {/* body */}
        <div className="bg-[#EFE8E2] py-10 md:py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/70 px-4 sm:px-6 md:px-8 py-6 md:py-8 overflow-hidden">
              {/* header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="text-center md:text-left w-full">
                  <p className="text-[#008B8B] italic text-lg md:text-xl font-medium">
                    {current.title}
                  </p>
                  <p className="text-[#008B8B] text-sm md:text-base italic inline-block relative mt-1">
                    {current.subtitle}
                    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#E5006D]" />
                  </p>
                </div>

                {/* arrows (desktop) */}
                <div className="hidden md:flex gap-2">
                  <button
                    onClick={goPrevImage}
                    aria-label="Previous image"
                    className="h-8 w-8 flex items-center justify-center bg-[#008B8B] text-white rounded-md hover:bg-[#006d6d] transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goNextImage}
                    aria-label="Next image"
                    className="h-8 w-8 flex items-center justify-center bg-[#008B8B] text-white rounded-md hover:bg-[#006d6d] transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* image track */}
              <div className="relative w-full overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeImage * 100}%)` }}
                >
                  {current.images.map((image, i) => (
                    // 👇 mobile: block, lg: flex 3-column
                    <div
                      key={i}
                      className="w-full shrink-0 lg:flex lg:gap-6"
                    >
                      {/* left small (lg only) */}
                      <div className="hidden lg:block w-1/4 bg-[#F5F5F5] rounded-2xl overflow-hidden h-[200px] md:h-[210px]">
                        <img
                          src={image}
                          alt={`${current.title} - view ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* main */}
                      <div className="w-full lg:flex-1 bg-[#F5F5F5] rounded-2xl overflow-hidden h-[190px] sm:h-[210px] md:h-[230px] lg:h-[260px]">
                        <img
                          src={current.images[(i + 1) % imgCount]}
                          alt={`${current.title} - main view`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* right small (lg only) */}
                      <div className="hidden lg:block w-1/4 bg-[#F5F5F5] rounded-2xl overflow-hidden h-[200px] md:h-[210px]">
                        <img
                          src={current.images[(i + 2) % imgCount]}
                          alt={`${current.title} - view ${i + 3}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* mobile arrows */}
              <div className="flex md:hidden justify-center gap-2 mt-5">
                <button
                  onClick={goPrevImage}
                  aria-label="Previous image"
                  className="h-7 w-7 flex items-center justify-center bg-[#008B8B] text-white rounded-sm hover:bg-[#006d6d] transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={goNextImage}
                  aria-label="Next image"
                  className="h-7 w-7 flex items-center justify-center bg-[#008B8B] text-white rounded-sm hover:bg-[#006d6d] transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* dots */}
              <div className="flex justify-center gap-2 mt-6">
                {current.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${i === activeImage
                      ? "w-7 bg-[#E5006D]"
                      : "w-3 bg-[#008B8B]/30 hover:bg-[#008B8B]/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Showcase slider (NEW, like your screenshot) */}
      <section className="w-full bg-[#F6F1EC] py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* heading */}
          <div className="text-center mb-6 md:mb-8 relative">
            <p className="text-[#008B8B] italic text-xl md:text-2xl font-medium">
              {showcase.title}
            </p>
            <p className="text-[#008B8B] italic text-sm md:text-base inline-block relative mt-1">
              {showcase.subtitle}
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#E5006D]" />
            </p>
          </div>

          {/* images row */}
          <div
            className="
        flex gap-4
        overflow-x-auto
        snap-x snap-mandatory
        md:overflow-visible md:flex-row md:gap-6 lg:gap-8
      "
          >
            {showcase.images.map((img, idx) => (
              <div
                key={idx}
                className="
            flex-none
            w-[70%]             /* mobile: show 1 + part of 2nd */
            xs:w-[60%]          /* if you have xs: even better */
            sm:w-[55%]
            md:flex-1 md:w-auto
            rounded-2xl overflow-hidden bg-white shadow-sm border border-white/70
            h-[180px] sm:h-[200px] md:h-[230px] lg:h-[250px]
            snap-start
          "
              >
                <img
                  src={img}
                  alt={`Showcase ${idx + 1}`}
                  className="w-full object-cover"
                  style={{ height: "100%", display: "block" }}
                />
              </div>
            ))}
          </div>

          {/* bottom nav */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={goShowcasePrev}
              className="h-8 w-8 flex items-center justify-center bg-[#008B8B] text-white rounded-md hover:bg-[#006d6d] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {showcaseSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setShowcaseIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === showcaseIndex
                    ? "bg-[#008B8B]"
                    : "bg-[#008B8B]/35 hover:bg-[#008B8B]/60"
                    }`}
                  aria-label={`Go to showcase slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goShowcaseNext}
              className="h-8 w-8 flex items-center justify-center bg-[#008B8B] text-white rounded-md hover:bg-[#006d6d] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>



    </div>
  );
}
