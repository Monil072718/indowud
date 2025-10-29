import type React from "react"
import Link from "next/link"

/* --------- small helpers --------- */
const Yes = () => (
  <span className="inline-flex items-center justify-center rounded-md text-[10px] sm:text-[11px] font-semibold ring-1 ring-emerald-500/30 bg-emerald-50 text-emerald-700 px-1.5 py-0.5">
    ✓
  </span>
)
const No = () => (
  <span className="inline-flex items-center justify-center rounded-md text-[10px] sm:text-[11px] font-semibold ring-1 ring-rose-500/30 bg-rose-50 text-rose-700 px-1.5 py-0.5">
    ✗
  </span>
)

/* --------- table data (from image) --------- */
type R = {
  no: number
  prop: string
  nfc: React.ReactNode
  pvcwpc: React.ReactNode
  plywood: React.ReactNode
  mdf: React.ReactNode
}

const ROWS: R[] = [
  { no: 1, prop: "DENSITY (KG/CBM)", nfc: "700 – 800", pvcwpc: "400 – 600", plywood: "650 – 750", mdf: "600 – 700" },
  {
    no: 2,
    prop: "RAW MATERIAL",
    nfc: "Natural fibers and thermoplastics",
    pvcwpc: "PVC and filler materials",
    plywood: "Medium/softwood,Urea/Phenol Formaldehyde",
    mdf: "Medium/softwood,Urea Formaldehyde",
  },
  { no: 3, prop: "TERMITE PROOF", nfc: <Yes />, pvcwpc: "Not always", plywood: <No />, mdf: <No /> },
  { no: 4, prop: "WATER PROOF", nfc: <Yes />, pvcwpc: <Yes />, plywood: "For sometime", mdf: <No /> },
  { no: 5, prop: "SCREW HOLDING", nfc: "Above par", pvcwpc: "Below par", plywood: "Above par", mdf: "Below par" },
  { no: 6, prop: "CONVENTIONAL TOOLS", nfc: <Yes />, pvcwpc: <Yes />, plywood: <Yes />, mdf: <Yes /> },
  { no: 7, prop: "OVERLAY LAMINATE/VENEER", nfc: <Yes />, pvcwpc: "Not Always", plywood: <Yes />, mdf: <Yes /> },
  {
    no: 8,
    prop: "OUTDOOR AND INDOOR APPLICATIONS",
    nfc: "Both indoor and outdoor",
    pvcwpc: "Preferably indoor",
    plywood: "Indoor",
    mdf: "Only indoor",
  },
  { no: 9, prop: "SHRINKING AND SWELLING", nfc: <No />, pvcwpc: <No />, plywood: <Yes />, mdf: <Yes /> },
  { no: 10, prop: "WEATHER AND AGEING RESISTANT", nfc: <Yes />, pvcwpc: <Yes />, plywood: <No />, mdf: <No /> },
  { no: 11, prop: "FLAME RETARDANT", nfc: <Yes />, pvcwpc: "Not Known", plywood: <No />, mdf: <No /> },
  { no: 12, prop: "ECO FRIENDLY", nfc: <Yes />, pvcwpc: <Yes />, plywood: <No />, mdf: <No /> },
]

export default function ComparativeStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <header className="w-full">
        <div className="bg-gradient-to-b from-teal-700 via-teal-600/70 to-pink-700/80">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl font-serif italic font-semibold text-white drop-shadow">
              Comparative Study
            </h1>
            <nav className="mt-3 text-center text-xs md:text-sm tracking-widest text-white/90 uppercase">
              <ol className="inline-flex items-center">
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
                <li className="text-white">COMPARATIVE STUDY</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Page title + tagline */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-extrabold text-teal-700">
          nfc Boards vs. Other Boards
        </h2>
        <p className="mt-2 text-center text-xs sm:text-sm font-semibold text-rose-600">
          Quality the world and time can test
        </p>
      </section>

      {/* Table */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="relative overflow-hidden rounded-lg sm:rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-teal-600 via-fuchsia-500 to-pink-500 h-1.5 w-full" />

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-3 p-3 sm:p-4">
            {ROWS.map((r) => (
              <div
                key={r.no}
                className="border border-zinc-200 rounded-lg p-3 sm:p-4 bg-zinc-50 hover:bg-teal-50/60 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold text-sm text-teal-700 flex-1">{r.prop}</div>
                  <div className="text-xs text-zinc-500 ml-2">#{r.no}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-zinc-500 font-medium mb-1">NFC</div>
                    <div className="text-zinc-900">{r.nfc}</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 font-medium mb-1">PVC/WPC</div>
                    <div className="text-zinc-900">{r.pvcwpc}</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 font-medium mb-1">Plywood</div>
                    <div className="text-zinc-900">{r.plywood}</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 font-medium mb-1">MDF</div>
                    <div className="text-zinc-900">{r.mdf}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  {["NO", "PROPERTIES", "NFC", "PVC/WPC FOAM BOARD", "PLYWOOD", "MDF"].map((h, i) => (
                    <th
                      key={h}
                      className={[
                        "sticky top-0 z-20 bg-zinc-50/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/75",
                        "text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-zinc-700",
                        "border-b border-zinc-200",
                        i === 0 ? "sticky left-0 z-30 min-w-[60px]" : "",
                        i === 1 ? "min-w-[240px]" : "min-w-[160px]",
                        "px-3 sm:px-4 py-2 sm:py-3",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.no} className="even:bg-zinc-50 hover:bg-teal-50/60">
                    <td className="sticky left-0 z-10 bg-inherit border-b border-zinc-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-zinc-700">
                      {r.no}
                    </td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-zinc-900">
                      {r.prop}
                    </td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-zinc-800">
                      {r.nfc}
                    </td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-zinc-800">
                      {r.pvcwpc}
                    </td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-zinc-800">
                      {r.plywood}
                    </td>
                    <td className="border-b border-zinc-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-zinc-800">
                      {r.mdf}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
