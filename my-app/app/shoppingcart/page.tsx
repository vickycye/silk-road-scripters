import React from 'react'
import Navbar from '../components /Navbar'
import Footer from '../components /Footer'

export default function ShoppingCart() {
  return (
    <div className='pl-20'>
        <Navbar/>
        <main>
        <div className="min-h-screen bg-green-100 dark:bg-red-300">
          <header className="bg-green-100 shadow dark:bg-red-300">
            <h1>Shopping Cart</h1>
          </header>
        </div>
        <Footer/>
      </main>
    </div>    
    )
}
