"use client";

import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ChairmanMessagePage() {
  const t = useTranslations("ChairmanPage");

  return (
    <div className="bg-white text-gray-900">
      <PageHeader
        category={t("category")}
        title={t("title")}
        description={t("description")}
      />

      <section className="max-w-5xl mx-auto px-3 sm:px-6 py-8 md:py-16">
        {/* Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <p className="text-base font-medium text-gray-900">
              {t("intro")}
            </p>
          </div>
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden grayscale relative">
            <Image
              src="/bl.webp"
              alt="Chairman"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Motto */}
        <div className="mt-8 md:mt-10 rounded-xl bg-gradient-to-r from-rose-50 to-teal-50 border border-gray-200 p-4 md:p-6 text-center">
          <blockquote className="text-base text-rose-700 italic font-semibold leading-relaxed">
            {t("motto")}
          </blockquote>
        </div>

        {/* Body */}
        <div className="mt-8 md:mt-12 space-y-5 md:space-y-6 text-gray-700 leading-7 text-base">
          <SectionHeading eyebrow={t("eyebrow")} title={t("sectionTitle")} />
          <p>{t("para1")}</p>
          <p>{t("para2")}</p>
          <p>{t("para3")}</p>
          <div className="flex flex-col items-end pr-0 sm:pr-1">
            <p className="font-semibold">{t("closing")}</p>
            <p>{t("name")}</p>
            <div className="mt-2 h-16 w-auto relative opacity-80">
              <Image
                src="/sign.png"
                alt="signature"
                width={200}
                height={64}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
