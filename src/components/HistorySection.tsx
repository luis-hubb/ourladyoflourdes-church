import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Church, ChevronDown, ChevronUp } from 'lucide-react';
import ParishPriestsHistory from './ParishPriestsHistory';

const HistorySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainHistory = [
    "As the oral tradition goes there was a small Chapel dedicated to Our Lady of Lourdes, on the very spot of the present Church of Mundalli (foundation of mission unit since 1907). Manki being the Parish Church, Murdeshwar and Bhatkal were its sub-stations. Gradually two more sub-stations, Ternamakki and Shirali, were added to Manki Mission unit. In the course of time Murdeshwar got the status of being the Parish Church, with Shirali, Ternamakki and Bhatkal as its sub-stations. These places were looked after for many years by Fr. Vincent Pereira (1957-1974), the Diocesan Priest of the Diocese of Belgaum was the Parish Priest of Murdeshwar and of the whole of Bhatkal Taluk.",
    "For most of the official work, fixing of marriage etc. people from Bhatkal always had to go to Murdeshwar and this was inconvenient for the people. Therefore from the year 1957, chapel had its own registration of all the sacraments."
  ];

  const additionalHistory = [
    "The Franciscans (O.F.M.) were searching for a Mission in North Kanara. It was in 1974, that the Bhatkal mission was offered to the Franciscans. The Franciscan Friars (Fr. Paul Fernandes OFM was the first Franciscan Friar to arrive in Bhatkal as Priest in-Charge of Our Lady of Lourdes Chapel) arrived in Bhatkal in the month of September 1974. Fr. Nicholas D’Souza OFM joined him in October 1974. Late Bishop Ignatius Lobo, the then Bishop of Belgaum, who was a class-mate of Fr. Paul Fernandes was responsible for inviting the Franciscans to Bhatkal. The Franciscan Friars and the Parishioners of Bhatkal are indebted to him for his invitation. On 24 January 1976 Pope Paul VI, in his Decree Christi Missum, separated Karwar from the Diocese of Belgaum and erected it as an independent Diocese. On the 11th of February 1979, Bhatkal was erected as a full-fledged Parish by late Bishop William D’Mello, the Bishop of Karwar. It was during Franciscan Pastoral Ministry, Church was built in 1983 by fr. Simon pinto, OFM. From 1986 to 1989 bishop took the parish back and appointed Fr. Lawrence Pereira the diocesan priest. On 23rd March 1989, once again Bhatkal was given back to the Franciscans by the Bishop of Karwar “in perpetuum” and since then Bhatkal Parish is under the care of the Franciscan Order of St. Thomas Province in India.",
    "Since there was lack of place in the church, the parish church was again renovated in the year 2019 by then parish priest fr. Nicholas D’Souza, OFM. From May 2021 onwards, Fr. Prem Dsouza is serving as the parish priest of the parish and Dr. Dharma is serving as assisting priest. The parish has around 197 families and around 660 Catholics parishioners.The Church has its own cemetery behind the Church building on the hill slope, which has also a history of over 90 years. ",
    "St. Joseph chapel:",
    "Our lady of Lourdes Mundalli, Bhatkal has a sub-station which is called St. Joseph chapel Puravarga. When Fr. Paul Fernandes arrived in Bhatkal in 1974, there was no Chapel to pray for the people of Puravarga. The Friars used to have the Sunday Mass in parishneers houses. Even During the time of Fr. Vincent Pereira (1957-1974), Mass was celebrated in the houses. Sr. Bebiana Noronha, an Ursuline Franciscan Sister used to teach catechism to the children and prepare them for the Mass.",
    "St. Joseph chapel",
    "It was the intention of Fr. Paul Fernandes, OFM, to build a Chapel in Puravarga itself, so that the people could pray and celebrate the Eucharist. Fr. Agnel D’Mello OFM who arrived in Bhatkal in January 1976, initiated this process and made a project for the construction of a Chapel in the cemetery that was granted by the Government of Karnataka. Later on, the Franciscan Friars who were working in Bhatkal Taluk, dropped the idea of building a Chapel in the Cemetery due to the distance. Therefore they began to search for a new place for the construction of a Chapel. Fr. Nicholas who became the Parish Priest of Bhatkal in June 1983 played a very major role in buying 10 guntas of land from the Government of Karnataka beside the main road Puravarga (Bhatkal). On 16th December 1985 foundation was laid for the construction of the Chapel by Bishop William D’Mello in the presence of R. N. Naik, MLA, and the faithful of Puravarga. Fr. Lawrence Pereira of the Diocese of Karwar took charge of Bhatkal Parish in June 1986 and completed the construction work of the Chapel in Puravarga. The Chapel was inaugurated and blessed on 19th March 1987 by Late Bishop William D’Mello in the presence of priests, religious and the faithful of Bhatkal. After the Inauguration the Catholics of Puravarga gathered in the Chapel every day in the evenings to pray. Though it bears the name St. Joseph’s Church”, it is only a sub-station (Chapel) of Our Lady of Lourdes Church, Mundalli. It is situated about 4 km to the south from Bhatkal bus stop on the Bhatkal-Mangalore road.",
    "When the Friars arrived in Bhatkal, there were about 25 families in Puravarga and now it has grown in number as well as in spirituality. The substation, St. Joseph chapel has 95 families and around 300 faithful. The priest resides in the parish and reaches out to the spiritual, moral, economic needs of the faithful. Also serves for the social wellbeing of the people without discrimination."
  ];

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
          <h2 className="font-playfair text-3xl md:text-3xl font-bold mb-6 text-gray-900">A Brief History of Our Lady of Lourdes Church, Bhatkal</h2>
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
              {mainHistory.map((para, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {para}
                </p>
              ))}

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {additionalHistory.map((para, index) => (
                      <p key={index} className={`text-gray-700 leading-relaxed mb-6 ${para.includes(':') || para === "St. Joseph chapel" ? "font-bold text-xl mt-8" : ""}`}>
                        {para}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-pastel-gold font-bold hover:text-amber-600 transition-colors duration-300 group"
                >
                  {isExpanded ? (
                    <>
                      Read Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
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

          {/* Our Parish Priests - 3 Card Layout */}
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              {/* <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Parish Priests
              </h3> */}
              {/* <div className="w-20 h-1 bg-pastel-gold mx-auto"></div> */}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "Pope Leo XIV",
                  image: "/images/Leo PP XIV.png",
                },
                {
                  name: "Dr. Peter Machado",
                  role: "Archbishop of Karnataka",
                  image: "/images/dr.peter.machado.jpeg",
                },
                {
                  name: "Rev. Dr. Duming Dias",
                  role: "Bishop of Karwar",
                  image: "/images/Rev. Dr-duming-dias.jpeg",
                },

              ].map((priest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      {/* Image */}
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-pastel-gold/30 to-amber-400/30 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <img
                          src={priest.image}
                          alt={priest.name}
                          className="relative w-24 h-24 rounded-full object-cover border-4 border-pastel-gold shadow-lg group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/96?text=' + priest.name.split(' ').map(n => n[0]).join('');
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 text-center">
                        <h3 className="font-playfair text-xl font-bold mb-1 text-gray-900 whitespace-nowrap">
                          {priest.name}
                        </h3>
                        <p className="text-base font-semibold text-pastel-gold whitespace-nowrap">
                          {priest.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8"
          ><div className='flex flex-col gap-8'>


              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/images/Br_Massimo_Fusarelli.jpeg"
                    alt="Br. Massimo Fusarelli"
                    className="w-32 h-32 rounded-full object-cover border-4 border-pastel-gold shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-900">

                  </h3>
                  <p className="text-lg font-semibold text-pastel-gold mb-3">
                    Br. Massimo Fusarelli - Minister General
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Born in Rome on March 30, 1963, he received the Franciscan habit on July 28, 1982, and professed first vows on July 30, 1983. He professed solemn vows on January 8, 1989, and was ordained a priest on September 30, 1989. After theology studies, he obtained a Licentiate in Patristic Studies. He was elected Provincial Minister of the Province St. Bonaventure on July 2, 2020. Br. Massimo was elected as the 121st successor of St Francis. May the Holy Spirit guard and guide him.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/images/Br-Xavier-Durairaj.png"
                    alt="Br. Xavier Durairaj - Minister Provincial"
                    className="w-32 h-32 rounded-full object-cover border-4 border-pastel-gold shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  {/* <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-900">
                  Franciscan Leadership
                </h3> */}
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
            </div>
          </motion.div>

          <ParishPriestsHistory />
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection; 