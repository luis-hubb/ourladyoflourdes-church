import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const priests = [
    {
        name: "Rev. Fr. Premkumar D'souza OFM",
        role: "Parish Priest",
        image: "/images/prem_kumar.jpg",
        bio: "Leading our parish with wisdom and compassion, serving the faithful with love.",
    },
    {
        name: "Rev. Fr. Dharma Bernard",
        role: "Assisting Parish Priest",
        image: "/images/dharma_bernard.jpg",
        bio: "Supporting our parish community with dedication and unwavering faith.",
    },
    {
        name: "Rev. Fr. Michael Anthony",
        role: "Associate Priest",
        image: "/images/fr_michael.jpg",
        bio: "Serving with devotion in education ministry and community outreach.",
    },
];

const PriestCards = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <div className="flex justify-center mb-6">
                        <Heart className="h-12 w-12 text-pastel-gold" />
                    </div>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Our Parish Priests
                    </h2>
                    <div className="w-24 h-1 bg-pastel-gold mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the devoted shepherds who guide our spiritual journey with love, wisdom, and grace.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {priests.map((priest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
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
                                    <h3 className="font-playfair text-sm sm:text-base md:text-xl font-bold mb-1 text-gray-900 break-words w-full">
                                        {priest.name}
                                    </h3>
                                    <p className="text-base font-semibold text-pastel-gold mb-3">
                                        {priest.role}
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {priest.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PriestCards;
