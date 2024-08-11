import React from 'react'
import checkmark from '../../../public/checkmark.png'
import Image from 'next/image'

function Experience() {
  return (
    <div id='experience' className='h-fit sm:h-fit w-full flex flex-col items-center text-black'>
       <div className='  title flex flex-col gap-1 sm:gap-0 w-full p-5'>
            <h2 className=' text-gray-600 text-md sm:text-xs md:text-sm lg:text-base xl:text-xl text-center'>Explore my</h2>
            <h1 className=' text-black text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center'>Experience</h1>
        </div> 

        <div className=' h-fit flex flex-col sm:flex-row sm:justify-evenly w-full p-5 gap-3  items-center'>
         <div className=' h-fit w-[90%] sm:w-fit p-5  border border-black rounded-3xl  flex flex-col items-center'>
            <h1 className=' text-xl font-semibold pb-[5%] lg:pb-[10%] sm:text-sm lg:text-xl xl:text-2xl'>Frontend Development</h1>
            <div className='sm:grid grid-rows-3 grid-flow-col grid-cols-2 gap-5 md:gap-10 xl:gap-15 flex flex-col justify-evenly h-fit'>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>React</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>CSS</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Tailwind</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>DaisyUI</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>NodeJS</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>PostgreSQL</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
            </div>
          </div>
          <div className=' h-fit w-[90%] sm:w-fit p-5  border border-black rounded-3xl  flex flex-col items-center'>
            <h1 className=' text-xl font-semibold pb-[5%] lg:pb-[10%] sm:text-base lg:text-xl xl:text-3xl'>Languages</h1>
            <div className='sm:grid grid-rows-3 grid-cols-2 gap-5 md:gap-10 xl:gap-15 flex flex-col justify-evenly h-[70%]'>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Rust</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Medium</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Python</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Javascript</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Medium</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Java</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Medium</h1>
              </article>
              <article className=' grid grid-cols-3 grid-rows-2 max-w-fit gap-x-3 h-fit'> 
                <Image className='w-fit row-span-2 col-span-1  size-[50px] sm:size-[30px] lg:size-[40px] justify-self-end' src={checkmark} alt="checkmark icon"></Image>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>C</h1>
                <h1 className=' col-span-2 sm:text-sm lg:text-lg xl:text-2xl'>Experienced</h1>
              </article>
            </div>
          </div>
        </div> 

        
    </div>
  )
}

export default Experience