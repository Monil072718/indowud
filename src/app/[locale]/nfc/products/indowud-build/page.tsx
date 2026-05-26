import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.indowud-build");

  // Premium build images
  const buildImages = [
    "/build-1.png",
    "/build-2.png",
    "/build-3.png",
    "/build-4.png",
    "/build-5.png",
    "/build-6.png",
    "/build-7.png",
    "/build-8.png",
    "/build-9.png",
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        category="Products"
        title={t("title")}
        highlight={t("tagline")}
        description=""
      />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Text Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xl md:text-2xl leading-relaxed text-stone-700 font-serif">
            {t("description")}
          </p>
          <div className="w-16 h-[1px] bg-stone-300 mx-auto mt-8"></div>
        </div>

        {/* Masonry/Grid Collage Section */}
        <div className="pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            
            {/* 1. Main large featured card */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[0]}
                alt="Exterior Build Reference 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* 2. Landscape card */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[1]}
                alt="Exterior Build Reference 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* 3. Small square card */}
            <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[2]}
                alt="Exterior Build Reference 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* 4. Tall vertical card */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[3]}
                alt="Exterior Build Reference 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* 5. Landscape card (spans two columns) */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[4]}
                alt="Exterior Build Reference 5"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 6. Small square card */}
            <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[5]}
                alt="Exterior Build Reference 6"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* 7. Small square card */}
            <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[6]}
                alt="Exterior Build Reference 7"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* 8. Medium landscape card */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[7]}
                alt="Exterior Build Reference 8"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 9. Small square card */}
            <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={buildImages[8]}
                alt="Exterior Build Reference 9"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

          </div>
          
          <div className="text-right pt-6 pr-4">
            <span className="text-stone-500 font-serif italic text-sm md:text-base">
              {t("footerText")}
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}
