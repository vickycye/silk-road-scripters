'use client';

import Link from 'next/link';
import { useState } from 'react';
import { House, ShoppingCart, GraduationCap, MessagesSquare, Store, Settings, Menu, X } from 'lucide-react';
import DarkmodeToggle from './DarkModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 sm:hidden bg-[#b8860b] dark:bg-[#5d4e3a] hover:bg-[#daa520] dark:hover:bg-[#3c3c3c] active:bg-[#9a7209] dark:active:bg-[#c4955c] p-2 rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} color="#e8dcc8" /> : <Menu size={24} color="#e8dcc8" />}
      </button>

      <nav className={`fixed top-0 left-0 z-40 w-20 h-screen bg-[#b8860b] dark:bg-[#5d4e3a] transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:translate-x-0`}>
        <div className='grid gap-45 flex items-center justify-center py-5'>
          <DarkmodeToggle/>

          <div className='flex grid gap-10'>
            <Link href="/" className="hover:bg-[#daa520] dark:hover:bg-[#8b6914] active:bg-[#9a7209] dark:active:bg-[#c4955c] p-2 rounded-lg transition-colors">
              <House size={35} color="#e8dcc8" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href="/shoppingcart" className="hover:bg-[#daa520] dark:hover:bg-[#8b6914] active:bg-[#9a7209] dark:active:bg-[#c4955c] p-2 rounded-lg transition-colors">
              <ShoppingCart size={35} color="#e8dcc8" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href="/learn" className="hover:bg-[#daa520] dark:hover:bg-[#8b6914] active:bg-[#9a7209] dark:active:bg-[#c4955c] p-2 rounded-lg transition-colors">
              <GraduationCap size={35} color="#e8dcc8" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href="/messages" className="hover:bg-[#daa520] dark:hover:bg-[#8b6914] active:bg-[#9a7209] dark:active:bg-[#c4955c] p-2 rounded-lg transition-colors">
              <MessagesSquare size={35} color="#e8dcc8" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href="/markets" className="hover:bg-[#daa520] dark:hover:bg-[#8b6914] active:bg-[#9a7209] dark:active:bg-[#c4955c] p-2 rounded-lg transition-colors">
              <Store size={35} color="#e8dcc8" strokeWidth={1} className='cursor-pointer'/>
            </Link>
          </div>
          <div className="hover:bg-[#daa520] dark:hover:bg-[#8b6914] active:bg-[#9a7209] dark:active:bg-[#c4955c] p-2 rounded-lg transition-colors">
            <Settings size={35} color="#e8dcc8" strokeWidth={1} className='cursor-pointer mt-10'/>
          </div>
        </div>
      </nav>
    </>
  );
}