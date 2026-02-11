import dynamic from 'next/dynamic';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';

// Lazy load heavy sections for better performance
const WhyJoinSection = dynamic(() => import('./sections/WhyJoinSection'), { ssr: true });
const MetricsSection = dynamic(() => import('./sections/MetricsSection'), { ssr: true });
const RecruitersSection = dynamic(() => import('./sections/RecruitersSection'), { ssr: true });
const VideoGallerySection = dynamic(() => import('./sections/VideoGallerySection'), { ssr: true });
const VisitFutureSection = dynamic(() => import('./sections/VisitFutureSection'), { ssr: true });

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
        {/* <AccreditationSection /> */}

        {/* 4. Why Join JCT? */}
        <WhyJoinSection />

        {/* 5. Key Metrics (Counters) */}
        <MetricsSection />

        {/* 5.5. Recruiters Carousel */}

        {/* 6. Video Gallery */}
        <VideoGallerySection />
        <RecruitersSection />

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
