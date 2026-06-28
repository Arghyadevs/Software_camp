import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CustomerReviewsSection } from "@/components/sections/CustomerReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GlobalLoader } from "@/components/sections/GlobalLoader";

export default function Home() {
  return (
    <>
      <GlobalLoader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <CustomerReviewsSection />
      <ContactSection />
    </>
  );
}
