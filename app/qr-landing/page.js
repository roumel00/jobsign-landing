import PageLayout from "@/components/layout/page-layout";
import FunnelHeroSection from "@/components/funnel/hero-section";
import FounderStorySection from "@/components/funnel/founder-story-section";
import FeatureHighlightsSection from "@/components/funnel/feature-highlights-section";
import SocialProofSection from "@/components/funnel/social-proof-section";
import LeadCaptureSection from "@/components/funnel/lead-capture-section";
import UrgencyFooter from "@/components/funnel/urgency-footer";

export default function FunnelPage() {
  return (
    <PageLayout>
      <FunnelHeroSection />
      <FounderStorySection />
      <FeatureHighlightsSection />
      <SocialProofSection />
      <LeadCaptureSection />
      <UrgencyFooter />
    </PageLayout>
  );
} 