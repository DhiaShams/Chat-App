import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate()

  return (
    <div className={`bg-[#8185B2]/10 h-full rounded-r-xl overflow-y-scroll text-white ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className='px-3'>
        {/* Top bar: logo + menu icon aligned & close to top */}
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <img src={assets.logo} alt="logo" className='w-30' />

          {/* Menu Icon with Dropdown */}
          <div className='relative group'>
            <img src={assets.menu_icon} alt="menu" className='h-5 w-5 cursor-pointer' />
            <div className='absolute top-full right-0 z-20 w-32 p-4 mt-2 rounded-md bg-[#213f42] border border-gray-600 text-gray-100 hidden group-hover:block'>
              <p onClick={() => navigate('/profile')} className='cursor-pointer text-sm'>Edit Profile</p>
              <hr className='my-2 border-t border-gray-500' />
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export  default Sidebar