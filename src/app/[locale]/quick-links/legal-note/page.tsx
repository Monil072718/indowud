import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "LegalNotePage" });
  return {
    title: `${t("title")} | Indowud`,
    description: t("para1").slice(0, 160),
  };
}

export default function LegalNotePage() {
  const t = useTranslations("LegalNotePage");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Breadcrumb */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-rose-600 to-fuchsia-700 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <h1 className="text-3xl sm:text-4xl font-serif italic font-bold text-white text-center">
            {t("title")}
          </h1>
          <nav className="mt-3 text-xs md:text-sm tracking-widest text-white/90 uppercase">
            <ol className="flex items-center justify-center">
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li aria-hidden="true" className="mx-1">/</li>
              <li>{t("breadcrumb")}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="relative">
        {/* soft watermark / motif */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 mx-auto h-[680px] w-[900px] opacity-[0.06] -z-10 hidden md:block"
          viewBox="0 0 900 680"
          fill="none"
        >
          <path d="M60 600c200-160 460-140 760-420" stroke="currentColor" strokeWidth="6" />
          <path d="M120 560c220-160 420-140 700-380" stroke="currentColor" strokeWidth="4" />
          <path d="M180 520c240-140 420-120 620-320" stroke="currentColor" strokeWidth="3" />
        </svg>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-10 sm:space-y-12 text-center">
            <p className="text-base sm:text-lg leading-8 text-slate-800">
              {t("para1")}
            </p>

            <p className="text-base sm:text-lg leading-8 text-slate-800">
              {t("para2")}
            </p>

            <p className="text-base sm:text-lg leading-8 text-slate-800">
              {t("para3")}
            </p>

            <p className="text-base sm:text-lg leading-8 text-slate-800">
              {t.rich("para4", {
                email: () => (
                  <Link href="mailto:info@indowud.com" className="text-emerald-700 underline underline-offset-2">
                    info@indowud.com
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
