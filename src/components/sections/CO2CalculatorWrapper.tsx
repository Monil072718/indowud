"use client";

import dynamic from "next/dynamic";

const CO2Calculator = dynamic(
  () => import("@/components/sections/CO2Calculator"),
  {
    loading: () => (
      <div className="h-96 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/20 rounded-[2.5rem] animate-pulse" />
    ),
    ssr: false,
  }
);

export default function CO2CalculatorWrapper() {
  return <CO2Calculator />;
}
