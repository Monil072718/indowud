import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.indowud-build");

  // Temporary placeholder images
  const placeholderImages = [
    "/1-8-2048x1152.jpg.webp",
    "/3-6-2048x1152.jpg.webp",
    "/2-9-2048x1152.jpg.webp",
    "/4-5-2048x1152.jpg.webp",
    "/5-5-2048x1152.jpg.webp",
    "/6-1-2048x1152.jpg.webp",
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {/* Main large image */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[0]}
                alt="Exterior Reference 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Standard images */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[1]}
                alt="Exterior Reference 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[2]}
                alt="Exterior Reference 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom images */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[3]}
                alt="Exterior Reference 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image 
                src={placeholderImages[4]}
                alt="Exterior Reference 5"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
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
