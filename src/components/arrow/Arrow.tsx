import React from 'react'

interface ArrowProps {
  year: number
  title: string
  desc: string
}

const Arrow: React.FC<ArrowProps> = ({ year, title, desc }) => {
  return (
    <div className='flex mini:gap-4 md:gap-10 items-start'>
      <p
        className='dark:bg-night-soft bg-blue before:border-l-blue relative text-center
        font-bold leading-8 mini:w-7 mini:h-4 md:text-base md:w-20 md:h-8 before:absolute
        md:before:left-20 md:before:border-[16px] mini:before:left-6 before:border-transparent
        dark:before:border-l-night-soft mini:text-xs mini:before:border-[8px]'
      >
        {year}
      </p>
      <div className='flex items-center justify-center flex-col gap-5'>
        <div className='mini:w-3 lg:w-7 mini:h-3 lg:h-7 bg-yellow-400 rounded-full shadow-lg shadow-red-400'></div>
        <div className='mini:h-7 w-1 lg:h-14 dark:bg-white bg-blue'></div>
      </div>
      <div>
        <h1 className='mini:text-xl md:text-3xl'>{title}</h1>
        <p className='mini:text-xs md:text-base'>{desc}</p>
      </div>
    </div>
  )
}

export default Arrow
