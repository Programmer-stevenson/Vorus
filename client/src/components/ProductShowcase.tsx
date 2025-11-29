import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';
import { useState, useEffect } from 'react';
import { useCart } from './Cart';

const products = [
  {
    id: 'vorus-midnight',
    name: 'VORUS Midnight',
    subtitle: 'Limited Edition',
    description: 'A wave of icy freshness flowing into a darker heart of smoldering amber and polished leather.',
    price: 210,
    images: ['/icey.jpg', '/vorus-hero2.jpg'],
    accentColor: '#60a5fa'
  },
  {
    id: 'vorus-noir',
    name: 'VORUS Noir',
    subtitle: 'The Original',
    description: 'Citrus spark meets grounded spice, sinking into the deep earthiness of midnight amber.',
    price: 185,
    images: ['/norus-green.jpg', '/norus-dark.jpg'],
    accentColor: '#4ade80'
  },
  {
    id: 'vorus-ember',
    name: 'VORUS Ember',
    subtitle: 'Warm & Spiced',
    description: 'A warmer interpretation of fiery leather, touch of heat, and creamy vanilla.',
    price: 195,
    images: ['/flames1.jpg', '/vorus-ember.jpg'],
    accentColor: '#f87171'
  }
];

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setActiveIndex(currentIndex);
      
      setTimeout(() => {
        setActiveIndex(null);
      }, 3000);
      
      currentIndex = (currentIndex + 1) % products.length;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentImage = (index: number) => {
    if (hoveredIndex === index) {
      return products[index].images[1];
    }
    if (activeIndex === index) {
      return products[index].images[1];
    }
    return products[index].images[0];
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  };

  return (
    <section id="collection" className="py-32 px-4 bg-[#0C0C0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 font-playfair">The Collection</h2>
          <p className="text-xl text-[#A9A9AE] tracking-wide">
            Choose your signature
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden mb-8 aspect-square bg-[#1F1F22] metallic-border">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: getCurrentImage(index) === product.images[0] ? 1 : 0,
                    scale: getCurrentImage(index) === product.images[0] ? 1 : 1.05,
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <ImageWithFallback
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: getCurrentImage(index) === product.images[1] ? 1 : 0,
                    scale: getCurrentImage(index) === product.images[1] ? 1 : 1.05,
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <ImageWithFallback
                    src={product.images[1]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#A9A9AE]/0 via-transparent to-[#A9A9AE]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(169,169,174,0)] group-hover:shadow-[inset_0_0_60px_rgba(169,169,174,0.3)] transition-shadow duration-500"></div>
              </div>
              
              <div className="text-center">
                <motion.p 
                  className="text-sm tracking-[0.3em] mb-2 uppercase"
                  animate={{
                    color: (activeIndex === index || hoveredIndex === index) 
                      ? product.accentColor 
                      : '#A9A9AE'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {product.subtitle}
                </motion.p>
                <motion.h3 
                  className="text-3xl mb-4 tracking-wide font-playfair"
                  animate={{
                    color: (activeIndex === index || hoveredIndex === index) 
                      ? product.accentColor 
                      : '#ECECEC'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {product.name}
                </motion.h3>
                <motion.p 
                  className="mb-6 leading-relaxed"
                  animate={{
                    color: (activeIndex === index || hoveredIndex === index) 
                      ? product.accentColor 
                      : '#A9A9AE'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {product.description}
                </motion.p>
                <motion.p 
                  className="text-2xl mb-6"
                  animate={{
                    color: (activeIndex === index || hoveredIndex === index) 
                      ? product.accentColor 
                      : '#ECECEC'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  ${product.price}
                </motion.p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(product)}
                  animate={{
                    borderColor: (activeIndex === index || hoveredIndex === index) 
                      ? product.accentColor 
                      : '#A9A9AE',
                    color: (activeIndex === index || hoveredIndex === index) 
                      ? product.accentColor 
                      : '#ECECEC'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="px-8 py-3 bg-transparent border tracking-widest hover:bg-[#1F1F22] transition-all duration-300"
                >
                  ADD TO CART
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}