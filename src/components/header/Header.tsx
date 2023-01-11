import React from 'react'
import Navbar from './Navbar'
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Header: React.FC = () => {
  return (
    <header className='w-full flex items-center justify-around py-5 border-b border-night-light bg-night fixed z-50'>
      <div>
        <h1
          className='flex gap-3 text-2xl text-blue-light cursor-pointer'
          onClick={() => { window.scrollTo(0, 0) }}
        >
          <span className='text-blue'>{'<G/>'}</span>
          Gonzalo Manco
        </h1>
      </div>
      <Navbar />
      <div className='flex gap-8 items-center'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/gonzalo-manco-garcia-6ab21924a'
          rel='noreferrer'
          className='flex gap-2 justify-center items-center hover:text-blue transition-colors
          font-normal relative before:content-[""] before:absolute before:w-1/2 before:h-[2px]
          before:bottom-0 before:bg-blue'
        >
          <AiFillLinkedin />
          LinkedIn
        </a>
        <a
          target='_blank'
          href='https://github.com/gonzaloccnc'
          rel='noreferrer'
          className='flex gap-2 justify-center items-center hover:text-blue transition-colors
          font-normal relative before:content-[""] before:absolute before:w-1/2 before:h-[2px]
          before:bottom-0 before:bg-blue'
        >
          <AiFillGithub />
          Github
        </a>
        <a
          href='#mailme'
        >
          <AiOutlineMail fill='#000000' />
        </a>
      </div>
    </header>
  )
}

export default Header
