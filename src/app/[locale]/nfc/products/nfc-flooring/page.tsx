import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';
import Link from "next/link";

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.nfc-flooring");

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category="Products"
        title={t("title")}
        highlight={t("tagline")}
        description=""
      />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        
        {/* Porch Flooring Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm">
             {/* Using placeholder for porch flooring, replace when available */}
            <Image 
              src="/nfc-decking_1.png.webp"
              alt="Porch Flooring"
              fill
              className="object-contain p-8 drop-shadow-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-4 text-stone-700 text-lg">
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("optionLabel")}</span>
                <span>{t("option1Value")}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("tileLabel")}</span>
                <span>{t("tile1Value")}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span dangerouslySetInnerHTML={{ __html: t.raw("size1Value") }} />
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("lengthLabel")}</span>
                <span>{t("length1Value")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm lg:order-2">
             {/* Using placeholder for decking, replace when available */}
            <Image 
              src="/nfc-decking_1.png.webp"
              alt="Decking"
              fill
              className="object-contain p-8 drop-shadow-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100 lg:order-1">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-4 text-stone-700 text-lg">
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("optionLabel")}</span>
                <span>{t("option2Value")}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("tileLabel")}</span>
                <span>{t("tile2Value")}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span dangerouslySetInnerHTML={{ __html: t.raw("size2Value") }} />
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("lengthLabel")}</span>
                <span>{t("length2Value")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Support Box */}
        <div className="space-y-12 pt-8">
          <p className="text-xl md:text-2xl leading-relaxed text-stone-700 font-serif max-w-5xl mx-auto text-center">
            {t("description")}
          </p>

          <div className="bg-teal-50/50 border border-teal-200 rounded-3xl p-8 md:p-12 text-center space-y-4 max-w-5xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold text-teal-900 mb-4">Support</h3>
            <p className="text-sm md:text-base text-teal-800 italic" dangerouslySetInnerHTML={{ __html: t.raw("supportBoxText") }} />
          </div>

          <div className="text-center pt-8 border-t border-stone-200">
            <Link href="/contact" className="inline-block text-lg font-medium text-teal-600 hover:text-teal-800 underline underline-offset-4 transition-colors">
              {t("contactText")}
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
