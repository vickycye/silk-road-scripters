import Link from 'next/link';
import React from 'react'
import { House, ShoppingCart, GraduationCap, MessagesSquare, Store, Settings, CircleUserRound } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className = "fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-green-300">
        <div className='grid gap-45 flex items-center justify-center py-5'>
          <Link href="/login">
            <CircleUserRound size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer' />
          </Link>
          <div className='flex grid gap-10'>
            <Link href="/">
              <House size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <ShoppingCart size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            <GraduationCap size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            <MessagesSquare size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            <Store size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
          </div>
          <Settings size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
        </div>
        
    </nav>
  );
}
