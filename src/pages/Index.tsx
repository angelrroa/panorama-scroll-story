import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { HotelReviewSection } from '@/components/HotelReviewSection';
import { ServicesSection } from '@/components/ServicesSection';
import { GallerySection } from '@/components/GallerySection';
import { RoomSection } from '@/components/RoomSection';
import { CTASection } from '@/components/CTASection';
import { BankInfoSection } from '@/components/BankInfoSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HotelReviewSection />
      <ServicesSection />
      <GallerySection />
      <RoomSection />
      <CTASection />
      <BankInfoSection />
      <Footer />
    </main>
  );
};

export default Index;
