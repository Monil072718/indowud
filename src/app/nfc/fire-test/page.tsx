
import PageHeader from "@/components/common/PageHeader"

type Row = { test: string; method: string; unit: string; result: string }

const ROWS: Row[] = [
  { test: "FIRE RESISTANCE", method: "APPENDIX 11 of UIC 564-2", unit: "", result: "CLASS A" },
  { test: "FLAMMABILITY", method: "UL-94", unit: "", result: "V0 RATING" },
  { test: "FLAME SPREAD INDEX", method: "ASTM E84 : 2020", unit: "0 – 25 CLASS 1 OR A", result: "6 CLASS 1 OR A" },
  { test: "SMOKE DEVELOPED INDEX", method: "ASTM E84 : 2020", unit: "450", result: "100" },
]

export default function FireTestPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Gradient Hero */}
      <PageHeader
        category="NFC"
        title="Fire Test"
        description="Understanding fire resistance standards and ratings."
      />

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 space-y-3 text-[13px] sm:text-sm leading-6 text-zinc-700">
        <p>
          UIC564-2 test is connected to regulations relating to fire protection and firefighting measures in passenger
          carrying railway vehicles or assimilated vehicles used on international services. Under Appendix 11, the
          specimen is held vertically in a frame and is exposed to a gas flame which is directed on to the surface of
          the specimen.
        </p>
        <p>
          UL-94 is a flammability standard by the Underwriters Laboratories of the United States of America. The
          standard determines the material&apos;s tendency to either extinguish or spread the flame once the specimen is
          ignited. V0 rating means – burning stops within 10 seconds.
        </p>
        <p>
          ASTM E84 is an American test standard for assessing the surface burning characteristics of building products.
          The purpose of this test is to observe the flame spread in order to determine the relative burning behaviour
          of material. Flame spread index is the measurement for the speed at which the flames progress across the
          interior surface of a building, while the smoke developed index measures the amount of smoke the product emits
          as it burns.
        </p>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
            title="Indowud nfc - Fire Safety Comparison"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Results Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="bg-rose-600 h-1.5 w-full" />

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3 p-3 sm:p-4">
            {ROWS.map((r, idx) => (
              <div
                key={idx}
                className="border border-rose-200 rounded-lg p-3 sm:p-4 bg-rose-50/40 hover:bg-rose-50 transition"
              >
                <div className="font-semibold text-sm text-rose-700 mb-2">{r.test}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-rose-600 font-medium">Method</div>
                    <div className="text-zinc-900">{r.method}</div>
                  </div>
                  <div>
                    <div className="text-rose-600 font-medium">Unit</div>
                    <div className="text-zinc-900">{r.unit || "-"}</div>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-rose-200">
                  <div className="text-rose-600 font-medium text-xs mb-1">Result</div>
                  <div className="font-semibold text-zinc-900">{r.result}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-auto">
            <table className="min-w-[820px] w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  {["TEST", "METHOD", "UNIT", "RESULT"].map((h, i) => (
                    <th
                      key={h}
                      className={[
                        "sticky top-0 z-20 bg-rose-50/95 backdrop-blur supports-[backdrop-filter]:bg-rose-50/80",
                        "text-left text-[13px] font-semibold uppercase tracking-wide text-rose-800",
                        "border-b border-rose-200",
                        i === 0 ? "sticky left-0 z-30 min-w-[260px]" : "min-w-[180px]",
                        "px-4 py-3",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, idx) => (
                  <tr key={idx} className="even:bg-rose-50/40 hover:bg-rose-50">
                    <td className="sticky left-0 z-10 bg-inherit border-b border-rose-200 px-4 py-3 text-sm font-medium text-zinc-900">
                      {r.test}
                    </td>
                    <td className="border-b border-rose-200 px-4 py-3 text-sm text-zinc-700">{r.method}</td>
                    <td className="border-b border-rose-200 px-4 py-3 text-sm text-zinc-700">{r.unit || "-"}</td>
                    <td className="border-b border-rose-200 px-4 py-3 text-sm font-semibold text-zinc-900">
                      {r.result}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="h-3" />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
