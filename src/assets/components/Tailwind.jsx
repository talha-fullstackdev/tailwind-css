import React from 'react'

const Tailwind = () => {
  return (
    <div className=' container mx-auto bg-green-300 md:bg-slate-700 lg:bg-red-400 md:text-white lg:text-black text-center flex flex-wrap flex-col gap-4 md:flex-row md:justify-around lg:mt-10 md:p-4 lg:p-6 lg:justify-between'>
        <h1 className='md:text-2xl lg:text-4xl text-xl'>tailwind logo</h1>
        <ul className='text-center md:flex md:text-2xl lg:text-4xl text-xl flex flex-col gap-2 md:flex-row '>
            <li className='md:px-4 lg:px-2 '>home</li>
            <li className='md:px-4 lg:px-2'>about</li>
            <li className='md:px-4 lg:px-2'>contact</li>
            <li className='md:px-4 lg:px-2'>Address</li>
            <li className='md:px-4 lg:px-2'>services</li>
        </ul>
    </div>
  )
}

export default Tailwind