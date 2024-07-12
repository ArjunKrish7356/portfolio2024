import React from 'react'

function Experience() {
  return (
    <div className=' bg-green-200 h-[150vh] w-full flex flex-col items-center text-black'>
        <div className=' bg-red-200 title flex flex-col gap-1 sm:gap-0 w-full h-[6%] sm:h-[10%] md:h-[9%]  lg:h-[8%] 2xl:h-[6%] justify-end'>
            <h2 className=' text-gray-600 text-md sm:text-xs md:text-sm lg:text-base xl:text-xl text-center'>Explore my</h2>
            <h1 className=' text-black text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-center'>Experience</h1>
        </div>
        <div className='bg-blue-100 flex flex-col  w-full p-5 gap-3'>
            <div className=' grow bg-purple-300 rounded-3xl flex flex-col justify-cente'>
                <h1>Frontend Development</h1>
                
                <div></div>
            </div>
            <div className='bg-purple-300 rounded-3xl'></div>
        </div>
    </div>
  )
}

export default Experience