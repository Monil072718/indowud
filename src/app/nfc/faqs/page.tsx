"use client";

import React, { useMemo, useState } from "react";

import PageHeader from "@/components/common/PageHeader";

/* ----------------------------- Data (from screenshot) ----------------------------- */
type FAQ = { q: string; a?: string };

const FAQS: FAQ[] = [
  {
    q: "Can nfc board be used for exterior flooring / decking applications?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  { q: "Where should the use of nfc board be avoided?" },
  { q: "Can nfc board be fixed directly on the wall?" },
  { q: "Can nfc board be used for ceiling applications?" },
  { q: "Does nfc deform without providing proper support?" },
  { q: "Can nfc boards be used for exterior applications?" },
  { q: "Can nfc board deform during climatic changes or extreme weather?" },
  { q: "How does nfc board be fire retardant and smoke suppressant?" },
  { q: "Is nfc free from harmful ingredients?" },
  { q: "Does nfc board emit harmful VOC gases?" },
  { q: "Can I use regular wood working tools as nfc board working cum finish work cutter?" },
  { q: "Do we need a substrate to paste on indowud nfc before PU painting" },
  { q: "What are the glues suggested to use on nfc board?" },
  { q: "If fixing distances are too wide, can nfc vibrate?" },
  { q: "Does the company offer any buyback of nfc boards?" },
  { q: "Is there a warranty that comes with nfc board?" },
  { q: "Can indowud panels be customized?" },
  { q: "How does using indowud contribute to eco-friendly construction?" },
  { q: "What is nfc board?" },
  { q: "What are the standard nfc Board sizes available?" },
  { q: "Is nfc eco-conscious?" },
  { q: "What is GreenPro ecolabel?" },
  { q: "Is there any colour options in nfc?" },
  { q: "What makes indowud a superior alternative to traditional wood-based panels?" },
  { q: "How is indowud contributing to environmental sustainability?" },
  { q: "Is indowud suitable for both interior and exterior applications?" },
  { q: "Can indowud be customised for specific design needs?" },
  { q: "What is Indowud NFC?" },
  { q: "Is indowud resistant to pests and moisture?" },
  { q: "Is indowud easy to install?" },
  { q: "Does indowud require special maintenance?" },
  { q: "What is WPC Plywood Board?" },
  { q: "Which is better, PVC or WPC?" },
  { q: "Which material is good for room partition?" },
  { q: "What are the benefits of NFC flutes wall panel?" },
  { q: "How long does fire-retardant plywood last?" },
  { q: "What are WPC boards used for?" },
  { q: "Are WPC boards waterproof?" },
  { q: "Which board is termite-proof?" },
];

/* ----------------------------- Icons ----------------------------- */
const Plus = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9 3h2v14H9z" /><path d="M3 9h14v2H3z" />
  </svg>
);
const Minus = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M3 9h14v2H3z" />
  </svg>
);

/* ----------------------------- Page ----------------------------- */
export default function FAQPage() {
  const [query, setQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first item open
  const filtered = useMemo(
    () =>
      FAQS.filter(({ q }) =>
        q.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [query]
  );

  const expandAll = () => setOpenIdx(-1); // special marker for "all"
  const collapseAll = () => setOpenIdx(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <PageHeader
        category="NFC"
        title="FAQs"
        description="Frequently Asked Questions about Indowud NFC."
      />

      {/* Controls + Accordion */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            className="w-full sm:w-64 rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
          />
          <div className="flex items-center gap-2">
            <button onClick={expandAll} className="rounded-md border px-3 py-1.5 text-xs font-semibold hover:bg-zinc-50">
              Expand all
            </button>
            <button onClick={collapseAll} className="rounded-md border px-3 py-1.5 text-xs font-semibold hover:bg-zinc-50">
              Collapse all
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openIdx === -1 || openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen && openIdx !== -1 ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="text-sm font-semibold text-zinc-900">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-teal-700">
                    {isOpen ? <Minus /> : <Plus />}
                  </span>
                </button>

                {/* answer (only where available) */}
                {isOpen && item.a && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="border-t border-zinc-200 bg-teal-50/60 px-4 py-3 text-[13px] leading-6 text-zinc-700"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-600">
              No questions matched your search.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
