import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ScrollHeroSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
