import { useEffect } from 'react';
import useStore from '@/store/useStore';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import HighlightCards from '@/components/HighlightCards';
import MessageSection from '@/components/MessageSection';
import PriestInfo from '@/components/PriestInfo';
import SpiritualHeritageSection from '@/components/SpiritualHeritageSection';
import EventsSection from '@/components/EventsSection';
import GiveSection from '@/components/GiveSection';
import MassTimings from '@/components/MassTimings';
import TestimonialsSection from '@/components/TestimonialsSection';
import LeadershipSection from '@/components/LeadershipSection';
import AssociationsSection from '@/components/AssociationsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { closeMobileMenu } = useStore();

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <div className="min-h-screen bg-white font-opensans">
      <Navbar />
      <HeroSection />
      <HistorySection />
      <SpiritualHeritageSection />
      <MassTimings />
      <HighlightCards />
      <MessageSection />
      <AssociationsSection />
      {/* <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <PriestInfo />
        </div>
      </div> */}
      <TestimonialsSection />
      {/* <LeadershipSection /> */}
      <EventsSection />
      {/* <GiveSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
