import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import AccreditationSection from './sections/AccreditationSection';
import WhyJoinSection from './sections/WhyJoinSection';
import MetricsSection from './sections/MetricsSection';
import VideoGallerySection from './sections/VideoGallerySection';
import VisitFutureSection from './sections/VisitFutureSection';

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About JCT Institutions */}
        <AboutSection />

        {/* 3. Affiliations & Accreditation */}
        <AccreditationSection />

        {/* 4. Why Join JCT? */}
        <WhyJoinSection />

        {/* 5. Key Metrics (Counters) */}
        <MetricsSection />

        {/* 6. Video Gallery */}
        <VideoGallerySection />

        {/* 7. Visit Your Future CTA */}
        <VisitFutureSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </>
  );
}
