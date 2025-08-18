import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services,
            need information about the church, or want to get involved, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-pastel-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-opensans font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Our Lady of Lourdes Church<br />
                    123 Church Street<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-pastel-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-opensans font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-pastel-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-opensans font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@ourladyoflourdes.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-pastel-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-opensans font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pastel-gold focus:border-pastel-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pastel-gold focus:border-pastel-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pastel-gold focus:border-pastel-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pastel-gold focus:border-pastel-gold"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pastel-gold text-white py-3 px-6 rounded-md hover:bg-amber-600 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 