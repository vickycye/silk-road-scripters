import React from 'react'
import { Search } from 'lucide-react'

export default function Searchbar() {
  return (
        <div className='flex bg-[#b8860b] dark:bg-[#5d4e3a] m-auto rounded-full w-90 h-9 items-center justify-center'>
          <label htmlFor="search" className='block relative text-[#e8dcc8] dark:text-[#e8dcc8]'>
            <Search size={15} color="#e8dcc8" strokeWidth={1} className='pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3s' />
            <input 
              type="text" 
              id='search' 
              name='search' 
              placeholder='Search...' 
              className='bg-[#b8860b] autofill:bg-[#b8860b] dark:bg-[#5d4e3a] dark:autofill:bg-[#5d4e3a] w-85 form-input pl-5 outline-hidden text-sm text-[#e8dcc8] dark:text-[#e8dcc8] placeholder-[#e8dcc8] dark:placeholder-[#e8dcc8] focus:ring-2 focus:ring-[#8b4513] dark:focus:ring-[#8b6914]'
            />             
          </label>
        </div>
  )
}