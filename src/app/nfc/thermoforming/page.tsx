"use client";

import React, { useId } from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* --------------------------- animations -------------------------- */
const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};

/* --------------------------- component --------------------------- */
export default function ThermoformingPage() {
  const uid = useId(); // unique suffix for selector-based nav

  // Move all default values inside the component
  const title = "Thermoforming";
  const subtitle = (
    <>
      Effortless thermoforming without compromising on strength. The high content
      of natural fibres in Indowud <span className="font-semibold">NFC</span>
      &nbsp;ensures dimensional stability post forming.
    </>
  );
  const noteItems = [
    "The panel may shrink while heating and giving a shape.",
    "Suggested time may vary depending on the design.",
  ];
  const processNote = (
    <>
      Effortless thermoforming without any compromises on the strength is a
      unique feature of Indowud nfc. The high content of natural fibres makes
      sure that the density and dimensional stability is uncompromised post
      thermoforming.
    </>
  );
  const youtubeId = "dQw4w9WgXcQ";
  const specs = [
    { label: "Heating Temperature", value: "140°–170° C" },
    { label: "Heating Time", value: "1–2 min / mm of board thickness" },
    { label: "Locking (desired shape)", value: "≈ 5 minutes" },
    { label: "Cooling Time", value: "1–2 minutes / mm of thickness" },
  ];
  const gallery: { src: string; alt?: string }[] = []; // Empty gallery for now

  return (
    <section className="relative isolate">
      {/* angled header band */}
      <div
        className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100"
        style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>
        </motion.div>

        {/* FULL-WIDTH VIDEO */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8"
        >
          <motion.div
            variants={item}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
          >
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                title="Thermoforming process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>

        {/* NOTE block */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10"
        >
          <motion.div
            variants={item}
            className="overflow-hidden rounded-2xl bg-gradient-to-b from-white to-emerald-50/60 shadow-sm ring-1 ring-slate-200"
          >
            <div className="px-5 py-4 border-b border-slate-200 text-center">
              <h3 className="font-semibold tracking-wide text-slate-800">NOTE</h3>
            </div>
            <ol className="px-6 sm:px-8 lg:px-10 pt-4 space-y-3 text-center">
              {noteItems.map((t, i) => (
                <li key={i} className="text-slate-700">
                  <span className="font-semibold mr-1">{i + 1}.</span>
                  {t}
                </li>
              ))}
            </ol>
            <div className="px-6 sm:px-8 lg:px-10 py-6">
              <p className="mx-auto max-w-4xl text-center text-slate-600">
                {processNote}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* SPECS card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
        >
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">
              Recommended Process Window
            </h3>
            <span className="text-xs font-semibold tracking-wider text-emerald-700">
              NFC Advantage
            </span>
          </div>

          <div className="divide-y divide-slate-200">
            {specs.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-2 hover:bg-emerald-50/40 transition-colors"
              >
                <div className="px-5 py-3 text-sm font-medium text-slate-700">
                  {row.label}
                </div>
                <div className="px-5 py-3 text-sm text-slate-600">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GALLERY SLIDER */}
        {gallery.length > 0 && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10"
          >
            <div className="relative">
              {/* nav buttons (selector-based to avoid ref/TS issues) */}
              <button
                aria-label="Previous"
                className={`thermo-prev-${uid} absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 shadow ring-1 ring-slate-200 px-3 py-2 hover:bg-white`}
              >
                ‹
              </button>
              <button
                aria-label="Next"
                className={`thermo-next-${uid} absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 shadow ring-1 ring-slate-200 px-3 py-2 hover:bg-white`}
              >
                ›
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: `.thermo-prev-${uid}`,
                  nextEl: `.thermo-next-${uid}`,
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop
                speed={600}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="rounded-2xl ring-1 ring-slate-200 bg-white/30"
              >
                {gallery.map((g, i) => (
                  <SwiperSlide key={i}>
                    <figure className="group relative overflow-hidden h-[280px] sm:h-[320px] lg:h-[360px]">
                      <img
                        src={g.src}
                        alt={g.alt ?? "Thermoformed example"}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3 text-white flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {g.alt ?? "Project"}
                        </span>
                        <span className="text-xs opacity-90">Hover to view</span>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}