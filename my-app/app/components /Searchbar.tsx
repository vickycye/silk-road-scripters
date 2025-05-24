import React from 'react'
import { Search } from 'lucide-react'

export default function Searchbar() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Search 
          size={18} 
          className="absolute left-3 text-green-700 pointer-events-none" 
          strokeWidth={1.5} 
        />
        <input 
          type="text" 
          id="search" 
          name="search" 
          placeholder="Search..." 
          className="w-full py-2 pl-10 pr-4 text-sm text-green-900 bg-green-300 rounded-full outline-none placeholder-green-700 focus:ring-2 focus:ring-green-400 transition-all"
          aria-label="Search"
        />
      </div>
    </div>
  )
}
