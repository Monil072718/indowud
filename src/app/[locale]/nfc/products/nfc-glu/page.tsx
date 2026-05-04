import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';
import { Clock, Droplets, Shield, Layers } from "lucide-react";

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.nfc-glu");

  const features = [
    { icon: Clock, text: t("featureFaster") },
    { icon: Droplets, text: t("featureWater") },
    { icon: Shield, text: t("featureStrong") },
    { icon: Layers, text: t("featurePanels") },
  ];

  const worksWith = [
    { name: t("worksWith1"), image: "/Indowud-nfc-board.png.webp" },
    { name: t("worksWith2"), image: "/pattern-2.jpg" },
    { name: t("worksWith3"), image: "/pattern-5.jpg" },
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full rounded-3xl bg-stone-50 p-8 flex items-center justify-center border border-stone-100 shadow-sm">
              <Image 
                src="/nfc-glu.png.webp"
                alt={t("title")}
                fill
                className="object-contain p-8 drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Details Section */}
          <div className="space-y-12">
            <p className="text-xl leading-relaxed text-stone-700 font-serif">
              {t("description")}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-teal-500/10 rounded-xl text-teal-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-stone-800">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Works Well With */}
            <div className="pt-8 border-t border-stone-200">
              <h3 className="text-2xl font-serif text-stone-900 mb-6">{t("worksWithLabel")}</h3>
              <div className="flex gap-8 flex-wrap">
                {worksWith.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-rose-500 shadow-md">
                      <Image 
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-sm font-medium text-stone-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
