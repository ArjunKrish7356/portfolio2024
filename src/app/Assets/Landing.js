import React from 'react'
import Image from 'next/image'
import profilepic from '../../../public/profilepic.png';



function Landing() {
  return (
    <div className=' h-screen w-screen'>
      <div className="navbar text-black p-10">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl lg:4xl">MAK</a>
        </div>
        <div className=' navbar-end'>
          <div className="dropdown dropdown-bottom dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
      <div className='profile flex flex-col h-fit  md:flex-row md:justify-evenly items-center pt-10'>
        <div className='profile-img size-[50%] md:size-[30%] m-5' >
          <Image src={profilepic} className=''></Image>
        </div>
        <div className='profile-content w-fit md:size-2/4  flex flex-col gap-4 items-center font-semibold text-gray-600 '>
          <h1 className=' text-xl md:text-3xl'>Hello I'm</h1>
          <h1 className=' text-4xl md:text-6xl text-black'>Arjun Krishna</h1>
          <h1 className=' text-2xl md:text-4xl'>Frontend Developer</h1>
          <div className='profile-buttons w-fit p-5'>
            <button className=' btn btn-md btn-outline hover:bg-black hover:text-white text-black rounded-full text-base m-1'>Download CV</button>
            <button className=' btn btn-md text-white rounded-full text-base m-1'>Contact Info</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Landing