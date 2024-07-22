import React from 'react'
import Image from 'next/image'
import project1 from '../../../public/project1.png'

function Projects() {
  return (
    <div id='projects' className=' w-screen'>
        <div className=' title flex flex-col gap-1 sm:gap-0 w-full pt-5'>
            <h2 className=' text-gray-600 text-md sm:text-xs md:text-sm lg:text-base xl:text-xl text-center'>Browse My Recent</h2>
            <h1 className=' text-black text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center'>Projects</h1>
        </div>
        <div className='project-container w-full h-fit grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 text-black p-5 place-items-center'>
           <div className='h-fit sm:w-fit  grid gap-3 lg:gap-4 xl:gap-6 p-5 border border-black rounded-3xl overflow-hidden justify-items-center'>
              <Image className=' rounded-3xl justify-self-center sm:size-[200px] lg:size-[300px] xl:size-[400px]' src={project1}></Image>
              <h1 className=' w-fit  text-xl font-semibold sm:text-sm lg:text-lg xl:text-2xl'>Project One</h1>
              <div className=' w-fit h-fit flex justify-evenly gap-2 lg:gap-4'>
                <button className=' btn btn-md sm:max-lg:btn-sm xl:btn-lg btn-outline hover:bg-black hover:text-white text-black rounded-full text-base sm:text-sm xl:text-xl'>Github</button>
                <button className=' btn btn-md sm:max-lg:btn-sm xl:btn-lg  btn-outline hover:bg-black hover:text-white text-black rounded-full text-base sm:text-sm xl:text-xl'>Live Demo</button>
              </div>
            </div>
            <div className='h-fit sm:w-fit  grid gap-3 lg:gap-4 xl:gap-6 p-5 border border-black rounded-3xl overflow-hidden justify-items-center'>
              <Image className=' rounded-3xl justify-self-center sm:size-[200px] lg:size-[300px] xl:size-[400px]' src={project1}></Image>
              <h1 className=' w-fit  text-xl font-semibold sm:text-sm lg:text-lg xl:text-2xl'>Project One</h1>
              <div className=' w-fit h-fit flex justify-evenly gap-2 lg:gap-4'>
                <button className=' btn btn-md sm:max-lg:btn-sm xl:btn-lg btn-outline hover:bg-black hover:text-white text-black rounded-full text-base sm:text-sm xl:text-xl'>Github</button>
                <button className=' btn btn-md sm:max-lg:btn-sm xl:btn-lg  btn-outline hover:bg-black hover:text-white text-black rounded-full text-base sm:text-sm xl:text-xl'>Live Demo</button>
              </div>
            </div>
            <div className='h-fit sm:w-fit  grid gap-3 lg:gap-4 xl:gap-6 p-5 border border-black rounded-3xl overflow-hidden justify-items-center sm:max-lg:col-span-2'>
              <Image className=' rounded-3xl justify-self-center sm:size-[200px] lg:size-[300px] xl:size-[400px]' src={project1}></Image>
              <h1 className=' w-fit  text-xl font-semibold sm:text-sm lg:text-lg xl:text-2xl'>Project One</h1>
              <div className=' w-fit h-fit flex justify-evenly gap-2 lg:gap-4'>
                <button className=' btn btn-md sm:max-lg:btn-sm xl:btn-lg btn-outline hover:bg-black hover:text-white text-black rounded-full text-base sm:text-sm xl:text-xl'>Github</button>
                <button className=' btn btn-md sm:max-lg:btn-sm xl:btn-lg  btn-outline hover:bg-black hover:text-white text-black rounded-full text-base sm:text-sm xl:text-xl'>Live Demo</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects