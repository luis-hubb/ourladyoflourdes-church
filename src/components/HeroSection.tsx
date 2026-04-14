import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-start justify-center min-h-screen bg-black text-white overflow-hidden"
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
          style={{ filter: 'brightness(1)' }}
          aria-label="Church interior background video"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-20 right-6 z-30 flex flex-row space-x-2 space-y-0">
        <motion.a
          href="https://www.facebook.com/groups/273672643733371/?ref=share&mibextid=NSMWBT"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-300 border border-white/50 shadow-lg"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4 text-white" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/our_lady_of_lourdes_official?igsh=MTBkaDI3NWpvYXRpeA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-300 border border-white/50 shadow-lg"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4 text-white" />
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@ourladyoflourdeschurchmund957"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-300 border border-white/50 shadow-lg"
          aria-label="YouTube"
        >
          <Youtube className="w-4 h-4 text-white" />
        </motion.a>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-2xl md:text-5xl text-pastel-gold mb-4 top-0"
          >
            Our Lady of Lourdes Church Bhatkal
          </motion.h1>
          

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 font-opensans bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block"
          >
            <p className="text-gray-200 mb-2 text-lg">Join us this Sunday</p>
            <p className="text-2xl font-semibold">10:00 AM &amp; 6:00 PM</p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
