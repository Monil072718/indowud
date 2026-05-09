import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import PageHeader from "@/components/common/PageHeader";
import { setRequestLocale } from 'next-intl/server';

export default async function PageComponent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetails.indowud-neo-create");

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
          <div className="w-16 h-[1px] bg-stone-300 mx-auto"></div>
        </div>

        {/* ── Mosaic Gallery ──
            Layout (3 cols × 3 rows):
            [  img1  |      img2       ]   ← row 1
            [img3|img4|  img5 (tall)  ]   ← row 2
            [img6|img7|  img5 (tall)  ]   ← row 3
        */}
        <div
          className="w-full"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr 2fr",
            gridTemplateRows: "280px 230px 230px",
            gap: "6px",
          }}
        >
          {/* img1 — top-left, wide */}
          <div style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }} className="relative overflow-hidden rounded-tl-2xl rounded-bl-none">
            <Image
              src="/1-8-2048x1152.jpg.webp"
              alt="Neo & Create Interior 1"
              fill
              className="object-cover"
              sizes="40vw"
              priority
            />
          </div>

          {/* img2 — top-right, spans cols 2 & 3 */}
          <div style={{ gridColumn: "2 / 4", gridRow: "1 / 2" }} className="relative overflow-hidden rounded-tr-2xl">
            <Image
              src="/2-9-2048x1152.jpg.webp"
              alt="Neo & Create Interior 2"
              fill
              className="object-cover"
              sizes="60vw"
              priority
            />
          </div>

          {/* img3 — middle-left small */}
          <div style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }} className="relative overflow-hidden">
            <Image
              src="/pattern-2.jpg"
              alt="Neo & Create Interior 3"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>

          {/* img4 — middle-center */}
          <div style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }} className="relative overflow-hidden">
            <Image
              src="/pattern-3.jpg"
              alt="Neo & Create Interior 4"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>

          {/* img5 — right column, spans rows 2 & 3 (tall) */}
          <div style={{ gridColumn: "3 / 4", gridRow: "2 / 4" }} className="relative overflow-hidden rounded-br-2xl">
            <Image
              src="/3-6-2048x1152.jpg.webp"
              alt="Neo & Create Interior 5"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>

          {/* img6 — bottom-left */}
          <div style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }} className="relative overflow-hidden rounded-bl-2xl">
            <Image
              src="/pattern-4.jpg"
              alt="Neo & Create Interior 6"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>

          {/* img7 — bottom-center */}
          <div style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }} className="relative overflow-hidden">
            <Image
              src="/pattern-5.jpg"
              alt="Neo & Create Interior 7"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
        </div>

        {/* Footer caption */}
        <div className="text-right pr-2">
          <span className="text-stone-500 font-serif italic text-sm md:text-base">
            {t("footerText")}
          </span>
        </div>

      </div>
    </main>
  );
}
