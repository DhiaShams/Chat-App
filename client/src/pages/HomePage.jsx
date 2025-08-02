import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center px-4 sm:px-[15%] py-10 sm:py-[5%]'>
        <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative'>
          <Sidebar />
          <ChatContainer />
          <RightSidebar />
        </div>
    </div>
  )
}

export default HomePage
