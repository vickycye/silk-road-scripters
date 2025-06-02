'use client';

import Image from 'next/image';
import MessageInput from "./MessageInput";
import { useState } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

export default function ChatWindow() {
  const [messages] = useState<Message[]>([
    { id: '1', content: "Hi! I'm interested in your hand-dyed merino silk blend. Could you tell me more about the dyeing process?", isUser: true, timestamp: '10:05 PM' },
    { id: '2', content: "Of course! I use natural dyes derived from plants and minerals. Each skein is hand-painted to ensure unique color variations. The process takes about 3 days to complete.", isUser: false, timestamp: '10:07 PM' },
    { id: '3', content: "That sounds amazing! What colors do you have available right now?", isUser: true, timestamp: '10:08 PM' },
  ]);

  return (
    <div className="flex flex-col flex-1 bg-[#e6e1d6] dark:bg-[#3c3c3c] border-l-2 border-[#8b4513]/20 dark:border-[#deb887]/20">
      {/* Header */}
      <div className="border-b-2 border-[#8b4513]/20 dark:border-[#deb887]/20 p-4 flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image 
            src="/images/artist-1.webp" 
            alt="Studio Seven" 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-[#3d2f1f] dark:text-[#e8dcc8] font-medium">Studio Seven</div>
          <div className="text-sm text-[#5d4e3a] dark:text-[#b8b0a0]">Active now</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex items-end gap-2 ${message.isUser ? 'flex-row-reverse' : ''}`}>
            {!message.isUser && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image 
                  src="/images/artist-1.webp" 
                  alt="Studio Seven" 
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className={`max-w-[70%] ${
              message.isUser 
                ? 'bg-[#8b4513]/20 dark:bg-[#deb887]/20' 
                : 'bg-white dark:bg-[#5d4e3a]'
            } rounded-2xl px-4 py-2`}>
              <p className={`text-sm ${
                message.isUser 
                  ? 'text-[#3d2f1f] dark:text-[#e8dcc8]' 
                  : 'text-[#3d2f1f] dark:text-[#e8dcc8]'
              }`}>
                {message.content}
              </p>
              <p className={`text-xs mt-1 ${
                message.isUser 
                  ? 'text-[#3d2f1f]/70 dark:text-[#e8dcc8]/70' 
                  : 'text-[#5d4e3a] dark:text-[#b8b0a0]'
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t-2 border-[#8b4513]/20 dark:border-[#deb887]/20">
        <MessageInput />
      </div>
    </div>
  );
}