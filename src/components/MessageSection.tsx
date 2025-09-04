import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-beige relative overflow-hidden"
      aria-labelledby="message-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="w-96 h-96 rounded-full bg-pastel-gold absolute -top-48 -right-48 transform rotate-12"></div>
        <div className="w-96 h-96 rounded-full bg-pastel-gold absolute -bottom-48 -left-48 transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <span 
              className="inline-block h-1 w-24 bg-pastel-gold mb-8 transform transition-transform hover:scale-110"
              aria-hidden="true"
            ></span>
            <h2 
              id="message-heading"
              className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            >
              A Message of Hope
            </h2>
          </motion.div>

          <motion.blockquote 
            variants={itemVariants} 
            className="font-playfair text-2xl md:text-3xl italic mb-10 leading-relaxed relative"
          >
            <span className="absolute -left-8 top-0 text-4xl text-pastel-gold opacity-50">"</span>
            For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."
            <span className="block text-lg mt-4 font-medium not-italic text-gray-600">— Jeremiah 29:11</span>
            <span className="absolute -right-8 bottom-0 text-4xl text-pastel-gold opacity-50">"</span>
          </motion.blockquote>

          <motion.div 
            variants={itemVariants} 
            className="mt-16 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/images/prem_kumar.jpg" 
                  alt="Rev. Fr. Prem Kumar D'souza"
                  className="w-32 h-32 rounded-full object-cover border-4 border-pastel-gold shadow-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-900">From Fr. Prem Kumar D'souza</h3>
                <p className="font-opensans text-lg text-gray-700 mb-6 leading-relaxed">
                  In a world that often feels uncertain, Our Lady of Lourdes Church stands as a beacon of hope and community. 
                  We're not perfect people, but we serve a perfect God who loves us unconditionally.
                  No matter where you are in your faith journey, there's a place for you here.
                </p>
                <p className="font-opensans text-lg text-gray-700 leading-relaxed">
                  I invite you to join us this Sunday to experience the warmth of our community and the power of worship.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
