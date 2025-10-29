"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

/** ★ simple star icon */
function Star({ filled }: { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 sm:h-5 sm:w-5 ${filled ? "text-amber-400" : "text-slate-300"}`}
      fill="currentColor"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}

type Row = {
  id: string
  title: string
  module: string
  credit: string
  compliance: string
  points: string[]
  indowudEdge: string[]
  rating: 1 | 2 | 3 | 4 | 5
}

export default function SustainabilityPage() {
  const data: Row[] = [
    {
      id: "recycled",
      title: "Materials with recycled content",
      module: "Building Materials and Resources",
      credit: "BMR1 - Sustainable Building Materials",
      compliance: "Materials with recycled content",
      points: [
        "Recycled materials with upto 10% of overall component - 1 point",
        "Recycled materials with upto 20% of overall component - 2 points",
        "Additional 1 point (Exemplary performance) for over 20% Indowud Edge",
        "Indowud has over 30% of recycled content",
      ],
      indowudEdge: ["Indowud has over 30% of recycled content"],
      rating: 3,
    },
    {
      id: "fsc",
      title: "Wood based material with FSC certification and/or rapidly renewable",
      module: "Building Materials and Resources",
      credit: "BMR1 - Sustainable Building Materials",
      compliance: "Wood based material with FSC certification and/or rapidly renewable (Within 5 years)",
      points: [
        "Materials upto 50% used - 1 point",
        "Materials upto 75% used - 2 points",
        "Additional 1 point (Exemplary performance) for over 95%",
      ],
      indowudEdge: [
        "Does not require FSC certification as it is a zero wood product",
        "Since the primary raw material is agri-residues, which is a rapidly cultivated can help awarding of points",
      ],
      rating: 3,
    },
    {
      id: "local",
      title: "Local Materials",
      module: "Building Materials and Resources",
      credit: "BMR1 - Sustainable Building Materials",
      compliance: "Local Materials - Sourcing of materials within 400Kms",
      points: [
        "Upto 20% of materials - 1 point",
        "Upto 40% of materials - 2 points",
        "Additional 1 point (Exemplary performance) for over 60%",
      ],
      indowudEdge: ["Projects within 400km radius from its factory in Chennai"],
      rating: 3,
    },
    {
      id: "green",
      title: "Use of Certified Green Building Materials",
      module: "Building Materials and Resources",
      credit: "BMR4 - Sustainable Building Materials",
      compliance: "Use of Certified Green Building Materials",
      points: ["Using GreenPro certified products, each product would give 1 points with a maximum of 5 points"],
      indowudEdge: ["Green Pro Certified"],
      rating: 1,
    },
    {
      id: "no-uf",
      title: "Composite wood with no urea formaldehyde",
      module: "Indoor environmental Quality",
      credit: "IEQ 5 - Low emitting Materials",
      compliance: "Composite wood with no urea formaldehyde",
      points: [],
      indowudEdge: [
        "No Urea Formaldehyde",
        "No Formaldehyde emissions",
        "No VOC emissions",
      ],
      rating: 1,
    },
  ]

  const [open, setOpen] = useState<string | null>(data[0]?.id ?? null)

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_520px_at_12%_-10%,rgba(0,213,190,.07),transparent_60%),#fafafa]">
      {/* Brand band */}
      <div className="bg-gradient-to-r from-[#00d5be] via-[#00b9a7] to-[#008e81]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-14">
          <motion.h2
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Sustainability & Green Rating
          </motion.h2>
          {/* Breadcrumb */}
          <motion.nav
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 text-xs md:text-sm tracking-widest text-white/90 uppercase"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li aria-hidden="true" className="mx-1">/</li>
              <li>
                <Link href="/nfc" className="hover:text-white transition-colors">
                  NFC
                </Link>
              </li>
              <li aria-hidden="true" className="mx-1">/</li>
              <li>SUSTAINABILITY</li>
            </ol>
          </motion.nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-20">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-6 sm:mt-10 mb-6 sm:mb-8 max-w-3xl text-center text-sm sm:text-base md:text-lg text-[#003a36]"
        >
          Indowud NFC is a GreenPro certified product and adds merit to projects with Green Rating.
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-[#00d5be]" />
        </motion.p>

        {/* Accordion table */}
        <div className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl bg-white/70 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-md">
          {data.map((r, idx) => {
            const isOpen = open === r.id
            return (
              <motion.div
                key={r.id}
                initial={false}
                className={`group relative rounded-xl sm:rounded-2xl transition ${
                  idx !== data.length - 1 ? "mb-2" : ""
                }`}
              >
                {/* Row header */}
                <button
                  onClick={() => setOpen(isOpen ? null : r.id)}
                  className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 rounded-xl sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4 bg-[#00d5be]/10 hover:bg-[#00d5be]/15 transition ring-1 ring-[#00d5be]/20"
                >
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-left flex-1">
                    <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#00d5be]/20 text-[#008e81] flex-shrink-0 mt-0.5 sm:mt-0">
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="currentColor"
                      >
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#003a36]">{r.title}</span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                    {/* POINTS */}
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-medium text-slate-500 uppercase">POINTS</span>
                      <span className="text-lg sm:text-xl font-bold text-[#00d5be]">{r.rating}</span>
                    </div>

                    {/* stars */}
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} filled={i < r.rating} />
                      ))}
                    </div>
                  </div>
                </button>

                {/* Divider line accent */}
                <div className="mx-3 sm:mx-5 h-px bg-gradient-to-r from-[#008e81] via-[#00d5be] to-transparent" />

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-2 sm:pt-3 space-y-4">
                        {/* Module and Credit */}
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-[#003a36]">Module:</span>
                            <p className="text-xs sm:text-sm text-slate-600">{r.module}</p>
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-[#003a36]">Credit:</span>
                            <p className="text-xs sm:text-sm text-slate-600">{r.credit}</p>
                          </div>
                        </div>

                        {/* Compliance */}
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-[#003a36]">Compliance:</span>
                          <p className="text-xs sm:text-sm text-slate-600">{r.compliance}</p>
                        </div>

                        {/* Points */}
                        {r.points?.length > 0 && (
                          <div>
                            <span className="text-xs sm:text-sm font-semibold text-[#003a36]">Points:</span>
                            <ul className="mt-1 space-y-1">
                              {r.points.map((p, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00d5be] flex-shrink-0" />
                                  <p className="text-xs sm:text-sm text-slate-600">{p}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Indowud Edge */}
                        {r.indowudEdge?.length > 0 && (
                          <div className="bg-[#00d5be]/5 p-3 rounded-lg">
                            <span className="text-xs sm:text-sm font-semibold text-[#003a36]">Indowud Edge:</span>
                            <ul className="mt-1 space-y-1">
                              {r.indowudEdge.map((edge, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00d5be] flex-shrink-0" />
                                  <p className="text-xs sm:text-sm text-slate-600">{edge}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* EPD badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mx-auto mt-8 sm:mt-12 flex w-full justify-center"
        >
          <div className="rounded-xl sm:rounded-2xl bg-white/80 p-3 sm:p-4 shadow-lg ring-1 ring-black/5">
            <Image
              src="/epd-verified.png"
              alt="ECO Platform EPD Verified"
              width={360}
              height={160}
              className="h-12 w-auto sm:h-16 md:h-20"
              priority
            />
          </div>
        </motion.div>

        {/* EPD blurb */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-4 sm:mt-6 max-w-4xl px-2 sm:px-4 text-center text-xs md:text-base text-slate-600"
        >
          An Environmental Product Declaration (EPD) is a Type III environmental declaration that quantifies
          environmental information about the life cycle of a product. It is generally done to understand the
          environmental impact of the product and demonstrate a commitment to limiting environmental impacts.
        </motion.p>
      </div>
    </section>
  )
}
