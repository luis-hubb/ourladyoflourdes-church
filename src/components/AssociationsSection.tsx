import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Phone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface AssociationCardProps {
  name: string;
  description: string;
  meetingTime?: string;
  meetingPlace?: string;
  contactPerson?: string;
  contactNumber?: string;
}

const AssociationCard = ({ 
  name, 
  description, 
  meetingTime, 
  meetingPlace, 
  contactPerson, 
  contactNumber 
}: AssociationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
  >
    <div className="flex items-start space-x-4">
      <div className="bg-gold/10 p-3 rounded-full">
        <Users className="h-6 w-6 text-gold" />
      </div>
      <div className="flex-1">
        <h3 className="font-playfair text-xl font-semibold text-primary mb-2">{name}</h3>
        <p className="text-soft-gray text-sm mb-4">{description}</p>
        
        {/* <div className="space-y-2">
          {meetingTime && (
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-gold" />
              <span>{meetingTime}</span>
            </div>
          )}
          
          {meetingPlace && (
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-gold" />
              <span>{meetingPlace}</span>
            </div>
          )}
          
          {contactPerson && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-gold" />
              <span>{contactPerson}</span>
            </div>
          )}
          
          {contactNumber && (
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2 text-gold" />
              <a href={`tel:${contactNumber}`} className="hover:text-gold transition-colors">
                {contactNumber}
              </a>
            </div>
          )}
        </div> */}
      </div>
    </div>
  </motion.div>
);

const AssociationsSection = () => {
  const associations = [
    {
      name: "1.	Lourdes Ward.",
      description: "A vibrant youth organization focused on spiritual growth, community service, and leadership development.",
      meetingTime: "Every Sunday after Mass",
      meetingPlace: "Parish Hall",
      contactPerson: "Mr. John D'Souza",
      contactNumber: "+91 9876543210"
    },
    {
      name: "2.	St. Antony Ward.",
      description: "Dedicated to promoting devotion to the Blessed Virgin Mary and fostering spiritual growth through prayer and service.",
      meetingTime: "Every Saturday at 4:00 PM",
      meetingPlace: "Legion of Mary Room",
      contactPerson: "Mrs. Mary Fernandes",
      contactNumber: "+91 9876543211"
    },
    {
      name: "3.	St. Francis Ward.",
      description: "Serving the poor and needy through charitable works and social service activities.",
      meetingTime: "First Sunday of every month",
      meetingPlace: "Society Office",
      contactPerson: "Mr. Joseph D'Souza",
      contactNumber: "+91 9876543212"
    },
    {
      name: "4.	St. Mother Teresa Ward.",
      description: "Enhancing liturgical celebrations through beautiful music and hymns.",
      meetingTime: "Wednesday and Saturday at 6:00 PM",
      meetingPlace: "Church Choir Loft",
      contactPerson: "Mrs. Rose D'Souza",
      contactNumber: "+91 9876543213"
    },
    {
      name: "5.	St. Sebastian Ward.",
      description: "Empowering women through spiritual, social, and educational activities.",
      meetingTime: "Second Sunday of every month",
      meetingPlace: "Parish Hall",
      contactPerson: "Mrs. Theresa D'Souza",
      contactNumber: "+91 9876543214"
    },
    {
      name: "6.	St. Clare Ward.",
      description: "Training and organizing youth to serve at the altar during Mass and other liturgical celebrations.",
      meetingTime: "Every Saturday at 5:00 PM",
      meetingPlace: "Church Sacristy",
      contactPerson: "Mr. Peter D'Souza",
      contactNumber: "+91 9876543215"
    }
  ];

  return (
    <section id="associations" className="py-20 bg-gray-50">
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
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg mb-8">
            Join our vibrant parish associations and become an active member of our community.
            Each association offers unique opportunities for spiritual growth, fellowship, and service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {associations.map((association, index) => (
            <AssociationCard key={index} {...association} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            For more information about joining any of these associations, please contact the Parish Office.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AssociationsSection; 