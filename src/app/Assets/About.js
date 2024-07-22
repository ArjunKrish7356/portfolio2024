import React from 'react'
import Image from 'next/image'
import AboutPic from '../../../public/AboutPic.png'
import educationicon from '../../../public/educationicon.png'

function About() {
  return (
    <div id='about' className='w-full flex flex-col justify-evenly p-5'>
        <div className=' title flex flex-col gap-1 sm:gap-0 w-full p-5'>
            <h2 className=' text-gray-600 text-md sm:text-xs md:text-sm lg:text-base xl:text-xl text-center'>Get To Know More</h2>
            <h1 className=' text-black text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center'>About Me</h1>
        </div>
        <div className='About-outer h-fit w-auto md:flex md:items-center'>
            <div className='About-img flex flex-col sm:w-1/2 px-5 h-fit '>
                <Image src={AboutPic} alt='profilepic-2' className='size-[280px] sm:size-[280px] lg:size-[320px] xl:size-[480px] 2xl:size-[600px] self-center rounded-3xl'></Image>
            </div>
            <div className='About-content sm:w-1/2 gap-5 py-5 sm:gap-0 flex flex-col h-fit md:p-10'>
                <div className=' w-[90%] h-fit flex flex-col rounded-xl border border-black self-center p-1 sm:p-5 '>
                    <Image alt='educationicon' className='size-8 self-center' src={educationicon}></Image>
                    <h1 className=' text-lg sm:text-xs lg:text-base xl:text-2xl 2xl:text-4xl text-black font-bold text-center'>Education</h1>
                    <h1 className=' text-md sm:text-xs lg:text-base xl:text-xl 2xl:text-3xl text-gray-500 font-semibold text-center'>B.tech Computer Science & Engineering</h1>
                </div>
                <p className='text-black sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-3xl w-[100%]  sm:p-5 text-center'>I am Arjun - a passionate, skilled coder who loves pushing the boundaries of technology to produce high-quality code that meets the needs of modern software development.</p>
            </div>
        </div>
    </div>
  )
}

export default About