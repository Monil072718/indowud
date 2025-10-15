"use client";

import { motion } from "framer-motion";
import { Bug, Droplets, Flame, Wind, Volume2, Beaker, Wrench, Settings, Leaf } from "lucide-react";

const features = [
  { icon: Bug, title: "Termite Proof", description: "Complete protection against termite damage" },
  { icon: Droplets, title: "Water Proof", description: "Resistant to water and moisture" },
  { icon: Flame, title: "Flame Retardant", description: "Fire-resistant properties for safety" },
  { icon: Wind, title: "Smoke Suppressant", description: "Minimal smoke emission" },
  { icon: Volume2, title: "Sound Absorption", description: "Excellent acoustic properties" },
  { icon: Beaker, title: "No Harmful Ingredients", description: "Safe and non-toxic composition" },
  { icon: Wrench, title: "Good Screw Holding", description: "Superior mechanical strength" },
  { icon: Settings, title: "Easily Machinable", description: "Easy to cut, drill and shape" },
  { icon: Leaf, title: "Zero Formaldehyde", description: "Eco-friendly with no emissions" }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/164537/pexels-photo-164537.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 italic">
            A Pioneering Wood That Lets You Breathe Freely
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">Indowud nfc is a sustainable eco-friendly panel product for all exterior & interior furnishing and joinery applications.</span>{" "}
            It is a zero-wood product, a superior alternative to tropical wood and wood-based panels like plywood, MDF/HDF in many ways.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {features.slice(0, 5).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }} className="w-20 h-20 mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow">
                <feature.icon className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.slice(5).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 5) * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }} className="w-20 h-20 mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow">
                <feature.icon className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
