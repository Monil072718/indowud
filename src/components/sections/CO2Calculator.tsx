"use client";

import { useMemo, useState } from "react";

const CO2_FACTOR = 3647;

const CALCULATOR_DATA = [
  { thickness: 4, cbm: 0.012 },
  { thickness: 6, cbm: 0.018 },
  { thickness: 8, cbm: 0.024 },
  { thickness: 9, cbm: 0.027 },
  { thickness: 12, cbm: 0.036 },
  { thickness: 15, cbm: 0.045 },
  { thickness: 16, cbm: 0.048 },
  { thickness: 18, cbm: 0.054 },
  { thickness: 20, cbm: 0.06 },
  { thickness: 22, cbm: 0.065 },
  { thickness: 25, cbm: 0.074 },
  { thickness: 28, cbm: 0.083 },
  { thickness: 30, cbm: 0.089 },
];

export default function CO2Calculator() {
  const [selectedThickness, setSelectedThickness] = useState(18);
  const [sheetsInput, setSheetsInput] = useState("50");

  const activeOption = useMemo(() => {
    return (
      CALCULATOR_DATA.find(
        (item) => item.thickness === Number(selectedThickness)
      ) || CALCULATOR_DATA[7]
    );
  }, [selectedThickness]);

  const sheetsCount = useMemo(() => {
    const value = Number(sheetsInput);
    return Number.isFinite(value) && value > 0 ? value : 0;
  }, [sheetsInput]);

  const result = useMemo(() => {
    const cbmPerSheet = activeOption.cbm;
    const co2PerSheet = cbmPerSheet * CO2_FACTOR;
    const totalCbm = cbmPerSheet * sheetsCount;
    const totalCo2Kg = co2PerSheet * sheetsCount;
    const totalCo2Tonnes = totalCo2Kg / 1000;

    return {
      cbmPerSheet,
      co2PerSheet,
      totalCbm,
      totalCo2Kg,
      totalCo2Tonnes,
    };
  }, [activeOption, sheetsCount]);

  const formatNumber = (value: number, decimals = 2) => {
    return value.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  const handleSheetsChange = (value: string) => {
    if (value === "" || /^\d+$/.test(value)) {
      setSheetsInput(value);
    }
  };

  const increaseSheets = () => {
    setSheetsInput((prev) => String((Number(prev) || 0) + 1));
  };

  const decreaseSheets = () => {
    setSheetsInput((prev) => String(Math.max((Number(prev) || 0) - 1, 0)));
  };

  return (
    <section className="w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white shadow-2xl sm:p-10 lg:p-14">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
            Eco Calculator
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Calculate Your{" "}
            <span className="text-emerald-300">CO₂ Savings</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Select board thickness and enter the number of 8x4 sheets to
            calculate estimated carbon dioxide savings.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div>
              <label className="mb-4 block text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Select Board Thickness
              </label>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {CALCULATOR_DATA.map((item) => {
                  const isSelected = item.thickness === selectedThickness;

                  return (
                    <button
                      key={item.thickness}
                      type="button"
                      onClick={() => setSelectedThickness(item.thickness)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition-all duration-300 ${isSelected
                          ? "border-emerald-400 bg-emerald-500 text-white shadow-lg shadow-emerald-950/40"
                          : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-emerald-500 hover:bg-slate-800 hover:text-white"
                        }`}
                    >
                      {item.thickness} mm
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="mb-4 block text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Enter Number of Sheets
              </label>

              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-800/50 p-1">
                  <button
                    type="button"
                    onClick={decreaseSheets}
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-slate-300 transition hover:bg-slate-700 hover:text-white"
                  >
                    −
                  </button>

                  <input
                    type="text"
                    value={sheetsInput}
                    onChange={(e) => handleSheetsChange(e.target.value)}
                    placeholder="0"
                    className="h-12 w-28 bg-transparent text-center text-xl font-bold text-white outline-none"
                  />

                  <button
                    type="button"
                    onClick={increaseSheets}
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-slate-300 transition hover:bg-slate-700 hover:text-white"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[10, 20, 50, 100, 500].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSheetsInput(String(preset))}
                      className={`rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${sheetsCount === preset
                          ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                          : "border-slate-700 bg-slate-800/30 text-slate-400 hover:bg-slate-800 hover:text-white"
                        }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-5 text-sm text-slate-300 sm:grid-cols-2">
              <div>
                <p className="text-slate-500">Selected Thickness</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {selectedThickness} mm
                </p>
              </div>

              <div>
                <p className="text-slate-500">CBM Per Sheet</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {result.cbmPerSheet.toFixed(3)} m³
                </p>
              </div>

              <div>
                <p className="text-slate-500">CO₂ Factor</p>
                <p className="mt-1 text-lg font-bold text-emerald-300">
                  {CO2_FACTOR}
                </p>
              </div>

              <div>
                <p className="text-slate-500">CO₂ Saving Per Sheet</p>
                <p className="mt-1 text-lg font-bold text-emerald-300">
                  {formatNumber(result.co2PerSheet, 2)} kg
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/10 p-6 sm:p-8 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Total CO₂ Saving
            </p>

            <div className="mt-4">
              <span className="text-5xl font-extrabold text-emerald-300 sm:text-6xl">
                {formatNumber(result.totalCo2Kg, 2)}
              </span>
              <span className="ml-2 text-xl font-semibold text-slate-300">
                kg CO₂
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              This equals{" "}
              <strong className="text-white">
                {formatNumber(result.totalCo2Tonnes, 3)} tonnes
              </strong>{" "}
              of estimated CO₂ savings.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-950/40 p-4">
                <p className="text-sm text-slate-400">Number of Sheets</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {sheetsCount.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/40 p-4">
                <p className="text-sm text-slate-400">Total CBM</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {result.totalCbm.toFixed(3)} m³
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/40 p-4">
                <p className="text-sm text-slate-400">Formula</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  CBM per sheet × 3647 × sheets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}