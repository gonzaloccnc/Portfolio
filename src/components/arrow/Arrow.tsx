import React from 'react'

interface ArrowProps {
  year: number
  title: string
  desc: string
}

const Arrow: React.FC<ArrowProps> = ({ year, title, desc }) => {
  return (
    <div className='flex mini:gap-4 lg:gap-10 items-start'>
      <p
        className='bg-night-soft relative text-center font-bold leading-8 mini:w-7 mini:h-4 lg:text-base
          lg:w-20 lg:h-8 before:absolute lg:before:left-20 before:border-[16px] mini:before:left-6
          before:border-transparent before:border-l-night-soft mini:text-xs mini:before:border-[8px]'
      >
        {year}
      </p>
      <div className='flex items-center justify-center flex-col gap-5'>
        <div className='mini:w-3 lg:w-7 mini:h-3 lg:h-7 bg-yellow-400 rounded-full shadow-lg shadow-red-400'></div>
        <div className='mini:h-7 w-1 lg:h-14 bg-white'></div>
      </div>
      <div>
        <h1 className='mini:text-xl lg:text-3xl'>{title}</h1>
        <p className='mini:text-xs lg:text-base'>{desc}</p>
      </div>
    </div>
  )
}

export default Arrow
