"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"

export const dynamic = "force-static"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.08 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

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
]

const steps = [
  {
    title: "Selection of Raw Material",
    text: "Virgin PVC resin from certified sources and carefully curated natural fibres from local farming communities. Consistent grading ensures uninterrupted supply and repeatable quality.",
    image: "https://images.pexels.com/photos/1581484/pexels-photo-1581484.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Matrix Formulation",
    text: "Polymers and fibres are blended with minerals, coupling agents and thermal stabilizers. Tightly controlled temperature/pressure creates a homogeneous matrix that drives mechanical performance.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Interface Strength",
    text: "Optimized fibre dispersion yields excellent interfacial bonding—improving impact resistance, internal bond and screw holding. The result is durable boards suitable for interior and exterior use.",
    image: "https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Extrusion & Finishing",
    text: "Continuous extrusion passes through calibrated cooling beds. Boards are then trimmed and processed for finishing—ready for painting, routing, lamination or thermoforming.",
    image: "https://images.pexels.com/photos/3735439/pexels-photo-3735439.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

const stats = [
  { label: "Process uptime", value: "98.3%" },
  { label: "Water recycle", value: "92%" },
  { label: "On-spec yield", value: "99.1%" },
  { label: "QC checks / lot", value: "24+" },
]

export default function ManufacturingProcessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-40 sm:h-48 md:h-56 lg:h-60 w-full bg-gradient-to-r from-teal-100 via-white to-rose-100"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(13,148,136,.18),transparent_60%)]"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
            >
              Manufacturing Process
            </motion.h1>
            <motion.nav
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-1 sm:mt-3 text-[10px] sm:text-xs md:text-sm tracking-widest text-gray-500 uppercase"
              aria-label="Breadcrumb"
            >
              <ol className="flex items-center flex-wrap gap-1">
                <li>
                  <Link href="/" className="hover:text-gray-700 transition-colors">
                    HOME
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/nfc" className="hover:text-gray-700 transition-colors">
                    NFC
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>MANUFACTURING PROCESS</li>
              </ol>
            </motion.nav>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8 lg:mt-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-teal-600 font-semibold uppercase tracking-widest text-[10px] sm:text-xs"
        >
          Infrastructure
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold italic text-gray-900 mt-1 leading-tight"
        >
          Engineering a process that surpasses global best practices
        </motion.p>

        <div className="mt-3 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
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
              className="group overflow-hidden rounded-lg sm:rounded-xl border border-gray-200 bg-white shadow-sm relative"
            >
              <div className="h-24 sm:h-32 md:h-40 lg:h-48 relative">
                <Image
                  src={g.src || "/placeholder.svg"}
                  alt={g.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-8 lg:mt-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="aspect-video w-full overflow-hidden rounded-lg sm:rounded-xl border border-gray-200 shadow-lg"
        >
          <iframe
            src="https://www.youtube-nocookie.com/embed/Nkel1DsLYKA?rel=0&modestbranding=1&playsinline=1&color=white&iv_load_policy=3"
            title="Indowud NFC – Corporate Video"
            className="h-full w-full rounded-lg sm:rounded-xl shadow-xl ring-1 ring-black/5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* TIMELINE STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-16">
        <div className="mx-auto max-w-3xl text-center px-2">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg sm:text-2xl md:text-3xl font-bold italic text-gray-900 leading-tight"
          >
            From Fibre to Future-Ready Boards
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600"
          >
            A simple overview of how we convert natural fibres into high-performance NFC boards.
          </motion.p>
        </div>

        <ol className="relative mt-4 sm:mt-8 overflow-hidden">
          {/* timeline line → show only on md+ */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent -translate-x-1/2" />

          <div className="space-y-5 sm:space-y-8">
            {steps.map((s, i) => {
              const isRight = i % 2 === 1
              return (
                <li key={s.title} className="relative md:pl-10 sm:pl-1">
                  <div className="flex md:items-stretch md:gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={[
                        'flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4',
                        'md:items-center',
                        isRight ? 'md:[&>*:first-child]:order-2' : '',
                      ].join(' ')}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="overflow-hidden rounded-lg sm:rounded-xl border border-gray-200 bg-white shadow-sm relative"
                      >
                        <div className="h-36 sm:h-48 md:h-56 relative">
                          <Image
                            src={s.image || '/placeholder.svg'}
                            alt={s.title}
                            fill
                            className="object-cover transition duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-lg sm:rounded-xl border border-gray-200 bg-white p-3 sm:p-4 md:p-6 shadow-sm"
                      >
                        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">{s.title}</h3>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-700 leading-5 sm:leading-6">
                          {s.text}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </li>
              )
            })}
          </div>
        </ol>
      </section>



      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm p-3 sm:p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                whileHover={{ scale: 1.06 }}
                className="text-center rounded-lg p-2 sm:p-3 hover:bg-teal-50/60 transition-colors"
              >
                <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-teal-700">{s.value}</div>
                <div className="text-[9px] sm:text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-widest leading-tight">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-16 pb-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg sm:text-2xl md:text-3xl font-bold italic text-gray-900"
        >
          Process FAQs
        </motion.h2>
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 sm:mt-6 divide-y divide-gray-200 rounded-lg sm:rounded-xl border border-gray-200 bg-white"
        >
          <motion.details
            whileHover={{ backgroundColor: "rgba(13,148,136,.05)" }}
            className="group p-3 sm:p-4 md:p-5 transition-colors"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">
                Is the process eco-friendly?
              </span>
              <span className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 grid place-items-center rounded-full bg-gray-100 text-gray-600 group-open:rotate-45 transition-transform text-base sm:text-lg">
                +
              </span>
            </summary>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-700 leading-5 sm:leading-6">
              Yes. We rely on agri-residue fibres, closed-loop water usage and energy-efficient extrusion to minimize
              environmental impact.
            </p>
          </motion.details>

          <motion.details
            whileHover={{ backgroundColor: "rgba(13,148,136,.05)" }}
            className="group p-3 sm:p-4 md:p-5 transition-colors"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">
                Can boards be thermoformed?
              </span>
              <span className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 grid place-items-center rounded-full bg-gray-100 text-gray-600 group-open:rotate-45 transition-transform text-base sm:text-lg">
                +
              </span>
            </summary>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-700 leading-5 sm:leading-6">
              Absolutely. NFC&apos;s thermoformability enables curved surfaces and bespoke design details.
            </p>
          </motion.details>

          <motion.details
            whileHover={{ backgroundColor: "rgba(13,148,136,.05)" }}
            className="group p-3 sm:p-4 md:p-5 transition-colors"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">
                What finishes work best?
              </span>
              <span className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 grid place-items-center rounded-full bg-gray-100 text-gray-600 group-open:rotate-45 transition-transform text-base sm:text-lg">
                +
              </span>
            </summary>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-700 leading-5 sm:leading-6">
              Paints, stains, veneers and laminates all bond well after standard surface preparation.
            </p>
          </motion.details>
        </motion.div>
      </section>
    </main>
  )
}
