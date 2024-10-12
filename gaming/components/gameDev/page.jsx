import Image from 'next/image'
import React from 'react'

const GameDev = () => {
  return (
    <div className=' h-[80vh] mt-20'>
        <div className='flex flex-col w-[40%] gap-8    h-full'>
            <div className='flex flex-col gap-6'>
            <h2 className='text-[#E87D0E]'>3D game Dev </h2>
            <h3 className='text-4xl font-bold w-[400px] leading-relaxed'>Work that we produce for our clients</h3>
            <p className='w-[70%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
            <button className='bg-[#DC7000] border transition-all duration-300 border-[#DC7000] hover:bg-transparent hover:text-[#DC7000] inline-block p-3 px-4 rounded-3xl w-fit'>Get more details</button>
        </div>
       <div className='absolute top-0 -z-1 right-96'>
       <Image
        src={"/game.png"}
        width={400}
        height={400}
        className=''
        />
       </div>
    </div>
  )
}

export default GameDev