// Root page — server component that composes all section components in order.
// Client components (HeroSlider, FAQ, Testimonials) are imported here and
// rendered normally; Next.js handles the server/client boundary automatically.
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Sponsors from '@/components/Sponsors';
import About from '@/components/About';
import GrowthBanner from '@/components/GrowthBanner';
import Audience from '@/components/Audience';
import FAQ from '@/components/FAQ';
import HostBar from '@/components/HostBar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Sponsors />
      <About />
      <GrowthBanner />
      <Audience />
      <FAQ />
      <HostBar />
      <Testimonials />
      <Footer />
    </>
  );
}
