import { Hero } from './components/Hero';
import { FragranceNotes } from './components/FragranceNotes';
import { ProductShowcase } from './components/ProductShowcase';
import { LifestyleSection } from './components/LifestyleSection';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Samples } from './components/Samples';
import { CartProvider } from './components/Cart';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0C0C0D] text-[#ECECEC]">
        <Hero />
        <FragranceNotes />
        <ProductShowcase />
        <Samples />
        <LifestyleSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </CartProvider>
  );
}