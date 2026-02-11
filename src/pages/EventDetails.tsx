import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import events from '@/data/events';
import Footer from '@/components/Footer';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<typeof events[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch event details
    const fetchEvent = () => {
      const foundEvent = events.find(e => e.id === id);
      setEvent(foundEvent || null);
      setLoading(false);
    };

    fetchEvent();
  }, [id]);

  const formatEventDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page in history
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pastel-gold"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-pastel-gold hover:text-amber-600 transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <button 
            onClick={handleBack}
            className="inline-flex items-center text-pastel-gold hover:text-amber-600 transition-colors mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Events
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 md:h-96 bg-gray-200 relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image || '/placeholder.svg'})` }}
              ></div>
              <div className="absolute top-4 right-4 bg-pastel-gold text-white text-sm font-bold px-4 py-2 rounded-full">
                {event.category.replace('-', ' ')}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar size={20} className="text-pastel-gold mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{formatEventDate(event.date)}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock size={20} className="text-pastel-gold mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={20} className="text-pastel-gold mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-playfair text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-gray-700">{event.description}</p>
                
                <h2 className="font-playfair text-2xl font-bold mt-8 mb-4">Additional Information</h2>
                <p className="text-gray-700">
                  We look forward to seeing you at this event. Please arrive a few minutes early to get settled in. 
                  If you have any questions or need to make special arrangements, please contact our church office.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-playfair text-xl font-bold mb-4">Interested in More Events?</h3>
                <Link 
                  to="/#events" 
                  className="inline-block bg-pastel-gold text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails; 