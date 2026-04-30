import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NfcRaftersPage() {
  const t = useTranslations("ProductDetails.nfc-rafters");

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
             {/* Application image for rafters */}
            <Image 
              src="/2-9-2048x1152.jpg.webp" 
              alt="Installed NFC Rafters"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Support Box */}
        <div className="bg-teal-50/50 border border-teal-200 rounded-3xl p-8 text-center max-w-5xl mx-auto shadow-sm">
          <p className="text-base md:text-lg text-teal-800 font-medium italic">{t("supportTitle")}</p>
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
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("sizeValue") }} />
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4 items-start pt-4 border-t border-stone-200">
                <span className="font-semibold text-stone-900">{t("optionsLabel")}</span>
                <span className="leading-relaxed">{t("optionsValue")}</span>
              </div>
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
