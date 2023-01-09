import React from 'react'

interface ArrowProps {
  year: number
  title: string
  desc: string
}

const Arrow: React.FC<ArrowProps> = ({ year, title, desc }) => {
  return (
    <div className='flex gap-10 items-start'>
      <p
        className='bg-night-soft relative text-center font-bold leading-8 w-20 h-8
          before:absolute before:left-20 before:border-[16px] before:border-transparent
          before:border-l-night-soft'
      >
        {year}
      </p>
      <div className='flex items-center justify-center flex-col gap-5'>
        <div className='w-7 h-7 bg-yellow-400 rounded-full shadow-lg shadow-red-400'></div>
        <div className='w-1 h-14 bg-white'></div>
      </div>
      <div>
        <h1 className='text-3xl'>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Arrow
