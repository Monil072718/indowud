import React from "react";
import PageHeader from "@/components/common/PageHeader";

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

/* ----------------------- data (from image) ----------------------- */
const HEAD = ["No", "Properties", "NFC", "PVC/WPC Foam Board", "Plywood", "MDF"] as const;
type Row = {
  no: number;
  prop: string;
  nfc: React.ReactNode;
  pvcwpc: React.ReactNode;
  plywood: React.ReactNode;
  mdf: React.ReactNode;
};
const ROWS: Row[] = [
  { no: 1, prop: "Density (kg/cbm)", nfc: "700 – 800", pvcwpc: "400 – 600", plywood: "650 – 750", mdf: "600 – 700" },
  {
    no: 2,
    prop: "Raw Material",
    nfc: "Natural fibers and thermoplastics",
    pvcwpc: "PVC and filler materials",
    plywood: "Medium/softwood, Urea/Phenol Formaldehyde",
    mdf: "Medium/softwood, Urea Formaldehyde",
  },
  { no: 3, prop: "Termite Proof", nfc: <Tick />, pvcwpc: "Not always", plywood: <Cross />, mdf: <Cross /> },
  { no: 4, prop: "Water Proof", nfc: <Tick />, pvcwpc: <Tick />, plywood: "For sometime", mdf: <Cross /> },
  { no: 5, prop: "Screw Holding", nfc: "Above par", pvcwpc: "Below par", plywood: "Above par", mdf: "Below par" },
  { no: 6, prop: "Conventional Tools", nfc: <Tick />, pvcwpc: <Tick />, plywood: <Tick />, mdf: <Tick /> },
  { no: 7, prop: "Overlay Laminate/Veneer", nfc: <Tick />, pvcwpc: "Not Always", plywood: <Tick />, mdf: <Tick /> },
  {
    no: 8,
    prop: "Outdoor and Indoor Applications",
    nfc: "Both indoor and outdoor",
    pvcwpc: "Preferably indoor",
    plywood: "Indoor",
    mdf: "Only indoor",
  },
  { no: 9, prop: "Shrinking and Swelling", nfc: <Cross />, pvcwpc: <Cross />, plywood: <Tick />, mdf: <Tick /> },
  { no: 10, prop: "Weather and Ageing Resistant", nfc: <Tick />, pvcwpc: <Tick />, plywood: <Cross />, mdf: <Cross /> },
  { no: 11, prop: "Flame Retardant", nfc: <Tick />, pvcwpc: "Not Known", plywood: <Cross />, mdf: <Cross /> },
  { no: 12, prop: "Eco Friendly", nfc: <Tick />, pvcwpc: <Tick />, plywood: <Cross />, mdf: <Cross /> },
];

/* ----------------------- page ----------------------- */
export default function ComparativeStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Gradient Hero */}
      <PageHeader
        category="Why NFC"
        title="Comparative Study"
        highlight="NFC vs Others"
        description="Quality the world and time can test. See how Indowud NFC stacks up against PVC, Plywood, and MDF."
      />

      {/* Table Card */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="mt-0 overflow-auto">
            <table className="min-w-[880px] w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  {HEAD.map((h, i) => (
                    <th
                      key={h}
                      className={[
                        "sticky top-0 z-20 bg-zinc-50/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/75",
                        "text-left text-[13px] font-semibold uppercase tracking-wide text-zinc-700",
                        "border-b border-zinc-200",
                        i === 0 ? "sticky left-0 z-30 min-w-[56px]" : "",
                        i === 1 ? "min-w-[260px]" : "min-w-[180px]",
                        "px-4 py-3",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.no} className="group even:bg-zinc-50 hover:bg-teal-50/60">
                    <td className="sticky left-0 z-10 bg-inherit border-b border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-700">
                      {r.no}
                    </td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800">{r.prop}</td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-800">{r.nfc}</td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-800">{r.pvcwpc}</td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-800">{r.plywood}</td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-800">{r.mdf}</td>
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
