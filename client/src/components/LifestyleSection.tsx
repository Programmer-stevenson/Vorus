import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';

export function LifestyleSection() {
  return (
    <section className="relative h-screen md:h-[80vh] lg:max-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688387786503-705314ebeb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB1cmJhbiUyMG5pZ2h0JTIwY2l0eXxlbnwxfHx8fDE3NjQwNDY5NDd8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Urban night scene"
          className="w-full h-full object-cover object-center md:object-[center_30%]"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0D]/80 via-[#0C0C0D]/50 to-transparent"></div>
      </div>

      {/* Quote overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        <motion.blockquote
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-left"
        >
          <p className="text-4xl md:text-6xl lg:text-7xl mb-8 italic leading-tight font-playfair">
            "Confidence is the quiet storm within."
          </p>
          <footer className="text-xl md:text-2xl text-[#A9A9AE] tracking-widest">
            — THE VORUS PHILOSOPHY
          </footer>
        </motion.blockquote>
      </div>

      {/* Subtle grain/texture overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      ></div>
    </section>
  );
}