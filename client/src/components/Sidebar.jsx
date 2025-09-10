import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate()

  return (
    <div
      className={`bg-[#8185B2]/10 h-full rounded-r-xl overflow-y-scroll text-white ${selectedUser ? 'max-md:hidden' : ''
        }`}
    >
      <div className="px-3">
        {/* Top bar: logo + menu icon aligned & close to top */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src={assets.logo} alt="logo" className="w-30" />

          {/* Menu Icon with Dropdown */}
          <div className="relative group">
            <img src={assets.menu_icon} alt="menu" className="h-5 w-5 cursor-pointer" />

            {/* Dropdown stays open when hovering over icon or dropdown */}
            <div
              className="absolute top-full right-0 z-20 w-32 p-4 mt-1 rounded-md
    bg-[#213f42] border border-gray-600 text-gray-100
    invisible opacity-0 group-hover:visible group-hover:opacity-100
    hover:visible hover:opacity-100 transition-all"
            >
              <p
                onClick={() => navigate('/profile')}
                className="cursor-pointer text-sm hover:text-white/80"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p className="cursor-pointer text-sm hover:text-white/80">Logout</p>
            </div>
          </div>
        </div>

        <div className='bg-[#2b4f44]/40 rounded-full flex items-center gap-2 py-3 px-4 mt-0 mb-3'>
          <img src={assets.search_icon} alt="Search" className='w-3'/>
          <input type="text" className='bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1' placeholder='Search User...'/>
        </div>

      </div>

        <div className='flex flex-col'>
          {userDummyData.map((user,index)=>(
            <div onClick={()=>{setSelectedUser(user)}} key={index} className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-smm:text-sm ${selectedUser?._id===user._id && 'bg-[#213b37]/50'}`}>
              <img src={user?.profilePic|| assets.avatar_icon} alt="" className='w-[35px] aspect-[1/1] rounded-full'/>
              <div className='flex flex-col leading-5'>
                  <p>{user.fullName}</p>
                  {
                    index<3?  <span className='text-green-400 text-xs'>Online</span> : <span className='text-neutral-400 text-xs'>Offline</span>
                  }
              </div>
              {
                index>1 && <p className='absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-[#22875f]'>{index}</p>
              }
            </div>
          ))}
        </div>

    </div>
  )
}

export default Sidebar
