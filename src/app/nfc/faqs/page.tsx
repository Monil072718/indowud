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
  {
    q: "Where should the use of nfc board be avoided?",
    a:
      "Nfc boards are suitable for all exterior and interior applications. However, the use of nfc board must be avoided in all those places where the temperature is above 60 degree Celsius.",
  },
  {
    q: "Can nfc board be fixed directly on the wall?",
    a:
      "We do not recommend fixing nfc boards directly on the wall. It is recommended to leave a gap of atleast 10mm from the wall and fix the boards on the support/frame provided. Refer to guidelines and suggestions for more details or download the technical brochure from the downloads page in our website.",
  },
  {
    q: "Can nfc board be used for ceiling applications?",
    a:
      "Indowud nfc can be used for ceiling applications. It is suggested to reduce the thickness wise recommended support distance by 100mm to avoid gravitational pull.",
  },
  {
    q: "Does nfc deform without providing proper support?",
    a:
      "Yes, nfc boards are homogeneous product. Hence, it requires a proper constructive/structural support to avoid unwanted deformations.",
  },
  {
    q: "Can nfc boards be used for exterior applications?",
    a:
      "Yes, nfc boards are 100% water proof and can be used for all types of exterior applications. It is recommended to apply sealant/varnish/coating/paint of exterior grade to protect the boards from sun/weather and regular wear & tear.",
  },
  {
    q: "Can nfc board deform during climatic changes or extreme weather?",
    a:
      "If we take care of proper support system, type of screws used, and exterior grade sealant/varnishing/painting/coating, the boards would resist deformations.",
  },
  {
    q: "How does nfc board be fire retardant and smoke suppressant?",
    a:
      "During the manufacturing process, certain additives are used that prevents the spread of fire and smoke in the unlikely event of fire accident.  Indowud nfc has been tested with UL94 of USA (V0 rating) and ASTM E84 (passes class 1/a. Flame spread index @ 6 and smoke developed index @ 100) and UIC564 (Class 1/a).",
  },
  {
    q: "Is nfc free from harmful ingredients?",
    a:
      "Yes, Indowud nfc is RoHS certified and has ensured that it is free from asbestos, lead and other harmful raw materials.",
  },
  {
    q: "Does nfc board emit harmful VOC gases?",
    a:
      "No, There are no harmful VOC gases emitting from nfc boards making it a safe option to be used for all types of interior applications.",
  },
  {
    q: "Can I use regular wood working tools as nfc board working cum finish work cutter?",
    a:
      "Yes, the boards can be processed like any other wood based panel products and all types of wood working tools can be used for processing.",
  },
  {
    q: "Do we need a substrate to paste on indowud nfc before PU painting",
    a:
      "No, it is possible to PU paint directly on Indowud nfc. Do not use NC Putty. Do not pour water before closure of pores. Please contact us for more details.",
  },
  {
    q: "What are the glues suggested to use on nfc board?",
    a:
      "NFC-GLU, Probond, WP1, HeatX, PUR, Plastilok can be used. However, for any other adhesives, it is suggested to test the adhesive with a small sample piece of Indowud nfc. Drying time may vary due to environmental and atmospheric conditions.",
  },
  {
    q: "If fixing distances are too wide, can nfc vibrate?",
    a:
      "Unwanted deformations may appear if recommended fixing distance is not followed. We suggest to follow the recommended fixing distance for best results  and to avoid curve generation.",
  },
  {
    q: "Does the company offer any buyback of nfc boards?",
    a:
      "Yes, Indowud offers buy back of nfc boards. Ensure that the boards are free from metal and wood parts before sending the wastage/scrap/rejected boards to the factory for recycling. Please contact us for more details.",
  },
  {
    q: "Is there a warranty that comes with nfc board?",
    a:
      "Yes, Indowud nfc offers a warranty. Refer to the warranty page for more details about the warranty.",
  },
  {
    q: "Can indowud panels be customized?",
    a:
      "Yes, Indowud panels can be customized in terms of size, finish, and design to suit various project requirements.",
  },
  {
    q: "How does using indowud contribute to eco-friendly construction?",
    a:
      "Indowud helps reduce reliance on wood, preserving forests and lowering carbon footprints in construction projects.",
  },
  {
    q: "What is nfc board?",
    a:
      "Nfc means Natural Fibre Composite product. It is a sustainable ecofriendly board that looks, feels and are available in dimensions like wood based panels for all exterior and interior applications.",
  },
  {
    q: "What are the standard nfc Board sizes available?",
    a:
      "Nfc boards are available in the standard size of 8 feet (2440mm) x 4 feet (1220mm) x thickness : 6mm, 8mm, 12mm, 15mm, 16mm, 18mm, 20mm, 25mm. However, customized sizes are available as per the request. Please contact us for the available options.",
  },
  {
    q: "Is nfc eco-conscious?",
    a:
      "Yes, Indowud nfc is a zero wood product made using agricultural husks primarily and extruded. Our product is certified with GreePro ecolabel by the CII (Confederation of Indian Industries) – Green Products and Services Council (CII – GPSC) / CII- Godrej IGBC.",
  },
  {
    q: "What is GreenPro ecolabel?",
    a:
      "GreenPro is a Type-1 Ecolabel that helps the building and manufacturing sectors choose sustainable products, materials, and technologies to reduce environmental impact. Products with the GreenPro Ecolabel, like Indowud, have lower environmental footprints and contribute to improving the performance of Green Buildings and eco-friendly companies. As a zero-wood, durable, and termite-resistant WPC alternative, Indowud supports sustainable construction and interior solutions.",
  },
  {
    q: "Is there any colour options in nfc?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "What makes indowud a superior alternative to traditional wood-based panels?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "How is indowud contributing to environmental sustainability?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Is indowud suitable for both interior and exterior applications?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Can indowud be customised for specific design needs?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "What is Indowud NFC?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Is indowud resistant to pests and moisture?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Is indowud easy to install?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Does indowud require special maintenance?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "What is WPC Plywood Board?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Which is better, PVC or WPC?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Which material is good for room partition?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "What are the benefits of NFC flutes wall panel?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "How long does fire-retardant plywood last?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "What are WPC boards used for?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Are WPC boards waterproof?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
  {
    q: "Which board is termite-proof?",
    a:
      "Use Indowud NFC Build, 26mm Board for decking and flooring. Ensure proper support as per guidelines for installation. Apply a sealant to close pores, followed by primer, paint/varnish, and an anti-scratch coating for durability and protection. Regular maintenance and reapplication of protective layers are recommended.",
  },
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
