import React from 'react'
import Logo from '../assets/Images/Logos.jpg'

function Navbar() {
  return (
    <div className='p-2 shadow-b-2 border-b shadow-lg   '>
        <div className='flex justify-between'>
        <div className='mx-5'>
            <img src={Logo} alt="Logo" className='w-20 rounded-full' />
        </div>
        <div className='flex items-center mx-5 gap-5 font-bold'>
            <h1>Home</h1>
            <h1>Dashboard</h1>
            <button className='text-white bg-black p-3 rounded-xl hover:bg-white hover:text-black'>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar