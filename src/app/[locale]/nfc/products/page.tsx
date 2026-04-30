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
function SidebarNav({ products }: { products: { id: string; name: string }[] }) {
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

  const products = useMemo(() => [], [t]);

  return (
    <main className="bg-white min-h-screen">


      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="flex gap-16">
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
                        {p.specs.map((s: { label: string; value: string }, idx: number) => (
                          <SpecItem key={idx} label={s.label} value={s.value} />
                        ))}
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {p.cta?.map((c: { label: string; href: string; download?: boolean }, idx: number) => (
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
          </div>
        </div>
      </div>
    </main>
  );
}