"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";

/* ────────────────── Types ────────────────── */
type GridRow = {
  label: string; // e.g. "Crota (6 mm)"
  values: (number | "-")[]; // per column
};

type Guide = {
  id: string;
  title: string;
  body: ReactNode;
};

/* ────────────────── Page (default export) ────────────────── */
export default function Page() {
  return <SuggestionsSection />;
}

/* ────────────────── Named component (can take props) ────────────────── */
function SuggestionsSection({
  heading = "Important Suggestions",
  videoId = "dQw4w9WgXcQ", // replace with real YouTube id
  brochureHref = "/brochures/technical-suggestions.pdf",
  grids,
  guides,
}: {
  heading?: string;
  videoId?: string;
  brochureHref?: string;
  grids?: { columns: string[]; rows: GridRow[]; note?: string };
  guides?: Guide[];
}) {
  // If you don't use lang anywhere, remove this state to avoid lint warnings.
  const [/* lang */, /* setLang */] = useState<"en" | "hi">("en");

  const grid =
    grids ??
    {
      columns: ["6", "8", "12", "15", "16", "18", "20", "25"],
      rows: [
        { label: "Neo (6 mm) • 625–650 kg/m³", values: [150, 200, 250, 300, 320, 350, 380, 420] },
        { label: "Crota (8 mm) • 725+ kg/m³", values: [200, 250, 300, 350, 370, 400, 430, 550] },
        { label: "Build (10 mm) • 825+ kg/m³", values: [250, 350, 420, 550, 580, 600, 650, 750] },
      ],
      note:
        "For ceiling: 12 mm or higher thickness board with suggested grid: 300 mm for crota or build, 200 mm for neo.",
    };

  const sections: Guide[] =
    guides ??
    [
      {
        id: "paint",
        title: "PU paint & polish",
        body:
          "Use only NC putty. Ensure the micro pores are sealed. Avoid water-based filler on raw board before the micro pores are sealed.",
      },
      {
        id: "shutters",
        title: "Wardrobe / Cabinet shutters",
        body:
          "Reinforce laminates on both sides before fixing shutter. Use suitable lipping. Provide proper balancing & uniform support.",
      },
      {
        id: "adhesive",
        title: "Suggested adhesive",
        body:
          "INDOBLUE PVA, PFE, WP1; ProBond; Merstik; Helen. Drying time may vary—follow manufacturer’s guidance.",
      },
      {
        id: "paneling",
        title: "Paneling",
        body:
          "Leave 1–2 mm gap between wall & board for breathing. Allow 3 mm gap per 1 m span between two boards.",
      },
      {
        id: "screwing",
        title: "Screwing",
        body:
          "Use mild steel fully threaded. For better strength, drilling or joinery is suggested. Avoid hammering.",
      },
      {
        id: "ceiling",
        title: "Ceiling",
        body:
          "Follow advanced installation guidelines: adequate structural support, correct fasteners, and movement joints.",
      },
      {
        id: "thermal",
        title: "Thermal management for outdoor applications",
        body:
          "Use heat-resistant paint/coating; create thermal breaks; add airflow gaps to minimize heat conduction.",
      },
      {
        id: "substrate",
        title: "Normal supports",
        body:
          "Use adequate support frames sized to board thickness & weight. Keep spans as per suggested grid.",
      },
    ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero band */}
      <div className="bg-gradient-to-r from-[#00d5be] via-[#00b9a7] to-[#008e81]">
        <div className="mx-auto max-w-7xl px-6 py-14 text-white">
          <motion.h1
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight"
          >
            {heading}
          </motion.h1>
          <p className="mt-2 text-white/90">
            Zero-defect furniture starts with the right workflow & installation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        {/* Video */}
        <div className="flex flex-col items-center gap-6 py-10">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
          >
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Technical suggestions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Brochure CTA */}
          <a
            href={brochureHref}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[#00d5be] px-5 py-2.5 font-medium text-white shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-[#00c7b1]"
          >
            Request Technical Suggestions Brochure
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
            </svg>
          </a>
        </div>

        {/* Blurb */}
        <p className="mx-auto mb-8 max-w-4xl text-center text-[15px] text-slate-600">
          Indowud NFC is a homogeneous product and hence requires proper constructive grid support
          (frames, channels, sub-frame) to avoid deformations. Follow the grid & fastening guidance below.
        </p>

        {/* Grid table */}
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 bg-[#00d5be]/10 px-5 py-3">
              <h3 className="text-[17px] font-semibold text-[#003a36]">
                Suggested grid spacing for panelling (mm)
              </h3>
              <span className="text-[13px] text-slate-600">Maximum support distance</span>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left">
                <thead className="sticky top-0 bg-white/95 backdrop-blur">
                  <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-sm [&>th]:font-semibold [&>th]:text-slate-700">
                    <th>Thickness / Variant</th>
                    {grid.columns.map((c) => (
                      <th key={c} className="text-center">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {grid.rows.map((r) => (
                    <tr
                      key={r.label}
                      className="transition hover:bg-[#00d5be]/5 [&>td]:px-4 [&>td]:py-3"
                    >
                      <td className="text-[15px] font-medium text-slate-800">{r.label}</td>
                      {r.values.map((v, i) => (
                        <td key={i} className="text-center text-slate-700">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {grid.note && (
              <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-[13px] text-slate-600">
                {grid.note}
              </div>
            )}
          </motion.div>
        </div>

        {/* Guidelines */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-3 md:grid-cols-2">
            {sections.map((g) => (
              <Accordion key={g.id} title={g.title}>
                <p className="text-sm leading-relaxed text-slate-600">{g.body}</p>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-12 flex max-w-5xl items-center justify-between gap-4 rounded-2xl
                     bg-[#00d5be]/10 px-5 py-4 ring-1 ring-[#00d5be]/20"
        >
          <p className="text-sm text-slate-700">
            For deeper details on installation, spacing, fasteners and finishes, refer to our
            “technical suggestions brochure”.
          </p>
          <a
            href={brochureHref}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[#00d5be] px-4 py-2 text-sm font-medium text-white
                       shadow-sm transition hover:-translate-y-0.5 hover:bg-[#00c7b1]"
          >
            Open brochure
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────── Atoms ────────────────── */

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="text-[15px] font-semibold text-[#003a36]">{title}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 text-[#008e81] transition-transform ${open ? "rotate-180" : ""}`}
          fill="currentColor"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
