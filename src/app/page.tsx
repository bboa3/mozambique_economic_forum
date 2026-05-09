// Root page — server component that composes all section components in order.
// Client components (Navbar, FAQ, Testimonials, NewsletterPopup) are imported here and
// rendered normally; Next.js handles the server/client boundary automatically.
import About from '@/components/About';
import Footer from '@/components/Footer';
import GrowthBanner from '@/components/GrowthBanner';
import HeroSlider from '@/components/HeroSlider';
import HostBar from '@/components/HostBar';
import Leaders from '@/components/Leaders';
import MembershipPlans from '@/components/MembershipPlans';
import Navbar from '@/components/Navbar';
import Sponsors from '@/components/Sponsors';
import Topics from '@/components/Topics';

export default function Home() {
  return (
    <main className='leading-loose w-full h-full'>
      <Navbar />
      <HeroSlider />
      <Sponsors />
      <About />
      <GrowthBanner />
      {/* <StatsRow /> */}
      <Topics />
      <MembershipPlans />
      <HostBar />
      <Leaders />
      <Footer />
    </main>
  );
}
