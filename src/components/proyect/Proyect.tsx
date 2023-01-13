import React from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

interface ProyectProps {
  title: string
  des: string
  github: string
  web: string
  img: string
}

const Proyect: React.FC<ProyectProps> = ({ title, des, github, web, img }) => {
  return (
    <div
      id='proyect'
      className={`mini:w-32 lg:w-72 mini:h-32 lg:h-72 cursor-pointer ${img} bg-cover bg-no-repeat
      rounded-xl minmd:w-44 minmd:h-44`}
    >
      <div
        className='w-full h-full flex flex-col items-center justify-center mini:gap-1 lg:gap-5 opacity-0
        transition-opacity duration-700 rounded-xl'>
        <h1 className='mini:text-sm lg:text-2xl'>{title}</h1>
        <p
          className='mini:text-[8px] lg:text-base text-center mini:w.w-full lg:w-3/4 mx-auto minmd:text-xs'
        >
          {des}
        </p>
        <div className='flex justify-around w-1/2'>
          <a href={github} target='_blank' rel="noreferrer">
            <AiFillGithub className='hover:fill-orange lg:text-3xl mini:text-xl' />
          </a>
          <a href={web} target='_blank' rel="noreferrer">
            <AiOutlineLink className='hover:fill-orange lg:text-3xl mini:text-xl' />
          </a>
        </div>
      </div>
    </div >
  )
}

export default Proyect
