import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-[50px] bg-red-700'>
      <ul className='flex justify-center items-center gap-2 h-full'>
        <li> <Link to="/" className='text-white'>Home</Link> </li>
        <li> <Link to="about" className='text-white'>About</Link> </li>
      </ul>
    </div>
  )
}

export default Header