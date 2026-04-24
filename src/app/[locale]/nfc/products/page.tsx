"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, useMemo } from "react";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { useTranslations } from "next-intl";

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
function SidebarNav({ products }: { products: any[] }) {
  const [activeId, setActiveId] = useState("");
  const t = useTranslations("NFCProductsPage");

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

    products.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [products]);

  return (
    <nav className="sticky top-24 hidden h-fit w-60 lg:block">
      <h3 className="mb-6 font-serif text-lg font-medium text-stone-900">{t("collection")}</h3>
      <ul className="relative space-y-4 border-l border-stone-200 pl-6">
        {products.map((p) => {
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
        <Link
          href="/contact"
          className="group flex items-center gap-2 text-sm font-semibold text-stone-900"
        >
          {t("contactSales")}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </nav>
  );
}

/* ───────────────────────────────── Main Page ───────────────────────────────── */
export default function ProductsPage() {
  const t = useTranslations("NFCProductsPage");

  const products = useMemo(() => [
    {
      id: "zerowud-nfc",
      name: t("products.zerowud-nfc.name"),
      slug: "zerowud-nfc",
      tag: t("products.zerowud-nfc.tag"),
      image: "/zerOwud-nfc-board.png.webp",
      blurb: t("products.zerowud-nfc.blurb"),
      bullets: t.raw("products.zerowud-nfc.bullets"),
      specs: [
        { label: t("products.zerowud-nfc.labels.sizes"), value: t("products.zerowud-nfc.specs.sizes") },
        { label: t("products.zerowud-nfc.labels.thickness"), value: t("products.zerowud-nfc.specs.thickness") },
        { label: t("products.zerowud-nfc.labels.finish"), value: t("products.zerowud-nfc.specs.finish") },
      ],
      cta: [
        { label: t("products.zerowud-nfc.cta.brochure"), href: "/Indowud-nfc-eBrochure.pdf", download: true },
        { label: t("products.zerowud-nfc.cta.inquire"), href: "/contact" },
      ],
    },
    {
      id: "indowud-board",
      name: t("products.indowud-board.name"),
      slug: "indowud-nfc-board",
      tag: t("products.indowud-board.tag"),
      image: "/Indowud-nfc-board.png.webp",
      blurb: t("products.indowud-board.blurb"),
      bullets: t.raw("products.indowud-board.bullets"),
      specs: [
        { label: t("products.indowud-board.labels.sizes"), value: t("products.indowud-board.specs.sizes") },
        { label: t("products.indowud-board.labels.thickness"), value: t("products.indowud-board.specs.thickness") },
      ],
      cta: [{ label: t("products.indowud-board.cta.applications"), href: "/nfc/applications" }],
      showCustomSizeText: true,
    },
    {
      id: "nfc-door",
      name: t("products.nfc-door.name"),
      slug: "nfc-door",
      tag: t("products.nfc-door.tag"),
      image: "/nfc-door.png.webp",
      blurb: t("products.nfc-door.blurb"),
      bullets: t.raw("products.nfc-door.bullets"),
      specs: [
        { label: t("products.nfc-door.labels.standard"), value: t("products.nfc-door.specs.standard") },
        { label: t("products.nfc-door.labels.custom"), value: t("products.nfc-door.specs.custom") },
      ],
      cta: [{ label: t("products.nfc-door.cta.quote"), href: "/contact" }],
    },
    {
      id: "nfc-frame",
      name: t("products.nfc-frame.name"),
      slug: "nfc-frames",
      tag: t("products.nfc-frame.tag"),
      image: "/nfc-frame.png.webp",
      blurb: t("products.nfc-frame.blurb"),
      bullets: t.raw("products.nfc-frame.bullets"),
      cta: [{ label: t("products.nfc-frame.cta.sections"), href: "#" }],
    },
    {
      id: "nfc-jalli",
      name: t("products.nfc-jalli.name"),
      slug: "nfc-jalli",
      tag: t("products.nfc-jalli.tag"),
      image: "/jaal1.jpg.webp",
      blurb: t("products.nfc-jalli.blurb"),
      bullets: t.raw("products.nfc-jalli.bullets"),
      cta: [{ label: t("products.nfc-jalli.cta.design"), href: "/contact" }],
    },
    {
      id: "nfc-decking",
      name: t("products.nfc-decking.name"),
      slug: "nfc-decking",
      tag: t("products.nfc-decking.tag"),
      image: "/nfc-decking.png.webp",
      blurb: t("products.nfc-decking.blurb"),
      bullets: t.raw("products.nfc-decking.bullets"),
      specs: [{ label: t("products.nfc-decking.labels.section"), value: t("products.nfc-decking.specs.section") }],
      cta: [{ label: t("products.nfc-decking.cta.patterns"), href: "/nfc/products/nfc-decking" }],
      hideExploreSpecs: true,
    },
    {
      id: "nfc-fluted",
      name: t("products.nfc-fluted.name"),
      slug: "nfc-fluted-profiles",
      tag: t("products.nfc-fluted.tag"),
      image: "/nfc-flute.png.webp",
      blurb: t("products.nfc-fluted.blurb"),
      bullets: t.raw("products.nfc-fluted.bullets"),
      cta: [{ label: t("products.nfc-fluted.cta.explore"), href: "#" }],
    },
    {
      id: "nfc-textured",
      name: t("products.nfc-textured.name"),
      slug: "nfc-textured-panels",
      tag: t("products.nfc-textured.tag"),
      image: "/nfc-textured-panel.png.webp",
      blurb: t("products.nfc-textured.blurb"),
      bullets: t.raw("products.nfc-textured.bullets"),
    },
    {
      id: "nfc-fence",
      name: t("products.nfc-fence.name"),
      slug: "nfc-fence",
      tag: t("products.nfc-fence.tag"),
      image: "/nfc-fence.png.webp",
      blurb: t("products.nfc-fence.blurb"),
      bullets: t.raw("products.nfc-fence.bullets"),
    },
  ], [t]);

  return (
    <main className="bg-white min-h-screen">

      {/* Minimalist Hero */}
      <PageHeader
        category={t("category")}
        title={t("title")}
        highlight={t("highlight")}
        description={t("description")}
      />

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="flex gap-16">

          {/* Left: Sticky Sidebar */}
          <SidebarNav products={products} />

          {/* Right: Product List */}
          <div className="flex-1 space-y-24">
            {products.map((p, i) => (
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
                        {p.bullets.map((b: string, idx: number) => (
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
                        {p.specs.map((s: any, idx: number) => (
                          <SpecItem key={idx} label={s.label} value={s.value} />
                        ))}
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {p.cta?.map((c: any, idx: number) => (
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
                          {t("explore")}
                        </a>
                      )}
                      {p.showCustomSizeText && (
                        <Link href="/contact" className="text-sm font-medium text-teal-600 hover:text-teal-800 underline underline-offset-4">
                          {t("customSize")}
                        </Link>
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
                  <h3 className="font-serif text-3xl md:text-4xl">{t("nfcGlu.title")}</h3>
                  <p className="mt-4 text-stone-600 leading-relaxed text-lg">
                    {t("nfcGlu.description")}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {t.raw("nfcGlu.features").map((f: string) => (
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