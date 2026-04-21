import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ParishWard {
  id: string;
  name: string;
  mainImage: string;
  images: string[];
  description: string;
  leader: string;
  contact: string;
  members: number;
  established: string;
}

const parishWards: ParishWard[] = [
  {
    id: 'ward1',
    name: 'Lourdes Ward',
    mainImage: '/images/lourdes-ward.jpg',
    images: ['/images/lourdes-ward.jpg'],
    description: 'Lourdes Ward is a vibrant hub of youth activity within our parish community. This ward fosters spiritual growth and leadership through regular community outreach. Members work together to create a supportive environment for faith-driven development.',
    leader: 'Mr. John D\'Souza',
    contact: '+91 9876543210',
    members: 120,
    established: '1985'
  },
  {
    id: 'ward2',
    name: 'St. Antony Ward',
    mainImage: '/images/st-anthony.jpg',
    images: ['/images/st-anthony.jpg', '/images/st-anthony1.jpg', '/images/st-anthony2.jpg'],
    description: 'St. Antony Ward is dedicated to deepening the Marian devotion of our parish families. This ward provides a nurturing space for prayer, service, and spiritual reflection. Families unite here to engage in meaningful community works and daily Rosary sessions.',
    leader: 'Mrs. Mary Fernandes',
    contact: '+91 9876543211',
    members: 95,
    established: '1990'
  },
  {
    id: 'ward3',
    name: 'St. Francis Ward',
    mainImage: '/images/st-1.jpg',
    images: ['/images/st-1.jpg', '/images/st-2.jpg'],
    description: 'St. Francis Ward is the heart of our parish’s charitable and social service mission. This ward tirelessly serves the poor and needy through various distribution programs. Members embody the selfless spirit of St. Francis by promoting social justice for all.',
    leader: 'Mr. Joseph D\'Souza',
    contact: '+91 9876543212',
    members: 110,
    established: '1992'
  },
  {
    id: 'ward4',
    name: 'St. Mother Teresa Ward',
    mainImage: '/images/mother-ward.jpg',
    images: ['/images/mother-ward.jpg'],
    description: 'St. Mother Teresa Ward is committed to enhancing our liturgical life through sacred music. This ward brings harmony to worship services by nurturing the musical talents of members. The choir\'s beautiful hymns help the congregation connect more deeply with their faith.',
    leader: 'Mrs. Rose D\'Souza',
    contact: '+91 9876543213',
    members: 85,
    established: '1995'
  },
  {
    id: 'ward5',
    name: 'St. Sebastian Ward',
    mainImage: '/images/st-sab.jpg',
    images: ['/images/st-sab.jpg', '/images/ward5-2.jpg', '/images/ward5-3.jpg'],
    description: 'St. Sebastian Ward is a powerful community focused on empowering women through faith. This ward offers educational workshops and social initiatives to support spiritual growth. Women here find a strong network for collective service and individual development.',
    leader: 'Mrs. Theresa D\'Souza',
    contact: '+91 9876543214',
    members: 130,
    established: '1998'
  },
  {
    id: 'ward6',
    name: 'St. Clare Ward',
    mainImage: '/images/st-clar.jpg',
    images: ['/images/st-clar.jpg', '/images/ward6-1.jpg', '/images/ward6-2.jpg', '/images/ward6-3.jpg'],
    description: 'St. Clare Ward is responsible for training the next generation of our altar servers. This ward prepares young people to serve with reverence during liturgical celebrations. Through deep education in sacred rites, members foster a love for parish service.',
    leader: 'Mr. Peter D\'Souza',
    contact: '+91 9876543215',
    members: 75,
    established: '2000'
  }
];

const ParishWardsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="parish-wards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Parish Wards
          </h2>
          <div className="w-24 h-1 bg-pastel-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg mb-8">
            Our parish is divided into dedicated wards, each serving specific communities
            with focused spiritual guidance and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {parishWards.map((ward, index) => (
            <motion.div
              key={ward.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={ward.mainImage}
                  alt={ward.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=' + ward.name;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                  {ward.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {ward.description}
                </p>

                <Button
                  className="w-full bg-pastel-gold hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                  onClick={() => navigate(`/wards/${ward.id}`)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParishWardsSection;