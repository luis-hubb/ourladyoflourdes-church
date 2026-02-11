
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'worship' | 'youth' | 'outreach' | 'bible-study';
  image?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Sunday Worship Service',
    date: '2025-04-20',
    time: '10:00 AM',
    location: 'Main Sanctuary',
    description: 'Join us for our weekly worship service celebrating Easter Sunday with special music and message.',
    category: 'worship',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Youth Group Meeting',
    date: '2025-04-24',
    time: '6:30 PM',
    location: 'Youth Center',
    description: 'Weekly gathering for teenagers with games, worship, and Bible study.',
    category: 'youth',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'Community Outreach',
    date: '2025-04-26',
    time: '9:00 AM',
    location: 'Community Center',
    description: 'Serving our local community by volunteering at the food bank.',
    category: 'outreach',
    image: '/placeholder.svg'
  },
  {
    id: '4',
    title: 'Bible Study Group',
    date: '2025-04-22',
    time: '7:00 PM',
    location: 'Fellowship Hall',
    description: 'In-depth study of the Book of Romans with discussion and prayer.',
    category: 'bible-study',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    title: 'Prayer Meeting',
    date: '2025-04-23',
    time: '6:00 AM',
    location: 'Prayer Chapel',
    description: 'Early morning prayer gathering for the church and community needs.',
    category: 'worship',
    image: '/placeholder.svg'
  },
  {
    id: '6',
    title: 'Children\'s Ministry',
    date: '2025-04-20',
    time: '10:00 AM',
    location: 'Children\'s Wing',
    description: 'Fun, engaging Bible lessons and activities for children during the worship service.',
    category: 'youth',
    image: '/placeholder.svg'
  }
];

export default events;
