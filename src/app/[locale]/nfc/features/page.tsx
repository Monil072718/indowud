"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import PageHeader from "@/components/common/PageHeader";

/* ---------- page (no props!) ---------- */
export default function Page() {
  return (
    <>
      <FeaturesSection />
      <DetailedFeatures />
    </>
  );
}

function DetailedFeatures() {
  return (
    <div className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-24">
        
        {/* Flame Retardant Section */}
        <div className="space-y-6 text-slate-700 text-lg">
          <h2 className="text-[2rem] font-bold text-[#008e81] mb-8">Flame retardant - The Next-Gen Fire Retardant Board</h2>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">The Future of Fire Safety</h3>
          <p className="leading-relaxed">Traditional fire retardant boards and fire resistant boards lose effectiveness over time, becoming unsafe and unreliable. There’s a growing need for a long-lasting solution that goes beyond temporary fire protection.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">All-in-One Protection</h3>
          <p className="leading-relaxed">Unlike a regular fire retardant insulation board, Indowud NFC combines flame resistance and thermal protection in one advanced material—making it a smarter choice for modern construction.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Self-Extinguishing Technology</h3>
          <p className="leading-relaxed">Indowud NFC doesn&apos;t just resist fire—it self-extinguishes once the flame source is removed, stopping fire spread faster than conventional boards.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Low Smoke, Higher Safety</h3>
          <p className="leading-relaxed">Many boards produce toxic smoke. Indowud NFC emits significantly less smoke, making it ideal for homes, hospitals, schools, hotels, and commercial spaces.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Tested & Certified</h3>
          <p className="leading-relaxed">Indowud NFC meets top global standards:</p>
          <div className="space-y-2 pt-2">
            <p>IMO Class 1/A</p>
            <p>UL 94 V0</p>
            <p className="pt-2">ASTM E84 Class A – Flame Spread Index: 6</p>
          </div>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">More Than Fire Protection</h3>
          <p className="leading-relaxed">Indowud NFC is also a waterproof board and water resistant board, making it suitable for humid and outdoor applications. It replaces traditional materials without concerns about swelling, decay, or damage—offering strong lifetime value beyond just waterproof board price.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Termite-Proof Advantage</h3>
          <p className="leading-relaxed">As a termite proof board, Indowud NFC eliminates the need for chemical treatments and long-term maintenance—delivering far better durability compared to conventional options, making its termite proof board price highly cost-efficient over time.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Why Indowud NFC Wins</h3>
          <div className="space-y-4 py-2">
            <p>Fire retardant + fire resistant performance</p>
            <p>Self-extinguishing</p>
            <p>Low smoke emission</p>
            <p>Waterproof & termite proof</p>
            <p>Long-lasting value</p>
          </div>
          
          <p className="leading-relaxed mt-6">Indowud NFC isn&apos;t just another board—it&apos;s the next-generation solution for safer, stronger, and smarter spaces.</p>
          
          <button className="mt-8 px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-sm cursor-pointer inline-block">
            Know More
          </button>
        </div>

        {/* Waterproof Section */}
        <div className="space-y-6 text-slate-700 text-lg">
          <h2 className="text-[2rem] font-bold text-[#008e81] mb-8">Waterproof</h2>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">The Ultimate Waterproof Board</h3>
          <p className="leading-relaxed">Traditional plywood and marine boards often absorb moisture, leading to mold, warping, and damage—proving that &quot;waterproof&quot; doesn&apos;t always last. Chemical coatings wear off, increasing maintenance and replacement costs, making the <strong>waterproof board price</strong> less valuable over time.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Why Indowud NFC Is Different</h3>
          <p className="leading-relaxed">Indowud NFC is a true <strong>waterproof board</strong> engineered for 100% water resistance. Unlike a typical <strong>water resistant board</strong>, it does not swell, crack, or delaminate—even in high-moisture environments.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Built for Long-Term Durability</h3>
          <ul className="list-disc pl-6 space-y-3 py-2">
            <li>No fungus or algae growth</li>
            <li>No warping or shrinking</li>
            <li>Low maintenance and longer lifespan</li>
          </ul>
          <p className="leading-relaxed">This makes Indowud NFC far more cost-effective compared to traditional options, delivering better lifetime value beyond the initial <strong>waterproof board price</strong>.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Wood-Like & Versatile</h3>
          <p className="leading-relaxed">With a natural wood look and easy workability, it&apos;s ideal for:</p>
          <ul className="list-disc pl-6 space-y-3 py-2">
            <li>Decking & poolside areas</li>
            <li>Shipbuilding & marine projects</li>
            <li>Resorts, claddings, and outdoor furniture</li>
          </ul>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Eco-Smart Choice</h3>
          <p className="leading-relaxed">Made using stubble and PVC resin, Indowud NFC supports sustainability while delivering superior performance</p>
          
          <button className="mt-8 px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-sm cursor-pointer inline-block">
            Know More
          </button>
        </div>

        {/* Termite proof Section */}
        <div className="space-y-6 text-slate-700 text-lg">
          <h2 className="text-[2rem] font-bold text-[#008e81] mb-8">Termite proof</h2>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">The Truly Termite-Proof Board</h3>
          <p className="leading-relaxed">Traditional wood and plywood attract termites, leading to hollowing, weakening, and expensive repairs. Even chemical-treated boards lose protection over time, making them unreliable in termite-prone areas.</p>
          <p className="leading-relaxed"><strong>Indowud NFC</strong> changes that. Made without wood and engineered with PVC resin and natural fibers, it is <strong>100% termite proof</strong>—no chemicals, no coatings, no re-treatment needed.</p>
          
          <h3 className="text-xl font-serif italic font-semibold text-slate-800 mt-8">Why Indowud NFC Is The Best Termite-Proof Board</h3>
          <ul className="list-disc pl-6 space-y-3 py-2">
            <li>Completely resistant to termites and borers</li>
            <li>Does not decay, rot, or lose strength</li>
            <li>No chemical treatments required</li>
            <li>Long-lasting and maintenance-free</li>
          </ul>
          
          <p className="leading-relaxed">Perfect for kitchens, wardrobes, bathrooms, outdoor furniture, and all spaces where wood generally fails.</p>
          <p className="leading-relaxed"><strong>Choose Indowud NFC for permanent termite protection and long-term durability—no insects, no damage, no worries.</strong></p>
          
          <button className="mt-8 px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-sm cursor-pointer inline-block">
            Know More
          </button>
        </div>

      </div>
    </div>
  );
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
  heroImage = "/features.webp",
  items,
}: {
  heading?: string;
  sub?: string;
  heroImage?: string;
  items?: Feature[];
}) {
  const features: Feature[] =
    items ?? [
      { id: "termite", title: "Termite proof", desc: "Zero cavity, zero compromise.", icon: <Image src="/imgi_8_Icons_Termite-Proof-1.png.webp" alt="Termite proof" width={32} height={32} className="object-contain" /> },
      { id: "water", title: "Water proof", desc: "No swelling, no delamination.", icon: <Image src="/imgi_9_Icons_Water-Proof-1.png.webp" alt="Water proof" width={32} height={32} className="object-contain" /> },
      { id: "flame", title: "Flame retardant", desc: "Meets class 1 norms.", icon: <Image src="/Icons_Flame-retardant-1.png.webp" alt="Flame retardant" width={32} height={32} className="object-contain" /> },
      { id: "machine", title: "Easily machinable", desc: "Clean cuts. Crisp edges.", icon: <Image src="/Icons_Easily-machinable-1.png.webp" alt="Easily machinable" width={32} height={32} className="object-contain" /> },
      { id: "durable", title: "Durable", desc: "Built for years of use.", icon: <Image src="/Icons_Durable-1.png.webp" alt="Durable" width={32} height={32} className="object-contain" /> },
      { id: "rodent", title: "Anti rodent", desc: "Keeps pests away.", icon: <Image src="/imgi_12_Icons_Anti-rodent-1.png.webp" alt="Anti rodent" width={32} height={32} className="object-contain" /> },
      { id: "screw", title: "Good screw holding", desc: "Strong grip strength.", icon: <Image src="/imgi_16_Icons_Good-screw-holding-1.png.webp" alt="Good screw holding" width={32} height={32} className="object-contain" /> },
      { id: "fungus", title: "Resistant to fungus, algae or mold", desc: "Stays clean and hygienic in damp environments.", icon: <Image src="/Icons_Resistant-to-fungus-algae-or-mold-1.png.webp" alt="Resistant to fungus, algae or mold" width={32} height={32} className="object-contain" /> },
      { id: "splinter", title: "No splintering, no crack", desc: "Leaves a continuous, smooth surface.", icon: <Image src="/Icons_No-splintering-no-crack-1.png.webp" alt="No splintering, no crack" width={32} height={32} className="object-contain" /> },
      { id: "uv", title: "UV resistant", desc: "Holds colour in sunlight.", icon: <Image src="/Icons_UV-resistant-1.png.webp" alt="UV resistant" width={32} height={32} className="object-contain" /> },
      { id: "thermo", title: "Thermoformable", desc: "Bend into curves.", icon: <Image src="/Icons_Thermoformable-1.png.webp" alt="Thermoformable" width={32} height={32} className="object-contain" /> },
      { id: "smoke", title: "Smoke suppressant", desc: "Added safety layer.", icon: <Image src="/imgi_11_Icons_Smoke-suppressant-1.png.webp" alt="Smoke suppressant" width={32} height={32} className="object-contain" /> },
      { id: "stable", title: "Minimum expansion/contraction", desc: "Dimensionally stable across seasons.", icon: <Image src="/Icons_Resistant-to-expansion-contraction-1.png.webp" alt="Minimum expansion/contraction" width={32} height={32} className="object-contain" /> },
      { id: "bacteria", title: "Anti-bacterial", desc: "Hygienic & easy to clean.", icon: <Image src="/Icons_Anti-bacterial-1.png.webp" alt="Anti-bacterial" width={32} height={32} className="object-contain" /> },
      { id: "noharm", title: "No Harmful Ingredients", desc: "Safe for sensitive environments.", icon: <Image src="/imgi_15_Icons_No-harmful-ingredients-1-1.png.webp" alt="No Harmful Ingredients" width={32} height={32} className="object-contain" /> },
      { id: "eco", title: "100% Eco-Friendly", desc: "Low VOC, safe indoors.", icon: <Image src="/Icons_100-Eco-friendly-1-1.png.webp" alt="Eco-Friendly" width={32} height={32} className="object-contain" /> },
      { id: "sound", title: "Absorbs Sound", desc: "Quieter, calmer spaces.", icon: <Image src="/imgi_14_Icons_Absorbs-Sound-1.png.webp" alt="Absorbs Sound" width={32} height={32} className="object-contain" /> },
      { id: "nofume", title: "No formaldehyde emissions", desc: "Health-first materials.", icon: <Image src="/imgi_13_Icons_No-formaldehyde-emission-1-1.png.webp" alt="No formaldehyde emissions" width={32} height={32} className="object-contain" /> },
    ];

  return (
    <section
      className="
        relative overflow-hidden
        bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(0,213,190,0.06),transparent_60%),radial-gradient(900px_500px_at_100%_0%,rgba(0,213,190,0.10),transparent_55%),#f8fafc]
      "
    >
      {/* brand gradient header band */}
      <PageHeader
        category="NFC Features"
        title={heading || "Built for the real world"}
        description={sub || "Engineered to perform. Designed to last."}
        className="mb-8"
      />

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
              <div className="pointer-events-none absolute inset-0" />
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="relative mx-auto my-8 aspect-[16/9] w-11/12"
              >
                <Image src={heroImage} alt="Indowud NFC" fill className="rounded-2xl object-cover" />
                {/* brand tint */}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* feature grid */}
        <motion.div
          key="feature-grid-v2"
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
            className="grid h-12 w-12 place-content-center rounded-xl bg-teal-50 text-[#003a36] shadow-sm ring-1 ring-teal-100 overflow-hidden"
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