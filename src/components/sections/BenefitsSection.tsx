"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BenefitsSection() {
  const reduce = useReducedMotion();

  const copy = [
    {
      t: "Natural wood-like appearance allows it to print, paint, stain, varnish, overlay veneer/laminate, CNC routing, etc. The high content of natural fibres gives better physical and mechanical properties like product density, strength and screw holding.",
    },
    {
      t: "Its thermoforming ability creates opportunities for the Architects, Designers and furniture factories to convert imaginations from drawing boards to realities.",
    },
    {
      t: "Indowud nfc is not plywood, or wood fibre board. Wood fibre boards have wood particles, while nfc board has only agricultural husk.",
      small: true,
      italic: true,
    },
  ];

  const img1 =
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200";
  const img2 =
    "https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1200";

  return (
    <section className="relative overflow-hidden">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-emerald-50" />
        <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* left: sticky narrative copy */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="sticky top-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-emerald-700 text-xs font-medium">
                Benefits & Craftability
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
                Designed for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  performance
                </span>{" "}
                and made for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  imagination
                </span>
              </h2>

              <div className="mt-6 space-y-5">
                {copy.map((c, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={[
                      "leading-relaxed text-slate-600",
                      c.small ? "text-sm text-slate-600/90" : "text-base md:text-lg",
                      c.italic ? "italic" : "",
                    ].join(" ")}
                  >
                    {c.t}
                  </motion.p>
                ))}
              </div>

              {/* quick badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Print • Paint • Stain", "Thermoform Ready", "High Screw Holding", "Zero Wood"].map(
                  (b) => (
                    <span
                      key={b}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                    >
                      {b}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* right: bento images & overlays */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* big hero tile */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-900"
              >
                <motion.img
                  src={img1}
                  alt="Wood-like finishes and processing"
                  className="h-80 w-full object-cover md:h-[22rem]"
                  initial={{ scale: 1.02 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-24 bg-[radial-gradient(40rem_40rem_at_var(--x,50%)_var(--y,70%),rgba(16,185,129,0.18),transparent_60%)]" />
                </div>

                <div
                  className="absolute inset-0 p-6 flex items-end"
                  onMouseMove={(e) => {
                    const el = e.currentTarget.parentElement as HTMLElement | null;
                    if (!el) return;
                    const r = el.getBoundingClientRect();
                    const x = ((e.clientX - r.left) / r.width) * 100;
                    const y = ((e.clientY - r.top) / r.height) * 100;
                    el.style.setProperty("--x", `${x}%`);
                    el.style.setProperty("--y", `${y}%`);
                  }}
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/30 rounded-lg"
                    >
                      <p className="text-white text-sm font-light">
                        Wood-like surface: print, paint, stain, veneer/laminate, CNC routing & more.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* stacked duo: factory + spec card */}
              <div className="grid grid-rows-2 gap-6">
                {/* factory image tile */}
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <motion.img
                    src={img2}
                    alt="Sustainable manufacturing"
                    className="h-40 w-full object-cover md:h-[10.5rem]"
                    initial={{ scale: 1.02 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute inset-0 p-4 flex items-end">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1.5 border border-white/30 rounded-md text-white text-xs"
                    >
                      Sustainable process • Quality & environmental responsibility
                    </motion.span>
                  </div>
                </motion.div>

                {/* spec/benefit card */}
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-emerald-100 shadow-[0_6px_24px_-8px_rgba(0,0,0,0.15)] p-6"
                >
                  <h3 className="text-slate-800 font-semibold">Made for Makers</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Thermoformable for curves and complex geometries—perfect for architects,
                    interior designers, and furniture factories turning imagination into reality.
                  </p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full group-hover:w-full transition-all duration-500" />
                </motion.div>
              </div>
            </div>

            {/* bottom ribbon ornament */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: reduce ? 0 : 0.2 }}
              className="mt-10 flex items-center justify-center"
              aria-hidden
            >
              <svg className="h-8 w-auto text-emerald-200" viewBox="0 0 400 40" fill="none">
                <path
                  d="M0 20 C80 0, 120 40, 200 20 C280 0, 320 40, 400 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
