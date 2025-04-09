import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import BenefitsSection from '@/components/benefits-section';
import PricingSection from '@/components/pricing-section';
import FaqSection from '@/components/faq-section';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
