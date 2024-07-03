import React from 'react'
import Image from 'next/image'
import AboutPic from '../../../public/AboutPic.png'
import educationicon from '../../../public/educationicon.png'

function About() {
  return (
    <div className=' h-screen w-screen'>
        <div className=' title flex flex-col gap-1 w-full h-[10%] md:h-[13%] justify-end'>
            <h2 className=' text-gray-600 text-md xl:text-xl text-center'>Get To Know More</h2>
            <h1 className=' text-black text-3xl xl:text-5xl font-semibold text-center'>About Me</h1>
        </div>
        <div className='About-outer h-5/6 w-auto md:flex md:items-center'>
            <div className='About-img flex flex-col w-full p-5'>
                <Image src={AboutPic} className=' size-[60%] md:size-[75%] self-center rounded-3xl'></Image>
            </div>
            <div className='About-content gap-5 flex flex-col  w-[100%] h-fit md:p-10'>
                <div className=' w-[90%] h-fit flex flex-col rounded-xl border border-black self-center p-5 '>
                    <Image className=' size-8 self-center' src={educationicon}></Image>
                    <h1 className=' text-lg xl:text-2xl text-black font-bold text-center'>Education</h1>
                    <h1 className=' text-md xl:text-xl text-gray-500 font-semibold text-center'>B.tech Computer Science & Engineering</h1>
                </div>
                <p className='text-black xl:text-xl  w-[100%] p-5 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
    </div>
  )
}

export default About