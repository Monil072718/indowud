"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import nextDynamic from "next/dynamic"
import PageHeader from "@/components/common/PageHeader"

// Swiper CSS
import "swiper/css"
// Navigation and Pagination CSS imports removed
// import "swiper/css/navigation"
// import "swiper/css/pagination"

export const dynamic = "force-static"

// lazy swiper
const SwiperSlider = nextDynamic(
  () =>
    Promise.all([import("swiper/react"), import("swiper/modules")]).then(
      ([swiperMod, modulesMod]) => {
        const { Swiper, SwiperSlide } = swiperMod;
        // Only Autoplay module needed now
        const { Autoplay } = modulesMod;

        return function SwiperSliderComponent({
          gallery,
        }: {
          gallery: { src: string; alt: string }[];
        }) {
          return (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
              // Added [&_.swiper-scrollbar]:hidden to force hide any swiper scrollbar artifacts
              className="w-full py-10 px-4 [&_.swiper-scrollbar]:hidden"
            >
              {gallery.map((g, i) => (
                <SwiperSlide key={i} className="h-auto">
                  {/* UPDATED CARD: Full bleed image with rounded corners */}
                  <div className="group relative h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200/60">
                    {/* Aspect Ratio Container */}
                    <div className="aspect-[4/3] relative w-full">
                      <Image
                        src={g.src || "/placeholder.svg"}
                        alt={g.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Optional: Subtle inner shadow/ring for definition */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          );
        };
      }
    ),
  { ssr: false }
);

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
    src: "/1-2-2.png.webp",
    alt: "Manufacturing Process",
  },
  {
    src: "/4-2.jpg.webp",
    alt: "Manufacturing Process",
  },
  {
    src: "/6-2.jpg.webp",
    alt: "Manufacturing Process",
  },
  {
    src: "/7-1.jpg.webp",
    alt: "Manufacturing Process",
  },
  {
    src: "/9.jpg.webp",
    alt: "Manufacturing Process",
  },
  {
    src: "/5-2.jpg.webp",
    alt: "Manufacturing Process",
  },
]

const steps = [
  {
    title: "Selection of Raw Material",
    text: "Virgin PVC resin from certified sources and carefully curated natural fibres from local farming communities. Consistent grading ensures uninterrupted supply and repeatable quality.",
    image: "/process-1.png.webp",
  },
  {
    title: "Matrix Formulation",
    text: "Polymers and fibres are blended with minerals, coupling agents and thermal stabilizers. Tightly controlled temperature/pressure creates a homogeneous matrix that drives mechanical performance.",
    image: "/Page-7-01.png.webp",
  },
  {
    title: "Interface Strength",
    text: "Optimized fibre dispersion yields excellent interfacial bonding—improving impact resistance, internal bond and screw holding. The result is durable boards suitable for interior and exterior use.",
    image: "/interface.png.webp",
  },
  {
    title: "Extrusion & Finishing",
    text: "Continuous extrusion passes through calibrated cooling beds. Boards are then trimmed and processed for finishing—ready for painting, routing, lamination or thermoforming.",
    image: "/lastsec.png.webp",
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
      <PageHeader
        category="NFC"
        title="Manufacturing Process"
        description="A simple overview of how we convert natural fibres into high-performance NFC boards."
      />

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

        {/* Added overflow-hidden here to prevent browser scrollbars */}
        <div className="mt-6 sm:mt-10 overflow-hidden">
          <SwiperSlider gallery={gallery} />
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
                        className="relative"
                      >
                        <div className="h-36 sm:h-48 md:h-56 relative">
                          <Image
                            src={s.image || '/placeholder.svg'}
                            alt={s.title}
                            fill
                            className="object-contain transition duration-300 hover:scale-105"
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