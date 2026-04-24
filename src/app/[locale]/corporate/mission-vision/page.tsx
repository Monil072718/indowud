"use client";

import PageHeader from "@/components/common/PageHeader";
import { useTranslations } from "next-intl";

export default function MissionVisionPage() {
  const t = useTranslations("MissionVisionPage");

  return (
    <>
      <PageHeader
        category={t("category")}
        title={t("title")}
        description={t("description")}
      />

      <section className="relative">
        {/* soft gradient like your screenshot-1 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/50 to-teal-100/60" />
        <div className="relative max-w-4xl mx-auto px-6 py-14 md:py-20 text-center">
          {/* Mission */}
          <div className="mb-14">
            <h3 className="text-3xl font-bold italic underline decoration-2 underline-offset-4 mb-4">
              {t("mission")}
            </h3>
            <p className="text-base leading-relaxed text-gray-900">
              {t("missionText")}
            </p>
          </div>

          {/* Vision */}
          <div className="mb-14">
            <h3 className="text-3xl font-bold italic underline decoration-2 underline-offset-4 mb-4">
              {t("vision")}
            </h3>
            <p className="text-base leading-relaxed text-gray-900">
              {t("visionText")}
            </p>
          </div>

          {/* Quality */}
          <div>
            <h3 className="text-3xl font-bold italic underline decoration-2 underline-offset-4 mb-4">
              {t("quality")}
            </h3>
            <p className="text-base leading-relaxed text-gray-900">
              {t("qualityText")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
