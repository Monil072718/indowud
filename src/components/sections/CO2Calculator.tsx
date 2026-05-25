"use client";

import { useMemo, useState, useEffect } from "react";

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
  const [mounted, setMounted] = useState(false);
  const [selectedThickness, setSelectedThickness] = useState(18);
  const [sheetsInput, setSheetsInput] = useState("50");

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return (
      <section className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-emerald-50 via-white to-emerald-50/20 py-20 border border-slate-100/60 shadow-xl shadow-emerald-950/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-emerald-500"></span>
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.25em]">Eco Calculator</span>
              <span className="h-px w-8 bg-emerald-500"></span>
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl text-slate-900 italic">
              Calculate Your <span className="text-teal-600 not-italic font-extrabold">CO₂ Savings</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Select board thickness and enter the number of 8x4 sheets to calculate the estimated carbon dioxide savings of zero-wood Indowud NFC boards.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-12 max-w-6xl mx-auto items-stretch min-h-[400px]">
            <div className="lg:col-span-7 bg-white/50 animate-pulse rounded-[2rem] min-h-[300px]"></div>
            <div className="lg:col-span-5 bg-teal-600/10 animate-pulse rounded-[2rem] min-h-[300px]"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-emerald-50 via-white to-emerald-50/20 py-20 border border-slate-100/60 shadow-xl shadow-emerald-950/5">
      {/* Decorative ambient blobs */}
      <div className="absolute -z-10 top-0 right-0 w-80 h-80 bg-emerald-200/25 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-emerald-500"></span>
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-[0.25em]">
              Eco Calculator
            </span>
            <span className="h-px w-8 bg-emerald-500"></span>
          </div>

          <h2 className="text-3xl font-bold leading-tight sm:text-5xl text-slate-900 italic">
            Calculate Your <span className="text-teal-600 not-italic font-extrabold">CO₂ Savings</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Select board thickness and enter the number of 8x4 sheets to calculate the estimated carbon dioxide savings of zero-wood Indowud NFC boards.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left panel: Inputs */}
          <div className="space-y-8 lg:col-span-7 flex flex-col justify-between">
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
                      className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition-all duration-300 ${
                        isSelected
                          ? "border-transparent bg-teal-600 text-white shadow-md shadow-teal-700/25 scale-[1.02]"
                          : "border-slate-200 bg-white text-slate-700 hover:border-teal-500 hover:bg-slate-50 hover:text-slate-900"
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
                2. Enter Number of Sheets (8x4 ft)
              </label>

              <div className="flex flex-col gap-4 sm:flex-row items-stretch">
                <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm shrink-0">
                  <button
                    type="button"
                    onClick={decreaseSheets}
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    −
                  </button>

                  <input
                    type="text"
                    value={sheetsInput}
                    onChange={(e) => handleSheetsChange(e.target.value)}
                    placeholder="0"
                    className="h-12 w-28 bg-transparent text-center text-xl font-bold text-slate-800 outline-none"
                  />

                  <button
                    type="button"
                    onClick={increaseSheets}
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  {[10, 20, 50, 100, 500].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSheetsInput(String(preset))}
                      className={`rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                        sheetsCount === preset
                          ? "border-teal-500 bg-teal-50 text-teal-700 font-semibold"
                          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border border-slate-100 bg-slate-50/50 p-6 text-sm text-slate-600 sm:grid-cols-2">
              <div>
                <p className="text-slate-400 font-medium">Selected Thickness</p>
                <p className="mt-1 text-base font-bold text-slate-800">
                  {selectedThickness} mm
                </p>
              </div>

              <div>
                <p className="text-slate-400 font-medium">CBM Per Sheet</p>
                <p className="mt-1 text-base font-bold text-slate-800">
                  {result.cbmPerSheet.toFixed(3)} m³
                </p>
              </div>

              <div>
                <p className="text-slate-400 font-medium">CO₂ Factor</p>
                <p className="mt-1 text-base font-bold text-teal-700">
                  {CO2_FACTOR}
                </p>
              </div>

              <div>
                <p className="text-slate-400 font-medium">CO₂ Saving Per Sheet</p>
                <p className="mt-1 text-base font-bold text-teal-700">
                  {formatNumber(result.co2PerSheet, 2)} kg
                </p>
              </div>
            </div>
          </div>

          {/* Right panel: Results */}
          <div className="rounded-[2rem] bg-gradient-to-br from-teal-600 via-emerald-600 to-emerald-700 p-6 sm:p-8 lg:col-span-5 text-white shadow-xl shadow-teal-900/10 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-100/90">
                Total CO₂ Savings
              </p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black text-white sm:text-6xl tracking-tight">
                  {formatNumber(result.totalCo2Kg, 2)}
                </span>
                <span className="text-lg font-semibold text-emerald-100">
                  kg CO₂
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-emerald-50">
                This equals{" "}
                <strong className="text-white font-bold">
                  {formatNumber(result.totalCo2Tonnes, 3)} tonnes
                </strong>{" "}
                of carbon dioxide offset.
              </p>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-sm px-5 py-3 border border-white/5">
                <p className="text-xs font-semibold text-emerald-100">Number of Sheets</p>
                <p className="text-lg font-bold text-white">
                  {sheetsCount.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-sm px-5 py-3 border border-white/5">
                <p className="text-xs font-semibold text-emerald-100">Total Cubic Volume</p>
                <p className="text-lg font-bold text-white">
                  {result.totalCbm.toFixed(3)} m³
                </p>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-sm px-5 py-3 border border-white/5">
                <p className="text-xs font-semibold text-emerald-100">Formula</p>
                <p className="text-xs font-semibold text-white tracking-wide">
                  CBM × 3647 × Sheets
                </p>
              </div>
            </div>
            
            <div className="text-center text-[10px] text-emerald-100/70 font-semibold tracking-wider">
              Actively preventing carbon from being released into the atmosphere!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}