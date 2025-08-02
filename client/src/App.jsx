import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import assets from './assets/assets'

const App = () => (
  <div className="min-h-screen w-full flex items-center justify-center relative bg-black overflow-hidden">
    <img
      src={assets.bgImage}
      alt="Background"
      className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 w-[60rem] max-w-[80%] h-auto pointer-events-none z-0"
    />

    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  </div>
  )

export default App
