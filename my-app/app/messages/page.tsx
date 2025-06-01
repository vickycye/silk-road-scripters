import React from 'react'
import ChatList from '../components/ChatList'
import ChatWindow from '../components/ChatWindow'

export default function Messages() {
  return (
    <main>
      <div className="min-h-screen bg-[#e6e1d6] dark:bg-[#3c3c3c]">
        <div className="flex h-screen text-[#5d4e3a] dark:text-[#b8b0a0] bg-[#e6e1d6] dark:bg-[#3c3c3c]">
          <div className="flex w-full">
            <ChatList />
            <ChatWindow />
          </div>
        </div>
      </div>
    </main>
  )
}