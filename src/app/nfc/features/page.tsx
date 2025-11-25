"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";

/* ---------- page (no props!) ---------- */
export default function Page() {
  return <FeaturesSection />;
}

/* ---------- types ---------- */
type Feature = {
  id: string;
  title: string;
  desc?: string;
  icon?: ReactNode;
};

/* ---------- section (internal to this file) ---------- */
function FeaturesSection({
  heading = "Built for the real world",
  sub = "Engineered to perform. Designed to last.",
  heroImage = "/hero-wood.jpg",
  items,
}: {
  heading?: string;
  sub?: string;
  heroImage?: string;
  items?: Feature[];
}) {
  const features: Feature[] =
    items ?? [
      { id: "termite", title: "Termite proof", desc: "Zero cavity, zero compromise.", icon: <Emoji>🪲</Emoji> },
      { id: "water", title: "Water proof", desc: "No swelling, no delamination.", icon: <Emoji>💧</Emoji> },
      { id: "flame", title: "Flame retardant", desc: "Meets class 1 norms.", icon: <Emoji>🔥</Emoji> },
      { id: "machine", title: "Easily machinable", desc: "Clean cuts. Crisp edges.", icon: <Emoji>🛠️</Emoji> },
      { id: "durable", title: "Durable", desc: "Built for years of use.", icon: <Emoji>♾️</Emoji> },
      { id: "eco", title: "100% Eco-friendly", desc: "Low VOC, safe indoors.", icon: <Emoji>🌿</Emoji> },
      { id: "uv", title: "UV resistant", desc: "Holds colour in sunlight.", icon: <Emoji>🌞</Emoji> },
      { id: "sound", title: "Absorbs sound", desc: "Quieter, calmer spaces.", icon: <Emoji>🔊</Emoji> },
      { id: "bacteria", title: "Anti-bacterial", desc: "Hygienic & easy to clean.", icon: <Emoji>🧼</Emoji> },
      { id: "smoke", title: "Smoke suppressant", desc: "Added safety layer.", icon: <Emoji>🚭</Emoji> },
      { id: "stable", title: "Dimensionally stable", desc: "Minimal expansion.", icon: <Emoji>📏</Emoji> },
      { id: "nofume", title: "No formaldehyde", desc: "Health-first materials.", icon: <Emoji>💨</Emoji> },
    ];

  return (
    <section
      className="
        relative overflow-hidden
        bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(0,213,190,0.06),transparent_60%),radial-gradient(900px_500px_at_100%_0%,rgba(0,213,190,0.10),transparent_55%),#f8fafc]
      "
    >
      {/* brand gradient header band */}
      <div className="bg-gradient-to-r from-[#00d5be] via-[#00b9a7] to-[#008e81]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-white">
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight"
          >
            {heading}
          </motion.h2>
          {/* breadcrumb */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3"
          >
            <Breadcrumb
              items={[
                { label: "HOME", href: "/" },
                { label: "NFC", href: "/nfc" },
                { label: "FEATURES" },
              ]}
              variant="light"
            />
          </motion.div>
          <motion.p
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base text-white/90"
          >
            {sub}
          </motion.p>
        </div>
      </div>

      {/* hero block + grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative -mt-14 mb-14 rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="grid gap-0 md:grid-cols-2">
            {/* left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12"
            >
              <h3 className="text-2xl font-semibold text-[#003a36]">Indowud NFC</h3>
              <p className="mt-3 text-slate-600">
                A high-performance wood alternative, fortified for durability. Precision-made panels that thrive in
                harsh conditions and look great while doing it.
              </p>

              <ul className="mt-6 space-y-3 text-slate-900">
                {[
                  "Weather-ready exterior & interior applications",
                  "Consistent quality, minimal maintenance",
                  "Trusted by architects & fabricators",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00d5be]" />
                    <p className="leading-relaxed">{t}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* right: image with hover parallax */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative isolate overflow-hidden rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,213,190,.20),transparent_55%)]" />
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="relative mx-auto my-8 aspect-[16/9] w-11/12"
              >
                <Image src={heroImage} alt="Indowud NFC" fill className="rounded-2xl object-cover shadow-2xl" />
                {/* brand tint */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-transparent to-[#00d5be]/15" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* feature grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- cards & helpers ---------- */
function FeatureCard({ title, desc, icon }: Feature) {
  return (
    <motion.div
      variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-2xl border border-white/40 bg-white/60 p-5 shadow-lg backdrop-blur-md
                 ring-1 ring-black/5 transition hover:shadow-2xl hover:ring-[#00d5be]/40 cursor-pointer"
    >
      {/* brand glow on hover */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300
          group-hover:opacity-100
          bg-[radial-gradient(60%_60%_at_10%_0%,rgba(0,213,190,0.18),transparent_60%)]
        "
      />
      <div className="relative flex items-start gap-4">
        <div className="shrink-0">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            className="grid h-12 w-12 place-content-center rounded-xl bg-[#003a36] text-white shadow-md"
          >
            {icon ?? <Emoji>🌟</Emoji>}
          </motion.div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#003a36]">{title}</h4>
          {desc && <p className="mt-1 text-sm text-slate-600">{desc}</p>}

          {/* hover CTA */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 inline-flex items-center text-sm font-medium text-[#008e81]"
          >
            {/* Learn more */}
            <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4">
              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth={2} />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Emoji({ children }: { children: ReactNode }) {
  return <span className="text-xl">{children}</span>;
}
