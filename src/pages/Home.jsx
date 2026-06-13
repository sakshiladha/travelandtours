import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import AboutSection from "../components/home/AboutSection";
import PopularDestinations from "../components/home/PopularDestinations";
import TravelStyles from "../components/home/TravelStyles";
import FeaturedPackages from "../components/home/FeaturedPackages";
import SeasonalDestinations from "../components/home/SeasonalDestinations";
import CarRentalSection from "../components/home/CarRentalSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <PopularDestinations />
      <TravelStyles />
      <FeaturedPackages />
      <SeasonalDestinations />
      <CarRentalSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
