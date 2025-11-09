import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const parishPriests = [
  { no: 1, name: "Fr. Paul Fernandes OFM", period: "7 Sept 1974 – 12 Jan 1976" },
  { no: 2, name: "Fr. Nicholas joined Fr. Paul", period: "14 Nov 1974" },
  { no: 3, name: "Fr. Agnel D'Mello OFM", period: "12 Jan 1976 – May 1979" },
  { no: 4, name: "Fr. Paul Fernandes OFM", period: "May 1979 – June 1980" },
  { no: 5, name: "Fr. Simon Pinto OFM", period: "June 1980 – June 1983" },
  { no: 6, name: "Fr. Nicholas D'Souza OFM", period: "June 1983 – June 1986" },
  { no: 7, name: "Fr. Lawrence Pereira (Diocesan)", period: "June 1986 – June 1989" },
  { no: 8, name: "Fr. Valentine Crasta OFM", period: "June 1989 – June 1992" },
  { no: 9, name: "Fr. Dharma L. Bernard OFM", period: "June 1992 – April 1998" },
  { no: 10, name: "Fr. Valerian Quadros OFM", period: "April 1998 – April 2004" },
  { no: 11, name: "Fr. Cajetan Lourenco OFM", period: "May 2004 – April 2007" },
  { no: 12, name: "Fr. Alphone Moras OFM", period: "April 2007 – June 2010" },
  { no: 13, name: "Fr. Balthazar Pinto OFM", period: "June 2010 – July 2014" },
  { no: 14, name: "Fr. Alwyn D'Souza OFM", period: "July 2014 – July 2016" },
  { no: 15, name: "Fr. Prashanth Fernandes OFM", period: "July 2016 – Dec. 2016" },
  { no: 16, name: "Fr. Nicholas D'Souza OFM", period: "Dec. 2016 – July 2020" },
  { no: 17, name: "Fr. Cajetan Lourenco OFM", period: "July 2020 – May 2021" },
  { no: 18, name: "Fr. Prem Kumar D'Souza OFM", period: "May 2021 – Present" },
];

const ParishPriestsHistory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex items-center justify-center mb-8">
          <Users className="h-8 w-8 text-pastel-gold mr-3" />
          <h3 className="font-playfair text-3xl font-bold text-gray-900">
            Franciscan Parish Priests
          </h3>
        </div>
        
        <div className="mb-6 text-center">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Foundation of Mission Unit:</span> 1907
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Date of Construction of the Church:</span> 1957
          </p>
          <p className="text-gray-600 italic">
            From 7th September 1974, Franciscan Friars began to take care of this mission unit.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">No.</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Name of Parish Priest</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Period of Service</th>
              </tr>
            </thead>
            <tbody>
              {parishPriests.map((priest, index) => (
                <tr 
                  key={priest.no}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50 transition-colors duration-200`}
                >
                  <td className="border border-gray-300 px-4 py-3 text-gray-700 text-center">
                    {priest.no < 10 ? `0${priest.no}` : priest.no}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900 font-medium">
                    {priest.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    {priest.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 italic">
            We honor and remember all the dedicated priests who have served our parish community with faith and devotion.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ParishPriestsHistory;
