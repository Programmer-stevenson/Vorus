import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';

const testimonials = [
  {
    quote: "VORUS isn't just a fragrance—it's an attitude. It commands attention without saying a word.",
    author: "Marcus Chen",
    title: "GQ Magazine",
    image: "https://images.unsplash.com/photo-1618008797651-3eb256213400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM5NTkwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    quote: "The perfect balance of sophistication and raw magnetism. This is what modern luxury smells like.",
    author: "James Sullivan",
    title: "Esquire",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    quote: "A masterclass in olfactory design. VORUS Midnight is my go-to for evening events.",
    author: "Alexander Noir",
    title: "Vogue Homme",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#1F1F22] to-[#0C0C0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 font-playfair">Critical Acclaim</h2>
          <p className="text-xl text-[#A9A9AE] tracking-wide">
            What they're saying
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Profile image */}
              <div className="mb-8 mx-auto w-32 h-32 rounded-full overflow-hidden border-2 border-[#A9A9AE]/30">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Quote */}
              <blockquote className="mb-8">
                <p className="text-xl md:text-2xl italic leading-relaxed font-playfair">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-lg mb-1 tracking-wide">{testimonial.author}</p>
                <p className="text-sm text-[#A9A9AE] tracking-widest uppercase">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
