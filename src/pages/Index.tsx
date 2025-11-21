import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ScrollHeroSection />
      <Benefits />
      <HowItWorks />
      <Portfolio />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
