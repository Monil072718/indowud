"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

export const dynamic = "force-static";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.08 * i,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier, TS-safe
    },
  }),
};


const gallery = [
  {
    src: "https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Plant exterior",
  },
  {
    src: "https://images.pexels.com/photos/373544/pexels-photo-373544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mixing silos",
  },
  {
    src: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Calibration line",
  },
  {
    src: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Warehouse",
  },
];

const steps = [
  {
    title: "Selection of Raw Material",
    text:
      "Virgin PVC resin from certified sources and carefully curated natural fibres from local farming communities. Consistent grading ensures uninterrupted supply and repeatable quality.",
    image:
      "https://images.pexels.com/photos/1581484/pexels-photo-1581484.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Matrix Formulation",
    text:
      "Polymers and fibres are blended with minerals, coupling agents and thermal stabilizers. Tightly controlled temperature/pressure creates a homogeneous matrix that drives mechanical performance.",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Interface Strength",
    text:
      "Optimized fibre dispersion yields excellent interfacial bonding—improving impact resistance, internal bond and screw holding. The result is durable boards suitable for interior and exterior use.",
    image:
      "https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Extrusion & Finishing",
    text:
      "Continuous extrusion passes through calibrated cooling beds. Boards are then trimmed and processed for finishing—ready for painting, routing, lamination or thermoforming.",
    image:
      "https://images.pexels.com/photos/3735439/pexels-photo-3735439.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const stats = [
  { label: "Process uptime", value: "98.3%" },
  { label: "Water recycle", value: "92%" },
  { label: "On-spec yield", value: "99.1%" },
  { label: "QC checks / lot", value: "24+" },
];

export default function ManufacturingProcessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-40 md:h-52 w-full bg-gradient-to-r from-teal-100 via-white to-rose-100"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(13,148,136,.18),transparent_60%)]"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Manufacturing Process
            </motion.h1>
            <motion.nav
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-3 text-xs md:text-sm tracking-widest text-gray-500 uppercase"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center">
                <li>
                  <Link href="/" className="hover:text-gray-700 transition-colors">
                    HOME
                  </Link>
                </li>
                <li aria-hidden="true" className="mx-1">/</li>
                <li>
                  <Link href="/nfc" className="hover:text-gray-700 transition-colors">
                    NFC
                  </Link>
                </li>
                <li aria-hidden="true" className="mx-1">/</li>
                <li>MANUFACTURING PROCESS</li>
              </ol>
            </motion.nav>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-teal-600 font-semibold uppercase tracking-widest text-xs"
        >
          Infrastructure
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold italic text-gray-900"
        >
          Engineering a process that surpasses global best practices
        </motion.p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((g, i) => (
            <motion.div
              key={g.src}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.28 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className="h-40 md:h-48 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
        >
          <iframe
            src="https://www.youtube-nocookie.com/embed/Nkel1DsLYKA?rel=0&modestbranding=1&playsinline=1&color=white&iv_load_policy=3"
            title="Indowud NFC – Corporate Video"
            className="h-full w-full rounded-2xl shadow-xl ring-1 ring-black/5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />


        </motion.div>
      </section>

      {/* TIMELINE STEPS */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold italic text-gray-900"
          >
            From Fibre to Future-Ready Boards
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-2 text-gray-600"
          >
            A simple overview of how we convert natural fibres into high-performance NFC boards.
          </motion.p>
        </div>

        <ol className="relative mt-10">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent md:-translate-x-1/2" />
          <div className="space-y-10">
            {steps.map((s, i) => {
              const isRight = i % 2 === 1;
              return (
                <li key={s.title} className="relative">
                  <div className="flex md:items-stretch md:gap-8">
                    {/* dot */}
                    <div className="relative z-10 mt-2">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="block h-3 w-3 rounded-full bg-teal-600 ring-4 ring-white md:absolute md:left-1/2 md:-translate-x-1/2"
                      />
                    </div>

                    {/* card */}
                    <motion.div
                      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      className={[
                        "mt-2 grid w-full md:grid-cols-2 gap-6",
                        "md:items-center",
                        isRight ? "md:[&>*:first-child]:order-2" : "",
                      ].join(" ")}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                      >
                        <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                        <p className="mt-2 text-gray-700 leading-7">{s.text}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </div>
        </ol>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                whileHover={{ scale: 1.06 }}
                className="text-center rounded-xl p-4 hover:bg-teal-50/60"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-teal-700">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 mt-16 mb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold italic text-gray-900"
        >
          Process FAQs
        </motion.h2>
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white"
        >
          <motion.details whileHover={{ backgroundColor: "rgba(13,148,136,.05)" }} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold text-gray-900">Is the process eco-friendly?</span>
              <span className="ml-4 h-6 w-6 grid place-items-center rounded-full bg-gray-100 text-gray-600 group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-700">
              Yes. We rely on agri-residue fibres, closed-loop water usage and energy-efficient
              extrusion to minimize environmental impact.
            </p>
          </motion.details>

          <motion.details whileHover={{ backgroundColor: "rgba(13,148,136,.05)" }} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold text-gray-900">Can boards be thermoformed?</span>
              <span className="ml-4 h-6 w-6 grid place-items-center rounded-full bg-gray-100 text-gray-600 group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-700">
              Absolutely. NFC’s thermoformability enables curved surfaces and bespoke design details.
            </p>
          </motion.details>

          <motion.details whileHover={{ backgroundColor: "rgba(13,148,136,.05)" }} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold text-gray-900">What finishes work best?</span>
              <span className="ml-4 h-6 w-6 grid place-items-center rounded-full bg-gray-100 text-gray-600 group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-700">
              Paints, stains, veneers and laminates all bond well after standard surface preparation.
            </p>
          </motion.details>
        </motion.div>
      </section>
    </main>
  );
}
