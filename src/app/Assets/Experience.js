import React from 'react'

function Experience() {
  return (
    <div className=' bg-green-200 min-h-[150vh] w-full flex flex-col items-center text-black'>
        <div className=' w-full bg-yellow-300 grid grid-cols-1 place-items-center py-[5%] gap-3 '>
            <h1 className=' bg-blue-300 text-gray-600 text-md xl:text-xl'>Explore my</h1>
            <h1 className=' bg-purple-300 text-black text-3xl xl:text-5xl font-semibold'>Experience</h1>
        </div>
        <div className='bg-blue-100 flex flex-col grow w-full p-5 gap-3'>
            <div className=' grow bg-purple-300 rounded-3xl flex justify-cente'>
                <h1>Frontend Development</h1>
                <div></div>
            </div>
            <div className=' grow bg-purple-300 rounded-3xl'></div>
        </div>
    </div>
  )
}

export default Experience