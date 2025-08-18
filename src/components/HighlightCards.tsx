
import { motion } from 'framer-motion';
import useStore from '@/store/useStore';
import { Calendar, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HighlightCards = () => {
  const { activeCard, setActiveCard } = useStore();

  const cards = [
    {
      id: 'ministries',
      title: 'Our Ministries',
      icon: <Users className="h-8 w-8 text-pastel-gold mb-4" />,
      description: 'Discover the various ways you can get involved, grow in faith, and serve our community.',
      action: 'Get Involved'
    },
    {
      id: 'events',
      title: 'Upcoming Events',
      icon: <Calendar className="h-8 w-8 text-pastel-gold mb-4" />,
      description: 'Join us for worship services, community outreach, Bible studies, and special events.',
      action: 'See Calendar'
    },
    {
      id: 'sermon',
      title: 'Latest Sermon',
      icon: <BookOpen className="h-8 w-8 text-pastel-gold mb-4" />,
      description: '"Finding Peace in a Troubled World" - Listen to Pastor John\'s message from last Sunday.',
      action: 'Listen Now'
    }
  ];

  const handleCardHover = (cardId: 'ministries' | 'events' | 'sermon') => {
    setActiveCard(cardId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section id="highlights" className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">Welcome to Our Community</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              onMouseEnter={() => handleCardHover(card.id as 'ministries' | 'events' | 'sermon')}
              onMouseLeave={handleCardLeave}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className={`h-full transition-shadow duration-300 ${
                activeCard === card.id ? 'shadow-lg' : 'shadow-md'
              } hover:shadow-xl bg-white border-none`}>
                <CardHeader className="text-center pt-8">
                  <div className="mx-auto">{card.icon}</div>
                  <CardTitle className="font-playfair text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-opensans text-gray-600 mb-6">{card.description}</p>
                  <a 
                    href={`#${card.id}`} 
                    className={`font-opensans font-medium inline-flex items-center transition-colors duration-300 
                      ${activeCard === card.id ? 'text-pastel-gold' : 'text-gray-700'} 
                      hover:text-pastel-gold`}
                  >
                    {card.action}
                    <span className="ml-2">→</span>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightCards;
