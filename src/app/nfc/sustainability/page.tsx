"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Star({ filled }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${filled ? "text-amber-400" : "text-slate-300"}`} fill="currentColor">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

type Row = { id: string; title: string; points?: string[]; rating: 1|2|3|4|5 };

export default function SustainabilitySectionAlt({
  heading = "Sustainability & Green Rating",
  intro = "Indowud NFC is a GreenPro certified product and adds merit to projects with Green Rating.",
  rows,
}: { heading?: string; intro?: string; rows?: Row[] }) {
  const data: Row[] = rows ?? [
    { id: "recycled", title: "Materials with recycled content", rating: 5, points: ["Resource efficiency","Lower embodied energy"] },
    { id: "fsc", title: "Wood based material with FSC certification and/or rapidly renewable", rating: 5, points: ["Responsibly sourced","Traceable supply chain"] },
    { id: "local", title: "Local Materials", rating: 4, points: ["Reduced transport emissions","Supports local economy"] },
    { id: "green", title: "Use of Certified Green Building Materials", rating: 4, points: ["Verified environmental performance","Credible labels"] },
    { id: "no-uf", title: "Composite wood with no urea formaldehyde", rating: 4, points: ["Low VOC","Health-first interiors"] },
  ];

  const [open, setOpen] = useState<string | null>(data[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_520px_at_12%_-10%,rgba(0,213,190,.07),transparent_60%),#fafafa]">
      <div className="bg-gradient-to-r from-[#00d5be] via-[#00b9a7] to-[#008e81]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <motion.h2 initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            {heading}
          </motion.h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }} className="mx-auto mt-10 mb-8 max-w-3xl text-center text-lg text-[#003a36]">
          {intro}
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-[#00d5be]" />
        </motion.p>

        <div className="mx-auto max-w-5xl rounded-3xl bg-white/70 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-md">
          {data.map((r, idx) => {
            const isOpen = open === r.id;
            return (
              <motion.div key={r.id} initial={false} className={`group relative rounded-2xl transition ${idx !== data.length - 1 ? "mb-2" : ""}`}>
                <button onClick={() => setOpen(isOpen ? null : r.id)} className="flex w-full items-center justify-between gap-6 rounded-2xl px-5 py-4 bg-[#00d5be]/10 hover:bg-[#00d5be]/15 transition ring-1 ring-[#00d5be]/20">
                  <div className="flex items-center gap-3 text-left">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#00d5be]/20 text-[#008e81]">
                      <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    </span>
                    <span className="text-base font-semibold text-[#003a36]">{r.title}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} filled={i < r.rating} />)}
                  </div>
                </button>

                <div className="mx-5 h-px bg-gradient-to-r from-[#008e81] via-[#00d5be] to-transparent" />

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="px-5 pb-4 pt-3">
                        {r.points?.length ? (
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {r.points.map((p, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00d5be]" />
                                <p className="text-sm text-slate-600">{p}</p>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-slate-600">Details coming soon.</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="mx-auto mt-12 flex w-full justify-center">
          <div className="rounded-2xl bg-white/80 p-4 shadow-lg ring-1 ring-black/5">
            <Image src="/epd-verified.png" alt="ECO Platform EPD Verified" width={360} height={160} className="h-16 w-auto sm:h-20" priority />
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }} className="mx-auto mt-6 max-w-4xl px-4 text-center text-slate-600">
          An Environmental Product Declaration (EPD) is a Type III environmental declaration that quantifies environmental information about the life cycle of a product. It is generally done to understand the environmental impact of the product and demonstrate a commitment to limiting environmental impacts.
        </motion.p>
      </div>
    </section>
  );
}
