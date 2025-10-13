import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const navItems = ['Home', 'Corporate', 'NFC', 'Media', 'Contact Us'];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-sm fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-rose-600 tracking-wide">INDOWUD</div>
                <div className="text-xs text-gray-600 tracking-wider">DESIGN TECHNOLOGY</div>
              </div>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className={`text-sm font-medium transition-colors relative group ${
                  item === 'Home'
                    ? 'text-rose-600'
                    : 'text-gray-700 hover:text-rose-600'
                }`}
              >
                {item}
                {item === 'Home' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-500"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 text-sm font-medium transition-colors"
            >
              Request E-Brochure
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="hidden lg:flex items-center gap-3"
            >
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
