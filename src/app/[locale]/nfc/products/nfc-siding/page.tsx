import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';
import Link from "next/link";

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.nfc-siding");

  // Temporary placeholder images for siding applications
  const placeholderImages = [
    "/NFC siding-4.png",
    "/NFC siding-5.png",
    "/NFC siding-6.png",
    "/NFC siding-7.png",
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category="Products"
        title={t("title")}
        highlight={t("tagline")}
        description=""
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-stone-700 font-serif">
            {t("introText")}
          </p>
        </div>

        {/* Hollow Siding Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-3xl flex items-center justify-center">
             {/* Using placeholder for hollow siding, replace when available */}
            <Image 
              src="/NFC siding-1.png"
              alt="Hollow Siding"
              fill
              className="object-contain transition-transform duration-700 hover:scale-110 drop-shadow-2xl"
              priority
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-4 text-stone-700 text-lg">
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("typeLabel")}</span>
                <span>{t("typeHollow")}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("lengthLabel")}</span>
                <span dangerouslySetInnerHTML={{ __html: t.raw("lengthValue") }} />
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span>{t("hollowSize")}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("actualLabel")}</span>
                <span>{t("hollowActual")}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("exposedWidthLabel")}</span>
                <span>{t("hollowExposed")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Callout */}
        <div className="bg-teal-50/50 border border-teal-200 rounded-3xl p-8 text-center space-y-4 max-w-5xl mx-auto shadow-sm">
          <h3 className="text-xl font-semibold text-teal-900">{t("supportBoxTitle")}</h3>
          <p className="text-sm md:text-base text-teal-800 italic" dangerouslySetInnerHTML={{ __html: t.raw("supportBoxText") }} />
        </div>

        {/* Solid Siding Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-3xl flex items-center justify-center lg:order-2">
             {/* Using placeholder for solid siding, replace when available */}
            <Image 
              src="/NFC siding-2.png"
              alt="Solid Siding"
              fill
              className="object-contain transition-transform duration-700 hover:scale-110 drop-shadow-2xl"
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100 lg:order-1">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-4 text-stone-700 text-lg">
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("typeLabel")}</span>
                <span>{t("typeSolid")}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("lengthLabel")}</span>
                <span dangerouslySetInnerHTML={{ __html: t.raw("lengthValue") }} />
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span>{t("solidSize")}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("actualLabel")}</span>
                <span>{t("solidActual")}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <span className="font-semibold text-stone-900">{t("exposedWidthLabel")}</span>
                <span>{t("solidExposed")}</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-stone-200 text-center">
              <p className="text-lg font-medium text-stone-800 mb-6">{t("directFixText")}</p>
              <Link href="/contact" className="inline-block text-base font-medium text-teal-600 hover:text-teal-800 underline underline-offset-4 transition-colors">
                {t("contactText")}
              </Link>
            </div>
          </div>
        </div>

        {/* Dimensions Section */}
        <div className="pt-16 border-t border-stone-100">
          <h3 className="text-2xl font-serif text-stone-900 mb-8 border-b border-stone-200 pb-4 inline-block">
            {t("dimensionsLabel") || "Dimensions:"}
          </h3>
          <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-3xl overflow-hidde">
      
            <Image 
              src="/NFC siding-3.png"
              alt="Siding Dimensions Diagram"
              fill
              className="object-contain p-4 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Gallery / Real Site Images */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[0]}
                alt="Siding Application 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[1]}
                alt="Siding Application 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[2]}
                alt="Siding Application 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[3]}
                alt="Siding Application 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
