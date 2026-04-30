import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";

export default function ZerowudNfcPage() {
  const t = useTranslations("ProductDetails.zerowud-nfc");

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
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm">
            <Image 
              src="/zerOwud-nfc-board.png.webp"
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
              <div className="pt-4 text-xl text-teal-700 font-medium">
                {t("surfaceValue")}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-2xl leading-relaxed text-stone-700 font-serif lg:pr-12">
            {t("description")}
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-stone-100 group">
             {/* Note: Using a placeholder image since wardrobe image isn't available in public yet. Replace with actual wardrobe image. */}
            <Image 
              src="/1-8-2048x1152.jpg.webp" 
              alt="Application"
              width={800}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
