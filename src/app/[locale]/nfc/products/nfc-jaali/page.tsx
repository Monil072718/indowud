import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';
import Link from "next/link";

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.nfc-jaali");

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
          <div className="relative aspect-square md:aspect-[4/3] bg-stone-50 rounded-3xl p-8 border border-stone-100 flex items-center justify-center gap-4">
             {/* CNC routed patterns placeholder */}
            <div className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-sm bg-stone-100 p-4">
              <Image 
                src="/nfc-rafters.png.webp" 
                alt="Jaali Pattern A" 
                fill 
                className="object-contain p-4 opacity-50 mix-blend-multiply" 
              />
            </div>
            <div className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-sm bg-stone-100 p-4">
              <Image 
                src="/nfc-siding.png.webp" 
                alt="Jaali Pattern B" 
                fill 
                className="object-contain p-4 opacity-50 mix-blend-multiply" 
              />
            </div>
          </div>
          <div className="text-xl md:text-2xl leading-relaxed text-stone-700 font-serif lg:pl-8">
            <p>{t("description1")}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-xl md:text-2xl leading-relaxed text-stone-700 font-serif lg:pr-8 space-y-8 lg:order-2">
            <p>{t("description2")}</p>
            <div className="pt-4">
              <Link href="/contact" className="inline-block text-lg font-medium text-teal-600 hover:text-teal-800 underline underline-offset-4 transition-colors">
                {t("contactText")}
              </Link>
            </div>
          </div>
          <div className="space-y-4 lg:order-1">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-stone-100 group">
              <Image 
                src="/2-9-2048x1152.jpg.webp" 
                alt="Installed NFC Jaali in Nagpur"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-center text-stone-500 font-serif italic text-base">{t("imageCaption")}</p>
          </div>
        </div>

      </div>
    </main>
  );
}
