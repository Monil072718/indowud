import { motion } from 'framer-motion';

export default function BenefitsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-700"
            >
              <img
                src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Wood panels"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>

            <div className="relative h-full flex items-center justify-center p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white space-y-6"
              >
                <motion.p
                  whileHover={{ x: 10 }}
                  className="text-lg leading-relaxed"
                >
                  Natural wood-like appearance allows it to print, paint, stain, varnish, overlay veneer/laminate, CNC routing, etc. The high content of natural fibres gives better physical and mechanical properties like product density, strength and screw holding.
                </motion.p>

                <motion.p
                  whileHover={{ x: 10 }}
                  className="text-lg leading-relaxed"
                >
                  Its thermoforming ability creates opportunities for the Architects, Designers and furniture factories to convert imaginations from drawing boards to realities.
                </motion.p>

                <motion.p
                  whileHover={{ x: 10 }}
                  className="text-sm italic opacity-90"
                >
                  Indowud nfc is not plywood, or wood fibre board. Wood fibre boards have wood particles, while nfc board has only agricultural husk.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-5 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full"
            >
              <img
                src="https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Factory"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex items-end"
            >
              <div className="p-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 border border-white/30"
                >
                  <p className="text-white text-sm font-light">
                    Sustainable manufacturing process ensuring quality and environmental responsibility
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                x: [0, 100, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-teal-500 opacity-20 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
