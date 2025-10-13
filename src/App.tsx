import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import CertificationsSection from './components/CertificationsSection';
import BrandSection from './components/BrandSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSlider />
      <FeaturesSection />
      <BenefitsSection />
      <CertificationsSection />
      <BrandSection />
      <Footer />
    </div>
  );
}

export default App;
