import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsTabs from "@/components/WhyChooseUsTabs";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUsList from "@/components/WhyChooseUsList";
import StatsSection from "@/components/StatsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PartnersBar from "@/components/PartnersBar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUsTabs />
      <ServicesGrid />
      <WhyChooseUsList />
      <StatsSection />
      <TestimonialsCarousel />
      <PartnersBar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
