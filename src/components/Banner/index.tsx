import React from 'react'

export default function Banner() {
  return (
    <div className='w-full grid grid-cols-2 items-center py-8 '>
        <img src='/images/notepad.png' className='w-1/4 justify-self-end'/>
        <h1 className='text-4xl font-banner ml-4'>Notepad</h1>
    </div>
  )
}
