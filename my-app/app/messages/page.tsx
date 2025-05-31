import React from 'react'
import Navbar from '../components /Navbar'
import Footer from '../components /Footer'
import ChatList from '../components /ChatList'
import ChatWindow from '../components /ChatWindow'

export default function Messages() {
  return (
    <div className='pl-20'>
        <Navbar/>
        <main>
        <div className="min-h-screen bg-green-100 dark:bg-red-300">
          <div className="flex h-screen text-green-300 dark:text-red-100 bg-green-100 dark:bg-red-300">
            <div className="flex w-full">
              <ChatList />
              <ChatWindow />
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </div>   
    )
}
