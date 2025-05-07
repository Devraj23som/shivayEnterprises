import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-50 py-3 mb-1 flex border-b-2 items-center justify-between'>
        <div className="logo w-60 h-full">
            <img src="/shivayenterprises_Logo.jpg" alt="xyz" />
        </div>
        <div className='hidden md:visible w-40 h-full md:flex pr-5 justify-end items-center'>
            <ul className='flex  gap-2 text-base md:text-2xl'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#service">Services</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav