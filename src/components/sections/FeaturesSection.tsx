"use client";
// Force HMR refresh
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const featureImages = [
  "/imgi_8_Icons_Termite-Proof-1.png.webp",
  "/imgi_9_Icons_Water-Proof-1.png.webp",
  "/Icons_Flame-retardant-1.png.webp",
  "/imgi_11_Icons_Smoke-suppressant-1.png.webp",
  "/imgi_12_Icons_Anti-rodent-1.png.webp",
  "/imgi_14_Icons_Absorbs-Sound-1.png.webp",
  "/imgi_15_Icons_No-harmful-ingredients-1-1.png.webp",
  "/imgi_16_Icons_Good-screw-holding-1.png.webp",
  "/Icons_Easily-machinable-1.png.webp",
  "/imgi_13_Icons_No-formaldehyde-emission-1-1.png.webp",
];

export default function FeaturesSection() {
  const t = useTranslations("FeaturesSection");

  const features = featureImages.map((img, i) => ({
    img,
    title: t(`features.${i}`),
  }));

  return (
    <section className="relative py-24 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">
      {/* subtle background image like the reference */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/164537/pexels-photo-164537.jpeg?auto=compress&cs=tinysrgb&w=800)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline + blurb */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-semibold text-gray-800 mb-6 italic"
          >
            {t("heading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="font-semibold">
              {t("descriptionBold")}
            </span>{" "}
            {t("descriptionRegular")}
          </motion.p>
        </motion.div>

        {/* Row 1: 5 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {features.slice(0, 5).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-3 bg-white rounded-full flex items-center justify-center shadow">
                <Image src={feature.img} alt={feature.title} width={48} height={48} className="object-contain" />
              </div>
              <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide leading-tight">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Row 2: remaining 5 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.slice(5).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 5) * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-3 bg-white rounded-full flex items-center justify-center shadow">
                <Image src={feature.img} alt={feature.title} width={48} height={48} className="object-contain" />
              </div>
              <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide leading-tight">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
