import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const SpiritualHeritageSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pastel-gold rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Spiritual Heritage
            </h2>
            <div className="w-24 h-1 bg-pastel-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rooted in the Franciscan tradition and devoted to Our Lady of Lourdes, 
              our parish carries forward centuries of faith, hope, and love.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="font-playfair text-3xl font-bold mb-6 text-gray-900">
                  Our Lady of Lourdes
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our parish is dedicated to Our Lady of Lourdes, honoring the apparitions 
                  of the Blessed Virgin Mary to Saint Bernadette in 1858. Mary's message 
                  of prayer, penance, and pilgrimage continues to guide our community today.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As a Franciscan parish, we follow in the footsteps of Saint Francis of Assisi, 
                  embracing simplicity, service to the poor, and care for all of God's creation.
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">Our Mission</h4>
                  <p className="text-gray-700 italic">
                    "To be a welcoming community that proclaims the Gospel through worship, 
                    service, and fellowship, following the example of Our Lady of Lourdes 
                    and the Franciscan spirit."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-gold to-blue-300 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                  <img 
                    src="/images/mother_marry.jpg" 
                    alt="Our Lady of Lourdes"
                    className="w-full max-h-96 object-contain rounded-xl shadow-lg bg-gray-50"
                  />
                  <div className="mt-6 text-center">
                    <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                      Our Lady of Lourdes
                    </h4>
                    <p className="text-gray-600 italic">
                      "I am the Immaculate Conception"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-900">
                Franciscan Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pastel-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🙏</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Prayer</h4>
                  <p className="text-gray-600">Deepening our relationship with God through contemplation and worship</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pastel-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Service</h4>
                  <p className="text-gray-600">Serving the poor and marginalized with compassion and dignity</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pastel-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Creation</h4>
                  <p className="text-gray-600">Caring for our common home and all of God's creatures</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpiritualHeritageSection;