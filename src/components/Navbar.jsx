import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-3 px-14'>
      <div className='flex items-center'>
        <img src={logo} alt="logo" className='w-7 h-10' />
        <span className='text-2xl font-bold ml-2 tracking-tightest'>Oneflow</span>
      </div>
      <div className='flex items-center gap-7 text-neutral-600'>
        <span>Solutions</span>
        <span>Features</span>
        <span>Services</span>
        <span>Pricing</span>
      </div>
      <div className='flex items-center gap-4 font-semibold'>
        <span>Log in</span>
        <span className='border border-black px-4 py-2 rounded-xl shadow-sm border-neutral-500'>Get Demo</span>
      </div>
    </div>
  )
}

export default Navbar
