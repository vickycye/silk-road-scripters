'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  isActive: boolean;
  imageUrl: string;
}

export default function ChatList() {
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      name: 'Studio Seven',
      lastMessage: 'Of course! I use natural dyes derived from...',
      timestamp: '10:07 PM',
      isActive: true,
      imageUrl: '/images/artist-1.webp'
    },
    {
      id: '2',
      name: 'Caravan Crafts',
      lastMessage: 'Your wallet will be ready next week',
      timestamp: '9:45 PM',
      isActive: false,
      imageUrl: '/images/leatherworker.jpg'
    },
    {
      id: '3',
      name: 'Monica Jewelry',
      lastMessage: 'Thank you for your order!',
      timestamp: 'Yesterday',
      isActive: false,
      imageUrl: '/images/monica-jewelry.jpg'
    }
  ]);

  return (
    <div className="w-96 bg-[#e6e1d6] dark:bg-[#3c3c3c]">
      {/* Header */}
      <div className="p-4 border-b-2 border-[#8b4513]/20 dark:border-[#deb887]/20">
        <h1 className="text-xl font-semibold text-[#3d2f1f] dark:text-[#e8dcc8]">Messages</h1>
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto">
        {chats.map((chat) => (
          <div 
            key={chat.id} 
            className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-[#daa520]/10 dark:hover:bg-[#8b6914]/20 transition-colors
              ${chat.isActive ? 'bg-[#daa520]/20 dark:bg-[#8b6914]/30' : ''}`}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image 
                src={chat.imageUrl} 
                alt={chat.name} 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-[#3d2f1f] dark:text-[#e8dcc8] truncate">{chat.name}</h3>
                <span className="text-xs text-[#5d4e3a] dark:text-[#b8b0a0] ml-2">{chat.timestamp}</span>
              </div>
              <p className="text-sm text-[#5d4e3a] dark:text-[#b8b0a0] truncate">
                {chat.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}