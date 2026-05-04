import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.nfc-fence");

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category="Products"
        title={t("title")}
        highlight={t("tagline")}
        description=""
      />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm">
              <Image 
                src="/nfc-fence.png.webp"
                alt={t("title")}
                fill
                className="object-contain p-8 drop-shadow-xl hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-stone-100 group">
               {/* Note: Using a placeholder image for the fence real-world application. Replace with actual image. */}
              <Image 
                src="/nfc-fence_1.png.webp" 
                alt="Installed NFC Fence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Details Section */}
          <div className="space-y-12 lg:pt-12">
            <div className="bg-stone-50/50 p-8 sm:p-12 rounded-3xl border border-stone-100">
              <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4">{t("detailsLabel")}</h2>
              <div className="space-y-6 text-stone-700 text-lg pt-6">
                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                  <span className="font-semibold text-stone-900">{t("lengthLabel")}</span>
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("lengthValue") }} />
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                  <span className="font-semibold text-stone-900">{t("sizeLabel")}</span>
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("sizeValue") }} />
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
                  <span className="font-semibold text-stone-900">{t("thicknessLabel")}</span>
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("thicknessValue") }} />
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 items-start pt-4 border-t border-stone-200">
                  <span className="font-semibold text-stone-900">{t("optionsLabel")}</span>
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw("optionsValue") }} />
                </div>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-stone-700 font-serif">
              {t("description")}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
