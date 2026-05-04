import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';
import Link from "next/link";

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.nfc-alu-clad-rafters");

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category="Products"
        title={t("title")}
        highlight={t("tagline")}
        description=""
      />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-xl md:text-2xl leading-relaxed text-stone-700 font-serif lg:pr-12">
            <p>{t("description")}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-stone-100 group">
             {/* Application image for alu clad rafters */}
            <Image 
              src="/4-5-2048x1152.jpg.webp" 
              alt="Installed NFC Alu Clad Rafters"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
          <div className="relative aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm">
            <Image 
              src="/nfc-rafters.png.webp"
              alt={t("title")}
              fill
              className="object-contain p-8 drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-6 text-stone-700 text-lg">
              <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("lengthLabel")}</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("lengthValue") }} />
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span className="leading-relaxed">{t("sizeValue")}</span>
              </div>
              <p className="text-base text-stone-600 italic pt-2 border-t border-stone-200">
                {t("sizeDetails")}
              </p>
            </div>
            
            <div className="pt-6 border-t border-stone-200">
              <Link href="/contact" className="inline-block text-base font-medium text-teal-600 hover:text-teal-800 underline underline-offset-4 transition-colors">
                {t("contactText")}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
