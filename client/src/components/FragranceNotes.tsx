import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';
import { useState, useEffect } from 'react';

const notes = [
  {
    name: 'Bergamot',
    description: 'Citrus top note with vibrant, fresh energy',
    image: 'https://images.unsplash.com/photo-1758181839713-ce6068d79147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJnYW1vdCUyMGNpdHJ1c3xlbnwxfHx8fDE3NjQwNDY5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Black Pepper',
    description: 'Spicy heart with bold, masculine warmth',
    image: 'https://images.unsplash.com/photo-1649951806971-ad0e00408773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHNwaWNlfGVufDF8fHx8MTc2NDA0Njk0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Midnight Amber',
    description: 'Deep, resinous base with mysterious allure',
    image: 'https://images.unsplash.com/photo-1740819912820-6535ad66884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJlciUyMHJlc2lufGVufDF8fHx8MTc2NDA0Njk0N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Smoked Cedar',
    description: 'Woody foundation with refined, smoky character',
    image: 'https://images.unsplash.com/photo-1515446134809-993c501ca304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWRhciUyMHdvb2R8ZW58MXx8fHwxNzY0MDQ2OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function FragranceNotes() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % notes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#0C0C0D] to-[#1F1F22]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 font-playfair">Olfactory Symphony</h2>
          <p className="text-xl text-[#A9A9AE] tracking-wide">
            Four notes, infinite possibilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {notes.map((note, index) => (
            <motion.div
              key={note.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative glass-effect metallic-border p-6 group hover:border-[#A9A9AE]/40 transition-all duration-500"
            >
              {/* Cycling glow effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-inherit"
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  boxShadow: activeIndex === index 
                    ? '0 0 40px 10px rgba(25,42,86,0.6), 0 0 80px 20px rgba(30,50,100,0.4), inset 0 0 20px rgba(60,90,140,0.2)'
                    : '0 0 0px 0px rgba(25,42,86,0), 0 0 0px 0px rgba(30,50,100,0), inset 0 0 0px rgba(60,90,140,0)'
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                style={{
                  borderRadius: 'inherit',
                }}
              />

              <div className="relative overflow-hidden mb-6 h-48">
                <ImageWithFallback
                  src={note.image}
                  alt={note.name}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    activeIndex === index ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F22] to-transparent opacity-60"></div>
              </div>
              <h3 className="text-2xl mb-3 tracking-wider font-playfair">{note.name}</h3>
              <p className="text-[#A9A9AE] leading-relaxed">
                {note.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}