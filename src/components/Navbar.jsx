import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-900 text-white py-2">
      <div className="logo">
        <span className='text-base font-bold md:text-xl mx-8'>DO-Tasks</span>
      </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
