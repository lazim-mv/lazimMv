import React from 'react'

function Header() {
  return (
    <div className='container flex justify-around items-center h-20 shadow-lg shadow-blue-950 headerList'>
        <h6 className='text-2xl hover:text-sky-700 cursor-pointer'>HOME</h6>
        <h6 className='text-2xl hover:text-sky-700 cursor-pointer'>PROJECT</h6>
        <h6 className='text-2xl hover:text-sky-700 cursor-pointer'>ABOUT</h6>
        <h6 className='text-2xl hover:text-sky-700 cursor-pointer'>CONTACT</h6>
    </div>
  )
}

export default Header