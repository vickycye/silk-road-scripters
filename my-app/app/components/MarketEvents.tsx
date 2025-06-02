'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  promoted?: boolean;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Spring Artisan Market 2024',
    date: 'Mar 15-17, 2024',
    location: 'Seattle Center',
    imageUrl: '/images/event-1.jpg',
    promoted: true
  },
  {
    id: '2',
    title: 'Handmade & Vintage Fair',
    date: 'Apr 5-7, 2024',
    location: 'Pike Place Market',
    imageUrl: '/images/event-2.jpg'
  },
  {
    id: '3',
    title: 'Pacific NW Craft Exhibition',
    date: 'Apr 20-21, 2024',
    location: 'Washington State Convention Center',
    imageUrl: '/images/event-3.jpg'
  },
  {
    id: '4',
    title: 'Indigenous Art Market',
    date: 'May 1-3, 2024',
    location: 'Museum of History & Industry',
    imageUrl: '/images/event-4.jpg'
  }
];

export default function MarketEvents() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Link href={`/markets/${event.id}`} key={event.id}>
            <div className="group relative bg-white dark:bg-[#5d4e3a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 md:h-64">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {event.promoted && (
                  <div className="absolute top-4 left-4 bg-[#b8860b] dark:bg-[#d4a574] text-white text-sm px-3 py-1 rounded-full">
                    Promoted
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#3d2f1f] dark:text-[#e8dcc8] mb-2">
                  {event.title}
                </h3>
                <p className="text-[#5d4e3a] dark:text-[#b8b0a0] mb-1">{event.date}</p>
                <p className="text-[#5d4e3a] dark:text-[#b8b0a0]">{event.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 