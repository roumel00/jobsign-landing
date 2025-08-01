import PageLayout from "@/components/layout/page-layout";
import HeroSection from "@/components/landing/hero-section";
import PainPointsSection from "@/components/landing/pain-points-section";
import FeaturesSection from "@/components/landing/features-section";
import TrustSection from "@/components/landing/trust-section";
import CTASection from "@/components/landing/cta-section";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <TrustSection />
      <CTASection />
    </PageLayout>
  );
}
