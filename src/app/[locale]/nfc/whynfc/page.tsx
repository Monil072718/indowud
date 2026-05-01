"use client";

import React from "react";
import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";

/* ----------------------- small UI bits ----------------------- */
const Tick = () => (
  <span className="inline-flex items-center justify-center rounded-md text-xs font-semibold ring-1 ring-inset ring-emerald-500/30 bg-emerald-50 text-emerald-700 px-1.5 py-0.5">
    ✓
  </span>
);
const Cross = () => (
  <span className="inline-flex items-center justify-center rounded-md text-xs font-semibold ring-1 ring-inset ring-rose-500/30 bg-rose-50 text-rose-700 px-1.5 py-0.5">
    ✗
  </span>
);

/* ----------------------- page ----------------------- */
export default function ComparativeStudyPage() {
  const t = useTranslations("WhyNFCPage");

  const head = t.raw("tableHead") as string[];

  const rows = [
    { no: 1, prop: t("properties.density"), nfc: t("values.densityNFC"), pvcwpc: t("values.densityPVC"), plywood: t("values.densityPlywood"), mdf: t("values.densityMDF") },
    {
      no: 2,
      prop: t("properties.rawMaterial"),
      nfc: t("values.rawNFC"),
      pvcwpc: t("values.rawPVC"),
      plywood: t("values.rawPlywood"),
      mdf: t("values.rawMDF"),
    },
    { no: 3, prop: t("properties.termiteProof"), nfc: <Tick />, pvcwpc: t("values.termitePVC"), plywood: <Cross />, mdf: <Cross /> },
    { no: 4, prop: t("properties.waterProof"), nfc: <Tick />, pvcwpc: <Tick />, plywood: t("values.waterPlywood"), mdf: <Cross /> },
    { no: 5, prop: t("properties.screwHolding"), nfc: t("values.screwNFC"), pvcwpc: t("values.screwPVC"), plywood: t("values.screwPlywood"), mdf: t("values.screwMDF") },
    { no: 6, prop: t("properties.conventionalTools"), nfc: <Tick />, pvcwpc: <Tick />, plywood: <Tick />, mdf: <Tick /> },
    { no: 7, prop: t("properties.overlay"), nfc: <Tick />, pvcwpc: t("values.termitePVC"), plywood: <Tick />, mdf: <Tick /> },
    {
      no: 8,
      prop: t("properties.applications"),
      nfc: t("values.appNFC"),
      pvcwpc: t("values.appPVC"),
      plywood: t("values.appPlywood"),
      mdf: t("values.appMDF"),
    },
    { no: 9, prop: t("properties.shrinking"), nfc: <Cross />, pvcwpc: <Cross />, plywood: <Tick />, mdf: <Tick /> },
    { no: 10, prop: t("properties.weather"), nfc: <Tick />, pvcwpc: <Tick />, plywood: <Cross />, mdf: <Cross /> },
    { no: 11, prop: t("properties.flame"), nfc: <Tick />, pvcwpc: t("values.termitePVC"), plywood: <Cross />, mdf: <Cross /> },
    { no: 12, prop: t("properties.eco"), nfc: <Tick />, pvcwpc: <Tick />, plywood: <Cross />, mdf: <Cross /> },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Gradient Hero */}
      <PageHeader
        category={t("category")}
        title={t("title")}
        highlight={t("highlight")}
        description={t("description")}
      />

      {/* Table Card */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Scroll hint on mobile */}
        <p className="text-xs text-zinc-400 mb-2 lg:hidden flex items-center gap-1">
          <span>←</span> Scroll horizontally to compare <span>→</span>
        </p>
        <div className="relative rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="mt-0 overflow-x-auto">
            <table className="min-w-[700px] w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  {head.map((h, i) => (
                    <th
                      key={h}
                      className={[
                        "sticky top-0 z-20 bg-zinc-50/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/75",
                        "text-left text-[11px] sm:text-[13px] font-semibold uppercase tracking-wide text-zinc-700",
                        "border-b border-zinc-200",
                        i === 0 ? "hidden" : "",
                        i === 1 ? "sticky left-0 z-30 min-w-[130px] sm:min-w-[200px]" : "min-w-[110px] sm:min-w-[150px]",
                        "px-3 sm:px-4 py-3",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.no} className="group even:bg-zinc-50 hover:bg-teal-50/60">
                    <td className="hidden border-b border-zinc-200 px-3 sm:px-4 py-3 text-sm font-semibold text-zinc-700">
                      {r.no}
                    </td>
                    <td className="sticky left-0 z-10 bg-inherit border-b border-zinc-200 px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium text-zinc-800 min-w-[130px] sm:min-w-[200px]">
                      {r.prop}
                    </td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-3 text-xs sm:text-sm text-zinc-800">{r.nfc}</td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-3 text-xs sm:text-sm text-zinc-800">{r.pvcwpc}</td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-3 text-xs sm:text-sm text-zinc-800">{r.plywood}</td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-3 text-xs sm:text-sm text-zinc-800">{r.mdf}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr><td colSpan={6} className="h-3" /></tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
