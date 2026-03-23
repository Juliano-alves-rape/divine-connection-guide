import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import TransformationSection from "@/components/TransformationSection";
import AuthorSection from "@/components/AuthorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FaqSection from "@/components/FaqSection";

const Index = () => (
  <main className="overflow-hidden">
    <HeroSection />
    <EmotionalSection />
    <ProductSection />
    <BenefitsSection />
    <TransformationSection />
    <AuthorSection />
    <TestimonialsSection />
    <BonusSection />
    <OfferSection />
    <FaqSection />
    <FinalCtaSection />
    <footer className="py-8 bg-foreground text-center">
      <p className="text-cream/60 font-body text-sm">
        © 2026 À Mesa — Todos os direitos reservados
      </p>
    </footer>
  </main>
);

export default Index;
