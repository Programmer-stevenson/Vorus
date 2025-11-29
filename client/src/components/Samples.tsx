import { motion } from 'framer-motion';
import { Gift, Sparkles, Truck, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export function Samples() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    {
      icon: Gift,
      title: '2 Samples Monthly',
      description: 'Receive a curated 2ml vial each week'
    },
    {
      icon: Sparkles,
      title: 'Exclusive Scents',
      description: 'Early access to limited editions'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Delivered to your door weekly'
    },
    {
      icon: RefreshCw,
      title: 'Cancel Anytime',
      description: 'No commitment, pause or cancel'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0C0C0D]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0D] via-[#131615] to-[#0C0C0D]" />
      
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(52,140,80,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="px-4 md:px-6 py-2 border border-[#4ade80]/30 text-[#4ade80] text-xs tracking-[0.3em] uppercase rounded-full">
              Weekly Discovery
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6">
            <span className="chrome-text">Sample</span>{' '}
            <span className="text-[#ECECEC]">Club</span>
          </h2>
          
          <p className="text-[#A9A9AE] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover your signature scent. Each week, receive a hand-selected 2ml sample 
            from our collection delivered straight to your door.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#1F1F22] to-[#161618] border border-[#2a2a2d] rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4ade80] to-transparent" />
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-playfair text-[#ECECEC]">$14.99</span>
                  <span className="text-[#A9A9AE] text-lg">/month</span>
                </div>
                <p className="text-[#A9A9AE]">2 weekly samples • 2ml each • Free shipping</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-[#4ade80]" />
                    </div>
                    <h4 className="text-[#ECECEC] font-medium mb-1 text-sm md:text-base">{benefit.title}</h4>
                    <p className="text-[#666] text-xs md:text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-[#0C0C0D] border border-[#2a2a2d] rounded-lg text-[#ECECEC] placeholder-[#666] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#4ade80] text-[#0C0C0D] font-medium tracking-widest rounded-lg hover:bg-[#22c55e] transition-colors whitespace-nowrap"
                >
                  {isSubmitted ? 'SUBSCRIBED!' : 'SUBSCRIBE NOW'}
                </motion.button>
              </form>

              <p className="text-[#666] text-xs text-center mt-6">
                Cancel anytime. First box ships within 3-5 business days. 
                Credit toward full-size bottles with every sample.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-[#A9A9AE] mt-12 text-sm tracking-widest"
        >
          FIND YOUR SIGNATURE SCENT — ONE SAMPLE AT A TIME
        </motion.p>
      </div>
    </section>
  );
}