import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div
        className={`
          w-full max-w-[60rem] h-full max-h-[75vh]
          grid relative overflow-hidden
          backdrop-blur-md border border-gray-600 bg-black/30 rounded-2xl shadow-xl
          ${selectedUser
            ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
            : 'md:grid-cols-2'}
        `}
      >
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
