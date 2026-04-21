import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Users, Phone, Calendar, User } from 'lucide-react';
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
  ppcMembers: string[];
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
    established: '1985',
    activities: [
      'Weekly youth meetings and prayer sessions',
      'Community service projects',
      'Leadership training workshops',
      'Sports and recreational activities',
      'Charity drives and fundraisers'
    ],
    ppcMembers: ['Mr. Robert Tellis', 'Mrs. Leena Gomes']
  },
  {
    id: 'ward2',
    name: 'St. Antony Ward',
    mainImage: '/images/st-anthony.jpg',
    images: ['/images/st-anthony.jpg'],
    description: 'St. Antony Ward is dedicated to deepening the Marian devotion of our parish families. This ward provides a nurturing space for prayer, service, and spiritual reflection. Families unite here to engage in meaningful community works and daily Rosary sessions.',
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
    ppcMembers: ['Mr. Juvence Luis ', 'Mrs. Jessy Pereira']
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
    established: '1992',
    activities: [
      'Food distribution programs',
      'Medical aid and healthcare support',
      'Educational assistance for underprivileged children',
      'Housing and rehabilitation projects',
      'Emergency relief operations'
    ],
    ppcMembers: ['Mr. Francis Luis', 'Mrs. Babiyana Gomes']
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
    established: '1995',
    activities: [
      'Choir practice sessions',
      'Music training programs',
      'Liturgical music preparation',
      'Community singing events',
      'Instrumental music classes'
    ],
    ppcMembers: ['Mr. Kiran Luis', 'Mrs. Hopiliya Luis']
  },
  {
    id: 'ward5',
    name: 'St. Sebastian Ward',
    mainImage: '/images/st-sab.jpg',
    images: ['/images/st-sab.jpg'],
    description: 'St. Sebastian Ward is a powerful community focused on empowering women through faith. This ward offers educational workshops and social initiatives to support spiritual growth. Women here find a strong network for collective service and individual development.',
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
    ppcMembers: ['Mr. Pradeep D\'Souza', 'Mrs. Shruthi D\'Souza']
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
    established: '2000',
    activities: [
      'Altar server training programs',
      'Liturgical education classes',
      'Youth ministry activities',
      'Sacramental preparation assistance',
      'Church service coordination'
    ],
    ppcMembers: ['Mr. Barjeethi Luis', 'Mrs. Jessica Furtado']
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
                  className={`w-3 h-3 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-pastel-gold' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Main Content - Full Width About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">About {ward.name}</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {ward.description}
          </p>
        </motion.div>

        {/* Bottom Grid for Activities and PPC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Activities Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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

          {/* PPC Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Parish Pastoral Council Members</h3>
            <div className="space-y-4">
              {ward.ppcMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                  <User className="w-5 h-5 text-pastel-gold" />
                  <p className="font-semibold text-gray-800">{member}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParishWardDetail;