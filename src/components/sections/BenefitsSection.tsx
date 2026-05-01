"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function BenefitsSection() {
  const t = useTranslations("BenefitsSection");

  const copy = [
    { t: t("copy.0") },
    { t: t("copy.1") },
    { t: t("copy.2"), small: true, italic: true },
  ];

  const tags = [t("tags.0"), t("tags.1"), t("tags.2")];

  const img1 = "/factory.png";

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-emerald-500"></span>
                <span className="text-emerald-700 text-sm font-bold uppercase tracking-wider">
                  {t("label")}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6 leading-tight">
                {t("heading", {
                  performance: t("performance"),
                  imagination: t("imagination"),
                })}
              </h2>

              {/* Main Copy */}
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {copy.map((c, i) => (
                  <p key={i} className={`${c.small ? "text-sm text-slate-500 mt-2" : ""} ${c.italic ? "italic" : ""}`}>
                    {c.t}
                  </p>
                ))}
              </div>

              {/* "Made for Makers" - Integrated Callout Box */}
              <div className="mt-8 rounded-xl bg-emerald-50/50 border border-emerald-100 p-5">
                <div className="flex gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t("calloutTitle")}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {t("calloutText")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: COMPACT IMAGE --- */}
          {/* Added 'relative' to parent to contain decor elements better */}
          <div className="order-1 lg:order-2 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              // CHANGE HERE: Removed "shadow-2xl shadow-slate-200", added subtle border and tight shadow
              className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white"
            >
              {/* The Image - Aspect Ratio Constrained */}
              <div className="aspect-[4/3] w-full bg-slate-100">
                <img
                  src={img1}
                  alt="Factory overhead view"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Subtle Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur shadow-md rounded-lg px-4 py-2 border border-slate-100">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {t("imageBadgeTitle")}
                </p>
                <p className="text-[10px] text-slate-500">
                  {t("imageBadgeSubtitle")}
                </p>
              </div>
            </motion.div>

            {/* Background Decor Elements to blend image */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="h-64 w-64 bg-emerald-50 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}