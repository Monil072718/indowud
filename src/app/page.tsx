import HeroSlider from "@/components/sections/HeroSlider";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BrandSection from "@/components/sections/BrandSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TrustedProgramsSection from "@/components/sections/TrustedProgramsSection";


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesSection />
      <BenefitsSection />
      <TrustedProgramsSection />
      <BrandSection />
      <CertificationsSection />
    </>
  );
}
