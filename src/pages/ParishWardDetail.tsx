import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Users, Phone, Calendar } from 'lucide-react';
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
  activities: string[];
  achievements: string[];
}

const parishWards: ParishWard[] = [
  {
    id: 'ward1',
    name: 'Lourdes Ward',
    mainImage: '/images/lourdes-ward.jpg',
    images: ['/images/lourdes-ward.jpg'],
    description: 'A vibrant youth organization focused on spiritual growth, community service, and leadership development. Lourdes Ward brings together young people to foster their faith journey and develop leadership skills through various activities and outreach programs.',
    leader: 'Mr. John D\'Souza',
    contact: '+91 9876543210',
    members: 120,
    established: '1985',
    activities: [
      'Weekly youth meetings and prayer sessions',
      'Community service projects',
      'Leadership training workshops',
      'Sports and recreational activities',
      'Charity drives and fundraisers'
    ],
    achievements: [
      'Successfully organized 15 charity events in 2023',
      'Trained 50 youth leaders',
      'Raised ₹2,50,000 for community projects',
      'Established mentorship program for young members'
    ]
  },
  {
    id: 'ward2',
    name: 'St. Antony Ward',
    mainImage: '/images/ward2-main.jpg',
    images: ['/images/ward2-1.jpg', '/images/ward2-2.jpg', '/images/ward2-3.jpg'],
    description: 'Dedicated to promoting devotion to the Blessed Virgin Mary and fostering spiritual growth through prayer and service. St. Antony Ward creates a nurturing environment for families to deepen their faith and engage in meaningful community service.',
    leader: 'Mrs. Mary Fernandes',
    contact: '+91 9876543211',
    members: 95,
    established: '1990',
    activities: [
      'Daily Rosary and prayer groups',
      'Marian devotion programs',
      'Family prayer meetings',
      'Charitable works and outreach',
      'Religious education classes'
    ],
    achievements: [
      'Organized annual Marian feast celebrations',
      'Established prayer groups in 5 local communities',
      'Distributed aid to 200 families during crises',
      'Trained 30 prayer group leaders'
    ]
  },
  {
    id: 'ward3',
    name: 'St. Francis Ward',
    mainImage: '/images/st-1.jpg',
    images: ['/images/st-1.jpg', '/images/st-2.jpg'],
    description: 'Serving the poor and needy through charitable works and social service activities. St. Francis Ward embodies the spirit of St. Francis by reaching out to those in need and promoting social justice within our community.',
    leader: 'Mr. Joseph D\'Souza',
    contact: '+91 9876543212',
    members: 110,
    established: '1992',
    activities: [
      'Food distribution programs',
      'Medical aid and healthcare support',
      'Educational assistance for underprivileged children',
      'Housing and rehabilitation projects',
      'Emergency relief operations'
    ],
    achievements: [
      'Provided meals to 500 families monthly',
      'Built homes for 25 families',
      'Sponsored education for 75 children',
      'Established medical clinic partnerships',
      'Raised ₹5,00,000 for disaster relief'
    ]
  },
  {
    id: 'ward4',
    name: 'St. Mother Teresa Ward',
    mainImage: '/images/mother-ward.jpg',
    images: ['/images/mother-ward.jpg'],
    description: 'Enhancing liturgical celebrations through beautiful music and hymns. St. Mother Teresa Ward brings harmony to our worship services and nurtures musical talents within the parish community.',
    leader: 'Mrs. Rose D\'Souza',
    contact: '+91 9876543213',
    members: 85,
    established: '1995',
    activities: [
      'Choir practice sessions',
      'Music training programs',
      'Liturgical music preparation',
      'Community singing events',
      'Instrumental music classes'
    ],
    achievements: [
      'Performed at 50+ liturgical celebrations',
      'Trained 40 choir members',
      'Released 3 music albums',
      'Established children\'s choir program'
    ]
  },
  {
    id: 'ward5',
    name: 'St. Sebastian Ward',
    mainImage: '/images/st-sab.jpg',
    images: ['/images/st-sab.jpg', '/images/ward5-2.jpg', '/images/ward5-3.jpg'],
    description: 'Empowering women through spiritual, social, and educational activities. St. Sebastian Ward provides a supportive community for women to grow in faith and contribute meaningfully to parish life.',
    leader: 'Mrs. Theresa D\'Souza',
    contact: '+91 9876543214',
    members: 130,
    established: '1998',
    activities: [
      'Women\'s prayer and spirituality groups',
      'Educational workshops and seminars',
      'Social service initiatives',
      'Leadership development programs',
      'Community outreach activities'
    ],
    achievements: [
      'Organized 25 educational workshops',
      'Supported 100+ families through outreach',
      'Established women\'s leadership program',
      'Created community support network'
    ]
  },
  {
    id: 'ward6',
    name: 'St. Clare Ward',
    mainImage: '/images/ward6-main.jpg',
    images: ['/images/ward6-1.jpg', '/images/ward6-2.jpg', '/images/ward6-3.jpg'],
    description: 'Training and organizing youth to serve at the altar during Mass and other liturgical celebrations. St. Clare Ward prepares the next generation of liturgical ministers and fosters a deep appreciation for the sacred rites.',
    leader: 'Mr. Peter D\'Souza',
    contact: '+91 9876543215',
    members: 75,
    established: '2000',
    activities: [
      'Altar server training programs',
      'Liturgical education classes',
      'Youth ministry activities',
      'Sacramental preparation assistance',
      'Church service coordination'
    ],
    achievements: [
      'Trained 60 altar servers',
      'Served at 200+ liturgical celebrations',
      'Established youth leadership program',
      'Created sacramental preparation curriculum'
    ]
  }
];

const ParishWardDetail = () => {
  const { wardId } = useParams<{ wardId: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ward = parishWards.find(w => w.id === wardId);

  if (!ward) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ward Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-pastel-gold hover:bg-amber-600">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === ward.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? ward.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-pastel-gold hover:bg-amber-600 text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
        >
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={ward.images[currentImageIndex]}
              alt={`${ward.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/1200x400?text=' + ward.name;
              }}
            />

            {/* Navigation Arrows */}
            {ward.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Ward Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white font-playfair">
                {ward.name}
              </h1>
            </div>
          </div>

          {/* Image Indicators */}
          {ward.images.length > 1 && (
            <div className="flex justify-center space-x-2 p-4 bg-gray-50">
              {ward.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentImageIndex ? 'bg-pastel-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">About {ward.name}</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {ward.description}
              </p>
            </motion.div>

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Our Activities</h3>
              <ul className="space-y-3">
                {ward.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pastel-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Our Achievements</h3>
              <ul className="space-y-3">
                {ward.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ward Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Ward Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-pastel-gold" />
                  <div>
                    <p className="text-sm text-gray-600">Members</p>
                    <p className="font-semibold text-gray-900">{ward.members} families</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-pastel-gold" />
                  <div>
                    <p className="text-sm text-gray-600">Established</p>
                    <p className="font-semibold text-gray-900">{ward.established}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Ward Leader</h4>
                  <p className="text-gray-700 mb-3">{ward.leader}</p>

                  <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                  <a
                    href={`tel:${ward.contact}`}
                    className="flex items-center gap-2 text-pastel-gold hover:text-amber-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {ward.contact}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParishWardDetail;