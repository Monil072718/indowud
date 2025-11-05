"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useMemo } from "react"
import Image from "next/image"

/* --------- logos --------- */
const logosTop = [
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+45001:2015", alt: "ISO 45001" },
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+9001:2015", alt: "ISO 9001" },
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+14001:2015", alt: "ISO 14001" },
  { src: "https://dummyimage.com/220x110/ffffff/16a34a&text=RoHS", alt: "RoHS" },
]

const logosBottom = [
  { src: "https://dummyimage.com/220x110/ffffff/000&text=MSME", alt: "MSME" },
  { src: "https://dummyimage.com/220x110/ffffff/f97316&text=startup+india", alt: "Startup India" },
  { src: "https://dummyimage.com/220x110/ffffff/0ea5e9&text=EPD+Verified", alt: "EPD" },
  { src: "https://dummyimage.com/220x110/ffffff/22c55e&text=GreenPro", alt: "GreenPro" },
]

/* --------- card (📱 bigger only on mobile) --------- */
function LogoPill({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="
        shrink-0 rounded-xl border border-gray-200 bg-white
        px-5 py-4            /* mobile: more padding */
        sm:px-4 sm:py-3      /* ≥640px back to previous */
        md:px-5 md:py-4 lg:px-6 lg:py-4
        shadow-sm grid place-items-center
        h-24                 /* 📱 taller on mobile */
        sm:h-20              /* tablets back to normal */
        md:h-24 lg:h-28
        min-w-[170px]        /* 📱 wider on mobile */
        sm:min-w-[140px]
        md:min-w-[160px] lg:min-w-[184px]
      "
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={220}
        height={110}
        className="
          h-14                /* 📱 larger logo image */
          sm:h-10
          md:h-12 lg:h-16
          w-auto object-contain
        "
      />
    </div>
  )
}

/* --------- marquee row (responsive) --------- */
function MarqueeRow({
  items,
  reverse,
  speed = 24000, // ms for a loop
}: {
  items: { src: string; alt: string }[]
  reverse?: boolean
  speed?: number
}) {
  const list = useMemo(() => [...items, ...items], [items])
  const reduceMotion = useReducedMotion()

  return (
    <div className="rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-50 to-white p-2 sm:p-3 md:p-4">
      {/* ✅ Mobile / small: auto-sliding marquee (reduced-motion => manual swipe) */}
      <div className="lg:hidden overflow-hidden">
        {reduceMotion ? (
          <div
            className="flex gap-3 sm:gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
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
            transition={{ duration: speed / 1000, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            role="list"
            aria-label="Partner and certification logos"
          >
            {list.map((l, i) => (
              <div role="listitem" key={`${l.alt}-m-auto-${i}`}>
                <LogoPill src={l.src} alt={l.alt} />
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* ✅ lg+: animated marquee with edge mask */}
      <div
        className="hidden lg:block overflow-hidden
                    lg:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
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
            transition={{ duration: speed / 1000, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            role="list"
            aria-label="Partner and certification logos"
          >
            {list.map((l, i) => (
              <div role="listitem" key={`${l.alt}-${i}`}>
                <LogoPill src={l.src} alt={l.alt} />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

/* ============================ SECTION ============================ */
export default function TrustedProgramsSection() {
  return (
    <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Left copy */}
          <div className="md:col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-800 text-balance">
              Verified by trusted programs
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-base text-slate-600 leading-relaxed">
              From ISO standards to sustainability ecolabels, our panels are audited against rigorous benchmarks for
              safety, quality and environmental performance.
            </p>

            <div className="mt-4 sm:mt-5 md:mt-6 rounded-lg sm:rounded-xl bg-white border border-emerald-100 p-3 sm:p-4 md:p-5 shadow-sm">
              <div className="text-base leading-relaxed">
                <span className="font-semibold text-emerald-700">GreenPro Ecolabel</span> by CII validates lifecycle
                excellence and green building contribution.
              </div>
            </div>
          </div>

          {/* Right: TWO sliding rows */}
          <div className="md:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            {/* Row 1 */}
            <MarqueeRow items={[...logosTop, ...logosBottom]} speed={24000} />
            {/* Row 2 (reverse) */}
            <MarqueeRow items={[...logosBottom, ...logosTop]} reverse speed={26000} />
          </div>
        </div>
      </div>
    </section>
  )
}
