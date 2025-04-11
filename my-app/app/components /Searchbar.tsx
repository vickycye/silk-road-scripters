import React from 'react'
import { Search } from 'lucide-react'

export default function Searchbar() {
  return (
        <div className='flex bg-green-300 m-auto rounded-full w-90 h-9 items-center justify-center'>
          <label htmlFor="search" className='block relative text-green-100'>
            <Search size={15} color="#CCC9A1" strokeWidth={1} className='pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3s' />
            <input type="text" id='search' name='search' placeholder='Search...' className='bg-green-300 autofill:bg-green-300  w-85 form-input pl-5 outline-hidden text-sm'/>             
          </label>
        </div>
  )}
