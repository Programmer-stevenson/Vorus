import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const links = {
    explore: ['About VORUS', 'The Collection', 'Fragrance Notes', 'Store Locator'],
    support: ['Contact Us', 'Shipping & Returns', 'FAQs', 'Privacy Policy'],
  };

  return (
    <footer className="bg-[#0C0C0D] border-t border-[#A9A9AE]/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-4xl mb-4 chrome-text font-playfair">
              VORUS
            </h3>
            <p className="text-[#A9A9AE] leading-relaxed mb-6 max-w-md">
              Crafting luxury fragrances for the modern connoisseur since 2025. 
              Experience the essence of midnight.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' }
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center metallic-border hover:border-[#A9A9AE] transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-[#A9A9AE] group-hover:text-[#ECECEC] transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links - Explore */}
          <div>
            <h4 className="text-lg mb-6 tracking-widest">EXPLORE</h4>
            <ul className="space-y-3">
              {links.explore.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#A9A9AE] hover:text-[#ECECEC] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Support */}
          <div>
            <h4 className="text-lg mb-6 tracking-widest">SUPPORT</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#A9A9AE] hover:text-[#ECECEC] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#A9A9AE]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#A9A9AE]">
            © 2025 VORUS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#A9A9AE] hover:text-[#ECECEC] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-[#A9A9AE] hover:text-[#ECECEC] transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
