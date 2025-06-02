'use client';

import { Search, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function MarketSearch() {
  const [location, setLocation] = useState('Seattle, WA');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex gap-2 bg-white dark:bg-[#5d4e3a] rounded-lg shadow-lg">
        {/* Location Input */}
        <div className="flex items-center gap-2 min-w-[200px] p-3 border-r border-[#8b4513]/20 dark:border-[#deb887]/20">
          <MapPin size={20} className="text-[#b8860b] dark:text-[#d4a574]" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-[#3d2f1f] dark:text-[#e8dcc8] placeholder-[#5d4e3a] dark:placeholder-[#b8b0a0] outline-none w-full"
            placeholder="Enter location..."
          />
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-2 min-w-[150px] p-3 border-r border-[#8b4513]/20 dark:border-[#deb887]/20">
          <Calendar size={20} className="text-[#b8860b] dark:text-[#d4a574]" />
          <select className="bg-transparent text-[#3d2f1f] dark:text-[#e8dcc8] outline-none w-full cursor-pointer">
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="weekend">This Weekend</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="flex flex-1 items-center gap-2 p-3">
          <Search size={20} className="text-[#b8860b] dark:text-[#d4a574]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-[#3d2f1f] dark:text-[#e8dcc8] placeholder-[#5d4e3a] dark:placeholder-[#b8b0a0] outline-none w-full"
            placeholder="Search by Fair, Event or Venue"
          />
        </div>

        {/* Search Button */}
        <button className="bg-[#b8860b] dark:bg-[#d4a574] text-white px-8 py-3 rounded-r-lg hover:opacity-90 transition-opacity">
          Search
        </button>
      </div>
    </div>
  );
} 