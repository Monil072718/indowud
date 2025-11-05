"use client";

import PageHero from "@/components/common/PageHero";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

/* ------------------------ data ------------------------ */
const logosTop = [
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+45001:2015", alt: "ISO 45001" },
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+9001:2015", alt: "ISO 9001" },
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+14001:2015", alt: "ISO 14001" },
  { src: "https://dummyimage.com/220x110/ffffff/16a34a&text=RoHS", alt: "RoHS" },
];

const logosBottom = [
  { src: "https://dummyimage.com/220x110/ffffff/000&text=MSME", alt: "MSME" },
  { src: "https://dummyimage.com/220x110/ffffff/f97316&text=startup+india", alt: "Startup India" },
  { src: "https://dummyimage.com/220x110/ffffff/0ea5e9&text=EPD+Verified", alt: "EPD" },
  { src: "https://dummyimage.com/220x110/ffffff/22c55e&text=GreenPro", alt: "GreenPro" },
];

/* ---------------------- motion utils ---------------------- */
const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.4, ease: "easeOut" },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* -------------------- small components -------------------- */
function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative flex items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 md:p-5 shadow-sm"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "0 0 0 2px rgba(16,185,129,0.12) inset" }}
      />
      <Image src={src} alt={alt} width={220} height={110} className="h-14 sm:h-16 md:h-20 w-auto max-w-full object-contain" />
    </motion.div>
  );
}

/* ====== this is the SAME pattern as your home page ====== */
function LogoPill({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="
        shrink-0 rounded-xl border border-gray-200 bg-white
        px-5 py-4
        sm:px-4 sm:py-3
        md:px-5 md:py-4 lg:px-6 lg:py-4
        shadow-sm grid place-items-center
        h-24 sm:h-20 md:h-24 lg:h-28
        min-w-[170px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[184px]
      "
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={220}
        height={110}
        className="h-14 sm:h-10 md:h-12 lg:h-16 w-auto object-contain"
      />
    </div>
  );
}

function MarqueeRow({
  items,
  reverse,
  speed = 24000,
}: {
  items: { src: string; alt: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const list = useMemo(() => [...items, ...items], [items]);
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-50 to-white p-2 sm:p-3 md:p-4">
      {/* mobile / small: swipe or auto-slide */}
      <div className="lg:hidden overflow-hidden">
        {reduceMotion ? (
          <div
            className="flex gap-3 sm:gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <style>{`div::-webkit-scrollbar{display:none;}`}</style>
            {items.map((l, i) => (
              <div key={`${l.alt}-m-${i}`} className="snap-start">
                <LogoPill src={l.src} alt={l.alt} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex gap-3 sm:gap-3 md:gap-4"
            animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: speed / 1000, ease: "linear", repeat: Infinity }}
          >
            {list.map((l, i) => (
              <div key={`${l.alt}-m-auto-${i}`}>
                <LogoPill src={l.src} alt={l.alt} />
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* lg and up: marquee with mask */}
      <div className="hidden lg:block overflow-hidden lg:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {reduceMotion ? (
          <div className="flex gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
            <style>{`div::-webkit-scrollbar{display:none;}`}</style>
            {items.map((l, i) => (
              <LogoPill key={`${l.alt}-rm-${i}`} src={l.src} alt={l.alt} />
            ))}
          </div>
        ) : (
          <motion.div
            className="flex gap-4"
            animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: speed / 1000, ease: "linear", repeat: Infinity }}
          >
            {list.map((l, i) => (
              <div key={`${l.alt}-${i}`}>
                <LogoPill src={l.src} alt={l.alt} />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */
export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certifications"
        trail={["Home", "Corporate", "Certifications"]}
        subtitle="Our manufacturing and materials meet globally recognized benchmarks."
      />

      {/* ===== Static grid (top) ===== */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
        {/* Top grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {logosTop.map((l) => (
            <LogoCard key={l.alt} src={l.src} alt={l.alt} />
          ))}
        </motion.div>

        {/* Bottom grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {logosBottom.map((l) => (
            <LogoCard key={l.alt} src={l.src} alt={l.alt} />
          ))}
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-12 rounded-xl bg-teal-50/80 border border-teal-100 p-4 sm:p-5 md:p-6 text-teal-900 shadow-sm"
        >
          {/* headline */}
          <p className="text-base sm:text-lg md:text-lg font-semibold leading-snug">
            CII has certified Indowud NFC as a Sustainable Green Product and awarded the{" "}
            <span className="text-teal-700">GreenPro ecolabel</span>.
          </p>

          {/* body */}
          <p className="mt-2 text-sm sm:text-base md:text-base text-teal-800 leading-relaxed">
            Products bearing the GreenPro ecolabel have lower environmental impact and contribute
            to higher performance in green buildings and companies.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* ===== Variant B (slider like homepage) ===== */}
      <section className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 pt-10 sm:pt-12 pb-14 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left copy */}
          <div className="md:col-span-1 lg:col-span-2">
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-slate-800 text-balance">
              Verified by trusted programs
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-slate-600 text-base sm:text-base md:text-lg leading-relaxed">
              From ISO standards to sustainability ecolabels, our panels are audited against
              rigorous benchmarks for safety, quality and environmental performance.
            </p>

            <div className="mt-4 sm:mt-5 md:mt-6 rounded-lg sm:rounded-xl bg-white border border-emerald-100 p-4 sm:p-4 md:p-5 shadow-sm">
              <div className="text-base sm:text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-emerald-700">GreenPro Ecolabel</span> by CII
                validates lifecycle excellence and green building contribution.
              </div>
            </div>
          </div>

          {/* Right sliders (exactly like home) */}
          <div className="md:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <MarqueeRow items={[...logosTop, ...logosBottom]} speed={24000} />
            <MarqueeRow items={[...logosBottom, ...logosTop]} reverse speed={26000} />
          </div>
        </div>
      </section>
    </>
  );
}
