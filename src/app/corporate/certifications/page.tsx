"use client";

import PageHero from "@/components/common/PageHero";
import { motion, type Variants } from "framer-motion";

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
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

/* -------------------- small components -------------------- */
function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm grid place-items-center relative overflow-hidden"
    >
      {/* hover ring glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ boxShadow: "0 0 0 2px rgba(16,185,129,0.15) inset" }} />
      <img src={src} alt={alt} className="h-20 object-contain" />
    </motion.div>
  );
}

function MarqueeRow({
  items,
  reverse,
  speed = 25_000, // ms for one loop
}: {
  items: { src: string; alt: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate list for seamless loop
  const list = [...items, ...items];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-6"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed / 1000, ease: "linear", repeat: Infinity }}
      >
        {list.map((l, idx) => (
          <div
            key={`${l.alt}-${idx}`}
            className="shrink-0 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm"
          >
            <img src={l.src} alt={l.alt} className="h-16 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================================
   VARIANT A — Animated Grid (upgrade of your current UI)
   ========================================================= */
export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certifications"
        trail={["Home", "Corporate", "Certifications"]}
        subtitle="Our manufacturing and materials meet globally recognized benchmarks."
      />

      <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        {/* Top grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center"
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
          className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {logosBottom.map((l) => (
            <LogoCard key={l.alt} src={l.src} alt={l.alt} />
          ))}
        </motion.div>

        {/* Callout card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="mt-12 rounded-xl bg-teal-50 border border-teal-100 p-6 text-teal-900 shadow-sm"
        >
          <p className="font-semibold">
            CII has certified Indowud NFC as a Sustainable Green Product and awarded the{" "}
            <span className="text-teal-700">GreenPro ecolabel</span>.
          </p>
          <p className="mt-2 text-sm text-teal-800">
            Products bearing the GreenPro ecolabel have lower environmental impact and
            contribute to higher performance in green buildings and companies.
          </p>
        </motion.div>
      </section>

      {/* Divider between variants */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-gray-200" />
      </div>

      {/* ======================================================
          VARIANT B — Different Layout: Dual Marquee + Callout
          ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left sticky copy */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Verified by trusted programs
            </h2>
            <p className="mt-3 text-slate-600">
              From ISO standards to sustainability ecolabels, our panels are audited
              against rigorous benchmarks for safety, quality and environmental performance.
            </p>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-6 rounded-xl bg-white border border-emerald-100 p-5 shadow-sm"
            >
              <div className="text-sm">
                <span className="font-semibold text-emerald-700">GreenPro Ecolabel</span>{" "}
                by CII validates lifecycle excellence and green building contribution.
              </div>
            </motion.div>
          </motion.div>

          {/* Right: two-lane marquee */}
          <div className="lg:col-span-3 space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-50 to-white p-4">
              <div className="group relative">
                {/* pause on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
                <MarqueeRow items={[...logosTop, ...logosBottom]} speed={24000} />
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-slate-50 p-4">
              <div className="group relative">
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
                <MarqueeRow items={[...logosBottom, ...logosTop]} reverse speed={26000} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
