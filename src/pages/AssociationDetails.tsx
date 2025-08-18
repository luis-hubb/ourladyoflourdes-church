import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Phone, Users, Mail, Clock, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useStore from '@/store/useStore';

// Association data - this could be moved to a separate data file in a real application
const associationsData = {
  'cym': {
    id: 'cym',
    name: 'Catholic Youth Movement (CYM)',
    description: 'A vibrant youth organization focused on spiritual growth, community service, and leadership development.',
    longDescription: 'The Catholic Youth Movement (CYM) is a dynamic organization dedicated to nurturing the spiritual, social, and personal growth of young Catholics. Through various activities, retreats, and community service projects, CYM members develop leadership skills, deepen their faith, and form lasting friendships with fellow young Catholics. The organization plays a vital role in preparing the next generation of church leaders and active parishioners.',
    meetingTime: 'Every Sunday after Mass',
    meetingPlace: 'Parish Hall',
    contactPerson: 'Mr. John D\'Souza',
    contactNumber: '+91 9876543210',
    email: 'cym@church.org',
    activities: [
      'Weekly Bible study sessions',
      'Monthly community service projects',
      'Annual youth retreat',
      'Liturgical celebrations participation',
      'Social gatherings and fellowship events',
      'Leadership training workshops'
    ],
    image: '/images/cym.jpg'
  },
  'legion-of-mary': {
    id: 'legion-of-mary',
    name: 'Legion of Mary',
    description: 'Dedicated to promoting devotion to the Blessed Virgin Mary and fostering spiritual growth through prayer and service.',
    longDescription: 'The Legion of Mary is a lay apostolic association of Catholics who serve the Church on a voluntary basis. Members meet weekly for prayer, planning, and reporting on apostolic works. The Legion of Mary is active in visiting the sick, the elderly, and those who have fallen away from the Church. Through their devotion to the Blessed Virgin Mary, members strive to grow in holiness and bring Christ to others through their service and witness.',
    meetingTime: 'Every Saturday at 4:00 PM',
    meetingPlace: 'Legion of Mary Room',
    contactPerson: 'Mrs. Mary Fernandes',
    contactNumber: '+91 9876543211',
    email: 'legionofmary@church.org',
    activities: [
      'Weekly meetings with prayer and spiritual reading',
      'Home visits to the sick and elderly',
      'Parish census and follow-up',
      'Assistance with parish events',
      'Spiritual formation programs',
      'Recitation of the Rosary in homes'
    ],
    image: '/images/legion-of-mary.jpg'
  },
  'st-vincent-de-paul': {
    id: 'st-vincent-de-paul',
    name: 'St. Vincent de Paul Society',
    description: 'Serving the poor and needy through charitable works and social service activities.',
    longDescription: 'The St. Vincent de Paul Society is an international Catholic voluntary organization dedicated to tackling poverty and injustice by providing practical support to people in need. Members of the Society are committed to personal and spiritual growth through their service to others. The Society operates through a network of local conferences that provide direct assistance to those in need, including food, clothing, shelter, and other essential services.',
    meetingTime: 'First Sunday of every month',
    meetingPlace: 'Society Office',
    contactPerson: 'Mr. Joseph D\'Souza',
    contactNumber: '+91 9876543212',
    email: 'svdp@church.org',
    activities: [
      'Food and clothing distribution',
      'Home visits to the needy',
      'Emergency assistance programs',
      'Educational support for children',
      'Housing assistance',
      'Healthcare initiatives'
    ],
    image: '/images/svdp.jpg'
  },
  'parish-choir': {
    id: 'parish-choir',
    name: 'Parish Choir',
    description: 'Enhancing liturgical celebrations through beautiful music and hymns.',
    longDescription: 'The Parish Choir is dedicated to enhancing the beauty and solemnity of liturgical celebrations through music. Members of the choir work together to prepare and perform a diverse repertoire of sacred music, from traditional hymns to contemporary worship songs. The choir plays an essential role in leading the congregation in worship and creating an atmosphere of reverence and joy during Mass and other liturgical celebrations.',
    meetingTime: 'Wednesday and Saturday at 6:00 PM',
    meetingPlace: 'Church Choir Loft',
    contactPerson: 'Mrs. Rose D\'Souza',
    contactNumber: '+91 9876543213',
    email: 'choir@church.org',
    activities: [
      'Weekly choir practice sessions',
      'Performance at Sunday Masses',
      'Special music for feast days and celebrations',
      'Music workshops and training',
      'Collaboration with other parish music groups',
      'Recording of parish hymns'
    ],
    image: '/images/choir.jpg'
  },
  'catholic-womens-association': {
    id: 'catholic-womens-association',
    name: 'Catholic Women\'s Association',
    description: 'Empowering women through spiritual, social, and educational activities.',
    longDescription: 'The Catholic Women\'s Association is a vibrant organization dedicated to empowering women in their faith journey and community involvement. Through various programs and activities, the association provides opportunities for spiritual growth, fellowship, and service. Members support one another in living out their Catholic faith and contribute to the parish and wider community through charitable works and advocacy.',
    meetingTime: 'Second Sunday of every month',
    meetingPlace: 'Parish Hall',
    contactPerson: 'Mrs. Theresa D\'Souza',
    contactNumber: '+91 9876543214',
    email: 'cwa@church.org',
    activities: [
      'Monthly meetings with spiritual reflection',
      'Charitable projects and fundraisers',
      'Educational workshops and seminars',
      'Social gatherings and fellowship events',
      'Support for parish initiatives',
      'Advocacy for women\'s issues'
    ],
    image: '/images/cwa.jpg'
  },
  'altar-servers': {
    id: 'altar-servers',
    name: 'Altar Servers Association',
    description: 'Training and organizing youth to serve at the altar during Mass and other liturgical celebrations.',
    longDescription: 'The Altar Servers Association is dedicated to training and organizing youth to assist the priest during Mass and other liturgical celebrations. Altar servers play an important role in the smooth conduct of liturgical services, helping to create an atmosphere of reverence and order. Through their service, young people develop a deeper understanding of the liturgy and grow in their faith and commitment to the Church.',
    meetingTime: 'Every Saturday at 5:00 PM',
    meetingPlace: 'Church Sacristy',
    contactPerson: 'Mr. Peter D\'Souza',
    contactNumber: '+91 9876543215',
    email: 'altarservers@church.org',
    activities: [
      'Training sessions for new servers',
      'Regular practice and formation',
      'Serving at Sunday Masses and special celebrations',
      'Annual retreat and fellowship events',
      'Leadership development for senior servers',
      'Participation in diocesan events'
    ],
    image: '/images/altar-servers.jpg'
  }
};

const AssociationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { closeMobileMenu } = useStore();
  const [association, setAssociation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    closeMobileMenu();
    
    // Simulate loading data
    setTimeout(() => {
      if (id && associationsData[id as keyof typeof associationsData]) {
        setAssociation(associationsData[id as keyof typeof associationsData]);
      }
      setLoading(false);
    }, 500);
  }, [id, closeMobileMenu]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white font-opensans">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading association details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!association) {
    return (
      <div className="min-h-screen bg-white font-opensans">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Association Not Found</h1>
          <p className="text-gray-600 mb-8">The association you are looking for does not exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-gold hover:bg-gold-dark text-white font-semibold py-2 px-6 rounded-md transition-colors"
          >
            Return to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-opensans">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-64 bg-gray-900">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${association.image || '/images/church-default.jpg'})`,
              filter: 'blur(2px)'
            }}
          ></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center text-white mb-4 hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </button>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">{association.name}</h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">{association.longDescription}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Meeting Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h2 className="font-playfair text-2xl font-bold mb-6 text-gray-900 flex items-center">
                    <Info className="h-6 w-6 mr-2 text-gold" />
                    Meeting Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gold mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Meeting Time</h3>
                        <p className="text-gray-600">{association.meetingTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gold mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Meeting Place</h3>
                        <p className="text-gray-600">{association.meetingPlace}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h2 className="font-playfair text-2xl font-bold mb-6 text-gray-900 flex items-center">
                    <Users className="h-6 w-6 mr-2 text-gold" />
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gold mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Contact Person</h3>
                        <p className="text-gray-600">{association.contactPerson}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gold mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone Number</h3>
                        <a href={`tel:${association.contactNumber}`} className="text-gray-600 hover:text-gold transition-colors">
                          {association.contactNumber}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gold mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a href={`mailto:${association.email}`} className="text-gray-600 hover:text-gold transition-colors">
                          {association.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Activities Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 mb-12"
              >
                <h2 className="font-playfair text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-gold" />
                  Activities & Programs
                </h2>
                
                <ul className="space-y-3">
                  {association.activities.map((activity: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-gold mt-2 mr-3"></div>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Join Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gold/10 rounded-lg p-8 text-center"
              >
                <h2 className="font-playfair text-2xl font-bold mb-4 text-gray-900">Join Our Association</h2>
                <p className="text-gray-700 mb-6">
                  We welcome new members to join our association. Please contact us for more information or attend one of our meetings.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-gold hover:bg-gold-dark text-white font-semibold py-2 px-6 rounded-md transition-colors"
                >
                  Contact Us
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AssociationDetails; 