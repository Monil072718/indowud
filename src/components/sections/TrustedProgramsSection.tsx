"use client";

import { motion } from "framer-motion";

/* --------- logos --------- */
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

/* --------- card --------- */
function LogoPill({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="shrink-0 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm grid place-items-center">
      <img src={src} alt={alt} className="h-16 object-contain" />
    </div>
  );
}

/* --------- marquee row (slider) --------- */
function MarqueeRow({
  items,
  reverse,
  speed = 24000, // ms for a loop
}: {
  items: { src: string; alt: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const list = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-50 to-white p-4
                    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-6"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed / 1000, ease: "linear", repeat: Infinity }}
      >
        {list.map((l, i) => (
          <LogoPill key={`${l.alt}-${i}`} src={l.src} alt={l.alt} />
        ))}
      </motion.div>
    </div>
  );
}

/* ============================ SECTION ============================ */
export default function TrustedProgramsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* Left copy */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Verified by trusted programs</h2>
          <p className="mt-3 text-slate-600">
            From ISO standards to sustainability ecolabels, our panels are audited against rigorous
            benchmarks for safety, quality and environmental performance.
          </p>

          <div className="mt-6 rounded-xl bg-white border border-emerald-100 p-5 shadow-sm">
            <div className="text-sm">
              <span className="font-semibold text-emerald-700">GreenPro Ecolabel</span> by CII validates
              lifecycle excellence and green building contribution.
            </div>
          </div>
        </div>

        {/* Right: TWO sliding rows */}
        <div className="lg:col-span-3 space-y-6">
          <MarqueeRow items={[...logosTop, ...logosBottom]} speed={24000} />
          <MarqueeRow items={[...logosBottom, ...logosTop]} reverse speed={26000} />
        </div>
      </div>
    </section>
  );
}
