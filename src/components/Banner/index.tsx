import React from 'react'

export default function Banner() {
  return (
    <div className='w-full grid sm:grid-cols-45-55 lg:grid-cols-2 items-center py-8 '>
        <img src='/images/notepad.png' className='sm:w-1/2 md:w-1/4 justify-self-end'/>
        <h1 className='md:text-4xl sm:text-2xl font-banner ml-4 my-auto h-auto'>Notepad</h1>
    </div>
  )
}
