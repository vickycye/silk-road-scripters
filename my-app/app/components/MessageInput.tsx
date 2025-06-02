'use client';

import { useState } from 'react';
import { Send, Image as ImageIcon } from 'lucide-react';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending here
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <button
        type="button"
        className="p-2 rounded-full hover:bg-[#daa520]/10 dark:hover:bg-[#8b6914]/20 transition-colors"
      >
        <ImageIcon size={20} className="text-[#3d2f1f] dark:text-[#e8dcc8]" />
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message..."
        className="flex-1 bg-[#daa520]/10 dark:bg-[#8b6914]/20 rounded-full px-4 py-2 text-[#3d2f1f] dark:text-[#e8dcc8] placeholder-[#5d4e3a] dark:placeholder-[#b8b0a0] focus:outline-none"
      />
      
      <button
        type="submit"
        disabled={!message.trim()}
        className={`p-2 rounded-full transition-colors ${
          message.trim()
            ? 'text-[#b8860b] dark:text-[#d4a574] hover:bg-[#daa520]/10 dark:hover:bg-[#8b6914]/20'
            : 'text-[#5d4e3a] dark:text-[#b8b0a0] cursor-not-allowed'
        }`}
      >
        <Send size={20} />
      </button>
    </form>
  );
}
