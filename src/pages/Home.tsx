import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import WhoSection from "@/components/features/WhoSection";
import PrivacySection from "@/components/features/PrivacySection";
import ScreenshotsSection from "@/components/features/ScreenshotsSection";
import CTASection from "@/components/features/CTASection";
import StarField from "@/components/features/StarField";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-void overflow-hidden">
      <StarField />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhoSection />
        <ScreenshotsSection />
        <PrivacySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
