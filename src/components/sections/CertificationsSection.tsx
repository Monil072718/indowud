"use client";

import { motion } from "framer-motion";
import { Award, Leaf, Shield, CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    { name: "CII Certified", icon: Award },
    { name: "GreenPro Ecolabel", icon: Leaf },
    { name: "EDO Verified", icon: Shield },
    { name: "Sustainable Product", icon: CheckCircle }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-300 rounded-full blur-3xl" />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring", stiffness: 100 }} className="flex justify-center mb-8">
            <div className="w-32 h-32 relative">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-transparent border-t-rose-400 border-r-teal-400 rounded-full" />
              <div className="absolute inset-4 bg-gradient-to-br from-rose-100 to-teal-100 rounded-full flex items-center justify-center">
                <Leaf className="w-12 h-12 text-teal-600" />
              </div>
            </div>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 italic">
            CII has Certified Indowud nfc as Sustainable Green Product
            <br />
            <span className="text-teal-600">and has awarded with GreenPro ecolabel</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -15, rotateY: 10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 h-full flex flex-col items-center justify-center">
                <motion.div whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.2 }} transition={{ duration: 0.5 }} className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <cert.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">{cert.name}</h3>
              </div>

              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }} className="absolute -top-3 -right-3 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} className="max-w-4xl mx-auto space-y-6 text-center">
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg text-gray-700 leading-relaxed">
            A product which bears GreenPro Ecolabel has lower environment impact and contributes significantly for enhancing the performance of Green Buildings and Green Companies.
          </motion.p>
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg text-gray-700 leading-relaxed">
            GreenPro Ecolabel is accredited by Global Ecolabelling Network (GEN) through GENICES – GEN's Internationally Coordinated Ecolabelling System.
          </motion.p>
          <motion.p whileHover={{ scale: 1.02 }} className="text-lg text-gray-700 leading-relaxed">
            An Environmental Product Declaration (EPD) is a Type III environmental declaration that quantifies environmental information about the life cycle of a product. It is generally done to understand the environmental impact of the product and demonstrate a commitment to limiting environmental impacts.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} whileHover={{ scale: 1.05 }} className="relative h-64">
            <img src="https://images.pexels.com/photos/1268975/pexels-photo-1268975.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Nature" className="w-full h-full object-cover shadow-xl" />
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-rose-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} whileHover={{ scale: 1.05 }} className="relative h-64">
            <img src="https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Craftsmanship" className="w-full h-full object-cover shadow-xl" />
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-rose-500 to-teal-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
