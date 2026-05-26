import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';
import Link from "next/link";

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.nfc-flute");

  // Premium flute sample images
  const fluteImages = [
    "/flute-1.png",
    "/flute-2.png",
    "/flute-3.png",
    "/flute-4.png",
    "/flute-5.png",
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category="Products"
        title={t("title")}
        highlight={t("tagline")}
        description=""
      />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm">
            <Image 
              src="/nfc-flute.png.webp"
              alt={t("title")}
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-6 text-stone-700 text-lg">
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("thicknessLabel")}</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("thicknessValue") }} />
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("sizeValue") }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description & CTA */}
        <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-sm border border-stone-100">
          <p className="text-xl md:text-2xl leading-relaxed text-stone-700 font-serif max-w-4xl mx-auto">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link 
              href="/nfc/products/nfc-flute-patterns"
              className="px-8 py-4 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
            >
              {t("patternsBtn")}
            </Link>
          </div>
          <div className="pt-8 mt-8 border-t border-stone-200">
             <p className="text-stone-500 font-medium italic text-sm md:text-base" dangerouslySetInnerHTML={{ __html: t.raw("contactText") }} />
          </div>
        </div>

        {/* Applications / Panel the right way Section */}
        <div className="pt-8">
          <h3 className="text-3xl md:text-4xl font-serif text-rose-600 italic mb-12 border-b border-stone-100 pb-6">
            {t("applicationsTitle")}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {/* Masonry-style grid for application samples */}
            <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={fluteImages[0]}
                alt="Flute Application 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={fluteImages[1]}
                alt="Flute Application 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={fluteImages[2]}
                alt="Flute Application 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={fluteImages[3]}
                alt="Flute Application 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 md:col-span-3 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={fluteImages[4]}
                alt="Flute Application 5"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
