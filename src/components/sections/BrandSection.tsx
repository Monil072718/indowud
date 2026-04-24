"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const LETTERS = ["A", "H", "I", "M", "S", "A"];

export default function BrandSection() {
  const t = useTranslations("BrandSection");
  const [hovered, setHovered] = useState<number | null>(null);

  const AHIMSA = LETTERS.map((letter, i) => ({
    letter,
    meaning: t(`ahimsa.${i}`),
  }));

  const Tooltip = ({ text }: { text: string }) => (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.18 }}
      className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 mt-3 w-[14rem] sm:w-[16rem] rounded-md bg-teal-600 px-4 py-4 text-center shadow-xl ring-1 ring-black/10 z-50"
    >
      <p className="text-white text-sm font-semibold leading-snug">{text}</p>
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 block h-0 w-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-teal-600" />
    </motion.div>
  );

  return (
    <section className="relative py-20 overflow-x-hidden overflow-y-visible">
      {/* Top pink ribbon */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* MOBILE VIEW: Grid layout with permanent text */}
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto text-left">
          {AHIMSA.map((item, index) => {
            return (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                className="bg-white rounded-2xl shadow-xl p-6 flex items-center border border-gray-50 overflow-hidden relative"
              >
                {/* Decorative background circle */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-teal-50 to-rose-50 rounded-full opacity-50 pointer-events-none" />
                
                <div className="w-16 sm:w-20 flex-shrink-0 text-center relative z-10">
                  <span className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 to-amber-900">
                    {item.letter}
                  </span>
                </div>
                
                <div className="pl-5 border-l-2 border-teal-100 flex-1 relative z-10">
                  <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DESKTOP VIEW: Hover cards with tooltips */}
        <div className="hidden md:flex justify-center items-start gap-4 md:gap-8 flex-wrap">
          {AHIMSA.map((item, index) => (
            <motion.div
              key={`desktop-${index}`}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                rotate: 2,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
              className="relative group outline-none will-change-transform overflow-visible pb-16"
            >
              {/* Letter tile */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="relative bg-white w-24 h-32 md:w-32 md:h-40 flex items-center justify-center shadow-2xl group-hover:shadow-rose-300/50 transition-all duration-300 rounded overflow-hidden z-10"
              >
                {/* Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 20px rgba(244, 63, 94, 0.3)" }}
                />
                <span className={`relative z-20 font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 to-amber-900 ${index === 5 ? 'text-6xl md:text-8xl' : 'text-6xl'}`}>
                  {item.letter}
                </span>
              </motion.div>

              {/* underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 to-rose-600 origin-left rounded group-hover:shadow-lg group-hover:shadow-rose-500/50 transition-all duration-300"
              />

              {/* orbits */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-lg group-hover:shadow-teal-400/50 z-0"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-6 h-6 border border-rose-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-0"
              />

              {/* Tooltip */}
              <AnimatePresence>
                {hovered === index && <Tooltip text={item.meaning} />}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* caption */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-light text-gray-600 italic"
          >
            {t("caption")}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom teal ribbon */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500"
      />
    </section>
  );
}
