import { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '@/store/useStore';
import events from '@/data/events';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';

const EventsSection = () => {
  const { eventCategory, setEventCategory } = useStore();
  const [visibleEvents, setVisibleEvents] = useState(3);
  
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'worship', name: 'Worship' },
    { id: 'youth', name: 'Youth' },
    { id: 'outreach', name: 'Outreach' },
    { id: 'bible-study', name: 'Bible Study' },
  ];

  const filteredEvents = eventCategory === 'all' 
    ? events 
    : events.filter(event => event.category === eventCategory);

  const displayedEvents = filteredEvents.slice(0, visibleEvents);
  const hasMoreEvents = filteredEvents.length > visibleEvents;

  const loadMoreEvents = () => {
    setVisibleEvents(prev => prev + 3);
  };

  const formatEventDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy');
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block h-1 w-24 bg-pastel-gold mb-4"></span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Upcoming Events</h2>
          <p className="font-opensans text-gray-600 max-w-2xl mx-auto">
            Join us for worship services, community outreach, Bible studies, and other special events.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setEventCategory(category.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                eventCategory === category.id
                  ? 'bg-pastel-gold text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Events list */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
          key={eventCategory} // Remount component when category changes
        >
          {displayedEvents.map((event) => (
            <motion.div 
              key={event.id} 
              variants={item}
              className="bg-ivory rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image || '/placeholder.svg'})` }}
                ></div>
                <div className="absolute top-4 right-4 bg-pastel-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                  {event.category.replace('-', ' ')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-3">{event.title}</h3>
                <p className="font-opensans text-gray-600 mb-4 text-sm">{event.description}</p>
                <div className="space-y-2 text-sm font-opensans">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-pastel-gold mr-2" />
                    <span>{formatEventDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-pastel-gold mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="text-pastel-gold mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link 
                    to={`/events/${event.id}`} 
                    className="text-pastel-gold hover:text-amber-600 transition-colors font-medium"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load more button */}
        {hasMoreEvents && (
          <div className="text-center mt-12">
            <Button 
              onClick={loadMoreEvents}
              variant="outline" 
              className="border-pastel-gold text-pastel-gold hover:bg-pastel-gold hover:text-white transition-colors"
            >
              Load More Events
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
