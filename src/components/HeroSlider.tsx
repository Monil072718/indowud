import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "If you love something it will work",
    subtitle: "That's the real design mantra",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
  },
  {
    title: "Innovation meets elegance",
    subtitle: "Creating tomorrow's designs today",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920"
  },
  {
    title: "Where creativity comes alive",
    subtitle: "Designing the future of spaces",
    image: "https://images.pexels.com/photos/1647776/pexels-photo-1647776.jpeg?auto=compress&cs=tinysrgb&w=1920"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-100"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-rose-600 mb-4 italic leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold text-rose-600 italic"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl"
            >
              <div className="relative">
                <motion.img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Workspace"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-48">
              <svg viewBox="0 0 1440 320" className="w-full h-full">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  fill="#d2a679"
                  d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-rose-600' : 'w-2 bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
