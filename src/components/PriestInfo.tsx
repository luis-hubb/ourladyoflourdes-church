import { User, Mail, Phone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { motion } from 'framer-motion';

interface PriestCardProps {
  name: string;
  role: string;
  photoUrl: string;
  email?: string;
  phone?: string;
}

const PriestCard = ({ name, role, photoUrl, email, phone }: PriestCardProps) => (
  <motion.div
    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="relative mb-4">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gold shadow-lg">
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/400x400?text=Parish+Priest";
          }}
        />
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
        {role.includes("Parish Priest") ? "Parish Priest" : "Assisting Priest"}
      </div>
    </div>

    <div className="text-center mt-4 w-full px-2">
      <h3 className="font-playfair font-semibold text-base sm:text-lg md:text-2xl text-primary break-words whitespace-normal leading-tight hyphens-auto w-full px-1">{name}</h3>
      <p className="text-soft-gray text-xs md:text-sm mt-2 max-w-xs mx-auto leading-relaxed">{role}</p>

      {(email || phone) && (
        <div className="mt-4 flex justify-center space-x-4">
          {email && (
            <a href={`mailto:${email}`} className="text-gold hover:text-gold-dark transition-colors">
              <Mail size={18} />
            </a>
          )}
          {phone && (
            <a href={`tel:${phone}`} className="text-gold hover:text-gold-dark transition-colors">
              <Phone size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  </motion.div>
);

const PriestInfo = () => {
  return (
    <Card className="bg-ivory shadow-md border-none">
      <CardHeader className="text-center pb-2">
        <CardTitle className="font-playfair text-3xl text-primary">
          Our Parish Priests
        </CardTitle>
        <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PriestCard
            name="Rev. Fr. Premkumar D'souza OFM"
            role="Parish Priest Of Our Lady of Lourdes Friary (OFM) Mundalli"
            photoUrl="/images/prem_kumar.jpg"
            email="parish.priest@church.org"
            phone="+91 1234567890"
          />
          <PriestCard
            name="Rev. Fr. Dharma Bernard OFM"
            role="Assisting parish priest (OFM), Mundolli, Bhatkal"
            photoUrl="/images/dharma_bernard.jpg"
            email="assistant.priest@church.org"
            phone="+91 9876543210"
          />
        </div>
        <div className="mt-10 text-center border-t border-gray-200 pt-6">
          <p className="font-playfair text-xl font-semibold text-primary">Our Lady of Lourdes Church</p>
          <p className="text-soft-gray mt-1">MUNDALLI P.O. Bhatkal 581 320</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriestInfo;
