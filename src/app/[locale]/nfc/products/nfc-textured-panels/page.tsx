import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NfcTexturedPanelsPage() {
  const t = useTranslations("ProductDetails.nfc-textured-panels");

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category="Products"
        title={t("title")}
        highlight={t("tagline")}
        description=""
      />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        
        {/* Top Section - Option 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm">
            <Image 
              src="/nfc-textured-panel_1.png.webp"
              alt={t("option1Value")}
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-6 text-stone-700 text-lg">
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("optionLabel")}</span>
                <span className="leading-relaxed font-medium text-stone-800">{t("option1Value")}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("thicknessLabel")}</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("thickness1Value") }} />
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("size1Value") }} />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Option 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm lg:order-2">
            <Image 
              src="/nfc-textured-panel.png.webp"
              alt={t("option2Value")}
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100 lg:order-1">
            <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
            <div className="space-y-6 text-stone-700 text-lg">
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("optionLabel")}</span>
                <span className="leading-relaxed font-medium text-stone-800">{t("option2Value")}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("thicknessLabel")}</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("thickness2Value") }} />
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
                <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("size2Value") }} />
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
              href="/nfc/products/nfc-textured-panels-patterns"
              className="px-8 py-4 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
            >
              {t("patternsBtn")}
            </Link>
            <Link href="/contact" className="text-lg font-medium text-stone-600 hover:text-stone-900 underline underline-offset-4 transition-colors">
              {t("contactText")}
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
