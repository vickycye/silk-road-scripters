import Link from 'next/link';
import React from 'react'
import { House, ShoppingCart, GraduationCap, MessagesSquare, Store, Settings } from 'lucide-react'
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-40 w-20 h-screen bg-green-300 transition-transform -translate-x-full sm:translate-x-0">
      <div className="flex flex-col items-center justify-between h-full py-6">
        <div className="flex flex-col items-center space-y-6">
          <UserButton/>
          <div className="flex flex-col space-y-6">
            <Link href="/" className="hover:bg-green-400 p-2 rounded-lg transition-colors">
              <House size={35} className="text-[#CCC9A1]" strokeWidth={1}/>
            </Link>
            <Link href="/shop" className="hover:bg-green-400 p-2 rounded-lg transition-colors">
              <ShoppingCart size={35} className="text-[#CCC9A1]" strokeWidth={1}/>
            </Link>
            <Link href="/learn" className="hover:bg-green-400 p-2 rounded-lg transition-colors">
              <GraduationCap size={35} className="text-[#CCC9A1]" strokeWidth={1}/>
            </Link>
            <Link href="/messages" className="hover:bg-green-400 p-2 rounded-lg transition-colors">
              <MessagesSquare size={35} className="text-[#CCC9A1]" strokeWidth={1}/>
            </Link>
            <Link href="/store" className="hover:bg-green-400 p-2 rounded-lg transition-colors">
              <Store size={35} className="text-[#CCC9A1]" strokeWidth={1}/>
            </Link>
          </div>
        </div>
        <Link href="/settings" className="hover:bg-green-400 p-2 rounded-lg transition-colors">
          <Settings size={35} className="text-[#CCC9A1]" strokeWidth={1}/>
        </Link>
      </div>
    </nav>
  );
}
