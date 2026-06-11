
export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'worship' | 'youth' | 'outreach' | 'bible-study' | 'Feast';
  image?: string;
  media?: MediaItem[];
}

const motherTheresaPhotos = [
  '/images/Mother-th-images/IMG-20260607-WA0643.jpg',
    '/images/Mother-th-images/IMG-20260607-WA0662.jpg',
      '/images/Mother-th-images/IMG-20260607-WA0659.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0644.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0652.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0653.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0656.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0657.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0658.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0660.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0661.jpg',
  '/images/Mother-th-images/IMG-20260607-WA0663.jpg',
  '/images/Mother-th-images/NEW.jpg',
  '/images/Mother-th-images/st-mother.jpg'
];

const motherTheresaVideos = [
  '/images/Mother-th-images/83ba06b7edc7436d97b9e76b7f82d04d.mp4',
  '/images/Mother-th-images/be5c6b517a1f473b896335e62cba8d56.mp4',
  '/images/Mother-th-images/f36947db7d374034a7b34f3ea3987b17.mp4'
];

const events: Event[] = [
  {
    id: '1',
    title: 'St. Mother Theresa Feast',
    date: '2026-06-07',
    time: '7:00 PM - 8:30 PM',
    location: 'St. Mother Theresa Ward',
    description: 'Celebrate the St. Mother Theresa Feast with a special parish gathering, presentations, music, and fellowship. Enjoy the vibrant ward celebration with photos from the event.',
    category: 'Feast',
    image: '/images/Mother-th-images/st-mother.jpg',
    media: [
      ...motherTheresaPhotos.map((src): MediaItem => ({
        type: 'image',
        src,
        caption: 'St. Mother Theresa Fiesta photo'
      })),
      ...motherTheresaVideos.map((src): MediaItem => ({
        type: 'video',
        src,
        caption: 'St. Mother Theresa Fiesta video'
      }))
    ]
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
