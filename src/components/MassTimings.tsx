import { Clock, Users, History, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import PriestInfo from './PriestInfo';
import { Link } from 'react-router-dom';

const MassTimings = () => {
  const massSchedule = {
    general: [
      { day: 'Sunday', time: '7:30 AM & 9:30 AM' },
      { day: 'Weekdays', time: '6:30 AM' },
      { day: 'Saturday', time: '6:30 AM & 6:00 PM (Sunday Mass)' }
    ],
    boys: [
      { day: 'Sunday', time: '8:00 AM' },
      { day: 'Wednesday', time: '5:00 PM' },
      { day: 'Friday', time: '5:00 PM' }
    ],
    girls: [
      { day: 'Sunday', time: '8:30 AM' },
      { day: 'Tuesday', time: '5:00 PM' },
      { day: 'Thursday', time: '5:00 PM' }
    ],
    seniors: [
      { day: 'Sunday', time: '9:00 AM' },
      { day: 'Monday', time: '5:00 PM' },
      { day: 'Saturday', time: '5:00 PM' }
    ]
  };

  const associations = [
    { 
      id: 'cym',
      name: 'Catholic Youth Movement (CYM)', 
      description: 'Promoting Catholic values and community service' 
    },
    { 
      id: 'st-vincent-de-paul',
      name: 'St Vincent De Paul Society', 
      description: 'Serving the needy and marginalized' 
    },
    { 
      id: 'legion-of-mary',
      name: 'Legion of Mary', 
      description: 'Dedicated to spiritual growth and evangelization' 
    },
    { 
      id: 'parish-choir',
      name: 'Parish Choir', 
      description: 'Enhancing liturgical celebrations through music' 
    },
    { 
      id: 'catholic-womens-association',
      name: 'Catholic Women\'s Association', 
      description: 'Empowering women through spiritual and social activities' 
    },
    { 
      id: 'altar-servers',
      name: 'Altar Servers Association', 
      description: 'Training and coordinating altar servers' 
    }
  ];

  const priests = [
    {
      name: "Rev. Fr. Prem Kumar D'souza",
      role: "Parish Priest Of Our Lady of Lourdes Friary (OFM) Mundalli"
    },
    {
      name: "Rev. Fr. Dharma Bernard",
      role: "Assistant parish priest (OFM), Mundolli, Bhatkal"
    }
  ];

  return (
    <section id="masses-timing" className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Church History Card
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-playfair text-2xl">
                <History className="text-gold" />
                A Brief History
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="font-opensans text-soft-gray leading-relaxed">
                As the oral tradition goes there was a small Chapel dedicated to Our Lady of Lourdes, on the very spot of the present Church of Mundalli since about 85 years. Manki being the Parish Church, Murdeshwar and Bhatkal were its sub-stations. Gradually two more sub-stations, Ternamakki and Shirali, were added to Manki Mission unit.
              </p>
              <p className="font-opensans text-soft-gray leading-relaxed mt-4">
                In 1974, the Bhatkal mission was offered to the Franciscans. The present Parish Church was built and raised to the status of a Parish in 1983. On 23rd March 1989, Bhatkal was given to the Franciscans "in perpetuum" and the Bhatkal Parish is now under the care of the Franciscan Order of St. Thomas Province in India.
              </p>
              <p className="font-opensans text-soft-gray leading-relaxed mt-4">
                The Church has its own cemetery behind the Church building on the hill slope. There is also St. Joseph's Church at Muglihonda, built in 1986, which serves as a sub-station Chapel of Our Lady of Lourdes Church, Mundalli.
              </p>
            </CardContent>
          </Card> */}

          {/* Mass Timings Section */}
          <div className="text-center mb-6">
            <h2 className="font-playfair text-3xl font-bold text-primary">Mass Schedule</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* General Mass Timings */}
            <Card className="bg-white shadow-md h-full">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 font-playfair text-2xl text-primary">
                  <Clock className="text-gold" />
                  General Mass Timings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {massSchedule.general.map((schedule, index) => (
                    <div key={index} className="flex items-center p-3 bg-ivory rounded-lg hover:bg-gold/5 transition-colors">
                      <Calendar className="text-gold mr-3 h-5 w-5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-primary">{schedule.day}</span>
                        <span className="ml-2 text-soft-gray">{schedule.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Mass Timings */}
            <Card className="bg-white shadow-md h-full">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 font-playfair text-2xl text-primary">
                  <Users className="text-gold" />
                  Special Mass Timings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Boys Mass */}
                  <div className="bg-ivory p-4 rounded-lg hover:bg-gold/5 transition-colors">
                    <h3 className="font-semibold text-lg mb-3 text-primary flex items-center">
                      <Users className="text-gold mr-2 h-5 w-5" />
                      Boys Mass
                    </h3>
                    <ul className="space-y-2">
                      {massSchedule.boys.map((schedule, index) => (
                        <li key={index} className="font-opensans text-soft-gray flex items-center">
                          <Calendar className="text-gold mr-2 h-4 w-4 flex-shrink-0" />
                          <span>{schedule.day}: {schedule.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Girls Mass */}
                  <div className="bg-ivory p-4 rounded-lg hover:bg-gold/5 transition-colors">
                    <h3 className="font-semibold text-lg mb-3 text-primary flex items-center">
                      <Users className="text-gold mr-2 h-5 w-5" />
                      Girls Mass
                    </h3>
                    <ul className="space-y-2">
                      {massSchedule.girls.map((schedule, index) => (
                        <li key={index} className="font-opensans text-soft-gray flex items-center">
                          <Calendar className="text-gold mr-2 h-4 w-4 flex-shrink-0" />
                          <span>{schedule.day}: {schedule.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Seniors Mass */}
                  <div className="bg-ivory p-4 rounded-lg hover:bg-gold/5 transition-colors md:col-span-2">
                    <h3 className="font-semibold text-lg mb-3 text-primary flex items-center">
                      <Users className="text-gold mr-2 h-5 w-5" />
                      Seniors Mass
                    </h3>
                    <ul className="space-y-2">
                      {massSchedule.seniors.map((schedule, index) => (
                        <li key={index} className="font-opensans text-soft-gray flex items-center">
                          <Calendar className="text-gold mr-2 h-4 w-4 flex-shrink-0" />
                          <span>{schedule.day}: {schedule.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Associations Card */}
          <Card className="bg-white shadow-md">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2 font-playfair text-2xl text-primary">
                <Users className="text-gold" />
                Parish Associations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {associations.map((association, index) => (
                  <Link 
                    to={`/associations/${association.id}`} 
                    key={index}
                    className="block"
                  >
                    <motion.div 
                      className="p-5 bg-ivory rounded-lg hover:bg-gold/5 transition-colors cursor-pointer border border-gray-100 h-full"
                      whileHover={{ y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">{association.name}</h3>
                      <p className="font-opensans text-soft-gray text-sm">{association.description}</p>
                      <div className="mt-3 text-gold text-sm font-medium flex items-center">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Priest Information */}
          <PriestInfo />
        </motion.div>
      </div>
    </section>
  );
};

export default MassTimings;
