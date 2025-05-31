import Link from 'next/link';
import React from 'react'
import { House, ShoppingCart, GraduationCap, MessagesSquare, Store, Settings } from 'lucide-react'
// import { UserButton } from '@clerk/nextjs';
import DarkmodeToggle from './DarkModeToggle';
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className = "fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-green-300 dark:bg-red-100">
        <div className='grid gap-45 flex items-center justify-center py-5'>
          {/* <Link href="/login">
            <CircleUserRound size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer' />
          </Link> */}
          {/* <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          <DarkmodeToggle/>

          <div className='flex grid gap-10'>
            <Link href="/">
              <House size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href={"/shoppingcart"}>
              <ShoppingCart size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href={"/learn"}>
              <GraduationCap size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href={"/messages"}>
              <MessagesSquare size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            </Link>
            <Link href={"/markets"}>
              <Store size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer'/>
            </Link>
          </div>
          <Settings size={35} color="#CCC9A1" strokeWidth={1} className='cursor-pointer mt-10'/>
        </div>
        
    </nav>
  );
}
