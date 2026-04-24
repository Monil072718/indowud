"use client";

import PageHeader from "@/components/common/PageHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ProfileProps = {
  name: string;
  role: string;
  img: string;
  paragraphs: string[];
  reverse?: boolean;
};

function Profile({ name, role, img, paragraphs, reverse }: ProfileProps) {
  return (
    <section
      className={[
        "relative grid items-start gap-8 md:gap-12",
        "md:grid-cols-[260px,1fr]",
        // card styling (simple & professional)
        "rounded-xl bg-white border border-gray-100 shadow-sm",
        "p-6 md:p-8 transition-shadow hover:shadow",
        reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : "",
      ].join(" ")}
    >
      {/* Photo + Name */}
      <div className="flex flex-col items-center md:items-start">
        <div className="size-56 md:size-64 shrink-0 rounded-full overflow-hidden ring-2 ring-teal-200 shadow-sm relative">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-300"
            sizes="(max-width: 768px) 224px, 256px"
          />
        </div>

        <div className="mt-5 text-center md:text-left">
          <p className="text-xl font-semibold text-slate-900">{name}</p>
          <span className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
            {role}
          </span>
        </div>
      </div>

      {/* Bio */}
      <div className="text-gray-800 leading-8 md:leading-8">
        {paragraphs.map((t, i) => (
          <p key={i} className={i === 0 ? "" : "mt-4"}>
            {t}
          </p>
        ))}
      </div>
    </section>
  );
}

export default function OurTeamPage() {
  const t = useTranslations("OurTeamPage");

  return (
    <>
      <PageHeader
        category={t("category")}
        title={t("title")}
        description={t("description")}
      />

      <main className="relative">
        {/* page content */}
        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20 space-y-14">

          <Profile
            name={t("member1.name")}
            role={t("member1.role")}
            img="/bl.webp"
            paragraphs={[
              t("member1.bio1"),
              t("member1.bio2"),
            ]}
          />

          {/* subtle divider */}
          <div className="my-2 border-t border-gray-200" />

          <Profile
            name={t("member2.name")}
            role={t("member2.role")}
            img="/varun.webp"
            paragraphs={[
              t("member2.bio1"),
              t("member2.bio2"),
            ]}
          />

        </div>
      </main>
    </>
  );
}
