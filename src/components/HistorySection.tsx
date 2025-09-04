import { motion } from 'framer-motion';
import { Church } from 'lucide-react';

const HistorySection = () => {
  return (
    <section id="our-history" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <Church className="h-12 w-12 text-pastel-gold" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our History</h2>
          <div className="w-24 h-1 bg-pastel-gold mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                As the oral tradition goes there was a small Chapel dedicated to Our Lady of Lourdes, on the very spot of the present Church of Mundalli since about 85 years. Manki being the Parish Church, Murdeshwar and Bhatkal were its sub-stations. Gradually two more sub-stations, Ternamakki and Shirali, were added to Manki Mission unit.
              </p>
              
              <p className="text-gray-700 mb-6">
                In 1974, the Bhatkal mission was offered to the Franciscans. The present Parish Church was built and raised to the status of a Parish in 1983. On 23rd March 1989, Bhatkal was given to the Franciscans "in perpetuum" and the Bhatkal Parish is now under the care of the Franciscan Order of St. Thomas Province in India.
              </p>
              
              <p className="text-gray-700">
                The Church has its own cemetery behind the Church building on the hill slope. There is also St. Joseph's Church at Muglihonda, built in 1986, which serves as a sub-station Chapel of Our Lady of Lourdes Church, Mundalli.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-900">Established</h3>
              <p className="text-3xl font-bold text-pastel-gold">1983</p>
              <p className="text-gray-600 mt-2">Year the present Parish Church was built</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-900">Franciscan Care</h3>
              <p className="text-3xl font-bold text-pastel-gold">1989</p>
              <p className="text-gray-600 mt-2">Year Bhatkal was given to the Franciscans "in perpetuum"</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/images/Br. Xavier Durairaj (Minister Provincial).jpg" 
                  alt="Br. Xavier Durairaj - Minister Provincial"
                  className="w-32 h-32 rounded-full object-cover border-4 border-pastel-gold shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-900">
                  Franciscan Leadership
                </h3>
                <p className="text-lg font-semibold text-pastel-gold mb-3">
                  Br. Xavier Durairaj - Minister Provincial
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Under the guidance of our Minister Provincial and the Franciscan Order of St. Thomas Province, 
                  our parish continues to serve the community with the spirit of St. Francis - embracing simplicity, 
                  caring for the poor, and fostering a deep love for all of God's creation.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection; 