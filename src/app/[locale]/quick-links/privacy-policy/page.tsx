import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

// Note: In Next.js App Router, you can't use hooks in Metadata export if it's a server component.
// But this is a server component by default. Let's make it a client component for simplicity of localization if needed,
// OR use getTranslations for server side.
// Since the previous ones were "use client", I'll check if this one needs to be.
// The previous version didn't have "use client" but it had Link and Metadata.

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" });
  return {
    title: `${t("title")} | Indowud`,
    description: t("intro").slice(0, 160),
  };
}

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicyPage");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Breadcrumb */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-cyan-500 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{t("title")}</h1>
          <nav className="mt-3 text-xs md:text-sm tracking-widest text-white/90 uppercase">
            <ol className="flex flex-wrap items-center">
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
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <p className="text-slate-600 leading-relaxed">
          {t("intro")}
        </p>

        {/* 1. Information We Collect */}
        <Section>
          <H2>{t("sections.s1.title")}</H2>
          {locale === "en" ? (
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <b>Personal Data:</b> We collect personal information that you provide directly to us, such as when you sign up for newsletters,
                make inquiries, request samples, or contact us through the website. This may include your name, email address, phone number,
                company name, and other contact information.
              </li>
              <li>
                <b>Automatically Collected Data:</b> We automatically collect certain information about your device and your visit when you browse
                our site. This may include IP address, browser type, operating system, browsing actions, and patterns.
              </li>
              <li>
                <b>Cookies:</b> We may use cookies and similar tracking technologies to collect data to improve user experience and analyze
                website performance. You can manage or disable cookies through your browser settings.
              </li>
            </ul>
          ) : (
            <p className="text-slate-700">Detailed information available in English version.</p>
          )}
        </Section>

        {/* 2. How We Use Your Information */}
        <Section>
          <H2>{t("sections.s2.title")}</H2>
          {locale === "en" ? (
            <>
              <p className="text-slate-700">We use your information for the following purposes:</p>
              <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
                <li>To provide and maintain our services and website</li>
                <li>To respond to your inquiries and fulfill your requests (e.g., sending you brochures, samples)</li>
                <li>To personalize your experience on the website</li>
                <li>To send you marketing communications, newsletters, or promotional materials related to our products (you can opt out at any time)</li>
                <li>To improve our website functionality and services</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </>
          ) : (
            <p className="text-slate-700">Detailed information available in English version.</p>
          )}
        </Section>

        {/* 3. How We Share Your Information */}
        <Section>
          <H2>{t("sections.s3.title")}</H2>
          <p className="text-slate-700">
            {t("sections.s3.title")}
          </p>
        </Section>

        {/* 4. Data Retention */}
        <Section>
          <H2>{t("sections.s4.title")}</H2>
          <p className="text-slate-700">
            {t("sections.s4.content")}
          </p>
        </Section>

        {/* 5. Security */}
        <Section>
          <H2>{t("sections.s5.title")}</H2>
          <p className="text-slate-700">
            {t("sections.s5.content")}
          </p>
        </Section>

        {/* 6. Your Rights */}
        <Section>
          <H2>{t("sections.s6.title")}</H2>
          <p className="text-slate-700">
            {t("sections.s6.content")}
          </p>
        </Section>

        {/* 7. Third-Party Links */}
        <Section>
          <H2>{t("sections.s7.title")}</H2>
          <p className="text-slate-700">
            {t("sections.s7.content")}
          </p>
        </Section>

        {/* 8. Changes */}
        <Section>
          <H2>{t("sections.s8.title")}</H2>
          <p className="text-slate-700">
            {t("sections.s8.content")}
          </p>
        </Section>

        {/* 9. Contact Us */}
        <Section>
          <H2>{t("sections.s9.title")}</H2>
          <p className="text-slate-700">
            {t("sections.s9.intro")}
          </p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-800">
            <p>
              <span className="font-semibold">{t("sections.s9.email")}:</span>{" "}
              <Link href="mailto:info@indowud.com" className="text-emerald-700 underline underline-offset-2">
                info@indowud.com
              </Link>
            </p>
            <p className="mt-1">
              <span className="font-semibold">{t("sections.s9.phone")}:</span>{" "}
              <Link href="tel:+914442158586" className="text-emerald-700 underline underline-offset-2">
                +91-44-4215 8586
              </Link>
            </p>
          </div>
        </Section>

        <p className="mt-8 text-sm text-slate-500">
          {t("effectiveDate", { date: "1 October 2024" })}
        </p>
      </section>
    </main>
  );
}

/* ---------------- small helpers ---------------- */
function Section({ children }: { children: React.ReactNode }) {
  return <section className="mt-8">{children}</section>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">{children}</h2>;
}
