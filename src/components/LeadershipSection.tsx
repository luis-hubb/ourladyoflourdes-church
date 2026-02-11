import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leadership = [
  {
    name: "Rev. Fr. Prem Kumar D'souza",
    role: "Parish Priest",
    image: "/images/prem_kumar.jpg",
    bio: "Leading our parish with wisdom and compassion, serving the community of Our Lady of Lourdes.",
    email: "parish.priest@church.org",
  },
  {
    name: "Rev. Fr. Dharma Bernard",
    role: "Assistant Parish Priest",
    image: "/images/dharma_bernard.jpg",
    bio: "Supporting our parish community with dedication and faith.",
    email: "assistant.priest@church.org",
  },
  {
    name: "Br. Xavier Durairaj",
    role: "Minister Provincial",
    image: "/images/Br-Xavier-Durairaj.png",
    bio: "Providing spiritual guidance and leadership to our Franciscan community.",
    email: "provincial@church.org",
  },
  {
    name: "Mother Mary",
    role: "Spiritual Guide",
    image: "/images/mother_marry.jpg",
    bio: "Our beloved Mother Mary, guiding us in faith and devotion.",
    email: "info@church.org",
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team guiding our church community with faith and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-xl mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.role}</p>
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection; 