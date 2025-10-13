import HeroSlider from "@/components/sections/HeroSlider";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BrandSection from "@/components/sections/BrandSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <BenefitsSection />
      <BrandSection />
      <CertificationsSection />
      <FeaturesSection />
    </>
  );
}
