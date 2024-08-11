import React from 'react'
import Image from 'next/image'
import profilepic from '../../../public/profilepic.png';



function Landing() {
  return (
    <div className='w-screen min-h-screen flex flex-col'>
      <div className="navbar w-full text-black px-10 pt-[1%] pb-0">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl lg:text-4xl">MAK</a>
        </div>
        <div className=' navbar-end'>
          <div className="dropdown dropdown-bottom dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-[50vw] p-2 shadow gap-3">
              <li><a href="about">About</a></li>
              <li><a href="expereince">Experience</a></li>
              <li><a href="projects">Projetcs</a></li>
              <li><a href="contacts">Contacts</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 lg:text-xl">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projetcs</a></li>
              <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </div>
      <div className='profile justify-center flex flex-col h-fit md:flex-row md:justify-evenly items-center p-0  grow'>
        <div className=' ' >
          <Image height={500} width={500} src={profilepic} alt='profile-pic' className='size-[280px] lg:size-[350px] xl:size-[480px] 2xl:size-[550px] mt-[20px] mb-[20px] sm:m-0 rounded-full'></Image>
        </div>
        <div className='profile-content h-fit w-fit md:size-2/4 flex flex-col gap-4 items-center justify-center font-semibold text-gray-600 '>
          <h1 className=' text-xl lg:text-3xl'>Hello I'm</h1>
          <h1 className=' text-4xl lg:text-6xl text-black'>Arjun Krishna</h1>
          <h1 className=' text-2xl lg:text-4xl'>Frontend Developer</h1>
          <div className='profile-buttons  w-fit '>
            <button className=' btn btn-md btn-outline hover:bg-black hover:text-white text-black rounded-full text-base m-1'>Download CV</button>
            <button className=' btn btn-md text-white rounded-full text-base m-1'>Contact Info</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Landing