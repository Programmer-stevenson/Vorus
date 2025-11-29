import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';
import { useState, useEffect } from 'react';

const images = ['/icey.jpg', '/norus-green.jpg', '/flames1.jpg'];

export function CTASection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-40 px-4 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0D] via-[#1F1F22] to-[#0C0C0D]"></div>
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(169,169,174,0.1)_0%,_transparent_70%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Floating bottle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 w-full"
        >
          <motion.div
            animate={isMobile ? {} : { y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative mx-auto w-fit"
          >
            {/* Image container with crossfade */}
            <div className="relative w-[65vw] sm:w-[70vw] md:w-[50vw] max-w-[40rem] aspect-square mx-auto">
              <AnimatePresence mode="wait">
                {images.map((src, index) => (
                  index === currentIndex && (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, scale: isMobile ? 1 : 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: isMobile ? 1 : 1.05 }}
                      transition={{ 
                        duration: isMobile ? 0.4 : 1.2, 
                        ease: isMobile ? "easeOut" : [0.22, 1, 0.36, 1]
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <ImageWithFallback
                        src={src}
                        alt="VORUS Bottle"
                        className="max-w-full max-h-full rounded-full object-contain drop-shadow-[0_0_60px_rgba(169,169,174,0.3)]"
                        style={{ 
                          marginLeft: src === '/flames1.jpg' ? '8px' : '0'
                        }}
                      />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-[#A9A9AE]/20 to-transparent blur-3xl"></div>
          </motion.div>
        </motion.div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl mb-8 font-playfair">
            Discover Your<br />Signature Scent
          </h2>
          <p className="text-xl md:text-2xl text-[#A9A9AE] mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the collection in-store or order online with complimentary samples.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-[#ECECEC] text-[#0C0C0D] tracking-widest hover:bg-[#A9A9AE] transition-all duration-300"
            >
              EXPLORE COLLECTION
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-transparent metallic-border text-[#ECECEC] tracking-widest hover:bg-[#1F1F22] transition-all duration-300"
            >
              FIND A STORE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}