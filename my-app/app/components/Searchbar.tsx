import React from 'react'
import { Search } from 'lucide-react'

export default function Searchbar() {
  return (
        <div className='flex bg-[#b8860b] dark:bg-[#d4a574] m-auto rounded-full w-90 h-9 items-center justify-center'>
          <label htmlFor="search" className='block relative text-[#e8dcc8] dark:text-[#b8b0a0]'>
            <Search size={15} color="#e8dcc8" strokeWidth={1} className='pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3s' />
            <input 
              type="text" 
              id='search' 
              name='search' 
              placeholder='Search...' 
              className='bg-[#b8860b] autofill:bg-[#b8860b] dark:bg-[#d4a574] dark:autofill:bg-[#d4a574] w-85 form-input pl-5 outline-hidden text-sm text-[#e8dcc8] dark:text-[#b8b0a0] placeholder-[#e8dcc8] dark:placeholder-[#b8b0a0] focus:ring-2 focus:ring-[#8b4513] dark:focus:ring-[#deb887]'
            />             
          </label>
        </div>
  )
}