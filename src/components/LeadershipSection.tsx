import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leadership = [
  {
    name: "Rev. James Wilson",
    role: "Senior Pastor",
    image: "/leadership/pastor.jpg",
    bio: "Leading our congregation with wisdom and compassion for over 15 years.",
    email: "pastor@church.com",
  },
  {
    name: "Dr. Emily Thompson",
    role: "Music Director",
    image: "/leadership/music-director.jpg",
    bio: "Bringing beautiful worship music to our services for the past decade.",
    email: "music@church.com",
  },
  {
    name: "Robert Martinez",
    role: "Youth Minister",
    image: "/leadership/youth-minister.jpg",
    bio: "Dedicated to nurturing the faith of our young members.",
    email: "youth@church.com",
  },
  {
    name: "Lisa Anderson",
    role: "Children's Ministry Director",
    image: "/leadership/children-director.jpg",
    bio: "Creating engaging programs for our youngest members.",
    email: "children@church.com",
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