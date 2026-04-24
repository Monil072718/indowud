"use client";

import React, { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("FAQsPage");
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first item open

  const faqs = t.raw("questions") as { q: string; a: string }[];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <PageHeader
        category={t("category")}
        title={t("title")}
        description={t("description")}
      />

      {/* Accordion */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="text-base sm:text-lg font-semibold text-zinc-900">
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
                    className="border-t border-zinc-200 bg-teal-50/60 px-4 py-3 text-sm sm:text-base leading-6 text-zinc-700"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
