"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import PageHeader from "@/components/common/PageHeader";

/* ───────────────────────────────── Data ───────────────────────────────── */

type CTA = { label: string; href: string; download?: boolean };
type Spec = { label: string; value: string };

type Product = {
  id: string;
  name: string;
  slug: string;
  tag?: string;
  image: string;
  blurb: string;
  bullets?: string[];
  specs?: Spec[];
  cta?: CTA[];
  websiteUrl?: string;
  showCustomSizeText?: boolean;
  hideExploreSpecs?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: "zerowud-nfc",
    name: "ZeroWud NFC",
    slug: "zerowud-nfc",
    tag: "Premium Panels",
    image: "/zerOwud-nfc-board.png.webp",
    blurb:
      "Dense, robust panels engineered for durability and finishing that can withstand moisture, termites and harsh weather—yet friendly to fabrication.",
    bullets: [
      "100% wood-free natural fibre composite",
      "Zero filler — consistent density",
      "Precision machining & screw holding",
      "Low maintenance, paint/veneer ready",
    ],
    specs: [
      { label: "Sizes", value: "8×4 ft, 9×6 ft" },
      { label: "Thickness", value: "6, 12, 18, 25 mm" },
      { label: "Finish", value: "Sanded, primer ready" },
    ],
    cta: [
      { label: "Brochure", href: "/Indowud-nfc-eBrochure.pdf", download: true },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "indowud-board",
    name: "Indowud NFC Board",
    slug: "indowud-nfc-board",
    tag: "Exterior Grade",
    image: "/Indowud-nfc-board.png.webp",
    blurb:
      "High-strength NFC board for furniture, kitchens, vanities and façades. Stable in humidity, dimensionally true, and easy to edge-band, rout and finish.",
    bullets: ["Warp-free & termite-resistant", "Excellent screw pull-out strength", "CNC-friendly for routing"],
    specs: [
      { label: "Sizes", value: "8×4 ft" },
      { label: "Thickness", value: "8–30 mm" },
    ],
    cta: [{ label: "Applications", href: "/nfc/applications" }],
    showCustomSizeText: true,
  },
  {
    id: "nfc-door",
    name: "NFC Door",
    slug: "nfc-door",
    tag: "Engineered Doors",
    image: "/nfc-door.png.webp",
    blurb:
      "Stable, ready-to-finish door shutters that stay aligned and withstand seasonal changes. Choose skins, paint, veneer or lamination.",
    bullets: ["Robust, rattle-free core", "Moisture & termite resistance", "Ready for paint or veneer"],
    specs: [
      { label: "Standard", value: "32, 35, 38 mm thick" },
      { label: "Custom", value: "Sizes on request" },
    ],
    cta: [{ label: "Get Quote", href: "/contact" }],
  },
  {
    id: "nfc-frame",
    name: "NFC Frames",
    slug: "nfc-frames",
    tag: "Structural",
    image: "/nfc-frame.png.webp",
    blurb:
      "Dimensionally stable frames and mouldings that look premium and last. Accepts paint, stain or veneers with crisp edges and profiles.",
    bullets: ["Factory-profiled sections", "Uniform grain-like texture"],
    cta: [{ label: "Sections List", href: "#" }],
  },
  {
    id: "nfc-jalli",
    name: "NFC Jalli",
    slug: "nfc-jalli",
    tag: "Architectural Screens",
    image: "/jaal1.jpg.webp",
    blurb:
      "CNC-cut NFC jallis enable ornate façades, screens and partitions that handle the weather without swelling or splitting.",
    bullets: ["Custom patterns", "Prime & paint ready"],
    cta: [{ label: "Custom Design", href: "/contact" }],
  },
  {
    id: "nfc-decking",
    name: "NFC Decking",
    slug: "nfc-decking",
    tag: "Outdoor Living",
    image: "/nfc-decking.png.webp",
    blurb:
      "Slip-resistant surface, excellent drainage design and fade-resistant finish for patios, poolsides and walkways.",
    bullets: ["Hidden fasteners", "Low maintenance"],
    specs: [{ label: "Section", value: "25×150 mm • 2.4 m" }],
    cta: [{ label: "Patterns", href: "/nfc/products/nfc-decking" }],
    hideExploreSpecs: true,
  },
  {
    id: "nfc-fluted",
    name: "Fluted Profiles",
    slug: "nfc-fluted-profiles",
    tag: "Wall Cladding",
    image: "/nfc-flute.png.webp",
    blurb:
      "Accent walls that pop — fast to install, easy to repaint, and consistent groove depth for perfect rhythm.",
    bullets: ["Multiple groove widths", "Impact-resistant"],
    cta: [{ label: "Explore Profiles", href: "#" }],
  },
  {
    id: "nfc-textured",
    name: "Textured Panels",
    slug: "nfc-textured-panels",
    tag: "Finishes",
    image: "/nfc-textured-panel.png.webp",
    blurb: "Authentic wood-like textures on durable NFC base for feature walls, cabinetry and façades.",
    bullets: ["Uniform pattern repeat", "Prime/paint or veneer"],
  },
  {
    id: "nfc-fence",
    name: "NFC Fence",
    slug: "nfc-fence",
    tag: "Landscape",
    image: "/nfc-fence.png.webp",
    blurb:
      "Weather-resistant pickets and rails that retain looks with minimal upkeep. Safe, splinter-free, child-friendly.",
    bullets: ["Custom heights & caps", "Colour-coatable"],
  },
];

/* ───────────────────────────────── UI Components ───────────────────────────────── */

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl bg-stone-100/50 p-4 transition-colors duration-500 group-hover:bg-stone-100">
      <div className="flex h-full w-full items-center justify-center overflow-visible">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xl"
        />
      </div>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-stone-200 pl-4">
      <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">{label}</div>
      <div className="mt-1 text-sm font-medium text-stone-800">{value}</div>
    </div>
  );
}

/* ───────────────────────────────── Sidebar Nav ───────────────────────────────── */
function SidebarNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px" } // Adjust trigger zone
    );

    PRODUCTS.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-24 hidden h-fit w-60 lg:block">
      <h3 className="mb-6 font-serif text-lg font-medium text-stone-900">Collection</h3>
      <ul className="relative space-y-4 border-l border-stone-200 pl-6">
        {PRODUCTS.map((p) => {
          const isActive = activeId === p.id;
          return (
            <li key={p.id} className="relative">
              {isActive && (
                <span className="absolute -left-[25px] top-1/2 h-8 w-[2px] -translate-y-1/2 bg-teal-600 transition-all duration-300" />
              )}
              <a
                href={`#${p.id}`}
                className={`block text-sm transition-colors duration-300 ${isActive ? "font-semibold text-teal-700" : "text-stone-500 hover:text-stone-900"
                  }`}
              >
                {p.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-12">
        <a
          href="/contact"
          className="group flex items-center gap-2 text-sm font-semibold text-stone-900"
        >
          Contact Sales
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </nav>
  );
}

/* ───────────────────────────────── Main Page ───────────────────────────────── */
export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Minimalist Hero */}
      <PageHeader
        category="Product Catalogue"
        title="Engineered for"
        highlight="Excellence"
        description="Discover our range of premium Natural Fibre Composite materials designed for durability, aesthetics, and sustainability."
      />

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="flex gap-16">

          {/* Left: Sticky Sidebar */}
          <SidebarNav />

          {/* Right: Product List */}
          <div className="flex-1 space-y-24">
            {PRODUCTS.map((p, i) => (
              <article
                key={p.id}
                id={p.id}
                className="group scroll-mt-24"
              >
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                  {/* Image Side */}
                  <div className={` ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <ProductImage src={p.image} alt={p.name} />
                  </div>

                  {/* Text Side */}
                  <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      {p.tag && (
                        <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                          {p.tag}
                        </span>
                      )}
                      <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-stone-900">
                        {p.name}
                      </h2>
                    </div>

                    <p className="text-base leading-relaxed text-stone-600">
                      {p.blurb}
                    </p>

                    {/* Bullets */}
                    {p.bullets && (
                      <ul className="space-y-2">
                        {p.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-stone-700">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Specs */}
                    {!p.hideExploreSpecs && p.specs && (
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        {p.specs.map((s, idx) => (
                          <SpecItem key={idx} label={s.label} value={s.value} />
                        ))}
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {p.cta?.map((c, idx) => (
                        <a
                          key={idx}
                          href={c.href}
                          download={c.download ? "Indowud-nfc-eBrochure.pdf" : undefined}
                          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${idx === 0
                            ? "bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg"
                            : "border border-stone-200 text-stone-700 hover:border-stone-900 hover:text-stone-900"
                            }`}
                        >
                          {c.label}
                        </a>
                      ))}
                      {!p.hideExploreSpecs && !p.cta && (
                        <a href={`#${p.slug}`} className="px-6 py-3 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 hover:shadow-lg transition-all">
                          Explore
                        </a>
                      )}
                      {p.showCustomSizeText && (
                        <a href="/contact" className="text-sm font-medium text-teal-600 hover:text-teal-800 underline underline-offset-4">
                          Request Custom Size
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </article>
            ))}

            {/* Feature Section: NFC-GLU */}
            <div id="nfc-glu" className="relative overflow-hidden rounded-3xl bg-[#F6F1EC] p-8 sm:p-12 text-stone-900 shadow-sm border border-stone-200/60 scroll-mt-24">
              <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl">NFC-GLU Adhesive</h3>
                  <p className="mt-4 text-stone-600 leading-relaxed text-lg">
                    A professional grade adhesive developed specifically to bond Indowud NFC with almost any surface. Fast setting, water-resistant, and high strength.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {['Faster Setting', 'Water Resistant', 'High Strength', 'Multi-Surface'].map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-teal-600 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base font-bold text-stone-800">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-64 lg:h-full min-h-[350px] flex items-center justify-center">
                  <img
                    src="/nfc-glu.png.webp"
                    alt="NFC GLU"
                    className="absolute inset-0 w-full h-full object-contain mix-blend-multiply drop-shadow-xl p-4"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}