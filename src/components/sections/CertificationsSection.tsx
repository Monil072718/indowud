"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { useTranslations } from "next-intl";


export default function CertificationsSection() {
  const t = useTranslations("CertificationsSection");

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-300 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-300 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-8"
          >
            <div className="w-32 h-32 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-transparent border-t-rose-400 border-r-teal-400 rounded-full"
              />
              <div className="absolute inset-4 bg-gradient-to-br from-rose-100 to-teal-100 rounded-full flex items-center justify-center">
                <Leaf className="w-12 h-12 text-teal-600" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-800 mb-6 italic"
          >
            {t("headingLine1")}
            <br />
            <span className="text-teal-600">{t("headingLine2")}</span>
          </motion.h2>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6 text-center"
        >
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg text-gray-700 leading-relaxed">
            {t("para1")}
          </motion.p>
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg text-gray-700 leading-relaxed">
            {t("para2")}
          </motion.p>
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg text-gray-700 leading-relaxed">
            {t("para3")}
          </motion.p>
        </motion.div>


      </div>

      {/* Bottom spacing for footer */}
      <div className="mb-16 md:mb-24"></div>
    </section>
  );
}
