import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';
import { ShoppingBag, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from './Cart';

// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export function Hero() {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const isMobile = useIsMobile();
  
  // Use shared cart context instead of local state
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    addToCart, 
    updateQuantity, 
    removeFromCart, 
    cartTotal, 
    cartCount 
  } = useCart();
  
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll state for navbar
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transformation cycle
  useEffect(() => {
    const cycle = () => {
      // Start transformation - swirls begin
      setIsTransforming(true);
      
      // Flash and swap at peak
      setTimeout(() => {
        if (!isMobile) setShowFlash(true);
        setTimeout(() => {
          setShowSecondImage((prev) => !prev);
          setShowFlash(false);
        }, isMobile ? 50 : 150);
      }, isMobile ? 800 : 1500);
      
      // End transformation
      setTimeout(() => {
        setIsTransforming(false);
      }, isMobile ? 1200 : 2200);
    };

    const initialDelay = setTimeout(cycle, 4000);
    const interval = setInterval(cycle, 7000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pb-20">
      {/* Navigation Bar - Transparent, solid on scroll */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0C0C0D]/90 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div id='HOME' className="text-3xl chrome-text tracking-wider font-playfair">
          VORUS
        </div>
        
        {/* Right side - Nav links and icons */}
        <div className="flex items-center gap-8 md:gap-12">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-12 text-sm tracking-widest">
            <a href="#HOME" className="text-[#ECECEC] hover:text-[#A9A9AE] transition-colors duration-300">HOME</a>
            <a href="#collection" className="text-[#ECECEC] hover:text-[#A9A9AE] transition-colors duration-300">COLLECTION</a>
            <a href="#stores" className="text-[#ECECEC] hover:text-[#A9A9AE] transition-colors duration-300">STORES</a>
          </div>

          {/* Cart Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative text-[#ECECEC] hover:text-[#A9A9AE] transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#4ade80] text-[#0C0C0D] text-xs rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-[#ECECEC] hover:text-[#A9A9AE] transition-colors duration-300"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#0C0C0D] border-l border-[#2a2a2d] z-[70] flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#2a2a2d]">
                <span className="text-xl font-playfair chrome-text">Menu</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#A9A9AE] hover:text-[#ECECEC] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col p-6 gap-6">
                <a 
                  href="#collection" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg tracking-widest text-[#ECECEC] hover:text-[#4ade80] transition-colors duration-300"
                >
                  COLLECTION
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg tracking-widest text-[#ECECEC] hover:text-[#4ade80] transition-colors duration-300"
                >
                  ABOUT
                </a>
                <a 
                  href="#stores" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg tracking-widest text-[#ECECEC] hover:text-[#4ade80] transition-colors duration-300"
                >
                  STORES
                </a>
              </div>

              {/* Menu Footer */}
              <div className="mt-auto p-6 border-t border-[#2a2a2d]">
                <p className="text-sm text-[#A9A9AE] mb-4">Follow us</p>
                <div className="flex gap-4 text-[#ECECEC]">
                  <a href="#" className="hover:text-[#4ade80] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#4ade80] transition-colors">Twitter</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsCartOpen(false)}
            />
            
            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-[#0C0C0D] border-l border-[#2a2a2d] z-[70] flex flex-col"
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#2a2a2d]">
                <span className="text-xl font-playfair chrome-text">Your Cart ({cartCount})</span>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-[#A9A9AE] hover:text-[#ECECEC] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="w-16 h-16 text-[#2a2a2d] mb-4" />
                    <p className="text-[#A9A9AE] mb-2">Your cart is empty</p>
                    <p className="text-sm text-[#666]">Add some products to get started</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex gap-4 p-4 bg-[#1F1F22] rounded-lg"
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#2a2a2d] flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[#ECECEC] font-medium truncate">{item.name}</h4>
                          <p className="text-[#4ade80] font-medium">${item.price}</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-7 h-7 rounded-full border border-[#3a3a3d] flex items-center justify-center text-[#A9A9AE] hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-[#ECECEC] w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 rounded-full border border-[#3a3a3d] flex items-center justify-center text-[#A9A9AE] hover:border-[#4ade80] hover:text-[#4ade80] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-[#A9A9AE] hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-[#2a2a2d] space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-[#A9A9AE]">Subtotal</span>
                    <span className="text-[#ECECEC] font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-[#666]">Shipping and taxes calculated at checkout</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#4ade80] text-[#0C0C0D] font-medium tracking-widest hover:bg-[#22c55e] transition-colors"
                  >
                    CHECKOUT
                  </motion.button>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full py-3 text-[#A9A9AE] hover:text-[#ECECEC] transition-colors text-sm tracking-widest"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0D] via-[#1F1F22] to-[#0C0C0D]"></div>

      {/* Main Content - Single Column Centered */}
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          {/* Edition Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="px-4 md:px-6 py-2 metallic-border text-[#A9A9AE] text-xs tracking-[0.3em] uppercase">
              2025 Signature Collection
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 md:mb-6 leading-none tracking-tight font-playfair">
              VORUS
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-2xl md:text-4xl tracking-wide chrome-text font-playfair">
              The Essence of the Forest
            </p>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#A9A9AE] to-transparent mx-auto mt-4"></div>
          </motion.div>

          {/* Hero Image - Between heading and description */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative mb-8 md:mb-12"
          >
            {/* Bouncing Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3.5,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              {/* Ambient base glow - foresty green, no blur on mobile */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isMobile ? 'none' : 'radial-gradient(ellipse at center, rgba(34,85,51,0.25) 0%, transparent 60%)',
                  transform: 'scale(1.4)',
                  filter: isMobile ? 'none' : 'blur(40px)',
                }}
              />

              {/* MOBILE: Glow effects only during transformation */}
              {isMobile && isTransforming && (
                <>
                  {/* Pulsing outer ring */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: [0, 0.7, 0.9, 0.7, 0],
                      scale: [1.05, 1.2, 1.25, 1.2, 1.05],
                    }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeInOut",
                      times: [0, 0.25, 0.5, 0.75, 1]
                    }}
                    style={{
                      background: 'radial-gradient(ellipse at center, transparent 50%, rgba(52,140,80,0.4) 70%, transparent 85%)',
                    }}
                  />
                  
                  {/* Inner bright core */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0, 0.6, 0.8, 0.6, 0],
                      scale: [1, 1.08, 1.12, 1.08, 1],
                    }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeInOut",
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(120,200,140,0.5) 0%, rgba(80,160,100,0.3) 30%, transparent 55%)',
                    }}
                  />

                  {/* Rotating gradient ring 1 */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    initial={{ rotate: 0, opacity: 0, scale: 1.1 }}
                    animate={{
                      rotate: 360,
                      opacity: [0, 0.7, 0.7, 0],
                      scale: [1.1, 1.2, 1.2, 1.25],
                    }}
                    transition={{ 
                      rotate: { duration: 1.2, ease: "easeInOut" },
                      opacity: { duration: 1.2, times: [0, 0.2, 0.8, 1] },
                      scale: { duration: 1.2, ease: "easeOut" }
                    }}
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0%, rgba(100,180,120,0.5) 20%, transparent 40%, rgba(80,160,100,0.5) 60%, transparent 80%, rgba(120,200,140,0.5) 100%)',
                    }}
                  />

                  {/* Counter-rotating ring 2 */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    initial={{ rotate: 0, opacity: 0, scale: 1.05 }}
                    animate={{
                      rotate: -270,
                      opacity: [0, 0.5, 0.5, 0],
                      scale: [1.05, 1.12, 1.12, 1.15],
                    }}
                    transition={{ 
                      rotate: { duration: 1.2, ease: "easeInOut" },
                      opacity: { duration: 1.2, times: [0, 0.25, 0.75, 1] },
                      scale: { duration: 1.2, ease: "easeOut" }
                    }}
                    style={{
                      background: 'conic-gradient(from 180deg, transparent 0%, rgba(70,150,90,0.4) 15%, transparent 30%, rgba(90,170,110,0.4) 45%, transparent 60%, rgba(60,140,80,0.4) 75%, transparent 90%)',
                    }}
                  />

                  {/* Shimmer particles - 4 simple dots orbiting */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={`mobile-particle-${i}`}
                      className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full pointer-events-none"
                      initial={{ rotate: i * 90, opacity: 0, scale: 0.5 }}
                      animate={{
                        rotate: i * 90 + 180,
                        opacity: [0, 0.9, 0.9, 0],
                        scale: [0.5, 1, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.2,
                        times: [0, 0.2, 0.8, 1],
                        ease: "easeInOut",
                      }}
                      style={{
                        transformOrigin: '160px center',
                        background: 'rgba(150,220,160,0.9)',
                        boxShadow: '0 0 6px rgba(100,180,120,0.8)',
                      }}
                    />
                  ))}

                  {/* Flash burst at peak */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: [0, 0, 0.9, 0.5, 0],
                      scale: [0.9, 0.9, 1.15, 1.25, 1.3],
                    }}
                    transition={{ 
                      duration: 1.2,
                      times: [0, 0.4, 0.5, 0.6, 1],
                      ease: "easeOut"
                    }}
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(220,255,220,0.85) 0%, rgba(150,220,160,0.5) 30%, rgba(80,160,100,0.2) 50%, transparent 65%)',
                    }}
                  />

                  {/* Secondary flash ripple */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0, 0, 0.6, 0.3, 0],
                      scale: [1, 1, 1.2, 1.4, 1.5],
                    }}
                    transition={{ 
                      duration: 1.2,
                      times: [0, 0.45, 0.55, 0.7, 1],
                      ease: "easeOut"
                    }}
                    style={{
                      background: 'radial-gradient(ellipse at center, transparent 40%, rgba(100,180,120,0.4) 55%, transparent 70%)',
                    }}
                  />
                </>
              )}

              {/* DESKTOP ONLY: Swirl Ring 1 - Outer (foresty green) */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    rotate: isTransforming ? 360 : 0,
                    scale: isTransforming ? 1.3 : 1.1,
                    opacity: isTransforming ? 0.8 : 0,
                  }}
                  transition={{
                    rotate: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 0.8, ease: "easeOut" },
                    opacity: { duration: 0.4 },
                  }}
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(52,140,80,0.6) 25%, transparent 50%, rgba(72,160,100,0.6) 75%, transparent 100%)',
                    borderRadius: '50%',
                    filter: 'blur(8px)',
                  }}
                />
              )}

              {/* DESKTOP ONLY: Swirl Ring 2 - Middle (counter-rotate) */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    rotate: isTransforming ? -540 : 0,
                    scale: isTransforming ? 1.2 : 1.05,
                    opacity: isTransforming ? 0.7 : 0,
                  }}
                  transition={{
                    rotate: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 0.8, ease: "easeOut" },
                    opacity: { duration: 0.4 },
                  }}
                  style={{
                    background: 'conic-gradient(from 180deg, transparent 0%, rgba(60,150,90,0.5) 20%, transparent 40%, rgba(80,170,110,0.5) 60%, transparent 80%, rgba(50,130,75,0.5) 100%)',
                    borderRadius: '50%',
                    filter: 'blur(6px)',
                  }}
                />
              )}

              {/* DESKTOP ONLY: Swirl Ring 3 - Inner (fast spin) */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    rotate: isTransforming ? 720 : 0,
                    scale: isTransforming ? 1.1 : 1,
                    opacity: isTransforming ? 0.9 : 0,
                  }}
                  transition={{
                    rotate: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 0.6, ease: "easeOut" },
                    opacity: { duration: 0.3 },
                  }}
                  style={{
                    background: 'conic-gradient(from 90deg, transparent 0%, rgba(100,180,120,0.7) 15%, transparent 30%, rgba(120,200,140,0.7) 45%, transparent 60%, rgba(90,170,110,0.7) 75%, transparent 90%)',
                    borderRadius: '50%',
                    filter: 'blur(4px)',
                  }}
                />
              )}

              {/* DESKTOP ONLY: Orbiting particles (green) */}
              {!isMobile && [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none"
                  animate={{
                    rotate: isTransforming ? 360 + (i * 60) : i * 60,
                    opacity: isTransforming ? [0, 1, 1, 0] : 0,
                  }}
                  transition={{
                    rotate: { duration: 1.5, ease: "easeInOut" },
                    opacity: { duration: 1.5, times: [0, 0.2, 0.8, 1] },
                  }}
                  style={{
                    transformOrigin: `${150 + (i * 12)}px center`,
                    background: `radial-gradient(circle, rgba(${80 + i * 10},${160 + i * 8},${100 + i * 5},0.9) 0%, transparent 70%)`,
                    boxShadow: `0 0 ${10 + i * 2}px rgba(52,140,80,0.8)`,
                    filter: 'blur(1px)',
                  }}
                />
              ))}

              {/* DESKTOP ONLY: Energy buildup glow (green) */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: isTransforming ? [0, 0.6, 0.8, 0.6] : 0,
                    scale: isTransforming ? [1, 1.1, 1.2, 1.15] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    times: [0, 0.3, 0.7, 1],
                    ease: "easeInOut",
                  }}
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(52,140,80,0.4) 0%, rgba(34,100,60,0.2) 40%, transparent 70%)',
                    filter: 'blur(30px)',
                  }}
                />
              )}

              {/* DESKTOP ONLY: FLASH - bright green-white burst */}
              {!isMobile && (
                <AnimatePresence>
                  {showFlash && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1.6 }}
                      exit={{ opacity: 0, scale: 2 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(220,255,220,0.95) 0%, rgba(150,220,160,0.7) 30%, rgba(52,140,80,0.3) 60%, transparent 80%)',
                        filter: 'blur(10px)',
                      }}
                    />
                  )}
                </AnimatePresence>
              )}

              {/* First image - norus-dark.jpg */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  opacity: showSecondImage ? 0 : 1,
                  scale: showSecondImage ? (isMobile ? 0.92 : 0.9) : 1,
                  rotate: showSecondImage ? (isMobile ? -3 : 0) : 0,
                }}
                transition={{ 
                  duration: isMobile ? 0.6 : 0.3, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <ImageWithFallback
                  src="/norus-dark.jpg"
                  alt="VORUS Noir Bottle"
                  className="w-[20rem] md:w-[28rem] h-[20rem] md:h-[28rem] rounded-full object-cover"
                />
              </motion.div>

              {/* Second image - norus-green.jpg */}
              <motion.div
                className="flex items-center justify-center"
                animate={{
                  opacity: showSecondImage ? 1 : 0,
                  scale: showSecondImage ? 1 : (isMobile ? 1.08 : 1.1),
                  rotate: showSecondImage ? 0 : (isMobile ? 3 : 0),
                }}
                transition={{ 
                  duration: isMobile ? 0.6 : 0.3, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <ImageWithFallback
                  src="/norus-green.jpg"
                  alt="VORUS Noir Bottle"
                  className="w-[20rem] md:w-[28rem] h-[20rem] md:h-[28rem] rounded-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-xl text-[#A9A9AE] leading-relaxed max-w-lg mb-8 md:mb-12"
          >
            A deep eau de parfum built on smoked woods, bright pepper spice, and glowing amber. Created for those who carry the strength of the forest after dark.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm mb-8 md:mb-12"
          >
            <div>
              <p className="text-[#A9A9AE] mb-1 tracking-widest text-xs md:text-sm">CONCENTRATION</p>
              <p className="text-[#ECECEC]">Eau de Parfum</p>
            </div>
            <div>
              <p className="text-[#A9A9AE] mb-1 tracking-widest text-xs md:text-sm">VOLUME</p>
              <p className="text-[#ECECEC]">100ml / 3.4 fl oz</p>
            </div>
            <div>
              <p className="text-[#A9A9AE] mb-1 tracking-widest text-xs md:text-sm">LONGEVITY</p>
              <p className="text-[#ECECEC]">8-12 Hours</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addToCart({
                id: 'vorus-noir',
                name: 'VORUS Noir',
                price: 185,
                image: '/norus-dark.jpg'
              })}
              className="px-8 md:px-10 py-4 bg-[#ECECEC] text-[#0C0C0D] tracking-widest hover:bg-[#A9A9AE] transition-all duration-300 group relative overflow-hidden text-sm md:text-base"
            >
              <span className="relative z-10">SHOP NOW — $185</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 md:px-10 py-4 bg-transparent metallic-border text-[#ECECEC] tracking-widest hover:bg-[#1F1F22] transition-all duration-300 text-sm md:text-base"
            >
              DISCOVER NOTES
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0D] to-transparent pointer-events-none"></div>
    </section>
  );
}