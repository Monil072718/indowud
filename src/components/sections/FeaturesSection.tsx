"use client";
// Force HMR refresh
import Image from "next/image";
import { motion } from "framer-motion";

type Feature = {
  img: string;
  title: string;
};

const features: Feature[] = [
  { img: "/imgi_8_Icons_Termite-Proof-1.png.webp", title: "Termite Proof" },
  { img: "/imgi_9_Icons_Water-Proof-1.png.webp", title: "Water Proof" },
  { img: "/Icons_Flame-retardant-1.png.webp", title: "Flame Retardant" },
  { img: "/imgi_11_Icons_Smoke-suppressant-1.png.webp", title: "Smoke Suppressant" },
  { img: "/imgi_12_Icons_Anti-rodent-1.png.webp", title: "Anti Rodent" },
  { img: "/imgi_14_Icons_Absorbs-Sound-1.png.webp", title: "Good Sound Absorption" },
  { img: "/imgi_15_Icons_No-harmful-ingredients-1-1.png.webp", title: "No Harmful Ingredients" },
  { img: "/imgi_16_Icons_Good-screw-holding-1.png.webp", title: "Good Screw Holding" },
  { img: "/Icons_Easily-machinable-1.png.webp", title: "Easily Machinable" },
  { img: "/imgi_13_Icons_No-formaldehyde-emission-1-1.png.webp", title: "No Formaldehyde Emissions" },
];

export default function FeaturesSection() {
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
            A feature rich Wood That Lets You Breathe Freely
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="font-semibold">
              Indowud nfc is a sustainable eco-friendly panel product for all
              exterior & interior furnishing and joinery applications.
            </span>{" "}
            It is a zero-wood product, a superior alternative to tropical wood
            and wood-based panels like plywood, MDF/HDF in many ways.
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
