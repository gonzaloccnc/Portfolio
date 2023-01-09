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
    <div id='proyect' className={`w-72 h-72 cursor-pointer ${img} bg-cover bg-no-repeat rounded-xl`}>
      <div
        className='w-full h-full flex flex-col items-center justify-center gap-5 opacity-0
        transition-opacity duration-700 rounded-xl'>
        <h1 className='text-2xl'>{title}</h1>
        <p className='text-center w-3/4 mx-auto'>{des}</p>
        <div className='flex justify-around w-1/2'>
          <a href={github} target='_blank' rel="noreferrer">
            <AiFillGithub fontSize='30' className='hover:fill-orange' />
          </a>
          <a href={web} target='_blank' rel="noreferrer">
            <AiOutlineLink fontSize='30' className='hover:fill-orange' />
          </a>
        </div>
      </div>
    </div >
  )
}

export default Proyect
