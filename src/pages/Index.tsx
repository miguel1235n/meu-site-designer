import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="overflow-x-hidden">
    <Header />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
