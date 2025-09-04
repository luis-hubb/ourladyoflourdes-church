import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden"
      style={{ marginTop: '-64px' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: 'brightness(0.5)' }}
          aria-label="Church interior background video"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-2xl md:text-3xl text-pastel-gold mb-4"
          >
            Our Lady of Lourdes Church
          </motion.h2>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            You Belong Here
          </h1>
          <p className="font-opensans text-lg md:text-xl mb-10 text-gray-100 max-w-xl mx-auto leading-relaxed">
            Join us as we gather to worship, grow, and serve together in community.
          </p>
          <Button
            className="bg-pastel-gold text-gray-900 hover:bg-amber-300 transition-all duration-300 text-lg py-6 px-8 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
            aria-label="Plan your visit to Grace Church"
          >
            Plan Your Visit <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 font-opensans bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block"
          >
            <p className="text-gray-200 mb-2 text-lg">Join us this Sunday</p>
            <p className="text-2xl font-semibold">10:00 AM &amp; 6:00 PM</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
