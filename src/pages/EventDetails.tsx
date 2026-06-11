import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import events from '@/data/events';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<typeof events[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroImages = event
    ? event.media?.filter(item => item.type === 'image').map(item => item.src) ?? []
    : [];

  const heroImage = event?.image || heroImages[0] || '/placeholder.svg';
  // Include all media in the gallery (don't filter out the hero image)
  const galleryMedia = event?.media ?? [];

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

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleLightboxClose = () => {
    setSelectedImage(null);
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
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src={heroImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
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
              </div>

              {galleryMedia.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-playfair text-2xl font-bold mb-6">{event.title} Gallery</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryMedia.map((item, index) => (
                      <div key={index} className="rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
                        <div className="aspect-[4/3] overflow-hidden w-full bg-black">
                          {item.type === 'video' ? (
                            <video
                              controls
                              className="w-full h-full object-cover"
                              src={item.src}
                            >
                              Sorry, your browser doesn’t support embedded videos.
                            </video>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleImageClick(item.src)}
                              className="h-full w-full"
                            >
                              <img
                                src={item.src}
                                alt={item.caption || event.title}
                                className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                                onError={(e) => {
                                  e.currentTarget.src = '/placeholder.svg';
                                }}
                              />
                            </button>
                          )}
                        </div>
                        {item.caption && (
                          <div className="p-3 bg-white">
                            <p className="text-sm text-gray-600">{item.caption}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <Dialog open={!!selectedImage} onOpenChange={(open) => {
                if (!open) handleLightboxClose();
              }}>
                <DialogContent className="sm:max-w-5xl">
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Expanded gallery"
                      className="w-full max-h-[80vh] object-contain"
                    />
                  )}
                </DialogContent>
              </Dialog>

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