// app/(site)/test-results/page.tsx
import React from "react";

/* ---------------- data from your screenshot ---------------- */
type TestRow = { test: string; unit: string; method: string; result: string };

const MAIN_ROWS: TestRow[] = [
  { test: "DENSITY", unit: "Kg/CBM", method: "ASTM D792", result: "800.349" },
  { test: "WATER ABSORPTION AFTER 2 HRS", unit: "%", method: "IS: 2380", result: "0.02" },
  { test: "WATER ABSORPTION AFTER 24 HRS", unit: "%", method: "IS: 2380", result: "0.12" },
  { test: "THICKNESS SWELLING AFTER 2 HRS", unit: "%", method: "IS: 2380", result: "0.06" },
  { test: "MODULUS OF RUPTURE – AVERAGE", unit: "N/mm²", method: "IS: 2380", result: "14.6" },
  { test: "MODULUS OF RUPTURE – MINIMUM INDIVIDUAL", unit: "N/mm²", method: "IS: 2380", result: "14.4" },
  { test: "MODULUS OF ELASTICITY – AVERAGE", unit: "N/mm²", method: "IS: 2380", result: "1327" },
  { test: "MODULUS OF ELASTICITY – MINIMUM INDIVIDUAL", unit: "N/mm²", method: "IS: 2380", result: "1290" },
  { test: "SCREW WITHDRAWAL – FACE", unit: "N", method: "IS: 2380", result: "2252" },
  { test: "SCREW WITHDRAWAL – EDGE", unit: "N", method: "IS: 2380", result: "1409" },
  { test: "TENSILE STRENGTH", unit: "MPa", method: "ASTM D638", result: "7.6" },
  { test: "COMPRESSION STRENGTH", unit: "MPa", method: "ASTM D695", result: "40.2" },
  { test: "ELONGATION @ BREAK", unit: "%", method: "ASTM D638", result: "2.0" },
  { test: "CHARPY IMPACT STRENGTH", unit: "KJ/m²", method: "ASTM D6110", result: "6.25" },
  { test: "HEAT DEFLECTION @ 0.45MPa", unit: "°C", method: "ASTM D648", result: "64.45" },
  { test: "SOFTENING TEMPERATURE (VICAT) 1 KG", unit: "°C", method: "ASTM D1525", result: "72.6" },
  { test: "VOC EMISSIONS", unit: "Mg/KG", method: "EPA: 5035A (by GCMS)", result: "Below detectable limit" },
  { test: "TEST FOR TERMITE RESISTANCE", unit: "", method: "IS 4833", result: "No sign of termite attack" },
  { test: "TEST FOR FUNGAL RESISTANCE", unit: "", method: "IS 4873", result: "No sign of fungal attack" },
  { test: "TEST FOR BORER RESISTANCE", unit: "", method: "IS 4873", result: "No sign of borer attack" },
];

type SoundRow = { freq: string; coeff: string; loss: string };
const SOUND_ROWS: SoundRow[] = [
  { freq: "125", coeff: "0.02", loss: "26.19" },
  { freq: "250", coeff: "0.03", loss: "22.53" },
  { freq: "500", coeff: "0.04", loss: "32.85" },
  { freq: "1000", coeff: "0.06", loss: "40.20" },
  { freq: "1500", coeff: "0.06", loss: "44.50" },
  { freq: "2000", coeff: "0.05", loss: "47.33" },
  { freq: "2500", coeff: "0.05", loss: "45.61" },
  { freq: "3000", coeff: "0.06", loss: "47.83" },
  { freq: "3500", coeff: "0.08", loss: "46.6" },
  { freq: "3800", coeff: "0.08", loss: "47.16" },
  { freq: "4000", coeff: "0.10", loss: "47.56" },
];

/* ---------------- UI ---------------- */
export default function TestResultsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Gradient Hero */}
      <header className="w-full">
        <div className="bg-gradient-to-b from-teal-700 via-teal-600/70 to-pink-700/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <h1 className="text-center text-3xl sm:text-5xl font-serif italic font-semibold text-white drop-shadow">
              Test Results
            </h1>
            <nav className="mt-3 text-center text-xs sm:text-sm font-semibold tracking-wide">
              <ol className="inline-flex items-center gap-2 text-white/90">
                <li><a href="/" className="hover:underline">HOME</a></li>
                <li className="opacity-80">/</li>
                <li className="text-white">TEST RESULTS</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Intro + Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-teal-700">
          nfc Boards with High Fibre Content
        </h2>
        <p className="mt-3 text-center text-[13px] leading-6 text-zinc-600">
          The following tests were carried out on the samples of Indowud NFC board by the National Test House,
          Central Institute of Plastic Engineering &amp; Technology (CIPET) and Indian Plywood Industries Research &amp;
          Training Institute (IPIRTI), Spectro Labs and SGS Labs
        </p>
      </section>

      {/* Main Test Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          {/* accented title strip */}
          <div className="bg-gradient-to-r from-teal-600 via-fuchsia-500 to-pink-500 h-1.5 w-full" />
          <div className="overflow-auto">
            <table className="min-w-[920px] w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  {["TEST", "UNIT", "METHOD", "RESULT"].map((h, i) => (
                    <th
                      key={h}
                      className={[
                        "sticky top-0 z-20 bg-zinc-50/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/75",
                        "text-left text-[13px] font-semibold uppercase tracking-wide text-zinc-700",
                        "border-b border-zinc-200",
                        i === 0 ? "sticky left-0 z-30 min-w-[320px]" : "min-w-[180px]",
                        "px-4 py-3",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MAIN_ROWS.map((r, idx) => (
                  <tr key={idx} className="even:bg-zinc-50 hover:bg-teal-50/60">
                    <td className="sticky left-0 z-10 bg-inherit border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800">
                      {r.test}
                    </td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">{r.unit || "-"}</td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">{r.method}</td>
                    <td className="border-b border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-900">
                      {r.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sound Test */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <h3 className="text-center text-xl sm:text-2xl font-extrabold text-rose-600 mb-4">
          Sound Test
        </h3>

        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="bg-rose-600 h-1.5 w-full" />
          <div className="overflow-auto">
            <table className="min-w-[760px] w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  {["FREQUENCY (Hz)", "SOUND ABSORPTION CO-EFF", "TRANSMISSION LOSS (dB/1.0)"].map((h, i) => (
                    <th
                      key={h}
                      className={[
                        "sticky top-0 z-20 bg-rose-50/95 backdrop-blur supports-[backdrop-filter]:bg-rose-50/80",
                        "text-left text-[13px] font-semibold uppercase tracking-wide text-rose-800",
                        "border-b border-rose-200",
                        i === 0 ? "sticky left-0 z-30 min-w-[220px]" : "min-w-[240px]",
                        "px-4 py-3",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SOUND_ROWS.map((r, idx) => (
                  <tr key={idx} className="even:bg-rose-50/40 hover:bg-rose-50">
                    <td className="sticky left-0 z-10 bg-inherit border-b border-rose-200 px-4 py-3 text-sm font-medium text-zinc-800">
                      {r.freq}
                    </td>
                    <td className="border-b border-rose-200 px-4 py-3 text-sm text-zinc-700">{r.coeff}</td>
                    <td className="border-b border-rose-200 px-4 py-3 text-sm font-semibold text-zinc-900">
                      {r.loss}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
