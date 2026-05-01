"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, useMemo } from "react";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

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
      { rootMargin: "-20% 0px -50% 0px" }
    );

    products.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [products]);

  return (
    <nav className="sticky top-24 hidden h-fit w-56 shrink-0 lg:block">
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
                className={`block text-sm transition-colors duration-300 ${
                  isActive ? "font-semibold text-teal-700" : "text-stone-500 hover:text-stone-900"
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

/* ───────────────────────────────── Mobile Quick-jump ───────────────────────────────── */
function MobileQuickJump({ products }: { products: { id: string; name: string }[] }) {
  return (
    <div className="lg:hidden mb-8 overflow-x-auto -mx-4 px-4">
      <div className="flex gap-2 pb-2 w-max">
        {products.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="whitespace-nowrap shrink-0 px-3 py-1.5 rounded-full border border-stone-200 text-xs text-stone-600 hover:border-teal-500 hover:text-teal-700 transition-colors"
          >
            {p.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────────────── Product slug → image map ───────────────────────────────── */
const PRODUCT_IMAGES: Record<string, string> = {
  "zerowud-nfc": "/zerOwud-nfc-board.png.webp",
  "indowud-board": "/Indowud-nfc-board.png.webp",
  "nfc-door": "/nfc-door.png.webp",
  "nfc-frame": "/nfc-frame.png.webp",
  "nfc-jalli": "/jaal1.jpg.webp",
  "nfc-decking": "/nfc-decking.png.webp",
  "nfc-fluted": "/nfc-flute.png.webp",
  "nfc-textured": "/nfc-textured-panel.png.webp",
  "nfc-fence": "/nfc-fence.png.webp",
};

/* ───────────────────────────────── Product slug → detail page map ───────────────────────────────── */
const PRODUCT_DETAIL_PAGES: Record<string, string> = {
  "zerowud-nfc": "/nfc/products/zerowud-nfc",
  "indowud-board": "/nfc/products/indowud-board",
  "nfc-door": "/nfc/products/nfc-door",
  "nfc-frame": "/nfc/products/nfc-frame",
  "nfc-jalli": "/nfc/products/nfc-jaali",
  "nfc-decking": "/nfc/products/nfc-flooring",
  "nfc-fluted": "/nfc/products/nfc-flute",
  "nfc-textured": "/nfc/products/nfc-textured-panels",
  "nfc-fence": "/nfc/products/nfc-fence",
};

const PRODUCT_KEYS = [
  "zerowud-nfc",
  "indowud-board",
  "nfc-door",
  "nfc-frame",
  "nfc-jalli",
  "nfc-decking",
  "nfc-fluted",
  "nfc-textured",
  "nfc-fence",
];

/* ───────────────────────────────── Main Page ───────────────────────────────── */
export default function ProductsPage() {
  const t = useTranslations("NFCProductsPage");
  const locale = useLocale();

  const products = useMemo(() =>
    PRODUCT_KEYS.map((key) => {
      const p = t.raw(`products.${key}`) as Record<string, unknown>;
      const specs = p?.specs as Record<string, string> | undefined;
      const labels = p?.labels as Record<string, string> | undefined;
      const bullets = p?.bullets as string[] | undefined;
      const ctaRaw = p?.cta as Record<string, string> | undefined;

      const specsArray = specs && labels
        ? Object.keys(specs).map((sk) => ({ label: labels[sk] ?? sk, value: specs[sk] }))
        : [];

      const cta = ctaRaw
        ? Object.entries(ctaRaw).map(([_ck, label], idx) => ({
            label: label as string,
            href: idx === 0 && PRODUCT_DETAIL_PAGES[key] ? `/${locale}${PRODUCT_DETAIL_PAGES[key]}` : `/${locale}/contact`,
          }))
        : undefined;

      return {
        id: key,
        name: (p?.name as string) ?? key,
        tag: (p?.tag as string) ?? "",
        blurb: (p?.blurb as string) ?? "",
        bullets: bullets ?? [],
        image: PRODUCT_IMAGES[key] ?? "",
        specs: specsArray,
        cta,
      };
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category={t("category")}
        title={t("title")}
        highlight={t("highlight")}
        description={t("description")}
      />

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        {/* Mobile Quick-jump scroll */}
        <MobileQuickJump products={products.map((p) => ({ id: p.id, name: p.name }))} />

        <div className="flex gap-12 lg:gap-16">
          {/* Left: Sidebar nav (desktop only) */}
          <SidebarNav products={products.map((p) => ({ id: p.id, name: p.name }))} />

          {/* Right: Product List */}
          <div className="flex-1 min-w-0 space-y-16 sm:space-y-24">
            {products.map((p, i) => (
              <article key={p.id} id={p.id} className="group scroll-mt-24">
                <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">

                  {/* Image Side */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ProductImage src={p.image} alt={p.name} />
                  </div>

                  {/* Text Side */}
                  <div className={`space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      {p.tag && (
                        <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                          {p.tag}
                        </span>
                      )}
                      <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-tight">
                        {p.name}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed text-stone-600">
                      {p.blurb}
                    </p>

                    {/* Bullets */}
                    {p.bullets.length > 0 && (
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
                    {p.specs.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        {p.specs.map((s, idx) => (
                          <SpecItem key={idx} label={s.label} value={s.value} />
                        ))}
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {p.cta?.map((c, idx) => (
                        <Link
                          key={idx}
                          href={c.href}
                          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                            idx === 0
                              ? "bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg"
                              : "border border-stone-200 text-stone-700 hover:border-stone-900 hover:text-stone-900"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                      {!p.cta && (
                        <Link
                          href={`/${locale}${PRODUCT_DETAIL_PAGES[p.id] ?? "/contact"}`}
                          className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 hover:shadow-lg transition-all"
                        >
                          {t("explore")}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider (not after last item) */}
                {i < products.length - 1 && (
                  <div className="mt-16 sm:mt-24 border-t border-stone-100" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}