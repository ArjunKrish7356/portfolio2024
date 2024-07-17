import React from 'react'
import Image from 'next/image'
import linkedin from "../../../public/linkedin.png"
import email from '../../../public/email.png'

function Contact() {
  return (
    <div className='flex flex-col items-center'>
        <div className=' title flex flex-col gap-1 sm:gap-0 w-full p-5 '>
            <h2 className=' text-gray-600 text-md sm:text-xs md:text-sm lg:text-base xl:text-xl text-center'>Get in Touch</h2>
            <h1 className=' text-black text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center'>Contact Me</h1>
        </div>
        <div className='Contact-Contents p-5'>
            <div className='Mail&Linkedin w-fit border border-black rounded-3xl grid sm:grid-cols-2 gap-2 p-5 text-black justify-items-center font-semibold text-lg sm:text-sm lg:text-xl xl:text-2xl'>
                <a className=' flex w-fit gap-2 items-center'>
                    <Image className=' size-8' src={linkedin}/>
                    <p>MyLinkedin</p>
                </a>
                <a className=' flex w-fit gap-2 items-center'>
                    <Image className=' size-10' src={email}/>
                    <p>arjunkrishna7356@gmail.com</p>
                </a>
            </div>
            <div className='tags grid sm:grid-flow-col justify-items-center p-10 gap-5 lg:gap-10 text-black text-lg lg:text-xl xl:text-2xl'>
                <a className=''>About</a>
                <a className=''>Experience</a>
                <a className=''>Projects</a>
                <a className=''>Contact</a>
            </div>
            <div className='copyright p-5 text-gray-600'>
                <p className='text-center'>Copyright @ 2024 Arjun Krishna. All Rights Reserved </p>
            </div>
        </div>
    </div>
  )
}

export default Contact