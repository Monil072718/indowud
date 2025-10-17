// app/legal-note/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Note | Indowud",
  description:
    "Important legal note and warranty/liability information for Indowud NFC products.",
};

export default function LegalNotePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Breadcrumb */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-rose-600 to-fuchsia-700 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <h1 className="text-3xl sm:text-4xl font-serif italic font-bold text-white text-center">
            Legal Note
          </h1>
          <nav className="mt-3 text-sm text-white/90">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:underline">HOME</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">LEGAL NOTE</li>
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
              All information provided in this website is based out of the knowledge that the company bears and has been
              published to provide a reference of the details of applications, features, care, precautions, suggestions,
              ideas, etc while working with Indowud NFC products. This shall not bear as legal warranty or guarantee so as
              to its specific properties or their suitability of its applications and products in specific areas.
            </p>

            <p className="text-base sm:text-lg leading-8 text-slate-800">
              The company offers a legal warranty only against termites. The company has the right to alter the terms and
              conditions at any time without any prior notice or publication. For the most updated warranty details, please
              refer to the website.
            </p>

            <p className="text-base sm:text-lg leading-8 text-slate-800">
              The company assumes no liability for any type of application, or information provided in the website, videos,
              brochures, or in any form whether written or verbal and does not hold any liability on the consequences related
              thereto. The viewer/purchaser is obliged to check and test the quality and he/she would be the sole person
              responsible for selecting, purchasing, working, altering, utilizing, processing, etc and applying any
              information as per the website.
            </p>

            <p className="text-base sm:text-lg leading-8 text-slate-800">
              Any advice given by the company in any form (verbal or written) shall not be constituted as any guarantee or
              claim. The company reserves the right to update, alter or change any information as a part of its continuous
              research and development programme. For more details, mail at{" "}
              <Link href="mailto:info@indowud.com" className="text-emerald-700 underline underline-offset-2">
                info@indowud.com
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
