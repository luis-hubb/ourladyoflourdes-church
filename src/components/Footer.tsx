import { Facebook, Instagram, Youtube, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0"
          >
            <h3 className="font-playfair text-xl font-bold mb-6">Our Lady of Lourdes Church Bhatkal</h3>
            <p className="font-opensans text-gray-300 mb-4">
              A welcoming Catholic community dedicated to serving God and our neighbors through faith, hope, and love.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/groups/273672643733371/?ref=share&mibextid=NSMWBT" className="text-gray-300 hover:text-pastel-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pastel-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@ourladyoflourdeschurchmund957" className="text-gray-300 hover:text-pastel-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-6">Location</h3>
            <div className="flex items-start space-x-3 mb-4">
              <MapPin size={20} className="text-pastel-gold mt-1 shrink-0" />
              <p className="font-opensans text-gray-300">
                Our Lady of Lourdes Church Mundalli,<br />
                Bhatkal - 581320 Uttar Kannada District
              </p>
            </div>
            <p className="font-opensans text-sm text-gray-400">
              Free parking available on the premises
            </p>
          </motion.div>

          {/* Service Times */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-6">Mass Times</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-pastel-gold mt-1 shrink-0" />
                <div>
                  <p className="font-opensans text-gray-300">Sunday Mass</p>
                  <p className="font-opensans text-sm text-gray-400">8:30 AM - 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-pastel-gold mt-1 shrink-0" />
                <div>
                  <p className="font-opensans text-gray-300">Weekday Mass</p>
                  <p className="font-opensans text-sm text-gray-400">6:45 AM - 7:30 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-pastel-gold mt-1 shrink-0" />
                <div>
                  <p className="font-opensans text-gray-300">Sunday</p>
                  <p className="font-opensans text-sm text-gray-400"> 7:30 AM - 8:15 AM (Catechism Class)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-2 font-opensans">
              <p>premofm@gmail.com</p>
              <p>+91 9482420590</p>
            </div>
            <div className="mt-6">
              <a 
                href="/contact" 
                className="text-pastel-gold hover:text-amber-400 transition-colors font-opensans font-medium"
              >
                Send us a message →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 font-opensans text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Our Lady of Lourdes Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
